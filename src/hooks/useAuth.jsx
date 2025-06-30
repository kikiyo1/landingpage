import React, { createContext, useContext, useState, useMemo } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('metarak_user')));

    const login = (username, password) => {
        if (username === 'KIWUT' && password === 'JAKARTAKU123') {
            const userData = { username };
            localStorage.setItem('metarak_user', JSON.stringify(userData));
            setUser(userData);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('metarak_user');
        setUser(null);
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
        }),
        [user]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};