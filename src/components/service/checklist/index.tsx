import { Button } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { checklistStyles } from "./styles";
import { AWSChecklist } from "../../../constant/checklist";
import Swal from "sweetalert2";
import fileDownload from "file-saver";

type IReference = "AWS" | "CIS" | "CSA";

interface IChecklist {
  classification: string;
  index: string;
  name: string;
  risk: string;
  description: string;
  inspection: string;
  action: string;
  reference: IReference;
  provider: string;
}

export default function Checklist() {
  const classes = checklistStyles();

  const [category, setCategory] = useState<string>("EC2");
  const [checklist, setChecklist] =
    useState<IChecklist[] | undefined>(undefined);
  const [tableData, setTable] = useState<IChecklist[]>([]);

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

    setChecklist(AWSChecklist as IChecklist[]);
  }, []);

  useEffect(() => {
    if (!checklist) return;

    let list: IChecklist[] = [];

    checklist.map((o, idx) => {
      if (o.index.indexOf(category) !== -1) list.push(o);
    });

    setTable(list);
  }, [category, checklist]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.headerText}>체크리스트</div>
        <Button
          variant={category === "IAM" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("IAM");
          }}
        >
          IAM
        </Button>
        <Button
          variant={category === "EC2" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("EC2");
          }}
        >
          EC2
        </Button>
        <Button
          variant={category === "S3" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("S3");
          }}
        >
          S3
        </Button>
        <Button
          variant={category === "RDS" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("RDS");
          }}
        >
          RDS
        </Button>
        <Button
          variant={category === "VPC" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("VPC");
          }}
        >
          VPC
        </Button>
        <Button
          variant={category === "CloudFront" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("CloudFront");
          }}
        >
          CloudFront
        </Button>
        <Button
          variant={category === "CloudWatch" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("CloudWatch");
          }}
        >
          CloudWatch
        </Button>
        <Button
          variant={category === "CloudTrail" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("CloudTrail");
          }}
        >
          CloudTrail
        </Button>
        <Button
          variant={category === "Lambda" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("Lambda");
          }}
        >
          Lambda
        </Button>
        <Button
          variant={category === "KMS" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("KMS");
          }}
        >
          KMS
        </Button>
        <Button
          variant={category === "EBS" ? "contained" : "outlined"}
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            setCategory("EBS");
          }}
        >
          EBS
        </Button>
        <div className={classes.reportWrapper}>
          <Button
            variant="contained"
            color="primary"
            className={classes.reportButton}
            onClick={() => {
              document.getElementById("download")?.click();
            }}
          >
            {`${category} Report Download`}
          </Button>
          <a
            id="download"
            href={`/checklist/레포트_${category}.xlsx`}
            download
          />
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.contentHeader}></div>
        <div className={classes.tableWrapper}>
          <MaterialTable
            title=""
            columns={[
              {
                title: "항목번호",
                field: "index",
                cellStyle: { width: "9%" },
              },
              { title: "항목명", field: "name" },
              {
                title: "위험도",
                field: "risk",
                cellStyle: {
                  width: "7%",
                  paddingLeft: "30px",
                },
              },
              {
                title: "레퍼런스",
                field: "reference",
                cellStyle: { width: "9%" },
                render: (rowData) => (
                  <div
                    className={classes[rowData.provider as IReference]}
                  ></div>
                ),
              },
            ]}
            data={tableData}
            options={{
              exportButton: {
                csv: true,
                pdf: false,
              },
              selection: false,
              exportFileName: "취약점 현황",
              exportAllData: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
