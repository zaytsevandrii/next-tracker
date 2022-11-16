import styles from '../styles/Home.module.css'
import { FaTimes } from 'react-icons/fa'


const MyTask = ({task,onDelete}) => {
   
  return (
    <div className={styles.task}>
        <h3>{task.text}<FaTimes onClick={()=>onDelete(task.id)} style={{color:'red', cursor:'pointer'}}/></h3>
        <p>{task.text}</p>
    </div>
  )
}

export default MyTask

