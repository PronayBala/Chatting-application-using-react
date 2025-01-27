import { Dialog } from "@mui/material";
import React from "react";
import ChatHeader from "./ChatHeader";
import EmptyChat from "./EmptyChat";
import ChatBox from "./ChatBox";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

const dialogStyle = {
    maxHeight: "100vh",
    height: "90%",
    maxWidth: "100vw",
    width: "95%",
    margin: "20px",
    overflow: "hidden",
    borderRadius: "0px",
};

export default function ChatSection() {
    const {person} = useContext(AccountContext);
    return (
        <div className="main-wrapper">
            <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
                <div className="main-chat-container">
                    <div className="left-chat-bar">
                        <ChatHeader />
                    </div>
                    <div className="right-chat-section">
                        {Object.keys(person).length ? <ChatBox/> : <EmptyChat />}
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
