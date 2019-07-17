// Menu Mobile

let abrirBotao = document.querySelector(".openbtn");
let fecharBotao = document.querySelector(".closebtn");


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

abrirBotao.addEventListener("click", function(){
    openNav();
})

fecharBotao.addEventListener("click", function(){
    closeNav();
})

// Slider

$(document).ready(function(){

   $('.teste').slick({

    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    mobileFirst: true,
    adaptiveHeigh: true,
    slidesToShow: 1,
    arrows: true,
    centermode: true,
    // responsive: 'unslick',
    // respondTo: 'min',
    //    fade: true,

   });

});

