import { useLocation } from 'react-router-dom';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';
import FavoriteIcon from '../assets/FavoriteIcon';
import RandomizerIcon from '../assets/RandomizerIcon';
import ProfileIcon from '../assets/ProfileIcon';
import SignOutIcon from '../assets/SignOutIcon';
import { auth } from '../../firebase/firebaseUtils';
import {
  Container,
  Space,
  Navbar,
  NavLink,
  SignOutWrapper,
} from './BottomNavbarStyles';

interface Props {
  currentUser: object | null;
}

const BottomNavbar: React.FC<Props> = ({ currentUser }) => {
  const { pathname } = useLocation();

  return (
    <Navbar>
      <Space />
      <Container>
        <NavLink to='/' isActive={() => ['/', '/movie'].includes(pathname)}>
          <HomeIcon />
        </NavLink>

        <NavLink exact to='/search'>
          <SearchIcon />
        </NavLink>

        <NavLink exact to='/randomizer'>
          <RandomizerIcon />
        </NavLink>

        <NavLink exact to='/my-list'>
          <FavoriteIcon />
        </NavLink>

        {currentUser ? (
          <SignOutWrapper onClick={() => auth.signOut()}>
            <SignOutIcon />
          </SignOutWrapper>
        ) : (
          <NavLink
            to='/signin'
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
