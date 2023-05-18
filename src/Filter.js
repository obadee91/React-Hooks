import React from 'react';

const Filter = ({ title, rate, handleTitleChange, handleRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Enter title..."
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Enter rating..."
        value={rate}
        onChange={handleRateChange}
      />
    </div>
  );
};

export default Filter;
