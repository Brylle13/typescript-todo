import TodoItem from "./TodoItem";

interface ITodoListProps {
  todoList: {
    task: string;
    id: string | number;
    completed: boolean;
  }[];
  setTodoList: React.Dispatch<
    React.SetStateAction<
      { task: string; id: string | number; completed: boolean }[]
    >
  >;
}

const TodoList = ({ todoList, setTodoList }: ITodoListProps) => {
  return (
    <>
      {todoList.map((todo, idx) => {
        return <TodoItem key={idx} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;
