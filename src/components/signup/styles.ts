import { createStyles, makeStyles } from "@material-ui/core";

export const signupStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      width: "100%",
      margin: "0px auto",
      fontWeight: "bold",
    },
    signupBox: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      padding: "15px",
      position: "relative",
      backgroundColor: "#e6e6e6",
    },
    wrapper: {
      width: "320px",
      background: "transparent",
      borderRadius: "0px",
      paddingTop: "90px",
      marginBottom: "30px",
    },
    header: {
      fontSize: "30px",
      color: "#43383e",
      lineHeight: "1.2",
      textAlign: "center",
      paddingBottom: "40px",
    },
  })
);
