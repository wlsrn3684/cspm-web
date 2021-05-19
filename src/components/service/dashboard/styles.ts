import { createStyles, makeStyles } from "@material-ui/core";

export const dashboardStyles = makeStyles(() =>
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
    content: {},
    contentHeader: {
      height: "30px",
      color: "#ffffff",
    },
    cardWrapper: {
      padding: "0px 10px",
    },
    card: {
      backgroundColor: "#27293D",
      height: "100%",
      padding: "20px",
      borderRadius: "8px",
    },
    row: {
      display: "flex",
      margin: "0px -10px",
      marginBottom: "20px",
    },
    width10: { width: "10%" },
    width20: { width: "20%" },
    width30: { width: "30%" },
    width35: { width: "35%" },
    width40: { width: "40%" },
    width50: { width: "50%" },
    width60: { width: "60%" },
    width65: { width: "65%" },
    width70: { width: "70%" },
    width80: { width: "80%" },
    width90: { width: "90%" },
    width100: { width: "100%" },
    button: { marginLeft: "12px" },
    scoreText: {
      textAlign: "center",
      color: "#ffffff",
      fontWeight: "bold",
      fontSize: "24px",
    },
    flex: {
      display: "flex",
      overflowX: "auto",
      marginTop: "30px",
      width: "1080px",
    },
  })
);

export const cardStyles = makeStyles(() =>
  createStyles({
    mainContainer: {},
    contentWrapper: {},
    header: {},
    content: {},
    footer: {},
    green: {},
    red: {},
    yellow: {},
    blue: {},
  })
);

export const donutStyle = makeStyles(() =>
  createStyles({
    mainContainer: {},
    contentWrapper: {
      paddingTop: "60px",
      display: "flex",
      justifyContent: "space-between",
    },
    header: {},
    title: {
      color: "lightgray",
      fontWeight: "bold",
      fontSize: "22px",
    },
    content: {},
    checkboxWrapper: {
      color: "#ffffff",
      marginTop: "-15px",
      width: "120px",
      "& svg": {
        width: "14px",
        height: "14px",
      },
      "&>div>label>span": {
        padding: "3px !important",
        fontSize: "12px !important",
      },
    },
  })
);

export const lineStyle = makeStyles(() =>
  createStyles({
    mainContainer: {},
    contentWrapper: {},
    header: {},
    title: {
      color: "lightgray",
      fontWeight: "bold",
      fontSize: "22px",
    },
    content: {},
  })
);

export const RankStyles = makeStyles(() =>
  createStyles({
    mainContainer: {},
    contentWrapper: {},
    header: {},
    title: {
      color: "lightgray",
      fontWeight: "bold",
      fontSize: "22px",
    },
    content: {},
  })
);

export const tableStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      width: "100%",
    },
    contentWrapper: {
      paddingTop: "30px",
      width: "100%",
      height: "100%",
      fontWeight: "normal",
      overflow: "auto",
    },
    header: {},
    title: {
      color: "lightgray",
      fontWeight: "bold",
      fontSize: "22px",
    },
    content: {},
    table: {
      width: "100%",
      fontWeight: "normal",
      fontSize: "14px",
      color: "lightgray",
      textAlign: "center",
    },
    tr: {
      "&>th": {
        height: "56px",
        fontWeight: "bolder",
        borderBottom: "solid 1px #6b7282 !important",
      },
    },
    tbody: {
      width: "100%",
    },
    row: {
      width: "100%",
      cursor: "pointer",
      "&>td": {
        borderBottom: "solid 1px #6b7282 !important",
        height: "48px",
      },
      "&:hover": {},
    },
    vulnWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
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

export const groupedBarStyles = makeStyles(() =>
  createStyles({
    mainContainer: {},
    contentWrapper: {},
    header: {},
    title: {
      color: "lightgray",
      fontWeight: "bold",
      fontSize: "22px",
    },
    content: {},
  })
);

export const radarStyles = makeStyles(() =>
  createStyles({
    mainContainer: {},
    contentWrapper: {},
    header: {},
    title: {
      color: "lightgray",
      fontWeight: "bold",
      fontSize: "22px",
    },
    content: {},
    main: {},
    graph: {},
    service: {
      textAlign: "center",
      color: "#EDEDED",
      fontWeight: "bold",
      marginBottom: "22px",
    },
  })
);
