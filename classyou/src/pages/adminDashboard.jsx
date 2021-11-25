import ClassCardTeacher from "../components/classcard_teacher";
import Header from "../components/header";
import TeacherClassess from "../components/teacher_classess";
import TeacherDasboardTitle from "../components/teacher_dashboard";
import {
    useQuery,
    gql,
    useLazyQuery,
    useMutation
  } from "@apollo/client";

const QUERY_CLASSES = gql`
query MyQuery($id: uuid_comparison_exp = {}) {
    classyou_classes(where: {id: $id}) {
      description
      id
      image
      meeting_link
      price
      schedule
      subject
      title
  
    }
  }
`;

export default function AdminDashboard(){
    const { loading, error, data } = useQuery(QUERY_CLASSES);
    return(
        <>
        <Header/>
        <TeacherDasboardTitle/>
        { (loading) ? 
                    (<h1>loading...</h1>):
                 error ? (<h1>error...</h1>):
        (<TeacherClassess
            data={data?.classyou_classes}
        />)}
        </>
    );
};