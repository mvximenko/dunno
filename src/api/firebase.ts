import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

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
  userAuth: User,
  additionalData?: object
) => {
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  return userRef;
};

export const addTitleFB = async (
  userId: string,
  id: string,
  mediaType: string,
  posterPath: string | null,
  title: string
) => {
  try {
    const firebaseId = Date.now().toString();
    const userRef = doc(firestore, `users/${userId}/titles/${firebaseId}`);
    await setDoc(userRef, { id, mediaType, posterPath, title, firebaseId });
    return firebaseId;
  } catch (error) {
    console.error(error);
  }
};

export const checkTitleFB = async (
  userId: string,
  id: string,
  mediaType: string
) => {
  try {
    const titleRef = query(
      collection(firestore, `users/${userId}/titles`),
      where('id', '==', id),
      where('mediaType', '==', mediaType)
    );

    const title = await getDocs(titleRef);

    if (title.docs.length > 0) {
      const { firebaseId } = title.docs[0].data();
      return firebaseId;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTitles = async (userId: string) => {
  let titles: any[] = [];
  try {
    const titlesRef = collection(firestore, `users/${userId}/titles`);
    const docs = await getDocs(titlesRef);
    docs.forEach((doc) => titles.push(doc.data()));
  } catch (error) {
    console.error(error);
  }
  return titles;
};

export const deleteTitleFB = (userId: string, id: string) => {
  const titleRef = doc(firestore, `users/${userId}/titles/${id}`);
  deleteDoc(titleRef);
};

initializeApp(config);
export const auth = getAuth();
const firestore = getFirestore();

export const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  await signInWithPopup(auth, googleProvider);
};
