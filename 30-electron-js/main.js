const { app, BrowserWindow, globalShortcut } = require('electron')
const config = require('./config')

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden',
        alwaysOnTop: 'true',
        webPreferences: {
            nodeIntegration: true
        }
    })

    //add load the index.html of the page
    win.loadURL(config.url)
}

function toggleDevTools() {
    win.webCOntents.toggleDevTools()
}

function createShortcuts() {
    globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
}

app.whenReady()
    .then(createWindow)
    .then(createShortcuts)

app.on('window-all-closed', () => {
    if(process.platform ==! 'darwin'){
        app.quit()
    }
})

app.on('active', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})