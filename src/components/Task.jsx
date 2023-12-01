import React from 'react';
import { Trash, Circle, CheckCircle } from '@phosphor-icons/react';
import styles from './Task.module.css';

const Task = ({checked, description}) => {
  const [done, setDone] = React.useState(checked);

  function handleCheckTask() {
    setDone(!done);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleCheckTask} className={styles.checkbox}>{done ? <CheckCircle size={17.5} /> : <Circle size={17.5}/> }</button>
      <div className={styles.content}>
        <p>{description}</p>
      </div>
      <button className={styles.remove}><Trash /></button>
    </div>
  );
}

export default Task;