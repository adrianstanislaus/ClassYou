import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function ClassInfoForm(props){
    let startingData = {}
    if (props.start === "" || props.start === undefined){
        startingData = {
            title : "",
            description: "",
            price: "",
            image:"",
            meeting_link:"",
            schedule: "",
            subject:"",
        }
    }else{
        startingData= props.start
    }

    const navigate = useNavigate()
    const [data, setData] = useState(startingData);

    let newErrorMessage = {};
    let isInserted = {}
    const [errorMessage,setErrorMessage] = useState({
        valid: false,
        title : "",
        description: "",
        price: "",
        image:"",
        meeting_link:"",
        schedule: "",
        subject:"",
});

    const onChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        })
    }

    const onBlurTitle = (e) => {
        console.log(e);
        if (data.title ===""){
            newErrorMessage = ({...errorMessage,valid:false,title:"Title cannot be empty"})
        }else{
            newErrorMessage = ({...errorMessage, title:""})
        }
        setErrorMessage(newErrorMessage)
    }

    const onBlurDescription = (e) => {
        console.log(e);
        if (data.description ===""){
            newErrorMessage = ({...errorMessage,valid:false,description:"Description cannot be empty"})
        }else{
            newErrorMessage = ({...errorMessage, description:""})
        }
        setErrorMessage(newErrorMessage)
    }

    const onBlurPrice = (e) => {
        console.log(e);
        if (data.price ===""){
            newErrorMessage = ({...errorMessage,valid:false,price:"Price cannot be empty"})
        }else{
            newErrorMessage = ({...errorMessage, price:""})
        }
        setErrorMessage(newErrorMessage)
    }

    const onBlurImage = (e) => {
        console.log(e);
        if (data.image ===""){
            newErrorMessage = ({...errorMessage,valid:false,image:"Image cannot be empty"})
        }else{
            newErrorMessage = ({...errorMessage, image:""})
        }
        setErrorMessage(newErrorMessage)
    }

    const onBlurLink = (e) => {
        console.log(e);
        if (data.meeting_link ===""){
            newErrorMessage = ({...errorMessage,valid:false,meeting_link:"meetink link cannot be empty"})
        }else{
            newErrorMessage = ({...errorMessage, meeting_link:""})
        }
        setErrorMessage(newErrorMessage)
    }

    const onBlurSchedule = (e) => {
        console.log(e);
        if (data.schedule ===""){
            newErrorMessage = ({...errorMessage,valid:false,schedule:"Schedule cannot be empty"})
        }else{
            newErrorMessage = ({...errorMessage, schedule:""})
        }
        setErrorMessage(newErrorMessage)
    }

    const onBlurSubject = (e) => {
        console.log(e);
        if (data.subject ===""){
            newErrorMessage = ({...errorMessage,valid:false,subject:"Subject cannot be empty"})
        }else{
            newErrorMessage = ({...errorMessage, subject:""})
        }
        setErrorMessage(newErrorMessage)
    }

    const handleSubmit = (e) => {
        if(data.title === ""){
            onBlurTitle()
            alert("masih ada data yang salah nih.") 
        }else if(data.description===""){
           onBlurDescription()
           alert("masih ada data yang salah nih.")    
        }else if(data.price===""){
            onBlurPrice()
            alert("masih ada data yang salah nih.") 
        }else if(data.image===""){
            onBlurImage()
            alert("masih ada data yang salah nih.") 
        }else if(data.link===""){
            onBlurLink()
            alert("masih ada data yang salah nih.") 
        }else if(data.schedule===""){
            onBlurSchedule()
            alert("masih ada data yang salah nih.") 
        }else if(data.subject===""){
            onBlurSubject()
            alert("masih ada data yang salah nih.") 
        }else{
            const newData = data
            props.mutationClass(newData)
            alert(`Class with title: ${data.title} has been added.`)
        }
        e.preventDefault();
    };

    const triggerInvalid = (id) => {
        var input = document.getElementById(id);
        let idHelper = id+"helper"
        var helper = document.getElementById(idHelper);
        input.classList.add("border-red-700");
        helper.style.display = "block";
    };

    const triggerValid = (id) => {
        var input = document.getElementById(id);
        let idHelper = id+"helper"
        var helper = document.getElementById(idHelper);
        input.classList.remove("border-red-700");
        helper.style.display = "none";
    };

    useEffect(() => {     
        if(errorMessage.title ===""){
            triggerValid("title")
        }else{
            triggerInvalid("title")
        }
        if(errorMessage.description ===""){
            triggerValid("description")
        }else{
            triggerInvalid("description")
        }
        if(errorMessage.price ===""){
            triggerValid("price")
        }else{
            triggerInvalid("price")
        }
        if(errorMessage.image ===""){
            triggerValid("image")
        }else{
            triggerInvalid("image")
        }
        if(errorMessage.meeting_link ===""){
            triggerValid("link")
        }else{
            triggerInvalid("link")
        }
        if(errorMessage.schedule ===""){
            triggerValid("schedule")
        }else{
            triggerInvalid("schedule")
        }
        if(errorMessage.subject ===""){
            triggerValid("subject")
        }else{
            triggerInvalid("subject")
        }
    },);
    
    useEffect(()=>
    { console.log("[class added]",props.data)
    if (props.data !== undefined){
        isInserted = props.data
        let direct = isInserted.id
        navigate(`/admin/class/${direct}/editmodules`)
    }
    console.log(isInserted?.id)
    },[props.data])

    return(
        <form className="p-20 space-y-3" onSubmit={handleSubmit}>
            <div>
                <h2 className="text-lg font-semibold font-spacemono">Class Info</h2>
            </div>
            <div>
            <p className="font-semibold font-roboto">Class Title</p>
            <input id="title" type="text" className="border-2 border-black p-1 w-full" placeholder="Class Title" name="title" value={data.title} onChange={onChange} onBlur={onBlurTitle}/>
            <span id="titlehelper" class="block text-xs text-red-700">{errorMessage.title}</span>
            </div>
            <div>
            <p className="font-semibold font-roboto">Class Description</p>
            <textarea id="description" type="text" className="border-2 border-black p-1 w-full" placeholder="Description" name="description" value={data.description} onChange={onChange} onBlur={onBlurDescription}></textarea>
            <span id="descriptionhelper" class="block text-xs text-red-700">{errorMessage.description}</span>
            </div>
            <div>
            <p className="font-semibold font-roboto">Class Price</p>
            <input id="price" type="text" className="border-2 border-black p-1 w-full" placeholder="Class Price" name="price" value={data.price} onChange={onChange} onBlur={onBlurPrice}/>
            <span id="pricehelper" class="block text-xs text-red-700">{errorMessage.price}</span>
            </div>
            <div>
            <p className="font-semibold font-roboto">Title Image</p>
            <input id="image" type="text" className="border-2 border-black p-1 w-full" placeholder="Title Image" name="image" value={data.image} onChange={onChange} onBlur={onBlurImage}/>
            <span id="imagehelper" class="block text-xs text-red-700">{errorMessage.image}</span>
            </div>
            <div>
            <p className="font-semibold font-roboto">Class Meeting-Link</p>
            <input id="link" type="text" className="border-2 border-black p-1 w-full" placeholder="Class link" name="meeting_link" value={data.meeting_link} onChange={onChange} onBlur={onBlurLink}/>
            <span id="linkhelper" class="block text-xs text-red-700">{errorMessage.meeting_link}</span>
            </div>
            <div>
            <p className="font-semibold font-roboto">Class Schedule</p>
            <input id="schedule" type="text" className="border-2 border-black p-1 w-full" placeholder="Class schedule" name="schedule" value={data.schedule}  onChange={onChange} onBlur={onBlurSchedule}/>
            <span id="schedulehelper" class="block text-xs text-red-700">{errorMessage.schedule}</span>
            </div>
            <div>
            <p className="font-semibold font-roboto">Class Subject</p>
            <input id="subject" type="text" className="border-2 border-black p-1 w-full" placeholder="Class subject" name="subject" value={data.subject} onChange={onChange} onBlur={onBlurSubject}/>
            <span id="subjecthelper" class="block text-xs text-red-700">{errorMessage.subject}</span>
            </div>
            <div className="flex justify-end">
                <button className="text-white font-spacemono px-2 border-2 border-b-4 bg-green-500 rounded-3xl border-black transform hover:bg-green-400 hover:translate-y-0.5" type="submit">Submit</button>
            </div>
            { props.loading ? (<div>Loading</div>): props.error ? (<div>error</div>) : <></> }
        </form>
    );
};