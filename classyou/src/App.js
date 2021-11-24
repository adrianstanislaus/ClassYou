import './App.css';

function App() {
  return (
    <div>
      <header className="border bg-yellow-300 ">
        <navbar className="h-10 container mx-auto mt-4 grid grid-cols-6 gap-3 border">
          <logo className="h-10 col-span-1 border ">
            <p className="border">ClassYou</p>
          </logo>
          <menu className="border flex m-0 col-span-4 ">
            <search className="border">
              <input type="text"/>
            </search>
            <ul className="flex border">
              <li className="border"><a>Explore</a></li>
              <li className="border"><a>About</a></li>
            </ul>
          </menu>
          <user className="h-10 col-span-1 border">
          <p className="border">Admin</p>
          </user>
        </navbar>
      </header>
      
    </div>
  );
}

export default App;
