import { createStyles, makeStyles } from "@material-ui/core";

export const topbarStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      height: "56px",
      backgroundColor: "#27293D",
      width: "100%",
      display: "flex",
      marginBottom: "10px",
    },
    menuButton: {
      padding: "15px 15px 0px 15px",
      cursor: "pointer",
      "&>svg": {
        width: "26px",
        height: "26px",
        color: "#D6D6D6",
      },
    },
    userWrapper: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "13px",
    },
    mail: {
      "&>svg": {
        width: "26px",
        height: "26px",
        color: "#D6D6D6",
      },
    },
    userIcon: {
      color: "gray",
      margin: "0px 10px",
      "&>svg": {
        width: "36px",
        height: "36px",
        color: "#D6D6D6",
      },
    },
    userName: {
      display: "flex",
      color: "#D6D6D6",
    },
    nameText: {},
    dropDown: {},
    logout: {
      border: "1px solid #ffffff",
      padding: "4px 12px",
      color: "#ffffff",
      borderRadius: "12px",
      marginBottom: "4px",
      transition: "all ease-in 0.2s",
      "&:hover": {
        borderColor: "#ffffff",
        backgroundColor: "#ffffff",
        color: "black",
      },
    },
  })
);
