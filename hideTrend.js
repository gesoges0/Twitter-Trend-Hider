// targetRegions = $(document.body).find('.css-1dbjc4n.r-1ihkh82.r-1in3vh1.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x');
// targetRegions = $(document.body).find('.css-1dbjc4n.r-x572qd.r-1d6w8o1.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x')

// 2番目のsectionのclass名
targetRegionsClassName = $(document.body).find('section').eq(1).attr('class');
targetRegions = $(document.body).find('section.' + targetRegionsClassName);


targetRegions.eq(1).html(null);
targetRegions.eq(2).html(null);