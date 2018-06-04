function openSlideMenu() {
    document.getElementById('side-menu').style.width = '100vw';
    document.querySelector('nav').style.display = 'none';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.querySelector('nav').style.display = 'flex';
    document.querySelector('nav').style.justifyContent = 'flex-start';
    document.querySelector('nav').style.position = 'fixed';
}

function navOpenClose(){
    const openSlide = document.getElementsByClassName('open-slide')[0];
    openSlide.addEventListener('click', openSlideMenu);

    const closeSlide = document.getElementsByClassName('btn-close')[0];
    closeSlide.addEventListener('click', closeSlideMenu);

    
    const link = document.getElementsByClassName('link');
    for(let i = 0; i < link.length; i++){
        link[i].addEventListener('click', closeSlideMenu);
    }

}



export {openSlideMenu, closeSlideMenu, navOpenClose};