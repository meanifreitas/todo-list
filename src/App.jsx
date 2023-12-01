import React from 'react';

import styles from './App.module.css';

import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Tasks from './components/Tasks';

function App() {
  const [text, setText] = React.useState(null);
  const [tasks, setTasks] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!text || text == '') {
      //erro
    } else {
      setTasks([...tasks, {
        checked: false,
        description: text
      }]);
    }
  }

  function handleChange({target}) {
    setText(target.value);
  }

  return (
    <>
    <header onSubmit={handleSubmit}>
      <Header />
      <form className={styles.container}>
        <Input onChange={handleChange}/>
        <Button title="Create"/>
      </form>
    </header>
    <Tasks tasks={tasks}/>
    </>
  );
}

export default App
