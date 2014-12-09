var createRoomName, createRoomBtn, refreshListBtn, leaderboardBtn;
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
};

document.addEventListener("click", function (Event) {
    console.log(Event.target.id);
    switch (Event.target.id) {
    case "create-room-btn":
        createRoom();
        break;
    case "refresh-list-btn":
        break;
    case "leaderboard-btn":
        break;
    case "alert-btn":
        closeAlert();
        break;
    default:
        break;
    }
}, false);

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
        } else {
            showAlert("Fail!");
        }
    });
}
function showRoom(){
    ajaxImple("../server/showRoom.php", "POST", "" , function (response) {
        console.log(response);
    });
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
