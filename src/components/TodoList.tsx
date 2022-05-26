import TodoItem from "./TodoItem";

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
