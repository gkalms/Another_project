import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { MovieForm } from "./MovieForm";
import MovieFormEdit from "./MovieFormEdit";
import MovieFormDelete from "./MovieFormDelete";
import { List } from "./List";

const FunctionalMovieContainer = () => {
  // Initialise state variables using hooks
  const [moviesList, setMoviesList] = useState([]);
  const [movieEdit, setMovieEdit] = useState({ genre: '', title: '', description: '' });
  const [movieDelete, setMovieDelete] = useState({ genre: '', title: '', description: '' });

  const handleMovieClick = (movieIndex) => {
    const movie = moviesList[movieIndex];
    setMovieEdit(movie);
    setMovieDelete(movie);
  }

  const handleEditMovie = (movie) => {
    const foundMovieIndex = moviesList.findIndex((movieEl) => {
      return movieEl._id === movie._id;
    });
    const newEditedMovies = [...moviesList];
    newEditedMovies[foundMovieIndex] = movie;
    setMoviesList(newEditedMovies);
    fetch(`http://localhost:9000/api/v1/movies/${movie._id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie)
    }).then((response) => {
      console.log('PUT response:', response);
    })
  };

  const handleDeleteMovie = (movie) => {
    const foundMovieIndex = moviesList.findIndex((movieEl) => {
      return movieEl._id === movie._id;
    });
    const deleteMovie = [...moviesList];
    deleteMovie[foundMovieIndex] = movie;
    setMoviesList(deleteMovie);
    fetch(`http://localhost:9000/api/v1/movies/${movie._id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    })
  };

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
  // only runs once
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
      <List movies={moviesList} handleClick={handleMovieClick} />
      <Link to="/movie/add">Add movie</Link>
      <Link to="/movie/edit">Edit movie</Link>
      <Link to="/movie/delete">Delete movie</Link>
      <Switch>
        <Route path="/movie/add">
          <MovieForm submit={handleMovieFormSubmit} />
        </Route>
        <Route path="/movie/edit">
          <MovieFormEdit submit={handleEditMovie} movie={movieEdit} />
        </Route>
        <Route path="/movie/delete">
          <MovieFormDelete submit={handleDeleteMovie} movie={movieEdit} />
        </Route>
      </Switch>
    </div>
  );
};

export { FunctionalMovieContainer };
