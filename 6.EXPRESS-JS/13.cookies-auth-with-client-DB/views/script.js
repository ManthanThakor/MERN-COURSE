document.addEventListener("mousemove", (e) => {
  const robot = document.getElementById("robot");
  const x = e.clientX;
  const y = e.clientY;
  robot.style.transform = "translate(" + (x - 50) + "px, " + (y - 50) + "px)";
});
