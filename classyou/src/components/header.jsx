import Navbar from "./navbar";


export default function Header(props){
    return (
        <header className="fixed bg-yellow-300 border-b-2 border-black w-full transform z-40">
          <Navbar
          search={props.search}/>
        </header>
    );
}

