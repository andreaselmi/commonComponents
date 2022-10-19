import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Typography from "../../components/Typography/Typography";

import styles from "./Home.module.scss";

const HomePage = () => {
  return (
    <Container>
      <div>
        <Typography variant={"h1"}>HOME PAGE (Could be better)</Typography>
        <div
          style={{
            width: 200,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>

        <div className={styles.link}>
          <Link to={"/carousel"}>
            <Typography variant={"h2"}>Test Carousel</Typography>
          </Link>
          <Link to={"/dropdown"}>
            <Typography variant={"h2"}>Test Dropdown</Typography>
          </Link>
          <Link to={"/accordion"}>
            <Typography variant={"h2"}>Test Accordion</Typography>
          </Link>
          <Link to={"/typography"}>
            <Typography variant={"h2"}>Test Typography</Typography>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
