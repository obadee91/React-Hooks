import React, { useState } from 'react';
import './App.css';

import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
      rating: 8.8,
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://c8.alamy.com/comp/BKH04B/the-shawshank-redemption-1994-poster-shwk-003vs-BKH04B.jpg',
      rating: 9.3,
    },
    // Add more movies as needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRateChange = (e) => {
    setRateFilter(e.target.value);
  };

  const addMovie = () => {
    // Create a new movie object with the provided attributes and add it to the movies state
    const newMovie = {
      title: 'New Movie',
      description: 'A new movie description',
      posterURL: 'https://example.com/new-movie-poster.jpg',
      rating: 7.5,
    };

    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (rateFilter === '' || movie.rating >= rateFilter)
  );

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        title={titleFilter}
        rate={rateFilter}
        handleTitleChange={handleTitleChange}
        handleRateChange={handleRateChange}
      />
      <button onClick={addMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
