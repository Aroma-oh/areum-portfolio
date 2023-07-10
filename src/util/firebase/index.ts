import {
  collection,
  getDocs,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRE_BASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRE_BASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIRE_BASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getDbAllData = async <T>(collectionName: string): Promise<T[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));

  const dataArray = querySnapshot.docs.map((doc) => doc.data() as T);

  return dataArray;
};