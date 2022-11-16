import { useState } from 'react'
import Header from '../components/Header'
import Task from '../components/Tasks'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Learn Headles CMS',
        day:'Nov 16th at 8:00am',
        reminder:true
    },
    {
        id:2,
        text:'Learn Google Analytics',
        day:'Nov 16th at 10:00am',
        reminder:true
    },
    {
        id:3,
        text:'Prepare for job interview',
        day:'Nov 16th at 12:00pm',
        reminder:true
    },
])

const onDelete=(num)=>{
  setTasks(tasks.filter(task=>task.id!==num))
}
  return (
    <div className={styles.container}>
      <Header title='Task Tracker'/>
      <Task tasks={tasks} onDelete={onDelete}/>
    </div>
  )
}
