const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

function createWindow(){
    const win = new BrowserWindow({
        width: 1000,
        heigh: 800,
        minWidth: 500,
        minHeight: 400,
        frame: false,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,

        }
    })

    Window.loadFile("index.html")



app.whenReady().then(() => (
    createWindow()
))

ipcMain.on("minimizedApp", () =>(
    win.minimize
))
    
}    