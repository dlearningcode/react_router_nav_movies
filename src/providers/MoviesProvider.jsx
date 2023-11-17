import React, { createContext, useState } from "react";
// import { movies } from "../components/Movies";

export const MoviesContext = createContext([
    {
      id: 1,
      title: 'Iron Man',
      director: 'Jon Favreau',
      releaseYear: 2008,
      IMDbRating: 7.9,
      categories: ['action', 'adventure', 'sci-fi'],
      actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard', 'Jeff Bridges'],
      storyline: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    },
    {
      id: 2,
      title: 'Doctor Strange in the Multiverse of Madness',
      director: 'Sam Raimi',
      releaseYear: 2022,
      IMDbRating: 6.9,
      categories: ['action', 'adventure', 'fantasy'],
      actors: ['Benedict Cumberbatch', 'Elizabeth Olsen', 'Benedict Wong', 'Chiwetel Ejiofor'],
      storyline: 'Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.',
    },
    {
      id: 3,
      title: 'Thor: Ragnarok',
      director: 'Taika Waititi',
      releaseYear: 2017,
      IMDbRating: 7.9,
      categories: ['action', 'adventure', 'comedy'],
      actors: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett', 'Mark Ruffalo'],
      storyline: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.',
    },
    {
      id: 4,
      title: 'Captain America: Civil War',
      director: 'Anthony Russo, Joe Russo',
      releaseYear: 2016,
      IMDbRating: 7.8,
      categories: ['action', 'adventure', 'sci-fi'],
      actors: ['Chris Evans', 'Robert Downey Jr.', 'Scarlett Johansson', 'Sebastian Stan'],
      storyline: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    },
    {
      id: 5,
      title: 'Moon Knight',
      director: 'Mohamed Diab, Justin Benson, Aaron Moorhead',
      releaseYear: 2022,
      IMDbRating: 7.3,
      categories: ['action', 'adventure', 'fantasy'],
      actors: ['Oscar Isaac', 'Ethan Hawke', 'May Calamawy', 'Gaspard Ulliel'],
      storyline: "Steven Grant discovers he's been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.",
    },
    {
      id: 6,
      title: 'She-Hulk: Attorney at Law',
      director: 'Kat Coiro, Anu Valia',
      releaseYear: 2022,
      IMDbRating: 5.3,
      categories: ['action', 'adventure', 'comedy'],
      actors: ['Tatiana Maslany', 'Mark Ruffalo', 'Tim Roth', 'Ginger Gonzaga'],
      storyline: 'Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered Hulk.',
    }
  ]
);

export default function MoviesProvider({ children }) {

    const [movieList, setMovieList] = useState([
        {
          id: 1,
          title: 'Iron Man',
          director: 'Jon Favreau',
          releaseYear: 2008,
          IMDbRating: 7.9,
          categories: ['action', 'adventure', 'sci-fi'],
          actors: ['Robert Downey Jr.', 'Gwyneth Paltrow', 'Terrence Howard', 'Jeff Bridges'],
          storyline: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        },
        {
          id: 2,
          title: 'Doctor Strange in the Multiverse of Madness',
          director: 'Sam Raimi',
          releaseYear: 2022,
          IMDbRating: 6.9,
          categories: ['action', 'adventure', 'fantasy'],
          actors: ['Benedict Cumberbatch', 'Elizabeth Olsen', 'Benedict Wong', 'Chiwetel Ejiofor'],
          storyline: 'Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.',
        },
        {
          id: 3,
          title: 'Thor: Ragnarok',
          director: 'Taika Waititi',
          releaseYear: 2017,
          IMDbRating: 7.9,
          categories: ['action', 'adventure', 'comedy'],
          actors: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett', 'Mark Ruffalo'],
          storyline: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.',
        },
        {
          id: 4,
          title: 'Captain America: Civil War',
          director: 'Anthony Russo, Joe Russo',
          releaseYear: 2016,
          IMDbRating: 7.8,
          categories: ['action', 'adventure', 'sci-fi'],
          actors: ['Chris Evans', 'Robert Downey Jr.', 'Scarlett Johansson', 'Sebastian Stan'],
          storyline: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
        },
        {
          id: 5,
          title: 'Moon Knight',
          director: 'Mohamed Diab, Justin Benson, Aaron Moorhead',
          releaseYear: 2022,
          IMDbRating: 7.3,
          categories: ['action', 'adventure', 'fantasy'],
          actors: ['Oscar Isaac', 'Ethan Hawke', 'May Calamawy', 'Gaspard Ulliel'],
          storyline: "Steven Grant discovers he's been granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.",
        },
        {
          id: 6,
          title: 'She-Hulk: Attorney at Law',
          director: 'Kat Coiro, Anu Valia',
          releaseYear: 2022,
          IMDbRating: 5.3,
          categories: ['action', 'adventure', 'comedy'],
          actors: ['Tatiana Maslany', 'Mark Ruffalo', 'Tim Roth', 'Ginger Gonzaga'],
          storyline: 'Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered Hulk.',
        }
      ]
    );
    console.log('MoviesProvider movies:',movieList);

    return (
        <MoviesContext.Provider value={{movieList, setMovieList}}>
            {children}
        </MoviesContext.Provider>
    )
}