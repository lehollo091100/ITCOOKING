var menu_btn=document.querySelector('.menu__btn');
var closebtn=document.querySelector('.close__menu-btn');
menu_btn.addEventListener('click',function(){
    closebtn.classList.toggle('active');
    document.querySelector('.menu__list').classList.toggle('active');
})
closebtn.addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.menu__list').classList.toggle('active');
})

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});


$('.customer__container').slick({
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              slidesToShow: 5
            }
        },
        {
          breakpoint: 748,
          settings: {
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll:1,
            centerPadding: '40px',
            focusOnSelect: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
});