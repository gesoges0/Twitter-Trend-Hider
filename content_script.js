window.addEventListener("load", main, false);
function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 500);
    function jsLoaded() {
        chrome.storage.local.get('twitterTrendHiderFlag', (property) => {
            if ( property['twitterTrendHiderFlag'] == 'HIDE' ){
                targetRegionsClassName = $(document.body).find('section').eq(1).attr('class');
                targetRegions = $(document.body).find('section.' + targetRegionsClassName);
                targetRegions.eq(1).html(null);
                targetRegions.eq(2).html(null);
            }
        });
    }
}
