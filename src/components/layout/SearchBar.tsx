import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, API_KEY } from '../../config';
import { Overlay, Container, Input, Item } from './SearchBarStyles';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  searchIcon: React.RefObject<HTMLDivElement>;
  mobileSearchIcon: React.RefObject<HTMLDivElement>;
}

interface State {
  search: {
    id: number;
    name: string;
    media_type: string;
    original_title: string;
  }[];
  loading: boolean;
}

const Modal: React.VFC<Props> = ({
  isOpen,
  setIsOpen,
  searchIcon,
  mobileSearchIcon,
}) => {
  const outside = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<State>({ search: [], loading: true });
  const [value, setValue] = useState('');

  const clearState = useCallback(() => {
    setIsOpen(false);
    setValue('');
    setState({ search: [], loading: true });
  }, [setIsOpen, setValue, setState]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (value) {
        const endpoint = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${value}`;
        const res = await fetch(endpoint);
        const { results } = await res.json();
        setState({ search: [...results], loading: false });
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (
        outside.current!.contains(target as Node) ||
        searchIcon.current!.contains(target as Node) ||
        mobileSearchIcon.current!.contains(target as Node)
      ) {
        searchInput.current!.focus();
        return;
      }
      clearState();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [clearState, searchIcon, mobileSearchIcon]);

  const { search, loading } = state;
  return (
    <>
      <Overlay isOpen={isOpen} />
      <div ref={outside}>
        <Container isOpen={isOpen}>
          <Input
            type='text'
            value={value}
            ref={searchInput}
            onChange={(e) => setValue(e.target.value)}
          />
          <ul>
            {search.length > 0 &&
              search
                .filter((item, index) => index < 5)
                .map((item) => (
                  <Link
                    to={`/${item.media_type}/${item.id}`}
                    onClick={clearState}
                    key={item.id}
                  >
                    <Item>{item.original_title || item.name}</Item>
                  </Link>
                ))}

            {!loading && !search.length && (
              <Item noPointer={true}>
                Sorry, we can't find what you're looking for. Try adjusting your
                search.
              </Item>
            )}
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Modal;
