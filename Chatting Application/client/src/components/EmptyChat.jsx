import React from "react";
import NOchat from "../no-chat.png";

export default function EmptyChat() {
    return (
        <div className="noChat">
            <img src={NOchat} alt="empty chat" />
        </div>
    );
}
