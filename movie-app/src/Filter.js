// Filter.js
import React, { useState } from 'react';

function Filter({ onFilterChange }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onFilterChange(event.target.value, rating);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    onFilterChange(title, event.target.value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        value={rating}
        onChange={handleRatingChange}
        min="1"
        max="10"
      />
    </div>
  );
}

export default Filter;
