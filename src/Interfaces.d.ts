interface ITodo {
  task: string;
  id: string;
  completed: boolean;
}

interface ITodoList {
  task: string;
  id: string | number;
  completed: boolean;
}

interface IFormProps {
  todo: {
    task: string;
    id: string | number;
    completed: boolean;
  };
  setTodo: React.Dispatch<
    React.SetStateAction<{
      task: string;
      id: string;
      completed: boolean;
    }>
  >;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

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
interface ITodoProps {
  todo: {
    task: string;
    id: string | number;
    completed: boolean;
  };
}
