import React from "react";
import { Drawer } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const drawerStyle = {
    top: "5%",
    left: "2.5%",
    height: "89.9%",
    width: "31.6%",
    boxShadow: "none",
    background: "#292929",
};

export default function StatusDrawer(props) {
    return (
        <>
            <Drawer
                open={props.open}
                style={{ zIndex: 1500 }}
                PaperProps={{ sx: drawerStyle }}
                hideBackdrop
            >
                <div className="drawerHeader">
                    <IconButton
                        aria-label="delete"
                        onClick={() => {
                            props.setopen(false);
                        }}
                    >
                        <KeyboardBackspaceIcon style={{ color: "#fff" }} />
                    </IconButton>
                    <strong>Status</strong>
                </div>
                <div className="status">
                        <strong>You haven't set any status yet!</strong>
                </div>
                <div className="status-body">
                    <input
                        className="statusUpdateFild"
                        type="text"
                        placeholder="write your status here!"
                    />
                    <br />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        style={{
                            color: "#fff",
                            padding: "15px 25px",
                            background: "#36bfa5",
                        }}
                    >
                        Update
                    </Button>
                </div>
            </Drawer>
        </>
    );
}
