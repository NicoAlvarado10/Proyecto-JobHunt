document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    menuToggle.addEventListener('click', function(){
        navMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnsideMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnsideMenuToggle){
            navMenu.classList.remove('active')
        }
    });
    });




    
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header__subtitle", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".header__title ", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__paragraph", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__action", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".about__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".carreras__card", {
    duration: 1000,
    interval: 500,
  });
  
  ScrollReveal().reveal(".job__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".services__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  