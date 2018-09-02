let token = "";

function getToken (){
    var url = 'https://ssp.smartyads.com/api/token/get';
    var data = {
        email: 'mercedesguy6@gmail.com',
        password: 'Dasgeback3',
        time: 60
    };
    $.post(url, data, function(res){
        token = res.token;
        console.log(res.token);
        console.log(res.end);
    }, 'json');
}

function renewToken(){
    var url = 'https://ssp.smartyads.com/api/token/renew?token=' + token;
    var data = {
        time: 60
    };
    $.post(url, data, function(res){
        console.log(res.end);
    }, 'json');
}

function getInventory (){
    var url = 'https://ssp.smartyads.com/api/inventory/getlist?token=' + token;
    $.post(url, function(res){
        console.log(res);
    }, 'json');
}