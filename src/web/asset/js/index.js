/*jslint browser: true*/

//DOM宣告
var signup,account,password,checkPassword,email,nickname,birthday,gender;
window.onload = function(){
    signup = document.getElementById("signup");
    email=document.getElementsByName("email")[0];
    email.addEventListener("keyup",verifyEmail);
};



//帳號畫面顯示
function myFunction() {
    signup.style.visibility = "visible";
}
//驗證輸入資料正確性
function verifyEmail(){
    if(email.value.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)!=-1){
        email.className="valid";
    }else{
        email.className="invalid";
    }
}
