import Logo from "./logo"
import Menu from "./menu"
import User from "./user"

export default function Navbar(){
    return (
          <navbar className="md:mx-20 subpixel-antialiased grid grid-cols-6 gap-3 border font-mono  md:text-lg text-center">
            <Logo/>
            <Menu/>
            <User/>
          </navbar>
    );
}

