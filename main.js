var content = document.getElementById("content");
var next = document.getElementById("nextPage");
var prev = document.getElementById("prevPage");
var testing = true;
var instragramFeed = {};


function loadEverything() {

    if (testing === false){
        content.appendChild(propellerBannerAd);
    }
    instagramAPI();
}
window.onload = loadEverything;

var params = {
    URL: 'http://instagr.am/p/fA9uwTtkSN/',
    HIDECAPTION: "false",
    OMITSCRIPT: "true",
    CALLBACK:""
}
var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=8521258789.e9bc9a5.cb1b6d0891e84282b2aaa36959ad7a96";
function instagramAPI (){
    $.getJSON(url, function (data) {
        instragramFeed = data.data;
        for (var i = 0; i < 7; i++){
            var container = document.getElementById('insta-feed');
            var imgURL = instragramFeed[i].images.standard_resolution.url;
            var div = document.createElement('div');
            div.setAttribute('class','instapic');
            container.appendChild(div);
            var img = document.createElement('img');
            img.setAttribute('src',imgURL)
            div.appendChild(img);            
        }
        var buttonDiv = document.getElementById("buttonDiv");
        
        var next = document.createElement("a");
        next.setAttribute = ('id','nextPage');
        next.setAttribute = ('class','next');
        next.innerHTML = "Next &raquo;";

        var prev = document.createElement("a");
        prev.setAttribute = ('id','prevPage')
        prev.setAttribute = ('class','previous');
        prev.innerHTML = "&laquo; Previous";
        buttonDiv.appendChild(prev);
        buttonDiv.appendChild(next);
    });
}
 
function nextPage (){

}
function prevPage (){
    
}
next.addEventListener('click', nextPage);
prev.addEventListener('click',prevPage);