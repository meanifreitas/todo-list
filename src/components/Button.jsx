import styles from './Button.module.css';
import plus from '../assets/plus.svg';

export default function Button({title}) {
  return (
    <button className={styles.button}>
      {title}
      <span><img src={plus} /></span>
    </button>
  );
}