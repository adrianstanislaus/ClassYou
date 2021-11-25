export default function TeacherClassess({children}){
    return(
        <div>
            <h3>Classess You Teach</h3>
            <ul>
              {children}
            </ul>
        </div>
    );
};