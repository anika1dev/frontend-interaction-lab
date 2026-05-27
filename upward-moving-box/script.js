const box = document.getElementById("box");
const containerHeight = boxContainer.offsetHeight;
const boxHeight = box.offsetHeight;
let y=0;
setInterval(() => {
  if(y < -(boxHeight+100)){
    y = containerHeight;
  }
  y=y-1;
  box.style.transform = `translateY(${y}px)`;
}, 16);