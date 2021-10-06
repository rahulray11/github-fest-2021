for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function (e) {
      var btnInnerHTML = this.innerHTML;
      pressed(btnInnerHTML);
      shadows(btnInnerHTML);
    });
}
document.addEventListener("keypress", function (e) {
  pressed(e.key);
  shadows(e.key);
})

function pressed(btnInnerHTML){
  switch (btnInnerHTML) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
      case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    default:console.log(btnInnerHTML);
      break;
  }
}

function shadows(btnInnerHTML){
  document.querySelector("."+btnInnerHTML).classList.add("pressed");

setTimeout(() => {
  document.querySelector("."+btnInnerHTML).classList.remove("pressed");
}, 1000);
}