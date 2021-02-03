import {
  auth,
  createUserProfileDocument,
  displayTitles,
  addTitleToFirebase,
  removeTitleFromFirebase,
} from '../../firebase/firebaseUtils';
import {
  SET_USER,
  CLEAR_USER,
  SET_TITLES,
  REMOVE_TITLE,
  SetTitles,
  AddTitle,
  RemoveTitle,
  UserDispatch,
} from './userTypes';

export const getUser: any = () => async (dispatch: UserDispatch) => {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef!.onSnapshot((snapShot) => {
        dispatch({ type: SET_USER, payload: snapShot.id });
      });
    } else {
      dispatch({ type: CLEAR_USER });
    }
  });
};

export const setTitles: SetTitles = (userId) => async (
  dispatch: UserDispatch
) => {
  const res = await displayTitles(userId);
  dispatch({ type: SET_TITLES, payload: res });
};

export const addTitle: AddTitle = (
  userId,
  id,
  mediaType,
  posterPath,
  title
) => async (dispatch: UserDispatch) => {
  if (userId) addTitleToFirebase(userId, id, mediaType, posterPath, title);
};

export const removeTitle: RemoveTitle = (userId, id) => async (
  dispatch: UserDispatch
) => {
  removeTitleFromFirebase(userId, id);
  dispatch({ type: REMOVE_TITLE, payload: id });
};
