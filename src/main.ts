import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as url from "url";
import * as list from "./main/list";

let mainWindow: BrowserWindow;

/**
 * Setup a new window and load the index page
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
  });
  
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "../index.html"),
    protocol: "file:",
    slashes: true,
  }));

  mainWindow.webContents.openDevTools();

  // handle closing the window
  mainWindow.on("close", () => {
    mainWindow = null;
  });
}

ipcMain.on("load-file", (event: Electron.Event, args: any) => {
  let data = list.loadList();
  event.returnValue = data.toString();
});

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});