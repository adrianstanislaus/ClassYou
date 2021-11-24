export default function Menu(){
    return(
        <menu className="border flex m-0 p-0 col-span-4 ">
        <search className="border">
          <input type="text"/>
        </search>
        <ul className="flex border">
          <li className="border mx-2"><a>Explore</a></li>
        </ul>
      </menu>
    );
}
