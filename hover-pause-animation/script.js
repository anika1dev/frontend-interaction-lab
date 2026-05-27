
const pauseBox = document.getElementById("pauseBox");
const pauseContainerHeight = pauseContainer.offsetHeight;
const pauseBoxHeight = pauseBox.offsetHeight;
let z =0;
let intervalID;  
function startAnimation(){
  
  intervalID = setInterval(() => {
  if(z < -(pauseContainerHeight)){
    z = pauseBoxHeight+100;
  }
  z = z-1;
  pauseBox.style.transform = `translateY(${z}px)`;
}, 5);
}
pauseBox.addEventListener("mouseenter", ()=>{
  clearInterval(intervalID);
});
pauseBox.addEventListener("mouseleave", ()=>{
  startAnimation();
});
