const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


var movieBox = document.getElementById('movie-box')

const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    showMovies(data.results)
}
getMovies(APIURL)

const showMovies = (data) => {
    movieBox.innerHTML = ""

    data.forEach(
        (result) => {
            const box = document.createElement('div')
            box.classList.add('box')
            box.innerHTML = `
            <img src="${IMGPATH + result.poster_path}" alt="" />
            <div class="overlay">
                <div class="title"> 
                    <h2> ${result.original_title}  </h2>
                    <span> ${result.vote_average}<span>
                </div>
                <h3>Overview:</h3>
                <p> 
                ${result.overview
                }
                </p>
             </div>
            `
            movieBox.appendChild(box)
        });



}

document.getElementById('search').addEventListener('keyup',
    function (e) {
        
        if (e.target.value != "") {
            getMovies(SEARCHAPI + e.target.value)
        }
        getMovies(APIURL)
    }
)


