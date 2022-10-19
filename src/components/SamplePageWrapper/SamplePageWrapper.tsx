import React, { ReactNode } from "react";
import Typography from "../Typography/Typography";
import Container from "../Container/Container";

interface SamplePageWrapperProps {
  title: string;
  children: ReactNode;
}

const SamplePageWrapper = ({ children, title }: SamplePageWrapperProps) => {
  return (
    <Container>
      <Typography variant={"h1"}>{title}</Typography>

      <main>{children}</main>
    </Container>
  );
};

export default SamplePageWrapper;
