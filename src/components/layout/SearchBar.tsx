import React, { useState, useRef, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';

interface State {
  movies: object;
  loading: boolean;
}

const SearchBar: React.FC = () => {
  const [state, setState] = useState<State>({ movies: [], loading: true });
  const [value, setValue] = useState('');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      if (value !== '') {
        setState({ movies: [], loading: true });
        fetch(
          `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${value}`
        )
          .then((res) => res.json())
          .then((data) => {
            setState({ movies: [...data.results], loading: false });
          });
      }
    }, 500);
  }, [value]);

  return (
    <input
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchBar;
