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

app.post("/api/movies/",(req,res)=>{
    const {movieName} = req.body;
    moviesList.push({
        id:Date.now(),
        title:movieName,
        poster_path:" ",
        
    })

    console.log(req.body)
    res.json(moviesList)
})

app.delete("/api/movies", (req, res) => {
    const { movieName } = req.body;
    const filteredMovieList = movieList.filter(
      (movie) => movie.title.toLowerCase() !== movieName.toLowerCase()
    );
  
    res.json({
      results: filteredMovieList,
    });
  });
  

const PORT = 3005;
app.listen(PORT,()=>{
    console.log("server started");
})