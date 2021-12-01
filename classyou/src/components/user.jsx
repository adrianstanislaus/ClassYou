import React from 'react';
// import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom';

// const clientId = '524413172928-juqb4cpp28g2jvie35biar3do2942h7g.apps.googleusercontent.com';

export default function User(props){
    const navigate = useNavigate()
    const onSuccess = () => {
        alert('[Login Success]')
        navigate('/admin/dashboard')
    };

    // const onFailure = (res) =>{
    //     alert('login failed')
    // };


    return(
        <user className="col-span-1">
            <button onClick={onSuccess} className='border-b-2 border-black rounded-3xl px-2 bg-green-500 transform hover:bg-green-400 hover:translate-y-0.5 text-white'>Click me</button>
        </user>
    );
}
