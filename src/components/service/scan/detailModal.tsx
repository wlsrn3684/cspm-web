import React, { useState, useEffect } from "react";
import { modalStyles } from "./styles";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { requestInit } from "../../../constant/requestInit";
import Swal from "sweetalert2";
import { API_SERVER_URL } from "../../../constant/serverUrl";

interface IModalInfo {
  result: string;
  id: string;
  comment: string;
  isFetch: boolean;
}

interface IModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  info: IModalInfo;
  setInfo: React.Dispatch<React.SetStateAction<IModalInfo>>;
}

export default function Modal(props: IModalProps) {
  const classes = modalStyles();
  const [comment, setComment] = useState<string>("");
  const [result, setResult] = useState<string>("Y");

  useEffect(() => {
    setResult(props.info.result);
    setComment(props.info.comment);
  }, [props.info]);

  return (
    <div
      className={`${classes.smallModal} ${props.modal && classes.visibility}`}
    >
      <div className={classes.modalHead}>
        <div className={classes.title}>진단 목록 추가</div>
      </div>
      <div className={classes.modalBody}>
        <FormControl className={classes.formControl}>
          <Select
            value={result}
            onChange={(evnet: React.ChangeEvent<{ value: unknown }>) => {
              setResult(evnet.target.value as string);
            }}
            displayEmpty
            className={classes.formControl}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="Y">Y</MenuItem>
            <MenuItem value="N">N</MenuItem>
            <MenuItem value="?">?</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.inputWrapper}>
          <TextField
            required
            id="filled-required"
            label="comment"
            variant="filled"
            value={comment}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              setComment(event.target.value as string);
            }}
          />
        </div>
      </div>
      <div className={classes.smallFooter}>
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            if (comment == "") {
              Swal.fire({
                icon: "error",
                title: "comment 값이 비어있습니다.",
                text: "comment를 입력해주세요",
                heightAuto: false,
              });
              return;
            } else if (comment == props.info.comment) {
              Swal.fire({
                icon: "error",
                title: "comment 값이 변경되지 않았습니다",
                text: "comment를 변경해주세요",
                heightAuto: false,
              });
              return;
            }

            await fetch(
              `http://116.43.4.229:10831/assessment-results/${props.info.id}`,
              requestInit("PUT", {
                result: result,
                interview: true,
                interviewContent: comment,
              })
            );

            props.setInfo({
              id: props.info.id,
              result: result,
              comment: comment,
              isFetch: true,
            });

            props.setModal(true);
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
