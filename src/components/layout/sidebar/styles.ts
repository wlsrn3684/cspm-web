import { createStyles, makeStyles } from "@material-ui/core";

export const sidebarStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      width: "260px",
      height: "100%",
      backgroundColor: "#27293D",
      position: "fixed",
      "@media screen and (max-width: 820px)": {
        display: "none",
      },
    },
    siteTitle: {
      width: "100%",
      height: "55px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    siteIcon: {
      color: "#FFFFFF",
      height: "30px",
      cursor: "pointer",
      "&>svg": {
        width: "30px",
        height: "30px",
      },
    },
    siteName: {
      color: "#FFFFFF",
      fontSize: "24px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    contentWrapper: {
      padding: "12px 0px",
    },
    toggle: {
      display: "block",
      width: "70px",
      "& svg": {
        width: "40px",
        height: "40px",
      },
    },
    space: {
      width: "260px",
      height: "100%",
      display: "table",
      "@media screen and (max-width: 820px)": {
        display: "none",
      },
    },
    toggleSpace: {
      width: "70px",
      height: "100%",
      display: "table",
    },
  })
);

export const rowStyles = makeStyles(() =>
  createStyles({
    menuWrapper: {
      borderTop: "0.5px solid #2e3247",
    },
    rowWrapper: {
      display: "flex",
      alignItems: "center",
      height: "40px",
      padding: "4px 20px",
      cursor: "pointer",
      "&:hover": {
        "&>div": {
          color: "#EEEEEE",
        },
      },
    },
    rowIcon: {
      color: "#8C909A",
      height: "24px",
      marginRight: "12px",
      display: "flex",
      justifyContent: "center",
      transition: "color 0.2s ease-in",
      "&>svg": {
        width: "24px",
        height: "24px",
      },
    },
    rowText: {
      color: "#8C909A",
      fontSize: "18px",
      fontWeight: "bold",
      transition: "color 0.2s ease-in",
    },
    toggle: {
      padding: "5px 5px",
      flexDirection: "column",
      height: "50px",
      "&>div": {
        fontSize: "10px",
        marginRight: "0px",
      },
    },
    subMenuWrapper: {
      transition: "all 0.2s ease-in",
      overflow: "hidden",
    },
    subMenu: {
      display: "flex",
      alignItems: "center",
      height: "36px",
      padding: "4px 20px",
      color: "#8C909A",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      borderLeft: "1px solid #353A53",
      marginLeft: "30px",
      "&:hover": {
        color: "#FFFFFF",
        transition: "all 0.2s ease-in",
      },
    },
    hide: {
      height: "0px !important",
    },
    selected: {
      backgroundColor: "#31344D",
    },
    active: {
      "&>div": {
        color: "#EEEEEE",
      },
    },
    toggleSub: {
      display: "none",
    },
    subActive: {
      color: "#EEEEEE",
    },
  })
);
