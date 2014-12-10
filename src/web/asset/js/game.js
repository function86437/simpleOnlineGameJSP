var Server;
var card;

function log(text) {
    console.log(text);
}

function send(text) {
    Server.send('message', text);
}

window.onload = function () {
    log('Connecting...');
    Server = new FancyWebSocket('ws://www.tangsong.me:9300');
    card=document.getElementsByClassName("card");

    //Let the user know we're connected
    Server.bind('open', function () {
        log("Connected.");
    });

    //OH NOES! Disconnection occurred.
    Server.bind('close', function (data) {
        log("Disconnected.");
    });

    //Log any messages sent from server
    Server.bind('message', function (payload) {
        log(payload);
    });

    Server.connect();
};
