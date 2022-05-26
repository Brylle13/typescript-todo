import React, { ReactElement } from "react";
import { nanoid } from "nanoid";
// import TodoList from "./components/TodoList";
// import Form from "./components/Form";

interface ITaskDetailsDatas {
  id: string;
  taskName: string;
  completed: boolean;
}

interface ITaskDetails {
  taskDetails: ITaskDetailsDatas;
  setTaskDetails: React.Dispatch<React.SetStateAction<ITaskDetailsDatas>>;
  handleTaskSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

interface ITaskList {
  taskList: ITaskDetailsDatas[];
  setTaskList: React.Dispatch<React.SetStateAction<ITaskDetailsDatas[]>>;
  filterTask: (id: string) => void;
}

const TodoForm = ({
  taskDetails,
  setTaskDetails,
  handleTaskSubmit,
}: ITaskDetails) => {
  const { taskName } = taskDetails;
  return (
    <form onSubmit={handleTaskSubmit}>
      <input
        type="text"
        name="taskName"
        value={taskName}
        onChange={(evt) =>
          setTaskDetails({ ...taskDetails, taskName: evt.target.value })
        }
        placeholder="e.g. cook"
      />
    </form>
  );
};

const TaskList = ({ taskList, setTaskList, filterTask }: ITaskList) => {
  const mappedTaskList = taskList.map((task) => {
    const { id, taskName, completed } = task;
    return (
      <main key={id}>
        <code
          style={{ marginBottom: "10px ", fontSize: "10px", opacity: "0.9" }}
        >
          id: {id}
        </code>
        <br />
        <code style={{ fontSize: "10px" }}>{taskName}</code>
        <button
          onClick={() => filterTask(id)}
          style={{
            fontSize: "10px",
            margin: "0 0 0 6px",
            color: "white",
            border: "none",
            background: "#111",
            padding: "3px",
            cursor: "pointer",
          }}
        >
          delete
        </button>
      </main>
    );
  });
  return <main>{mappedTaskList}</main>;
};

const App = () => {
  const [taskList, setTaskList] = React.useState<ITaskList["taskList"]>([]);
  const [taskDetails, setTaskDetails] = React.useState<
    ITaskDetails["taskDetails"]
  >({
    id: "",
    taskName: "",
    completed: false,
  });

  const addTask = (newState: ITaskDetailsDatas) => {
    setTaskList((currentState) => [...currentState, newState]);
  };

  const handleTaskSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!taskDetails.taskName) return alert("please enter a value");
    if (taskList.map((task) => task.taskName).includes(taskDetails.taskName)) {
      alert("task exist");
      setTaskDetails({ ...taskDetails, taskName: "" });
      return;
    }
    addTask({ id: nanoid(), taskName: taskDetails.taskName, completed: false });
    setTaskDetails({ ...taskDetails, taskName: "" });
  };

  const filterTask = (id: string) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <main
      style={{
        // background: "#999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Todo List</h1>
      <TodoForm
        taskDetails={taskDetails}
        setTaskDetails={setTaskDetails}
        handleTaskSubmit={handleTaskSubmit}
      />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        filterTask={filterTask}
      />
    </main>
  );
};

export default App;

// const App = (): ReactElement => {
//   const [todoList, setTodoList] = React.useState<ITodoList[]>([]);
//   const [todo, setTodo] = React.useState<ITodo>({
//     task: "",
//     id: "",
//     completed: false,
//   });

//   const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
//     setTodo({ ...todo, task: evt.target.value });
//   };

//   const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
//     evt.preventDefault();
//     setTodo({ ...todo, task: "" });
//     if (todo.task !== "") {
//       return setTodoList([
//         ...todoList,
//         { id: nanoid(), task: todo.task, completed: false },
//       ]);
//     }
//   };

//   return (
//     <>
//       <Form
//         todo={todo}
//         setTodo={setTodo}
//         onChange={onChange}
//         onSubmit={onSubmit}
//       />
//       <TodoList todoList={todoList} setTodoList={setTodoList} />
//     </>
//   );
// };

// export default App;
