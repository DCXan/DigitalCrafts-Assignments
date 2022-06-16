
const genreSelect = document.getElementById('genreSelect')
const applyFilterButton = document.getElementById('applyFilterButton')
const genreForm = document.getElementById('genreForm')

genreForm.addEventListener('submit',function(event) {

    const genre = genreSelect.value
    window.location.href = `/movies/genre/${genre}`

    event.preventDefault() 

})

