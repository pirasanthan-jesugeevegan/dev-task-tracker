import Task from './Task';
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      <section className="task-content">
        <div className="task-nav-header">
          <h4 className="title">My tasks</h4>
        </div>
        <br></br>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={onDelete}
            onToggle={() => onToggle(task._id)}
          />
        ))}
      </section>
    </>
  );
};

export default Tasks;
