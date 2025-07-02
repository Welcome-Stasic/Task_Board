import markReadImg from '../assets/card/mark-read.png'
import infoImg from '../assets/card/info.png'
import editImg from '../assets/card/edit.png'
import deleteImg from '../assets/card/delete.png'


function TaskCard() {
    return ( 
        <>
        <div className="task-card">
            <div className="left-content">
                <span className="title-card">
                    Learn Javascript
                </span>
                <div className="date-card">
                    Start date: <span className="date">07-07-2023</span>
                </div>
                <div className="mark-card"><img src={markReadImg}/>Mark as completed</div>
            </div>
            <div className="rigth-content">
                <div className="btn-card">
                    <img src={infoImg}/>
                </div>
                <div className="btn-card">
                    <img src={editImg}/>
                </div>
                <div className="btn-card">
                    <img src={deleteImg}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default TaskCard
