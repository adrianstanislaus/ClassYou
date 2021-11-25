import Cta_teacher from "./cta_teacher";

export default function ClassInfo(props){

    const { id, description, image, meeting_link, price, schedule, subject, title} = props.data

    return(
        <div className="grid md:grid-cols-2">
        <thumbnail className="border">
            <img className="h-48 w-full object-cover md:h-full" src={image}/>
        </thumbnail>
        <classdesc className="border p-14 font-mono">
            <subhead>
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
            <schedule className="block font-semibold mt-1">
            {schedule}
            </schedule>
            <description className="block font-extralight mt-5">
            <p>{description}</p>
            </description>
            <Cta_teacher/>
        </classdesc>
    </div>
    );
};