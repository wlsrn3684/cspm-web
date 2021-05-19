import { createStyles, makeStyles } from "@material-ui/core";

export const checklistStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      padding: "20px",
    },
    active: { backgroundColor: "#32344d !important" },
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
    AWS: {
      backgroundImage: `url('/images/AWS.png')`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "50px",
      height: "50px",
      borderRadius: "25px",
    },
    CIS: {
      backgroundImage: `url('/images/CIS.png')`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "200px",
      height: "50px",
      borderRadius: "25px",
    },
    CSA: {
      backgroundImage: `url('/images/CSA.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100px",
      height: "50px",
      borderRadius: "25px",
    },
    reportWrapper: {
      width: "500px",
      display: "flex",
      justifyContent: "flex-end",
    },
    reportButton: {
      justifyContent: "flex-end",
    },
  })
);
