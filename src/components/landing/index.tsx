import { DonutLarge } from "@material-ui/icons";
import React from "react";
import { landingStyles } from "./styles";
import { useHistory } from "react-router-dom";

export default function Landing() {
  const classes = landingStyles();
  const history = useHistory();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.headerLogo}>
          <DonutLarge />
          <span>DDDG</span>
        </div>
        <div
          className={classes.login}
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          LOGIN
        </div>
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.overlay} />
        <div className={classes.overlayShadow} />
        <div className={classes.content}>
          <div className={classes.main}>
            <h3 className={classes.title}>안녕하세요 팀 DDDG입니다</h3>
            <h1 className={classes.description}>
              클라우드 보안을 위한
              <br />
              CSPM 보안 솔루션
              <br />
              서비스 페이지 입니다.
            </h1>
            <div className={classes.buttonLayout}>
              <a href="/service" className={classes.homeButton}>
                Start a Project
              </a>
              <a href="" className={classes.homeButton}>
                More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
