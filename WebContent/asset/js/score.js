(function score(){
    ajaxImple("../server/getScore.php","post","",callback);
})();

function callback(response) {
    document.getElementById('board').innerHTML = "";
    document.getElementById('board').innerHTML = response;

    /*var div = document.createElement('div');
    t = document.createTextNode(response['id'])*/

}
