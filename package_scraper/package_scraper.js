const util = require('util');
const fs = require('fs');
const child_process = require('child_process');
const axios = require('axios');
const readline = require('readline');

const DATAKEY = 'MercotuisComponentList'
const installer_base_url = 'http://download.qt.io/official_releases/online_installers/';
const installer_executables = {
  'win32': 'qt-unified-windows-x86-online.exe',
  'linux': 'qt-unified-linux-x64-online.run',
  'darwin': 'qt-unified-mac-x64-online.dmg'
};

main();
async function main() {
  try {
    const runner_os = process.platform;
    const installer_path = installer_executables[runner_os];
    const response = await downloadInstaller(installer_path);
    await saveInstaller(response.data, installer_path);
    await prepareInstaller(process.platform, installer_path);
    const output = await runInstaller(process.platform, installer_path);
    const package_list = parseOutput(output);
    await savePackageList(package_list);
    console.log('Listing Complete!');
  } catch (error) {
    console.log(`Listing failed: ${error}`);
  }
}

function downloadInstaller(installer_path) {
  const installer_url = installer_base_url + installer_path;
  console.log('Downloading Installer ' + installer_url);
  return axios.get(installer_url, {
    responseType: 'stream'
  });
}

function saveInstaller(data, installer_path) {
  console.log('Saving installer to ' + installer_path);
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(installer_path);
    data.pipe(file);
    file.on("finish", resolve);
    file.on("error", reject);
  });
}

function prepareInstaller(os, installer_path) {
  switch (os) {
    case 'linux':
      console.log('Setting installer permissions to 775');
      const chmod = util.promisify(fs.chmod);
      return chmod('./' + installer_path, 0o775);
      break;
    case 'darwin':
      console.log('Mounting ' + installer_path);
      // fs.chmod('./' + installer_path, 0o775);
      break;
    case 'win32':
      break;
    default:
      throw ("Unsuported OS: " + os);
  }
}

function runInstaller(os, installer_path) {
  return new Promise((resolve, reject) => {
    console.log('Running installer');
    var child;
    switch (os) {
      case 'linux':
        child = child_process.spawn('xvfb-run', ['./' + installer_path, '--verbose', '--script', __dirname+'/installer_control_script.qs']);
        break;
      case 'darwin':
        child = child_process.spawn('./' + installer_path, ['--verbose', '--script', __dirname+'/installer_control_script.qs']);
        break;
      case 'win32':
        child = child_process.spawn('./' + installer_path, ['--verbose', '--script', __dirname+'\\installer_control_script.qs']);
        break;
      default:
        throw ("Unsuported OS: " + os);
    }


    const rl = readline.createInterface(child.stdout);
    var data_line;
    rl.on('line', (line)=>{
      console.log(line);
      if (line.includes(DATAKEY)){
        data_line = line;
      }
    });

    child.on('close', ()=>{
      resolve(data_line);
    });
    child.on('error', reject);
  });
}

function parseOutput(output){
  console.log('Parsing Output');
  package_list_string = output.split(DATAKEY+'=')[1];
  return JSON.parse(package_list_string);
}

function savePackageList(package_array) {
  const writeFile = util.promisify(fs.writeFile);

  console.log('Save Package List to qt_package_list.json');
  const date_string = new Date().toJSON();
  const package_list = {date: date_string, packages:package_array};
  const package_list_json = JSON.stringify(package_list, null, 2);
  return writeFile('qt_package_list.json', package_list_json);
}
