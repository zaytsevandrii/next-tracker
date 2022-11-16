import MyTask from "./MyTask"
const Task = ({tasks,onDelete,changeReminder}) => {

  return (
    <>
        {tasks.map(task=>(
            <MyTask key={task.id} task={task} changeReminder={changeReminder} onDelete={onDelete}/>
        ))}
    </>
  )
}

export default Task