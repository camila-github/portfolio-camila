/***** NAV - ICONS *****/
const dbNavIcons = DBICONSPROFILE;
const navIcons = document.getElementById('navicons');

const  iconsNav = () => {    
    let cont = 0;  
    let navIconsList = '';
    let navIconsIsVisible = '';
    
    dbNavIcons.forEach((item) => {
        /*
        Ao utilizar a mesma lista de objetos (icons-profile.js) o javascript, não lê
        a primeira linha do objeto que esta no arquivo. O javascript inicia a leitura no 
        segundo objeto. Foi adicionado no arquivo um objeto em branco na primeira linha, 
        porem, estando em branco o objeto, o javascript lê esse objeto como "undefined". 
        Nesse caso, para validação adicionado o 'if' abaixo para que seja desconsiderado 
        o primeiro objeto do arquivo 'icons-profile.js'       
        */
        if(cont == 0) { // 'if' usado apenas para pular o primeiro objeto em branco da lista
            cont = 1; 
        
        } else if (cont == 1){ // 'if' usado para ser adicionado a classe 'is-visible', na primera tag 'b'
            navIconsIsVisible =`
                <b class='is-visible'><img src='${item.img}' alt='${item.textAlt}'></b>
            `
            cont = 2;
        
        } else {  // as demais tags 'b' não precisam da classe 'is-visible'         
            navIconsList += `<b><img src='${item.img}' alt='${item.textAlt}'></b>`
        }       
    }); 
    
    const navIconsAll = document.createElement('span'); 
    navIconsAll.classList.add('cd-words-wrapper');
    navIconsAll.innerHTML = `${navIconsIsVisible} ${navIconsList}`
    navIcons.appendChild(navIconsAll); 
}

/***** PROFILE - TEXT *****/
const dbProfile = DBICONSPROFILE;
const profileText = document.getElementById('profile__text');

const  textProfile = () => {    
    let cont = 0;
    let profileListVisible = '';
    let profileList = '';  
    dbProfile.forEach((item) => {
        /*
        Ao utilizar a mesma lista de objetos (icons-profile.js) o javascript, não lê
        a primeira linha do objeto que esta no arquivo. O javascript inicia a leitura no 
        segundo objeto. Foi adicionado no arquivo um objeto em branco na primeira linha, 
        porem, estando em branco o objeto, o javascript lê esse objeto como "undefined". 
        Nesse caso, para validação adicionado o 'if' abaixo para que seja desconsiderado 
        o primeiro objeto do arquivo 'icons-profile.js'       
        */
        if (cont == 0) { // 'if' usado apenas para pular o primeiro objeto em branco da lista
            cont = 1; 
        } else if (cont == 1) { // 'if' usado para ser adicionado a classe 'is-visible', na primera tag 'b'
            profileListVisible =`<b class='is-visible'>${item.profileText}</b>`
            cont = 2;
        } else { // as demais tags 'b' não precisam da classe 'is-visible' 
            profileList += `<b>${item.profileText}</b>`
        }
    });
    
    const profileListAll = document.createElement('span'); 
    profileListAll.classList.add('cd-words-wrapper');
    profileListAll.innerHTML = `${profileListVisible} ${profileList}`
    profileText.appendChild(profileListAll); 
}

/***** SKILLS *****/

// Cursos
const dbCursos = DBCURSOS;
const cursoList = document.getElementById('cursos__list');

const cursos = () => {
    dbCursos.forEach((item) => {
        let ano =  item.ano;
        let instituicao = item.instituicao;
        let curso = item.curso; 
        
        const cursoItem = document.createElement('div');
        cursoItem.classList.add('item');
        
        cursoItem.innerHTML = `   
            <p>${ano}</p>
            <p class="center">${instituicao}</p>
            <p>${curso}</p>                      
        `
        cursoList.appendChild(cursoItem); 
    });
}

// Formacao
const dbFormacao = DBFORMACAO;
const formacaoList = document.getElementById('formacao__list');

const formacao = () => {
    dbFormacao.forEach((item) => {
        let ano =  item.ano;
        let instituicao = item.instituicao;
        let curso = item.curso; 
        
        const formacaoItem = document.createElement('div');
        formacaoItem.classList.add('item');
        
        formacaoItem.innerHTML = `   
            <p>${ano}</p>
            <p class="center">${instituicao}</p>
            <p>${curso}</p>                      
        `
        formacaoList.appendChild(formacaoItem); 
    });
}

//Experiencia
const dbExperiencia = DBEXPERIENCIA;
const experienciaList = document.getElementById('experiencia__list');

const experiencia = () => {
    dbExperiencia.forEach((item) => {
        let ano = item.ano;
        let cargo = item.cargo;
        let empresa = item.empresa;
        
        const experienciaItem = document.createElement('div');
        experienciaItem.classList.add('item');
        
        experienciaItem.innerHTML = `
            <p>${ano}</p>
            <p class="center">${cargo}</p>
            <p>${empresa}</p>  
        `
        experienciaList.appendChild(experienciaItem); 
    });
}

//Barra de progresso
const skillsProgressBar = () => {
    const bars = document.querySelectorAll('.progress__bar');
    
    bars.forEach(bar => {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    });
}

/***** WORKS - CARROSSEL *****/
const listWorks = DBWORKS;
const workSwipeer = () => {
    const workContainer = document.getElementById('swiper_id')     
    
    listWorks.forEach((item) => {
        let img =  item.img;
        let text = item.text;
        let linkRepo = item.linkRepo;  
        let linkSite = item.linkSite;  
        let linkSiteRepo = "Clique para visualizar" ;
        
        if(!linkSite) {
            linkSiteAux = "--";
        }else{
            linkSiteAux = "Clique para visualizar";
        }
        
        const workSwiper = document.createElement('div')
        workSwiper.classList.add('swiper-slide')
        
        workSwiper.innerHTML = `   
            <div class='work__img'>  
                <img src='${img}' alt='Video Github'>
                
                <p>${text}
                    <br><br>
                    <a href='${linkRepo}' target='_blank' rel='noopener'>
                        Repositorio (${linkSiteRepo}) 
                    </a><br><br >
                    <a href='${linkSite}' target='_blank' rel='noopener'>
                        Site (${linkSiteAux})
                    </a>
                </p>  
            </div>                  
        `
        workContainer.appendChild(workSwiper);        
    });

    new Swiper('.mySwiper', {
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    }); 
}

/***** MOSTRA SCROLL-TOP *****/ 
const scrollTop = () =>{
    const scrollTop = document.getElementById('scroll-top');
    /* Quando a rolagem for superior a 560 altura da janela de visualização, 
    adiciona a classe 'show-scroll' à tag 'a' com a classe 'scroll-top' */
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)


/***** INICIO *****/
window.onload = () => {
    //Iniciar tooltips
    tippy('.link', {       
        placement: 'bottom',
        theme: 'light-border',
    });

    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        loop: false,
    });
    
    iconsNav();    
    textProfile();
    
    sr.reveal('.about', { delay: 200 });
    
    cursos();
    formacao();
    experiencia();
    skillsProgressBar();
    sr.reveal('.skills', { delay: 200 });
    
    workSwipeer();
    sr.reveal('.work', { delay: 300 }); 
    
    sr.reveal('footer', { delay: 400 });    
};