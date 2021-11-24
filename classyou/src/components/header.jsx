import Logo from "./logo";
import Menu from "./menu";
import Navbar from "./navbar";
import User from "./user";

export default function Header(){
    return (
        <header className="bg-yellow-300 py-5">
          <Navbar/>
        </header>
    );
}

