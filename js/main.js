let prodactImgs = document.querySelectorAll(".prodact-img");
let prodactSwitcher = document.querySelector(".img-switcher");
prodactSwitcher.addEventListener("click", nextProdactSwitch);



function nextProdactSwitch(){
for (let index = 0; index < prodactImgs.length; index++) {
    const element = prodactImgs[index];
    console.log(element.dataset.visibility);
    
    if(element.dataset.visibility == "true"){
        element.classList.remove("prodact-img_active");

        element.classList.add("prodact-img_hidden");
        element.dataset.visibility = "false";
        ++index;
        if(index<prodactImgs.length)
        {
            prodactImgs[index].classList.remove("prodact-img_hidden");
            prodactImgs[index].classList.add("prodact-img_active");
            prodactImgs[index].dataset.visibility = "true";
            return;
        }
        else{
            index = 0;
            prodactImgs[index].classList.remove("prodact-img_hidden");
            prodactImgs[index].classList.add("prodact-img_active");
            prodactImgs[index].dataset.visibility = "true";
            return;
        }
        
    };
    
    
}
    
}

// SLIDER

$(document).ready(function(){
    $('.section-4__slider').slick(
        {
            slidesToShow: 3,
            arrows: true,
            draggable: false,

            responsive: [
              {
                breakpoint: 1085,
                settings: {
                  slidesToShow:2,
              
                }
              },
              {
                breakpoint: 837,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true,
                  draggable: true,
                }
              },
              {
                breakpoint: 770,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true,
                  draggable: true,
                 
                }
              }
          ]
        
       
        }
    );

});

// menu burger
let burgerMenu = document.querySelector(".mobile-menu");
let burgerMenuExit = document.querySelector(".menu-exit");
let burgerBtn = document.querySelector(".burger-menu");
burgerBtn.addEventListener("click", openBurgerMenu);
function openBurgerMenu ()
{ 
  burgerMenu.classList.add("mobile-menu-active");
}
burgerMenuExit.addEventListener("click", clouseBurgerMenu)
function clouseBurgerMenu ()
{ 
  burgerMenu.classList.remove("mobile-menu-active");
}
