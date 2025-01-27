import React, { useContext } from "react";
import { Avatar } from "@mui/material";

import { AccountContext } from "../context/AccountProvider";

export default function ChatBoxHeader(props) {
    const { activeUsers } = useContext(AccountContext);
    return (
        <>
            <div className="ChatBoxHeader-main-wrapper">
                <div className="ChatBoxHeader-profile">
                    <Avatar alt="profile picture" src={props.person.picture} />
                </div>
                <div className="ChatBoxHeader-name-status">
                    <strong>{props.person.name}</strong>
                    <br />
                    <span>{activeUsers?.find(user => user.sub === props.person.sub) ? 'Online' : 'Offline'}</span>
                </div>
            </div>
        </>
    );
}
