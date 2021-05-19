import React, { useState, useEffect, useRef } from "react";
import { dashboardStyles } from "./styles";

export default function Score(): JSX.Element {
  const classes = dashboardStyles();
  const scoreGraphContainer = useRef(null);
  const [scoreData, setScore] = useState();

  useEffect(() => {
    setScore(undefined);

    if (scoreData && scoreGraphContainer.current) {
    }
  }, [scoreData, scoreGraphContainer.current]);

  return <div></div>;
}
