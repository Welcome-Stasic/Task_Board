import TaskCard from './task-card.tsx'
import arrowImg from '../assets/Vector.svg'

function CompletedTasks() {
    return ( 
        <>
        <div className='board-content'>
                <div className="content-board">
                <div className="card-content">
                <div className='title-board'>
                    <span>Completed Tasks</span>
                </div>
                <TaskCard/>
                <TaskCard/>
                <TaskCard/>
                </div>
                <div className="btn-board-wrapper">
                        <a href="#">
                            <div className="btn-board">
                                <div className='text-btn'>
                                All running Tasks
                                <img src={arrowImg}/>
                                </div>
                            </div>
                        </a>
                     </div> 
            </div>
                
            </div>
        </>
    )
}
export default CompletedTasks
