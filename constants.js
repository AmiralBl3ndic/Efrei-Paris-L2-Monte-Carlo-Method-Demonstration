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
		fullscreenable: true,
		
		icon: __dirname + "/icon.png"
	},
	
	name: "Main window",
	
	url: "file://" + exporter.rootDir + "/views/home.html"
};



exporter.colors  = {
	backgroundColor: {
		r: 120,
		g: 120,
		b: 120
	},
	
	drawColor: {
		r: 0,
		g: 0,
		b: 0
	}
};

