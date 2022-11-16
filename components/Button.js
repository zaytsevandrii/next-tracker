import styles from '../styles/Home.module.css'

const Button = ({color,text,changeVisible}) => {
  return (
    <button onClick={changeVisible} style={{background:color}} className='btn'>{text}</button>

  )
}


Button.defaultProps = {
    color:'steelblue'
}

export default Button