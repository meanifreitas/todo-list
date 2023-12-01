import Task from './Task';
import styles from './Tasks.module.css';

const Tasks = ({createdCount = 5, doneCount='2/5'}) => {
  return (
    <section className={styles.container}>
      <div className={styles.links}>
        <a href="#" className={styles.created}>Created tasks <span className={styles.createdCount}>{createdCount}</span></a>
        <a href="#" className={styles.done}>Done <span className={styles.doneCount}>{doneCount}</span></a>
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