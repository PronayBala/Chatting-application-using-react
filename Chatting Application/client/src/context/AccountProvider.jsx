import { createContext, useState, useRef, useEffect } from "react";
import React from "react";

import { io } from "socket.io-client";

export const AccountContext = createContext(null);

export default function AccountProvider({ children }) {
    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([]);

    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:9000");
    }, []);

    return (
        <AccountContext.Provider
            value={{
                account,
                setAccount,
                person,
                setPerson,
                socket,
                activeUsers,
                setActiveUsers
            }}
        >
            {children}
        </AccountContext.Provider>
    );
}
