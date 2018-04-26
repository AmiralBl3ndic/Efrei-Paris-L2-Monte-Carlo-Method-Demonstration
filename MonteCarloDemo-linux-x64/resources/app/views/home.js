const cst = require("./../constants");
const tabs = require("./../scripts/tabsmanager");
const $ = require("jquery");
const rd = require("../scripts/random");

tabs.enableTabs();

const isDrawn =  (x, y) => {
	const index = (x + y * width) * 4;
	return pixels[index] === cst.colors.drawColor.r && pixels[index + 1] === cst.colors.drawColor.g && pixels[index + 2] === cst.colors.drawColor.b;
};


// P5 functions
function setup () {
	
	let canvas = createCanvas($(window).width(), $(window).height() - $("header").height());
	
	canvas.parent("window-section-Canvas");
	
	
	const cl = cst.colors.backgroundColor;
	background(cl.r, cl.g, cl.b);
}

function draw () {
	if (mouseIsPressed) {
		const cl = cst.colors.drawColor;
		fill(cl.r, cl.g, cl.b);
		
		ellipse(mouseX, mouseY, 75, 75);
	}
	
	loadPixels();
}


/**
 * VueJS application (to simplify rendering data
 */
let settingsApp = new Vue({
	el: "#window-section-Settings",
	
	data: {
		totalPixels: $(window).width() * ($(window).height() - $("header").height()),
		
		classicMethod: {
			drawnPixels: 0,
			
			executionTime: 0
		},
		
		MonteCarloMethod: {
			tries: 10000,
			
			detectedPixels: 0,
			
			calculatedArea: 0,
			
			executionTime: 0
		},
		
		time_conclusion: ""
	},
	
	
	methods: {
		runClassic: () => {
			settingsApp.classicMethod.drawnPixels = 0;
			
			let time = new Date().getTime();
			
			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					if (isDrawn(x, y)) {
						settingsApp.classicMethod.drawnPixels++;
					}
				}
			}
			
			settingsApp.classicMethod.executionTime = new Date().getTime() - time;
			
			if (settingsApp.MonteCarloMethod.executionTime !== 0 && settingsApp.classicMethod.executionTime !== 0 && settingsApp.MonteCarloMethod.executionTime > settingsApp.classicMethod.executionTime) {
				settingsApp.time_conclusion = "Classic method was " + (settingsApp.MonteCarloMethod.executionTime / settingsApp.classicMethod.executionTime).toFixed(2) + " times more efficient";
				$("#conclusions").removeClass("hide");
			}
		},
		
		
		runMonteCarlo: () => {
			settingsApp.MonteCarloMethod.detectedPixels = 0;
			
			let time = new Date().getTime();
			
			for (let i = 0; i < settingsApp.MonteCarloMethod.tries; i++) {
				let x = rd.randInt(0, width - 1);
				let y = rd.randInt(0, height - 1);
				
				if (isDrawn(x, y)) {
					settingsApp.MonteCarloMethod.detectedPixels++;
				}
			}
			
			const mc = settingsApp.MonteCarloMethod;
			mc.calculatedArea = Math.ceil((mc.detectedPixels / mc.tries) * settingsApp.totalPixels);
			
			mc.executionTime = new Date().getTime() - time;
			
			if (settingsApp.classicMethod.executionTime !== 0 && mc.executionTime !== 0 && mc.executionTime < settingsApp.classicMethod.executionTime) {
				settingsApp.time_conclusion = "Monte Carlo method was " + (settingsApp.classicMethod.executionTime / mc.executionTime).toFixed(2) + " times more efficient";
				$("#conclusions").removeClass("hide");
			}
		},
		
		
		runBoth: () => {
			settingsApp.runClassic();
			settingsApp.runMonteCarlo();
		}
	}
});
