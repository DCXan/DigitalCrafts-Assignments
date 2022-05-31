const dropdown = document.getElementById('dropdownMenu')
const movieDisplay = document.getElementById('movieDisplay')

let request = new XMLHttpRequest()
request.open('get', 'http://www.omdbapi.com/?s=batman&apikey=ab30b59c')
request.send()

request.addEventListener('load', function(){

    let movies = JSON.parse(this.responseText)

    let movieArray = movies.Search
    let movieItem = movieArray.map(function(movie){
        let title = movie.Title
        let poster = movie.Poster

        return `<div class = "option" onclick = "movieSelected('${movie.imdbID}')"><a href="#">
        <img src="${poster}" id = "option">${title}</a></div>`
    })

    dropdown.insertAdjacentHTML('beforeend', movieItem.join(''))

})

function movieSelected(imdbID){
    console.log(imdbID)
    let request2 = new XMLHttpRequest()
    let movieByID = `http://www.omdbapi.com/?i=${imdbID}&apikey=ab30b59c`
    request2.open('get', movieByID)
    request2.send()

    request2.addEventListener('load', function(){
        let movie = JSON.parse(this.responseText)

        let title = movie.Title
        let year = movie.Year
        let rating = movie.Rated
        let imgURL = movie.Poster
        let released = movie.Released
        let director = movie.Director

        movieDisplay.innerHTML = `<h2>${title}</h2>
        <ul>
        <li><b>Released:</b> ${released}</li>
        <li><b>Rated:</b> ${rating}</li>
        <li><b>Director:</b> ${director}</li>
        </ul>
        <img src = "${imgURL}">
        `

    })
   
}