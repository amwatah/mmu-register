
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqNKpLvBNkPZq_BfdBBmorMjJo5K6Jx6k",
  authDomain: "mmu-register-7a76e.firebaseapp.com",
  projectId: "mmu-register-7a76e",
  storageBucket: "mmu-register-7a76e.appspot.com",
  messagingSenderId: "609006408104",
  appId: "1:609006408104:web:4f7485ce648839ca448d9d",
  measurementId: "G-5NZ443XQP0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )