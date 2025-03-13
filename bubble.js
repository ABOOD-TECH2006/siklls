let buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    // e.preventDefault(); //preventing from submitting
    let overlay = document.createElement("span"); //create a element - span
    overlay.classList.add("overlay"); //adding a class inside the span
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    overlay.style.left = x + "px";
    overlay.style.top = y + "px";
    e.target.appendChild(overlay);
    setTimeout(() => {
      overlay.remove();
    }, 500); // removing overklay after 0.5s of clicking

    // console.log(e);
  });
}
