const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=121048688a06fbbb9a824bf8fa797715&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=121048688a06fbbb9a824bf8fa797715&query="'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


getMovies(API_URL)

async function getMovies(url){
    const res =await fetch(url);
    const data = await res.json();
function showMovies(movies){
    main.innerHTML = '';

    movies.forEach((movie) =>{
        const { title,poster_path,vote_average, overview } = movie
        
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <div class="movie">
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title} </h3>
                <span class="${getclassByRate(vote_average)}'>${vote_average}</span>
            </div> 
            <div class="overview">
                <h3>
                    ${overview}
                </h3>
            </div>
        </div>
`
    main.appendChild(movieEl)

    })
    
}



form.addEventListener('submit',(e) => 
{
    e.preventDefault()

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API +  searchTerm)

        search.value = ''
    }else{
        window.location.reload()
    }
}) 
function getClassByRate(vote){
    if(vote >= 8){
        return 'green';
    }
    else if(vote >=5){
        return 'orange';
    }
    else{
        return 'red';
    }
}