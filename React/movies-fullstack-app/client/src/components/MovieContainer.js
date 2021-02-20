import React, { useState, useEffect } from "react";
import {MovieForm} from "./MovieForm";
import {List} from "./List";

const FunctionalMovieContainer = () => {
  // Initialise state variables using hooks
  const [moviesList, setMoviesList] = useState([]);

  const handleMovieFormSubmit = (title, genre, description) => {
    // Read title and genre state and put in a temp variable which is Obj literal
    const newMovie = { genre: genre, title: title, description: description };

    // moviesList => state variable
    // setMoviesList => function to set your state variable
    const newMovies = [...moviesList];
    newMovies.push(newMovie);

    // this.setState({ moviesList: newMovies });
    setMoviesList(newMovies);

    fetch("http://localhost:9000/api/v1/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    }).then((response) => {
      console.log("use clases: response:", response);
    });
  };

  // Whenever a component renders, anything inside useEffect will be executed!
  useEffect(() => {
    fetch("http://localhost:9000/api/v1/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("movies reponse", response);
        return response.json();
      })
      .then((movieData) => {
        console.log("movieData:", movieData);
        // call to set state
        setMoviesList(movieData.data);
      });
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <List movies={moviesList} />
      <MovieForm submit={handleMovieFormSubmit} />
    </div>
  );
};

export {FunctionalMovieContainer};
