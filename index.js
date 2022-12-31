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
        }
        y -= 10;

        break;
      case "ArrowLeft":
        if (x - 10 < MIN_X) {
          break;
        }
        x -= 10;
        // setTimeout(() => {
        //   interval = setInterval(() => {
        //     angle += 10;
        //     rocket.style.transform = `rotate(${angle}deg)`;
        //   }, 100);
        // }, 2000);

        break;
      case "ArrowDown":
        if (y + 10 > MAX_Y) {
          break;
        }
        y += 10;
        break;
      case "ArrowRight":
        if (x + 10 > MAX_X) {
          break;
        }
        x += 10;
        break;
    }

    rocket.style.left = x + "px";
    rocket.style.top = y + "px";
    if (event.code === "Space") {
      currentBulletId++;
      const tyvia = document.createElement("div");
      tyvia.id = `bullet${currentBulletId}`;
      document.body.appendChild(tyvia);
      const bullet = document.getElementById(`bullet${currentBulletId}`);
      bullet.style.position = "absolute";
      bullet.style.top = y - 45 + "px";
      bullet.style.left = x + 59 + "px";
      bullet.style.background = "red";
      bullet.style.height = "50px";
      bullet.style.width = "3px";
      let position = bullet.offsetTop;
      const interval = setInterval(function () {
        position -= 50;
        bullet.style.top = position + "px";

        if (position <= MIN_Y - 70) {
          bullet.remove();
          clearInterval(interval);
        }
      }, 100);
    }
  });
}

