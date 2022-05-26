const TodoItem = ({ todo }: ITodoProps) => {
  return (
    <>
      <h1>task - {todo.task}</h1>
      <h1>id - {todo.id}</h1>
      <h1>{todo.completed}</h1>
    </>
  );
};

export default TodoItem;
