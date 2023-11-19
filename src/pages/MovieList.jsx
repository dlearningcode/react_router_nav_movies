// import React, { useContext } from "react";
// import MoviesContext from "../providers/MoviesProvider";
import { Link } from "react-router-dom";

export default function MovieList({movies, category}) {

    return (
        <ul>
            {movies.filter((movie) => movie.categories.includes(category)).map((movie) => (
                <li key={movie.id}>
                    <Link to={`/${category}/${movie.id}`} movie={movie}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}