import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBo_Bsta3s7t4XBrqsuA4RZQzGMuax7VyQ',
  authDomain: 'dunno-db.firebaseapp.com',
  databaseURL: 'https://dunno-db.firebaseio.com',
  projectId: 'dunno-db',
  storageBucket: 'dunno-db.appspot.com',
  messagingSenderId: '729168292613',
  appId: '1:729168292613:web:159d7c7797fc926d0f256c',
  measurementId: 'G-7SGFZYBKQY',
};

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: object
) => {
  if (!userAuth) return;

  const userRef = firestore().doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addTitle = (
  userId: string | null,
  id: string,
  mediaType: string,
  posterPath: string | null,
  title: string
) => {
  if (!userId) return;

  firestore()
    .collection('users')
    .doc(userId)
    .collection('titles')
    .doc(`${mediaType}_${id}`)
    .set({ id, mediaType, posterPath, title });
};

export const displayTitles = async (userId: string | null) => {
  if (!userId) return null;

  let titles: any[] = [];
  const titleRef = await firestore()
    .collection('users')
    .doc(userId)
    .collection('titles')
    .get();

  try {
    titleRef.forEach((doc) => {
      titles.push(doc.data());
    });
  } catch (error) {
    console.log(error);
  }

  return titles;
};

export const deleteTitle = (userId: string, id: string) => {
  firestore()
    .collection('users')
    .doc(userId)
    .collection('titles')
    .doc(id)
    .delete();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
