import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../logo.svg';

export const ForgotPasswordPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const history = useHistory();

    const onSubmitClicked = async () => {
        try{
            await axios.put(`https://reactauth-backend.herokuapp.com/api/forgot-password/${emailValue}`);
            setSuccess(true);
            setTimeout(() => {
                history.push('/login');
            }, 3000);
        }catch(e){
            setErrorMessage(e.message);
            console.log(e);
        }
    }

    return success ? (
        <div className="content-container">
            <h1 class="heading my-5 font-le-havre text-3xl">Success</h1>
            <p class="font-raleway">Check hyour email for a reset link</p>
        </div>
    ) : (

        <div className="content-container w-screen md:w-7/12">
            <h1 class="heading my-5 font-le-havre text-3xl">Forgot Password</h1>
            <p class="font-raleway">Enter your email and we'll send you a reset lin</p>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input class="font-raleway"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="youremail@mail.com" 
            />
            <button class="font-raleway"
                disabled={!emailValue}
                onClick={onSubmitClicked}
            >Send Reset Link</button>

                <button class="font-raleway" onClick={() => history.push('/')}>Back Home</button>
                <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}