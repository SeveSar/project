






const form = document.querySelector("#form-action");
const btnForm = document.querySelector('#jsBtn-Form');
const input = document.querySelectorAll('[data-action="jsInput"]');
const dropDownMenu = document.querySelector('#jsDropdown-menu');
const burger = document.querySelector('[data-action="jsBurger"]');
const navbarActions = document.querySelector('#jsNavbar__actions');

form.addEventListener('submit',function(event){

    event.preventDefault();

    for (let i of input) {
        i.value= '';
    };
    alert('Your data has been sent to the server');

});

window.addEventListener('click',function(event){

    if (event.target.classList.contains('burger__line') || event.target.classList.contains('burger')){
        
        dropDownMenu.classList.toggle('dropDown-active');
        
    } else if (!event.target.classList.contains('dropdown-menu') && !event.target.classList.contains('menu-item')){
        dropDownMenu.classList.remove('dropDown-active');
    };
    

});


$(function(){

    let intro = $('#jsIntro');

    // innerHeight с учётом паддинга
    let introH = intro.innerHeight();
    let featuresH = $("#features").innerHeight();
    let contentH = $("#content").innerHeight();
    let workH = $("#work").innerHeight();
    let keyFutureH = $("#key-feature").innerHeight();
    let teamH = $("#team").innerHeight();
    let quickActionH = $("#quick-action").innerHeight();
    let formActionH = $('#form-action').innerHeight();
    
    let header = $('#header');
    let scrollPos = $(window).scrollTop();
    
    checkScroll (scrollPos, introH);
    checkTurbo(scrollPos,introH,featuresH,contentH,workH,keyFutureH,quickActionH,teamH);
    $(window).on('scroll resize', function(){
      
        introH = intro.innerHeight();
        featuresH = $("#features").innerHeight();
        contentH = $("#content").innerHeight();
        workH = $("#work").innerHeight();
        keyFutureH = $("#key-feature").innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll (scrollPos, introH);
        checkTurbo (scrollPos,introH,featuresH,contentH,workH,keyFutureH,quickActionH,teamH);
        
        
    });

    function checkScroll (scrollPos, introH) {
        if (scrollPos >= introH) {
            header.addClass('fixed');
           
            
        } else{
            header.removeClass('fixed');
            
        }
    }

    function checkTurbo (scrollPos,introH,featuresH,contentH,workH,keyFutureH){

        if (scrollPos>=introH){
            $("ul .menu-item").children().removeClass('menu-item-link-active').eq(1).addClass('menu-item-link-active');
            if (scrollPos >= (introH + featuresH)){
                $("ul .menu-item").children().removeClass('menu-item-link-active').eq(2).addClass('menu-item-link-active');
                if (scrollPos >= (introH + featuresH + contentH)){
                    $("ul .menu-item").children().removeClass('menu-item-link-active').eq(3).addClass('menu-item-link-active');
                    if (scrollPos >= (introH + featuresH + contentH+workH +quickActionH)){
                        $("ul .menu-item").children().removeClass('menu-item-link-active').eq(4).addClass('menu-item-link-active');
                        if (scrollPos >= (introH + featuresH + contentH+workH +quickActionH + keyFutureH + teamH)){
                            $("ul .menu-item").children().removeClass('menu-item-link-active').eq(5).addClass('menu-item-link-active');
                        }
                    }
                }
            }
        } 
        else {
            $("ul.header-menu .menu-item").children().removeClass('menu-item-link-active').eq(0).addClass('menu-item-link-active');
        }
       
    }

    
    




});  



