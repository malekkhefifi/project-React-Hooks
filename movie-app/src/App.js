// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Dachra',
      description: 'Un thriller psychologique tunisien qui suit une jeune étudiante enquêtant sur une légende urbaine.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNTlhMGFhODAtNWQwYy00YjQ3LWI2MWUtNGZjN2QyZjJkNmU5XkEyXkFqcGdeQXVyNjgzMjQ0MTA@._V1_.jpg', // Example URL
      rating: 7.5,
    },
    {
      id: 2,
      title: 'Boulis',
      description: 'Une comédie dramatique tunisienne qui raconte l’histoire d’un jeune homme tiraillé entre ses racines et sa quête d\'indépendance.',
      posterURL: 'https://media.pathe.tn/movie/alex/HO00000604/poster/lg/1/movie&uuid=988ABB81-3BCE-44CB-ABC1-43BEF99CEF98 ', // Replace with actual URL
      rating: 6.9,
    },
    {
      id: 3,
      title: 'Nhebk Hedi',
      description: 'Un film tunisien poignant où Hedi, un jeune homme, lutte avec son avenir et ses désirs dans une société traditionnelle.',
      posterURL: 'https://th.bing.com/th/id/OIP.eNKIGOnwjuwJLrTCZ82XnQHaFS?rs=1&pid=ImgDetMain', // Replace with actual URL
      rating: 8.0,
    },
    {
      id: 4,
      title: 'Super Tunsi',
      description: 'Une comédie tunisienne avec une touche de satire sociale, racontant l’histoire d’un super-héros tunisien improbable qui lutte contre les injustices.',
      posterURL: 'https://th.bing.com/th/id/OIP.d7VSbgA_b6u1Ts23l8sbfQAAAA?rs=1&pid=ImgDetMain', // Replace with actual URL
      rating: 7.3,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => {
      const updatedMovies = [...prevMovies, newMovie];
      setFilteredMovies(updatedMovies);
      return updatedMovies;
    });
  };

  const handleFilterChange = (title, rating) => {
    const filtered = movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(title.toLowerCase());
      const matchesRating = rating ? movie.rating >= parseFloat(rating) : true;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>Ma Collection de Films Tunisiens</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          handleAddMovie({
            id: Date.now(),
            title: 'Nouveau Film',
            description: 'Un film que je viens d’ajouter.',
            posterURL: 'https://via.placeholder.com/150',
            rating: 7,
          })
        }
      >
        Ajouter un film
      </button>
    </div>
  );
}

export default App;



