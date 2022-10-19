import React, { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import SamplePageWrapper from "../components/SamplePageWrapper/SamplePageWrapper";

const DropdownExample = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["test1", "test2", "test3"];
  return (
    <SamplePageWrapper title={"Dropdown"}>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        setOption={(option) => setSelectedOption(option)}
      />
    </SamplePageWrapper>
  );
};

export default DropdownExample;
