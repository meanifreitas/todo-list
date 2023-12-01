import styles from './Input.module.css';

export default function Input({value, onChange}) {
  return (
    <input type="text" value={value} onChange={onChange} className={styles.input} placeholder="Add a new task"/>
  );
}