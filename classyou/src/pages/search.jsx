import Header from "../components/header";
import {
    useQuery,
    gql,
  } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import TeacherClassess from "../components/teacher_classess";

const QUERY_CLASSES_SEARCH = gql`
query MyQuery($_iregex: String = "") {
    classyou_classes(where: {title: {_iregex: $_iregex}}) {
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

export default function SearchPage(){
    const [searchParams] = useSearchParams()
    let params = searchParams.get("src")
    const { loading, error, data } = useQuery(QUERY_CLASSES_SEARCH,{variables:{_iregex: params},notifyOnNetworkStatusChange: true});
    
    const classes= {title:"Classess", teacher:false}
    return(
        <div>
            <Header
            search={params}
            />
            <div className="pt-16">
            <div className="flex justify-center border-b-2 border-black">
                <div className="font-spacemono text-2xl font-bold my-3">Search Results</div>
            </div>
        { (loading) ? 
                    (<div class="loader">Loading...</div>):
                 (error) ? (<h1>error...</h1>):
        (<TeacherClassess
            user={classes}
            data={data?.classyou_classes}
        />)}
        </div>
        </div>
    )
};