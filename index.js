let userInp = document.getElementById("firna");
let user2Inp = document.getElementById("lasna");
let emailInp = document.getElementById("emai");
let passInp = document.getElementById("pass");
let err1 = document.getElementById("err1");
let err2 = document.getElementById("err2");
let err3 = document.getElementById("err3");
let err4 = document.getElementById("err4");
let etex1 = document.getElementById("etex1");
let etex2 = document.getElementById("etex2");
let etex3 = document.getElementById("etex3");
let etex4 = document.getElementById("etex4");
let tex = document.getElementsByClassName("errorTex");
let btn = document.getElementsByClassName("claim");

document.forms[0].onsubmit = function (event) {
  let userValid = false;
  let user2Valid = false;
  let emailValid = false;
  let passValid = false;

  if (
    userInp.value !== "" &&
    user2Inp.value !== "" &&
    emailInp.value !== "" &&
    passInp.value !== ""
  ) {
    userValid = true;
    user2Valid = true;
    emailValid = true;
    passValid = true;
  }

  if (userInp.value === "") {
    event.preventDefault();
    err1.classList.remove("hide");
    etex1.classList.remove("hide");
    userInp.classList.add('border')
  } else {
    err1.classList.add("hide");
    etex1.classList.add("hide");
    userInp.classList.remove('border')
  }
  if (user2Inp.value === "") {
    event.preventDefault();
    err2.classList.remove("hide");
    etex2.classList.remove("hide");
    user2Inp.classList.add('border')
  } else {
    err2.classList.add("hide");
    etex2.classList.add("hide");
    user2Inp.classList.remove('border')
  }
  if (emailInp.value === "") {
    event.preventDefault();
    err3.classList.remove("hide");
    etex3.classList.remove("hide");
    emailInp.classList.add('border')
  } else {
    err3.classList.add("hide");
    etex3.classList.add("hide");
    emailInp.classList.remove('border')
  }
  if (passInp.value === "") {
    event.preventDefault();
    err4.classList.remove("hide");
    etex4.classList.remove("hide");
    passInp.classList.add('border')
  } else {
    err4.classList.add("hide");
    etex4.classList.add("hide");
    passInp.classList.remove('border')
  }
};
