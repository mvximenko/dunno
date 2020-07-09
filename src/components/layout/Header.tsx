import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import useToggle from '../../hooks/useToggle';
import MenuPng from '../../assets/menu.png';
import ProfilePng from '../../assets/profile.png';
import {
  StyledHeader,
  Logo,
  LogoLink,
  Nav,
  NavLink,
  MenuIcon,
  ProfileIcon,
  Menu,
  MenuLink,
} from './HeaderStyles';

const Header: React.FC = () => {
  const [drawer, toggleDrawer] = useToggle(false);
  return (
    <>
      <StyledHeader>
        <Logo>
          <LogoLink to='/'>dunno</LogoLink>
        </Logo>

        <Nav>
          <NavLink exact to='/tv'>
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

        <Modal />
        <Link to='/signin'>
          <ProfileIcon src={ProfilePng} />
        </Link>
        <MenuIcon src={MenuPng} onClick={toggleDrawer} />
      </StyledHeader>

      <Menu active={drawer} onClick={toggleDrawer}>
        <MenuLink to='/tv'>TV Shows</MenuLink>
        <MenuLink to='/movie'>Movies</MenuLink>
        <MenuLink to='/randomizer'>Randomizer</MenuLink>
        <MenuLink to='/favorites'>Favorites</MenuLink>
        <MenuLink to='/signin'>Sign In</MenuLink>
      </Menu>
    </>
  );
};

export default Header;
