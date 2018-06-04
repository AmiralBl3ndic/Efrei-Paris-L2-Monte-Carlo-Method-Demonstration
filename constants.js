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
		resizable: false,
		fullscreenable: false,

		icon: __dirname + "/icon.png"
	},

	name: "Main window",

	url: "file://" + exporter.rootDir + "/views/home.html"
};



exporter.colors  = {
	backgroundColor: {
		r: 0,
		g: 150,
		b: 0
	},

	drawColor: {
		r: 0,
		g: 0,
		b: 150
	}
};
