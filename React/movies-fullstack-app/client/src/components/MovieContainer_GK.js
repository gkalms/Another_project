import React, { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import List from "./List";

class MovieContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesList: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:9000/api/v1/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("using classes:movies reponse", response);
        return response.json();
      })
      .then((movieData) => {
        console.log("use classes:movieData:", movieData);
        this.setState({ moviesList: movieData.data });
      });
  }
  handleMovieFormSubmit = (title, genre, description) => {
    console.log("formValues:", title, genre);
    console.log("this:", this);
    // Read title and genre state and put in a temp variable which is Obj literal
    const newMovie = { genre: genre, title: title, description: description };
    // Create a new movies array variable which is a copy from movies state via ... operator
    const newMovies = [...this.state.moviesList];
    newMovies.push(newMovie);
    // Set the state for movies and pass the new movies array.
    this.setState({ moviesList: newMovies });

    fetch("http://localhost:9000/api/v1/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    }).then((response) => {
      console.log("response:", response);
    });
  };

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <List movies={this.state.moviesList} />
        <MovieForm submit={this.handleMovieFormSubmit} />
      </div>
    );
  }
}

// Doing above code - but using function hook
const FunctionalMovieContainer = () => {
  // Below logic:
  // movieslist variable on right is initialised and set to empty array on left usestate=([])
  // Above is the same as saying
  // this.state = { moviesList: [],};
  //  then
  //  this.setState({ moviesList: newMovies });

  // Another example ->  const [username, setUserName] = userState(""). userName is the state variable for names; setUserName is a funcion that allows one to change the state of the username
  const [moviesList, setMoviesList] = useState([]);
  // Below logic: take title,genere,desc from state and put in temporary variable
  const handleMovieFormSubmit = (title, genre, description) => {
    const newMovie = { genre: genre, title: title, description: description };
    const newMovies = [...moviesList];
    newMovies.push(newMovie);
    setMoviesList(newMovies);

    fetch("http://localhost:9000/api/v1/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    }).then((response) => {
      console.log("response:", response);
    });
  };

  // Whenever a component renders, anything inside useEffect will be exceuted
  useEffect(() => {
    console.log("USE EFFECT WAS CALLED!!!");
  }, []);

  useEffect(() => {
    // fetch logic
    //  1: Fetch movies from database
    //  2: set state to add movies to state varable
    //  3: Use the list react component and pass all movies as props
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
        setMoviesList(movieData.data)
      });
  }, 
  []);

  return (
    <div>
      <h1>Movies</h1>
      <List movies={[]} />
      <MovieForm submit={handleMovieFormSubmit} />
    </div>
  );
};

export { MovieContainer, FunctionalMovieContainer };