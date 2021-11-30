import Logo from "./logo"
import Menu from "./menu"
import UserLogout from "./userLogout";

export default function Navbar(props){
    return (
          <navbar className="mx-2 py-3 lg:mx-10 space-x-2 flex justify-center subpixel-antialiased sm:justify-start ">
            <Logo/>
            <Menu/>
          </navbar>
    );
}

