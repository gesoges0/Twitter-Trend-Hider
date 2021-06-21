// const 
const showBtnId = 'SHOW';
const hideBtnId = 'HIDE';


// css-1dbjc4n r-1ihkh82 r-1in3vh1 r-1867qdf r-1phboty r-rs99b7 r-1ifxtd0 r-1udh08x
// css-1dbjc4n r-x572qd r-1d6w8o1 r-1867qdf r-1phboty r-rs99b7 r-1ifxtd0 r-1udh08
// css-1dbjc4n r-x572qd r-1d6w8o1 r-1867qdf r-1phboty r-rs99b7 r-1ifxtd0 r-1udh08x
// css-1dbjc4n r-x572qd r-1d6w8o1 r-1867qdf r-1phboty r-rs99b7 r-1ifxtd0 r-1udh08x

if (document.getElementById( hideBtnId )){
    document.getElementById( hideBtnId ).addEventListener('click', () => {
        chrome.storage.local.set({'twitterTrendHiderFlag': 'HIDE'}, (property) => {
            chrome.tabs.query({active: true}, (tabs) => {
                let currentTab = tabs[0];
                chrome.tabs.executeScript(currentTab.id, {code: 'location.reload();'}, () => {
                });
            });
        });
    });
}

if (document.getElementById( showBtnId )){
    document.getElementById( showBtnId ).addEventListener('click', () => {
        chrome.storage.local.set({'twitterTrendHiderFlag': 'SHOW'}, (property) => {
            chrome.tabs.query({active: true}, (tabs) => {
                let currentTab = tabs[0];
                chrome.tabs.executeScript(currentTab.id, {code: 'location.reload();'}, () => {
                });
            });
        });
    });
}

// if (document.getElementById( hideBtnId )){
//     document.getElementById( hideBtnId ).addEventListener('click', () => {
//         chrome.storage.local.set({'twitterTrendHiderFlag': 'HIDE'}, () => {
//             chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
//                 let currentTab = tabs[0];
//                 hideTwitterTrend(currentTab);
//             });
//         });
//     });
// }

// if (document.getElementById( showBtnId )){
//     document.getElementById( showBtnId ).addEventListener('click', () => {
//         chrome.storage.local.set({'twitterTrendHiderFlag': 'SHOW'}, () => {
//             chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
//                 let currentTab = tabs[0];

//             });
//         });
//     });
// }



const hideTwitterTrend = async(tab) => {
    chrome.tabs.executeScript(tab.id, {file: 'jquery-3.6.0.min.js'}, () => {
        chrome.tabs.executeScript(tab.id, {file: 'hideTrend.js'}, () => {
        });
    });
}



// if (document.getElementById( hideBtnId )){
//     document.getElementById( hideBtnId ).addEventListener('click', () => {
        
//     });
// }