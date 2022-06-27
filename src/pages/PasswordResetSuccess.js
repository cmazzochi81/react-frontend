import { useHistory } from 'react-router-dom';

export const PasswordResetSuccess = () => {
    const history = useHistory();

    return (
        <div className="content-container">
            <h1 class="heading my-5 font-le-havre text-3xl">Success!</h1>
            <p class="font-raleway">
                Your password has been reset.  Now please login. 
            </p>
            <button onClick={() => history.push('/login')}>
                Log In
            </button>
        </div>
    );
}