import React, { useState, useEffect, useRef } from "react";
import { groupedBarStyles } from "./styles";
import * as d3 from "d3";

interface IGroupProps {
  setAssessment: React.Dispatch<React.SetStateAction<string>>;
  data: IHistory[];
  assessment: string;
}

interface IHistory {
  id: string;
  service: string;
  platform: string;
  lastDate: string;
  vuln: {
    high_total: string;
    high_count: string;
    middle_total: string;
    middle_count: string;
    low_total: string;
    low_count: string;
  };
}

interface IGroup {
  id: string;
  state: string;
  high: number;
  middle: number;
  low: number;
}

type IGroupKey = "high" | "middle" | "low";

const keys = ["high", "middle", "low"];

const margin = { top: 30, right: 30, bottom: 10, left: 20 };
const height = 420 - margin.top - margin.bottom,
  width = 910;

const groupKey = "state";

const color = d3.scaleOrdinal(["#c24a4e", "#ba8e27", "#BCBD22"]);

const legend = (g: any) => {
  const legendG = g
    .attr("class", "legend")
    .attr("transform", `translate(${width}, 0)`)
    .attr("text-anchor", "end")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .selectAll("g")
    .data(color.domain())
    .join("g")
    .attr("transform", (d: any, i: any) => `translate(0, ${i * 20})`);

  legendG
    .append("rect")
    .attr("x", -18)
    .attr("width", 18)
    .attr("height", 18)
    .attr("fill", (d: any) => color(d));

  legendG
    .append("text")
    .attr("x", -28)
    .attr("y", 9.5)
    .attr("dy", "0.35em")
    .text((d: any) => d)
    .attr("stroke", "#667597")
    .attr("font-weight", 100);
};

export default function GroupedBar(props: IGroupProps): JSX.Element {
  const classes = groupedBarStyles();
  const groupedBarContainer = useRef(null);
  const [filteredData, setFilteredData] =
    useState<IHistory[] | undefined>(undefined);
  const [graphData, setGraph] = useState<IGroup[]>([]);

  useEffect(() => {
    let temp: IHistory[] = [];
    props.data?.map((o) => {
      let check = true;
      for (let value of temp) {
        if (value.id === o.id) {
          check = false;
          break;
        }
      }
      if (check) {
        temp.push(o);
      }
    });
    if (props.assessment == "" && temp.length > 0)
      props.setAssessment(temp[0].id);

    setFilteredData(temp);
  }, [props.data]);

  useEffect(() => {
    let temp: IGroup[] = [];

    filteredData?.map((o) => {
      temp.push({
        id: o.id,
        state: o.service,
        high: Number(o.vuln.high_count),
        middle: Number(o.vuln.middle_count),
        low: Number(o.vuln.low_count),
      });
    });

    if (filteredData) {
      for (let i = 0; i < 7 - filteredData.length; i++) {
        let name = "";
        for (let j = 0; j < i; j++) name += "ㅤ";

        temp.push({
          id: "",
          state: name,
          high: 0,
          middle: 0,
          low: 0,
        });
      }
    }

    setGraph(temp);
  }, [filteredData]);

  useEffect(() => {
    if (graphData && groupedBarContainer.current) {
      d3.select(groupedBarContainer.current)?.selectAll("g").remove();

      const x0 = d3
        .scaleBand()
        .domain(graphData.map((d) => d[groupKey]))
        .rangeRound([margin.left, width - margin.right])
        .paddingInner(0.1);

      const x1 = d3
        .scaleBand()
        .domain(keys)
        .rangeRound([0, x0.bandwidth()])
        .padding(0.05);

      const y = d3
        .scaleLinear()
        .domain([0, 200])
        .nice()
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g: any) =>
        g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x0).tickSizeOuter(0))
          .call((g: any) => g.select(".domain").remove())
          .attr("stroke", "#667597")
          .attr("font-weight", 100);

      const yAxis = (g: any) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y).ticks(null, "s"))
          .call((g: any) => g.select(".domain").remove())
          .call((g: any) =>
            g
              .select(".tick:last-of-type text")
              .clone()
              .attr("x", 3)
              .attr("text-anchor", "start")
              .attr("font-weight", "bold")
          )
          .attr("stroke", "#667597")
          .attr("font-weight", 100);

      const svg = d3.select(groupedBarContainer.current);

      svg
        .append("g")
        .selectAll("g")
        .data(graphData)
        .join("g")
        .on("click", (d, i: any) => {
          props.setAssessment(i.id);
        })
        .attr("transform", (d) => `translate(${x0(d[groupKey])}, 0)`)
        .selectAll("rect")
        .data((d) => keys.map((key) => ({ key, value: d[key as IGroupKey] })))
        .join("rect")
        .attr("x", (d: any): any => x1(d.key))
        .attr("y", y(0) as number)
        .attr("width", x1.bandwidth())
        .attr("height", 0)
        .attr("fill", (d): any => color(d.key));

      svg
        .selectAll("rect")
        .transition()
        .ease(d3.easeCubicInOut)
        .duration(300)
        .attr("y", (d: any): any => y(d.value))
        .attr("height", (d: any) => (y(0) as number) - (y(d.value) as number))
        .delay((d, i) => Math.floor(i / keys.length) * 100);

      svg.append("g").call(xAxis);
      svg.append("g").call(yAxis);
      svg.append("g").call(legend);

      svg.selectAll("line").attr("stroke", "#3B4766").attr("font-weight", 100);
    }
  }, [graphData, groupedBarContainer.current]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.title}>계정별 시스템 현황</div>
      </div>
      <div className={classes.contentWrapper}>
        <svg ref={groupedBarContainer} width={width} height={height + 10} />
      </div>
    </div>
  );
}
