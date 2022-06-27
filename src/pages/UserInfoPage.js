import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
import { gapi } from 'gapi-script';
import { Navigation } from '../components/Navigation';

gapi.load('auth2', function() {
    /* Ready. Make a call to gapi.auth2.init or some other API */
      gapi.auth2.init(
          {
            client_id: '997265959245-ge8fkun5p6ra82arodllg59kgqhnm572.apps.googleusercontent.com',
          }
      );

    });

export const UserInfoPage = () => {
    const user = useUser();
    
    const [token,setToken] = useToken();

    const {id, email, isVerified, info } = user;

    // We'll use the history to navigate the user
    // programmatically later on (we're not using it yet)
    const history = useHistory();

    // These states are bound to the values of the text inputs
    // on the page (see JSX below). 
    const [favoriteFood, setFavoriteFood] = useState(info.favoriteFood || '');
    const [hairColor, setHairColor] = useState(info.hairColor || '');
    const [bio, setBio] = useState(info.bio || '');

    // These state variables control whether or not we show
    // the success and error message sections after making
    // a network request (see JSX below).
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    


    // This useEffect hook automatically hides the
    // success and error messages after 3 seconds when they're shown.
    // Just a little user interface improvement.
    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
               
                
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);

    const saveChanges = async () => {
        // Send a request to the server to
        // update the user's info with any changes we've
        // made to the text input values
        //alert('Save functionality not implemented yet');
        try{
            const response = await axios.put(`https://reactauth-backend.herokuapp.com/api/users/${id}`, {
                favoriteFood,
                hairColor,
                bio,
            }, {
                headers: { Authorization: `Bearer ${token}`}
            });

            const { token: newToken } = response.data;
            setToken(newToken);
            setShowSuccessMessage(true);

        }catch(error){
            setShowErrorMessage(true);
            console.log(error);
        }
    }

    const logOut = () => {

        localStorage.removeItem('token');

        //LOG USER OUT OF GOOGLE ACCOUNT AS WELL
        gapi.auth2.getAuthInstance().signOut();

        window.location.href = "/"
        //history.push('/login');
    }

 
    const resetValues = () => {
        // Reset the text input values to
        // their starting values (the data we loaded from the server)
        //alert('Reset functionality not implemented yet');
        
            setFavoriteFood(info.favoriteFood);
            setHairColor(info.hairColor);
            setBio(info.bio);
        
    }
    
    // And here we have the JSX for our component. It's pretty straightforward
    return (
        <div className="content-container">
            <Navigation/>
            <h1 className="heading my-10 font-le-havretext-3xl">Info for {email}</h1>
            {!isVerified && <div class="font-raleway" className="fail">You won't be able to make any changes until you verify your email</div>}
            {showSuccessMessage && <div class="font-raleway" className="success">Successfully saved user data!</div>}
            {showErrorMessage && <div class="font-raleway"className="fail">Uh oh... something went wrong and we couldn't save changes</div>}
            <label class="font-raleway">
                Favorite Food:
                <input class="font-raleway"
                    onChange={e => setFavoriteFood(e.target.value)}
                    value={favoriteFood} />
            </label>
            <label class="font-raleway">
                Hair Color:
                <input class="font-raleway"
                    onChange={e => setHairColor(e.target.value)}
                    value={hairColor} />
            </label>
            <label class="font-raleway">
                Bio:
                <input class="font-raleway"
                    onChange={e => setBio(e.target.value)}
                    value={bio} />
            </label>
            <hr />
            <button class="font-raleway" onClick={saveChanges}>Save Changes</button>
            <button class="font-raleway" onClick={resetValues}>Reset Values</button>
            <button class="font-raleway" onClick={logOut}>Log Out</button>
            
        </div>
    );
}