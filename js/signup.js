var signinname = document.getElementById("signinname");
var signinemail = document.getElementById("signinemail");
var signinpassword = document.getElementById("signinpassword");
var notext = document.getElementById("notext");
var yestext = document.getElementById("yestext");
var notemail = document.getElementById("notemail");
var btnlogin = document.getElementById("login");
var signin = document.getElementById("signin");



var allaccounts=[]
if (localStorage.getItem("container") !== null) {
    allaccounts = JSON.parse(localStorage.getItem("container"))
}

btnlogin.addEventListener("click", function () {
    if (signinname.value == "" || signinemail.value == "" || signinpassword.value == "") {
        notext.classList.remove("d-none")
      
    }
    else if (validname() && validemail() && validpass()) {
        if (checkemail()) {
            notemail.classList.remove("d-none")
            notext.classList.add("d-none")
          

        }
        else {
            var account = {
                name: signinname.value,
                email: signinemail.value,
                pass: signinpassword.value
            }
            allaccounts.push(account)
            localStorage.setItem("container", JSON.stringify(allaccounts))
            yestext.classList.remove("d-none")
            notemail.classList.add("d-none")
        }
    }
    else {
        notext.classList.remove("d-none")
        


    }
})












function validname() {
  var text = signinname.value;

  var regexname = /^[A-Za-z1-9]{3,10}$/i;

  if (regexname.test(text)) {
    return true;
  } else {
    return false;
  }
}
function validemail() {
  var text = signinemail.value;

  var rexegemail = /^[a-zA-Z1-9]+@[.a-zA-Z]{1,}$/;

  if (rexegemail.test(text)) {
    return true;
  } else {
    return false;
  }
}
function validpass() {
  var text = signinpassword.value;

  var rexegpass = /^[1-9]{3,}$/i;

  if (rexegpass.test(text)) {
    return true;
  } else {
    return false;
  }
}




signin.addEventListener("click",function(){
   window.location ='./index.html'


})

function checkemail() {
    for (i = 0; i < allaccounts.length; i++) {
        if (signinemail.value === allaccounts[i].email) {
            return true
        }
    }
    return false
}