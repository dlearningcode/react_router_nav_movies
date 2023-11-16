import { createContext } from "react";
import {movies} from "../components/Movies";

export const MoviesContext = createContext();

export default function MoviesProvider({ children }) {

    return (
        <MoviesContext.Provider value={{movies}}>
            {children}
        </MoviesContext.Provider>
    )
}