import { useHistory } from 'react-router-dom';

export const PasswordResetFailure = () => {
    const history = useHistory();

    return (
        <div className="content-container">
            <h1 class="heading my-5 font-le-havre text-3xl">Password Reset Failure</h1>
            <p class="raleway">
               We weren't able to reset your password. 
            </p>
            <button onClick={() => history.push('/login')}>
            </button>
        </div>
    );
}