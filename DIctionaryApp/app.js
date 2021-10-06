const resultDiv = document.querySelector(".result");
const wordEle = document.querySelector("#word");
const phonetics = document.querySelector(".phonetics");
const audio = document.querySelector("audio");
const wordMeaning = document.querySelector(".word-definition");

const handle = async (e) => {
  if (e.keyCode === 13) {
    const word = e.target.value;
    console.log(e.target.value);
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await result.json();
    resultDiv.style.display = "block";
    if (result.ok) {
      wordEle.innerText = data[0].word;
      phonetics.innerText = data[0].phonetics[0].text;
      audio.src = data[0].phonetics[0].audio;
      wordMeaning.innerText = data[0].meanings[0].definitions[0].definition;
      const synonyms = data[0].meanings[0].definitions[0].synonyms;
      let synonymsData = "";
      for (let i = 0; i < synonyms.length; i++) {
        synonymsData += `<button class="pills" onclick={newword(this.textContent)}>${synonyms[i]}</button>`;
      }
      document.querySelector(".synonyms").innerHTML = synonymsData;
      return;
    } else {
      audio.style.display = "none";
      document.querySelectorAll(".meaningheading")[0].style.display = "none";
      document.querySelectorAll(".meaningheading")[1].style.display = "none";
      wordEle.innerText = data.title;
      wordMeaning.innerText = data.message;
    }
  }
};

const newword = async (synonym) => {
  const word = synonym;
  console.log(synonym);
  document.getElementById('wordinput').value=word;
  const result = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const data = await result.json();
  resultDiv.style.display = "block";
  if (result.ok) {
    wordEle.innerText = data[0].word;
    phonetics.innerText = data[0].phonetics[0].text;
    audio.src = data[0].phonetics[0].audio;
    wordMeaning.innerText = data[0].meanings[0].definitions[0].definition;
    const synonyms = data[0].meanings[0].definitions[0].synonyms;
    let synonymsData = "";
    for (let i = 0; i < synonyms.length; i++) {
      synonymsData += `<button class="pills" onclick={newword(this.textContent)}>${synonyms[i]}</button>`;
    }
    document.querySelector(".synonyms").innerHTML = synonymsData;
    return;
  } else {
    audio.style.display = "none";
    document.querySelectorAll(".meaningheading")[0].style.display = "none";
    document.querySelectorAll(".meaningheading")[1].style.display = "none";
    wordEle.innerText = data.title;
    wordMeaning.innerText = data.message;
  }
}