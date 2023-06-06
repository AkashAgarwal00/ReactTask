import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MovieList from './components/MovieList/MovieList';
import MovieSummary from './components/MovieSummary/MovieSummary';

function App() {
  const [movie, setMovie] = useState(null);

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>

        <Route exact path='/ReactTask' element={<MovieList setMovie={setMovie} />} />

        <Route exact path='/movieSummary' element={<MovieSummary movie={movie} />} />

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
