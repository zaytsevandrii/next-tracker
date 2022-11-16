import styles from '../styles/Home.module.css'
import Button from './Button'
import Task from './Tasks'

const Header = ({title,changeVisible,visible}) => {
  return (
   <header className={styles.header}>
    <h1>{title}</h1>
    <Button text={`${visible?'Close':'Add'}`} color={`${visible?'red':'green'}`} changeVisible={changeVisible}/>
   </header>
  )
}

Header.defaultProps ={
    title:'Task Tracker'
}


export default Header