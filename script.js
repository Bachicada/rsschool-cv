const navIcon=document.querySelector('.nav-icon');
const menuBody=document.querySelector('.menu-body');
const menuLinks=document.querySelectorAll('.menu-link');

navIcon.addEventListener('click',function(e){
    navIcon.classList.toggle('active');
    menuBody.classList.toggle('active');
    document.body.classList.toggle('lock')
})

function clickOnMenu(e){
    if(navIcon.classList.contains('active')){
        document.body.classList.remove('lock')
        navIcon.classList.remove('active');
        menuBody.classList.remove('active');
       
    }
}
if (menuLinks.length>0){
    menuLinks.forEach(menuLink=>{
        menuLink.addEventListener('click', clickOnMenu)
    })
}