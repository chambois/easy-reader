
chrome.browserAction.onClicked.addListener(function(tab) {
  // load easyReader light-box
  chrome.tabs.executeScript({ code: '$("body").append("<div id=\'easy-reader\'><p>EasyReader</p></div>");' });
  //chrome.tabs.executeScript({ file: "test.js" });
});

