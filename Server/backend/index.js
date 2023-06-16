const express = require("express")
const app = express();
const cors = require("cors");
const moviesList = require("./movies.json")


app.use(cors());
app.use(express.json());
console.log(moviesList.length)


app.get("/api/movies/",(req,res)=>{
    const { movieName }= req.query;

    const filteredMovieList = moviesList.filter(
        (movie) => movie.title.toLowerCase().includes(movieName.toLowerCase())
      );

    res.json(filteredMovieList)
})


const PORT = 3005;
app.listen(PORT,()=>{
    console.log("server started");
})
