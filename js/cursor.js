const cursorDot = document.querySelector(".cursor_dot");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX - cursorDot.offsetWidth / 2;
  const y = e.clientY - cursorDot.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  cursorDot.animate(keyframes, {
    duration: 500,
    fill: "forwards",
  });
});
