var username = document.getElementById("username")

var nameuser=JSON.parse(localStorage.getItem("seccionusername"))
var logout=document.getElementById("logout")

username.innerHTML+= nameuser ;

logout.addEventListener("click",function(){
    
    localStorage.removeItem("seccionusername")
    window.location = "./index.html"
})
