import React from "react";
import { IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function ChatBoxFooter(props) {
    
    return (
        <>
            <div className="main-chatboxfooter-wrapper">
                <IconButton aria-label="delete">
                    <AttachFileIcon style={{ color: "#fff" }} />
                </IconButton>
                <input type="text" placeholder="Write your message here!" 
                    value={props.text}
                    onChange={(e)=>{
                        props.setText(e.target.value);
                    }}

                    onKeyPress={(e)=>{
                        props.sendText(e)
                    }}
                />
            </div>
        </>
    );
}
