import React, { useEffect, useState, useRef } from 'react';
import SearchPng from '../../assets/search.png';
import { SearchIcon, Overlay } from './ModalStyles';

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
      <SearchIcon src={SearchPng} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <Overlay open={isOpen}>
          <h1>Hello</h1>
        </Overlay>
      )}
    </div>
  );
};
export default Modal;
