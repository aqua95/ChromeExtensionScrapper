// Inject the payload.js script into the current tab after the popout has loaded
//window.addEventListener('load', function (evt) {
//	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
//		file: 'payload.js'
//	});;
//});

// Listen to messages from the payload.js script and write to popout.html
//chrome.runtime.onMessage.addListener(function (message) {
//	document.getElementById('pagetitle').innerHTML = message;
//});

document.addEventListener('DOMContentLoaded',function(){document.querySelector('button').addEventListener('click',onclick, false)
  
  function onclick(){
	chrome.tabs.query({currentWindow:true, active: true},
	function(tabs){
		chrome.tabs.sendMessage(tabs[0].id,'hi')
	})
		
  }
}, false)