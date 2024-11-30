
// var signinname = document.getElementById("signinname");
var signinemail = document.getElementById("signinemail");
var signinpassword = document.getElementById("signinpassword");
var notext = document.getElementById("notext");
var incorrect = document.getElementById("incorrect");
var btnlogin = document.getElementById("login");
var signup = document.getElementById("signup");

var allaccounts=[]
if (localStorage.getItem("container") !== null) {
    allaccounts = JSON.parse(localStorage.getItem("container"))
}

signup.addEventListener("click",function(){
    window.location ='./signup.html'
 })


 btnlogin.addEventListener("click",function(){
    if ( signinemail.value == "" || signinpassword.value == "") {
        notext.classList.remove("d-none")
    }
    else if(checkemail()){
         window.location = "./home.html"
    }
    else{
        incorrect.classList.remove("d-none")
        notext.classList.add("d-none")

    }




 })



 
 function checkemail() {
    for (i = 0; i < allaccounts.length; i++) {
        if (signinemail.value === allaccounts[i].email&&signinpassword.value ===allaccounts[i].pass) {
            localStorage.setItem("seccionusername" ,JSON.stringify( allaccounts[i].name))
            return true
        }
    }
    return false
}