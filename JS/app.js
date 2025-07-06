const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.primary-links a');
const logoText = document.querySelector('.logo h2');
const hamburger = document.querySelector('#hamburger');


window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 20){
    navbar.classList.add('changeNavBgColor');
    links.forEach(link =>{
      link.style.color = 'white';
    });
    logoText.style.color = 'white';
    hamburger.style.color = 'white'
  }
  else{
    navbar.classList.remove('changeNavBgColor');
    links.forEach(link =>{
      link.style.color = '#777';
    });
    logoText.style.color = 'green';
    hamburger.style.color = 'black';
  }
});


const primaryLinks = document.querySelector('.primary-links');
console.log(primaryLinks);

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('fa-bars')) {

    hamburger.classList.remove('fa-bars');
    hamburger.classList.add('fa-xmark');
    primaryLinks.className = 'primary-show'
    
  } else {
    
    hamburger.classList.remove('fa-xmark');
    hamburger.classList.add('fa-bars');
    primaryLinks.className = 'primary-links'
  }
});