import {
  addDoc,
  collection,
  getDocs,
  query,
  Timestamp,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION_LETTERS = 'letters';

const lettersCollection = collection(db, COLLECTION_LETTERS);

export type Author = {
  name: string;
  title?: string;
  affiliation?: string;
};

export type OpenLetter = {
  slug: string;
  authors: Author[];
  tldr: string;
  title: string;
  contents: string;
  publishedDate: string;
};

type DBOpenLetter = Omit<OpenLetter, 'publishedDate'> & {
  publishedDate: Timestamp;
};

function mapDbLetter(letter: DBOpenLetter) {
  console.log(letter.publishedDate);
  return {
    ...letter,
    publishedDate: new Date(letter.publishedDate.toMillis()).toISOString(),
  };
}

export async function getLetter(slug: string): Promise<OpenLetter> {
  const snapshot = await getDocs(
    query(lettersCollection, where('slug', '==', slug))
  );
  try {
    const letter = snapshot.docs.map((doc) =>
      mapDbLetter(doc.data() as DBOpenLetter)
    )[0];
    return letter;
  } catch (e) {
    console.error('Oops');
    console.error(e);
    throw new Error('Could not fetch letter');
  }
}

export async function getLetters(): Promise<OpenLetter[]> {
  const snapshots = await getDocs(lettersCollection);
  return snapshots.docs.map((doc) => mapDbLetter(doc.data() as DBOpenLetter));
}

export async function getRandomLetter(): Promise<OpenLetter> {
  const letters = await getLetters();
  const letter = letters[Math.random() * letters.length];
  return letter;
}

export async function addLetter(letter: OpenLetter) {
  const result = await addDoc(lettersCollection, letter);
  // TODO: Add timestamp to letter
  const letterId = result.id;
  return letterId;
}
