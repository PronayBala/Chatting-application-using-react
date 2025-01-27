import React from "react";
import LoginSection from "./LoginSection";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatSection from "./ChatSection";
import logo from "../chat-logo.png"

const Header = styled(AppBar)`
    height: 210px;
    background: #36bfa5;
    box-shadow: none;
`;

export default function Messenger() {
    const { account } = useContext(AccountContext);

    return (
        <>
            {account ? (
                <ChatSection />
            ) : (
                <div className="main-box">
                    <Header>
                        <img id="header-logo" src={logo} alt="logo" />
                        <Toolbar></Toolbar>
                    </Header>

                    <LoginSection />
                </div>
            )}
        </>
    );
}
