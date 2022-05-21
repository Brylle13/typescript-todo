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

const Form = ({ todo, setTodo, onChange, onSubmit }: IFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={todo.task}
        onChange={onChange}
        placeholder="e.g. buy eggs"
      />
      <button>add +</button>
    </form>
  );
};

export default Form;
