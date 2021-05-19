import React, { useState } from "react";
import { rowStyles } from "./styles";
import {
  DashboardOutlined,
  PlaylistAddCheck,
  Security,
  CloudQueue,
  SettingsOutlined,
} from "@material-ui/icons";
import useToggle from "../../../hooks/useToggle";
import { useHistory } from "react-router-dom";

interface IRowProps {
  text: string;
  url: string;
  menus: string[];
}

export default function Row(props: IRowProps): JSX.Element {
  const classes = rowStyles();
  const history = useHistory();
  const { isToggle } = useToggle();
  const [showDetail, setShow] = useState<boolean>(false);

  const handleShowDetail = () => {
    setShow(!showDetail);
  };

  const handleGoPage = (url: string) => {
    history.push(url);
  };

  return (
    <div className={classes.menuWrapper}>
      <div
        className={`${classes.rowWrapper} ${isToggle && classes.toggle} ${
          window.location.href.indexOf(props.url) != -1 && classes.active
        }`}
        onClick={() => {
          if (isToggle || props.menus.length === 0) {
            handleGoPage(props.url);
            return;
          }

          handleShowDetail();
        }}
      >
        <div className={classes.rowIcon}>
          {props.text === "대시보드" && <DashboardOutlined />}
          {props.text === "자산관리" && <CloudQueue />}
          {props.text === "취약점관리" && <Security />}
          {props.text === "체크리스트" && <PlaylistAddCheck />}
          {props.text === "설정" && <SettingsOutlined />}
        </div>
        <div className={classes.rowText}>{props.text}</div>
      </div>
      <div
        className={`${classes.subMenuWrapper} ${
          (isToggle || !showDetail) && classes.hide
        }`}
        style={{ height: `${props.menus.length * 36}px` }}
      >
        {props.menus.map((o, idx) => {
          let text = "";
          if (o == "취약점검사") text = "scan";
          else if (o == "취약점현황") text = "vlun";
          else if (o == "이행점검") text = "inspection";
          else text = "entire";

          return (
            <div
              className={`${classes.subMenu} ${isToggle && classes.toggleSub} ${
                window.location.href.indexOf(text) !== -1 && classes.subActive
              }`}
              onClick={() => {
                history.push(`${props.url}/${text.toLowerCase()}`);
              }}
              key={`row-${idx}`}
            >
              {o}
            </div>
          );
        })}
      </div>
    </div>
  );
}
