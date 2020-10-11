




form.addEventListener("submit",function(event){

    event.preventDefault();
    
});


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
    let header = $('#header');

    let scrollPos = $(window).scrollTop();
    
    $(window).on('scroll load', function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos >= introH) {
            header.addClass('fixed');
        } else{
            header.removeClass('fixed');
        }
        
    });

   

});  



