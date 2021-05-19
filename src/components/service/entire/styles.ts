import { createStyles, makeStyles } from "@material-ui/core";

export const entireStyles = makeStyles(() =>
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
      color: "#ffffff",
    },
    tableWrapper: {
      "&>div": {
        backgroundColor: "#27293D",
        borderBottom: "1px solid #27293D",
        color: "#D6D6D6",
        "& span": {
          color: "#D6D6D6",
        },
        "& input": {
          color: "#D6D6D6",
        },
      },
      "& th": {
        backgroundColor: "#27293D",
        borderBottom: "1px solid #27293D",
        color: "#D6D6D6",
      },
      "& td": {
        borderBottom: "1px solid #27293D",
        color: "#D6D6D6",
        "& span": {
          color: "#D6D6D6",
        },
        "& svg": {
          color: "#D6D6D6",
        },
      },
    },
    vulnWrapper: { display: "flex", alignItems: "center" },
    high: {
      backgroundColor: "#c24a4e",
      borderRadius: "11px",
      padding: "2px 8px ",
      marginRight: "8px",
    },
    middle: {
      backgroundColor: "#ba8e27",
      borderRadius: "11px",
      padding: "2px 8px ",
      marginRight: "8px",
    },
    low: {
      backgroundColor: "#93960e",
      borderRadius: "11px",
      padding: "2px 8px ",
      marginRight: "8px",
    },
  })
);
