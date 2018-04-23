const exporter = module.exports = {};

exporter.rootDir = __dirname;

exporter.verbose = false;


exporter.mainWindow = {
	window: undefined,
	
	properties: {
		width: 1200,
		height: 900,
		
		frame: false,
		
		movable: true,
		resizable: true,
		fullscreenable: true
	},
	
	name: "Main window",
	
	url: "file://" + exporter.rootDir + "/views/home.html"
};
