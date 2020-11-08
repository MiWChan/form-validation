const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    //add load the index.html of the page
    win.loadFile('index.html')

    //open DevTools
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

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