window.addEventListener("keydown",playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //if not attach audio fn not run
  // console.log(audio);for check audio value
  audio.play(); //play audio
  audio.currentTime = 0; //we assign 0s time for playing audio
  // console.log(key);for check key value

  key.classList.add("playing");
  // they both are also used like .add
  // key.classList.toogle('playing');
  // key.classList.remove('playing');
}

function removeTransition(e) {
// console.log(e);just for check fn work or not 
if(e.propertyName != 'transform')return;//skip if it is not transition
// console.log(e.propertyName);//for check if fn for transform work or not
// console.log(this);this is the keyword in js which aims to fn for which event listener apply 'key'.
this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key =>
  key.addEventListener('transitionend', removeTransition)
);