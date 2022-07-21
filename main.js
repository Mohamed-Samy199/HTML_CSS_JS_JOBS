let close = document.getElementById("close")
let manuList =document.getElementById("manu-list")
let toggle = document.getElementById("toggle")
let item1 = document.querySelector(".item1")
let item2 = document.querySelector(".item2")
let item3 = document.querySelector(".item3")
let item4 = document.querySelector(".item4")
let item5 = document.querySelector(".item5")
let login = document.getElementById("login")
let log = document.getElementById("log")
let sing = document.getElementById("sing")
let up = document.getElementById("up")
let chack =document.getElementById("chack")
let images = document.querySelectorAll(".images")
if(toggle){
    toggle.addEventListener("click", ()=>{
        manuList.classList.add("show")
    })
}
item1.onclick = function(){
    manuList.classList.remove("show")
}
item2.onclick = function(){
    manuList.classList.remove("show")
}
item3.onclick = function(){
    manuList.classList.remove("show")
}
item4.onclick = function(){
    manuList.classList.remove("show")
}
item5.onclick = function(){
    manuList.classList.remove("show")
}
if(close){
    close.addEventListener("click", ()=>{
        manuList.classList.remove("show")
    })
}
if(sing){
    sing.addEventListener("click", ()=>{
        login.classList.add("follow")
    })
}
if(log){
    log.addEventListener("click" , ()=>{
        login.classList.remove("follow")
    })
}
if(up){
    up.addEventListener("click" , ()=>{
        chack.classList.toggle("display")
    })
}
if(chack){
    chack.addEventListener("click" , ()=>{
        chack.classList.remove("display")
    })
}
if(close){
    close.addEventListener("click" , ()=>{
        chack.classList.remove("display")
    })
}
images.forEach((e)=>{
    e.addEventListener("click" ,()=>{
        
        document.querySelector(".buttons .active").classList.remove("active")
        e.classList.add("active")
        let holdSrc = e.getAttribute("data-src")
        document.querySelector("#loop").src = holdSrc
    })
})
$(".button .btns").click(function(){
    $(this).addClass("btns-active").siblings().removeClass("btns-active");
    let filter = $(this).attr("data-filter");
    if(filter == "all"){
        $(".contanier .content").show(400);
    }else{
        $(".contanier .content").not('.'+filter).hide(200);
        $(".contanier .content").filter('.'+filter).show(400);
    }
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
loop:true,
centeredSlide: true,
autoplay: {
delay: 2500,
disableOnInteraction: false,
},
grabCursor:true,
breakpoints: {
0: {
slidesPerView: 1,
},
768: {
slidesPerView: 2,
},
991: {
slidesPerView: 3,
},
},
});
const sr =ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay:400 
})
sr.reveal(".home-title")
sr.reveal('.quesition', {delay:700, interval:100, origin:'left'})
sr.reveal('.respone', {delay:700, interval:100, origin:'right'})
sr.reveal('.contanier', {delay:900, interval:100, origin:'top'})
sr.reveal('.buttons', {delay:900, interval:100, origin:'left'})
sr.reveal('.head', {delay:900, interval:100, origin:'top'})
sr.reveal('.button', {delay:900, interval:100, origin:'botton'})
sr.reveal('.box', {delay:600, interval:100, origin:'top'})
sr.reveal('.image', {delay:900, interval:100, origin:'left'})
sr.reveal('.details', {delay:700, interval:100, origin:'right'})
sr.reveal('.follow', {delay:900, interval:100, origin:'left'})
sr.reveal('.tell', {delay:700, interval:100, origin:'right'})
sr.reveal('.one', {delay:900, interval:100, origin:'left'})
sr.reveal('.four', {delay:700, interval:100, origin:'right'})
sr.reveal('.two', {delay:900, interval:100, origin:'top'})
sr.reveal('.there', {delay:900, interval:100, origin:'botton'})
sr.reveal('.end', {delay:900, interval:100, origin:'botton'})