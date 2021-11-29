import Logo from "./logo"
import Menu from "./menu"
import UserLogout from "./userLogout";

export default function Navbar(props){
    return (
          <navbar className="mx-3 flex flex-wrap content-center subpixel-antialiased">
            <Logo/>
            <Menu/>
            <UserLogout/>
          </navbar>
    );
}

