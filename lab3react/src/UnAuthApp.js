import InCloudApp from "./InCloudApp";
import {useState} from "react";
import { useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import TabList from './TabList';
import inCloudApp from "./InCloudApp";


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
const db = firebase.firestore();
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
        console.log(user);
        return <div>
            {user.displayName || user.email}
            <button type="button" onClick={() => auth.signOut()}>Logout</button>
            {!user.emailVerified && <button type="button" onClick={verifyEmail}>Verify email</button>}<br/>
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

const FAKE_EMAIL = 'foo@bar.com';
const FAKE_PASSWORD = 'xyzzyxx';


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
    return <div>
        {error && <p>"Error logging in: " {error.message}</p>}
        <input  type = "text"  id = "emailText" name="emailText"
                onKeyPress={(e)=>onEnterEmail(e.key)}
                onChange={(event)=>setEmailText(event.target.value)} value={emailText}/> <br/>
        <input  type = "password"  id = "passText" name="passText"
                onKeyPress={(e)=>onEnterPass(e.key)}
                onChange={(event)=>setPassText(event.target.value)} value={passText}/> <br/>
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

    return <div>
        {error && <p>"Error signing up: " {error.message}</p>}
        <input  type = "text"  id = "emailText" name="emailText"
                onKeyPress={(e)=>onEnterEmail(e.key)}
                onChange={(event)=>setEmailText(event.target.value)} value={emailText}/> <br/>
        <input  type = "password"  id = "passText" name="passText"
                onKeyPress={(e)=>onEnterPass(e.key)}
                onChange={(event)=>setPassText(event.target.value)} value={passText}/> <br/>
        <button onClick={() =>
            createUserWithEmailAndPassword(emailText, passText)}>
            Create user
        </button>

    </div>
}


export default UnAuthApp;