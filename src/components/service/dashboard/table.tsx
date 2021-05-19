import React, { useEffect } from "react";
import { dashboardStyles, tableStyles } from "./styles";

interface ITableProps {
  data: IHistory[];
  setVuln: React.Dispatch<React.SetStateAction<IVuln | undefined>>;
  vuln: IVuln;
  setHistoryId: React.Dispatch<React.SetStateAction<string>>;
}

interface IVuln {
  high_total: string;
  high_count: string;
  middle_total: string;
  middle_count: string;
  low_total: string;
  low_count: string;
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

export default function Table(props: ITableProps): JSX.Element {
  const classes = tableStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.title}>점검 이력</div>
      </div>
      <div className={classes.contentWrapper}>
        <table className={classes.table}>
          <thead>
            <tr className={classes.tr}>
              <th className={""}>서비스명</th>
              <th className={""}>구분</th>
              <th className={""}>최근 이행일</th>
              <th className={""}>취약점</th>
            </tr>
          </thead>
          <tbody className={classes.tbody}>
            {props.data?.map((o, idx) => (
              <tr
                className={classes.row}
                key={`dashboar-table-${idx}`}
                onClick={() => {
                  props.setVuln({
                    high_count: "0",
                    high_total: "0",
                    low_count: "0",
                    low_total: "0",
                    middle_count: "0",
                    middle_total: "0",
                  });

                  props.setVuln(o.vuln);
                  props.setHistoryId(o.historyId);
                }}
              >
                <td>{o.service}</td>
                <td>{o.platform}</td>
                <td>{o.lastDate.split(".")[0]}</td>
                <td>
                  <div className={classes.vulnWrapper}>
                    <div className={classes.high}>{o.vuln.high_count}</div>
                    <div className={classes.middle}>{o.vuln.middle_count}</div>
                    <div className={classes.low}>{o.vuln.low_count}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
