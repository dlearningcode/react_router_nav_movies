import { Link, useParams } from "react-router-dom";

export default function MovieList({movies}) {

    // Pull the category from the URL
    const {category} = useParams();

    if (category === 'all') {
        return (
            <ul>            
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{movie: movie}}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <ul>
                {movies.filter((movie) => movie.categories.includes(category)).map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{movie: movie}}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}