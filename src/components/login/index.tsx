import React, { useState } from "react";
import { loginStyles } from "./styles";
import {
  Visibility,
  VisibilityOff,
  Facebook,
  Twitter,
  DonutLarge,
} from "@material-ui/icons";
import { requestInit } from "../../constant/requestInit";
import Swal from "sweetalert2";

interface ILogin {
  id: string;
  password: string;
}

export default function Login() {
  const classes = loginStyles();
  const [passwdVisible, setVisible] = useState<boolean>(false);
  const [info, setInfo] = useState<ILogin>({ id: "", password: "" });

  return (
    <div className={classes.mainContainer}>
      <div>
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
      <div className={classes.loginBox}>
        <div className={classes.wrapper}>
          <div>
            <div className={classes.header}>로그인</div>
            <div className={classes.connection}>
              <a href="" className={classes.facebook}>
                <Facebook />
                페이스북으로 로그인
              </a>
              <a href="" className={classes.google}>
                <Twitter />
                트위터로 로그인
              </a>
            </div>

            <div className={classes.subHeader}>
              <div>아이디로 로그인</div>
            </div>

            <div className={classes.id}>
              <input
                type="text"
                className={classes.input}
                placeholder="아이디"
                onChange={(event: any) => {
                  setInfo({ ...info, id: event.target.value });
                }}
              />
              <span className={classes.focusInput}></span>
            </div>

            <div className={classes.password}>
              <span
                className={classes.showPasswd}
                onClick={() => {
                  setVisible(!passwdVisible);
                }}
              >
                {passwdVisible ? <VisibilityOff /> : <Visibility />}
              </span>
              <input
                type={`${passwdVisible ? "text" : "password"}`}
                className={classes.input}
                placeholder="비밀번호"
                onChange={(event: any) => {
                  setInfo({ ...info, password: event.target.value });
                }}
              />
              <span className={classes.focusInput}></span>
            </div>

            <div className={classes.login}>
              <button
                className={classes.loginButton}
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
                    "http://localhost:4000/api/account/login",
                    requestInit("POST", body)
                  ).then((res) => res.json());

                  if (response.result) {
                    document.cookie = `token=${response.token}`;
                    document.cookie = `path=/;`;
                    localStorage.setItem("systemId", info.id);

                    Swal.fire({
                      icon: "success",
                      title: "로그인 성공!",
                      text: "서비스 화면으로 이동합니다.",
                      heightAuto: false,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        window.location.href = "/service/dashboard";
                      }
                    });
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "로그인 실패..",
                      text: "아이디 또는 비밀번호를 확인해주세요.",
                      heightAuto: false,
                    });
                  }
                }}
              >
                로그인
              </button>
            </div>

            <div className={classes.signup}>
              <div className={classes.signupContent}>
                <span>Don't have an account?</span>
              </div>

              <a href="/signup" className={classes.signupButton}>
                회원 가입
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
