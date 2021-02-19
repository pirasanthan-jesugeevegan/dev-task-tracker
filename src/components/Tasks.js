import Task from './Task';
const Tasks = ({ tasks }) => {
  return (
    <>
      <section class="task-content">
        <div class="task-nav-header">
          <h4 class="title">My tasks</h4>
        </div>
        <br></br>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </section>
    </>
  );
};

export default Tasks;
