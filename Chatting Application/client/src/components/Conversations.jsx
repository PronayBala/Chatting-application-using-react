import React from "react";
import { useEffect, useState, useContext } from "react";
import { getUsers } from "../services/api";
import Conversation from "./Conversation";
import { AccountContext } from "../context/AccountProvider";

export default function Conversations({text}) {
    const [users, setUsers] = useState([]);
    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let res = await getUsers();
            const filterData = res.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        };
        fetchData();
    }, [text]);

    useEffect(()=>{
        socket.current.emit("addUsers", account);
        socket.current.on("getUsers", users =>{
            setActiveUsers(users);
        })
    }, [account])

    return (
        <>
            <div>
                {users.map(
                    (user) =>
                        user.sub !== account.sub && <Conversation data={user} />
                )}
            </div>
        </>
    );
}