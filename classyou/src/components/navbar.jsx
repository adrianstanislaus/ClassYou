import Logo from "./logo"
import Menu from "./menu"
import UserLogout from "./userLogout";

export default function Navbar(props){
    return (
          <navbar className="md:mx-20 subpixel-antialiased grid grid-cols-6 gap-3 font-mono  text-center">
            <Logo/>
            <Menu/>
            <UserLogout/>
          </navbar>
    );
}

