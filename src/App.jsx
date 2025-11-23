import { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import FetchButton from './components/FetchButton';

function App() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function fetchJoke() {
    setIsLoading(true);
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
        setJoke("Failed to fetch joke.");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} isLoading={isLoading} />
      <FetchButton onClick={fetchJoke} />
    </div>
  )
}

export default App;