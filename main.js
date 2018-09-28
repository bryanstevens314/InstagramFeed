var content = document.getElementById('content');
var container = document.getElementById('insta-feed');
//Propeller ads native
var propellerNativeAd = document.createElement('script');
propellerNativeAd.setAttribute('async', 'async');
propellerNativeAd.setAttribute('data-cfasync', 'false');
propellerNativeAd.setAttribute('src', '//native.propellerads.com/1?z=2059928&eid=');
//Propeller ads Banner
var propellerBannerAd = document.createElement('script');
propellerBannerAd.setAttribute('async', 'async');
propellerBannerAd.setAttribute('data-cfasync', 'false');
propellerBannerAd.setAttribute('src', '//native.propellerads.com/1?z=1992444&eid=');

var next = document.createElement('a');
next.setAttribute = ('id', 'nextPage');
next.setAttribute = ('class', 'next');
next.innerHTML = 'Next &raquo;';

var prev = document.createElement('a');
prev.setAttribute = ('id', 'prevPage');
prev.setAttribute = ('class', 'previous');
prev.innerHTML = '&laquo; Previous';
var instagramFeed = [];
var clear = false;
var page = 1;
var testing = false;

function loadEverything() {
    window.open('http://go.pub2srv.com/afu.php?zoneid=2021129', '_blank');
    if (testing === false) {
        content.appendChild(propellerBannerAd);
    }
    instagramAPI();
}
window.onload = loadEverything;

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
            var imgURL = instagramFeed[i].images.standard_resolution.url;
            var div = document.createElement('div');
            div.setAttribute('class', 'instapic');
            container.appendChild(div);
            var img = document.createElement('img');
            img.setAttribute('src', imgURL);
            div.appendChild(img);

            if (testing === false) {
                if (i % 2 === 0) {
                    if (i !== 0) {
                        var div1 = document.createElement('div');
                        div1.setAttribute('class', 'instapic');
                        container.appendChild(div1);

                        div1.appendChild(propellerNativeAd);
                    }
                }
            }
        }
        var buttonDiv = document.getElementById('buttonDiv');

        buttonDiv.appendChild(prev);
        buttonDiv.appendChild(next);
    });
}

function nextPage() {
    var i = page * 7;
    if (Object.keys(instagramFeed).length > i) {
        page++;
        clear = true;
        instagramAPI();
    }
}

function prevPage() {
    if (page > 1) {
        page--;
        clear = true;
        instagramAPI();
    }
}
next.addEventListener('click', nextPage);
prev.addEventListener('click', prevPage);
