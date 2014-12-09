/*jslint browser: true*/

//DOM宣告
var signup,account,password,checkPassword,email,nickname,birthday,gender;
window.onload = function(){
    signup = document.getElementById("signup");

    email=document.getElementsByName("email")[0];
    email.addEventListener("keypress",verifyEmail);
};




//帳號畫面顯示
function myFunction() {
    signup.style.visibility = "visible";
}
//驗證email正確性
function verifyEmail(){
    console.log("asdf");
}
