import { Link } from "react-router-dom"
export default function Logo(){
    return (
        <logo className="w-auto p-1 m-0 mx-1">
            <Link to="/admin/dashboard" className="min-w-max py-1 px-2 text-2xl font-semibold font-spacemono uppercase text-white bg-black rounded-xl">ClassYou</Link>  
       </logo>
    );
}

