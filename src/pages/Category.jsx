// import React, { useContext } from "react";
// import MoviesContext from "../providers/MoviesProvider";
import { useParams } from "react-router-dom";
import MovieList from "../pages/MovieList";

let categoryName = ''

export default function Category({movies}) {

    // Pull the category from the URL
    const {category} = useParams();

    // const {movies} = props;
    // const [moviesList, setMovieList] = useContext(MoviesContext);
    // console.log('Scifi MoviesContext:',MoviesContext);
    // console.log('Scifi movieList:',movieList);

    // Get user-friendly category name
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

    return (
        <div>
            <h1>Marvel {categoryName}Movies</h1>
            <p>Click a movie to see details.</p>

            {/* Call the Outlet component to render the nested routes */}
            {/* <Outlet /> */}

            {/* Call the MoviesList component to render the nested routes */}
            <MovieList movies={movies} />
        </div>
    );
}