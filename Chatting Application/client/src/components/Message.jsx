import React, { useContext } from "react";

import { AccountContext } from "../context/AccountProvider";

export default function Message({ message }) {
    const { account } = useContext(AccountContext);
    let Side = "left";

    if (account.sub === message.senderId) {
        Side = "right";
    }

    return (
        <div className={`msg ${Side}`}>
            <div>
                <span>{message.text}</span>
                <br />
                <span className="msg-time">
                    {message.createdAt}
                </span>
            </div>
        </div>
    );
}
