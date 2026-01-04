writeSlowly('Hello, my name is Vivien.');

// appear(document.getElementById('introduce'), 0, 5, 40);


function appear(elm, i, step, speed){
    var t_o;
    //initial opacity
    i = i || 0;
    //opacity increment
    step = step || 5;
    //time waited between two opacity increments in msec
    speed = speed || 50; 

    t_o = setInterval(function(){
        //get opacity in decimals
        var opacity = i / 100;
        //set the next opacity step
        i = i + step; 
        if(opacity > 1 || opacity < 0){
            clearInterval(t_o);
            //if 1-opaque or 0-transparent, stop
            return; 
        }
        //modern browsers
        elm.style.opacity = opacity;
        //older IE
        elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}


function writeSlowly(text){
    let elem = document.getElementById('introduce');
    let i = 0;
    elem.innerHTML='';
    typeWriter(elem, i, text);
}

function typeWriter(elem, i, txt) {
  if (i < txt.length) {
    elem.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50, elem, i, txt);
  }
}

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navContainer = document.querySelector('.nav-container');
  
  if (menuToggle && navContainer) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navContainer.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navContainer.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navContainer.classList.remove('active');
      });
    });
  }
});
