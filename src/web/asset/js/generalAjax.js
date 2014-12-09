/*  Object type example
*               {
*                  "acc" : "value/obj",
*                  "key" : "value/obj",
*                  "key" : "value/obj"
*               }
*/



/*
*   callback function example
*   @param response is xmlhttp.responseText
*
*   function callback(response){
*       document.getElementById('XXXX').innerHTML = response;
*   }
*/

/*
*   ajax
*   @param url url to backend (ie. XXX.php)
*   @param method POST/GET
*   @param object request
*   @param callback ajax return function
*/

function ajaxImple(url, method, object, callback) {
    var xmlhttp = null;
    if (window.XMLHttpRequest) {

        //code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {

        //code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //ajax return
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseText);
        }
    };

    if (method == "GET" || method == "get" ) {

        //start connection
        xmlhttp.open("GET", url + split(object), true);

        //send request
        xmlhttp.send();
    } else if (method == "POST" || method == "post" ) {

        //start connection
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        //send request
        xmlhttp.send(split(object));
        //xmlhttp.send("account=a");
    } else {
        xmlhttp = null;
    }

}


/*
*   split json
*   @param object ajax request
*   @return string (ie.account=asdf&password=asdf)
*/
function split(object) {
    var str = "";
    var boo = false;
    for (var obj in object) {
        if(boo){
            str+="&";
        }
        str += obj + "=" + object[obj];
        boo = true;
    }
    console.log(str);
    return str;
}

