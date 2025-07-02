import AddTaskImg from '../assets/Vector (1).svg'

import CompletedTasks from './completed-tasks.jsx'
import RuningTasks from './running-tasks.jsx'

function TaskBoard() {
    return ( 
        <>
        <div className='tasks-board_wrapper'>
          <div className="task-board">
            <RuningTasks/>
            <div className='vertical-line'>
            </div>
            <CompletedTasks/>
          </div>
            <div className='add-btn_content'>
                <img src={AddTaskImg}/>
          </div>
        </div>
        </>
    )
}
export default TaskBoard
