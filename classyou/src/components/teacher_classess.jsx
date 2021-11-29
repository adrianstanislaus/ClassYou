import ClassCardTeacher from "./classcard_teacher";

export default function TeacherClassess(props){
    return(
        <div>
            <h3>Classess You Teach</h3>
            <ul>
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