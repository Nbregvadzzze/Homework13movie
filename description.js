const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

const main = document.getElementById("main");

const movie = localStorage.getItem("movie");

const similar = document.getElementById("similar");

console.log(JSON.parse(movie));
const movieData = JSON.parse(movie)

const movieDesc = document.createElement("div")

movieDesc.classList.add("container");

movieDesc.innerHTML =`

    <img src="${IMG_PATH + movieData.backdrop_path}" >
    <div class = "row mt-5">
    div class="col-4">
    img src="${IMG_PATH + movieData.poster_path}">
    </div>
    <div class="col-8">
    <h3 class="text-white">${movieData.title}</h3>
    <p class="text-white">${movieData.overview}</p>
    <p>${movieData.original_language}</p>
    <p>${movieData.vote_average}</p>
    </div>
    </div>
`
main.appendChild(movieDesc)

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}
// function showMovies(movies) {
//     similar.innerHTML = "";

//     const smallMovies = (movies =
//         .sort(() => Math.random() - Math.random())
//         .slice(0.3));
// }

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}