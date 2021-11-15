import { Button, Input, Popover as MuiPopover } from "@material-ui/core";
import { useState } from "react";
import "./Popover.css";

function Popover({
  setAnchorEl,
  anchorEl,
  id,
  open,
  name,
  handleEditTask,
  handleEditRename,
}) {
  const [rename, setRename] = useState(name);

  const handleClose = () => {
    setAnchorEl(null);
    handleEditTask(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleEditRename(id, rename);
  };

  return (
    <div className="popover">
      <MuiPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <form onSubmit={handleSubmit} className="popover__container">
          {/* <h4>{name}</h4> */}
          <Input value={rename} onChange={(e) => setRename(e.target.value)} />

          <Button type="submit" variant="contained" color="secondary">
            edytuj
          </Button>
        </form>
      </MuiPopover>
    </div>
  );
}

export default Popover;
