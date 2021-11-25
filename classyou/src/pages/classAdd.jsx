import ClassCuricullum from "../components/class_curicullum";
import ClassInfoForm from "../components/class_info_form";
import Header from "../components/header";
import ModuleInput from "../components/module_input";
import ModuleList from "../components/module_list";

export default function ClassAdd(){
    return(
        <>
        <Header/>
        <ClassInfoForm/>
        <ClassCuricullum>
            <ModuleList
                data={{}}
            />
            <ModuleInput/>
        </ClassCuricullum>
        </>
    );
};