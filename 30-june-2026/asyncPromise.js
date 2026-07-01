let movies = [
  {
    movieId: 101,
    movieName: "hero",
    type: "action",
  },
  {
    movieId: 102,
    movieName: "Ram lakhan",
    type: "action",
  },
  {
    movieId: 103,
    movieName: "hum sath sath hai",
    type: "loving",
  },
  {
    movieId: 104,
    movieName: "stree 2",
    type: "horror comedy",
  },
  {
    movieId: 105,
    movieName: "welcome to the jungle",
    type: "drama",
  },
];
let cinemas = [
  {
    movieId: 101,
    hallName: "PVR",
  },
  {
    movieId: 101,
    hallName: "wave Cinema",
  },
  {
    movieId: 102,
    hallName: "VVIP",
  },
  {
    movieId: 102,
    hallName: "KW-DELHI6",
  },
  {
    movieId: 102,
    hallName: "d-mall",
  },
];
function getMovieId(id) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let movie = movies.find((movie) => movie.movieId === id);
      if (movie) {
        resolve(movie);
      } else {
        reject("movie not found in database...");
      }
    }, 3000);
  });
  return pr;
}

function getCinemas(movieId) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      let movieCinemas = cinemas.filter((cinema) => cinema.movieId === movieId);
      if (movieCinemas) {
        resolve(movieCinemas);
      } else {
        reject("No cinema hall found...");
      }
    }, 5000);
  });
  return pr;
}
function getTicket(cinemaName) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cinemaName === "PVR") {
        resolve({
          Diamond: 600,
          Gold: 400,
          Silver: 300,
        });
      } else {
        reject("No cinema Name found in db...");
      }
    }, 3000);
  });
  return pr;
}
async function movieSummary() {
  //async lagane s vo by default vo hota h jisme time ka pta n chale
  try {
    let movie = await getMovieId(101); //resolve k according bheji gyi cheezi movie m aayengi aur await ka mtlb h vo promise return krega aur vo asynconous h ye pta chl gya
    let cinemas = await getCinemas(movie.movieId);
    let ticket = await getTicket(cinemas[0].hallName);
    console.log(ticket);
  } catch (err) {}
}
movieSummary();
