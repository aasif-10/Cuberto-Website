function runGsap() {
  // FOR PAGE 1
  gsap.from(".nav h4, .menu", {
    y: "100%",
    delay: 0.5,
    stagger: 0.3,
  });

  gsap.from(".nav img", {
    opacity: 0,
    delay: 0.5,
  });

  gsap.from(".heading h1,.heading-below h1", {
    y: "100%",
    delay: 0.7,
    stagger: 0.2,
  });

  gsap.from(".para p", {
    y: "100%",
    delay: 0.7,
  });

  // FOR PAGE 2

  gsap.to(".left .left-elem", {
    y: "-300%",
    ease: Power1,
    scrollTrigger: {
      trigger: ".container-1",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
  });

  let sections = document.querySelectorAll(".left-elem");

  Shery.imageEffect(".images", {
    style: 5,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });

  // FOR PAGE 3

  gsap.from(".page3-heading h1", {
    y: 200,
    scrollTrigger: {
      trigger: ".page3-heading",
      end: "top 60%",
      scrub: 1,
    },
  });
  gsap.from(".page3-para", {
    y: 200,
    delay: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".page3-heading",
      end: "top 60%",
      scrub: 1,
    },
  });

  gsap.from(".card-container .box", {
    y: 200,
    stagger: 0.2,
    duration: 1,
    ease: Power3,
    scrollTrigger: {
      trigger: ".card-container",
      start: "top 90%",
      end: "top 60%",
      scrub: 1,
    },
  });

  // FOR PAGE 4

  gsap.from(".page4-heading h1", {
    y: 200,
    scrollTrigger: {
      trigger: ".page4-heading",
      start: "top 90%",
      end: "top 70%",
      scrub: 1,
    },
  });
  gsap.from(".image-container .image-box", {
    y: 200,
    ease: Power3,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".image-container",
      start: "top 90%",
      end: "top 70%",
      scrub: 1,
    },
  });

  Shery.mouseFollower();
  Shery.makeMagnet(".magnet");
  Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
  });
}

runGsap();
