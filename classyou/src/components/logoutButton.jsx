import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function LogoutButton(){
    const {logout} = useAuth0();
    return(
        <button className="border-2 border-b-4 border-black rounded-3xl px-2 bg-white hover:bg-gray-400 transform hover:translate-y-0.5" onClick={logout}>Logout</button>
    )
};