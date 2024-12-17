import React from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Typography from "./components/Typography/Typography";
import Heading from "./components/Heading/Heading";
import Tooltip from "./components/Tooltip/Tooltip";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Inter, sans-serif" }}>
      {/* Typography */}
      <div style={{ marginBottom: "20px" }}>
        <Typography textSize="sm">
          SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography textSize="md">
          MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography textSize="lg">
          LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>

      {/* Headings */}
      <div style={{ marginBottom: "20px" }}>
        <Heading level={1}>H1. Heading</Heading>
        <Heading level={2}>H2. Heading</Heading>
        <Heading level={3}>H3. Heading</Heading>
        <Heading level={4}>H4. Heading</Heading>
        <Heading level={5}>H5. Heading</Heading>
        <Heading level={6}>H6. Heading</Heading>
      </div>

      {/* Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Buttons</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg">lg, primary</Button>
          <Button variant="primary" size="md">md, primary</Button>
          <Button variant="primary" size="sm">sm, primary</Button>
          <Button variant="bordered" size="lg">lg, bordered</Button>
          <Button variant="bordered" size="md">md, bordered</Button>
          <Button variant="bordered" size="sm">sm, bordered</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </div>

      {/* Inputs */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Inputs</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <Input label="Name" placeholder="Ivan Ivanov" />
          <Input label="Name" placeholder="Focus" />
          <Input danger label="Name" placeholder="Danger" />
        </div>
      </div>

      {/* Tooltips */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Tooltips</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
          <Tooltip text="Tooltip Top" position="top">
            <Button variant="primary">Tooltip Top</Button>
          </Tooltip>
          <Tooltip text="Tooltip Left" position="left">
            <Button variant="primary">Tooltip Left</Button>
          </Tooltip>
          <Tooltip text="Tooltip Right" position="right">
            <Button variant="primary">Tooltip Right</Button>
          </Tooltip>
          <Tooltip text="Tooltip Bottom" position="bottom">
            <Button variant="primary">Tooltip Bottom</Button>
          </Tooltip>
        </div>
      </div>

      {/* Accordion */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Accordion</h3>
        <Accordion title="Accordion Example">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </Accordion>
      </div>
    </div>
  );
}

export default App;
