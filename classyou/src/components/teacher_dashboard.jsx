import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './logoutButton';

export default function TeacherDasboardTitle(){
    const { user } = useAuth0();
    return(
        <div className="border-t-2 border-b-1 border-black flex subpixel-antialiased">
            <h2 className="uppercase font-spacemono font-semibold border-b-2 border-black text-3xl flex-grow p-2 py-5">Teacher's Dashboard</h2>
            <div className="border-2 border-r-0 border-black bg-green-500 px-2 py-1 ">
                <div className="font-spacemono font-bold text-white pt-2">{user.name}</div>
                <div className='md:flex'>
                <div className="font-spacemono font-medium text-white text-xs mr-4">{user.email}</div>
                <LogoutButton/>
                </div>
            </div>
        </div>
    );
}


