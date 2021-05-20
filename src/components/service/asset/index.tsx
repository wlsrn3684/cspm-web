import React, { useState, useEffect } from "react";
import { cloudStyles } from "./styles";
import Card from "./card";
import { Add } from "@material-ui/icons";
import Modal from "./modal";
import { requestInit } from "../../../constant/requestInit";
import Swal from "sweetalert2";

type IProvider = "AWS" | "AZURE" | "GCP";

interface ICloudList {
  id: string;
  systemId: string;
  manager: string;
  platform: IProvider;
  type: string;
  name: string;
  accessKey: string;
  secretKey: string;
}

export default function Cloud() {
  const classes = cloudStyles();
  const [modal, setModal] = useState<boolean>(true);
  const [setting, setSetting] = useState<boolean>(false);
  const [accountId, setAccountId] = useState<string>("");
  const [cloudList, setCloudList] =
    useState<ICloudList[] | undefined>(undefined);

  useEffect(() => {
    if (document.cookie === "path=/" || document.cookie === "") {
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

    fetch(
      "http://localhost:4000/api/asset",
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
            setCloudList(res.accounts);
          }
        }
      });
  }, []);

  return (
    <React.Fragment>
      <div className={classes.mainContainer}>
        <div className={classes.header}>
          <div className={classes.headerText}>자산관리</div>
        </div>
        <div className={classes.content}>
          <div className={classes.contentHeader}></div>
          <div className={classes.cardWrapper}>
            {cloudList?.map((o, idx) => (
              <Card
                name={o.name}
                provider={o.platform}
                account_id={o.id}
                key={`Asset-Card-${idx}`}
                setAccountId={setAccountId}
                setSetting={setSetting}
                setModal={setModal}
              />
            ))}
            <div>
              <div
                className={classes.add}
                onClick={() => {
                  setAccountId("");
                  setSetting(false);
                  setModal(false);
                }}
              >
                <Add />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${classes.overlay} ${modal && classes.visibility}`}
          onClick={() => {
            setAccountId("");
            setSetting(false);
            setModal(true);
          }}
        ></div>
        <Modal
          modal={modal}
          setModal={setModal}
          accountId={accountId}
          setting={setting}
          setAccountId={setAccountId}
          setSetting={setSetting}
        />
      </div>
    </React.Fragment>
  );
}
