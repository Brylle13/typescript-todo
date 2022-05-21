import React from "react";
import { nanoid } from "nanoid";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

const App = () => {
  const [todo, setTodo] = React.useState<{
    task: string;
    id: string;
    completed: boolean;
  }>({
    task: "",
    id: "",
    completed: false,
  });
  const [todoList, setTodoList] = React.useState<
    { task: string; id: string | number; completed: boolean }[]
  >([]);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, task: evt.target.value });
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setTodo({ ...todo, task: "" });
    if (todo.task !== "") {
      return setTodoList([
        ...todoList,
        { id: nanoid(), task: todo.task, completed: false },
      ]);
    }
  };

  return (
    <>
      <Form
        todo={todo}
        setTodo={setTodo}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};

export default App;
