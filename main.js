






const form = document.querySelector("#form-action");
const btnForm = document.querySelector('#jsBtn-Form');
const input = document.querySelectorAll('[data-action="jsInput"]');
const dropDownMenu = document.querySelector('#jsDropdown-menu');
const dropDownMenuItem = dropDownMenu.querySelectorAll('.menu-item');
const burger = document.querySelector('[data-action="jsBurger"]');
const navbarActions = document.querySelector('#jsNavbar__actions');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => toggleMenu());
for (i of dropDownMenuItem) {
    i.addEventListener('click', (e) => {
        e.preventDefault()
        toggleMenu();
    });
}
overlay.addEventListener('click', ()=> toggleMenu());

function toggleMenu(){
    dropDownMenu.classList.toggle('dropDown-active');
    if (dropDownMenu.classList.contains('dropDown-active')) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'visible';
    }
    burger.classList.toggle('burger-active');
    overlay.classList.toggle('overlay-active');
}






form.addEventListener('submit',function(event){

    event.preventDefault();

    for (let i of input) {
        i.value= '';
    };
    alert('Your data has been sent to the server');

});




$(function(){

    let intro = $('#intro');

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
    $(window).on('scroll resize', function(){
      
        introH = intro.innerHeight();
        featuresH = $("#features").innerHeight();
        contentH = $("#content").innerHeight();
        workH = $("#work").innerHeight();
        keyFutureH = $("#key-feature").innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll (scrollPos, introH);
        
        
        
    });

    function checkScroll (scrollPos, introH) {
        if (scrollPos >= introH) {
            header.addClass('fixed');
           
        } else{
            header.removeClass('fixed');
            
        }
    }

//    Animate scroll

    $('[data-action="jsMenu-item-link"]').on('click', function (e) {
        e.preventDefault();
        let contentName = $(this).attr('href');
        let contentOffsetTop = $(contentName).offset().top;
        
        $('html, body').animate({scrollTop: contentOffsetTop - 70},500);
    });
    
    




});  



