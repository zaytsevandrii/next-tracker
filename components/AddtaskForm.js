import { useState } from 'react'
import styles from '../styles/Home.module.css'

const AddtaskForm = ({addTask}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
    const onSubmitForm = (e)=>{
        e.preventDefault()
        if(!text){
            alert('Add the text')
        }
        addTask({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className={styles.addform} onSubmit={onSubmitForm}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder='Add task' value={text} onChange={e=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type="text" placeholder='Add Day&Time' value={day} onChange={e=>setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-chack'>
            <label>Task</label>
            <input type="checkbox" onChange={e=>setReminder(e.currentTarget.checked)}  checked={reminder}/>
        </div>
        <input className='btn btn-block' type="submit" value='Save text' />
    </form>
  )
}

export default AddtaskForm