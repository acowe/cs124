import "./UnAuthApp.css"
import InCloudApp from "./InCloudApp";
import {useState} from "react";
import { useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import firebase from "firebase/compat";
import TabList from './TabList';



const firebaseConfig = {
    apiKey: "AIzaSyCcjiZC0kvbIDUuYKiskjJDrvurCA-F2g8",
    authDomain: "acowe-fbdb1.firebaseapp.com",
    projectId: "acowe-fbdb1",
    storageBucket: "acowe-fbdb1.appspot.com",
    messagingSenderId: "258279491687",
    appId: "1:258279491687:web:b339460be12ffae3222cc2",
    measurementId: "G-DQR3SH9VE5"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const collectionName = "TaskList-SharingAllowed"

function UnAuthApp(props){
    const [user, loading, error] = useAuthState(auth);

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    if (loading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            <div className="AppInUseButton">
            {user.displayName || user.email}
                <button type="button"  onClick={() => auth.signOut()}>Logout</button>
                {!user.emailVerified && <button type="button" onClick={verifyEmail}>
                    Verify email</button>}<br/>
            </div>
            <InCloudApp {...props} user={user} collectionName = {collectionName}/>
        </div>
    } else {
        return <>
            {error && <p>Error App: {error.message}</p>}
            <TabList>
                <SignIn key="Sign In"/>
                <SignUp key="Sign Up"/>
            </TabList>
        </>
    }
}

function SignIn() {
    const [
        signInWithEmailAndPassword,
        userCredential, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    const [emailText, setEmailText] = useState("");
    const [passText, setPassText] = useState("") ;

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Logging in…</p>
    }

    function onEnterEmail (key){
        if (key === "Enter" && passText !== ""){
            signInWithEmailAndPassword(emailText, passText);
        }
    }
    function onEnterPass (key){
        if (key === "Enter" && emailText !== ""){
            signInWithEmailAndPassword(emailText, passText);
        }
    }
    return <div className="signIn">
        {error && <p>"Error logging in: " {error.message}</p>}
        <input  type = "text"  id = "emailText" name="emailText"
                onKeyPress={(e)=>onEnterEmail(e.key)}
                onChange={(event)=>setEmailText(event.target.value)}
                aria-label="Textbox for email entry"
                value={emailText}/> <br/>
        <input  type = "password"  id = "passText" name="passText"
                onKeyPress={(e)=>onEnterPass(e.key)}
                onChange={(event)=>setPassText(event.target.value)}
                aria-label="Textbox for password entry"
                value={passText}/> <br/>
        <button onClick={() =>
            signInWithEmailAndPassword(emailText, passText)}>Login
        </button>
        <button onClick={() =>
            auth.signInWithPopup(googleProvider)}>Login with Google
        </button>
    </div>
}

function SignUp() {
    const [
        createUserWithEmailAndPassword,
        userCredential, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);

    const [emailText, setEmailText] = useState("");
    const [passText, setPassText] = useState("") ;

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Signing up…</p>
    }
    function onEnterEmail (key){
        if (key === "Enter" && passText !== ""){
            createUserWithEmailAndPassword(emailText, passText);
        }
    }
    function onEnterPass (key){
        if (key === "Enter" && emailText !== ""){
            createUserWithEmailAndPassword(emailText, passText);
        }
    }

    return <div className="signUp">
        {error && <p>"Error signing up: " {error.message}</p>}
        <input  type = "text"  id = "emailText" name="emailText"
                onKeyPress={(e)=>onEnterEmail(e.key)}
                onChange={(event)=>setEmailText(event.target.value)}
                aria-label="Textbox for user creation email entry"
                value={emailText}/> <br/>
        <input  type = "password"  id = "passText" name="passText"
                onKeyPress={(e)=>onEnterPass(e.key)}
                onChange={(event)=>setPassText(event.target.value)}
                aria-label="Textbox for user creation password entry"
                value={passText}/> <br/>
        <button onClick={() =>
            createUserWithEmailAndPassword(emailText, passText)}>
            Create user
        </button>

    </div>
}


export default UnAuthApp;