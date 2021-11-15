import Todo from "./Todo";

function TodoList({
  todos,
  handleChecked,
  handleRemove,
  handleEditTask,
  handleEditRename,
}) {
  return (
    <div style={{ marginTop: 10 }}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          checked={todo.checked}
          handleChecked={handleChecked}
          handleRemove={handleRemove}
          handleEditTask={handleEditTask}
          handleEditRename={handleEditRename}
        />
      ))}
    </div>
  );
}

export default TodoList;
