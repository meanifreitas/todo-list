import styles from './App.module.css';

import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Tasks from './components/Tasks';

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
    <Tasks />
    </>
  )
}

export default App
