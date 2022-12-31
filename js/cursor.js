const cursorDot = document.querySelector(".cursor_dot");

// AnimateCursor
const animateCuror = (e, interaction) => {
  cursorDot.classList.remove("disabled");
  if (window.screen.width > 768) {
    const x = e.clientX - cursorDot.offsetWidth / 2;
    const y = e.clientY - cursorDot.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interaction ? 4 : 1})`,
    };

    cursorDot.animate(keyframes, {
      duration: 500,
      fill: "forwards",
    });
  } else {
    cursorDot.classList.add("disabled");
  }
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable");
  const interaction = interactable !== null;

  const icon = document.getElementById("icon");

  animateCuror(e, interaction);

  if (interaction) {
    icon.classList.add("active");
  } else {
    icon.classList.remove("active");
  }0
};
