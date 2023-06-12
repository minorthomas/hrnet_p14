import { createContext, useEffect, useState } from 'react';

function initialState() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

export const UsersContext = createContext();

export function UsersProvider({ children }) {
    const [usersData, setUsersData] = useState(initialState);

    const handleData = (newUsersData) => {
        setUsersData([...usersData, newUsersData]);
    };

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(usersData));
    }, [usersData]);

    return (
        <UsersContext.Provider value={{ usersData, handleData }}>
            {children}
        </UsersContext.Provider>
    );
}
