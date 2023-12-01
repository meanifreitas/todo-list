import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import styles from './App.module.css';

function App() {

  return (
    <>
    <header>
      <Header />
      <div className={styles.container}>
        <Input />
        <Button title="Create"/>
      </div>

    </header>
    </>
  )
}

export default App
