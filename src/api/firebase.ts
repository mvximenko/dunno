import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
import {
  CreateUserProfileDocument,
  AddTitleFB,
  CheckTitleFB,
  MyListTitle,
  DeleteTitleFB,
} from '@/types/firebase';

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

initializeApp(config);
export const auth = getAuth();
const firestore = getFirestore();

export const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  await signInWithPopup(auth, googleProvider);
};

export const createUserProfileDocument: CreateUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    await setDoc(userRef, {
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
  }
  return userRef;
};

export const addTitleFB: AddTitleFB = async (
  userId,
  id,
  mediaType,
  posterPath,
  title
) => {
  try {
    const firebaseId = Date.now().toString();
    const userRef = doc(firestore, `users/${userId}/titles/${firebaseId}`);

    await setDoc(userRef, {
      id,
      mediaType,
      posterPath,
      title,
      firebaseId,
    });

    return firebaseId;
  } catch (error) {
    console.error(error);
  }
};

export const checkTitleFB: CheckTitleFB = async (userId, id, mediaType) => {
  const titleRef = query(
    collection(firestore, `users/${userId}/titles`),
    where('id', '==', id),
    where('mediaType', '==', mediaType)
  );

  const title = await getDocs(titleRef);

  if (title.docs.length > 0) {
    const { firebaseId } = title.docs[0].data();
    return firebaseId as string;
  }
};

export const getTitles = async (userId: string) => {
  const titles: any[] = [];

  const titlesRef = collection(firestore, `users/${userId}/titles`);
  const docs = await getDocs(titlesRef);
  docs.forEach((doc) => titles.push(doc.data()));

  return titles as MyListTitle[];
};

export const deleteTitleFB: DeleteTitleFB = (userId, id) => {
  const titleRef = doc(firestore, `users/${userId}/titles/${id}`);
  deleteDoc(titleRef);
};
