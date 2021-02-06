import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import {
  setValue,
  fetchTitles,
  clearSearch,
} from '../../redux/slices/searchSlice';
import { Overlay, Container, Input, Item } from './SearchBarStyles';

interface Props {
  searchIcon: React.RefObject<HTMLDivElement>;
  mobileSearchIcon: React.RefObject<HTMLDivElement>;
}

const Modal: React.VFC<Props> = ({ searchIcon, mobileSearchIcon }) => {
  const outside = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const titles = useSelector((state: RootState) => state.search.titles);
  const isOpen = useSelector((state: RootState) => state.search.isOpen);
  const loading = useSelector((state: RootState) => state.search.loading);
  const value = useSelector((state: RootState) => state.search.value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value) dispatch(fetchTitles(value));
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
      dispatch(clearSearch());
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [searchIcon, mobileSearchIcon]);

  return (
    <>
      <Overlay isOpen={isOpen} />
      <div ref={outside}>
        <Container isOpen={isOpen}>
          <Input
            type='text'
            value={value}
            ref={searchInput}
            onChange={(e) => dispatch(setValue(e.target.value))}
          />
          <ul>
            {titles.length > 0 &&
              titles
                .filter((item, index) => index < 5)
                .map((item) => (
                  <Link
                    to={`/${item.media_type}/${item.id}`}
                    onClick={() => dispatch(clearSearch())}
                    key={item.id}
                  >
                    <Item>{item.original_title || item.name}</Item>
                  </Link>
                ))}

            {titles.length === 0 && !loading && (
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
