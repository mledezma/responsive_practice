var app = (function(){
    var btnMenu = document.querySelector('#btnMenu');
    var menu = document.querySelector('#menu');
    var opacity = document.querySelector('.opacity');
    var logo = document.querySelector('.logo');

    function init(){
        btnMenu.addEventListener('click', function() {
            if(menu.classList.contains('hidden')) {
                btnMenu.classList.add('hidden'); 
                opacity.classList.toggle('hidden');  
                logo.classList.add('logo-expanded');
            }
            else {
                btnMenu.classList.remove('hidden'); 
                opacity.classList.add('hidden'); 
                logo.classList.remove('logo-expanded');
            }
            menu.classList.toggle('hidden');  
        })
        
        opacity.addEventListener('click', function() {
            opacity.classList.add('hidden');
            btnMenu.classList.remove('hidden');   
            menu.classList.add('hidden'); 
            logo.classList.remove('logo-expanded');        
        })
    }

    return init
}());

app();

