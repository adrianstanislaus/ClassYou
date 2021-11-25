import ClassInfo from "./class_info";
import Cta_teacher from "./cta_teacher";

export default function ClassHeader(props){
    return(
        <div>
            <ClassInfo
            data={props.data[0]}
            />
        </div>
    );
}