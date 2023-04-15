import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6-Wby7K_iGyUt2eWFBHdX215uWRx33rs",
  authDomain: "taj-chatapp.firebaseapp.com",
  projectId: "taj-chatapp",
  storageBucket: "taj-chatapp.appspot.com",
  messagingSenderId: "57336175586",
  appId: "1:57336175586:web:95bee81c09c375359c37bb"
};

export const app = initializeApp(firebaseConfig);