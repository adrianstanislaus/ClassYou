import Cta_teacher from "./cta_teacher";
import { Link } from "react-router-dom";

export default function ClassCardTeacher(props){

    const { id, description, image, price, schedule, subject, title} = props.data
    const link = "/admin/class/"+id
    return(
        <li class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-3">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:h-full md:w-48" src={image} alt="title image"/>
                </div>
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{subject}</div>
                <Link to={link} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</Link>
                <p class="mt-2 text-black">{schedule}</p>
                <p class="mt-2 text-gray-500">Students: 30</p>
                </div>
                <div>
                <Cta_teacher
                    link={props.data?.meeting_link}
                    id={props.data?.id}
                    deleteClass={props.deleteClass}
                />
                </div>
            </div>
        </li>
    );
};