/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed=speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed/20/25;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function(){
    this.left += -this.speed/20/25;
    console.log('ok: ' + this.left);
  }
  this.moveUp = function(){
    this.top += -this.speed/20/25;
    console.log('ok: ' + this.top);
  }
  this.moveDown = function(){
    this.top += this.speed/20/25;
    console.log('ok: ' + this.top);
  }

}

let hero = new Hero('songohan.jpg', 20, 30, 200,400);

function rightArrowPressed(){
    hero.moveRight();

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(rightArrowPressed, 1)
}
function leftArrowPressed(){
    hero.moveLeft();

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(leftArrowPressed, 1)
}
function upArrowPressed(){
    hero.moveUp();

  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(upArrowPressed, 1)
}
function downArrowPressed(){
    hero.moveDown();
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(downArrowPressed, 1)
}
function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 38:
      upArrowPressed();
      break;
    case 40:
      downArrowPressed();
      break;
  }
}
function docReady() {
  window.addEventListener('keydown', moveSelection);
}