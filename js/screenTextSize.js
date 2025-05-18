let defaultTextSize = 40; //px
let textsize = defaultTextSize;

// let screen = document.querySelector(".screen h2");
// ajustSize(screen);



//check if screen is overflowing
function isOverflowing(elm){
  let overlow = elm.clientWidth < elm.scrollWidth;
  return overlow;
}

function ajustSize(elm){
    // decrease text size untill it fits
    while(isOverflowing(elm)){
      elm.style.fontSize = `${textsize}px`;
      textsize-=1;
    }
    //return to default but dont apply it
    textsize = defaultTextSize;
}

function resetTextSize(elm){
  textsize = defaultTextSize;
  elm.style.fontSize = `${textsize}px`;
}