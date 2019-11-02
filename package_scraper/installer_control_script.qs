// Other scripts can be referenced at:

// https://github.com/wireshark/wireshark/blob/master/tools/qt-installer-windows.qs
// https://github.com/appveyor/build-images/blob/0d76961abbd8208c709baa89aa1cfbb5778bd17c/scripts/Windows/qt-installer-windows.qs
// https://github.com/benlau/qtci/blob/master/bin/extract-qt-installer

/*
 * Qt Installer script that lists all available packages
 */

function Controller() {
    installer.autoAcceptMessageBoxes();
}

Controller.prototype.WelcomePageCallback = function() {
    console.log("Step: " + gui.currentPageWidget());
    gui.clickButton(buttons.NextButton, 1000);
};

Controller.prototype.CredentialsPageCallback = function() {
    console.log("Step: " + gui.currentPageWidget());
    gui.clickButton(buttons.NextButton);
};

Controller.prototype.IntroductionPageCallback = function() {
    console.log("Step: " + gui.currentPageWidget());
    gui.clickButton(buttons.NextButton);
};

Controller.prototype.DynamicTelemetryPluginFormCallback = function() {
    var widget = gui.currentPageWidget();
    console.log("Step: " + widget);
    widget.TelemetryPluginForm.statisticGroupBox.disableStatisticRadioButton.checked = true;
    gui.clickButton(buttons.NextButton);
}

Controller.prototype.TargetDirectoryPageCallback = function() {
    console.log("Step: " + gui.currentPageWidget());
    gui.clickButton(buttons.NextButton);
};

Controller.prototype.ComponentSelectionPageCallback = function() {
    console.log("Step: " + gui.currentPageWidget());
    var page = gui.currentPageWidget();
    page.deselectAll();

    // for(var key in page){
    //   console.log(key);
    // }
    
    var components = installer.components();
    var pretty_component_list=[];
    for (var i = 0; i < components.length; i++) {
         pretty_component_list.push({name: components[i].name, displayName: components[i].displayName, dependencies: components[i].dependencies});
    }
    console.log("MercotuisComponentList="+JSON.stringify(pretty_component_list));
    gui.clickButton(buttons.CancelButton);
};
