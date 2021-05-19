import React, { useEffect, useState } from "react";
import { detailStyles } from "./styles";
import qs from "qs";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import { requestInit } from "../../../constant/requestInit";
import { API_SERVER_URL } from "../../../constant/serverUrl";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { AWSChecklist } from "../../../constant/checklist";
import { CachedTwoTone } from "@material-ui/icons";

interface IAssetDetail {
  service: string;
  resourceId: string;
  tag: { key: string; value: string }[];
  detail: IServiceDetail[];
}

interface IServiceDetail {
  assessment_id: string;
  date: string;
  service: string;
  chkIndex: string;
  name: string;
  risk: string;
}

interface IFetchData {
  accessKey: string;
  secretKey: string;
  regionName: string;
}

export default function AssetDetail({ location }: any): JSX.Element {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const classes = detailStyles();
  const history = useHistory();

  const [detailData, setDetail] =
    useState<IAssetDetail[] | undefined>(undefined);
  const [accountInfo, setAccountInfo] =
    useState<IFetchData | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getAccountInfo = async () => {
    await fetch(
      `http://localhost:4000/api/asset?id=${query.account_id}`,
      requestInit("GET")
    )
      .then((res) => res.json())
      .then(async (res) => {
        await setAccountInfo({
          accessKey: res.accounts[0].accessKey,
          secretKey: res.accounts[0].secretKey,
          regionName: res.accounts[0].region,
        });
      })
      .then(async () => {
        await getResourceInfo();
      });
  };

  const requestAccount = async () => {
    setDetail([]);
    localStorage.setItem("state", "isLoading");
    await fetch(
      `${API_SERVER_URL}/resources`,
      requestInit("POST", accountInfo)
    ).then(async () => {
      localStorage.removeItem("state");
      getResourceInfo();
    });
  };

  const getResourceInfo = async () => {
    let detail_list: IAssetDetail[] = [];

    let historyId = "";
    let assessment_id = "";
    let date = "";

    if (accountInfo) {
      await fetch(
        `${API_SERVER_URL}/resources?accessKey=${accountInfo.accessKey}`
      )
        .then((res) => res.json())
        .then(async (res) => {
          await res.map(async (o: any, idx: any) => {
            let temp: IAssetDetail = {
              service: o.service,
              resourceId: o.resourceId,
              tag: o.tag,
              detail: [],
            };

            await fetch(
              `${API_SERVER_URL}/assessment-results?resourceId=${o.resourceId}`
            )
              .then((res2) => res2.json())
              .then(async (res2) => {
                if (res2.length > 0) {
                  if (res2[0].history.historyId != historyId) {
                    historyId = res2[0].history.historyId;

                    await fetch(
                      `http://localhost:4000/api/history/id?id=${res2[0].history.historyId}`
                    )
                      .then((res3) => res3.json())
                      .then(async (res3) => {
                        if (res3.history) {
                          assessment_id = res3.history.assessment_id;
                          date = res3.history.start_date;
                        }
                      });
                  }

                  await res2.map(async (x: any) => {
                    let chk = "";

                    for (let i = 0; i < 3 - String(x.chkIndex).length; i++) {
                      chk += "0";
                    }

                    for (let check of AWSChecklist) {
                      if (check.index == `${x.service}_${chk}${x.chkIndex}`) {
                        temp.detail.push({
                          assessment_id: assessment_id,
                          date: date,
                          service: x.service,
                          chkIndex: x.chkIndex,
                          name: check.name,
                          risk: check.risk,
                        });

                        break;
                      }
                    }
                  });
                }
              })
              .then(() => {
                detail_list.push(temp);
              });
            if (res.length - 1 == idx) {
              setDetail(detail_list);
            }
          });
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

    getAccountInfo();
  }, []);

  useEffect(() => {
    getResourceInfo();
  }, [accountInfo]);

  useEffect(() => {
    if (localStorage.getItem("state")) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [detailData]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.headerText}>
          세부정보
          <Button
            variant="contained"
            color="primary"
            className={classes.headerButton}
            onClick={() => {
              history.push("/service/asset");
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
            title={
              <div className={classes.tableHeader}>
                <div className={classes.tableHeaderText}>자산목록</div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.headerButton}
                  onClick={async () => {
                    const account_id = query.account_id;
                    let assessment_manager;

                    const { value: getName } = await Swal.fire({
                      title: "점검 관리자를 입력해주세요.",
                      input: "text",
                      confirmButtonText: "확인",
                      showCancelButton: true,
                      cancelButtonText: "취소",
                      inputPlaceholder: "관리자명",
                      heightAuto: false,
                    });

                    if (getName) {
                      assessment_manager = getName;
                    } else return;

                    const body = {
                      account_id: account_id,
                      assessment_manager: assessment_manager,
                    };

                    let response = await fetch(
                      "http://localhost:4000/api/assessment",
                      requestInit("POST", body)
                    ).then((res) => res.json());

                    if (response.result) {
                      Swal.fire({
                        icon: "success",
                        title: "생성완료!",
                        text: "스캔 페이지로 이동하시겠습니까?",
                        showCancelButton: true,
                        heightAuto: false,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          history.push("/service/manage/scan");
                        }
                      });
                    }
                  }}
                >
                  진단 대기열 추가
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.headerButton}
                  onClick={requestAccount}
                >
                  리소스 목록 가져오기
                </Button>
                {isLoading && (
                  <CachedTwoTone className={`${classes.loadingIcon} loading`} />
                )}
              </div>
            }
            columns={[
              { title: "서비스", field: "service" },
              { title: "리소스 ID(ARN)", field: "resourceId" },
              { title: "태그", field: "tag", render: (rowData) => <div></div> },
              {
                title: "취약점 이력",
                field: "detail",
                render: (rowData) => <div></div>,
              },
            ]}
            data={detailData as IAssetDetail[]}
            options={{
              exportButton: true,
              selection: false,
            }}
            detailPanel={(rowData) => {
              if (rowData.detail.length > 0)
                return (
                  <div className={classes.innerTable}>
                    <table className={classes.table}>
                      <thead className={classes.thead}>
                        <tr className={classes.tr}>
                          <th className={classes.th}>진단번호</th>
                          <th className={classes.th}>일자</th>
                          <th className={classes.th}>서비스</th>
                          <th className={classes.th}>리스트번호</th>
                          <th className={classes.th}>항목명</th>
                          <th className={classes.th}>위험도</th>
                        </tr>
                      </thead>
                      <tbody className={classes.tbody}>
                        {rowData.detail.map((o, idx) => {
                          return (
                            <tr
                              className={classes.tr}
                              key={`service-detail-${idx}`}
                            >
                              <td className={classes.td}>{o.assessment_id}</td>
                              <td className={classes.td}>{o.date}</td>
                              <td className={classes.td}>{o.service}</td>
                              <td className={classes.td}>{o.chkIndex}</td>
                              <td className={classes.td}>{o.name}</td>
                              <td className={classes.td}>{o.risk}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
            }}
            onRowClick={(event, rowData, toggleDetailPanel: any) => {
              toggleDetailPanel();
            }}
          />
        </div>
      </div>
    </div>
  );
}
