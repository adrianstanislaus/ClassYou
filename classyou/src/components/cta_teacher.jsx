import { useNavigate } from 'react-router-dom';
import Modal from './modal';

export default function Cta_teacher(props){
    const navigate = useNavigate()
    function meetClicked(){
        window.open(props.link, "_blank") //to open new page
     }
     console.log("[props.link]",props.link)
    return(
        <cta className="font-spacemono flex space-x-2 m-3 justify-end align-bottom">
                    <button onClick={() => meetClicked()} className="border-2 border-black px-2 rounded-3xl border-b-4 text-white bg-blue-500 focus-within:ring-4 ring-yellow-300 hover:bg-blue-400 transform hover:translate-y-0.5">Join Meet</button>
                    <button onClick={() => navigate(`/admin/class/${props.id}/editinfo`)} className="border-2 border-black px-2 rounded-3xl border-b-4 text-white bg-gray-500 focus-within:ring-4 ring-yellow-300 hover:bg-gray-400 transform hover:translate-y-0.5">Edit</button>
                    <Modal
                    deleteClass={props.deleteClass}
                    id={props.id}
                    />
        </cta>
    );
};