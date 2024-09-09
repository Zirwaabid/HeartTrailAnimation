const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX
    const ypos = event.offsetY
    const spanE1 = document.createElement("span");
    spanE1.style.left = xpos + "px";
    spanE1.style.top = ypos + "px";
    bodyE1.appendChild(spanE1);
    const size = Math.random() * 100;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";
    setTimeout(() => {
        spanE1.remove()
    }, 3000);
})