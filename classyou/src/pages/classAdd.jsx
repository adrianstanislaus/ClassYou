import ClassCardTeacher from "../components/classcard_teacher";
import ClassCuricullum from "../components/class_curicullum";
import ClassInfo from "../components/class_info";
import Header from "../components/header";
import ModuleInput from "../components/module_input";
import ModuleItem from "../components/module_item";
import ModuleList from "../components/module_list";
import TeacherClassess from "../components/teacher_classess";
import TeacherDasboardTitle from "../components/teacher_dashboard";

export default function ClassAdd(){
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