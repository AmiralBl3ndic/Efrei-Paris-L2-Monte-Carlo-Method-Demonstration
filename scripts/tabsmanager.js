/**
 * Camille BRIAND <contact@camillebriand.fr> - 2018
 *
 * This is a really simple tabs manager using the photon CSS framework for electron
 * To make it works, you have to follow a few rules:
 *      1) Use the photon CSS framework
 *      2) Have your tabs organized this way:
 *          <div class="tab-item">
 *              <span class="icon icon-foo"></span>
 *              <span class="tab-text">bar</span>
 *          </div>
 *      3) Have your different layouts (tab content) inside div labelled with id="window-section-AssociatedTabName"
 *         /!\ BEWARE /!\ This is case sensitive
 */

const $ = require("jquery");

let tabsEnabled = false;
let activeTab = undefined;

function enableTabs () {
	activeTab = $(".tab-group > .active");
	let tabs = $(".tab-item");
	
	let tab;
	for (tab = 0; tab < tabs.length; tab++) {
		$(tabs[tab]).click(function () {
			$(this).addClass("active");
			$(activeTab).removeClass("active");
			
			$("#window-section-" + $(activeTab).children(".tab-text").text()).addClass("hide");
			$("#window-section-" + $(this).children(".tab-text").text()).removeClass("hide");
			
			activeTab = this;
		});
	}
	
	tabsEnabled = true;
}


function disableTabs () {
	if (tabsEnabled) {
		let tabs = $(".tab-item");
		
		tabs.off();
		
		tabsEnabled = false;
	}
}


function setActive (tabName) {
	if (tabsEnabled) {
		let content = $("#window-section-" + tabName);
		let tabs = $(".tab-item");
		
		let tab = undefined;
		for (let i in tabs) {
			if ($(tabs[i]).children(".tab-text").text() === tabName) {
				tab = tabs[i];
			}
		}
		
		if (content !== undefined && tab !== undefined) {
			$(tab).addClass("active");
			$(activeTab).removeClass("active");
			
			$("#window-section-" + $(activeTab).children(".tab-text").text()).addClass("hide");
			$(content).removeClass("hide");
			
			activeTab = tab;
		}
	}
}


module.exports.enableTabs = enableTabs;
module.exports.disableTabs = disableTabs;
module.exports.setActive = setActive;