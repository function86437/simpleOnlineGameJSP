/*
*   refresh user list
*   @version 1.0
*/
(function refreshUserList() {

    var object;
    ajaxImple("../server/showUserList.php","post",object,callback);
    //do something every three seconds
    setInterval(function(){

        ajaxImple("../server/showUserList.php","post",object,callback);


    },10000);
})();

/*
*   callback function
*   @version 1.0
*   @param response
*/
function callback(response) {
    var userList = document.getElementById('user-list');
    var scroll = document.getElementById('scroll');

    //if already exists,then remove
    if(scroll != null) {
        scroll.innerHTML = "";
    }

    var users = JSON.parse(response);
    for(var i = 0 ; i < users.length ; i ++){
        console.log(users);
        var node = document.createElement('p');
        node.setAttribute("id","user"+i);
        node.innerHTML = users[i]['account'];
        scroll.appendChild(node);
    }
    userList.appendChild(scroll);
}
