import React, { useState, useEffect } from "react";

const MovieFormDelete = (props) => {
  // 1st element - > state Variable
  // 2nd element - > function to change that state variable

  const [formState, setFormState] = useState({
    genre: '',
    title: '',
    description: ''
  })

  useEffect(() => {
    setFormState(props.movie)
    console.log('useEffect delete')
  }, [props.movie]);

  const handleChange = (e) => {
    const newState = { ...formState }
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(formState);
  };

  return (
    <div>
      <h2>Delete Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" value={formState.title} onChange={handleChange}></input>
        </label>
        <label>
          Genre
          <input name="genre" value={formState.genre} onChange={handleChange}></input>
        </label>
        <label>
          Description
          <input
            name="description"
            value={formState.description}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Delete Movie</button>
      </form>
    </div>
  );
};

export default MovieFormDelete;
