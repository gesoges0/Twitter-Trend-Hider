// const 
const showBtnId = 'SHOW';
const hideBtnId = 'HIDE';

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

