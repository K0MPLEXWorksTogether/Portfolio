document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling
  var SmoothScroll = window.SmoothScroll // Declare SmoothScroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
  })

  // Navbar color change on scroll
  window.addEventListener("scroll", () => {
    var navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Animate skill cards on scroll
  const skillCards = document.querySelectorAll(".skill-card")
  const projectCards = document.querySelectorAll(".project-card")

  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp")
        observer.unobserve(entry.target)
      }
    })
  }

  const options = {
    threshold: 0.2,
  }

  const observer = new IntersectionObserver(animateOnScroll, options)

  skillCards.forEach((card) => {
    observer.observe(card)
  })

  projectCards.forEach((card) => {
    observer.observe(card)
  })

  // Initialize particles.js
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    })
  }

  // Animate the glitch effect
  if (typeof anime !== "undefined") {
    anime({
      targets: ".glitch",
      translateX: [-10, 10],
      direction: "alternate",
      loop: true,
      easing: "easeInOutQuad",
      duration: 100,
    })
  }
})

