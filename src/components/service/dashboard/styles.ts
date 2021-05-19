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
    title: {
      color: "lightgray",
      fontWeight: "bold",
      fontSize: "22px",
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
      height: "calc(75% - 60px)",
      overflow: "auto",
      zIndex: 9999,
      opacity: 1,
      top: "0",
      left: "0",
      margin: "7.5% 35%",
      padding: "30px",
    },
    wideWidth: {
      width: "calc(45% - 60px) !important",
      height: "calc(80% - 60px) !important",
      margin: "7.5% 27.25% !important",
    },
    modalHead: {
      height: "8%",
      color: "#EDEDED",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    modalBody: {
      height: "75%",
      color: "#ffffff",
      whiteSpace: "pre",
    },
    modalFooter: {
      display: "flex",
      alignItems: "flex-end",
      float: "right",
      height: "15%",
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
    rawData: {},
    cli: {
      marginBottom: "24px",
    },
    summary: { marginBottom: "24px" },
    dataWrapper: {},
    dataTitle: {
      fontWeight: "bold",
      fontSize: "18px",
      marginBottom: "10px",
    },
    dataContent: {},
    cliDetail: {
      marginBottom: "6px",
      display: "flex",
      alignItems: "center",
      "&>svg": {
        marginLeft: "8px",
        marginTop: "4px",
        width: "18px",
        height: "18px",
        cursor: "pointer",
        color: "gray",
        "&:hover": {
          color: "lightgray",
        },
      },
    },
    summaryDetail: { marginBottom: "6px" },
    json: {
      background: "#222436",
      padding: "30px",
    },
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
