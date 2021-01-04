






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
    let header = $('#header');
    // innerHeight с учётом паддинга
    let introH = intro.innerHeight();
    let introOffset = intro.offset().top;
    let featuresOffset = $("#features").offset().top;
    let contentOffset = $("#content").offset().top;
    let workOffset = $("#work").offset().top;
    let teamOffset = $("#team").offset().top;
    let quickActionOffset = $("#quick-action").offset().top;
    let formActionOffset = $('#form-action').offset().top;
    let footerOffset = $('.footer').offset().top;
    let menuItems = $('.header-menu .menu-item');
    

    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop() + 113;
    checkScroll (scrollPos, headerH);
    currentLink (scrollPos + 113);
    
    

    $(window).on('scroll resize', function(){
        introH = intro.innerHeight();
        featuresH = $("#features").innerHeight();
        contentH = $("#content").innerHeight();
        workH = $("#work").innerHeight();
        keyFutureH = $("#key-feature").innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll (scrollPos, headerH);
        currentLink(scrollPos + 113)
        
        
        
    });
// fixed header
    function checkScroll (scrollPos, introH) {
        if (scrollPos > headerH ) {
            header.addClass('fixed');
        } else{
            header.removeClass('fixed');
        }
    }
    
//    active link
    function currentLink (scrollPos) {
        if (introOffset < scrollPos && scrollPos < featuresOffset) {
            $(menuItems).eq(0).addClass('menu-item-active').siblings().removeClass('menu-item-active');
        }
        if (featuresOffset < scrollPos && scrollPos < contentOffset) {
            $(menuItems).eq(1).addClass('menu-item-active').siblings().removeClass('menu-item-active');
        }
        if (contentOffset < scrollPos && scrollPos < workOffset) {
            $(menuItems).eq(2).addClass('menu-item-active').siblings().removeClass('menu-item-active');
        }
        if (workOffset < scrollPos && scrollPos < quickActionOffset) {
            $(menuItems).eq(3).addClass('menu-item-active').siblings().removeClass('menu-item-active');
        }
        if (quickActionOffset < scrollPos && scrollPos < formActionOffset) {
            $(menuItems).eq(4).addClass('menu-item-active').siblings().removeClass('menu-item-active');
        } 
        if (teamOffset < scrollPos && scrollPos < footerOffset) {
            $(menuItems).eq(5).addClass('menu-item-active').siblings().removeClass('menu-item-active');
        }
    }
//    Animate scroll
    
   
    $('[data-action="jsMenu-item-link"]').on('click', function (e) {
        e.preventDefault();
        let contentName = $(this).attr('href');
        let contentOffsetTop = $(contentName).offset().top;
        
        $('html, body').animate({scrollTop: contentOffsetTop - 105},500);
    });
    
    




});  



