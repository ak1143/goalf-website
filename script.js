var crsr=document.querySelector("#curser")
document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x+"px"
  crsr.style.top=dets.y+"px"
})

gsap.to("#nav", {
  backgroundColor:"#000",
  duration: 5,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
})

gsap.to("#main",{
    backgroundColor:"#000", 
    duration:5,
    scrollTrigger:{
      trigger:"#main",
      scroller:"body",
      // markers:true,
      start:"top -25%",
      end:"top -75%",
      scrub:2,
    },
})

gsap.from("#about img,#about-us",{
  y:90,
  opacity:0,
  duration:3,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about",
    scroller:"body",
    start:"top 50%",
    end:"top 70%",
    scrub:1
  }
})
gsap.from(".card",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 90%",
    scrub:1
  }
})
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.to("#page4 h4",{
  y:-15,
  scrollTrigger:{
    trigger:"#page4 h4",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:5,
  }  
})
