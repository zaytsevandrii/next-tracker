import { useState } from 'react'
import AddtaskForm from '../components/AddtaskForm'
import Header from '../components/Header'
import Task from '../components/Tasks'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [visible,setVisible] = useState(false)
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
        reminder:false
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
const changeReminder=(id)=>{
  setTasks(tasks.map(task=>
    task.id===id?{...task,reminder:!task.reminder}:task
  ))
}

const addTask=(task)=>{
  const id=Math.floor(Math.random() * 10000)
  const newTask={id,...task}
  console.log(newTask)
  setTasks([...tasks,newTask])
}
const changeVisible=()=>{
  setVisible(!visible)
}
  return (
    <div className={styles.container}>
      <Header visible={visible} title='Task Tracker' changeVisible={changeVisible}/>
      {visible&&
      <AddtaskForm addTask={addTask}/>}
      {tasks.length>0
      ?<Task tasks={tasks} onDelete={onDelete} changeReminder={changeReminder}/>
      :<h4>No tasks to show</h4>}
     
    </div>
  )
}
