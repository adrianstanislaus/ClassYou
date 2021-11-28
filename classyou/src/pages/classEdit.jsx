import ClassInfoForm from "../components/class_info_form";
import Header from "../components/header";
import {
    gql,
    useMutation,
    useQuery,
  } from "@apollo/client";
import { useParams } from 'react-router-dom';

const UPDATE_CLASS = gql`
mutation MyMutation($id: uuid = "", $image: String = "", $meeting_link: String = "", $price: Int = 0, $subject: String = "", $title: String = "", $description: String = "", $schedule: timetz = "",) {
    update_classyou_classes_by_pk(pk_columns: {id: $id}, _set: {title: $title, subject: $subject, schedule: $schedule, price: $price, meeting_link: $meeting_link, image: $image, description: $description}) {
      id
    }
  }`;

const QUERY_CLASS_BY_ID = gql`
query MyQuery2($id: uuid = "") {
    classyou_classes_by_pk(id: $id) {
      description
      id
      image
      meeting_link
      price
      schedule
      subject
      title
    }
  }`;

export default function ClassEdit(){
    const  param  = useParams()
    console.log("[useparam id]",param, param.id)
    const [updateClass,{ data: dataUpdate, loading: loadingUpdate, error: errorUpdate }] = useMutation(UPDATE_CLASS)
    const { loading, error, data } = useQuery(QUERY_CLASS_BY_ID,{variables:{id:param.id}});
    const editClass = (newClass) =>{
        updateClass({variables:newClass}) 
    };

    return(
        <>
        <Header/>
        {(loading) ? 
                    (<h1>loading...</h1>):
                 error ? (<h1>error...</h1>): (<ClassInfoForm
                 start={data?.classyou_classes_by_pk}
                 mutationClass={editClass}
                 data={dataUpdate?.update_classyou_classes_by_pk}
                 loading={loadingUpdate}
                 error={errorUpdate}/>)}
        
        </>
    );
};