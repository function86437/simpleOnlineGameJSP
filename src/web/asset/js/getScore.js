/*
*   get score in leaderboard
*   @version 1.0
*/
function getScore() {
    location.href = "./leaderboard.html";


}

(function score(){
    ajaxImple("../server/getScore.php","post","",callback);
})();

function callback(response) {
    document.getElementById('board').innerHTML = response;
    console.log(response);
}
