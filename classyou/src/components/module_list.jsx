import ModuleItem from "./module_item";

export default function ModuleList(props){
    return(
        <ul>
            {props.data[0]?.modules.map((item)=>(
                <ModuleItem
                    key={item.id}
                    data={item}
            />))}
        </ul>
    );
};