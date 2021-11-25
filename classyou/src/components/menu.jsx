export default function Menu(){
    return(
        <menu className="flex m-0 p-0 col-span-4 ">
        <search>
          <input className="border-2 border-black rounded-lg w-48 px-2" type="text"/>
        </search>
        <ul className="flex">
          <li className=" mx-3"><a>Explore</a></li>
        </ul>
      </menu>
    );
}
