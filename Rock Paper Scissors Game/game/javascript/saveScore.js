function print_Score() {

    // Get the data from each element on the form.

    // This variable stores all the data.
    let data =
        '\r **THANK YOU**FOR PLAYING ROCK PAPER SCISSORS GAME\r\n' +
        '\r User Name:' + localStorage.getItem("myValue") + '\r\n' +
        '\r *** HERE IS YOUR SCORE-CARD ***\r\n' +
        '\r -User-Score: ' + userScore + ' \r\n ' +
        '-Computer-Score: ' + compScore + ' \r\n ' +
        '-Final-Score: ' + final_Score + ' \r\n ' +
        '\r *** DEVELOPED BY AYAZ ALAM ***\r\n';

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], {
        type: 'text/plain'
    });
    const sFileName = 'Score.txt'; // The file to save the data.
    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}