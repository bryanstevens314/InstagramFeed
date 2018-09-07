let content = document.getElementById("content");

let testing = true;

function loadEverything() {
    if (testing === false){
        content.appendChild(propellerBannerAd);
    }
    instagramAPI();
}

window.onload = loadEverything;

let params = {
    URL: 'http://instagr.am/p/fA9uwTtkSN/',
    HIDECAPTION: "false",
    OMITSCRIPT: "true",
    CALLBACK:""
}
let url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=8521258789.e9bc9a5.cb1b6d0891e84282b2aaa36959ad7a96";
function instagramAPI (){
    $.getJSON(url, function (data) {
        console.log(data);
        for (let i = 0; i < data.data.length; i++){
            var container = document.getElementById('insta-feed');
            var imgURL = data.data[i].images.standard_resolution.url;
           
            var div = document.createElement('div');
            div.setAttribute('class','instapic');
            container.appendChild(div);
            var img = document.createElement('img');
            img.setAttribute('src',imgURL)
            div.appendChild(img);            
        }
    });
}

