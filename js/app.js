

const apiURL = "https://api.themoviedb.org/3/movie/popular?api_key=00bb3908ca1c5f0bcd63e7eaf926d628&language=en-US&page=1"

async function getMovies(){
     var response = await fetch(apiURL)
     var data = await response.json()
     var movies = data.results
     return movies
    
}

getMovies()

async function popularMovies(){

       
        
        var moviesList = await getMovies() 
        const listMovies = document.querySelector('.films')
        console.log(listMovies)
        moviesList.forEach(movie => {
            const { poster_path, title, vote_average, overview } = movie;
            var poster = `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
            
            
            const divFilm = document.createElement('div')
            divFilm.classList.add('film')
            divFilm.innerHTML = ` <h4>${movie.title}</h4>
            <img src="${poster}">
            <p>
               ${overview}
            </p>`
        
           
           listMovies.appendChild(divFilm)


        });



        // const listMovies = document.querySelector('.films')
        // var nameMovie = document.createElement('h1')
        // nameMovie.textContent = moviesList[0].title
        // listMovies.appendChild(nameMovie)

}

popularMovies()

