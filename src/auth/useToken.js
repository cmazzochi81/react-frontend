import { useState } from 'react';

export const useToken = () => {

    //Create internal state linked to the local storage of their browser
    
    const [token, setTokenInternal] = useState(() => {
        return localStorage.getItem('token');
    });

    const setToken = newToken => {
        localStorage.setItem('token', newToken);
        setTokenInternal(newToken);
    }

    return [token, setToken];

}