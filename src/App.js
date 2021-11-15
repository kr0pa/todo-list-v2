import "./App.css";
import { Button, TextField } from "@material-ui/core";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [statusApp, setStatusApp] = useState(false);
  const [todo, setTodo] = useState({
    id: Date.now(),
    name: "",
    checked: false,
    edit: false,
  });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));

    if (storageTodos) {
      let arr = [];
      storageTodos.forEach((item) => {
        arr.push({ ...item, edit: false });
        setTodos(arr);
      });
    }
  }, []);

  useEffect(() => {
    if (todos) {
      localStorage.setItem("todos", JSON.stringify(todos));
      setStatusApp(false);

      todos.forEach((todo) => {
        if (todo.edit === true) {
          setStatusApp(true);
        }
      });
    }
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    async function f() {
      if (todo.name) {
        setTodo({
          id: Date.now(),
          name: todo.name,
          checked: false,
          edit: false,
        });
        setTodos([todo, ...todos]);
      }
    }

    f().then(
      setTodo({ id: Date.now(), name: "", checked: false, edit: false })
    );

    // if (todo.name) {
    //   setTodo({
    //     id: Date.now(),
    //     name: todo.name,
    //     checked: false,
    //     edit: false,
    //   });
    //   setTodos([todo, ...todos]);
    // }
  };

  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTask = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            edit: !todo.edit,
          };
        }
        return todo;
      })
    );
  };

  const handleEditRename = (id, rename) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            name: rename,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="app" style={{ opacity: statusApp ? ".3" : null }}>
      <div className="app__container">
        <div className="app__container-top">
          <form onSubmit={handleAddTodo}>
            <TextField
              value={todo.name}
              onChange={(e) => setTodo({ ...todo, name: e.target.value })}
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">
              dodaj
            </Button>
          </form>
        </div>

        <div>
          <TodoList
            todos={todos}
            handleChecked={handleChecked}
            handleRemove={handleRemove}
            handleEditTask={handleEditTask}
            handleEditRename={handleEditRename}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
