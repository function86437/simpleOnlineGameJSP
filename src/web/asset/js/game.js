var Server;
var card;
var player1, player2, rock, paper, scissors, send,player1Choose,player2Choose;
var player1Ready=false,player2Ready=false;
var round=0;
var player1Win=0,player2Win=0;
var domScore;
var domRound;
var myInfo = {
    nickname: "asdf"
}
var alertContent = {
    dom: null,
    btnDom: null,
    title: "Waiting..."
};

function log(text) {
    waitPlayer2(text);
}

function send(text) {
    Server.send('message', text);
}

function waitPlayer2(text) {
    var j = JSON.parse(text);
    if (j.host === myInfo.nickname) {
        alertContent.dom.style.display = "none";
        player2.childNodes[1].innerHTML = j.guest;
        if(j.ready===true){
            player2Ready=true;
            player2Choose=j.choose;
            chackWin();
        }
    }
    console.log(j);
}

window.onload = function () {
    rock = document.getElementById("rock");
    paper = document.getElementById("paper");
    scissors = document.getElementById("scissors");
    send = document.getElementById("send");
    alertContent.btnDom = document.getElementById("alert-btn");
    alertContent.dom = document.getElementsByClassName("alert")[0];
    player1 = document.getElementById("player1");
    player2 = document.getElementById("player2");
    domScore = document.getElementById("score-content");
    domRound = document.getElementById("round");
    player1.childNodes[1].innerHTML = myInfo.nickname;
    document.getElementById("alert-title").innerHTML = alertContent.title;
    alertContent.dom.style.display = "inline";
    console.log('Connecting...');

    Server = new FancyWebSocket('ws://www.tangsong.me:9300');

    card = document.getElementsByClassName("card");

    //Let the user know we're connected
    Server.bind('open', function () {
        console.log("Connected.");
    });

    //OH NOES! Disconnection occurred.
    Server.bind('close', function (data) {
        console.log("Disconnected.");
    });

    //Log any messages sent from server
    Server.bind('message', function (payload) {
        log(payload);
    });

    Server.connect();
};

var c;
document.addEventListener("click", function (e) {
    console.log(e.toElement.id);
    switch (e.toElement.id) {
    case "paper":
            rock.className="card";
            scissors.className="card";
            paper.className="card choose";
            player1.childNodes[3].innerHTML="✋";
            player1Choose="✋";
        break;
    case "scissors":
            rock.className="card";
            paper.className="card";
            scissors.className="card choose";
            player1.childNodes[3].innerHTML="✌";
            player1Choose="✌";
        break;
    case "rock":
            scissors.className="card";
            paper.className="card";
            rock.className="card choose";
            player1.childNodes[3].innerHTML="✊";
            player1Choose="✊";
        break;
    case "send":
            player1Ready=true;
            c = {
                "host":"1234asdf",
                "guest":"asdf",
                "ready":true,
                "choose":player1Choose
            };
            send(JSON.stringify(c));
            chackWin();
        break;
    default:
        break;
    }
}, false);

function chackWin(){
    if(player1Ready===true && player2Ready===true){
            round+=1;
        if(player1Choose===player2Choose){
            round+=1;
        }else if(player1Choose==="✋"&&player2Choose==="✊"){
            player1Win+=1;
        }else if(player1Choose==="✋"&&player2Choose==="✌"){
            player2Win+=1;
        }else if(player1Choose==="✊"&&player2Choose==="✌"){
            player1Win+=1;
        }else if(player1Choose==="✊"&&player2Choose==="✋"){
            player2Win+=1;
        }else if(player1Choose==="✌"&&player2Choose==="✋"){
            player1Win+=1;
        }else if(player1Choose==="✌"&&player2Choose==="✊"){
            player2Win+=1;
        }
        player1Ready=false;
        player2Ready=false;
        player2Choose="";
    }
    domScore.innerHTML=player1Win+"/"+player2Win;
    domRound.innerHTML=round+"/5";
    if(round===5){
        alert("asdf");
    }
}
