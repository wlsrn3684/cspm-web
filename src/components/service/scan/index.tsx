import React, { useEffect, useState } from "react";
import { scanStyles } from "./styles";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { requestInit } from "../../../constant/requestInit";
import { AWSChecklist } from "../../../constant/checklist";
import Swal from "sweetalert2";
import Modal from "./modal";
import { API_SERVER_URL } from "../../../constant/serverUrl";

interface IScan {
  id: string;
  service: string;
  platform: string;
  type: string;
  operator: string;
  assessmentManager: string;
  startDate: string;
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

type IStatus = "complete" | "processing" | "waiting" | "error";

export default function Scan() {
  const classes = scanStyles();
  const history = useHistory();

  const [cloudList, setCloud] = useState<IScan[] | undefined>(undefined);
  const [accountList, setAccount] = useState<string[]>([]);
  const [accountInfo, setAccountInfo] = useState<IAccountInfo[]>([]);
  const [modal, setModal] = useState<boolean>(true);

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

  const getAssessmentList = async (account_list: string[]) => {
    let assessmentList: IScan[] = [];

    await account_list.map(async (o: any, idx: number) => {
      let response = await fetch(
        `http://localhost:4000/api/assessment?account_id=${o}`,
        requestInit("GET")
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.result === true) {
            res.assessments.map((x: any) => {
              if (
                x.status === "점검대기" ||
                x.status === "점검중" ||
                x.status === "점검완료" ||
                x.status === "오류발생"
              ) {
                let asseement: IScan = {
                  assessmentManager: x.assessmentManager,
                  id: x.id,
                  operator: "",
                  platform: "",
                  service: "",
                  startDate: x.startDate,
                  status: x.status,
                  type: "",
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
          if (account_list.length - 1 == idx) {
            setCloud(assessmentList);
          }
        });
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
                  if (d.risk == "상") {
                    high_total++;
                    if (o.result == "N") {
                      high_count++;
                    }
                  } else if (d.risk == "중") {
                    middle_total++;
                    if (o.result == "N") {
                      middle_count++;
                    }
                  } else if (d.risk == "하") {
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
          variant="contained"
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
          variant="outlined"
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
            title={
              <div className={classes.title}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  진단 추가
                </Button>
              </div>
            }
            columns={[
              { title: "진단번호", field: "id" },
              { title: "서비스명", field: "service" },
              { title: "구분", field: "platform" },
              { title: "용도", field: "type" },
              { title: "운영담당자", field: "operator" },
              { title: "점검담당자", field: "assessmentManager" },
              { title: "점검일정", field: "startDate" },
              {
                title: "상태",
                field: "status",
                render: (rowData) => {
                  let color: IStatus = "error";
                  switch (rowData.status) {
                    case "점검완료":
                      color = "complete";
                      break;
                    case "점검중":
                      color = "processing";
                      break;
                    case "점검대기":
                      color = "waiting";
                      break;
                    default:
                      break;
                  }

                  return (
                    <div className={classes.status}>
                      <div
                        className={`${classes.circle} ${classes[color]}`}
                      ></div>
                      {rowData?.status}
                    </div>
                  );
                },
              },
              {
                title: "Actions",
                field: "action",
                render: (rowData) => {
                  if (rowData?.status === "점검완료")
                    return (
                      <div className={classes.buttonLayout}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            history.push(
                              `/service/manage/scan/detail?assessment_id=${rowData.id}`
                            );
                          }}
                        >
                          결과보기
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={async () => {
                            await fetch(
                              `http://localhost:4000/api/history/last?assessment_id=${rowData.id}`
                            )
                              .then((res) => res.json())
                              .then(async (res) => {
                                if (res.result) {
                                  await fetch(
                                    `${API_SERVER_URL}/assessment-results?historyId=${res.history.id}`
                                  )
                                    .then((res2) => res2.json())
                                    .then(async (res2) => {
                                      if (Array.isArray(res2)) {
                                        let high_count = 0,
                                          middle_count = 0,
                                          low_count = 0;

                                        let check = true;
                                        for (let i = 0; i < res2.length; i++) {
                                          if (res2[i].result === "?") {
                                            check = false;
                                            break;
                                          }

                                          let chk = "";
                                          let value_ =
                                            String(res2[i].chkIndex).length == 1
                                              ? 2
                                              : 1;

                                          for (let i = 0; i < value_; i++) {
                                            chk += "0";
                                          }

                                          for (let d of AWSChecklist) {
                                            if (
                                              d.index ==
                                              `${res2[i].service}_${chk}${res2[i].chkIndex}`
                                            ) {
                                              if (
                                                d.risk == "상" &&
                                                res2[i].result == "N"
                                              ) {
                                                high_count++;
                                              } else if (
                                                d.risk == "중" &&
                                                res2[i].result == "N"
                                              ) {
                                                middle_count++;
                                              } else if (
                                                d.risk == "하" &&
                                                res2[i].result == "N"
                                              ) {
                                                low_count++;
                                              }

                                              break;
                                            }
                                          }
                                        }
                                        if (check) {
                                          await fetch(
                                            `http://localhost:4000/api/assessment/status`,
                                            requestInit("PUT", {
                                              status: "이행대기",
                                              id: rowData.id,
                                            })
                                          );

                                          let changeList: IScan[] = [];

                                          await cloudList?.map((o, idx) => {
                                            if (o.id !== rowData.id) {
                                              changeList.push(o);
                                            }
                                          });

                                          await setCloud(undefined);
                                          await setCloud(changeList);

                                          await fetch(
                                            "http://localhost:4000/api/history",
                                            requestInit("PUT", {
                                              id: res.history.id,
                                              high_count: high_count,
                                              middle_count: middle_count,
                                              low_count: low_count,
                                            })
                                          );
                                        } else {
                                          Swal.fire({
                                            icon: "error",
                                            title: "점검이 완료되지 않았습니다",
                                            text: "인터뷰가 진행되지 않은 항목이 존재합니다",
                                            heightAuto: false,
                                          });
                                        }
                                      }
                                    });
                                }
                              });
                          }}
                        >
                          점검종료
                        </Button>
                      </div>
                    );

                  if (rowData?.status === "점검중")
                    return (
                      <div>
                        <Button
                          variant="contained"
                          disabled
                          className={classes.disabled}
                        >
                          점검중
                        </Button>
                      </div>
                    );

                  if (rowData?.status === "점검대기")
                    return (
                      <div>
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

                            if (rowInfo.status === "점검대기") {
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
                                  status: "점검중",
                                  id: rowData.id,
                                })
                              );

                              let changeList = cloudList;

                              await changeList?.map((o, idx) => {
                                if (o.id === rowData.id) {
                                  o.status = "점검중";
                                }
                              });

                              await setCloud(undefined);
                              await setCloud(changeList);

                              try {
                                const response = await fetch(
                                  `${API_SERVER_URL}/assessment-results`,
                                  requestInit("POST", body)
                                )
                                  .then((res) => {
                                    return res.json();
                                  })
                                  .then(async (res) => {
                                    if (res.message === "Complete") {
                                      await fetch(
                                        `http://localhost:4000/api/assessment/status`,
                                        requestInit("PUT", {
                                          status: "점검완료",
                                          id: rowData.id,
                                        })
                                      );

                                      let changeList = cloudList;

                                      await changeList?.map((o, idx) => {
                                        if (o.id === rowData.id) {
                                          o.status = "점검완료";
                                        }
                                      });

                                      await setCloud(undefined);
                                      await setCloud(changeList);

                                      return res.message;
                                    } else {
                                      await fetch(
                                        `http://localhost:4000/api/assessment/status`,
                                        requestInit("PUT", {
                                          status: "오류발생",
                                          id: rowData.id,
                                        })
                                      );

                                      let changeList = cloudList;

                                      await changeList?.map((o, idx) => {
                                        if (o.id === rowData.id) {
                                          o.status = "오류발생";
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
                                    status: "오류발생",
                                    id: rowData.id,
                                  })
                                );

                                let changeList = cloudList;

                                await changeList?.map((o, idx) => {
                                  if (o.id === rowData.id) {
                                    o.status = "오류발생";
                                  }
                                });

                                await setCloud(undefined);
                                await setCloud(changeList);
                              }
                            }
                          }}
                        >
                          점검시작
                        </Button>
                      </div>
                    );

                  if (rowData?.status === "오류발생")
                    return (
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            Swal.fire({
                              icon: "warning",
                              title: "삭제하시겠습니까?",
                              text: "",
                              heightAuto: false,
                              showCancelButton: true,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                fetch(
                                  "http://localhost:4000/api/assessment",
                                  requestInit("DELETE", { id: rowData.id })
                                )
                                  .then((res) => res.json())
                                  .then((res) => {
                                    if (res.result) {
                                      window.location.reload();
                                    }
                                  });
                              }
                            });
                          }}
                        >
                          진단삭제
                        </Button>
                      </div>
                    );
                },
              },
            ]}
            data={cloudList as IScan[]}
            options={{
              actionsColumnIndex: -1,
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
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}
