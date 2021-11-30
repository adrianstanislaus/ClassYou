import ClassCardTeacher from "./classcard_teacher";
import { Link } from "react-router-dom"
export default function TeacherClassess(props){
    return(
        <div>
            
            <div className="font-spacemono font-semibold  border-b-2 border-black p-2 flex space-x-2">
            <h3 className="pt-1">Classess You Teach</h3>
            <Link to="/admin/class/create" className="border-2 border-black border-b-4 bg-green-500 rounded-3xl px-2 text-white hover:bg-white hover:text-black">+</Link>
            </div>
            
            
            <ul className="lg:grid lg:grid-cols-4 mx-2">
            {props.data?.map((item)=>(
                <ClassCardTeacher
                    key={item.id}
                    data={item}
                    deleteClass={props.deleteClass}
            />))}
            </ul>
        </div>
    );
};