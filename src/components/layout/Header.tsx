import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/store';
import { setIsOpen } from '../../redux/slices/searchSlice';
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
  searchIcon: React.RefObject<HTMLDivElement>;
}

const Header: React.VFC<Props> = ({ searchIcon }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);

  return (
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
        <IconWrapper ref={searchIcon} onClick={() => dispatch(setIsOpen())}>
          <SearchIcon />
        </IconWrapper>

        {userId ? (
          <IconWrapper onClick={() => auth.signOut()}>
            <SignOutIcon />
          </IconWrapper>
        ) : (
          <Link to='/signin' aria-label='Sign In'>
            <IconWrapper>
              <ProfileIcon />
            </IconWrapper>
          </Link>
        )}
      </Icons>
    </StyledHeader>
  );
};

export default Header;
