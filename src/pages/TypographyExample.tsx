import React from "react";
import Typography from "../components/Typography/Typography";
import SamplePageWrapper from "../components/SamplePageWrapper/SamplePageWrapper";

const TypographyExample = () => {
  return (
    <SamplePageWrapper title={"Typography"}>
      <Typography variant={"h1"}>I&apos;m H1 Text</Typography>
      <Typography variant={"h2"}>I&apos;m H2 Text</Typography>
      <Typography variant={"h3"}>I&apos;m H3 Text</Typography>
      <Typography variant={"h4"}>I&apos;m H4 Text</Typography>
      <Typography variant={"p"}>I&apos;m p Text</Typography>
      <Typography variant={"span"}>I&apos;m span Text</Typography>
    </SamplePageWrapper>
  );
};

export default TypographyExample;
