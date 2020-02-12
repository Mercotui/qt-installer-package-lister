# Qt Installer Package Lister

Update 12-02-2020:
This tool no longer works, due to Qt changing their distribution approach.
All binaries now require valid Qt Accounts to install.
A possible solution is to add support for passing account details via secrets,
but I currently have no intention of adding this.

This webapp lists available Qt Installer packages and their identifiers, hosted at [WIP](#).
It can be used to select a list of packages to install using [Install Qt Dev Action](https://github.com/Mercotui/install-qt-dev-action).

## Project Commands

To scrape the packages:
```
npm run scrape
```
To serve the site use the vuecli commands:
```
npm run serve
npm run build
npm run lint
```
