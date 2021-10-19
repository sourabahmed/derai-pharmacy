import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useState , useEffect} from "react";
import initializeAuthetication from '../pages/Firebase/firebase.init'

initializeAuthetication()
const useFirebse = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
     console.log(error);

    const auth = getAuth();
    
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                verifyEmail();
            })
            .catch((error) => {
                setError(error.message)
              });
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
            
    }
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                setError(error.message);
              });
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {

        })
        .catch((error) => {
            setError(error.message);
        })
    } 
    const signInwithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])
    return {
        user,
        error,
        isLoading,
        createUser,
        loginUser,
        logOut,
        signInwithGoogle,
    }
}
export default useFirebse;