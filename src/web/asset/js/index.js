/*jslint browser: true*/

//DOM宣告
var signup,loginAccount,loginPwd,signUpAccound,signUpPwd,signUpCheckPwd,email,nickname,birthday,gender;
var virifyAccount = {
    account:''
};
window.onload = function(){
    signup = document.getElementById("signup");
    signUpAccount=document.getElementsByName("account")[1];
    email=document.getElementsByName("email")[0];
    email.addEventListener("keyup",verifyEmail);
    signUpAccount.addEventListener("change",verifySignUpAccount);
};



//帳號畫面顯示
function myFunction() {
    signup.style.visibility = "visible";
}

function verifySignUpAccount(){
    console.log(signUpAccount.value);
    virifyAccount.account=signUpAccount.value;
    ajaxImple("../server/duplicateAccount.php","POST",virifyAccount,function (response){
        console.log(response);
        if(response===true){
            signUpAccount.className="valid";
        }else{
            signUpAccount.className="invalid";
        }
    });
}
//驗證輸入資料正確性
function verifyEmail(){
    if(email.value.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)!=-1){
        email.className="valid";
    }else{
        email.className="invalid";
    }
}
