import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializeAuthetication from '../Firebase/firebase.init'

initializeAuthetication()
const useFirebse = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState("");
    console.log(user);

    const auth = getAuth();
    
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                verifyEmail();
            })
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
    }
    return {
        user,
        createUser,
        loginUser
    }
}
export default useFirebse;