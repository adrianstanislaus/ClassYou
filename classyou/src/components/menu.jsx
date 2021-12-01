import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function Menu(props){
  const navigate = useNavigate()
  let start =""
  if (props.search){
    start = props.search
  }else{
    start= ""
  }

  const [input, setInput] = useState(start);
  

    const onChange = (e) => {
        console.log(e.target.value)
        setInput( e.target.value,)
    }

    const handleSubmit = (e) => {
            const newData = input
            let params = {src: newData}
            searchClass(params)
        e.preventDefault();
    };

    const searchClass = (params) =>
      navigate({
        pathname: '/search',
        search: `?${createSearchParams(params)}`,
      });

    return(
        <menu className="flex max-w-10 m-0 p-0">
        <search className="flex bg-white border-2 border-black rounded-3xl p-1 focus-within:ring-4 ">
          <input className="flex w-11/12 px-2 rounded-3xl focus-within:outline-none" type="text" value={input} onChange={onChange}/>
          <button onClick={handleSubmit} className="flex justify-self-end bg-black text-white px-2 py-1 rounded-2xl">Search</button>
        </search>
      </menu>
    );
}
