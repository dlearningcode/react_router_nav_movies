import { createContext, useState } from "react";
import { movies } from "../components/Movies";

export const MoviesContext = createContext();

export default function MoviesProvider({ children }) {

    const [movieList, setMovieList] = useState(movies);
    console.log('MoviesProvider movies:',movieList);

    return (
        <MoviesContext.Provider value={{movieList}}>
            {children}
        </MoviesContext.Provider>
    )
}