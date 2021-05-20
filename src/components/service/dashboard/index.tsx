import React, { useEffect, useState } from "react";
import { dashboardStyles } from "./styles";
import Rank from "./rank";
import Swal from "sweetalert2";
import Table from "./table";
import Donut from "./donut";
import GroupedBar from "./groupbar";
import Radar from "./radar";
import { requestInit } from "../../../constant/requestInit";
import Vlun from "./vuln";
import { AWSChecklist } from "../../../constant/checklist";
import { API_SERVER_URL } from "../../../constant/serverUrl";

export interface IDonut {
  name: string;
  value: number;
}

interface IRadar {
  area: string;
  value: number;
}

interface IHistory {
  id: string;
  historyId: string;
  service: string;
  platform: string;
  lastDate: string;
  vuln: IVuln;
}

interface IVuln {
  high_total: string;
  high_count: string;
  middle_total: string;
  middle_count: string;
  low_total: string;
  low_count: string;
}

type IVulnType =
  | "high_total"
  | "high_count"
  | "middle_total"
  | "middle_count"
  | "low_total"
  | "low_count";

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

interface IRadarList {
  IAM: IRadar[][];
  EC2: IRadar[][];
  CloudFront: IRadar[][];
  CloudTrail: IRadar[][];
  CloudWatch: IRadar[][];
  S3: IRadar[][];
  RDS: IRadar[][];
  Lambda: IRadar[][];
  EBS: IRadar[][];
  KMS: IRadar[][];
  Cost: IRadar[][];
  VPC: IRadar[][];
}

interface IRank {
  name: string;
  value: number;
}

type IRadarType =
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
  | "Cost";

