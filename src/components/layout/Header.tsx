import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
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
  userId: string | null;
  setIsOpen: (isOpen: boolean) => void;
  searchIcon: React.RefObject<HTMLDivElement>;
}

const Header: React.VFC<Props> = ({ userId, setIsOpen, searchIcon }) => (
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

      {userId ? (
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
);

const mapStateToProps = (state: RootState) => ({ userId: state.user.userId });

export default connect(mapStateToProps)(Header);
