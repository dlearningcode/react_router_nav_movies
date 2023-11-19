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

2023-11-17

- Added React Router Link to Scifi.jsx to test passing props to MovieDetails.jsx for destructuring and rendering in the page, but as I learn more about React Router, two thoughts emerge:
- instead of going the "traditional HTML" route of creating a page for every category, could it make sense to have one dynamic category page that gets props passed by the home page that becomes the category to filter on. This would match well with the one dynamic MovieDetails page I'm trying to develop.
- Related to the latter part of the previous bullet, I'm wondering if I should keep Movies.js as an array of objects, or if I should convert it to an object of objects. Not sure which will be easier/more efficient to reference when passing a single movie object to the MovieDetails page.

I know if I convert Movies.js into an object, I just pass movies.key as props; simple. It's part of the object already at the category page.

It may be that easy for arrays, but I can't recall right now how to do that. Right now it feels like the array id wouldn't travel with the object, so it would involve more coding to reach back and get it. Got some research ahead!

2023-11-18

- Got all the linking functionality, only to discover the movie detail page renders as a view inside the calling movie list page. Not at all the user experience I was going for. Yeesh! Have to figure that out, but I did get one category template page and one movie detail template page to work for dynamically generating the multiple category pages the user would experience. Such cool stuff!
- render categories on the movie details page as separate spans for formatting