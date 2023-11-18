export default function MovieDetails (props) {

    const [id, title, director, releaseYear, IMDBrating, categories, actors, storyline] = props.movie
    return (
        <div>
        <h1 key={id}>{title}</h1>
        <p>Categories: {categories}</p>
        <p>Release Year: {releaseYear} * IMDB Rating: {IMDBrating}</p>
        <p>Storyline: {storyline}</p>
        <p>Director: {director}</p>
        <p>Actors: {actors}</p>
        </div>
    )
}