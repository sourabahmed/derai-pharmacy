import {GoogleAuthProvider, signInWithPopup, signOut, getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuthetication from '../Firebase/firebase.init'

initializeAuthetication()
const useFirebse = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState("");
    console.log(user);
    console.log(error);

    const auth = getAuth();
    
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
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
                console.log(user);
                setUser(result.user)
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
    return {
        user,
        error,
        createUser,
        loginUser,
        logOut,
        signInwithGoogle
    }
}
export default useFirebse;