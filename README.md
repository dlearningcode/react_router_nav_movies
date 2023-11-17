# Mini Movie Catalog App

- React react-router-dom Practice Project

As part of Meta's Front End Developer Certificate program offered by Coursera, in the React Basics course they had a lesson on Navigation using the react-router-dom. I asked Bing to give me a practice project to help me understand and implement the router function better. This is what it gave me.

## Project Name

**Mini Movie Catalog App**

## Project Description

You are going to create a simple website that displays a list of movies and their details. The website will have a navigation menu with links to different genres, such as action, comedy, drama, etc. When the user clicks on a link, the website will show a list of movies from that genre, stored in a local array. The user can also click on a movie title to see more details about that movie, such as the release year, director, cast, plot, etc.

## Thoughts Going In

As this website is going to be based on a catalog created in a local array, it's not going to be expansive. I'm thinking of maybe making it based exclusively on Marvel Cinematic Universe movies and possibly streaming shows, if I can figure out at least, say, four categories that can each have two or more shows per.

## Lessons Learned

- BIG lesson: Context API and React Router v6 do not play.
- React Router's official documentation describes a hook `useOutletContext` that may replace context API.

## Diary

2023-11-15

- Need to figure out categories, movies, and relevant details for the array.
- Just figured out this isn't going to be the easy peezy project Bing suggested. Things I'm not sure about:
  - How to filter a context-held array for a specific category, especially when a given movie has multiple categories.
  - How to add multiple categories to a movie object (thinking array, but not sure if/how that affects filtering)
  - How to create a details object that expands when the movie name link is clicked
- Okay, I think I've got the Router part down, but I'm back to undefined context. Wondering if there might be some sort of interaction between Router and Context I'm unaware of. Tomorrow's journey.

2023-11-16

- Well, this was a day of research and trial and error, and error, and... error. I really should've been committing all these attempts; will next time. Have determined with very little room for doubt that React's current context API does not work with React Router v6's routing system, at all. However, it seems React Router does have a `useOutletContext` hook that may actually do what I've needed here. Thinking I'll redo this project that way, especially since I want to set it up so each category page allows the visitor to add another movie.
- Rolling the site back to props for now, and the first two pages went up quickly.
- Tomorrow will be getting all the main filter pages set up, and if I can move quick enough, figure out the movie details page as well. Don't know how React Router does internal navigation like that, especially since I'm thinking that I'd want to dynamically populate a template page, so all links go to the same page... we'll see.
- Did figure out the array of objects filtering, using movie.categories.some(cat) to read inside each category array for a match.
