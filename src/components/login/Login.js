import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const Login = () => {

    const [dispatch] = useStateValue();

    const signIn = () =>{
        // e.preventDefault();
        auth
        .signInWithPopup(provider)
        .then( result =>{
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })

        })
        .catch(error =>{
            alert(error.message);
        })
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://firebasestorage.googleapis.com/v0/b/nicohnavarro-clones.appspot.com/o/assets%2Ficon_slack.png?alt=media&token=c2f39069-e39a-48c0-95db-1e5b0d937b4d' alt="icon_slack"/>
                <h1>Sign in to Slack-Clone</h1>
                <p>nicohnavarro.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
