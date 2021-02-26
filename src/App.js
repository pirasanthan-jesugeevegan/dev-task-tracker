import './index.scss';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAddTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/task');
    const data = await res.json();

    return data.tasks;
  };
  // Fetch Task
  const fetchTask = async (_id) => {
    const res = await fetch(`http://localhost:5000/task/${_id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/task', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks((tasks) => [...tasks, data.createdTask]);
    setAddTask(false);
  };

  // Delete Task
  const deleteTask = async (_id) => {
    const res = await fetch(`http://localhost:5000/task/${_id}`, {
      method: 'DELETE',
    });
    //We should control the response status to dec_ide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task._id !== _id))
      : alert('Error Deleting This Task');
  };

  /// Toggle Reminder
  const toggleReminder = async (_id) => {
    const response = await fetchTask(_id);
    const taskToToggle = response.task;

    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    await fetch(`http://localhost:5000/task/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    });

    setTasks(
      tasks.map((task) =>
        task._id === _id ? { ...task, reminder: updTask.reminder } : task
      )
    );
  };
  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setAddTask(!showAddTask)} showAdd={showAddTask} />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                <h4 className="title" style={{ padding: '3rem' }}>
                  No Task To Show
                </h4>
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
