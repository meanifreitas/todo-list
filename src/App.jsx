import React from 'react';

import styles from './App.module.css';

import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import TasksHeader from './components/TasksHeader';

import { Trash, Circle, CheckCircle } from '@phosphor-icons/react';

function App() {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const [createdTasks, setCreatedTasks] = React.useState(0);
  const [doneTasks, setDoneTasks] = React.useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    if (!text || text.trim() == '') {
      setText('');
      return;
    } else {
      setTasks([...tasks, {
        checked: false,
        description: text
      }]);
      setCreatedTasks(createdTasks + 1);
      setText('');
    }
  }

  function handleChange({target}) {
    setText(target.value);
  }

  function handleCheckTask(currentTask) {
    let checked = currentTask.checked;
    setTasks(tasks => tasks.map(task => task === currentTask ? {...task, checked: !checked} : task));

    if (checked) setDoneTasks(doneTasks - 1);
    else setDoneTasks(doneTasks + 1);
  }

  function handleDeleteTask(currentTask) {
    let newTasks = tasks.filter(task => task !== currentTask);
    setTasks(newTasks);
    setCreatedTasks(createdTasks - 1);
    if (currentTask.checked) setDoneTasks(doneTasks - 1);
  }

  return (
    <>
    <header onSubmit={handleSubmit}>
      <Header />
      <form className={styles.form}>
        <Input value={text} onChange={handleChange}/>
        <Button title="Create"/>
      </form>
    </header>
    <TasksHeader created={createdTasks} done={doneTasks}/>
    {tasks.map(task => {
      return <div key={task.description} className={styles.taskContainer}>
        <div className={styles.task}>
          <button onClick={() => handleCheckTask(task)} className={styles.checkbox}>{task.checked ? <CheckCircle size={17.5} /> : <Circle size={17.5}/> }</button>
          <div className={styles.content}>
            <p>{task.description}</p>
          </div>
          <button onClick={() => handleDeleteTask(task)} className={styles.remove}><Trash /></button>
        </div>
      </div>
    })}
    </>
  );
}

export default App;
