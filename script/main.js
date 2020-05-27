//menu
const leftMenu = document.querySelector('.left-menu');
const hamburgerMenu = document.querySelector('.hamburger');
const imgs = document.querySelectorAll('.tv-card__img');

//open & close menu

hamburgerMenu.addEventListener('click',() => {
    leftMenu.classList.toggle('openMenu');
    hamburgerMenu.classList.toggle('open');
});

document.addEventListener('click',(event)=>{
    if(!event.target.closest('.left-menu')){
        leftMenu.classList.remove('openMenu');
        hamburgerMenu.classList.remove('open');
    } 
});

leftMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const dropdown = target.closest('.dropdown');
    if(dropdown){
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburgerMenu.classList.add('open');
    }
});
imgs.forEach(img =>{
    let imgSrc = img.getAttribute('src');
    let imgBackDrop = img.getAttribute('data-backdrop');
    img.addEventListener('mouseenter', event =>{
        img.setAttribute("src", imgBackDrop);

    });
    img.addEventListener('mouseleave', event =>{
        img.setAttribute("src", imgSrc);
         
     });

})
