import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/store';
import { setIsOpen } from '../../redux/slices/searchSlice';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';
import FavoriteIcon from '../assets/FavoriteIcon';
import RandomizerIcon from '../assets/RandomizerIcon';
import ProfileIcon from '../assets/ProfileIcon';
import SignOutIcon from '../assets/SignOutIcon';
import { auth } from '../../api/firebase';
import {
  Container,
  Space,
  Navbar,
  NavLink,
  IconWrapper,
} from './BottomNavbarStyles';

interface Props {
  searchIcon: React.RefObject<HTMLDivElement>;
}

const BottomNavbar: React.VFC<Props> = ({ searchIcon }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const userId = useSelector((state) => state.user.userId);

  return (
    <Navbar>
      <Space />
      <Container>
        <NavLink
          to='/'
          aria-label='Home'
          isActive={() => ['/', '/movie'].includes(pathname)}
        >
          <HomeIcon />
        </NavLink>

        <IconWrapper ref={searchIcon} onClick={() => dispatch(setIsOpen())}>
          <SearchIcon />
        </IconWrapper>

        <NavLink exact to='/randomizer' aria-label='Randomizer'>
          <RandomizerIcon />
        </NavLink>

        <NavLink exact to='/my-list' aria-label='My list'>
          <FavoriteIcon />
        </NavLink>

        {userId ? (
          <IconWrapper onClick={() => auth.signOut()}>
            <SignOutIcon />
          </IconWrapper>
        ) : (
          <NavLink
            to='/signin'
            aria-label='Sign in'
            isActive={() => ['/signin', '/signup'].includes(pathname)}
          >
            <ProfileIcon />
          </NavLink>
        )}
      </Container>
    </Navbar>
  );
};

export default BottomNavbar;
