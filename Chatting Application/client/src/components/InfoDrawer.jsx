import React, { useContext } from "react";
import { Drawer } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { AccountContext } from "../context/AccountProvider";

const drawerStyle = {
    top: "5%",
    left: "2.5%",
    height: "89.9%",
    width: "31.6%",
    boxShadow: "none",
    background: "#292929",
};

export default function InfoDrawer(props) {
    const { account } = useContext(AccountContext);
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
                    <strong>Profile Information</strong>
                </div>
                <div className="profile-info-section">
                    <Avatar
                        alt="profile Picture"
                        src={account.picture}
                        sx={{ width: 150, height: 150 }}
                        style={{
                            margin: "auto",
                        }}
                    />
                    <h3>{account.name}</h3>
                    <h4>{account.email}</h4>
                    <br />
                    <span>
                        This is not your use name or pin. This name will be
                        visibal to your message.
                    </span>
                </div>
            </Drawer>
        </>
    );
}