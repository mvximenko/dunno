import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import useToggle from '../../hooks/useToggle';
import MenuIcon from '../assets/MenuIcon';
import SearchIcon from '../assets/SearchIcon';
import SignOutIcon from '../assets/SignOutIcon';
import ProfileIcon from '../assets/ProfileIcon';
import { auth } from '../../firebase/firebaseUtils';
import {
  StyledHeader,
  Logo,
  LogoLink,
  Nav,
  NavLink,
  SearchWrapper,
  MenuWrapper,
  ProfileWrapper,
  Menu,
  MenuLink,
  SignOut,
  Icons,
} from './HeaderStyles';

interface Props {
  currentUser: object | null;
}

const Header: React.FC<Props> = ({ currentUser }) => {
  const [drawer, toggleDrawer] = useToggle(false);
  const [isOpen, setIsOpen] = useState(false);

  const searchIcon = useRef<HTMLDivElement>(null);

  return (
    <>
      <StyledHeader>
        <Logo>
          <LogoLink to='/'>dunno</LogoLink>
        </Logo>

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
          <NavLink exact to='/favorites'>
            Favorites
          </NavLink>
        </Nav>

        <Icons>
          <SearchWrapper ref={searchIcon} onClick={() => setIsOpen(true)}>
            <SearchIcon />
          </SearchWrapper>

          {currentUser ? (
            <ProfileWrapper onClick={() => auth.signOut()}>
              <SignOutIcon />
            </ProfileWrapper>
          ) : (
            <Link to='/signin'>
              <ProfileWrapper>
                <ProfileIcon />
              </ProfileWrapper>
            </Link>
          )}

          <MenuWrapper onClick={toggleDrawer}>
            <MenuIcon />
          </MenuWrapper>
        </Icons>
      </StyledHeader>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} searchIcon={searchIcon} />

      <Menu active={drawer} onClick={toggleDrawer}>
        <MenuLink to='/'>TV Shows</MenuLink>
        <MenuLink to='/movie'>Movies</MenuLink>
        <MenuLink to='/randomizer'>Randomizer</MenuLink>
        <MenuLink to='/favorites'>Favorites</MenuLink>
        {currentUser ? (
          <SignOut onClick={() => auth.signOut()}>Sign Out</SignOut>
        ) : (
          <MenuLink to='/signin'>Sign In</MenuLink>
        )}
      </Menu>
    </>
  );
};

export default Header;
