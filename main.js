const { app, BrowserWindow, ipcMain } = require("electron");
const contextMenu = require("electron-context-menu");

/**
 * Create the report window upon request
 */
function createReportWindow(arg) {
  const reportWin = new BrowserWindow({
    width: 900,
    height: 650,
    x: 20,
    y: 30,
    resizable: true,
    webPreferences: {
      nodeIntegration: true
    },
    show: false
  });

  reportWin.loadFile("./src/resultsWindow/index.html");
  reportWin.once("ready-to-show", () => {
    reportWin.webContents.send("load_results", arg);
    reportWin.show();
  });
  // reportWin.webContents.openDevTools();
}

/**
 * Create the main surchy window
 */
function createWindow() {
  //Create Context Menu - Right Click Options
  contextMenu({
    prepend: (defaultActions, params, browserWindow) => [],
    showLookUpSelection: false
  });

  // Create the browser window.
  const win = new BrowserWindow({
    width: 500,
    height: 650,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile("index.html");

  ipcMain.on("send_results", (event, arg) => {
    createReportWindow(arg);
  });
  // win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  app.quit();
});
