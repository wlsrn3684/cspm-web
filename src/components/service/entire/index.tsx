import React, { useEffect, useState } from "react";
import { entireStyles } from "./styles";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { requestInit } from "../../../constant/requestInit";
import Swal from "sweetalert2";

interface IEntire {
  id: string;
  service: string;
  platform: string;
  type: string;
  operator: string;
  vuln: {
    high_total: string;
    high_count: string;
    middle_total: string;
    middle_count: string;
    low_total: string;
    low_count: string;
  };
  assessmentManager: string;
  lastDate: string;
  count: number;
  status: string;
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

export default function Entire() {
  const classes = entireStyles();
  const history = useHistory();

  const [cloudList, setCloud] = useState<IEntire[] | undefined>(undefined);
  const [accountList, setAccount] = useState<string[]>([]);
  const [accountInfo, setAccountInfo] = useState<IAccountInfo[]>([]);

  const getAccountList = async () => {
    let account_list: string[] = [];

    let response = await fetch(
      `http://localhost:4000/api/asset`,
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
            setAccountInfo(res.accounts);
            res.accounts.map((o: any, idx: number) => {
              account_list.push(o.id);
            });
          }
        }
      });

    setAccount(account_list);
  };

  const setCount = async (assessmentList: IEntire[]) => {
    let temp: IEntire[] = [];

    await assessmentList.map(async (o, idx) => {
      await fetch(
        `http://localhost:4000/api/history/all?assessment_id=${o.id}`,
        requestInit("GET")
      )
        .then(async (res) => res.json())
        .then(async (res) => {
          if (res.result === true) {
            o.count = res.count;
          }
        });

      temp.push(o);
      if (assessmentList.length - 1 == idx) {
        setCloud(temp);
      }
    });
  };

  const setRisk = async (assessmentList: IEntire[]) => {
    let temp: IEntire[] = [];

    await assessmentList.map(async (o, idx) => {
      await fetch(
        `http://localhost:4000/api/history/last?assessment_id=${o.id}`,
        requestInit("GET")
      )
        .then(async (res2) => res2.json())
        .then(async (res2) => {
          if (res2.history) {
            o.vuln.high_total = res2.history.high_total;
            o.vuln.high_count = res2.history.high_count;
            o.vuln.middle_total = res2.history.middle_total;
            o.vuln.middle_count = res2.history.middle_count;
            o.vuln.low_total = res2.history.low_total;
            o.vuln.low_count = res2.history.low_count;
            o.lastDate = res2.history.start_date;
          } else {
            o.vuln.high_total = "0";
            o.vuln.high_count = "0";
            o.vuln.middle_total = "0";
            o.vuln.middle_count = "0";
            o.vuln.low_total = "0";
            o.vuln.low_count = "0";
            o.lastDate = "진단이력 없음";
          }
        });

      temp.push(o);
      if (assessmentList.length - 1 == idx) {
        setCloud(temp);
      }
    });
  };

  const getAssessmentList = async (account_list: string[]) => {
    let assessmentList: IEntire[] = [];

    await account_list.map(async (o: any, idx: number) => {
      let response = await fetch(
        `http://localhost:4000/api/assessment?account_id=${o}`,
        requestInit("GET")
      )
        .then(async (res) => res.json())
        .then(async (res) => {
          if (res.result === true) {
            await res.assessments.map(async (x: any) => {
              let asseement: IEntire = {
                assessmentManager: x.assessmentManager,
                id: x.id,
                operator: "",
                platform: "",
                service: "",
                lastDate: "",
                status: x.status,
                type: "",
                vuln: {
                  high_total: "",
                  high_count: "",
                  middle_total: "",
                  middle_count: "",
                  low_total: "",
                  low_count: "",
                },
                count: -1,
              };

              accountInfo.map((y: IAccountInfo) => {
                if (o == y.id) {
                  asseement.platform = y.platform;
                  asseement.type = y.type;
                  asseement.operator = y.manager;
                  asseement.service = y.name;
                }
              });

              assessmentList.push(asseement);
            });
          }
        });

      if (account_list.length - 1 == idx) {
        await setCount(assessmentList);
        await setRisk(assessmentList);
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

    getAccountList();
  }, []);

  useEffect(() => {
    getAssessmentList(accountList);
  }, [accountList]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.headerText}>취약점관리</div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            history.push("/service/manage/scan");
          }}
        >
          취약점관리
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            history.push("/service/manage/vlun");
          }}
        >
          취약점현황
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            history.push("/service/manage/inspection");
          }}
        >
          이행점검
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            history.push("/service/manage/entire");
          }}
        >
          전체점검현황
        </Button>
      </div>

      <div className={classes.content}>
        <div className={classes.contentHeader}></div>
        <div className={classes.tableWrapper}>
          <MaterialTable
            title=""
            columns={[
              { title: "진단번호", field: "id", cellStyle: { width: "7.2%" } },
              {
                title: "서비스명",
                field: "service",
                cellStyle: { width: "7.2%" },
              },
              {
                title: "구분",
                field: "platform",
                cellStyle: { width: "5.4%" },
              },
              { title: "용도", field: "type", cellStyle: { width: "5.4%" } },
              {
                title: "운영담당자",
                field: "operator",
                cellStyle: { width: "8%" },
              },
              {
                title: "점검담당자",
                field: "assessmentManager",
                cellStyle: { width: "8%" },
              },
              {
                title: "취약점",
                field: "vuln",
                render: (rowData) => {
                  return (
                    <div className={classes.vulnWrapper}>
                      <div
                        className={classes.high}
                      >{`${rowData.vuln.high_count} / ${rowData.vuln.high_total}`}</div>
                      <div className={classes.middle}>
                        {`${rowData.vuln.middle_count} / ${rowData.vuln.middle_total}`}
                      </div>
                      <div
                        className={classes.low}
                      >{`${rowData.vuln.low_count} / ${rowData.vuln.low_total}`}</div>
                    </div>
                  );
                },
              },
              { title: "최근이행일", field: "lastDate" },
              { title: "차수", field: "count", cellStyle: { width: "5.4%" } },
              { title: "상태", field: "status" },
            ]}
            data={cloudList as IEntire[]}
          />
        </div>
      </div>
    </div>
  );
}
