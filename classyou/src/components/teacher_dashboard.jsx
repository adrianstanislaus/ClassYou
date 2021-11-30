import UserLogout from "./userLogout";

export default function TeacherDasboardTitle(){
    return(
        <div className="border-t-2 border-b-1 border-black flex subpixel-antialiased">
            <h2 className="uppercase font-spacemono font-semibold border-b-2 border-black text-3xl flex-grow p-2">Teacher's Dashboard</h2>
            <div className="flex border-2 border-r-0 border-black bg-green-500 px-2 py-3 sm:py-1">
                <div className="font-roboto font-medium text-white pt-2">Adrian Stanislaus</div>
                <UserLogout/>
            </div>
        </div>
    );
}