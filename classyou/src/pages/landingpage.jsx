import Header from "../components/header";
import User from "../components/user";
import UserLogout from "../components/userLogout";

export default function LandingPage(){
    return(
        <div>
            <Header/>
            <div class="container mx-auto my-11">
                <h1>Create the right class, for you.</h1>
                <User/>
            </div>
        </div>
    )
}