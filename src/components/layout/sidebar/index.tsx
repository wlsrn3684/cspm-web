import React from "react";
import { sidebarStyles } from "./styles";
import Row from "./row";
import { DonutLarge } from "@material-ui/icons";
import useToggle from "../../../hooks/useToggle";
import { useHistory } from "react-router-dom";

export default function Sidebar(): JSX.Element {
  const classes = sidebarStyles();
  const history = useHistory();
  const { isToggle } = useToggle();

  return (
    <React.Fragment>
      <div
        className={`${classes.space} ${isToggle && classes.toggleSpace}`}
      ></div>
      <div className={`${classes.mainContainer} ${isToggle && classes.toggle}`}>
        <div className={classes.siteTitle}>
          <div
            className={classes.siteIcon}
            onClick={() => {
              history.push("/service/dashboard");
            }}
          >
            <DonutLarge />
          </div>
          <div
            className={classes.siteName}
            onClick={() => {
              history.push("/service/dashboard");
            }}
          >
            {!isToggle && "DDDG"}
          </div>
        </div>
        <div className={classes.contentWrapper}>
          <Row text="대시보드" url="/service/dashboard" menus={[]} />
          <Row text="자산관리" url="/service/asset" menus={[]} />
          <Row
            text="취약점관리"
            url="/service/manage"
            menus={["취약점검사", "취약점현황", "이행점검", "전체점검현황"]}
          />
          <Row text="체크리스트" url="/service/checklist" menus={[]} />
          <Row text="설정" url="/service/setting" menus={[]} />
        </div>
      </div>
    </React.Fragment>
  );
}
