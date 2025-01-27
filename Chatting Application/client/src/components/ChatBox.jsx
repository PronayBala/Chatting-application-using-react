import React, { useEffect } from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxFooter from "./ChatBoxFooter";
import { useContext, useState } from "react";
import { AccountContext } from "../context/AccountProvider";
import Chats from "./Chats";
import { getConversation, newMessage } from "../services/api";

export default function ChatBox() {
    const { account, person, socket } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    const [text, setText] = useState("");

    let [reset, setReset] = useState(false);

    const [incomingMessage, setIncomingMessage] = useState(null);

    useEffect(()=>{
        socket.current.on('getMessage', data =>{
            setIncomingMessage({
                 ...data,
                 createdAt: Date.now()
            })
        })
    },[])

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({
                senderId: account.sub,
                receiverId: person.sub,
            });
            setConversation(data);
        };
        getConversationDetails();
    }, [person.sub]);



    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: "text",
                text: text,
            };

            setText("");

            socket.current.emit('sendMessage', message);

            await newMessage(message);

            if (reset === true) {
                setReset(false);
            }
            else{
                setReset(true);
            }
        }
    };

    return (
        <>
            <ChatBoxHeader person={person} />
            <Chats
                conversation={conversation}
                reset={reset}
                setReset={setReset}
                incomingMessage={incomingMessage}
            />
            <ChatBoxFooter sendText={sendText} setText={setText} text={text} />
        </>
    );
}
