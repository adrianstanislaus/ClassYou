import React, { useState,useEffect} from 'react';

export default function ModuleItem(props){
    const { id, class_id, title, description } = props.data
    const [editing, setEditing] = useState(false)
    const [show, setShow] = useState(false)

    const onDelete = (e) => {
        props.deleteModule(props.data.id)
    }
    const onEdit = (e) => {
        setEditing(true)
        setShow(true)
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

    const onShow = () => {
        if (!show){
            setShow(true)
        }else{
            setShow(false)
        }
       
    }

    useEffect(()=> {
    },[editing,show])

    return(
        <li className="border-b-2 border-black">
        <div className='border-b-2 border-black p-2 font-semibold flex'>
            {editing? <input type="text" className="border" name="title" value={data.title} onChange={onChange} required/> :
            <><h2>{title}</h2 >{(props.deleteModule)? (<><button className='mx-1' onClick={onEdit}>edit</button>
            <button className="mx-1" onClick={onDelete}>delete</button></>) : null
            }</>}
            <div className='flex justify-end'>
            <button onClick={()=> onShow()} className='mx-3 text-blue-600'>show</button>
            </div>
        </div> 
        {show && (<><div className="p-2">
            {editing? <textarea type="text" className="w-full border" name="description" value={data.description} onChange={onChange} required/>:<h2>{description}</h2>}
        </div>
        <div className='flex justify-end m-2'>
        {editing && <button className='border-2 border-black border-b-4 bg-green-500 text-white font-spacemono transform hover:bg-green-400 hover:translate-y-0.5 rounded-3xl px-2' onClick={handleSubmit}>Submit edit</button>}
        </div></>)}
        </li>
    );
};