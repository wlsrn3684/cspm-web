import React, { useState, useEffect } from "react";
import { modalStyles } from "./styles";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { AWSRegionList } from "../../../constant/region";
import { requestInit } from "../../../constant/requestInit";
import Swal from "sweetalert2";

interface IModalProps {
  modal: boolean;
  setting: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSetting: React.Dispatch<React.SetStateAction<boolean>>;
  accountId: string;
  setAccountId: React.Dispatch<React.SetStateAction<string>>;
}

interface ICloudModal {
  name: string;
  access_key: string;
  secret_key: string;
  manager: string;
  type: string;
  region: string;
  platform: string;
}

type ICloudProps =
  | "name"
  | "access_key"
  | "secret_key"
  | "manager"
  | "type"
  | "region"
  | "platform";

export default function Modal(props: IModalProps) {
  const classes = modalStyles();
  const [info, setInfo] = useState<ICloudModal>({
    name: "",
    access_key: "",
    secret_key: "",
    manager: "",
    type: "",
    region: "us-east-1",
    platform: "AWS",
  });

  const setSettingInfo = async () => {
    await fetch(`http://localhost:4000/api/asset?id=${props.accountId}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.accounts && res.accounts.length > 0) {
          setInfo({
            name: res.accounts[0].name,
            access_key: res.accounts[0].accessKey,
            secret_key: res.accounts[0].secretKey,
            manager: res.accounts[0].manager,
            type: res.accounts[0].type,
            region: res.accounts[0].region,
            platform: res.accounts[0].platform,
          });
        }
      });
  };

  useEffect(() => {
    if (props.setting) {
      setSettingInfo();
    } else {
      setInfo({
        name: "",
        access_key: "",
        secret_key: "",
        manager: "",
        type: "",
        region: "us-east-1",
        platform: "AWS",
      });
    }
  }, [props.modal]);

  return (
    <div className={`${classes.modal} ${props.modal && classes.visibility}`}>
      <div className={classes.modalHead}>
        <div className={classes.title}>
          {props.setting ? "클라우드 변경" : "클라우드 추가"}
        </div>
      </div>
      <div className={classes.modalBody}>
        <div className={classes.inputWrapper}>
          <TextField
            required
            id="filled-required"
            label="name"
            variant="filled"
            value={info.name}
            className={classes.input}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setInfo({
                ...info,
                name: event.target.value as string,
              });
            }}
          />
        </div>
        <div className={classes.inputWrapper}>
          <TextField
            required
            id="filled-required"
            label="accessKey"
            variant="filled"
            value={info.access_key}
            className={classes.input}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setInfo({
                ...info,
                access_key: event.target.value as string,
              });
            }}
          />
        </div>
        <div className={classes.inputWrapper}>
          <TextField
            required
            id="filled-required"
            label="secretKey"
            variant="filled"
            value={info.secret_key}
            className={classes.input}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setInfo({
                ...info,
                secret_key: event.target.value as string,
              });
            }}
          />
        </div>
        <div className={classes.inputWrapper}>
          <TextField
            required
            id="filled-required"
            label="manager"
            variant="filled"
            value={info.manager}
            className={classes.input}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setInfo({
                ...info,
                manager: event.target.value as string,
              });
            }}
          />
        </div>
        <div className={classes.inputWrapper}>
          <TextField
            required
            id="filled-required"
            label="type"
            variant="filled"
            value={info.type}
            className={classes.input}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setInfo({
                ...info,
                type: event.target.value as string,
              });
            }}
          />
        </div>
        <div className={classes.inputWrapper}>
          <FormControl className={classes.formControl}>
            <Select
              value={info.region}
              onChange={(evnet: React.ChangeEvent<{ value: unknown }>) => {
                setInfo({
                  ...info,
                  region: evnet.target.value as string,
                });
              }}
              displayEmpty
              className={classes.formControl}
              inputProps={{ "aria-label": "Without label" }}
            >
              {AWSRegionList.map((o, idx) => {
                return (
                  <MenuItem key={`menu-item-${idx}`} value={o[1]}>
                    {o[0]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={classes.modalFooter}>
        {props.setting && (
          <Button
            variant="contained"
            color="secondary"
            onClick={async () => {
              await fetch(
                `http://localhost:4000/api/asset`,
                requestInit("DELETE", { id: props.accountId })
              );

              props.setAccountId("");
              props.setModal(true);

              window.location.reload();
            }}
            className={classes.button}
          >
            삭제
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            let isEmpty = false;
            for (let key in info) {
              if (info[key as ICloudProps] === "") isEmpty = true;
            }

            if (isEmpty) {
              Swal.fire({
                icon: "error",
                title: "비어 있는 값이 존재합니다",
                heightAuto: false,
              });

              return;
            }

            if (props.setting) {
              const body = {
                id: props.accountId,
                name: info.name,
                access_key: info.access_key,
                secret_key: info.secret_key,
                manager: info.manager,
                type: info.type,
                region: info.region,
                platform: "AWS",
              };
              const response: any = await fetch(
                "http://localhost:4000/api/asset",
                requestInit("PUT", body, true)
              )
                .then((res) => res.json())
                .then((res) => {
                  if (res.result === true) {
                    if (res.msg === "token is not valid") {
                      document.cookie =
                        "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                      localStorage.removeItem("systemId");
                      Swal.fire({
                        icon: "error",
                        title: "로그인 토큰이 만료되었습니다.",
                        text: "다시 로그인 해주세요.",
                        heightAuto: false,
                      }).then(() => {
                        window.location.href = "/login";
                      });
                    }
                  }
                });
            } else {
              const body = info;

              const response: any = await fetch(
                "http://localhost:4000/api/asset",
                requestInit("POST", body, true)
              )
                .then((res) => res.json())
                .then((res) => {
                  if (res.result === true) {
                    if (res.msg === "token is not valid") {
                      document.cookie =
                        "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
                      localStorage.removeItem("systemId");
                      Swal.fire({
                        icon: "error",
                        title: "로그인 토큰이 만료되었습니다.",
                        text: "다시 로그인 해주세요.",
                        heightAuto: false,
                      }).then(() => {
                        window.location.href = "/login";
                      });
                    }
                  }
                });
            }
            props.setModal(true);
            props.setSetting(false);

            window.location.reload();
          }}
          className={classes.button}
        >
          {props.setting ? "변경" : "확인"}
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            props.setAccountId("");
            props.setModal(true);
            props.setSetting(false);
          }}
          className={classes.button}
        >
          취소
        </Button>
      </div>
    </div>
  );
}
