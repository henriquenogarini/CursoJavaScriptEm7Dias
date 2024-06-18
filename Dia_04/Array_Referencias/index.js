//Encontrando itens de referência dentro de uma Array

const movies = [
    {id: 1, movieName: 'Shrek3'},
    {id: 2, movieName: 'Shrek2'},
    {id: 3, movieName: 'Shrek'}
]

console.log(movies.find(function(movie) {
    return movie.movieName == 'The Matrix'
}))
