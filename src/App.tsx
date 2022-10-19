import React, { useState } from "react";
import Typography from "./components/Typography/Typography";
import Container from "./components/Container/Container";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["test1", "test2", "test3"];
  return (
    <Container>
      <Typography variant={"h1"}>
        You sort of start thinking anything’s possible if you’ve got enough
        nerve.
      </Typography>

      <div style={{ marginTop: "50rem" }}>
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          setOption={(option) => setSelectedOption(option)}
        />
      </div>
    </Container>
  );
}

export default App;
