import React, { useState, useEffect } from "react";
import { modalStyles } from "./styles";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

interface IModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  rawData: any;
  isFilter: boolean;
  filterList: IFilter;
  setFilterList: React.Dispatch<React.SetStateAction<IFilter>>;
}

interface IFilter {
  IAM: boolean;
  EC2: boolean;
  CloudFront: boolean;
  CloudTrail: boolean;
  CloudWatch: boolean;
  S3: boolean;
  RDS: boolean;
  Lambda: boolean;
  EBS: boolean;
  KMS: boolean;
  Cost: boolean;
  VPC: boolean;
}

export default function Modal(props: IModalProps) {
  const classes = modalStyles();
  const [tempList, setList] = useState<IFilter>({
    IAM: false,
    EC2: false,
    S3: false,
    RDS: false,
    VPC: false,
    CloudFront: false,
    CloudTrail: false,
    CloudWatch: false,
    Lambda: false,
    EBS: false,
    KMS: false,
    Cost: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setList({
      ...tempList,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    setList(props.filterList);
  }, [props.modal]);

  if (props.isFilter) {
    return (
      <div className={`${classes.modal} ${props.modal && classes.visibility}`}>
        <div className={classes.modalHead}>
          <div className={classes.title}>필터</div>
        </div>
        <div className={classes.modalBody}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.EC2}
                  onChange={handleChange}
                  name="EC2"
                  color="primary"
                />
              }
              label="EC2"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.IAM}
                  onChange={handleChange}
                  name="IAM"
                  color="primary"
                />
              }
              label="IAM"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.S3}
                  onChange={handleChange}
                  name="S3"
                  color="primary"
                />
              }
              label="S3"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.RDS}
                  onChange={handleChange}
                  name="RDS"
                  color="primary"
                />
              }
              label="RDS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.VPC}
                  onChange={handleChange}
                  name="VPC"
                  color="primary"
                />
              }
              label="VPC"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.CloudFront}
                  onChange={handleChange}
                  name="CloudFront"
                  color="primary"
                />
              }
              label="CloudFront"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.CloudTrail}
                  onChange={handleChange}
                  name="CloudTrail"
                  color="primary"
                />
              }
              label="CloudTrail"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.CloudWatch}
                  onChange={handleChange}
                  name="CloudWatch"
                  color="primary"
                />
              }
              label="CloudWatch"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.Lambda}
                  onChange={handleChange}
                  name="Lambda"
                  color="primary"
                />
              }
              label="Lambda"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.EBS}
                  onChange={handleChange}
                  name="EBS"
                  color="primary"
                />
              }
              label="EBS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.KMS}
                  onChange={handleChange}
                  name="KMS"
                  color="primary"
                />
              }
              label="KMS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.Cost}
                  onChange={handleChange}
                  name="Cost"
                  color="primary"
                />
              }
              label="Cost"
            />
          </FormGroup>
        </div>
        <div className={classes.modalFooter}>
          <Button
            variant="contained"
            color="primary"
            onClick={async () => {
              props.setFilterList(tempList);
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

  return (
    <div
      className={`${classes.modal} ${classes.wideWidth} ${
        props.modal && classes.visibility
      }`}
    >
      <div className={classes.modalHead}>
        <div className={classes.title}>RAW-DATA</div>
      </div>
      <div className={classes.modalBody}>
        {props.rawData && (
          <div className={classes.dataWrapper}>
            <div className={classes.cli}>
              <div className={classes.dataTitle}>CLI</div>
              <div className={classes.dataContent}>
                {JSON.parse(props.rawData).cli.map((o: any, idx: any) => (
                  <div className={classes.cliDetail} key={`modal-cli-${idx}`}>
                    {o}
                    <FileCopyOutlinedIcon
                      onClick={() => {
                        const tempElem = document.createElement("textarea");
                        tempElem.value = o;
                        document.body.appendChild(tempElem);

                        tempElem.select();
                        document.execCommand("copy");
                        document.body.removeChild(tempElem);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.summary}>
              <div className={classes.dataTitle}>Summary</div>
              <div className={classes.dataContent}>
                {JSON.parse(props.rawData).summary.map((o: any, idx: any) => (
                  <div
                    className={classes.summaryDetail}
                    key={`modal-summary-${idx}`}
                  >
                    {o}
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.rawData}>
              <div className={classes.dataTitle}>RawData</div>
              <div className={classes.json}>
                {JSON.stringify(JSON.parse(props.rawData).raw_data, null, 4)}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={classes.modalFooter}>
        <Button
          variant="contained"
          color="default"
          onClick={async () => {
            props.setModal(true);
          }}
          className={classes.button}
        >
          닫기
        </Button>
      </div>
    </div>
  );
}
