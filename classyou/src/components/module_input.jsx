import { useEffect, useState } from "react"

export default function ModuleInput(props) {
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
        }
        e.preventDefault();
    };

    return(
    <form onSubmit={handleSubmit}>
        <div className="border">
            <p>Module Title:</p>
            <input type="text" className="border" name="title" value={data.title} onChange={onChange} required/>
        </div> 
        <div className="border">
            <p>Module Description:</p>
            <input type="text" className="border" name="description" value={data.description} onChange={onChange} required/>
        </div>
        <div>
            <button type="submit">Add Module</button>
        </div>     
    </form>
    )
};