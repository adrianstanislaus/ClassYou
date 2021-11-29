export default function Menu(){
    return(
        <menu className="flex w-50 m-0 p-0">
        <search className="flex bg-white w-full border-2 border-black rounded-3xl p-1 focus-within:ring-4 ">
          <input className="flex w-11/12 px-2 rounded-3xl focus-within:outline-none" type="text"/>
          <button className="flex justify-self-end bg-black text-white px-2 py-1 rounded-2xl">Search</button>
        </search>
      </menu>
    );
}
