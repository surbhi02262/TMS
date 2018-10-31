import React, { Component } from "react";

const Search = props => {
  const { title, query, onChange } = props;
  return (
    <div className="col-md-6 col-md-offset-3">
      <h1>{title}</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="search"
          placeholder="Enter transaction details"
          value={query}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
