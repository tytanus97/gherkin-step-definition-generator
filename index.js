const electron = require('electron')
const { ipcMain, Menu, MenuItem, screen } = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let mainWindow
let devToolsEnabled = true

app.on('ready', createWindow)

function createWindow() {
    mainWindow = new BrowserWindow({
        show: false,
        minHeight: 700,
        minWidth: 1260,
       /*  frame: false,
		thickFrame: false, */
        title: 'Gherkin step definition generator',
        backgroundColor: '#fff',
        webPreferences: {
            nodeIntegration: true, // required to use ipcRenderer and iohook in electron >= 5.0.0
            contextIsolation: false,
            enableRemoteModule: true,
        },
    })

    mainWindow.setMinimizable(false)
	mainWindow.maximize()

    mainWindow.loadURL('http://localhost:4200')

    mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})

    //mainWindow.setMenu(null)

    if (devToolsEnabled) {
		mainWindow.webContents.openDevTools({ mode: 'detach' })
	}
}

