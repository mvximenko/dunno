import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import SearchIcon from '../assets/SearchIcon';
import SignOutIcon from '../assets/SignOutIcon';
import ProfileIcon from '../assets/ProfileIcon';
import { auth } from '../../firebase/firebaseUtils';
import {
  StyledHeader,
  LogoLink,
  Nav,
  NavLink,
  Icons,
  IconWrapper,
} from './HeaderStyles';

interface Props {
  currentUser: object | null;
}

const Header: React.FC<Props> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchIcon = useRef<HTMLDivElement>(null);

  return (
    <>
      <StyledHeader>
        <LogoLink to='/'>dunno</LogoLink>

        <Nav>
          <NavLink exact to='/'>
            TV Shows
          </NavLink>
          <NavLink exact to='/movie'>
            Movies
          </NavLink>
          <NavLink exact to='/randomizer'>
            Randomizer
          </NavLink>
          <NavLink exact to='/my-list'>
            My List
          </NavLink>
        </Nav>

        <Icons>
          <IconWrapper ref={searchIcon} onClick={() => setIsOpen(true)}>
            <SearchIcon />
          </IconWrapper>

          {currentUser ? (
            <IconWrapper onClick={() => auth.signOut()}>
              <SignOutIcon />
            </IconWrapper>
          ) : (
            <Link to='/signin'>
              <IconWrapper>
                <ProfileIcon />
              </IconWrapper>
            </Link>
          )}
        </Icons>
      </StyledHeader>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} searchIcon={searchIcon} />
    </>
  );
};

export default Header;
