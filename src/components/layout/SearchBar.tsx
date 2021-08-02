import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/store';
import {
  setValue,
  fetchTitles,
  resetSearch,
} from '../../redux/slices/searchSlice';
import SearchIcon from '../assets/SearchIcon';
import XMarkCircle from '../assets/XMarkCircle';
import {
  Overlay,
  Container,
  InputContainer,
  Input,
  Item,
  IconWrapper,
} from './SearchBarStyles';

interface Props {
  [key: string]: React.RefObject<HTMLDivElement>;
}

const Modal: React.VFC<Props> = ({ searchIcon, mobileSearchIcon }) => {
  const outside = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const titles = useSelector((state) => state.search.titles);
  const isOpen = useSelector((state) => state.search.isOpen);
  const loading = useSelector((state) => state.search.loading);
  const value = useSelector((state) => state.search.value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value) dispatch(fetchTitles(value));
    }, 500);

    return () => clearTimeout(timeout);
  }, [value, dispatch]);

  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (
        outside.current!.contains(target as Node) ||
        searchIcon.current!.contains(target as Node) ||
        mobileSearchIcon.current!.contains(target as Node)
      ) {
        return searchInput.current!.focus();
      }
      if (isOpen) dispatch(resetSearch());
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen, searchIcon, mobileSearchIcon, dispatch]);

  return (
    <>
      <Overlay isOpen={isOpen} />
      <div ref={outside}>
        <Container isOpen={isOpen}>
          <InputContainer>
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
            <Input
              type='text'
              value={value}
              ref={searchInput}
              onChange={(e) => dispatch(setValue(e.target.value))}
            />
            <IconWrapper pointer onClick={() => dispatch(resetSearch())}>
              <XMarkCircle />
            </IconWrapper>
          </InputContainer>

          <ul>
            {titles.length > 0 &&
              titles
                .filter((item, index) => index < 5)
                .map((item) => (
                  <Link
                    to={`/${item.media_type}/${item.id}`}
                    onClick={() => dispatch(resetSearch())}
                    key={item.id}
                  >
                    <Item>{item.original_title || item.name}</Item>
                  </Link>
                ))}

            {titles.length === 0 && !loading && (
              <Item noPointer>
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
