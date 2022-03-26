// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAivt1eo738_e4s4tSdrvh8ovBhZcNMmK8",
//   authDomain: "hackathon-2022-b997c.firebaseapp.com",
//   projectId: "hackathon-2022-b997c",
//   storageBucket: "hackathon-2022-b997c.appspot.com",
//   messagingSenderId: "217569159200",
//   appId: "1:217569159200:web:fded9663e1d4d46423b445",
//   measurementId: "G-VQ6H4JJRF5",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth();

// export const db = getFirestore(app);

// export const store = getStorage(app);

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAivt1eo738_e4s4tSdrvh8ovBhZcNMmK8",
  authDomain: "hackathon-2022-b997c.firebaseapp.com",
  databaseURL: "https://hackathon-2022-b997c-default-rtdb.firebaseio.com",
  projectId: "hackathon-2022-b997c",
  storageBucket: "hackathon-2022-b997c.appspot.com",
  messagingSenderId: "217569159200",
  appId: "1:217569159200:web:fded9663e1d4d46423b445",
  measurementId: "G-VQ6H4JJRF5"
};

const app = initializeApp(firebaseConfig);