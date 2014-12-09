/*jslint browser: true*/

//DOM宣告
var signup, signupBtn, loginAccount, loginPwd, signUpAccount, signUpPwd, signUpCheckPwd, email, nickname, birthday, gender;
var virifyAccount = {
    account: ''
};
var signUpContent = {
    account: "",
    password: "",
    email: "",
    nickname: "",
    birthday: "",
    gender: "Male"
}
var alertContent = {
        dom: null,
        btnDom: null,
        title: ""
    }
    //導致髒亂的flag
var clickBirthdayCount = false;
window.onload = function () {
    signup = document.getElementById("signup");
    signupBtn = document.getElementById("signupBtn");
    loginAccount = document.getElementsByName("account")[0];
    loginPwd = document.getElementsByName("password")[0];
    signUpAccount = document.getElementsByName("account")[1];
    signUpPwd = document.getElementsByName("password")[1];
    signUpCheckPwd = document.getElementsByName("check-password")[0];
    email = document.getElementsByName("email")[0];
    nickname = document.getElementsByName("nickname")[0];
    birthday = document.getElementsByName("birthday")[0];
    gender = document.getElementsByName("gender")[0];
    alertContent.dom = document.getElementsByClassName("alert")[0];
    alertContent.btnDom = document.getElementById("alert-btn");
    signUpAccount.addEventListener("input", verifySignUpAccount);
    signUpPwd.addEventListener("input", verifySignUpPwd);
    signUpCheckPwd.addEventListener("input", verifySignUpPwd);
    email.addEventListener("input", verifyEmail);
    nickname.addEventListener("input", verifyNickname);
    birthday.addEventListener("input", verifyBirthday);
    birthday.addEventListener("click", clickBirthday);
    signupBtn.addEventListener("click", submit);
    alertContent.btnDom.addEventListener("click", closeAlert);
};

//帳號畫面顯示
function myFunction() {
    signup.style.visibility = "visible";
}

function verifySignUpAccount() {
    console.log(signUpAccount.value);
    virifyAccount.account = signUpAccount.value;
    ajaxImple("../server/duplicateAccount.php", "POST", virifyAccount, function (response) {
        if (response === "true" && signUpAccount.value.search(/^[^%&`』 <>,;=?$\x22]+$/) != -1) {
            signUpAccount.className = "valid";
            signUpContent.account = signUpAccount.value;
        } else {
            signUpAccount.className = "invalid";
            signUpContent.account = "";
        }
    });
}

function verifySignUpPwd() {
    if (signUpCheckPwd.value === "" || signUpPwd.value === "") {
        signUpPwd.className = "invalid";
        signUpCheckPwd.className = "invalid";
        signUpContent.password = "";
    } else if (signUpCheckPwd.value === signUpPwd.value) {
        signUpPwd.className = "valid";
        signUpCheckPwd.className = "valid";
        signUpContent.password = String(CryptoJS.MD5(signUpPwd.value));
    } else {
        signUpPwd.className = "invalid";
        signUpCheckPwd.className = "invalid";
        signUpContent.password = "";
    }
}
//驗證輸入資料正確性
function verifyEmail() {
    if (email.value.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/) != -1) {
        email.className = "valid";
        signUpContent.email = email.value;
    } else {
        email.className = "invalid";
        signUpContent.email = "";
    }
}

function verifyNickname() {
    if (nickname.value.search(/^[^%&`』 <>,;=?$\x22]+$/) != -1) {
        nickname.className = "valid";
        signUpContent.nickname = nickname.value;
    } else {
        nickname.className = "invalid";
        signUpContent.nickname = "";
    }
}

function clickBirthday() {
    if (clickBirthdayCount === false) {
        birthday.className = "invalid";
        clickBirthdayCount = true;
    } else {
        return;
    }
}

function verifyBirthday() {
    if (birthday.value == "") {
        birthday.className = "invalid";
        signUpContent.birthday = "";
    } else {
        birthday.className = "valid";
        signUpContent.birthday = birthday.value;
    }
}

function submit() {
    if (signUpContent.account === "" || signUpContent.birthday === "" || signUpContent.email === "" || signUpContent.password === "" || signUpContent.nickname === "") {
        showAlert("請輸入完整資料");
        return;
    } else {
        signUpContent.gender = gender.value;
        ajaxImple("../server/createAccount.php", "POST", signUpContent, function (response) {
            if (response === "true") {
                showAlert("Success!");
            } else {
                showAlert("Fail!");
            }
        });
    }
}

function showAlert(title) {
    alertContent.title = title;
    alertContent.dom.childNodes[1].childNodes[1].innerHTML = alertContent.title;
    alertContent.dom.style.display = "inline";
}

function closeAlert() {
    switch (alertContent.title) {
    case "Success!":
        signup.style.visibility = "hidden";
        signUpContent.account = "";
        signUpContent.password = "";
        signUpContent.email = "";
        signUpContent.nickname = "";
        signUpContent.birthday = "";
        signUpContent.gender = "Male";
        signUpAccount.value = "";
        signUpPwd.value = "";
        signUpCheckPwd.value = "";
        email.value = "";
        nickname.value = "";
        birthday.value = "";
        gender.value = "Male";
        signUpAccount.className = "";
        signUpPwd.className = "";
        signUpCheckPwd.className = "";
        email.className = "";
        nickname.className = "";
        birthday.className = "";
        break;
    case "Fail!":
        break;
    default:
        break;
    }
    alertContent.dom.style.display = "none";
}

function login() {
    if (loginAccount.value === "" || loginAccount.value.search(/^[^%&`』 <>,;=?$\x22]+$/) == -1) {
        loginAccount.className = "invalid";
    } else if (loginPwd.value === "") {
        loginPwd.className = "invalid";
    } else {
        loginPwd.value = String(CryptoJS.MD5(loginPwd.value));
        document.forms["login-form"].submit();
    }
}
