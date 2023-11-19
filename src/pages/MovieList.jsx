// import React, { useContext } from "react";
// import MoviesContext from "../providers/MoviesProvider";
import { Link, useParams } from "react-router-dom";

export default function MovieList({movies}) {

    // Pull the category from the URL
    const {category} = useParams();

    return (
        <ul>
            {movies.filter((movie) => movie.categories.includes(category)).map((movie) => (
                <li key={movie.id}>
                    <Link to={`/${movie.id}`} state={{movie: movie}}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}