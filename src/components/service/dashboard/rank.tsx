import React, { useState, useEffect, useRef } from "react";
import { RankStyles } from "./styles";
import * as d3 from "d3";

interface IRankProps {
  data: IRank[];
}

interface IRank {
  name: string;
  value: number;
}

const dummy: IRank[] = [
  { name: "IAM", value: 5 },
  { name: "EC2", value: 1 },
  { name: "S3", value: 2 },
  { name: "RDS", value: 5 },
  { name: "VPC", value: 5 },
  { name: "CloudFront", value: 3 },
  { name: "CloudTrail", value: 10 },
  { name: "CloudWatch", value: 9 },
  { name: "Lambda", value: 11 },
  { name: "KMS", value: 12 },
  { name: "EBS", value: 5 },
  { name: "Cost", value: 5 },
];

const margin = { top: 60, right: 20, bottom: 30, left: 25 },
  width = 1550 - margin.left - margin.right,
  height = 350 - margin.top - margin.bottom;

export default function Rank(props: IRankProps): JSX.Element {
  const classes = RankStyles();
  const rankGraphContainer = useRef(null);
  const [rankData, setRank] = useState<IRank[] | undefined>(undefined);

  function compare(a: IRank, b: IRank) {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    let sortedData: IRank[] = props.data.sort(compare);

    setRank(sortedData);
  }, [props.data]);

  useEffect(() => {
    if (rankData && rankGraphContainer.current) {
      d3.select(rankGraphContainer.current)?.selectAll("g").remove();

      const x = d3.scaleBand().range([0, width]).padding(0.1);
      const y = d3.scaleLinear().range([height, 0]);

      const svg = d3
        .select(rankGraphContainer.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(rankData.map((d) => d.name));

      y.domain([0, d3.max(rankData, (d): any => d.value)]);

      svg
        .selectAll(".bar")
        .data(rankData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", "#0475E9")
        .attr("fill-opacity", 0.4)
        .attr("x", (d): any => (x(d.name) as number) + 40)
        .attr("width", x.bandwidth() - 80)
        .attr("y", (d) => height)
        .attr("height", 0);

      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .attr("stroke", "#667597")
        .attr("font-weight", 100);

      svg
        .append("g")
        .call(d3.axisLeft(y))
        .attr("stroke", "#667597")
        .attr("font-weight", 100);

      svg.selectAll("path").attr("stroke", "#3B4766").attr("font-weight", 100);
      svg.selectAll("line").attr("stroke", "#3B4766").attr("font-weight", 100);

      svg
        .selectAll(".bar")
        .data(rankData)
        .transition()
        .duration(800)
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => height - y(d.value));
    }
  }, [rankData, rankGraphContainer.current]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.title}>서비스 별 랭킹</div>
      </div>
      <div className={classes.contentWrapper}>
        <svg ref={rankGraphContainer} width={width} height={height}></svg>
      </div>
    </div>
  );
}
