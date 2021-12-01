import ClassInfoForm from "../components/class_info_form";
import Header from "../components/header";
import {
    gql,
    useMutation,
  } from "@apollo/client";

const INSERT_CLASS = gql`
mutation MyMutation($title: String = "", $description: String = "", $image: String = "", $meeting_link: String = "", $price: Int = 0, $schedule: timetz = "", $subject: String = "") {
    insert_classyou_classes(objects: {title: $title, subject: $subject, schedule: $schedule, price: $price, meeting_link: $meeting_link, image: $image, description: $description}) {
      returning {
        id
        title
      }
    }
  }`;


export default function ClassAdd(){
    const [insertClass,{ data: dataInsert, loading: loadingInsert, error: errorInsert }] = useMutation(INSERT_CLASS)
    const createClass = (newClass) =>{
        insertClass({variables:newClass}) 
    };

    return(
        <>
        <Header/>
        <ClassInfoForm
        mutationClass={createClass}
        data={dataInsert?.insert_classyou_classes.returning[0]}
        loading={loadingInsert}
        error={errorInsert}
        />
        </>
    );
};