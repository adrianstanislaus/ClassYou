import Header from "../components/header";
import {
    useLazyQuery,
    gql,
  } from "@apollo/client";
import TeacherClassess from "../components/teacher_classess";
import { useEffect, useState } from "react";

const QUERY_CLASSES_SUBJECT = gql`
query MyQuery($subject: String_comparison_exp = {}) {
    classyou_classes(where: {subject: $subject}) {
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

export default function Explore(){
    const [queryClass, { loading, error, data }] = useLazyQuery(QUERY_CLASSES_SUBJECT,{notifyOnNetworkStatusChange: true});
    const [subject, setSubject] = useState("Science");
    const queryingClass = (params) => {
        queryClass({variables:{subject:{_eq: params}}})
    }

    useEffect(()=>{
        
    })

    const onChange = (e) => {
        setSubject(
          e.target.value,
        )
        
    }

    const handleSubmit = (e) => {
        const newData = subject
        queryingClass(newData)
        e.preventDefault();
    };


    const classes= {title:"Classess", teacher:false}
    return(
        <div>
            <Header/>
            <div className="pt-16">
            <div className="flex justify-center border-b-2 border-black">
                <div className="font-spacemono text-2xl font-bold my-3">EXPLORE</div>
            </div>
            <div className="flex justify-center m-1">
            <select className="border-b-4 px-2 border-2 border-black rounded-3xl bg-white font-semibold" onChange={onChange} id="subjects" name="subjects">
            <option value="Science">Science</option>
            <option value="Social">Social</option>
            <option value="Art">Art</option>
            <option value="Sports">Sports</option>
            </select>
            <button onClick={handleSubmit} type="submit" className="mx-2 hover:underline">apply</button>
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