import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, API_KEY } from '../../config';
import { Container, Input, List, Item } from './SearchBarStyles';

interface Props {
  closeMenu: () => void;
}

interface Item {
  id: number;
  name: string;
  media_type: string;
  original_title: string;
}

interface State {
  search: Item[];
  loading: boolean;
}

const SearchBar: React.FC<Props> = ({ closeMenu }) => {
  const [state, setState] = useState<State>({ search: [], loading: true });
  const [value, setValue] = useState('');
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value !== '') {
        setState({ search: [], loading: true });
        fetch(
          `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${value}`
        )
          .then((res: Response) => res.json())
          .then((data) => {
            setState({ search: [...data.results], loading: false });
          });
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  useEffect(() => {
    searchInput.current!.focus();
  }, []);

  const { search, loading } = state;
  return (
    <Container>
      <Input
        type='text'
        value={value}
        ref={searchInput}
        onChange={(e) => setValue(e.target.value)}
      />
      <List>
        {search.length > 0 &&
          search
            .filter((item: Item, index: number) => index < 5)
            .map((item: Item) => (
              <Link to={`/${item.media_type}/${item.id}`} onClick={closeMenu}>
                <Item>{item.original_title || item.name} </Item>
              </Link>
            ))}

        {!loading && !search.length && (
          <Item noPointer={true}>
            Sorry, we can't find what you're looking for. Try adjusting your
            search.
          </Item>
        )}
      </List>
    </Container>
  );
};

export default SearchBar;
