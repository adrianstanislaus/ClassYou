import ClassCuricullum from '../components/class_curicullum';
import ClassHeader from '../components/class_header';
import Header from "../components/header"
import ModuleList from '../components/module_list';
import {
    useQuery,
    useMutation,
    gql,
  } from "@apollo/client";
import { useParams } from 'react-router-dom';



const QUERY_CLASS = gql`
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
      modules {
        description
        id
        title
      }
    }
  }
`;

const DELETE_CLASS = gql`
mutation MyMutation($id: uuid = "") {
  delete_classyou_classes_by_pk(id: $id) {
    id
  }
}`;

export default function ClassDetail(){
    const  param  = useParams()
    const { loading, error, data } = useQuery(QUERY_CLASS,{variables:{id:{"_eq": param.id}},notifyOnNetworkStatusChange: true});
    const [deletingClass,{ data: dataDelete, loading: loadingDelete, error: errorDelete }] = useMutation(DELETE_CLASS,{notifyOnNetworkStatusChange: true})
    const deleteClass = (id) =>{
      deletingClass({variables:{id: id}}) 
  };

    return(
    <>
    <Header/>
    <div className='pt-16'>
    { (loading || loadingDelete) ? 
                    (<h1>loading...</h1>):
                 (error || errorDelete) ? (<h1>error...</h1>):
      (<><ClassHeader
        data={data?.classyou_classes}
        deleteClass={deleteClass}
      />
      <ClassCuricullum>
        <ModuleList
            data={data?.classyou_classes[0].modules}
        />
      </ClassCuricullum></>
      )}
      </div>
      </>
    );
};