import './index.scss';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAddTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doc Appointment',
      day: 'Fev 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Doc Appointment',
      day: 'Fev 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Doc Appointment',
      day: 'Fev 5th at 2:30pm',
      reminder: true,
    },
  ]);
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const NewTask = { id, ...task };
    setTasks([...tasks, NewTask]);
  };
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle. Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
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
