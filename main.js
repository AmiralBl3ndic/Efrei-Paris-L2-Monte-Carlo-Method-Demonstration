const electron = require("electron");  // Main dependency

// So that we do not have to write electron.something later
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

// Constants
const cst = require("./constants");
const verbose = cst.verbose;


app.on("ready", () => {
	if (verbose)
		console.log("App ready, creating main window...");
	
	let mainWindow;
	
	mainWindow = new BrowserWindow(cst.mainWindow.properties);
	
	mainWindow.loadURL(cst.mainWindow.url);
	
	console.log(cst.mainWindow.url);
	
	mainWindow.on("closed", () => {
		mainWindow = null;
	});
	
	cst.mainWindow.window = mainWindow;
});

