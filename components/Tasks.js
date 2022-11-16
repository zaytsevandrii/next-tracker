import MyTask from "./MyTask"
const Task = ({tasks,onDelete}) => {

  return (
    <>
        {tasks.map(task=>(
            <MyTask key={task.id} task={task} onDelete={onDelete}/>
        ))}
    </>
  )
}

export default Task