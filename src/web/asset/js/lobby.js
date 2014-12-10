var createRoomName, createRoomBtn, refreshListBtn, leaderboardBtn,roomListDom;
var alertContent = {
    dom: null,
    btnDom: null,
    title: ""
};
window.onload = function () {
    createRoomName = document.getElementById("createRoomName");
    createRoomBtn = document.getElementById("create-room-btn");
    refreshListBtn = document.getElementById("refresh-list-btn");
    alertContent.btnDom = document.getElementById("alert-btn");
    alertContent.dom = document.getElementsByClassName("alert")[0];
    roomListDom=document.getElementById("room-list");
    showRoom();
};

document.addEventListener("click", function (Event) {
    console.log(Event.target.id);
    switch (Event.target.id) {
    case "create-room-btn":
        createRoom();
        break;
    case "refresh-list-btn":
        showRoom();
        break;
    case "leaderboard-btn":

        break;
    case "alert-btn":
        closeAlert();
        break;
    default:
        break;
    }
}, true);

function logout() {
    document.location.href = "../server/logout.php";
}

function createRoom() {
    var room = {
        roomName: String(createRoomName.value),
        gameMode: 0
    };
    console.log(room.name);
    ajaxImple("../server/createRoom.php", "POST", room, function (response) {
        console.log(response);
        if (response === "true") {
            showAlert("Success!");
            document.location.href = "game.php";
        } else {
            showAlert("Fail!");
            showRoom();
        }
    });
}
function showRoom(){
    ajaxImple("../server/showRoom.php", "POST", "" , function (response) {

        var roomList=JSON.parse(response);
        roomListDom.innerHTML='<div id="row" class="list-title pool"><div class="list number">number</div><div class="list game-mode">game-mode</div><div class="list room-name">room name</div><div class="list host">host</div><div class="list state">state</div></div>';
        for(var i=0;i<response.length;i++){ addList(i,roomList[i].room_name,roomList[i].game_mode,roomList[i].nickname,roomList[i].state);
        }
    });
}
function addList(num,roomName,gameMode,player1_id,state){
    var t;
    num+=1;
    var row=document.createElement('div');
    row.setAttribute("id","row"+num);
    row.setAttribute("class","list-row pool");
    row.setAttribute("onclick","joinRoom(this)");
    var rowContentNum = document.createElement('div');
    var rowContentRoomName = document.createElement('div');
    var rowContentGameMode = document.createElement('div');
    var rowContentHost = document.createElement('div');
    var rowContentState = document.createElement('div');
    t=document.createTextNode(num);
    rowContentNum.setAttribute("class","list number");
    rowContentNum.appendChild(t);
    row.appendChild(rowContentNum);
    //
    t=document.createTextNode("RPS");
    rowContentGameMode.setAttribute("class","list game-mode");
    rowContentGameMode.appendChild(t);
    row.appendChild(rowContentGameMode);
    //
    t=document.createTextNode(roomName);
    rowContentRoomName.setAttribute("class","list room-name");
    rowContentRoomName.appendChild(t);
    row.appendChild(rowContentRoomName);
    //
    t=document.createTextNode(player1_id);
    rowContentHost.setAttribute("class","list host");
    rowContentHost.appendChild(t);
    row.appendChild(rowContentHost);
    //
    t=document.createTextNode(state);
    rowContentState.setAttribute("class","list state");
    rowContentState.appendChild(t);
    row.appendChild(rowContentState);

    roomListDom.appendChild(row);

}
function showAlert(title) {
    alertContent.title = title;
    alertContent.dom.childNodes[1].childNodes[1].innerHTML = alertContent.title;
    alertContent.dom.style.display = "inline";
}

function closeAlert() {
    if(alertContent.title==="Success!"){

    }
    alertContent.dom.style.display = "none";
}
function joinRoom(event){
//    "String(event.childNodes[3].innerHTML)"
    var join = {
        player1_id:"1234asdf"
    };
    ajaxImple("../server/joinRoom.php", "POST", join, function (response) {
        console.log(response)
        if (response === "true") {
            showAlert("Success!");
        } else {
            showAlert("Fail!");
        }
    });
}
