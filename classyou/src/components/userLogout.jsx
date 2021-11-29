import React from 'react';
import { GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom';
const clientId = '524413172928-juqb4cpp28g2jvie35biar3do2942h7g.apps.googleusercontent.com';



export default function UserLogout(){
    const navigate = useNavigate()
    const onSuccess = () => {
        alert('[Logout Success]')
        navigate('/')
    };

    return(
        <div className='mx-2'>
            <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSuccess}
            />
        </div>
    );
}
