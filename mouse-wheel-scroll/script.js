
const mouseWheelBox = document.getElementById("mouseWheelBox");
const mouseWheelContainerHeight = mouseWheelContainer.offsetHeight;
const mouseWheelBoxHeight = mouseWheelBox.offsetHeight;

const initialOffset  = (mouseWheelContainerHeight-mouseWheelBoxHeight)/2;

let a = 0;
mouseWheelContainer.addEventListener("wheel", (event)=>{
  if(a < -(mouseWheelBoxHeight + initialOffset)){
    a = mouseWheelContainerHeight;
  }
  if(a > mouseWheelContainerHeight){
    a = -(mouseWheelBoxHeight + initialOffset)
  }
  a = a - event.deltaY*0.5;
  mouseWheelBox.style.transform = `translateY(${a}px)`;
});