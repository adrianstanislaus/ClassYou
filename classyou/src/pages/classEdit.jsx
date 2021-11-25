import ClassCuricullum from "../components/class_curicullum";
import ClassInfo from "../components/class_info";
import Header from "../components/header";
import ModuleInput from "../components/module_input";
import ModuleItem from "../components/module_item";
import ModuleList from "../components/module_list";

export default function ClassEdit(){
    return(
        <>
        <Header/>
        <ClassInfo/>
        <ClassCuricullum>
            <ModuleList>
                <ModuleItem/>
                <ModuleItem/>
                <ModuleItem/>
            </ModuleList>
            <ModuleInput/>
        </ClassCuricullum>
        </>
    );
};