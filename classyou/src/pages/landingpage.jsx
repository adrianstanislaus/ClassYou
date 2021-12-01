import Header from "../components/header";
import LoginButton from "../components/loginbutton";
import User from "../components/user";

export default function LandingPage(){
    return(
        <div className="bg-yellow-300 h-screen">
            <Header/>
            <div class="p-10 py-48 max-w-xl mx-auto">
                <h1 className="font-spacemono font-extrabold subpixel-antialiased text-5xl max-w-lg">You do the teach, we handle the class.</h1>
                <div className="mt-10 flex justify-center bg-white rounded-3xl border-2 border-black max-w-lg">
                <div className="font-roboto font-medium pt-3 mx-3">Sign In for teachers:</div>
                <LoginButton/>
                </div>
                
            </div>
        </div>
    )
}