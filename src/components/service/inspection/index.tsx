import React, { useEffect, useState } from "react";
import { inspectionStyles } from "./styles";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { requestInit } from "../../../constant/requestInit";
import { AWSChecklist } from "../../../constant/checklist";
import Swal from "sweetalert2";
import { API_SERVER_URL } from "../../../constant/serverUrl";

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

interface IVuln {
  id: string;
  assessment_id: string;
  high_total: string;
  high_count: string;
  middle_total: string;
  middle_count: string;
  low_total: string;
  low_count: string;
  start_date: string;
}

export default function Inspection() {
  const classes = inspectionStyles();
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
              title: "????????? ????????? ?????????????????????.",
              text: "?????? ????????? ????????????.",
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
            o.lastDate = res2.history.start_date.split(".")[0];
          } else {
            o.vuln.high_total = "0";
            o.vuln.high_count = "0";
            o.vuln.middle_total = "0";
            o.vuln.middle_count = "0";
            o.vuln.low_total = "0";
            o.vuln.low_count = "0";
            o.lastDate = "???????????? ??????";
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
              if (x.status == "????????????") {
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
              }
            });
          }
        });

      if (account_list.length - 1 == idx) {
        await setCount(assessmentList);
        await setRisk(assessmentList);
      }
    });
  };

  const postHistory = async (
    response: string,
    historyId: string,
    assessmentId: number
  ) => {
    if (response === "Complete") {
      let high_total = 0,
        middle_total = 0,
        low_total = 0,
        high_count = 0,
        middle_count = 0,
        low_count = 0;

      const assessment_results = await fetch(
        `${API_SERVER_URL}/assessment-results?historyId=${historyId}`
      )
        .then((res) => res.json())
        .then(async (res) => {
          if (Array.isArray(res)) {
            res.map((o) => {
              for (let d of AWSChecklist) {
                let chk = "";

                for (let i = 0; i < 3 - String(o.chkIndex).length; i++) {
                  chk += "0";
                }

                if (d.index == `${o.service}_${chk}${o.chkIndex}`) {
                  if (d.risk == "???") {
                    high_total++;
                    if (o.result == "N") {
                      high_count++;
                    }
                  } else if (d.risk == "???") {
                    middle_total++;
                    if (o.result == "N") {
                      middle_count++;
                    }
                  } else if (d.risk == "???") {
                    low_total++;
                    if (o.result == "N") {
                      low_count++;
                    }
                  }

                  break;
                }
              }
            });

            await fetch(
              `http://localhost:4000/api/history`,
              requestInit("POST", {
                id: historyId,
                assessment_id: assessmentId,
                high_total: high_total,
                high_count: high_count,
                middle_total: middle_total,
                middle_count: middle_count,
                low_total: low_total,
                low_count: low_count,
              })
            );
          }
        });
    }
  };

  useEffect(() => {
    if (document.cookie === "path=/" || document.cookie === "") {
      Swal.fire({
        icon: "error",
        title: "????????? ??????",
        text: "????????? ?????? ??????????????????.",
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
        <div className={classes.headerText}>???????????????</div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            history.push("/service/manage/scan");
          }}
        >
          ???????????????
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            history.push("/service/manage/vlun");
          }}
        >
          ???????????????
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            history.push("/service/manage/inspection");
          }}
        >
          ????????????
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.headerButton}
          onClick={() => {
            history.push("/service/manage/entire");
          }}
        >
          ??????????????????
        </Button>
      </div>

      <div className={classes.content}>
        <div className={classes.contentHeader}></div>
        <div className={classes.tableWrapper}>
          <MaterialTable
            title=""
            columns={[
              { title: "????????????", field: "id", cellStyle: { width: "6.5%" } },
              {
                title: "????????????",
                field: "service",
                cellStyle: { width: "6.5%" },
              },
              {
                title: "??????",
                field: "platform",
                cellStyle: { width: "4.8%" },
              },
              { title: "??????", field: "type", cellStyle: { width: "4.8%" } },
              {
                title: "???????????????",
                field: "operator",
                cellStyle: { width: "8%" },
              },
              {
                title: "???????????????",
                field: "assessmentManager",
                cellStyle: { width: "8%" },
              },
              {
                title: "?????????",
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
              { title: "???????????????", field: "lastDate" },
              { title: "??????", field: "count", cellStyle: { width: "4.8%" } },
              {
                title: "????????????",
                field: "",
                render: (rowData) => {
                  if (rowData.status == "?????????") {
                    return (
                      <div>
                        <Button
                          variant="contained"
                          disabled
                          className={classes.disabled}
                        >
                          ?????????
                        </Button>
                      </div>
                    );
                  }

                  return (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={async () => {
                        const rowInfo = await fetch(
                          `http://localhost:4000/api/assessment?id=${rowData.id}`,
                          requestInit("GET")
                        )
                          .then((res) => res.json())
                          .then((res) => {
                            if (res.result === true) {
                              return res.assessments[0];
                            }
                          });

                        if (rowInfo.status === "????????????") {
                          const keyData = await fetch(
                            `http://localhost:4000/api/asset?id=${rowInfo.accountId}`,
                            requestInit("GET")
                          )
                            .then((res) => res.json())
                            .then((res) => {
                              if (res.result === true) {
                                return res.accounts[0];
                              }
                            });

                          let date = new Date();
                          let dateInfo = String(date).split(" ");

                          let historyId = `${
                            rowInfo.accountId
                          }:${date.getFullYear()}:${
                            String(date.getMonth()).length == 1
                              ? "0" + String(date.getMonth())
                              : String(date.getMonth())
                          }:${dateInfo[2]}:${dateInfo[4]}`;

                          const body = {
                            historyId: btoa(historyId),
                            accessKey: keyData.accessKey,
                            secretKey: keyData.secretKey,
                            regionName: keyData.region,
                            services: [
                                  "EC2",
                                  "IAM",
                                  "RDS",
                                  "EBS",
                                  "S3",
                                  "CloudFront",
                                  "CloudWatch",
                                  "CloudTrail",
                                  "Lambda",
                                  "Cost",
                                  "KMS",
                                  "VPC",
                                ],
                          };

                          await fetch(
                            `http://localhost:4000/api/assessment/status`,
                            requestInit("PUT", {
                              status: "?????????",
                              id: rowData.id,
                            })
                          );

                          let changeList: IEntire[] = [];

                          await cloudList?.map((o, idx) => {
                            if (o.id !== rowData.id) {
                              changeList.push(o);
                            }
                          });

                          await setCloud(undefined);
                          await setCloud(changeList);

                          try {
                            const response = await fetch(
                              `${API_SERVER_URL}/assessment-results`,
                              requestInit("POST", body)
                            )
                              .then((res) => res.json())
                              .then(async (res) => {
                                if (res.message === "Complete") {
                                  await fetch(
                                    `http://localhost:4000/api/assessment/status`,
                                    requestInit("PUT", {
                                      status: "????????????",
                                      id: rowData.id,
                                    })
                                  );

                                  let changeList: IEntire[] = [];

                                  await cloudList?.map((o, idx) => {
                                    if (o.id !== rowData.id) {
                                      changeList.push(o);
                                    }
                                  });

                                  await setCloud(undefined);
                                  await setCloud(changeList);

                                  return res.message;
                                } else {
                                  await fetch(
                                    `http://localhost:4000/api/assessment/status`,
                                    requestInit("PUT", {
                                      status: "????????????",
                                      id: rowData.id,
                                    })
                                  );

                                  let changeList: IEntire[] = [];

                                  await cloudList?.map((o, idx) => {
                                    if (o.id !== rowData.id) {
                                      changeList.push(o);
                                    }
                                  });

                                  await setCloud(undefined);
                                  await setCloud(changeList);
                                }
                              });

                            await postHistory(
                              response,
                              body.historyId,
                              Number(rowData.id)
                            );
                          } catch (error) {
                            await fetch(
                              `http://localhost:4000/api/assessment/status`,
                              requestInit("PUT", {
                                status: "????????????",
                                id: rowData.id,
                              })
                            );

                            let changeList: IEntire[] = [];

                            await cloudList?.map((o, idx) => {
                              if (o.id !== rowData.id) {
                                changeList.push(o);
                              }
                            });

                            await setCloud(undefined);
                            await setCloud(changeList);
                          }
                        }
                      }}
                    >
                      ????????????
                    </Button>
                  );
                },
              },
            ]}
            data={cloudList as IEntire[]}
          />
        </div>
      </div>
    </div>
  );
}
