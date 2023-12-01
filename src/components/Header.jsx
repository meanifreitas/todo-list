import rocket from '../assets/rocket.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="" />
      <div className={styles.title}>
        <span className={styles.to}>to</span><span className={styles.do}>do</span>
      </div>
    </header>
  );
}