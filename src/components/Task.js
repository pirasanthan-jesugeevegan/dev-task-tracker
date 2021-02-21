import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { GiAlarmClock } from 'react-icons/gi';
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClick={() => onToggle(task._id)}>
      <div className="tasks">
        <div className="task">
          <div className="task-icon to-do">
            <svg width="50%" height="50%" viewBox="0 0 24 24">
              <path d="M7,8V6H5V19H19V6H17V8H7M9,4A3,3 0 0,1 12,1A3,3 0 0,1 15,4H19A2,2 0 0,1 21,6V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V6A2,2 0 0,1 5,4H9M12,3A1,1 0 0,0 11,4A1,1 0 0,0 12,5A1,1 0 0,0 13,4A1,1 0 0,0 12,3Z" />{' '}
            </svg>
          </div>
          <div className="task-info">
            <p className="task-title">{task.name}</p>
            <div className="task-status">
              <span className="task-queue">{task.dt}</span>
              {/* <span className="task-progress">{task.id}</span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="icons">
        {task.reminder ? <GiAlarmClock style={{ color: '#e46472' }} /> : ''}

        <MdDeleteForever
          style={{ color: '#e46472' }}
          onClick={() => onDelete(task._id)}
        />
      </div>
    </div>
  );
};

export default Task;
