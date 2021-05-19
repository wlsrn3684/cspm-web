import React, { useState } from "react";
// import { signupStyles } from "./styles";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import { DonutLarge, LockOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { requestInit } from "../../constant/requestInit";
import Swal from "sweetalert2";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Team DDDG
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#111111",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#333333",
    "&:hover": {
      backgroundColor: "#111111",
    },
  },
  fontColor: {
    "&>div": {
      color: "black !important",
    },
  },
  header: {
    padding: "30px",
  },
  headerLogo: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    margin: "0px",
    padding: "0px",
    left: "40px",
    top: "30px",
    zIndex: 999,
    color: "black",
    fontSize: "26px",
    fontWeight: "bold",
    "&>svg": {
      width: "24px",
      height: "24px",
      marginRight: "4px",
      color: "black",
    },
    "&>span": {
      lineHeight: "24px",
    },
  },
}));

interface ISignUp {
  id: string;
  password: string;
}

export default function SignUp() {
  const classes = useStyles();
  const [info, setInfo] = useState<ISignUp>({ id: "", password: "" });

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.header}>
        <div
          className={classes.headerLogo}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <DonutLarge />
          <span>DDDG</span>
        </div>
      </div>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원 가입
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="id"
                label="아이디"
                name="id"
                autoComplete="id"
                className={classes.fontColor}
                onChange={(event: any) => {
                  setInfo({ ...info, id: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.fontColor}
                onChange={(event: any) => {
                  setInfo({ ...info, password: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="이메일로 프로모션 및 업데이트에 대한 정보를 받으시겠습니까?"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={async () => {
              if (info.id === "") {
                Swal.fire({
                  icon: "error",
                  title: "아이디 값이 비어있습니다.",
                  text: "값을 채워주십시오.",
                  heightAuto: false,
                });
                return;
              }

              if (info.id.length > 20) {
                Swal.fire({
                  icon: "error",
                  title: "아이디가 너무 깁니다.",
                  text: "20자 이하로 맞춰주세요.",
                  heightAuto: false,
                });
                return;
              }

              if (info.password === "") {
                Swal.fire({
                  icon: "error",
                  title: "비밀번호 값이 비어있습니다.",
                  text: "값을 채워주십시오.",
                  heightAuto: false,
                });
                return;
              }

              const body = info;

              const response: any = await fetch(
                "http://localhost:4000/api/account",
                requestInit("POST", body)
              ).then((res) => res.json());

              if (response.result) {
                Swal.fire({
                  icon: "success",
                  title: "생성완료!",
                  text: "로그인 화면으로 이동합니다.",
                  showCancelButton: true,
                  heightAuto: false,
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = "/login";
                  }
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "동일한 아이디가 존재합니다.",
                  text: "다른 아이디로 생성해주십시오.",
                  heightAuto: false,
                });
              }
            }}
          >
            회원 가입
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                이미 계정을 가지고 계신가요?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
