export default function Cta_teacher(props){
    function meetClicked(){
        window.open(props.link, "_blank") //to open new page
     }
     console.log("[props.link]",props.link)
    return(
        <cta className="flex space-x-2 m-3 justify-end align-bottom">
                    <button onClick={() => meetClicked()} className="border p-2 text-white bg-blue-700">Join Meet</button>
                    <button className="border p-2  text-white bg-gray-700">Edit</button>
                    <button className="border p-2 text-white bg-red-700">Delete</button>
        </cta>
    );
};