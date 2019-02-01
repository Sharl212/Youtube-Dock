/*global Android*/
const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
// const { Menu } = require('electron')

// const nativeMenus = [
//   {
//     label: 'About',
//     submenu: [
//       {
//         label: 'About',
//         click() {
//             createWindow()
//         }
//       }
//     ]
//   }
// ]

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nativeWindowOpen: true,
            preload: __dirname + '/preload.js'
        }
    });

    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    mainWindow.loadURL(startUrl);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

ipcMain.on('video-playing', (event, args) => {
    let display = electron.screen.getPrimaryDisplay();
    let height = display.bounds.height;
    let y = height - 390
    let x = 0

    mainWindow.setBounds({width: 580, height: 337}); // * resize the window
    mainWindow.setPosition(x, y) // * position to the left corner of the screen
    mainWindow.setAlwaysOnTop(true) // * make the window always on top
    mainWindow.setMovable(false) // * dock the window
    mainWindow.setResizable(false) // * user cant resize the window manually
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
module.exports = BrowserWindow