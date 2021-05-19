import React, { useEffect, useState } from "react";
import { settingStyles } from "./styles";
import MaterialTable from "material-table";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { requestInit } from "../../../constant/requestInit";

interface IChange {
  currentPassword: string;
  checkPassword: string;
  newPassword: string;
}

interface IDelete {
  currentPassword: string;
  checkPassword: string;
  check: boolean;
}

export default function Setting() {
  const classes = settingStyles();
  const history = useHistory();
  const [changePassword, setChangePassword] = useState<IChange>({
    checkPassword: "",
    currentPassword: "",
    newPassword: "",
  });
  const [deleteInfo, setDelete] = useState<IDelete>({
    checkPassword: "",
    currentPassword: "",
    check: false,
  });

  useEffect(() => {
    if (document.cookie === "path=/" || document.cookie === "") {
      Swal.fire({
        icon: "error",
        title: "로그인 에러",
        text: "로그인후에 이용해주세요.",
        heightAuto: false,
      }).then(() => {
        window.location.href = "/login";
        return;
      });
    }
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.headerText}>설정</div>
      </div>

      <div className={classes.content}>
        <div className={classes.contentHeader}>
          <div className={classes.section}>
            <div className={classes.sectionHeader}>비밀번호 변경</div>
            <div className={classes.sectionContent}>
              <div className={classes.inputWrapper}>
                <TextField
                  required
                  id="filled-required"
                  label="현재비밀번호"
                  variant="filled"
                  value={changePassword.currentPassword}
                  onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                    setChangePassword({
                      ...changePassword,
                      currentPassword: event.target.value as string,
                    });
                  }}
                />
              </div>
              <div className={classes.inputWrapper}>
                <TextField
                  required
                  id="filled-required"
                  label="비밀번호확인"
                  variant="filled"
                  value={changePassword.checkPassword}
                  onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                    setChangePassword({
                      ...changePassword,
                      checkPassword: event.target.value as string,
                    });
                  }}
                />
              </div>
              <div className={classes.inputWrapper}>
                <TextField
                  required
                  id="filled-required"
                  label="새비밀번호"
                  variant="filled"
                  value={changePassword.newPassword}
                  onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                    setChangePassword({
                      ...changePassword,
                      newPassword: event.target.value as string,
                    });
                  }}
                />
              </div>
              <div className={classes.buttonWrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    if (
                      changePassword.checkPassword === "" ||
                      changePassword.currentPassword === "" ||
                      changePassword.newPassword === ""
                    ) {
                      Swal.fire({
                        icon: "error",
                        title: "빈 값이 존재합니다",
                        text: "값을 채워주세요",
                        heightAuto: false,
                      });
                      return;
                    }

                    if (
                      changePassword.checkPassword !==
                      changePassword.currentPassword
                    ) {
                      Swal.fire({
                        icon: "error",
                        title: "비밀번호가 일치하지 않습니다",
                        text: "비밀번호를 확인해주세요",
                        heightAuto: false,
                      });

                      return;
                    }

                    fetch(
                      `http://localhost:4000/api/account`,
                      requestInit(
                        "PUT",
                        {
                          password: changePassword.currentPassword,
                          new_password: changePassword.newPassword,
                        },
                        true
                      )
                    )
                      .then((res) => res.json())
                      .then((res) => {
                        if (res.result === true) {
                          if (res.msg === "password is not valid") {
                            Swal.fire({
                              icon: "error",
                              title: "비밀번호가 올바르지 않습니다.",
                              text: "비밀번호를 확인해주세요.",
                              heightAuto: false,
                            });
                          } else if (res.msg === "token is not valid") {
                            document.cookie =
                              "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                            localStorage.removeItem("systemId");
                            Swal.fire({
                              icon: "error",
                              title: "로그인 토큰이 만료되었습니다.",
                              text: "다시 로그인 해주세요.",
                              heightAuto: false,
                            }).then(() => {
                              document.cookie =
                                "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                              localStorage.removeItem("systemId");
                              window.location.href = "/login";
                            });
                          } else {
                            document.cookie =
                              "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                            localStorage.removeItem("systemId");
                            Swal.fire({
                              icon: "success",
                              title: "비밀번호 변경이 완료되었습니다.",
                              text: "다시 로그인 해주세요.",
                              heightAuto: false,
                            }).then(() => {
                              document.cookie =
                                "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                              localStorage.removeItem("systemId");
                              window.location.href = "/login";
                            });
                          }
                        }
                      });
                  }}
                >
                  변경
                </Button>
              </div>
            </div>
          </div>
          <div className={classes.section}>
            <div className={classes.sectionHeader}>회원탈퇴</div>
            <div className={classes.sectionContent}>
              <div className={classes.inputWrapper}>
                <TextField
                  required
                  id="filled-required"
                  label="현재비밀번호"
                  variant="filled"
                  value={deleteInfo.currentPassword}
                  onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                    setDelete({
                      ...deleteInfo,
                      currentPassword: event.target.value as string,
                    });
                  }}
                />
              </div>
              <div className={classes.inputWrapper}>
                <TextField
                  required
                  id="filled-required"
                  label="비밀번호확인"
                  variant="filled"
                  value={deleteInfo.checkPassword}
                  onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                    setDelete({
                      ...deleteInfo,
                      checkPassword: event.target.value as string,
                    });
                  }}
                />
              </div>
              <div className={classes.checkbox}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={deleteInfo.check}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          setDelete({
                            ...deleteInfo,
                            check: event.target.checked,
                          });
                        }}
                        name="check"
                        color="primary"
                      />
                    }
                    labelPlacement="start"
                    label="정말로 계정을 삭제하시겠습니까?"
                  />
                </FormGroup>
              </div>

              <div className={classes.buttonWrapper}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    if (
                      deleteInfo.checkPassword === "" ||
                      deleteInfo.currentPassword === ""
                    ) {
                      Swal.fire({
                        icon: "error",
                        title: "빈 값이 존재합니다",
                        text: "값을 채워주세요",
                        heightAuto: false,
                      });
                      return;
                    }

                    if (
                      deleteInfo.checkPassword !== deleteInfo.currentPassword
                    ) {
                      Swal.fire({
                        icon: "error",
                        title: "비밀번호가 일치하지 않습니다",
                        text: "비밀번호를 확인해주세요",
                        heightAuto: false,
                      });

                      return;
                    }

                    if (!deleteInfo.check) {
                      Swal.fire({
                        icon: "error",
                        title: "체크박스가 선택되지 않았습니다.",
                        text: "동의해주세요",
                        heightAuto: false,
                      });
                      return;
                    }

                    fetch(
                      `http://localhost:4000/api/account`,
                      requestInit(
                        "DELETE",
                        { password: deleteInfo.currentPassword },
                        true
                      )
                    )
                      .then((res) => res.json())
                      .then((res) => {
                        if (res.result === true) {
                          if (res.msg === "password is not valid") {
                            Swal.fire({
                              icon: "error",
                              title: "비밀번호가 올바르지 않습니다.",
                              text: "비밀번호를 확인해주세요.",
                              heightAuto: false,
                            });
                          } else if (res.msg === "token is not valid") {
                            document.cookie =
                              "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                            localStorage.removeItem("systemId");
                            Swal.fire({
                              icon: "error",
                              title: "로그인 토큰이 만료되었습니다.",
                              text: "다시 로그인 해주세요.",
                              heightAuto: false,
                            }).then(() => {
                              document.cookie =
                                "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                              localStorage.removeItem("systemId");
                              window.location.href = "/login";
                            });
                          } else {
                            document.cookie =
                              "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                            localStorage.removeItem("systemId");
                            Swal.fire({
                              icon: "success",
                              title: "회원탈퇴가 완료되었습니다.",
                              text: "서비스를 이용해주셔서 감사합니다.",
                              heightAuto: false,
                            }).then(() => {
                              document.cookie =
                                "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                              localStorage.removeItem("systemId");
                              window.location.href = "/";
                            });
                          }
                        }
                      });
                  }}
                >
                  회원탈퇴
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
