import ClassInfo from "./class_info";


export default function ClassHeader(props){
    return(
        <div>
            <ClassInfo
            data={props.data[0]}
            deleteClass={props.deleteClass}
            />
        </div>
    );
}