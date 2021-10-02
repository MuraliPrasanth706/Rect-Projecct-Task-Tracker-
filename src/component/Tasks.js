import Task from "./Task";
const Tasks = ({ mytasks, onDelete, onToggle }) => {
  return (
    <>
      {mytasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
