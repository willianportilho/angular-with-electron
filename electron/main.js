const { dir } = require('console');
const { app, BrowserWindow } = require('electron');
const { path, dirname } = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        },
    });

    win.loadURL('http://localhost:4200');
};

app.whenReady().then(createWindow);
