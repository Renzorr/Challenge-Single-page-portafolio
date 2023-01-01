let tl = gsap.timeline({});

tl.from("header", { opacity: 0, x: 160, duration: 1.5 })
  .from(".hero", { opacity: 0, duration: 1.5, x: -300 }, "-=1")
  .from(".about_img", { opacity: 0, y: -300, duration: 1.5 }, "-=1")
  .from(
    ".about_content",
    {
      opacity: 0,
      y: -300,
      duration: 1.5,
    },
    "-=1"
  )
  .from(".work", { opacity: 0, y: -300, duration: 1.5 }, "-=1")
  .from(
    ".contact",
    {
      opacity: 0,
      y: -300,
      duration: 1.5,
    },
    "-=1"
  )
  .from(
    "footer",
    {
      opacity: 0,
      y: -300,
      duration: 1.5,
    },
    "-=1"
  );
