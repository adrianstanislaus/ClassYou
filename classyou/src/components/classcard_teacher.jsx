import Cta_teacher from "./cta_teacher";
import { Link } from "react-router-dom";

export default function ClassCardTeacher(props){

    const { id, description, image, price, schedule, subject, title} = props.data
    const linkuser = "/class/"+id
    const linkadmin = "/admin/class/"+id
    return(
        <li class="max-w-sm mx-auto bg-white border-2 border-black shadow-md overflow-hidden md:max-w-3xl lg:w-full my-3">
            <div class="md:flex lg:block lg:flex-none">
                <div class="md:flex-shrink-0 lg:flex-grow-0 border-b-2 border-black">
                <img class="h-48 w-full object-cover md:h-full md:w-48 lg:h-48 lg:w-full" src={image} alt="title image"/>
                </div>
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{subject}</div>
                {props.user.teacher? <Link to={linkadmin} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</Link>:
                <Link to={linkuser} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</Link>}
                <p class="mt-2 text-black">Every {schedule}</p>
                {(!props.user.teacher) && <p class="mt-2 text-gray-500">{price}</p>}
                <p class="mt-2 text-gray-500">Students: 30</p>
                </div>
                <div>
                {props.user.teacher && <Cta_teacher
                    link={props.data?.meeting_link}
                    id={props.data?.id}
                    deleteClass={props.deleteClass}
                />}
                </div>
            </div>
        </li>
    );
};