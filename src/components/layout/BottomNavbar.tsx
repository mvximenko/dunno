import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
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
  IconWrapper,
} from './BottomNavbarStyles';

interface Props {
  userId: string | null;
  setIsOpen: (isOpen: boolean) => void;
  searchIcon: React.RefObject<HTMLDivElement>;
}

const BottomNavbar: React.VFC<Props> = ({ userId, setIsOpen, searchIcon }) => {
  const { pathname } = useLocation();
  return (
    <Navbar>
      <Space />
      <Container>
        <NavLink to='/' isActive={() => ['/', '/movie'].includes(pathname)}>
          <HomeIcon />
        </NavLink>

        <IconWrapper ref={searchIcon} onClick={() => setIsOpen(true)}>
          <SearchIcon />
        </IconWrapper>

        <NavLink exact to='/randomizer'>
          <RandomizerIcon />
        </NavLink>

        <NavLink exact to='/my-list'>
          <FavoriteIcon />
        </NavLink>

        {userId ? (
          <IconWrapper onClick={() => auth.signOut()}>
            <SignOutIcon />
          </IconWrapper>
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

const mapStateToProps = (state: RootState) => ({ userId: state.user.userId });

export default connect(mapStateToProps)(BottomNavbar);
