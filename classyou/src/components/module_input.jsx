import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function ModuleInput(props) {
    const navigate = useNavigate()
    const [data, setData] = useState({
        title : "",
        description: "",
        class_id:props.class_id
    });

    const onChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        if(data.title === "" || data.description === ""){
            alert("Sorry, both title and description must have value to be inserted.") 
        } 
        else{
            const newData = data
            props.createModule(newData)
            alert(`Module with title: ${data.title} has been added.`)
            setData({
                title : "",
                description: "",
                class_id:props.class_id
            })
        }
        e.preventDefault();
    };

    return(
        <div className="border-2 border-black border-t-0">
        <div className="container lg:w-3/5 mx-auto p-10">
        <div className="my-1">
        <h1 className="font-spacemono text-lg font-bold">Add Module</h1>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
        <div className="my-2">
            <p className="font-semibold">Module Title:</p>
            <input type="text" className="border-2 border-black w-full px-2" name="title" value={data.title} onChange={onChange} required/>
        </div> 
        <div className="my-2">
            <p className="font-semibold">Module Description:</p>
            <textarea type="text" className="border-2 border-black w-full px-2" name="description" value={data.description} onChange={onChange} required/>
        </div>
        <div className="flex justify-end">
            <button className="border-2 border-black bg-green-500 rounded-3xl border-b-4 text-white px-2 font-spacemono transform hover:translate-y-0.5 hover:bg-green-400" type="submit">Add Module</button>
            <button className="border-2 border-black bg-blue-500 rounded-3xl border-b-4 text-white px-2 font-spacemono transform hover:translate-y-0.5 hover:bg-blue-400" onClick={()=> navigate(`/admin/class/${props.class_id}`)}>Finish</button>
        </div>     
    </form>
        </div>
        </div>
        </div>
    
    
    )
};