import Task from './Task';
import styles from './Tasks.module.css';

const Tasks = ({tasks}) => {
  return (
    <section className={styles.container}>
      <div className={styles.links}>
        <a href="#">Created tasks</a>
        <a href="#">Done</a>
      </div>
      <div className={styles.tasks}>
        <Task />
        <Task />
        <Task />
      </div>
  </section>
  );
}

export default Tasks;