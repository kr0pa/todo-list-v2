import { Checkbox, IconButton } from "@material-ui/core";
import "./Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Popover from "./Popover";
import { useState } from "react";

function Todo({
  id,
  name,
  checked,
  handleChecked,
  handleRemove,
  handleEditTask,
  handleEditRename,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    handleEditTask(id);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="todo">
      <h3
        onClick={handleClick}
        style={{ textDecoration: checked ? "line-through" : null }}
      >
        {name}
      </h3>

      {open ? (
        <Popover
          id={id}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
          open={open}
          name={name}
          handleEditTask={handleEditTask}
          handleEditRename={handleEditRename}
        />
      ) : null}

      <div className="todo__buttons">
        <Checkbox
          checked={checked || false}
          onChange={() => handleChecked(id)}
        />
        <IconButton
          onClick={() => handleRemove(id)}
          style={{ height: 42, width: 42 }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Todo;
