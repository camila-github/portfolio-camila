(function() {
    //Iniciar tooltips
    tippy('.link',{ placement: 'bottom'	})

    //Dark-light
    const toggle = document.querySelector('.js-change-theme');
    const body = document.querySelector('body');
    const profile = document.getElementById('profile');


    toggle.addEventListener('click', () => {

        if (body.classList.contains('text-gray-900')) {
            toggle.innerHTML = '<img class="h-16 w-16" src="./assets/img/index-sol.webp" alt="Sol">';
            body.classList.remove('text-gray-900');
            body.classList.add('text-gray-100');

            body.style.backgroundImage = "";
            body.style.backgroundImage = "url('./assets/img/index-img-background-noite.webp')";   
            
            profile.classList.remove('bg-white');
            profile.classList.add('bg-gray-900');
        
        } else {
        
            toggle.innerHTML = '<img class="h-14 w-14" src="./assets/img/index-lua.webp" alt="Lua">';
            body.classList.remove('text-gray-100');
            body.classList.add('text-gray-900');
            body.style.backgroundImage = "";
            body.style.backgroundImage = "url('./assets/img/index-img-background-dia.webp')"; 
            profile.classList.remove('bg-gray-900');			
            profile.classList.add('bg-white');				
        }
    });		

})();


/*Animacao*/
const sr = ScrollReveal({ origin: 'top', duration: 2000 });
sr.reveal(`#profile`, { delay: 200 });
sr.reveal(`#foto`, { delay: 300 });
sr.reveal(`#dark_light`, { delay: 400 });
