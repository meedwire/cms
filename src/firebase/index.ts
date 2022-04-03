import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBi9C-2F6bW3XNIMiHTYf-BkhgDe3wVQXQ",
  authDomain: "notification-b7636.firebaseapp.com",
  databaseURL: "https://notification-b7636-default-rtdb.firebaseio.com",
  projectId: "notification-b7636",
  storageBucket: "notification-b7636.appspot.com",
  messagingSenderId: "213399962182",
  appId: "1:213399962182:web:5c1484ca471d9cebc24047",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
