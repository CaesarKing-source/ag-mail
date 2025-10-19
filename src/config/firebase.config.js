import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA44HLNxPvh3rga6-K9ct_1COwH6w8YXSo",
  authDomain: "ag-mail-8fd5d.firebaseapp.com",
  projectId: "ag-mail-8fd5d",
  storageBucket: "ag-mail-8fd5d.firebasestorage.app",
  messagingSenderId: "518750514435",
  appId: "1:518750514435:web:95922fa73bae0509768d36"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const googleAuth = new GoogleAuthProvider();