export default function Dashboard(): JSX.Element {
  const classes = dashboardStyles();
  const [accountList, setAccount] = useState<string[]>([]);
  const [assessment, setAssessment] = useState<string>("");
  const [vuln, setVuln] = useState<IVuln | undefined>(undefined);
  const [accountInfo, setAccountInfo] = useState<IAccountInfo[]>([]);
  const [history, setHistory] = useState<IHistory[] | undefined>(undefined);
  const [tableData, setTable] = useState<IHistory[] | undefined>(undefined);
  const [donutData, setDonut] = useState<IDonut[] | undefined>(undefined);
  const [historyId, setHistoryId] = useState<string>("");
  const [vulnList, setVulnList] = useState<IVulnList[] | undefined>(undefined);
  const [radarData, setRadar] = useState<IRadarList>({
    IAM: [[{ area: "initail", value: -1 }], [], [], []],
    EC2: [[{ area: "initail", value: -1 }], [], [], []],
    CloudFront: [[{ area: "initail", value: -1 }], [], [], []],
    CloudTrail: [[{ area: "initail", value: -1 }], [], [], []],
    CloudWatch: [[{ area: "initail", value: -1 }], [], [], []],
    S3: [[{ area: "initail", value: -1 }], [], [], []],
    RDS: [[{ area: "initail", value: -1 }], [], [], []],
    Lambda: [[{ area: "initail", value: -1 }], [], [], []],
    EBS: [[{ area: "initail", value: -1 }], [], [], []],
    KMS: [[{ area: "initail", value: -1 }], [], [], []],
    Cost: [[{ area: "initail", value: -1 }], [], [], []],
    VPC: [[{ area: "initail", value: -1 }], [], [], []],
  });
  const [rankData, setRankData] = useState<IRank[]>([]);

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

  const setRisk = async (assessmentList: IHistory[]) => {
    let temp: IHistory[] = [];

    await assessmentList.map(async (o, idx) => {
      await fetch(
        `http://localhost:4000/api/history?assessment_id=${o.id}`,
        requestInit("GET")
      )
        .then(async (res2) => res2.json())
        .then(async (res2) => {
          if (Array.isArray(res2.histories)) {
            res2.histories.map((x: any) => {
              temp.push({
                historyId: x.id,
                vuln: {
                  high_total: x.high_total,
                  high_count: x.high_count,
                  middle_total: x.middle_total,
                  middle_count: x.middle_count,
                  low_total: x.low_total,
                  low_count: x.low_count,
                },
                lastDate: x.start_date,
                id: o.id,
                platform: o.platform,
                service: o.service,
              });
            });
          } else {
            temp.push({
              historyId: "",
              vuln: {
                high_total: "0",
                high_count: "0",
                middle_total: "0",
                middle_count: "0",
                low_total: "0",
                low_count: "0",
              },
              lastDate: "진단이력 없음",
              id: o.id,
              platform: o.platform,
              service: o.service,
            });
          }
        });

      if (assessmentList.length - 1 == idx) {
        setHistory(temp);
      }
    });
  };

  const getHistory = async () => {
    let historyList: IHistory[] = [];

    await accountList.map(async (o: any, idx: number) => {
      await fetch(
        `http://localhost:4000/api/assessment?account_id=${o}`,
        requestInit("GET")
      )
        .then(async (res) => res.json())
        .then(async (res) => {
          if (res.result === true) {
            await res.assessments.map(async (x: any) => {
              let asseement: IHistory = {
                id: x.id,
                historyId: "",
                service: "",
                platform: "",
                lastDate: "",
                vuln: {
                  high_total: "",
                  high_count: "",
                  middle_total: "",
                  middle_count: "",
                  low_total: "",
                  low_count: "",
                },
              };

              accountInfo.map((y: IAccountInfo) => {
                if (o == y.id) {
                  asseement.platform = y.platform;
                  asseement.service = y.name;
                }
              });

              historyList.push(asseement);
            });
          }
        });

      if (accountList.length - 1 == idx) {
        await setRisk(historyList);
      }
    });
  };

  const getVulnList = async () => {
    let vuln_List: IVulnList[] = [];

    await fetch(`${API_SERVER_URL}/assessment-results?historyId=${historyId}`)
      .then((res3) => res3.json())
      .then(async (res3) => {
        if (Array.isArray(res3)) {
          await res3.map(async (y: any, idx2: number) => {
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

            await y.rawData.split("").map((o: any) => {
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

            await result.split("datetime.datetime(").map((o, idx) => {
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
              service: y.service,
              chkIndex: y.chkIndex,
              name: name,
              risk: risk,
              status: y.result,
              summary: JSON.parse(
                result.replace(/True/g, "true").replace(/False/g, "false")
              ).summary,
              raw_data: result,
            });

            if (res3.length - 1 == idx2) {
              await setVulnList(vuln_List);
            }
          });
        }
      });
  };

  useEffect(() => {
    if (document.cookie === "path=/" || document.cookie === "") {
      document.cookie = "token=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
      localStorage.removeItem("systemId");

      Swal.fire({
        icon: "error",
        title: "로그인 에러",
        text: "로그인 후에 이용해주세요.",
        heightAuto: false,
      }).then(() => {
        window.location.href = "/login";
        return;
      });
    }

    getAccountList();
  }, []);

  useEffect(() => {
    getHistory();
  }, [accountList]);

  useEffect(() => {
    let temp: IHistory[] = [];

    history?.map((o) => {
      if (o.id === assessment) temp.push(o);
    });
    setTable(temp);
    if (temp.length > 0) {
      setVuln(temp[0].vuln);
      setHistoryId(temp[0].historyId);
    }
  }, [assessment]);

  useEffect(() => {
    getVulnList();
  }, [historyId]);

  useEffect(() => {
    let temp: IDonut[] = [];
    if (vuln) {
      temp.push({
        name: "pass",
        value:
          Number(vuln.high_total) +
          Number(vuln.middle_total) +
          Number(vuln.low_total) -
          Number(vuln.high_count) -
          Number(vuln.middle_count) -
          Number(vuln.low_count),
      });
      for (let value in vuln) {
        if (value == "high_count")
          temp.push({ name: "high", value: Number(vuln[value as IVulnType]) });
        if (value == "middle_count")
          temp.push({
            name: "middle",
            value: Number(vuln[value as IVulnType]),
          });
        if (value == "low_count")
          temp.push({ name: "low", value: Number(vuln[value as IVulnType]) });
      }
    }
    setDonut(temp);
  }, [vuln]);

  useEffect(() => {
    if (vulnList) {
      let tempRank: IRank[] = [
        { name: "IAM", value: 0 },
        { name: "EC2", value: 0 },
        { name: "S3", value: 0 },
        { name: "RDS", value: 0 },
        { name: "VPC", value: 0 },
        { name: "CloudFront", value: 0 },
        { name: "CloudTrail", value: 0 },
        { name: "CloudWatch", value: 0 },
        { name: "Lambda", value: 0 },
        { name: "KMS", value: 0 },
        { name: "EBS", value: 0 },
        { name: "Cost", value: 0 },
      ];

      let temp: IRadarList = {
        IAM: [
          [
            { area: "계정 관리", value: 0 },
            { area: "권한 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "계정 관리", value: 0 },
            { area: "권한 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "계정 관리", value: 0 },
            { area: "권한 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "계정 관리", value: 0 },
            { area: "권한 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
        ],
        EC2: [
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
        ],
        CloudFront: [
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
        ],
        CloudTrail: [
          [
            { area: "암호화", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "암호화", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "암호화", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "암호화", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
        ],
        CloudWatch: [
          [
            { area: "계정 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "계정 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "계정 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "계정 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
        ],
        S3: [
          [
            { area: "패치 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "패치 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "패치 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "패치 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
        ],
        RDS: [
          [
            { area: "로그 관리", value: 0 },
            { area: "백업 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "패치 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "로그 관리", value: 0 },
            { area: "백업 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "패치 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "로그 관리", value: 0 },
            { area: "백업 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "패치 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "로그 관리", value: 0 },
            { area: "백업 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "패치 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
        ],
        Lambda: [
          [
            { area: "권한 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "권한 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "권한 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "권한 관리", value: 0 },
            { area: "접근 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
        ],
        EBS: [
          [
            { area: "접근 관리", value: 0 },
            { area: "백업 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "백업 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "백업 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "백업 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
            { area: "암호화", value: 0 },
          ],
        ],
        KMS: [
          [
            { area: "접근 관리", value: 0 },
            { area: "암호화", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "암호화", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "암호화", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "암호화", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
        ],
        Cost: [
          [
            { area: "접근 관리", value: 0 },
            { area: "암호화", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "암호화", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "암호화", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "암호화", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
        ],
        VPC: [
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
          [
            { area: "접근 관리", value: 0 },
            { area: "로그 관리", value: 0 },
            { area: "서비스 관리", value: 0 },
          ],
        ],
      };

      vulnList.map((y, idx) => {
        let chk = "";

        for (let i = 0; i < 3 - String(y.chkIndex).length; i++) {
          chk += "0";
        }

        for (let check of AWSChecklist) {
          if (check.index == `${y.service}_${chk}${y.chkIndex}`) {
            for (let i = 0; i < 12; i++) {
              if (tempRank[i].name === y.service) {
                tempRank[i].value++;
                break;
              }
            }
            let riskIndex = -1;

            if (y.status === "Y") {
              riskIndex = 0;
            } else if (y.status === "N") {
              if (check.risk === "상") {
                riskIndex = 1;
              } else if (check.risk === "중") {
                riskIndex = 2;
              } else {
                riskIndex = 3;
              }
            }

            if (riskIndex !== -1) {
              let valueIndex = -1;

              for (
                let a = 0;
                a < temp[y.service as IRadarType][riskIndex]?.length || 0;
                a++
              ) {
                if (
                  temp[y.service as IRadarType][riskIndex][a].area ===
                  check.classification
                )
                  valueIndex = a;
              }

              if (valueIndex !== -1) {
                temp[y.service as IRadarType][riskIndex][valueIndex].value++;
              } else {
                temp[y.service as IRadarType][riskIndex].push({
                  area: check.classification,
                  value: 1,
                });
              }
            }

            break;
          }
        }
        if (vulnList.length - 1 === idx) {
          setRadar(temp);
          setRankData(tempRank);
        }
      });
    }
  }, [vulnList]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.headerText}>대시보드</div>
      </div>
      <div className={classes.content}>
        <div className={classes.contentHeader}></div>

        <div className={classes.row}>
          <div className={`${classes.cardWrapper} ${classes.width100}`}>
            <div className={classes.card}>
              <Rank data={rankData} />
            </div>
          </div>
        </div>

        <div className={classes.row}>
          <div className={`${classes.cardWrapper} ${classes.width60}`}>
            <div className={classes.card}>
              <GroupedBar
                data={history as IHistory[]}
                setAssessment={setAssessment}
                assessment={assessment}
              />
            </div>
          </div>
          <div className={`${classes.cardWrapper} ${classes.width40}`}>
            <div className={classes.card}>
              <Table
                data={tableData as IHistory[]}
                setVuln={setVuln}
                vuln={vuln as IVuln}
                setHistoryId={setHistoryId}
              />
            </div>
          </div>
        </div>

        <div className={classes.row}>
          <div className={`${classes.cardWrapper} ${classes.width100}`}>
            <div className={`${classes.card} ${classes.scoreText}`}>
              {`${
                (Number(vuln?.high_total) - Number(vuln?.high_count) * 2) * 3 +
                (Number(vuln?.middle_total) - Number(vuln?.middle_count) * 2) *
                  2 +
                (Number(vuln?.low_total) - Number(vuln?.low_count) * 2) * 1
              }점`}
            </div>
          </div>
        </div>

        <div className={classes.row}>
          <div className={`${classes.cardWrapper} ${classes.width30}`}>
            <div className={classes.card}>
              <Donut
                data={donutData as IDonut[]}
                historyId={historyId}
                serviceByData={radarData}
              />
            </div>
          </div>
          <div className={`${classes.cardWrapper} ${classes.width70}`}>
            <div className={classes.card}>
              <div>
                <div className={classes.title}>서비스별 취약점 현황</div>
              </div>
              <div className={classes.flex}>
                <Radar
                  historyId={historyId}
                  data={radarData.IAM}
                  service="IAM"
                />
                <Radar
                  historyId={historyId}
                  data={radarData.EC2}
                  service="EC2"
                />
                <Radar historyId={historyId} data={radarData.S3} service="S3" />
                <Radar
                  historyId={historyId}
                  data={radarData.RDS}
                  service="RDS"
                />
                <Radar
                  historyId={historyId}
                  data={radarData.CloudFront}
                  service="CloudFront"
                />
                <Radar
                  historyId={historyId}
                  data={radarData.CloudTrail}
                  service="CloudTrail"
                />
                <Radar
                  historyId={historyId}
                  data={radarData.CloudWatch}
                  service="CloudWatch"
                />
                <Radar
                  historyId={historyId}
                  data={radarData.EBS}
                  service="EBS"
                />
                <Radar
                  historyId={historyId}
                  data={radarData.Lambda}
                  service="Lambda"
                />
                <Radar
                  historyId={historyId}
                  data={radarData.KMS}
                  service="KMS"
                />
                <Radar
                  historyId={historyId}
                  data={radarData.Cost}
                  service="Cost"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.row}>
          <div className={`${classes.cardWrapper} ${classes.width100}`}>
            <div className={classes.card}>
              <Vlun vulnList={vulnList as IVulnList[]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
