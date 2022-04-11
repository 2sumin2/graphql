export const movies = [{
    id: 0,
    name: "Star Wars - The new one",
    age: 23,
    score: 5
},
{
    id: 1,
    name: "Avengers - The new one",
    age: 23,
    score: 4
},
{
    id: 2,
    name: "The Godfather 1",
    age: 23,
    score: 3
},
{
    id: 3,
    name: "Logan",
    age: 23,
    score: 4
}];

export const getMovies = () => movies;

export const getById = id => {
    const filterdMovies = movies.filter(movie => movie.id === id);
    return filterdMovies[0];
};

export const deleteMovie = ({ id }) => {
    const cleandMovies = movies.filter(movie => movie.id != id);
    if (movies.length > cleandMovies.length) {
        movie = cleandMovies;
        return true;
    } else {
        return false;
    }
};
export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score,
        age: 23
    };
    movies.push(newMovie);
    return newMovie;
};