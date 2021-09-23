import { User } from 'firebase/auth';
import { DocumentReference, DocumentData } from 'firebase/firestore';

export type CreateUserProfileDocument = (
  userAuth: User,
  additionalData?: object
) => Promise<DocumentReference<DocumentData>>;

export type AddTitleFB = (
  userId: string,
  id: string,
  mediaType: string,
  posterPath: string | null,
  title: string
) => Promise<string | undefined>;

export type CheckTitleFB = (
  userId: string,
  id: string,
  mediaType: string
) => Promise<string | undefined>;

export interface MyListTitle {
  id: string;
  title: string;
  mediaType: string;
  posterPath: string;
  firebaseId: string;
}

export type DeleteTitleFB = (userId: string, id: string) => void;
