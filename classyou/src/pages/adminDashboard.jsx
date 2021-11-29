import ClassCardTeacher from "../components/classcard_teacher";
import Header from "../components/header";
import TeacherClassess from "../components/teacher_classess";
import TeacherDasboardTitle from "../components/teacher_dashboard";
import {
    useQuery,
    gql,
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

const DELETE_CLASS = gql`
mutation MyMutation($id: uuid = "") {
  delete_classyou_classes_by_pk(id: $id) {
    id
  }
}`;

export default function AdminDashboard(){
    const { loading, error, data } = useQuery(QUERY_CLASSES,{notifyOnNetworkStatusChange: true});
    const [deletingClass,{ data: dataDelete, loading: loadingDelete, error: errorDelete }] = useMutation(DELETE_CLASS,{refetchQueries:[QUERY_CLASSES],notifyOnNetworkStatusChange: true})
    const deleteClass = (id) =>{
      deletingClass({variables:{id: id}}) 
  };
    return(
        <>
        <Header/>
        <TeacherDasboardTitle/>
        { (loading || loadingDelete) ? 
                    (<h1>loading...</h1>):
                 (error || errorDelete) ? (<h1>error...</h1>):
        (<TeacherClassess
            data={data?.classyou_classes}
            deleteClass={deleteClass}
        />)}
        </>
    );
};