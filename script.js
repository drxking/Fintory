function her() {


  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });



  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
her()
document.querySelector('body').addEventListener('mousemove', function(dets) {
  let i = dets.clientX
  let j = dets.clientY
  const cursor = document.querySelector('.cursor')
  cursor.style.transform = `translate(${i - 10}px , ${j - 10}px)`;
})


let sync = gsap.timeline()

sync.from('nav, nav .list ul li .link, nav .list .cont', {
  opacity: 0,
  stagger: 0.05
})

sync.from('section .section-1 .h1', {
  x: -100,
  opacity: 0,
  duration: 0.5
})
sync.from('section .section-1 .h2', {
  x: 100,
  opacity: 0,
  duration: 0.5
})
sync.from('section .section-1 p', {
  y: 20,
  opacity: 0,
  stagger: 0.1
})
sync.from('.video ', {
  opacity: 0,
  duration: 1
})
sync.from('.section-2', {
  opacity: 0,
})


gsap.to('section-2 button', {
  y: '-50%',
  duration: 1,
  scrollTrigger: {
    trigger: 'button',
    start: 'bottom bottom',
    end: 'bottom top'
  }
})


gsap.from('#box1 img , #box1 h2 , #box1 p, #box button', {
  y: 100,
  opacity: 0,
  delay: 0.3,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#box1 img , #box1 h2 , #box1 p, #box button',
    start: 'top bottom',
    scroller: 'main'
  }
})



gsap.from('#box2 img , #box2 h2 , #box2 p, #box button', {
  y: 100,
  opacity: 0,
  delay: 0.3,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#box2 img , #box2 h2 , #box2 p, #box button',
    start: 'top bottom',
    scroller: 'main'

  }
})



gsap.from('#box3 img , #box3 h2 , #box3 p, #box button', {
  y: 100,
  opacity: 0,
  delay: 0.3,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#box3 img , #box3 h2 , #box3 p, #box button',
    start: 'top bottom',
    scroller: 'main'

  }
})



gsap.from('#box4 img , #box4 h2 , #box4 p, #box button', {
  y: 100,
  opacity: 0,
  delay: 0.3,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#box4 img , #box4 h2 , #box4 p, #box button',
    start: 'top bottom',
    scroller: 'main'

  }
})



gsap.from('#box5 img , #box5 h2 , #box5 p, #box button', {
  y: 100,
  opacity: 0,
  delay: 0.3,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#box5 img , #box5 h2 , #box5 p, #box button',
    start: 'top bottom',
    scroller: 'main'

  }
})



gsap.from('#box6 img , #box6 h2 , #box6 p, #box button', {
  y: 100,
  opacity: 0,
  delay: 0.3,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#box6 img , #box6 h2 , #box6 p, #box button',
    start: 'top bottom',
    scroller: 'main'

  }
})

