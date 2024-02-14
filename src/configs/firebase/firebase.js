import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9BIw3xOObFvnKPnB-bjWrRw_oYAVHmVI",
  authDomain: "bibliomed.firebaseapp.com",
  projectId: "bibliomed",
  storageBucket: "bibliomed.appspot.com",
  messagingSenderId: "286939413813",
  appId: "1:286939413813:web:5fcccaca55ac599640a07c",
  measurementId: "G-TV74Z80V3S"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export { storage };
