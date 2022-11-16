import styles from '../styles/Home.module.css'
import { FaTimes } from 'react-icons/fa'


const MyTask = ({task,onDelete,changeReminder}) => {
   
  return (
    <div className={task.reminder?styles.taskReminder:styles.task} onDoubleClick={()=>changeReminder(task.id)} >
        <h3>{task.text}<FaTimes onClick={()=>onDelete(task.id)} style={{color:'red', cursor:'pointer'}}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default MyTask

