// task: array of movies 5=> movie:
// movieId, movieName, movieType, movieActor
// 1.function getMovie(id) => will return movieName, it will take 6 seconds
// 2. getCinemas(movieName)=> return 4 names of cinema halls, it will take 5 second
// 3. getTickets(cinemaName)=> returns TicketPrice{ Premium : 400, Diamond : 300, Gold : 200} 
// it will take 3 second
// 4. displayTicket => it will simply print the tiket
let movies = [
    {
        movieId : 101,
        movieName : 'Pushpa 2',
        movieType : 'Action',
        movieActor : 'Allu Arjun'
    },
    {
        movieId : 102,
        movieName : 'Animal',
        movieType : 'Drama',
        movieActor : 'Ranbir Kapoor'
    },
    {
        movieId : 103,
        movieName : 'KGF 2',
        movieType : 'Action',
        movieActor : 'Yash'
    },
    {
        movieId : 104,
        movieName : 'Stree 2',
        movieType : 'Horror Comedy',
        movieActor : 'rajkumar Rao'
    },
    {
        movieId : 101,
        movieName : 'Jawan',
        movieType : 'Action',
        movieActor : 'Shah Rukh Khan'
    }
]
function getMovie(id, callback) {
    setTimeout(()=>{
        let movie = movies.find((movie)=> movie.movieId == id)
        console.log(movie);
        callback(movie.movieName);
    },6000)
}
function getCinemas(movieName, callback) {
    setTimeout(() => {
        let cinemas = ['PVR', 'wave cinemas', 'VVIP', 'd-mall'];
        console.log(`Cinemas movies ${movieName}:`);
        console.log(cinemas);
        callback(cinemas);
    },5000)
}
function getTicket(cinema, callback) {
    setTimeout(() => {
        let ticket = {
            Premium : 400,
            Gold : 200,
            Diamond : 100
        }
        callback(ticket);
    },3000)
}

getMovie(101, (movieName)=> {
    console.log(movieName);
    getCinemas(movieName, (cinemas)=> {
        console.log(cinemas[0]);
    getTicket(cinemas[0], (ticket) => {
        console.log(ticket);
    })
    })
});