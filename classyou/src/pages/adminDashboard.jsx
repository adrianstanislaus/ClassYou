import Header from "../components/header";
import TeacherClassess from "../components/teacher_classess";
import TeacherDasboardTitle from "../components/teacher_dashboard";
import {
    useQuery,
    gql,
    useMutation
  } from "@apollo/client";
import { useEffect } from "react";

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
    const { loading, error, data } = useQuery(QUERY_CLASSES,{fetchPolicy: "no-cache", notifyOnNetworkStatusChange: true});
    const [deletingClass,{ loading: loadingDelete, error: errorDelete }] = useMutation(DELETE_CLASS,{refetchQueries:[QUERY_CLASSES],notifyOnNetworkStatusChange: true})
    const deleteClass = (id) =>{
      deletingClass({variables:{id: id}}) 
  };
    const user= {title: "Your Class", teacher:true}
    useEffect(()=>{

    },[data])
    return(
        <>
        <Header/>
        <div className="pt-16">
        <TeacherDasboardTitle/>
        { (loading || loadingDelete) ? 
                    (<div class="loader">Loading...</div>):
                 (error || errorDelete) ? (<h1>error...</h1>):
        (<TeacherClassess
            user={user}
            data={data?.classyou_classes}
            deleteClass={deleteClass}
        />)}
        </div>
        </>
    );
};