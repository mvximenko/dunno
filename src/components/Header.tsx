import React from 'react';
import { Link } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import Menu from '../assets/menu.png';
import Profile from '../assets/profile.png';
import {
  StyledHeader,
  Logo,
  LogoLink,
  Nav,
  NavLink,
  MenuIcon,
  ProfileIcon,
  Drawer,
  DrawerLink,
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

        <Link to='/signin'>
          <ProfileIcon src={Profile} />
        </Link>
        <MenuIcon src={Menu} onClick={toggleDrawer} />
      </StyledHeader>

      <Drawer active={drawer} onClick={toggleDrawer}>
        <DrawerLink to='/tv'>TV Shows</DrawerLink>
        <DrawerLink to='/movie'>Movies</DrawerLink>
        <DrawerLink to='/randomizer'>Randomizer</DrawerLink>
        <DrawerLink to='/favorites'>Favorites</DrawerLink>
        <DrawerLink to='/signin'>Sign In</DrawerLink>
      </Drawer>
    </>
  );
};

export default Header;