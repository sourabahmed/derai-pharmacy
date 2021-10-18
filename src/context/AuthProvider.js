import React, { createContext } from 'react';
import useFirebse from '../hooks/useFirebase';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allContexts = useFirebse()
    return (
        <div>
            <AuthContext.Provider value={allContexts}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;