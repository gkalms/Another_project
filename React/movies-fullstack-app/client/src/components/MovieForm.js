import React, { useState } from "react";

const MovieForm = (props) => {
const [title, setTitle] = useState("");
const [genre, setGenre] = useState("");
const [description, setDescription] = useState("");

  const handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(title, genre, description);
  };
 
    return (
      <div>
        <h2>Add Movie</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              name="title"
              value={title}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Genre
            <input
              name="genre"
              value={genre}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Description
            <input
              name="description"
              value={description}
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }

export {MovieForm};