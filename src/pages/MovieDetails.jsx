import {useLocation} from 'react-router-dom'

export default function MovieDetails () {

    // Pull the movie from the location state
    const {movie} = useLocation().state;

    const {id, title, director, releaseYear, IMDbRating, categories, actors, storyline} = movie

    // make categoryList a list of uppercase <div> elements with a space between each

    const categoryList = categories.map((category, index) => (
        <div className='details-category' key={index}> {category.toUpperCase()}</div>
    ))

    const actorsList = actors.join(', ')

    return (
        <div>
            <h1 key={id}>{title}</h1>
            {categoryList}
            <p>Release Year: {releaseYear} * IMDb Rating: {IMDbRating}</p>
            <p>Storyline: {storyline}</p>
            <p>Director: {director}</p>
            <p>Actors: {actorsList}</p>
        </div>
    )
}