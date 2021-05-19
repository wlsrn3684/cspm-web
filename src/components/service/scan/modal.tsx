import React, { useState, useEffect } from "react";
import { modalStyles } from "./styles";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";
import { requestInit } from "../../../constant/requestInit";
import Swal from "sweetalert2";

interface IModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type IProvider = "AWS" | "AZURE" | "GCP";

interface ICloudList {
  id: string;
  systemId: string;
  manager: string;
  platform: IProvider;
  type: string;
  name: string;
  accessKey: string;
  secretKey: string;
}

export default function Modal(props: IModalProps) {
  const classes = modalStyles();
  const [cloudList, setCloudList] =
    useState<ICloudList[] | undefined>(undefined);
  const [check, setCheck] = useState<any>({});
  const [manager, setManager] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    fetch(
      "http://localhost:4000/api/asset",
      requestInit("GET", undefined, true)
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.result === true) {
          if (res.msg === "token is not valid") {
            document.cookie = "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
            localStorage.removeItem("systemId");

            Swal.fire({
              icon: "error",
              title: "로그인 토큰이 만료되었습니다.",
              text: "다시 로그인 해주세요.",
              heightAuto: false,
            }).then(() => {
              window.location.href = "/login";
            });
          } else if (res.msg === "Query is not valid") {
            console.log("Query is not valid");
          } else {
            setCloudList(res.accounts);
          }
        }
      });
  }, []);

  useEffect(() => {
    let temp: any = {};
    cloudList?.map((o, idx) => {
      temp[o.id] = false;
    });

    setCheck(temp);
  }, [cloudList]);

  return (
    <div className={`${classes.modal} ${props.modal && classes.visibility}`}>
      <div className={classes.modalHead}>
        <div className={classes.title}>진단 목록 추가</div>
      </div>
      <div className={classes.modalBody}>
        <FormGroup>
          {cloudList?.map((o, idx) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={check[o.id] || false}
                  onChange={handleChange}
                  name={`${o.id}`}
                  color="primary"
                />
              }
              label={o.name}
              key={`Scan-Modal-Checkbox-${idx}`}
            />
          ))}
        </FormGroup>
        <div className={classes.inputWrapper}>
          <TextField
            required
            id="filled-required"
            label="점검관리자"
            variant="filled"
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setManager(event.target.value as string);
            }}
          />
        </div>
      </div>
      <div className={classes.modalFooter}>
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            if (manager === "") {
              Swal.fire({
                icon: "error",
                title: "비어 있는 값이 존재합니다",
                text: "점검관리자 명을 입력해주세요",
                heightAuto: false,
              });

              return;
            }

            for (let accountId in check) {
              if (check[accountId]) {
                await fetch(
                  "http://localhost:4000/api/assessment",
                  requestInit("POST", {
                    account_id: accountId,
                    assessment_manager: manager,
                  })
                ).then((res) => res.json());
              }
            }

            props.setModal(true);
            window.location.reload();
          }}
          className={classes.button}
        >
          확인
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={async () => {
            props.setModal(true);
          }}
          className={classes.button}
        >
          취소
        </Button>
      </div>
    </div>
  );
}
