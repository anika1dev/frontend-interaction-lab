const prev = document.getElementById("prev");
const next = document.getElementById("next");
const track = document.getElementById("track");

let cards = document.querySelectorAll(".card");

const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length-1].cloneNode(true);

track.insertBefore(lastClone, cards[0]);
track.appendChild(firstClone);

cards = document.querySelectorAll(".card");

let index = 1;
function getCards(){
  return document.querySelectorAll(".card");
}
function updateWidth(){
  return getCards()[0].offsetWidth;
}
track.style.transform = `translateX(${-index*updateWidth()}px)`;

next.addEventListener("click", ()=>{
  index++;
  move();
});

prev.addEventListener("click", ()=>{
  index--;
  move();
});

function move(){
  track.style.transition = "transform .4s ease";
  track.style.transform = `translateX(${-index*updateWidth()}px)`;
}

track.addEventListener("transitionend", ()=>{
  const slides = cards.length;

  if(index === 0){
    track.style.transition = "none";
    index = slides-2;
    track.style.transform = `translateX(${-index*updateWidth()}px)`;
  }
  if(index === slides-1){
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(${-index*updateWidth()}px)`;
  }
});

window.addEventListener("resize", ()=>{
  track.style.transition = "none";
  track.style.transform = `translateX(${-index*updateWidth()}px)`;
})
