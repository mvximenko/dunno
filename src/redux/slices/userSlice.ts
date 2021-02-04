import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';

interface UserState {
  userId: string | null;
}

const initialState: UserState = {
  userId: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    clearUser: (state) => {
      state.userId = null;
    },
  },
});

export const { setUser, clearUser } = user.actions;

export const getUser = (): AppThunk => async (dispatch) => {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef!.onSnapshot((snapShot) => dispatch(setUser(snapShot.id)));
    } else {
      dispatch(clearUser());
    }
  });
};

export default user.reducer;
