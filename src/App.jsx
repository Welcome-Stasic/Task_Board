import { use, useEffect, useRef, useState } from 'react'
import Header from './components/header.jsx'
import Sidebar from './components/sidebar.jsx'
import RuningTasks from './components/running-tasks.jsx'
import TaskBoard from './components/task-board.jsx'
import './index.css'


function App() {

  return (
    <>
    <Header/>
    <main>
      <Sidebar/>
      <div className="container main">
        <TaskBoard/>
      </div>
    </main>
    </>
  )

}

export default App
