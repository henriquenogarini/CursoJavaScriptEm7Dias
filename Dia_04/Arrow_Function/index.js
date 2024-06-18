const movies = [
    {id: 1, movieName: 'Shrek3'},
    {id: 2, movieName: 'Shrek2'},
    {id: 3, movieName: 'Shrek'}
]

console.log(movies.includes({id: 1, movieName: 'Shrek3'}))

//Arrow Function
console.log(movies.find(movie => movie.movieName == 'Shrek3'))