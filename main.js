let category = document.querySelector('.category');
let navLinks = document.querySelector('.navLinks');
category.addEventListener('click',function(){
  navLinks.classList.toggle('active')
});
let header = document.querySelector('.header');
window.addEventListener('scroll',function(){
  if(scrollY>200){
    header.classList.add('active');
  }
  else if(scrollY<200){
    header.classList.remove('active');
  }
})