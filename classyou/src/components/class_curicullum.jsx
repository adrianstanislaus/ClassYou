export default function ClassCuricullum({children}) {
    return(
        <div className="border-2 border-black">
        <div className="container lg:w-3/5 mx-auto p-10">
        <div className="my-1">
        <h1 className="font-spacemono text-lg font-bold">Class Curicullum</h1>
        </div>
        <div>
        {children}
        </div>
        </div>
        </div>
    );
};