import ModuleItem from "./module_item";

export default function ModuleList(props){
    return(
        <ul className="border-2 border-black shadow-md">
            {props.data?.map((item)=>(
                <ModuleItem
                    key={item.id}
                    data={item}
                    editModule={props.editModule}
                    deleteModule={props.deleteModule}
            />))}
        </ul>
    );
};