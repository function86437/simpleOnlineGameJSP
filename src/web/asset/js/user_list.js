/*
*   refresh user list
*   @version 1.0
*/
(function refreshUserList() {

    //do something every three seconds
    setInterval(function(){
        var object;
        ajaxImple("../server/showUserList.php","post",object,callback);


    },3000);
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
        userList.removeChild(scroll);
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
