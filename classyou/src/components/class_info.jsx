import ActionTeacher from "./cta_teacher";

export default function ClassInfo(props){

    const { description, image, price, schedule, subject, title} = props.data

    return(
        <div className="grid md:grid-cols-2">
        <thumbnail className="border-2 border-black">
            <img className="h-48 w-full object-cover md:h-full" src={image} alt=""/>
        </thumbnail>
        <classdesc className="border-2 border-black p-14">
            <subhead className="uppercase text-purple-600 font-semibold">
            {subject}
            </subhead>
            <headtitle className="block font-bold text-2xl mt-1">
             {title}
            </headtitle>
            <subtitle className="block text-sm mt-1">
            Instructor: Chef Owo
            </subtitle>
            <ratings className="block mt-1">
            4.7/5
            </ratings>
            {(!props.deleteClass) && <div>{price}</div>}
            <schedule className="block font-semibold mt-1">
            Every {schedule}
            </schedule>
            <description className="block font-extralight mt-5">
            <p>{description}</p>
            </description>
            {props.deleteClass &&
            <ActionTeacher
                link={props.data?.meeting_link}
                id={props.data?.id}
                deleteClass={props.deleteClass}
            />}
        </classdesc>
    </div>
    );
};