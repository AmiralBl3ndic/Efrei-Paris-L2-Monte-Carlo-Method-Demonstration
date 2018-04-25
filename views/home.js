const cst = require("./../constants");
const tabs = require("./../scripts/tabsmanager");
const $ = require("jquery");

const remote = require("electron").remote;

tabs.enableTabs();



// P5 functions
function setup () {
	
	let canvas = createCanvas($(window).width(), $(window).height() - $("header").height());
	
	canvas.parent("window-section-Canvas");

	background(120, 120, 120);
}

function draw () {
	if (mouseIsPressed) {
		fill(0);
		
		ellipse(mouseX, mouseY, 25, 25);
	}
}