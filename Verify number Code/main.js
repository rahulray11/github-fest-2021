const close = document.getElementById("close");
const nbr1 = document.querySelector("#nbr-1");
const nbr2 = document.querySelector("#nbr-2");
const nbr3 = document.querySelector("#nbr-3");
const nbr4 = document.querySelector("#nbr-4");
const nbr5 = document.querySelector("#nbr-5");
const send = document.getElementById("send");
close.onclick = function () {
  const parentEl = close.parentElement.parentElement;
  parentEl.remove();
};
console.log(nbr1);
window.onload = function () {
  nbr1.focus();
};
nbr1.onkeyup = function (e) {
  if (nbr1.value.length > 0) {
    e.preventDefault();
    nbr2.focus();
    e.target.blur();
  }
};
nbr2.onkeyup = function (e) {
  if (nbr2.value.length > 0) {
    e.preventDefault();
    e.target.blur();
    nbr3.focus();
  }
};
nbr3.onkeyup = function (e) {
  if (nbr3.value.length > 0) {
    e.preventDefault();
    e.target.blur();
    nbr4.focus();
  }
};
nbr4.onkeyup = function (e) {
  if (nbr4.value.length > 0) {
    e.preventDefault();
    e.target.blur();
    nbr5.focus();
  }
};
nbr5.onkeyup = function (e) {
  if (nbr5.value.length > 0) {
    e.preventDefault();
    e.target.blur();
    // nbr3.focus();
  }
};
// code correct 41976
send.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    nbr1.value == "4" &&
    nbr2.value == "1" &&
    nbr3.value == "9" &&
    nbr4.value == "7" &&
    nbr5.value == "6"
  ) {
    alert("Your Code is Corrct");
  } else {
    alert("Please enter valid code");
  }
});
