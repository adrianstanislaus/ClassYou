import ModuleItem from "./module_item";

export default function ModuleList(props){
    return(
        <ul>
            {props.data?.map((item)=>(
                <ModuleItem
                    key={item.id}
                    data={item}
            />))}
        </ul>
    );
};