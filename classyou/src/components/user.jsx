import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom';

const clientId = '524413172928-juqb4cpp28g2jvie35biar3do2942h7g.apps.googleusercontent.com';

export default function User(props){
    const navigate = useNavigate()
    const onSuccess = (res) => {
        alert('[Login Success]')
        console.log(res.profileObj)
        navigate('/admin/dashboard')
    };

    const onFailure = (res) =>{
        alert('login failed')
    };

    const onSuccessLogout = () => {
        alert('[Logout Success]')
        navigate('/')
        
    };

    return(
        <user className="col-span-1">
            {props.isLogedIn? 
            (<GoogleLogout
                clientId={clientId}
                buttonText="Sign Out"
                onLogoutSuccess={onSuccessLogout}
                />):(<GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    />) }
        </user>
    );
}
