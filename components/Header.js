import styles from '../styles/Home.module.css'
import Button from './Button'
import Task from './Tasks'

const Header = ({title}) => {
  return (
   <header className={styles.header}>
    <h1>{title}</h1>
    <Button text='Add' color='green'/>
   </header>
  )
}

Header.defaultProps ={
    title:'Task Tracker'
}


export default Header