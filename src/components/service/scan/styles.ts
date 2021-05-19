import { createStyles, makeStyles } from "@material-ui/core";

export const scanStyles = makeStyles(() =>
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
    status: {
      display: "flex",
      lineHeight: "100%",
      alignItems: "center",
    },
    circle: {
      width: "12px",
      height: "12px",
      borderRadius: "6px",
      marginRight: "6px",
    },
    complete: {
      backgroundColor: "green",
    },
    processing: {
      backgroundColor: "gray",
    },
    waiting: {
      backgroundColor: "black",
    },
    error: {
      backgroundColor: "red",
    },
    buttonLayout: {
      width: "14vw",
      display: "flex",
      "&>button": {
        marginRight: "12px",
      },
    },
    button: {},
    disabled: {
      backgroundColor: "gray !important",
    },
    overlay: {
      position: "fixed",
      backgroundColor: "black !important",
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
    title: {
      display: "flex",
      marginLeft: "-10px",
      position: "absolute",
      top: "15px",
    },
  })
);

export const detailStyles = makeStyles(() =>
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
    overlay: {
      position: "fixed",
      backgroundColor: "black !important",
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
      zIndex: 999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modal: {
      position: "fixed",
      backgroundColor: "#27293D",
      width: "calc(30% - 60px)",
      height: "calc(65% - 60px)",
      zIndex: 999,
      opacity: 1,
      top: "0",
      left: "0",
      margin: "8.725% 35%",
      padding: "30px",
    },
    smallModal: {
      position: "fixed",
      backgroundColor: "#27293D",
      width: "calc(30% - 60px)",
      height: "calc(40% - 60px)",
      zIndex: 999,
      opacity: 1,
      top: "0",
      left: "0",
      margin: "16.225% 35%",
      padding: "30px",
    },
    modalHead: { height: "15%" },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#EDEDED",
    },
    modalBody: {
      height: "70%",
      color: "white",
    },
    modalFooter: {
      float: "right",
      height: "15%",
      paddingTop: "calc(15% - 3.43vh)",
      "&>button": {
        marginLeft: "0.4vw",
      },
    },
    smallFooter: {
      float: "right",
      height: "15%",
      paddingTop: "15px",
      "&>button": {
        marginLeft: "0.4vw",
      },
    },
    button: {
      width: "4.5vw",
      height: "3.43vh",
      padding: "0.56vh 1.15vw",
      fontSize: "0.9rem",
    },
    inputWrapper: {
      marginTop: "16px",
      "&>div": {
        width: "100%",
      },
    },
    formControl: {
      marginTop: "2px",
      "& svg": {
        color: "rgb(170, 170, 170)",
      },
    },
  })
);
