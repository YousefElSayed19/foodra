let burgerIcons= document.querySelector(".burgerIcons")
let menu =document.querySelector(".menu")
let nav =document.querySelector("nav")
burgerIcons.onclick=()=>{
    if(burgerIcons.classList.contains("listClick")){
        burgerIcons.classList.remove("listClick")
        menu.style.transform = "translate(-2000px)";
    }else{
        burgerIcons.classList.add("listClick")
        menu.style.transform = "translate(-50%)";
    }
}
window.onresize=()=>{
    if (nav.scrollWidth>1000){
        menu.style.transform = "translate(0px)";
    }
    else{
        menu.style.transform = "translate(-2000px)";
    }
}
window.addEventListener("scroll",()=>{
    if (scrollY>70){
        nav.style.background="white"
    }
    else {
        nav.style.background="transparent"
    }
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    pagination: {
    el: '.swiper-pagination',
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    scrollbar: {
    el: '.swiper-scrollbar',
    },
});