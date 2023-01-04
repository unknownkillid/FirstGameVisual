let startGame = document.getElementById('start-game-container');
let settingsMenu = document.getElementById('sett-menu');
let shopMenu = document.getElementById('shop-container');
let rocket = document.getElementById("rocket");
let clickAudio = new Audio();
let startAudio = new Audio();
let clickMuted = new Audio();
let gameMusic = new Audio();

gameMusic.src = "Items/sounds/music/gameMusic.mp3";
clickAudio.src = "Items/sounds/clicksound.mp3";
startAudio.src = "Items/sounds/startGame.wav";

function startGameSound() {
  startAudio.play();
}

function muteAudio() {
  clickAudio.pause();
}

function onClickSound() {
  clickAudio.play();
}

function pauseAllAudio() {
  clickAudio.pause();
}

function startingGame() {
  startGame.style.display = 'none'
}

function settingMenuHide() {
  if (settingsMenu.style.display === 'block') {
    settingsMenu.style.display = 'none';
  } else {
    settingsMenu.style.display = 'block';
  }
}

function reset() {
  location.reload();
}

function shopMenuHide() {
  if (shopMenu.style.display === 'block') {
    shopMenu.style.display = 'none';
  } else {
    shopMenu.style.display = 'block';
  }
}

function shopShowOtherHide() {
  if (shopMenu.style.display === 'block') {
    settingsMenu.style.display = 'none';
    startGame.style.display = 'none';
  }
}

function settingsMenuOtherHide() {
  if (settingsMenu.style.display === 'block') {
    shopMenu.style.display = 'none';
    startGame.style.display = 'none';
  }
}

function startGameOtherHide() {
  if (startGame.style.display = 'block') {
    shopMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
  }
}

function closeShopMenu() {
  if (shopMenu.style.display === 'block') {
    shopMenu.style.display = 'none';
  }
}

function xSettingsMenu() {
  settingsMenu.style.display = 'none';
}

// rocket functions and shooting ----------------------------

const Start = document.querySelector("#start-game-container");
let x = 292;
let y = 500;
const left_side = 0;
const right_side = 580;
const top_max = 100;
const bottom_max = 490;
let angle = 0;
var currentBulletId = 0;

Start.addEventListener("click", () => {
  accelerateRocket();
});
function accelerateRocket() {
  
  document.addEventListener("keydown", (event) => {

    switch (event.key) {
      case "ArrowUp":
        if (y - 10 < top_max) {
          break;
        } else {
          rocket.style.transform = 'rotateZ(-47deg)';
        }

        y -= 50;
        break;

      case "ArrowLeft":
        if (x - 10 < left_side) {
          break;
        } else {
          rocket.style.transform = 'rotateZ(-84deg)'
        }

        x -= 50;
        break;

      case "ArrowDown":
        if (y + 10 > bottom_max) {
          break;
        } else {
          rocket.style.transform = 'rotateZ(-47deg)';
        }

        y += 50;
        break;

      case "ArrowRight":
        if (x + 10 > right_side) {
          break;
        } else {
          rocket.style.transform = 'rotateZ(-10deg)';
        }

        x += 50;
        break;
    }


    rocket.style.left = x + "px";
    rocket.style.top = y + "px";

    if (event.code === "Space") {
      currentBulletId++;
      const tyvia = document.getElementById("bullet-animated");
      tyvia.id = `bullet-animated${currentBulletId}`;
      document.body.appendChild(tyvia);
      const bullet = document.getElementById(`bullet-animated${currentBulletId}`);
      bullet.style.position = "absolute";
      bullet.style.top = y - -20 + "px";
      bullet.style.left = x + 455 + "px";
      bullet.style.height = "50px";
      bullet.style.width = "50px";

      if (event.code === "Space") {
        bullet.style.display = 'block';
       
      }
      

      let position = bullet.offsetTop;
      const interval = setInterval(function () {
        position -= 20;
        bullet.style.top = position + "px";

        if (position <= bottom_max - 300) {
          bullet.remove();
          clearInterval(interval);
        }
      }, 100);
    }
  });
}


// გავაკეთოთ რაკეტის გასწორების ფუნქცია querryselector-ით

let mute = document.querySelector('#check-sound');

mute.addEventListener('click', function () {
  if (mute.checked) {
    clickAudio.volume = 0;
    startAudio.volume = 0;
  } else {
    clickAudio.volume = 1;
    startAudio.volume = 1;
  }
})

// game background music===============================================

// let audioElement = document.getElementById('my-audio');
// let playButton = document.getElementById('check-sett');

// audioElement.play();

// playButton.addEventListener('click', function() {
//   if (playButton.checked) {
//     audioElement.pause();
//   } else {
//     audioElement.play();
//   }
// });
