import React from "react";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { setConversation } from "../services/api";

export default function Conversation(props) {
    const { setPerson, account } = useContext(AccountContext);
    const getUser = async () => {
        setPerson(props.data);
        await setConversation({ senderId: account.sub , receiverId: props.data.sub});
    };
    return (
        <>
            <div
                className="main-conversation-wrapper"
                onClick={() => getUser()}
            >
                <div className="conversation-top-section">
                    <Avatar src={props.data.picture} />
                </div>
                <div>
                    <span className="conversation-name">
                        <strong>{props.data.name}</strong>
                    </span>
                    <br />
                    <span style={{ color: "#509070" }}>online</span>
                </div>
            </div>
        </>
    );
}
