'use strict';

function injectScript(file_path, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file_path);
  node.appendChild(script);
}

// Communicate with background file by sending a message
chrome.runtime.sendMessage(
  {
    type: 'GREETINGS',
    payload: {
      message: 'Hello, my name is Con. I am from ContentScript.',
    },
  },
  (response) => {
    console.log(response.message);
  }
);
injectScript(chrome.runtime.getURL('content.js'), 'body');

setTimeout(() => {
  chrome.runtime.sendMessage(
    {
      type: 'BENSON',
      payload: {
        message: 'Hello, my name is Con. I am from ContentScript.',
      },
    },
    (response) => {
      console.log(response.message);
    }
  );
}, 10000);
// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'COUNT') {
    console.log(`Current count is ${request.payload.count}`);
  }

  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  sendResponse({});
  return true;
});

chrome.runtime;

// ============== COMPONENTS START ==============

// document.body.prepend(commentModalBtn);
// document.body.prepend(container);

// ============== COMPONENTS END ==============
