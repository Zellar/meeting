document.querySelector(".header__mobile-btn").onclick = function() {
    open();
  };
  
  function open() {
    document.querySelector(".header__nav").classList.toggle("show");
    document.querySelector(".header__mobile-btn").classList.toggle("show");
  }