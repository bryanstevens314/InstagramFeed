var content = document.getElementById('content');
var container = document.getElementById('insta-feed');

//Propeller ads Banner
var propellerBannerAd = document.createElement('script');
propellerBannerAd.setAttribute('async', 'async');
propellerBannerAd.setAttribute('data-cfasync', 'false');
propellerBannerAd.setAttribute('src', '//native.propellerads.com/1?z=1992444&eid=');

var instagramFeed = [];
var clear = false;
var page = 1;
var testing = false;

function loadEverything() {

    getPageNum(window.location.href);
    if (testing === false) {
        if (page > 1) {
            var ad = getNativeAd("//tharbadir.com/2?z=1991963");
            content.appendChild(ad);
        }
        content.appendChild(propellerBannerAd);
    }
    instagramAPI();
}
window.onload = loadEverything;

function getPageNum(url) {

    var id = url.substring(url.lastIndexOf('/') + 1);
    if (url.includes('?')) {
        var arr = id.split('?');
        var arr2 = arr[1].split("=");
        page = arr2[1];
        console.log(page);
    } else {
        page = 1;
    }

}

var params = {
    URL: 'http://instagr.am/p/fA9uwTtkSN/',
    HIDECAPTION: 'false',
    OMITSCRIPT: 'true',
    CALLBACK: '',
};
var url =
    'https://api.instagram.com/v1/users/self/media/recent/?access_token=8521258789.e9bc9a5.cb1b6d0891e84282b2aaa36959ad7a96';

function instagramAPI() {
    $.getJSON(url, function (data) {
        instagramFeed = data.data;
        var i = 0;
        var index = 7;
        if (page !== 1) {
            var x = page - 1;
            i = x * 7;
            index = page * 7;
            index -= 1;
        }
        if (clear === true) {
            clear = false;
            container.innerHTML = '';
            $('html, body').animate({
                    scrollTop: 0,
                },
                'fast'
            );
        }
        for (i; i < index; i++) {
            if (i === 0) {
                createNavigationDiv();
            } else {
                let j = i - 1;
                var imgURL = instagramFeed[j].images.standard_resolution.url;
                createImageWithURL(imgURL);
                if (testing === false) {
                    var y = j + 1;
                    if (y % 2 === 0) {
                        if (j !== 0) {
                            var div1 = document.createElement('div');
                            div1.setAttribute('class', 'instapic');
                            container.appendChild(div1);
                            var ad = getNativeAd();
                            div1.appendChild(ad);
                        }
                    }
                }
            }

        }
        createNavigationDiv();
    });
}

function createNavigationDiv() {
    var buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('id', 'buttonDiv');
    buttonDiv.setAttribute('class', 'buttons');
    container.appendChild(buttonDiv);
    var next = document.createElement('a');
    next.setAttribute = ('id', 'nextPage');
    next.setAttribute = ('class', 'next');
    next.innerHTML = 'Next &raquo;';

    var prev = document.createElement('a');
    prev.setAttribute = ('id', 'prevPage');
    prev.setAttribute = ('class', 'previous');
    prev.innerHTML = '&laquo; Previous';
    next.addEventListener('click', nextPage);
    prev.addEventListener('click', prevPage);
    buttonDiv.appendChild(prev);
    buttonDiv.appendChild(next);
}

function createImageWithURL(uri) {
    var div = document.createElement('div');
    div.setAttribute('class', 'instapic');
    container.appendChild(div);
    var img = document.createElement('img');
    img.setAttribute('src', uri);
    img.addEventListener('click', imgClicked);
    div.appendChild(img);
}

var count = 0;
var arr = ['//native.propellerads.com/1?z=2059928&eid=', '//native.propellerads.com/1?z=2062858&eid='];

function getNativeAd(uri) {
    var propellerNativeAd = document.createElement('script');
    if (uri) {
        //Propeller ads interstitial
        propellerNativeAd.setAttribute('async', 'async');
        propellerNativeAd.setAttribute('data-cfasync', 'false');
        propellerNativeAd.setAttribute('src', uri);
        count++;
    } else {
        //Propeller ads native
        propellerNativeAd.setAttribute('async', 'async');
        propellerNativeAd.setAttribute('data-cfasync', 'false');
        propellerNativeAd.setAttribute('src', arr[count]);
        count++;
    }
    return propellerNativeAd;
}

function imgClicked() {
    if (testing === false) {
        window.open('http://go.pub2srv.com/afu.php?zoneid=2021129', '_blank');
    }
}

function nextPage() {
    var i = page * 7;
    if (Object.keys(instagramFeed).length > i) {
        page++;
        window.location.replace("./?pageNum=" + page);

    }
}

function prevPage() {
    if (page > 1) {
        page--;
        window.location.replace("./?pageNum=" + page);
    }
}
