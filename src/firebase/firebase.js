import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4azznfQRn1XVvNP7ckUrm9QIaH2Rfle8",
  authDomain: "reel-talk-d1afd.firebaseapp.com",
  projectId: "reel-talk-d1afd",
  storageBucket: "reel-talk-d1afd.appspot.com",
  messagingSenderId: "564160181866",
  appId: "1:564160181866:web:1f01d87630f777720b3c13",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
