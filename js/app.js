

const apiURL = "https://api.themoviedb.org/3/movie/popular?api_key=00bb3908ca1c5f0bcd63e7eaf926d628&language=en-US&page=1"

async function getMovies(){
     var response = await fetch(apiURL)
     var data = await response.json()
     var movies = data.results
     return movies
    
}


async function popularMovies(){

      var favMovies;
        
        var moviesList = await getMovies() 
        const listMovies = document.querySelector('.films')
        const favoriteMovies = document.querySelector('.favMovies')
        moviesList.forEach(movie => {
            const { poster_path, title, vote_average, overview } = movie;
            var poster = `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
            
            
            const divFilm = document.createElement('div')
            // divFilm.setAttribute('id', movie.id)
            divFilm.classList.add('film')
            divFilm.innerHTML = ` 
            <h4>${movie.title}</h4>
            <img src="${poster}">
            <p>
               ${overview}
            </p>
            `

         var btnFav = document.createElement('button')
         btnFav.textContent = "fav film"
         btnFav.classList.add('favBtn')
         btnFav.setAttribute('id', movie.id)


         btnFav.addEventListener('click', listFavmovies)
        
         // divFilm.addEventListener('mouseover', ()=>{
         //    btnFav.classList.remove('favBtn')
         //    btnFav.classList.add('hide')
         // })

         // btnFav.addEventListener('mouseout', ()=>{
         //    btnFav.classList.remove('hide')
         //    btnFav.classList.add('favBtn')
         // })
         async function listFavmovies(){

            var idFavMovie = btnFav.getAttribute("id")

               favMovies = idFavMovie

               var response = await fetch(`https://api.themoviedb.org/3/movie/${favMovies}?api_key=00bb3908ca1c5f0bcd63e7eaf926d628&language=en-US`)
               var data = await response.json()

           
               console.log(data.title)
               favMovies = "" 

               var divTeste = document.createElement('div')
               divTeste.classList.add('favFilm')

               divTeste.innerHTML = `<h4>${data.title}</h4>
               <img src="${poster}">
               <p>
                  ${overview}
               </p>
               `

               favoriteMovies.appendChild(divTeste)

        
           
         }
         
         listMovies.appendChild(divFilm)
         listMovies.appendChild(btnFav)
         //   const favButton = document.createElement('button')
         //   favButton.textContent = "Adicionar aos favoritos"
         //   favButton.appendChild(divFilm)
        });

      
       

       
        // const listMovies = document.querySelector('.films')
        // var nameMovie = document.createElement('h1')
        // nameMovie.textContent = moviesList[0].title
        // listMovies.appendChild(nameMovie)

}

popularMovies()



