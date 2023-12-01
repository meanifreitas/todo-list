import { Trash, Circle, CheckCircle } from '@phosphor-icons/react';
import styles from './Task.module.css';

const Task = ({done, description}) => {
  return (
    <div className={styles.container}>
      <button className={styles.checkbox}>{done ? <CheckCircle size={17.5} /> : <Circle size={17.5}/> }</button>
      <div className={styles.content}>
        <p>{description}</p>
      </div>
      <button className={styles.remove}><Trash /></button>
    </div>
  )
}

export default Task;