// import React, { useContext } from "react";
// import MoviesContext from "../providers/MoviesProvider";
import { Outlet } from "react-router-dom";

const categoryName = ''

export default function Category({movies, category}) {

    // const {movies} = props;
    // const [moviesList, setMovieList] = useContext(MoviesContext);
    // console.log('Scifi MoviesContext:',MoviesContext);
    // console.log('Scifi movieList:',movieList);
    switch(category) {
        case 'scifi':
            categoryName = 'Sci-Fi '
            break;
        case 'comedy':
            categoryName = 'Comedy '
            break;
        case 'action':
            categoryName = 'Action '
            break;
        case 'fantasy':
            categoryName = 'Fantasy '
            break;
        case 'adventure':
            categoryName = 'Adventure '
            break;
        default:
            categoryName = ''
    }
    // const scifiMovies = movies.filter((movie) => movie.categories.some (cat => cat === "sci-fi"));

    return (
        <div>
            <h1>Marvel {categoryName}Movies</h1>
            <p>Click a movie to see details.</p>
            <Outlet movies={movies} category={category} />
            {/* <ul>
                {scifiMovies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/scifi/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}