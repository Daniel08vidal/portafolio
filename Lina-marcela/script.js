
//     MENU
  
((d)=> {
    "use stric"
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");
    
    $btnMenu.addEventListener("click",(e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
     });
    
     d.addEventListener("click", (e) => {
      if(!e.target.matches(".menu a")) return false;
    
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
     });
    })(document);

//     MENU
  
((d)=> {
  "use stric"
$navbar = d.querySelector(".menu").querySelectorAll("a");
console.log($navbar)

$navbar.forEach(element => {
  element.addEventListener("click", function(){
    $navbar.forEach(nav=>nav.classList.remove("active"));

    this.classList.add("active");
  })
});
  })(document);



// SCROLL ANIMADO
((d)=> {
let animado = d.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop = d.documentElement.scrollTop;
    for (let i = 0; i < animado.length; i++) {
       let alturaAnimado = animado[i].offsetTop;
       if (alturaAnimado - 400 < scrollTop) {
        
           animado[i].style.opacity = 1;
           animado[i].classList.add('mostrarArriba');           
       }  
    }  
    
}

window.addEventListener('scroll',mostrarScroll);
})(document);



/* ********** ContactForm ********** */
((d) => {
    const $form = d.querySelector(".contact-form"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/linaarguello04@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.querySelector(
            "h3"
          ).innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        });
    });
  })(document);
  