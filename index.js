// start game small window hide 
function hide(){
    document.getElementById('start-game-container').style.display='none';
}

// reset game button function --------

function reset(){
  document.getElementById('start-game-container').style.display='';
}

// settings button function----------

function settingsHide(){
  const b = document.getElementById('sett-menu');
  if (b.style.display === 'block'){
    b.style.display ='none';
  } else{
    b.style.display ='block';
  }
}

function ifdisplay(){
  const f = document.getElementById('sett-menu');
  const w = document.getElementById('start-game-container');

  if (f.style.display === 'block') {
    w.style.display = 'none';
  }
}

function shop(){
  const shop = document.getElementById('shop-container');
  if (shop.style.display === 'block'){
    shop.style.display = 'none';
  } else {
    shop.style.display = 'block';
  }
}

// ფუნქცია უნდა გავაკეთო გლობალური ცვლადებით რომ ყველა ფუნქციაში არ 
// მომიწიოს გამოძახება თავიდან


// rocket functions and shooting ----------------------------

const Start = document.querySelector("#start-game-container");
let x = 706;
let y = 549;
const MIN_X = 390;
const MAX_X = 1029;
const MIN_Y = 150;
const MAX_Y = 560;
let angle = 0;

var currentBulletId = 0;
Start.addEventListener("click", () => {
  accelerateRocket();
});
function accelerateRocket() {
  // Get the current position of the rocket
  const rocket = document.getElementById("rocket");
  document.addEventListener("keydown", (event) => {
    // Attach keys to movement

    switch (event.key) {
      case "ArrowUp":
        if (y - 10 < MIN_Y) {
          break;
        } else{
          rocket.style.transform='rotateZ(-47deg)';
        }

        y -= 50;
        break;
  
      case "ArrowLeft":
        if (x - 10 < MIN_X) {
          break;
        } else{
          rocket.style.transform='rotateZ(-84deg)';
        }

        x -= 50;
        break;

      case "ArrowDown":
        if (y + 10 > MAX_Y) {
          break;
        }else{
          rocket.style.transform='rotateZ(-47deg)';
        }
        
        y += 50;
        break;

      case "ArrowRight":
        if (x + 10 > MAX_X) {
          break;
        } else {
          rocket.style.transform='rotateZ(-10deg)';
        }
          
        x += 50;
        break;
    }


    rocket.style.left = x + "px";
    rocket.style.top = y + "px";
    if (event.code === "Space") {
      currentBulletId++;
      const tyvia = document.getElementById("bullet-animated");
      tyvia.id = `bullet${currentBulletId}`;
      document.body.appendChild(tyvia);
      const bullet = document.getElementById(`bullet${currentBulletId}`);
      bullet.style.position = "absolute";
      bullet.style.top = y - 60 + "px";
      bullet.style.left = x + 40 + "px";
      bullet.style.height = "50px";
      bullet.style.width = "50px";

      if (event.code = "space"){
        tyvia.style.display='block';
      }


      let position = bullet.offsetTop;
      const interval = setInterval(function () {
        position -= 20;
        bullet.style.top = position + "px";

        if (position <= MIN_Y - 40) {
          bullet.remove();
          clearInterval(interval);
        }
      }, 100);
    }
  });
}

