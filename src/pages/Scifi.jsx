import React, { useContext } from "react";
import MoviesContext from "../Providers/MoviesProvider";

export default function Scifi() {

    const { movies } = useContext(MoviesContext);
    console.log(movies);
    const scifiMovies = movies.filter((movie) => movie.categories.some (cat => cat === "sci-fi"));

    return (
        <div>
            <h1>Sci-Fi Marvel Movies</h1>
            <p>Click on the links above to browse the movies by category.</p>
            <ul>
                {scifiMovies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}