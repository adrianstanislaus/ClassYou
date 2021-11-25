export default function ClassInfo(){
    return(
        <form>
            <div>
            <p>Class Title</p>
            <input type="text" className="border" placeholder="Class Title" name="ClassTitle" />
            </div>
            <div>
            <p>Description</p>
            <input type="text" className="border" placeholder="Description" name="Description" />
            </div>
            <div>
            <p>Class price</p>
            <input type="text" className="border" placeholder="Class Price" name="ClassPrice" />
            </div>
            <div>
            <p>Title Image</p>
            <input type="text" className="border" placeholder="Title Image" name="TitleImage" />
            </div>
            <div>
            <p>Class Meeting-Link</p>
            <input type="text" className="border" placeholder="Class Title" name="ClassLink" />
            </div>
            <div>
            <p>Class Schedule</p>
            <input type="text" className="border" placeholder="Class Title" name="ClassSchedule" />
            </div>
            <div>
            <p>Class Subject</p>
            <input type="text" className="border" placeholder="Class Title" name="ClassSubject" />
            </div>
        </form>
    );
};