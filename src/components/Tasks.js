import Task from './Task';
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      <section className="task-content">
        <div className="task-nav-header">
          <h4 className="title">My tasks</h4>
        </div>
        <br></br>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={() => onToggle(task.id)}
          />
        ))}
      </section>
    </>
  );
};

export default Tasks;
