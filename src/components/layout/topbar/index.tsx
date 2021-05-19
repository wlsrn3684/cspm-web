import React from "react";
import { topbarStyles } from "./styles";
import { Menu, AccountCircle, ArrowDropDown } from "@material-ui/icons";
import useChangeToggle from "../../../hooks/useChangeToggle";

export default function Topbar(): JSX.Element {
  const classes = topbarStyles();
  const changeToggle = useChangeToggle();

  return (
    <div className={classes.mainContainer}>
      <div
        className={classes.menuButton}
        onClick={() => {
          changeToggle();
        }}
      >
        <Menu />
      </div>
      <div className={classes.userWrapper}>
        <div className={classes.mail}>
          <button
            className={classes.logout}
            onClick={() => {
              document.cookie =
                "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
              localStorage.removeItem("systemId");
              window.location.href = "/";
            }}
          >
            LOGOUT
          </button>
        </div>
        <div className={classes.userIcon}>
          <AccountCircle />
        </div>
        <div className={classes.userName}>
          <div className={classes.nameText}>
            {localStorage.getItem("systemId")}
          </div>
          <div className={classes.dropDown}>
            <ArrowDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}
