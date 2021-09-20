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
//open link in a new window
function externalLinks() {
    const links = document.getElementsByTagName("a");
    for (i=0; i<links.length; i++) {
      link = links[i];
      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
      link.target = "_blank";
    }
   }
   
   window.onload = externalLinks;

   console.log(
       Самооценка:150 баллов
       Всё выполнено, за исключением видеоролика.
   )