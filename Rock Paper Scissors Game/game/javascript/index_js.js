function name_change() {
    var text = document.getElementById('userInput').value;
    localStorage.setItem("myValue", text);
    window.location.href = "game/game.html";
}