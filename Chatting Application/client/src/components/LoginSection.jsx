import React from "react";
import { Dialog } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { addUser } from "../services/api";

const dialogStyle = {
    maxHeight: "2000px",
    height: "900px",
    maxWidth: "90vw",
    width: "50vw",
    background: "#292929",
    color: "#fff",
};

export default function LoginSection() {
    const { setAccount } = useContext(AccountContext);
    return (
        <>
            <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop>
                <div className="top-box">
                    <p>To use this Messenger in you computer:</p>
                    <br />
                    <ol>
                        <li>Click on login option.</li>
                        <li>Select your Google Account.</li>
                    </ol>
                    <div className="googleLogin-btn">
                        <GoogleLogin
                            onSuccess={async (res) => {
                                const userINFO = jwtDecode(res.credential);
                                setAccount(userINFO);
                                await addUser(userINFO);
                            }}
                            onError={() => {
                                alert("Login Faild!");
                            }}
                        />
                    </div>
                </div>
                <div className="bottom-box"></div>
            </Dialog>
        </>
    );
}
