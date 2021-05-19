import React, { useState } from "react";
import { cardStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { Settings } from "@material-ui/icons";

type IProvider = "AWS" | "AZURE" | "GCP";

interface ICardProps {
  name: string;
  provider: IProvider;
  account_id: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSetting: React.Dispatch<React.SetStateAction<boolean>>;
  setAccountId: React.Dispatch<React.SetStateAction<string>>;
}

export default function Card(props: ICardProps): JSX.Element {
  const classes = cardStyles();
  const history = useHistory();

  return (
    <div>
      <div
        className={classes.settingLogo}
        onClick={() => {
          props.setAccountId(props.account_id);
          props.setSetting(true);
          props.setModal(false);
        }}
      >
        <Settings />
      </div>
      <div
        className={classes.mainContainer}
        onClick={() => {
          history.push(`/service/asset/detail?account_id=${props.account_id}`);
        }}
      >
        <div
          className={classes.provider}
          style={{
            backgroundImage: `url('/images/${props.provider}.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className={classes.name}>{props.name}</div>
      </div>
    </div>
  );
}
