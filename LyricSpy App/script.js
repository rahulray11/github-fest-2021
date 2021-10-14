const form = document.getElementById("form");
const search = document.getElementById("search");
const results = document.getElementById("results");

const apiURL = "https://api.lyrics.ovh";

async function searchSongs(query) {
  const response = await fetch(`${apiURL}/suggest/${query}`);
  const data = await response.json();
  showResults(data);
}

async function getLyrics(artist, songTitle) {
  const response = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await response.json();
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");
  results.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
  <span>${lyrics}</span>`;
}

function showResults(data) {
  let output = "";
  data.data.forEach((song) => {
    output += `
      <li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
      </li>
    `;
  });
  results.innerHTML = `
    <ul class="songs">
      ${output}
    </ul>
  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchQuery = search.value.trim();
  if (!searchQuery) {
    alert("Please provide the name of a song or artist");
  } else {
    searchSongs(searchQuery);
  }
});

results.addEventListener("click", (e) => {
  const clickedElement = e.target;

  if (clickedElement.tagName === "BUTTON") {
    const artist = clickedElement.getAttribute("data-artist");
    const songTitle = clickedElement.getAttribute("data-songtitle");
    getLyrics(artist, songTitle);
  }
});
