import styles from '../styles/Home.module.css'

const Button = ({color,text}) => {
  return (
    <button style={{background:color}} className={styles.btn}>{text}</button>

  )
}


Button.defaultProps = {
    color:'steelblue'
}

export default Button