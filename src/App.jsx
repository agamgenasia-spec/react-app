import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import MovieCard from "./components/MovieCard";
import Ticket from "./components/Ticket";
import MovieDetails from "./components/MovieDetails";
import MovieDetails from "./components/MovieDetails";
function App(){
  const movie = {
title: "Dune: Part Two",
director: "Denis Villeneuve",
duration: 166,
minAge: 13
  };
  return (
    <div>
  <MovieCard title="Inside Out 2" genre= "Animation" year={2024} rating={7.6/10} />
 <MovieCard title="Spider-Man: Across the Spider-Verse" genre= "Animation" year={2023} rating={8.5/10} />
 <MovieCard title="Dune: Part Two" genre= "Sci-Fi" year={2024} rating={8.5/10} />
 <Ticket price={45} seat="F12" hall={3} movie= "Dune: Part Two" count= {2}/>
 <MovieDetails movie={movie}/>
  </div>
  )
}

export default App;
