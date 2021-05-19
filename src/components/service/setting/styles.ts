import { createStyles, makeStyles } from "@material-ui/core";

export const settingStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      padding: "20px",
    },
    header: {
      height: "46px",
      paddingBottom: "16px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #353a53",
    },
    headerText: {
      color: "#FFFFFF",
      fontSize: "24px",
      fontWeight: "bold",
    },
    headerButton: {
      marginLeft: "12px",
    },
    content: {},
    contentHeader: {
      height: "30px",
      color: "lightgray",
      display: "flex",
    },
    section: {
      backgroundColor: "#27293D",
      width: "30%",
      height: "500px",
      padding: "30px",
      marginRight: "30px",
    },
    sectionHeader: {
      fontWeight: "bold",
      fontSize: "18px",
      paddingBottom: "40px",
    },
    sectionContent: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    inputWrapper: {
      marginBottom: "20px",
      "&>div": {
        width: "100%",
      },
    },
    buttonWrapper: {
      width: "100%",
      height: "150px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    checkbox: {
      height: "76px",
    },
  })
);
