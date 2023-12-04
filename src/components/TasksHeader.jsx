import styles from './TasksHeader.module.css';

const TasksHeader = ({created, done}) => {
  return (
    <section className={styles.container}>
      <div className={styles.links}>
        <a href="#" className={styles.created}>Created tasks <span className={styles.createdCount}>{created}</span></a>
        <a href="#" className={styles.done}>Done <span className={styles.doneCount}>{done} of {created}</span></a>
      </div>
  </section>
  );
}

export default TasksHeader;