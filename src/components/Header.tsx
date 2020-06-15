import React from 'react';
import Icon from '../assets/menu.png';

import { StyledHeader, Logo, LogoLink, MenuIcon } from './HeaderStyles';

const Header: React.FC = () => (
  <StyledHeader>
    <Logo>
      <LogoLink to='/'>dunno</LogoLink>
    </Logo>
    <MenuIcon src={Icon} />
  </StyledHeader>
);

export default Header;