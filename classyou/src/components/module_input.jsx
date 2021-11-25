export default function ModuleInput() {
    return(
    <div>
        <div className="border">
            <p>Module Title</p>
            <input type="text" className="border" name="ModuleTitleInput"/>
        </div> 
        <div className="border">
            <p>Module Description</p>
            <input type="text" className="border" name="ModuleDescriptionInput"/>
        </div>
        <div>
            <button>Add Module</button>
        </div>     
    </div>
    )
};