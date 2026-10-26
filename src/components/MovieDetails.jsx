function MovieDetails({movie})
{
    return(
         <div>
    <h2> {movie.title}</h2>
    <p> Directed by {movie.director}</p>
    <p> {movie.duration/60}h {movie.duration%60}m </p>
    <p>Ages {movie.minAge}+</p>
     </div>
    );
   
}
export default MovieDetails;

