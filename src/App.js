import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react";
import AddTask from './components/AddTask'
function App() {
  
  const [showAddTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doc Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Doc Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    }
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
    <div className="container">
      <Header onAdd={() => setAddTask(!showAddTask)} showAdd={showAddTask} />

 {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Task To Show"
              )}
    </div>
  );
}

export default App;
