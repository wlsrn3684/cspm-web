import React, { useEffect, useState } from "react";
import { detailStyles } from "./styles";
import qs from "qs";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import { AWSChecklist } from "../../../constant/checklist";
import Modal from "./detailModal";
import { useHistory } from "react-router";
import Swal from "sweetalert2";

interface IVuln {
  id: string;
  assessment_id: string;
  service: string;
  chkIndex: string;
  name: string;
  risk: string;
  date: string;
  status: string;
  summary: any;
  comment: string;
}

interface IAccountInfo {
  id: string;
  systemId: string;
  manager: string;
  platform: string;
  type: string;
  name: string;
  accessKey: string;
  secretKey: string;
}

interface IModalInfo {
  result: string;
  id: string;
  comment: string;
  isFetch: boolean;
}

export default function ScanDetail({ location }: any): JSX.Element {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // /about?details=true 에서 쿼리 주소의 '?'를 생략해주는 옵션
  });
  const classes = detailStyles();
  const history = useHistory();

  const [vulnList, setVuln] = useState<IVuln[] | undefined>(undefined);
  const [modal, setModal] = useState<boolean>(true);
  const [info, setInfo] = useState<IModalInfo>({
    id: "",
    result: "",
    comment: "",
    isFetch: false,
  });

  const getVulnList = async () => {
    let vuln_List: IVuln[] = [];

    await fetch(
      `http://localhost:4000/api/history/last?assessment_id=${query.assessment_id}`
    )
      .then((res) => res.json())
      .then(async (res) => {
        if (res.result) {
          await fetch(
            `http://116.43.4.229:10831/assessment-results?historyId=${res.history.id}`
          )
            .then((res2) => res2.json())
            .then(async (res2) => {
              if (Array.isArray(res2)) {
                res2.map((y: any) => {
                  let name = "";
                  let risk = "";

                  let chk = "";

                  for (let i = 0; i < 3 - String(y.chkIndex).length; i++) {
                    chk += "0";
                  }

                  for (let check of AWSChecklist) {
                    if (check.index == `${y.service}_${chk}${y.chkIndex}`) {
                      name = check.name;
                      risk = check.risk;
                      break;
                    }
                  }

                  let result = "";
                  let qcheck = false;
                  let dqcheck = false;

                  y.rawData.split("").map((o: any) => {
                    if (o == "'") qcheck = !qcheck;
                    if (o == '"' && !qcheck) dqcheck = !dqcheck;

                    if (dqcheck) {
                      result += o;
                    } else if (qcheck) {
                      if (o == '"') {
                        result += '\\"';
                      } else {
                        if (o == "'") {
                          result += '"';
                        } else {
                          result += o;
                        }
                      }
                    } else {
                      if (o == "'") {
                        result += '"';
                      } else {
                        result += o;
                      }
                    }
                  });

                  let temp = "";

                  result.split("datetime.datetime(").map((o, idx) => {
                    if (idx % 2 == 1) {
                      let str = o.split(", tzinfo=tzutc())");
                      temp += '"datetime.datetime(';
                      temp += str[0];
                      temp += ', tzinfo=tzutc())"';
                      temp += str[1];
                    } else {
                      temp += o;
                    }
                  });

                  result = temp;

                  vuln_List.push({
                    id: y.id,
                    assessment_id: query.assessment_id as string,
                    service: y.service,
                    chkIndex: y.chkIndex,
                    name: name,
                    risk: risk,
                    date: res.history.start_date,
                    status: y.result,
                    summary: JSON.parse(
                      result.replace(/True/g, "true").replace(/False/g, "false")
                    ).summary,
                    comment: y.interviewContent,
                  });
                });
              }
            })
            .then(() => {
              setVuln(vuln_List);
            });
        }
      });
  };

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

    getVulnList();
  }, []);

  useEffect(() => {
    if (info.isFetch) {
      let vuln_list: IVuln[] = [];

      vulnList?.map((o) => {
        if (o.id == info.id) {
          vuln_list.push({ ...o, status: info.result, comment: info.comment });
        } else {
          vuln_list.push(o);
        }
      });

      setVuln(vuln_list);
    }
  }, [info]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.headerText}>
          취약점현황
          <Button
            variant="contained"
            color="primary"
            className={classes.headerButton}
            onClick={() => {
              history.push("/service/manage/scan");
            }}
          >
            뒤로가기
          </Button>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.contentHeader}></div>
        <div className={classes.tableWrapper}>
          <MaterialTable
            title=""
            columns={[
              {
                title: "번호",
                field: "id",
                cellStyle: { width: "5.5%" },
              },
              {
                title: "리스트번호",
                field: "chkIndex",
                cellStyle: { width: "8%" },
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
              { title: "위험도", field: "risk", cellStyle: { width: "6.5%" } },
              {
                title: "진단날짜",
                field: "date",
                cellStyle: { width: "11.6%" },
              },
              { title: "결과", field: "status", cellStyle: { width: "6%" } },
              {
                title: "요약",
                field: "summary",
                render: (rowData) => {
                  return <div>{rowData.summary}</div>;
                },
              },
              {
                title: "코멘트",
                field: "comment",
                cellStyle: { width: "11.6%" },
              },
              {
                title: "상세보기",
                field: "",
                cellStyle: { width: "7.8%" },
                render: (rowData) => {
                  return (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setInfo({
                          result: rowData.status,
                          id: rowData.id,
                          comment: rowData.comment || "",
                          isFetch: false,
                        });
                        setModal(false);
                      }}
                    >
                      상세보기
                    </Button>
                  );
                },
              },
            ]}
            data={vulnList as IVuln[]}
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

      <div
        className={`${classes.overlay} ${modal && classes.visibility}`}
        onClick={() => {
          setModal(true);
        }}
      ></div>
      <Modal modal={modal} setModal={setModal} info={info} setInfo={setInfo} />
    </div>
  );
}
