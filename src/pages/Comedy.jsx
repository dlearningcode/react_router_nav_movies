// import React, { useContext } from "react";
// import MoviesContext from "../providers/MoviesProvider";

export default function Comedy(props) {

    const {movies} = props;

    // const {moviesList} = useContext(MoviesContext);
    // console.log('Comedy MoviesContext:',MoviesContext);
    // console.log('Comedy moviesList:',moviesList);
    const comedyMovies = movies.filter((movie) => movie.categories.some (cat => cat === "comedy"));

    return (
        <div>
            <h1>Marvel Comedy Movies</h1>
            <p>Click on the links above to browse the movies by category.</p>
            <ul>
                {comedyMovies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}