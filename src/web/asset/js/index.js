/*jslint browser: true*/

//DOM宣告
var signup,signupBtn,loginAccount,loginPwd,signUpAccound,signUpPwd,signUpCheckPwd,email,nickname,birthday,gender;
var virifyAccount = {
    account:''
};
var signUpContent = {
    account:false,
    password:false,
    email:false,
    nickname:false,
    birthday:false
}
//導致髒亂的flag
var clickBirthdayCount=false;
window.onload = function(){
    signup = document.getElementById("signup");
    signupBtn = document.getElementById("signupBtn");
    signUpAccount=document.getElementsByName("account")[1];
    signUpPwd=document.getElementsByName("password")[1];
    signUpCheckPwd=document.getElementsByName("check-password")[0];
    email=document.getElementsByName("email")[0];
    nickname=document.getElementsByName("nickname")[0];
    birthday=document.getElementsByName("birthday")[0];
    signUpAccount.addEventListener("change",verifySignUpAccount);
    signUpPwd.addEventListener("input",verifySignUpPwd);
    signUpCheckPwd.addEventListener("input",verifySignUpPwd);
    email.addEventListener("input",verifyEmail);
    nickname.addEventListener("input",verifyNickname);
    birthday.addEventListener("input",verifyBirthday);
    birthday.addEventListener("click",clickBirthday);
    signupBtn.addEventListener("click",submit);
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
        signUpContent.account=true;
        }else{
            signUpAccount.className="invalid";
        signUpContent.account=false;
        }
    });
}

function verifySignUpPwd(){
    if(signUpCheckPwd.value==="" || signUpPwd.value===""){
        signUpPwd.className="invalid";
        signUpCheckPwd.className="invalid";
        signUpContent.password=false;
    }else if(signUpCheckPwd.value === signUpPwd.value){
        signUpPwd.className="valid";
        signUpCheckPwd.className="valid";
        signUpContent.password=true;
    }else{
        signUpPwd.className="invalid";
        signUpCheckPwd.className="invalid";
        signUpContent.password=false;
    }
}
//驗證輸入資料正確性
function verifyEmail(){
    if(email.value.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)!=-1){
        email.className="valid";
        signUpContent.email=true;
    }else{
        email.className="invalid";
        signUpContent.email=false;
    }
}
function verifyNickname(){
    if(nickname.value.search(/^[^%&`』<>,;=?$\x22]+$/)!=-1){
        nickname.className="valid";
        signUpContent.nickname=true;
    }else{
        nickname.className="invalid";
        signUpContent.nickname=false;
    }
}
function clickBirthday(){
    if(clickBirthdayCount===false){
        birthday.className="invalid";
        clickBirthdayCount=true;
    }else{
        return;
    }
}
function verifyBirthday(){
    if(birthday.value==""){
        birthday.className="invalid";
        signUpContent.birthday=false;
    }else{
        birthday.className="valid";
        signUpContent.birthday=true;
    }
}
function submit(){
    if(signUpContent.account===false||signUpContent.birthday===false
       ||signUpContent.email===false||signUpContent.password===false
      ||signUpContent.nickname===false){
        return;
    }else{

    }
}
