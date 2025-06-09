const close = document.querySelector('.close');
const navLinkMobile = document.querySelector('.nav-links-mobile');
close.addEventListener('click',()=>{
    close.classList.toggle('active');
    navLinkMobile.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
    document.body.classList.toggle('active');
    
})