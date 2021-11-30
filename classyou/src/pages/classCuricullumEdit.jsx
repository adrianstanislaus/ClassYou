import Header from "../components/header";
import ModuleList from "../components/module_list";
import {
    gql,
    useMutation,
    useQuery
  } from "@apollo/client";
import ModuleInput from "../components/module_input";
import { useParams } from 'react-router-dom';
import ClassCuricullum from "../components/class_curicullum";

  const QUERY_MODULES_BY_CLASS_ID = gql`
  query MyQuery($class_id: uuid_comparison_exp = {}) {
    classyou_modules(where: {class_id: $class_id}) {
      title
      id
      description
      class_id
    }
  }
  `;

  const UPDATE_MODULE = gql`
  mutation MyMutation($id: uuid = "", $description: String = "", $title: String = "") {
    update_classyou_modules_by_pk(pk_columns: {id: $id}, _set: {description: $description, title: $title}) {
      title
      id
    }
  }`;

  const INSERT_MODULE = gql`
  mutation MyMutation2($class_id: uuid = "", $description: String = "", $title: String = "") {
    insert_classyou_modules_one(object: {class_id: $class_id, description: $description, title: $title}) {
      description
      title
    }
  }`;

  

  const DELETE_MODULE = gql`
  mutation MyMutation3($id: uuid = "") {
    delete_classyou_modules_by_pk(id: $id) {
      id
      title
    }
  }`;

export default function ClassModuleEdit(){
    const  param  = useParams()
    const { loading, error, data } = useQuery(QUERY_MODULES_BY_CLASS_ID,{variables:{class_id:{"_eq": param.id}}});
    const [updateModule,{ data: dataUpdate, loading: loadingUpdate, error: errorUpdate }] = useMutation(UPDATE_MODULE,{refetchQueries:[QUERY_MODULES_BY_CLASS_ID],notifyOnNetworkStatusChange: true})
    const [insertModule,{ data: dataInsert, loading: loadingInsert, error: errorInsert }] = useMutation(INSERT_MODULE,{refetchQueries:[QUERY_MODULES_BY_CLASS_ID],notifyOnNetworkStatusChange: true})
    const [deletingModule,{ data: dataDelete, loading: loadingDelete, error: errorDelete }] = useMutation(DELETE_MODULE,{refetchQueries:[QUERY_MODULES_BY_CLASS_ID],notifyOnNetworkStatusChange: true})
    const deleteModule = (id) =>{
      deletingModule({variables:{id: id}}) 
  };
    const createModule = (newModule) =>{
        insertModule({variables:newModule}) 
    };
    
    const editModule = (newModule) =>{
        updateModule({variables:newModule}) 
    };
    return(
        <>
        <Header/>
        <div className="pt-16">
        {(loading || loadingInsert || loadingUpdate) ? 
                    (<h1>loading...</h1>):
                 (error || errorInsert || errorUpdate) ? (<h1>error...</h1>):
        (<ClassCuricullum>
        <ModuleList
            data={data?.classyou_modules}
            editModule={editModule}
            deleteModule={deleteModule}
        /> </ClassCuricullum>)}
        <ModuleInput
            createModule={createModule}
            class_id={param.id}
        />
        </div>
        </>
    );
};