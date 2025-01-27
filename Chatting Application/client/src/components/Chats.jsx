import React, { useEffect, useState, useRef } from "react";
import { getMessages } from "../services/api";
import Message from "./Message";

export default function Chats({ conversation, reset, incomingMessage }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        };
        conversation._id && getMessageDetails();
    }, [conversation._id, reset]);

    useEffect(() => {
        incomingMessage &&
            conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages((prev) => [...prev, incomingMessage]);
    }, [incomingMessage, conversation]);

    return (
        <>
            <div className="main-chats-wrapper">
                    {messages &&
                        messages.map((message) => (
                            <Message message={message} />
                        ))}
            </div>
        </>
    );
}
