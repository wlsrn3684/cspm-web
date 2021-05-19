import { createStyles, makeStyles } from "@material-ui/core";
import { transform } from "typescript";

export const cloudStyles = makeStyles(() =>
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
    cardWrapper: {
      padding: "20px 30px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "3vh 1.5vw",
      margin: "0px -20px",
    },
    add: {
      border: "3px solid #1f2e3d",
      height: "25vh",
      borderRadius: "8px",
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&>svg": {
        width: "75px",
        height: "75px",
        color: "gray",
      },
    },
    overlay: {
      position: "fixed",
      backgroundColor: "black",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      zIndex: 999,
      opacity: 0.5,
    },
    visibility: {
      visibility: "hidden",
    },
  })
);

export const cardStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      border: "3px solid #1f2e3d",
      height: "25vh",
      borderRadius: "8px",
      padding: "15px",
      cursor: "pointer",
    },
    provider: {
      height: "50%",
      margin: "6% 0px",
    },
    name: {
      color: "#565775",
      textAlign: "center",
    },
    settingLogo: {
      position: "relative",
      top: "10px",
      right: "15px",
      float: "right",
      cursor: "pointer",
      zIndex: 999,
      "&>svg": {
        color: "gray",
      },
    },
  })
);

export const modalStyles = makeStyles(() =>
  createStyles({
    mainContainer: {},
    visibility: {
      visibility: "hidden",
    },
    modalWrapper: {
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modal: {
      position: "fixed",
      backgroundColor: "#27293D",
      width: "calc(30% - 60px)",
      height: "calc(70% - 60px)",
      zIndex: 9999,
      opacity: 1,
      top: "0",
      left: "0",
      margin: "8.725% 35%",
      padding: "30px",
    },
    modalHead: {
      height: "10%",
      color: "#EDEDED",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    modalBody: {
      height: "75%",
    },
    modalFooter: {
      display: "flex",
      alignItems: "flex-end",
      float: "right",
      height: "10%",
      "&>button": {
        marginLeft: "0.4vw",
      },
    },
    inputWrapper: {
      marginBottom: "16px",
      "&>div": {
        width: "100%",
      },
    },
    input: {},
    button: {
      width: "4.5vw",
      height: "3.43vh",
      padding: "0.56vh 1.15vw",
      fontSize: "0.9rem",
    },
    formControl: {
      marginTop: "2px",
      "& svg": {
        color: "rgb(170, 170, 170)",
      },
    },
  })
);

export const detailStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      padding: "20px",
      height: "fit-content",
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
      height: "26px",
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
    table: {
      width: "100%",
      textAlign: "center",
      padding: "15px",
    },
    thead: {},
    tbody: {},
    tr: {
      height: "30px",
    },
    th: {},
    td: {},
    innerTable: {
      backgroundColor: "#212236",
      "& th": {
        backgroundColor: "#212236 !important",
        borderBottom: "1px solid #212236 !important",
      },
      "& td": {
        borderBottom: "1px solid #212236 !important",
      },
    },
    tableHeader: {
      display: "flex",
      alignItems: "center",
      height: "26px",
    },
    tableHeaderText: {},
    loadingIcon: {
      marginLeft: "8px",
    },
  })
);
