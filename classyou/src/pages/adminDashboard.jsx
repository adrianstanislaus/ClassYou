import ClassCardTeacher from "../components/classcard_teacher";
import Header from "../components/header";
import TeacherClassess from "../components/teacher_classess";
import TeacherDasboardTitle from "../components/teacher_dashboard";

export default function AdminDashboard(){
    return(
        <>
        <Header/>
        <TeacherDasboardTitle/>
        <TeacherClassess>
            <ClassCardTeacher/>
            <ClassCardTeacher/>
            <ClassCardTeacher/>
            <ClassCardTeacher/>
        </TeacherClassess>
        </>
    );
};