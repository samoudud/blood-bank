import React, { createContext } from 'react';
import useCustom from '../hooks/useCustom';
export const AuthContext = createContext(null)

const DonorProvider = ({ children }) => {
    const allContext = useCustom();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default DonorProvider;