import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { donutStyle } from "./styles";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

interface IDonutProps {
  data: IDonut[];
  historyId: string;
  serviceByData: IRadarList;
}

export interface IDonut {
  name: string;
  value: number;
}

interface IRadar {
  area: string;
  value: number;
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

interface IFilter {
  IAM: boolean;
  EC2: boolean;
  CloudFront: boolean;
  CloudTrail: boolean;
  CloudWatch: boolean;
  S3: boolean;
  RDS: boolean;
  Lambda: boolean;
  EBS: boolean;
  KMS: boolean;
  Cost: boolean;
  VPC: boolean;
}

interface IServiceByData {
  IAM: IDonut[];
  EC2: IDonut[];
  CloudFront: IDonut[];
  CloudTrail: IDonut[];
  CloudWatch: IDonut[];
  S3: IDonut[];
  RDS: IDonut[];
  Lambda: IDonut[];
  EBS: IDonut[];
  KMS: IDonut[];
  Cost: IDonut[];
  VPC: IDonut[];
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

const width = 300,
  height = 280,
  radius = Math.min(width, height) / 2;

const color = d3.scaleOrdinal(["#1F77B4", "#c24a4e", "#ba8e27", "#BCBD22"]);

const arc = d3
  .arc()
  .outerRadius(radius - 10)
  .innerRadius(radius - 70);

const pie = d3
  .pie<IDonut>()
  .sort(null)
  .startAngle(1.1 * Math.PI)
  .endAngle(3.1 * Math.PI)
  .value(function (d) {
    return d.value;
  });

export default function Donut(props: IDonutProps): JSX.Element {
  const donutContainer = useRef(null);
  const classes = donutStyle();

  const [donutData, setDonut] = useState<IDonut[]>([]);
  const [tempList, setList] = useState<IFilter>({
    IAM: false,
    EC2: false,
    S3: false,
    RDS: false,
    VPC: false,
    CloudFront: false,
    CloudTrail: false,
    CloudWatch: false,
    Lambda: false,
    EBS: false,
    KMS: false,
    Cost: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setList({
      ...tempList,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    let temp: IDonut[] = [
      { name: "pass", value: 0 },
      { name: "high", value: 0 },
      { name: "middle", value: 0 },
      { name: "low", value: 0 },
    ];

    if (
      !tempList.CloudFront &&
      !tempList.CloudTrail &&
      !tempList.CloudWatch &&
      !tempList.Cost &&
      !tempList.EBS &&
      !tempList.EC2 &&
      !tempList.IAM &&
      !tempList.KMS &&
      !tempList.Lambda &&
      !tempList.RDS &&
      !tempList.S3 &&
      !tempList.VPC
    ) {
      temp = props.data;
    } else {
      for (let key in props.serviceByData) {
        if (tempList[key as IRadarType]) {
          props.serviceByData[key as IRadarType][0].map((o) => {
            temp[0].value += o.value;
          });

          props.serviceByData[key as IRadarType][1].map((o) => {
            temp[1].value += o.value;
          });

          props.serviceByData[key as IRadarType][2].map((o) => {
            temp[2].value += o.value;
          });

          props.serviceByData[key as IRadarType][3].map((o) => {
            temp[3].value += o.value;
          });
        }
      }
    }

    setDonut(temp);
  }, [tempList]);

  useEffect(() => {
    setDonut(props.data);
    setList({
      IAM: false,
      EC2: false,
      S3: false,
      RDS: false,
      VPC: false,
      CloudFront: false,
      CloudTrail: false,
      CloudWatch: false,
      Lambda: false,
      EBS: false,
      KMS: false,
      Cost: false,
    });
  }, [props.data]);

  useEffect(() => {
    if (donutData && donutContainer.current) {
      d3.select("body").selectAll(".tooltip").remove();
      d3.select(donutContainer.current)?.selectAll("g").remove();

      const legend = (g: any) => {
        const legendG = g
          .attr("class", "legend")
          .attr("transform", `translate(${width}, 0)`)
          .attr("text-anchor", "end")
          .attr("font-family", "sans-serif")
          .attr("font-size", 10)
          .selectAll("g")
          .data(donutData)
          .join("g")
          .attr("transform", (d: any, i: any) => `translate(0, ${i * 14})`);

        legendG
          .append("rect")
          .attr("x", -303)
          .attr("y", -30)
          .attr("width", 12)
          .attr("height", 12)
          .attr("fill", (d: any, i: any) => color(i));

        legendG
          .append("text")
          .attr("x", -308)
          .attr("y", -25)
          .attr("dy", "0.35em")
          .text((d: any, i: any) => d.name)
          .attr("stroke", "#667597")
          .attr("font-weight", 100);
      };

      const div = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("width", "48px")
        .style("height", "23px")
        .style("padding", "2px")
        .style("border-radius", "8px")
        .style("text-align", "center")
        .style("line-height", "19px")
        .style("font-size", "16px")
        .style("font-weight", 700)
        .style("background", "#ebebeb");

      const svg = d3
        .select(donutContainer.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      const g = svg
        .selectAll(".arc")
        .data(pie(donutData))
        .enter()
        .append("g")
        .attr("class", "arc")
        .on("mouseover", () => {
          div.transition().duration(200).style("opacity", 0.9);
        })
        .on("mouseout", () => {
          div.transition().duration(400).style("opacity", 0);
          div.style("left", 0 + "px").style("top", 0 + "px");
        })
        .on("mousemove", (d: any, i: any) => {
          const elements = document.getElementsByClassName("arc");
          let index = -1;

          for (let idx = 0; idx < elements.length; idx++) {
            if (d.target.parentNode == elements[idx]) {
              index = idx;
              break;
            }
          }

          if (index !== -1) {
            div
              .html(i.data.value)
              .style("color", color(i.data.name))
              .style("left", d.pageX + 12 + "px")
              .style("top", d.pageY - 28 + "px");
          }
        });

      svg.append("g").call(legend);

      g.append("path")
        .style("fill", function (d) {
          return color(d.data.name);
        })
        .transition()
        .delay(function (d, i) {
          return i * 500;
        })
        .duration(500)
        .attrTween("d", function (d: any): any {
          var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
          return function (t: any) {
            d.endAngle = i(t);
            return arc(d);
          };
        });
    }
  }, [props.historyId, donutData, donutContainer.current]);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.title}>보안성점수</div>
      </div>
      <div className={classes.contentWrapper}>
        <svg ref={donutContainer} width={width} height={height} />
        <div className={classes.checkboxWrapper}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.EC2}
                  onChange={handleChange}
                  name="EC2"
                  color="primary"
                />
              }
              label="EC2"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.IAM}
                  onChange={handleChange}
                  name="IAM"
                  color="primary"
                />
              }
              label="IAM"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.S3}
                  onChange={handleChange}
                  name="S3"
                  color="primary"
                />
              }
              label="S3"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.RDS}
                  onChange={handleChange}
                  name="RDS"
                  color="primary"
                />
              }
              label="RDS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.VPC}
                  onChange={handleChange}
                  name="VPC"
                  color="primary"
                />
              }
              label="VPC"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.CloudFront}
                  onChange={handleChange}
                  name="CloudFront"
                  color="primary"
                />
              }
              label="CloudFront"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.CloudTrail}
                  onChange={handleChange}
                  name="CloudTrail"
                  color="primary"
                />
              }
              label="CloudTrail"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.CloudWatch}
                  onChange={handleChange}
                  name="CloudWatch"
                  color="primary"
                />
              }
              label="CloudWatch"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.Lambda}
                  onChange={handleChange}
                  name="Lambda"
                  color="primary"
                />
              }
              label="Lambda"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.EBS}
                  onChange={handleChange}
                  name="EBS"
                  color="primary"
                />
              }
              label="EBS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.KMS}
                  onChange={handleChange}
                  name="KMS"
                  color="primary"
                />
              }
              label="KMS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempList.Cost}
                  onChange={handleChange}
                  name="Cost"
                  color="primary"
                />
              }
              label="Cost"
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
