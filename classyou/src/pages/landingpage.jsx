import Header from "../components/header";
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function LandingPage(){
    const {loginWithRedirect} = useAuth0();
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate()
    const onSuccess = () => {
        loginWithRedirect()
    };
    useEffect(()=>{
        if (isAuthenticated) {
            navigate(`/admin/dashboard`)
        }
    },)
    return(
        <div className="bg-yellow-300 h-screen">
            <Header/>
            <div class="p-10 py-48 max-w-xl mx-auto">
                <h1 className="font-spacemono font-extrabold subpixel-antialiased text-5xl max-w-lg">You do the teach, we handle the class.</h1>
                <div className="mt-10 flex justify-center">
                <div onClick={onSuccess} className="border-2 text-xl border-b-4 border-black rounded-3xl p-2 w-full font-spacemono align-center bg-white hover:bg-gray-400 transform hover:translate-y-0.5">Sign In for teachers</div>
                </div>
            </div>
        </div>
    )
}