import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [mytasks, setTasks] = useState([]);
  /* {
      id: 1,
      text: "Meeting",
      day: "Feb 5th at 2:10pm",
      reminder: true,
    },
    {
      id: 2,
      text: "none",
      day: "Feb 5th at 2:20pm",
       reminder: true      
    },
  ]);*/
  //AddTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...mytasks, newTask]);
  };
  //delete task
  const deleteTask = (id) => {
    setTasks(mytasks.filter((task) => task.id !== id));
  };
  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      mytasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {mytasks.length > 0 ? (
        <Tasks
          mytasks={mytasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "No Task to Show"
      )}
    </div>
  );
};

export default App;
