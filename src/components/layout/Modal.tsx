import React, { useEffect, useState, useRef } from 'react';
import SearchBar from './SearchBar';
import SearchIcon from '../assets/SearchIcon';
import { SearchWrapper, Overlay } from './ModalStyles';

const Modal: React.FC = () => {
  const outside = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = ({ target }: MouseEvent) => {
    if (outside.current!.contains(target as Node)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
  }, []);

  return (
    <div ref={outside}>
      <SearchWrapper onClick={() => setIsOpen(!isOpen)}>
        <SearchIcon />
      </SearchWrapper>

      {isOpen && (
        <Overlay open={isOpen}>
          <SearchBar closeMenu={() => setIsOpen(!isOpen)} />
        </Overlay>
      )}
    </div>
  );
};

export default Modal;
