const main = () => {
    const navbar = document.querySelector("navbar");

    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
      var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(window.pageYOffset);

        if (currentScrollTop < lastScrollTop) {
          
          if (window.pageYOffset > 400) {
              navbar.style.position = 'fixed';
          } 
      } else {
          navbar.style.position = 'sticky';
    }
      
      lastScrollTop = currentScrollTop;
    });
}

main()