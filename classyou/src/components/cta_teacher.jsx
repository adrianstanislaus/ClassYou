import { useNavigate } from 'react-router-dom';
import Modal from './modal';

export default function Cta_teacher(props){
    const navigate = useNavigate()
    function meetClicked(){
        window.open(props.link, "_blank") //to open new page
     }
     console.log("[props.link]",props.link)
    return(
        <cta className="flex space-x-2 m-3 justify-end align-bottom">
                    <button onClick={() => meetClicked()} className="border p-2 text-white bg-blue-500">Join Meet</button>
                    <button onClick={() => navigate(`/admin/class/${props.id}/editinfo`)} className="border p-2  text-white bg-gray-500">Edit</button>
                    <Modal
                    deleteClass={props.deleteClass}
                    id={props.id}
                    />
        </cta>
    );
};