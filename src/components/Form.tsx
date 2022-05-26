const Form = ({ todo, onChange, onSubmit }: IFormProps) => {
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
