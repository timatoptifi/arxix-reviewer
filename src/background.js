'use strict';
import web3 from 'web3';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi ${
      sender.tab ? 'Con' : 'Pop'
    }, my name is Tim. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    console.log(web3);
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

    // Send a response message
    sendResponse({
      message,
    });
  }
  if (request.type === 'BENSON') {
    const message = `Hi ${
      sender.tab ? 'Con' : 'Pop'
    }, my name is Tim. I am from Background. It's great to hear from you.`;

    const test = new web3();
    console.log(test);
    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});
