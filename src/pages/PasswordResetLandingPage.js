import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PasswordResetSuccess } from './PasswordResetSuccess';
import { PasswordResetFailure } from './PasswordResetFailure';

export const PasswordResetLandingPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const { passwordResetCode } = useParams();

    const onResetClicked = async () => {
        try {
            await axios.put(`https://reactauth-backend.herokuapp.com/api/users/${passwordResetCode}/reset-password`, { newPassword: passwordValue});
            setIsSuccess(true);
        }catch(e){
            console.log(e);
            setIsFailure(true);
        }
    }

    if (isFailure) return <PasswordResetFailure />
    if (isSuccess) return <PasswordResetSuccess />

    return (
        <div className="content-container">
            <h1 class="heading my-5 font-le-havre text-3xl">Reset Password</h1>
            <p class="font-raleway">Please enter a new password</p>
            <input class="font-raleway"
                type='password'
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="Password" />
                <input class="font-raleway"
                type='password'
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder=" Confirm Password" />

                <button class="font-raleway"
                    disabled={!passwordValue || !confirmPasswordValue || passwordValue !== confirmPasswordValue }
                    onClick={onResetClicked}
                    >Reset Password</button>
            
        </div>
    )

}