import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '@/redux/store';
import { setIsOpen } from '@/redux/slices/searchSlice';
import { ReactComponent as SearchIcon } from '@/icons/search.svg';
import { ReactComponent as SignOutIcon } from '@/icons/sign-out.svg';
import { ReactComponent as ProfileIcon } from '@/icons/profile.svg';
import { signOut } from 'firebase/auth';
import { auth } from '@/api/firebase';
import {
  StyledHeader,
  LogoLink,
  Nav,
  StyledNavLink,
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
        <StyledNavLink exact to='/'>
          TV Shows
        </StyledNavLink>

        <StyledNavLink exact to='/movie'>
          Movies
        </StyledNavLink>

        <StyledNavLink exact to='/randomizer'>
          Randomizer
        </StyledNavLink>

        <StyledNavLink exact to='/my-list'>
          My List
        </StyledNavLink>
      </Nav>

      <Icons>
        <IconWrapper ref={searchIcon} onClick={() => dispatch(setIsOpen())}>
          <SearchIcon />
        </IconWrapper>

        {userId ? (
          <IconWrapper onClick={() => signOut(auth)}>
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
