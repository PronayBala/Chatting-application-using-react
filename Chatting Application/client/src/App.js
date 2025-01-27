import "./App.css";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";


function App() {

    const clientId = '534844267045-c27e1bserdncifd6sfa87jjq5ihpleqi.apps.googleusercontent.com'
    
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <AccountProvider>
                <Messenger />
            </AccountProvider>
        </GoogleOAuthProvider>
    );
}

export default App;
