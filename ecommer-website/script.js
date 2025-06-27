var sidenav = document.querySelector(".side-navbar")
var msg=document.querySelector(".submit")
var contact=document.querySelector(".form")
function showsnav(){
  sidenav.style.left="0"
}
function closesnav(){
    sidenav.style.left="-60%"
}
function success_opn(){
  msg.style.display="block"
  contact.style.display="none"
}
function success_cls(){
  msg.style.display="none"
  contact.style.display="block"
}
