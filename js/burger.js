const burger = () => {

  const headerBurger = document.querySelector('.header__burger');
  const navListContent = document.querySelector('.nav-list-content');
  const bodyFixed = document.querySelector('body');
  
  headerBurger.addEventListener('click', function() {
  
    headerBurger.classList.toggle('active');
    navListContent.classList.toggle('active');
    bodyFixed.classList.toggle('lock');
  
  })

}

burger();