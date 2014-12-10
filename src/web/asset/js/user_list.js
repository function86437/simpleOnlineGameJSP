/*
*   refresh user list
*   @version 1.0
*/
(function refreshUserList() {
    //do something every three seconds
    //setInterval(function(){
        var object;
        ajaxImple("../server/showUserList.php","post",object,callback);


    //},3000);
})();


function callback(response) {
    var scroll = document.getElementById('scroll');
    var users = JSON.parse(response);
    for(var i = 0 ; i < users.length ; i ++){
        console.log(users);
        var node = document.createElement('p');
        node.setAttribute("id",i);
        node.innerHTML = users[i]['account'];
        scroll.appendChild(node);
    }
}
