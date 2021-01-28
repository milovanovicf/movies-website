const menu = document.querySelector('#menu_toggle')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')
const lists = document.querySelector('.movies')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
    lists.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);


var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});


// Javascript for image slider automatic navigation

var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();

//Smaller Slider //

var card = document.querySelectorAll('.card');
var radioBtns = document.querySelectorAll('.radio_btn');
let currentCard = 1;

// Javascript for image slider manual navigation
var manualNavActors = function(manualActors){
  card.forEach((card) => {
    card.classList.remove('first');

    radioBtns.forEach((radio_btn) => {
      radio_btn.classList.remove('first');
    });
  });

  card[manualActors].classList.add('first');
  radioBtns[manualActors].classList.add('first');
}

radioBtns.forEach((radio_btn, i) => {
  radio_btn.addEventListener("click", () => {
    manualNavActors(i);
    currentCard = i;
  });
});
//


var repeatSmaller = function(firstClass) {
  let first = document.getElementsByClassName('first');
  let i = 1;

var repeaterSmaller = () => {
  setTimeout(function() {
  [...first].forEach((firstCard) => {
    firstCard.classList.remove('first');
  });

  card[i].classList.add('first');
    radioBtns[i].classList.add('first');
    i++;

    if(card.length == i){
      i = 0;
    }
    if(i >= card.length){
      return;
    }
    repeaterSmaller();
  }, 9000);
  }
  repeaterSmaller();
}
repeatSmaller();

