import React from "react";
import { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
const style = {
  position: "absolute",
  width: 400,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #ff0000",
  borderRadious: "2px",
  p: 2,
  boxShading: 24,
};
function MuiNestedModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <div>MuiModal</div>
      <Box>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Show Nested Child Modal
        </Button>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ ...style, width: 200 }}>
          <Typography variant="h5">Nested Child Modal Heading</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis sapiente sed sunt aspernatur ipsa ullam! Quam ipsum,
            dolor, eligendi dignissimos sapiente harum, a atque aspernatur modi
            fugit aperiam voluptatibus.
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}

function MuiParentModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <div>MuiModal</div>
      <Box>
        <Typography variant="h5" color="secondary" align="center">
          MUI Modal with Nested Modal Example
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Show Modal
        </Button>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h5">Modal Heading</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis sapiente sed sunt aspernatur ipsa ullam! Quam ipsum,
            dolor, eligendi dignissimos sapiente harum, a atque aspernatur modi
            fugit aperiam voluptatibus.
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <MuiNestedModal />
        </Box>
      </Modal>
    </>
  );
}

export default MuiParentModal;
