import {useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function MovieDetails () {

    // Pull the movie from the location state
    const {movie} = useLocation().state;

    // Destructure the movie object so we can use the properties directly
    const {id, title, director, releaseYear, IMDbRating, categories, actors, storyline} = movie

    // make categoryList a list of uppercase <div> elements with a space between each

    const categoryList = categories.map((category, index) => (
        <div className='Details-category' key={index}> {category.toUpperCase()}</div>
    ))

    const actorsList = actors.join(', ')

    return (
        <div className='Movie-details'>
            <h1 key={id}>{title}</h1>
            <div className='Details-categories'>{categoryList}</div>
            <p id='Details-year'><span>Release Year:</span> {releaseYear} </p> 
            <p id="Details-rating">IMDb Rating: {IMDbRating}<FontAwesomeIcon icon={faStar} size='xs' /></p>
            <p id='Details-storyline'><span>Storyline:</span> {storyline}</p>
            <p id='Details-director'><span>Director:</span> {director}</p>
            <p id='Details-actors'><span>Actors:</span> {actorsList}</p>
        </div>
    )
}