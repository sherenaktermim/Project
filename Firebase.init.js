
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6jB8QX06vDIHh-0WE7N1FKY5IErOKOAI",
  authDomain: "business-b658f.firebaseapp.com",
  projectId: "business-b658f",
  storageBucket: "business-b658f.appspot.com",
  messagingSenderId: "794990594247",
  appId: "1:794990594247:web:17c1e5b64c7d047db156e2",
  measurementId: "G-30JXH2TTHR"
};


const app = initializeApp(firebaseConfig);

const auth= getAuth(app)


export default auth







