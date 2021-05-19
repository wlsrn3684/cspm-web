import React, { useEffect, useState } from "react";
import { vlunStyles } from "../vulnerability/styles";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "./modal";

interface IVulnProps {
  vulnList: IVulnList[];
}

interface IVulnList {
  id: string;
  service: string;
  chkIndex: string;
  name: string;
  risk: string;
  status: string;
  summary: any;
  raw_data: any;
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

type IFilterType =
  | "IAM"
  | "EC2"
  | "CloudFront"
  | "CloudTrail"
  | "CloudWatch"
  | "S3"
  | "RDS"
  | "Lambda"
  | "EBS"
  | "KMS"
  | "Cost"
  | "VPC";

export default function Vlun(props: IVulnProps) {
  const classes = vlunStyles();
  const history = useHistory();

  const [vulnList, setVuln] = useState<IVulnList[] | undefined>(undefined);
  const [modal, setModal] = useState<boolean>(true);
  const [rawData, setRawData] = useState<any>();
  const [isFilter, setFilter] = useState<boolean>(false);
  const [filteredList, setFilteredList] =
    useState<IVulnList[] | undefined>(undefined);
  const [filterList, setFilterList] = useState<IFilter>({
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

    if (props.vulnList && props.vulnList.length > 0) {
      setVuln(props.vulnList);
      setFilteredList(props.vulnList);
    }
  }, [props.vulnList]);

  useEffect(() => {
    if (
      !filterList.CloudFront &&
      !filterList.CloudTrail &&
      !filterList.CloudWatch &&
      !filterList.Cost &&
      !filterList.EBS &&
      !filterList.EC2 &&
      !filterList.IAM &&
      !filterList.KMS &&
      !filterList.Lambda &&
      !filterList.RDS &&
      !filterList.S3 &&
      !filterList.VPC
    ) {
      setFilteredList(vulnList);
    } else {
      let temp: IVulnList[] = [];
      vulnList?.map((o) => {
        if (filterList[o.service as IFilterType]) {
          temp.push(o);
        }
      });
      setFilteredList(temp);
    }
  }, [filterList]);

  return (
    <div className={classes.smallContainer}>
      <div className={classes.content}>
        <div className={classes.tableWrapper}>
          <MaterialTable
            title={
              <div className={classes.title}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setFilter(true);
                    setModal(false);
                  }}
                >
                  필터
                </Button>
                <div className={classes.filterWrapper}>
                  {filterList.IAM && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, IAM: false });
                      }}
                    >
                      IAM
                    </div>
                  )}
                  {filterList.EC2 && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, EC2: false });
                      }}
                    >
                      EC2
                    </div>
                  )}
                  {filterList.S3 && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, S3: false });
                      }}
                    >
                      S3
                    </div>
                  )}
                  {filterList.RDS && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, RDS: false });
                      }}
                    >
                      RDS
                    </div>
                  )}
                  {filterList.VPC && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, VPC: false });
                      }}
                    >
                      VPC
                    </div>
                  )}
                  {filterList.CloudFront && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, CloudFront: false });
                      }}
                    >
                      CloudFront
                    </div>
                  )}
                  {filterList.CloudTrail && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, CloudTrail: false });
                      }}
                    >
                      CloudTrail
                    </div>
                  )}
                  {filterList.CloudWatch && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, CloudWatch: false });
                      }}
                    >
                      CloudWatch
                    </div>
                  )}
                  {filterList.Lambda && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, Lambda: false });
                      }}
                    >
                      Lambda
                    </div>
                  )}
                  {filterList.EBS && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, EBS: false });
                      }}
                    >
                      EBS
                    </div>
                  )}
                  {filterList.KMS && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, KMS: false });
                      }}
                    >
                      KMS
                    </div>
                  )}
                  {filterList.Cost && (
                    <div
                      className={classes.filter}
                      onClick={() => {
                        setFilterList({ ...filterList, Cost: false });
                      }}
                    >
                      Cost
                    </div>
                  )}
                </div>
              </div>
            }
            columns={[
              {
                title: "번호",
                field: "id",
                cellStyle: { width: "6%" },
              },
              {
                title: "리스트번호",
                field: "chkIndex",
                cellStyle: { width: "8.8%" },
                render: (rowData) => {
                  let chk = "";

                  for (
                    let i = 0;
                    i < 3 - String(rowData.chkIndex).length;
                    i++
                  ) {
                    chk += "0";
                  }
                  return (
                    <React.Fragment>{`${rowData.service}_${chk}${rowData.chkIndex}`}</React.Fragment>
                  );
                },
              },
              { title: "항목명", field: "name" },
              { title: "위험도", field: "risk", cellStyle: { width: "7%" } },
              { title: "상태", field: "status", cellStyle: { width: "6%" } },
              {
                title: "요약",
                field: "summary",
                render: (rowData) => {
                  return <div>{rowData.summary}</div>;
                },
              },
              {
                title: "상세보기",
                field: "",
                cellStyle: { width: "8%" },
                render: (rowData) => {
                  return (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setRawData(rowData.raw_data);
                        setFilter(false);
                        setModal(false);
                      }}
                    >
                      상세보기
                    </Button>
                  );
                },
              },
            ]}
            data={filteredList as IVulnList[]}
          />
        </div>
      </div>
      <div
        className={`${classes.overlay} ${modal && classes.visibility}`}
        onClick={() => {
          setModal(true);
        }}
      ></div>
      <Modal
        modal={modal}
        setModal={setModal}
        rawData={rawData}
        isFilter={isFilter}
        setFilterList={setFilterList}
        filterList={filterList}
      />
    </div>
  );
}
