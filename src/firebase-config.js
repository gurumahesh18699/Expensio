import { initializeApp } from "firebase/app";
import{GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from "firebase/auth";
import { getFirestore,query,getDocs,collection,where,addDoc,} from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDkJJHNGceffIFtcyQJ0HIPdJi0o-E9eOw",
//   authDomain: "budgettracker-469be.firebaseapp.com",
//   projectId: "budgettracker-469be",
//   storageBucket: "budgettracker-469be.appspot.com",
//   messagingSenderId: "41984959551",
//   appId: "1:41984959551:web:1c9b3fb225b91b29e2c48a",
//   measurementId: "G-RQ6GMR41BX"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID ,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app);


const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res.user);
    const user = res.user
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.log("Error in sign in ",err)
  }
};

const logout = () =>{
  signOut(auth)
}

export {
  auth,
  db,
  signInWithGoogle,
  logout
 
};