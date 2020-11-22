import React, { useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import { Overlay } from './ModalStyles';

interface Props {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
  searchIcon: React.RefObject<HTMLDivElement>;
}

const Modal: React.FC<Props> = ({ isOpen, setIsOpen, searchIcon }) => {
  const outside = useRef<HTMLDivElement>(null);

  const handleClick = ({ target }: MouseEvent) => {
    if (
      outside.current!.contains(target as Node) ||
      searchIcon.current!.contains(target as Node)
    ) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Overlay isOpen={isOpen} />
      <div ref={outside}>
        {isOpen && (
          <SearchBar isOpen={isOpen} closeMenu={() => setIsOpen(!isOpen)} />
        )}
      </div>
    </>
  );
};

export default Modal;
