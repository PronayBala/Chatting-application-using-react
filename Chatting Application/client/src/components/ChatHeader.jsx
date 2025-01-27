import React from "react";
import { useContext, useState } from "react";
import { AccountContext } from "../context/AccountProvider";
import { Avatar, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "./InfoDrawer";
import StatusDrawer from "./StatusDrawer";
import SettingsIcon from "@mui/icons-material/Settings";
import DonutLarge from "@mui/icons-material/DonutLarge";
import Search from "./Search";
import Conversations from "./Conversations";

export default function ChatHeader() {
    const { account } = useContext(AccountContext);
    const Ibutton = styled(IconButton)({
        color: "#fff",
    });

    const [text, setText] = useState("");

    const [isOpen, setOpen] = useState(false);
    const [statusisOpen, setstatusOpen] = useState(false);

    return (
        <>
            <div className="chat-header">
                <InfoDrawer open={isOpen} setopen={setOpen} />
                <StatusDrawer open={statusisOpen} setopen={setstatusOpen} />
                <Stack direction="row" spacing={2} className="dp">
                    <Avatar
                        style={{ cursor: "pointer" }}
                        alt={account.name}
                        src={account.picture}
                        onClick={() => {
                            setOpen(true);
                        }}
                    />
                    <span>
                        <strong>{account.name}</strong>
                    </span>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Ibutton
                        onClick={() => {
                            setstatusOpen(true);
                        }}
                    >
                        <DonutLarge />
                    </Ibutton>
                    <Ibutton onClick={() => {}}>
                        <SettingsIcon />
                    </Ibutton>
                    <HeaderMenu Styles={Ibutton} setopen={setOpen} />
                </Stack>
            </div>
            <Search setText={setText} />

            <Conversations text = {text}/>
        </>
    );
}
