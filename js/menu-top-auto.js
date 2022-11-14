const menuTopAuto = () => {

    const headerBody = document.querySelector('.header-content');
    const headerColumn = document.querySelector('.header-column');
    const heightBody = headerBody.offsetHeight;
    
    headerColumn.style.top = heightBody + 'px';
  
  }
  
  menuTopAuto();