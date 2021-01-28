import { useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import { Overlay } from './ModalStyles';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  searchIcon: React.RefObject<HTMLDivElement>;
  mobileSearchIcon: React.RefObject<HTMLDivElement>;
}

const Modal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  searchIcon,
  mobileSearchIcon,
}) => {
  const outside = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (
        outside.current!.contains(target as Node) ||
        searchIcon.current!.contains(target as Node) ||
        mobileSearchIcon.current!.contains(target as Node)
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [setIsOpen, searchIcon, mobileSearchIcon]);

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
