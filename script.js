function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


//variables
const menu = document.querySelector('.menu')
const menuPage = document.querySelector('.abso_page')
const anchs = document.querySelectorAll('.anch')
const tl = gsap.timeline({ paused: true });
let click = 0;

menu.addEventListener("click", () => {
  click++;
  gsap.to('.menu span', { backgroundColor: "white", duration: 0 });

  if (click === 1) {
    // First click
    tl.to(menuPage, { y: "100%", duration: 1, ease: Power3.easeOut })
      .to(anchs, {
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: Power3.easeOut
      })
      .play();
  } else if (click === 2) {
    // Second click
    tl.pause();
    gsap.to(anchs, {
      delay: 0,
      stagger: 0.01,
      duration: 0.1,
      y: '50px',
      onComplete: () => {
        gsap.to(menuPage, {
          y: "-100%",
          duration: 1,
          ease: Power3.easeOut,
        });
      }
    });
    gsap.to('.menu span', { backgroundColor: "black",  duration: 0  });
  } else if (click === 3) {
    // Third click, reset animation
    tl.pause();
    tl.progress(0); 
    click = 1; 
    tl.play(); 
  }
});


for(z = 0; z < anchs.length; z++) {
    anchs[z].onmouseOver = () => {
      
    }
}