import {useLocation} from 'react-router-dom'

export default function MovieDetails () {

    // Pull the movie from the location state
    const {movie} = useLocation().state;

    const {id, title, director, releaseYear, IMDBrating, categories, actors, storyline} = movie

    const categoryList = categories.map((category, index) => (
        <div className='details-category' key={index}> {category}</div>
    ))

    const actorsList = actors.join(', ')

    return (
        <div>
            <h1 key={id}>{title}</h1>
            {categoryList}
            <p>Release Year: {releaseYear} * IMDB Rating: {IMDBrating}</p>
            <p>Storyline: {storyline}</p>
            <p>Director: {director}</p>
            <p>Actors: {actorsList}</p>
        </div>
    )
}