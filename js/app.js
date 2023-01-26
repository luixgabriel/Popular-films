const apiURL = "https://api.themoviedb.org/3/movie/popular?api_key=00bb3908ca1c5f0bcd63e7eaf926d628&language=en-US&page=1"

async function getMovies(){
     var response = await fetch(apiURL)
     var data = await response.json()
     var movies = data.results
     return movies
    
}


async function popularMovies(){

      
      var favMoviesArr = []
        
        var moviesList = await getMovies() 
        const listMovies = document.querySelector('.films')
        const favoriteMovies = document.querySelector('.favMovies')
        moviesList.forEach(movie => {
            const { poster_path, title, vote_average, overview } = movie;
            var poster = `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
            
            
            const divFilm = document.createElement('div')
            divFilm.classList.add('film')
            divFilm.innerHTML = ` 
            <h4>${movie.title}</h4>
            <img src="${poster}">
            <p>
               ${overview}
            </p>
            `

         var btnFav = document.createElement('button')
         btnFav.textContent = 'Assistir mais tarde'
         btnFav.classList.add('favBtn')
         btnFav.setAttribute('id', movie.id)


         btnFav.addEventListener('click', listFavmovies)
        
       
         btnFav.addEventListener('click', ()=>{
            btnFav.textContent = 'Adicionado aos meus filmes!'
            btnFav.style.backgroundColor = "#4287f5"
         })


         async function listFavmovies(){

            var idFavMovie = btnFav.getAttribute("id")

               var response = await fetch(`https://api.themoviedb.org/3/movie/${idFavMovie}?api_key=00bb3908ca1c5f0bcd63e7eaf926d628&language=en-US`)
               var data = await response.json()

               favMoviesArr.push(data.title)

               
               console.log(favMoviesArr)

               var divFavMovie = document.createElement('div')
               divFavMovie.classList.add('favFilm')

               divFavMovie.innerHTML = `<h4>${data.title}</h4>
               <img src="${poster}">
               <p>
                  ${overview}
               </p>
               `

               favoriteMovies.appendChild(divFavMovie)
         }
         
         listMovies.appendChild(divFilm)
         listMovies.appendChild(btnFav)
        
        });

}

popularMovies()

