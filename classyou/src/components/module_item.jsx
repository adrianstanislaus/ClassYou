import React, { useState,useEffect} from 'react';

export default function ModuleItem(props){
    const { id, class_id, title, description } = props.data
    const [editing, setEditing] = useState(false)

    const onDelete = (e) => {
        props.deleteModule(props.data.id)
    }
    const onEdit = (e) => {
        setEditing(true)
    }

    const [data, setData] = useState({
        id:id,
        title : title,
        description: description,
        class_id:class_id,
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
            props.editModule(newData)
            alert(`Module with title: ${data.title} has been added.`)
        }
        e.preventDefault();
    };

    useEffect(()=> {

    },[editing])

    return(
        <li className="border">
        <div>
            {editing? <input type="text" className="border" name="title" value={data.title} onChange={onChange} required/> :<><h2>{title}</h2>
            {(props.deleteModule)? (<><button onClick={onEdit}>edit</button>
            <button onClick={onDelete}>delete</button></>) : null
            }
            </>}
            
            <button>show</button>
        </div> 
        <div className="border">
            <p>{description}</p>
            {editing && <input type="text" className="border" name="description" value={data.description} onChange={onChange} required/>}
        </div>
        {editing && <button onClick={handleSubmit}>Submit edit</button>}
        </li>
    );
};