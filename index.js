const fs = require('fs');
let movieList = [];

try {
    let tempJson = fs.readFileSync('./netflix.json');
    let tempNetflix = JSON.parse(tempJson);
    movieList.push(tempNetflix);
} catch (error) {
    movieList = [];
};


const add = () => {
    if (process.argv[2] === "add") {
        tempMovie = {movie: process.argv[3]};
        movieList.push(tempMovie);
        let stringMovieList = JSON.stringify(movieList);
        console.log(stringMovieList);
        fs.writeFileSync('./netflix.json', stringMovieList);
    };
};

add();



const read = () => {
    if (process.argv[2] === "read") {
        tempMovie = {movie: process.argv[3]};
        movieList.push(tempMovie);
        let stringMovieList = JSON.stringify(movieList);
        console.log(stringMovieList);
    }
};

read();


const remove = () => {
    if (process.argv[2] === "remove") { 
  let temp = (i) => {
            return i = {movie: process.argv[3]};
        }
       let index = movieList.findIndex(temp);
      

       console.log(index)

    //     let stringMovieList = JSON.stringify(movieList);
    //     console.log(stringMovieList);
    //     fs.writeFileSync('./netflix.json', stringMovieList);
    }
};

remove();