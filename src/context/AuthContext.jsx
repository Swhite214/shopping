
import React, { createContext, useEffect, useState} from "react";

export const AuthContext = createContext({
    user: undefined,
    setUser: () => {}
});

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(undefined);

    useEffect(()=>{
        fetch('http://localhost:8080/api/user-info', {credentials : 'include'})
        .then(res => res.ok ? res.json() : null)
        .then(data => setUser(data))
        .catch(() => setUser(null));
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;