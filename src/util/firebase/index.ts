import {
  DocumentData,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
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

/**
 * 컬렉션명과 이름이 일치하는 데이터의 값을 수정할 수 있음
 * 일치하는 컬렉션명이 없다면 셋팅과 동시에 데이터를 추가할 수 있음
 */

export const setDbData = async <T extends DocumentData>(
  collectionName: string,
  id: string,
  data: T
) => {
  const docRef = doc(db, collectionName, id);

  await setDoc(docRef, data);
};

/**
 * 컬렉션명과 ID가 일치하는 데이터를 삭제하는 함수
 */
export const deleteDbData = async (collectionName: string, id: string) => {
  const docRef = doc(db, collectionName, id);

  await deleteDoc(docRef);
};

/**
 * 단일 데이터 조회
 */
export const getDbDataByDocName = async <T>(
  collectionName: string,
  docName: string
): Promise<T> => {
  const docRef = doc(db, collectionName, docName);

  const docSnapshot = await getDoc(docRef);

  return docSnapshot.data() as T;
};

/**
 * 한 컬렉션에 대한 전체 데이터 조회
 */
export const getDbAllData = async <T>(collectionName: string): Promise<T[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));

  const dataArray = querySnapshot.docs.map((doc) => doc.data() as T);

  return dataArray;
};