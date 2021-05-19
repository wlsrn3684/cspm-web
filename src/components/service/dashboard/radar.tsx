import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";
import { radarStyles } from "./styles";

interface IRadarProps {
  data: IRadar[][];
  service: string;
  historyId: string;
}

interface IRadar {
  area: string;
  value: number;
}

const initialData: IRadar[][] = [
  [
    { area: "category1", value: 50 },
    { area: "category2", value: 50 },
    { area: "category3", value: 50 },
    { area: "category4", value: 50 },
    { area: "category5", value: 50 },
    { area: "category6", value: 50 },
  ],
];

export default function Radar(props: IRadarProps): JSX.Element {
  const classes = radarStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.contentWrapper}>
        <RadarGraph {...props} />
        <div className={classes.service}>{props.service}</div>
      </div>
    </div>
  );
}

const RadarGraph = (props: IRadarProps): JSX.Element => {
  const radarContainer = useRef(null);

  let cfg = {
    radius: 2,
    w: 200,
    h: 200,
    factor: 1,
    factorLegend: 0.85,
    levels: 3,
    maxValue: 100,
    radians: 2 * Math.PI,
    opacityArea: 0.5,
    ToRight: 5,
    TranslateX: 80,
    TranslateY: 25,
    ExtraWidthX: 300,
    ExtraWidthY: 100,
    color: d3.scaleOrdinal(["#1F77B4", "#c24a4e", "#ba8e27", "#BCBD22"]),
  };

  useEffect(() => {
    let radarData: IRadar[][] =
      props.data[0][0].value === -1 ? initialData : props.data;

    if (props.data[0][0].value !== -1) {
      let maxValue = -1;
      props.data[0].map((o) => {
        if (o.value > maxValue) maxValue = o.value;
      });

      props.data[1].map((o) => {
        if (o.value > maxValue) maxValue = o.value;
      });

      props.data[2].map((o) => {
        if (o.value > maxValue) maxValue = o.value;
      });

      props.data[3].map((o) => {
        if (o.value > maxValue) maxValue = o.value;
      });

      cfg.maxValue = maxValue + 10;
    }

    if (radarContainer.current) {
      try {
        const allAxis = radarData[0].map(function (i, j) {
          return i.area.toLocaleUpperCase();
        });

        const total = allAxis.length;

        const radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);

        d3.select(radarContainer.current)?.selectAll("svg")?.remove();

        const g = d3
          .select(radarContainer.current)
          .append("svg")
          .attr("width", cfg.w + cfg.ExtraWidthX)
          .attr("height", 300)
          .append("g")
          .attr(
            "transform",
            "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")"
          );

        for (let j = 0; j < cfg.levels; j++) {
          const levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);

          g.selectAll(".levels")
            .data(allAxis)
            .enter()
            .append("svg:line")
            .attr("x1", function (d, i) {
              return (
                levelFactor *
                (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
              );
            })
            .attr("y1", function (d, i) {
              return (
                levelFactor *
                (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
              );
            })
            .attr("x2", function (d, i) {
              return (
                levelFactor *
                (1 - cfg.factor * Math.sin(((i + 1) * cfg.radians) / total))
              );
            })
            .attr("y2", function (d, i) {
              return (
                levelFactor *
                (1 - cfg.factor * Math.cos(((i + 1) * cfg.radians) / total))
              );
            })
            .attr("class", "line")
            .style("stroke", "#8796b0")
            .style("stroke-width", "1px")
            .attr(
              "transform",
              `translate(${cfg.w / 2 - levelFactor}, ${
                cfg.h / 2 - levelFactor
              })`
            );
        }

        for (let j = 0; j < cfg.levels; j++) {
          const levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
          g.selectAll(".levels")
            .data([1])
            .enter()
            .append("svg:text")
            .attr("x", function (d) {
              return levelFactor * (1 - cfg.factor * Math.sin(0));
            })
            .attr("y", function (d) {
              return levelFactor * (1 - cfg.factor * Math.cos(0));
            })
            .attr("class", "legend")
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .attr(
              "transform",
              "translate(" +
                (cfg.w / 2 - levelFactor + cfg.ToRight) +
                ", " +
                (cfg.h / 2 - levelFactor) +
                ")"
            );
        }

        let series = 0;

        const axis = g
          .selectAll(".axis")
          .data(allAxis)
          .enter()
          .append("g")
          .attr("class", "axis");

        axis
          .append("line")
          .attr("x1", cfg.w / 2)
          .attr("y1", cfg.h / 2)
          .attr("x2", function (d, i) {
            return (
              (cfg.w / 2) *
              (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
            );
          })
          .attr("y2", function (d, i) {
            return (
              (cfg.h / 2) *
              (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
            );
          })
          .attr("class", "line")
          .style("stroke", "#8796b0")
          .style("stroke-width", "1px");

        axis
          .append("text")
          .attr("class", "legend")
          .text(function (d) {
            return d;
          })
          .style("font-family", "sans-serif")
          .style("font-size", "12px")
          .style("fill", "#8796b0")
          .attr("font-weight", 100)
          .attr("text-anchor", "middle")
          .attr("dy", "1.5em")
          .attr("transform", function (d, i) {
            return "translate(0, -10)";
          })
          .attr("x", function (d, i) {
            return (
              (cfg.w / 2) *
                (1 - cfg.factorLegend * Math.sin((i * cfg.radians) / total)) -
              60 * Math.sin((i * cfg.radians) / total)
            );
          })
          .attr("y", function (d, i) {
            return (
              (cfg.h / 2) * (1 - Math.cos((i * cfg.radians) / total)) -
              20 * Math.cos((i * cfg.radians) / total)
            );
          });

        let dataValues: any[] = [];

        radarData.forEach(function (y, x) {
          dataValues = [];
          g.selectAll(".nodes").data(y, function (j: any, i): any {
            dataValues.push([
              (cfg.w / 2) *
                (1 -
                  (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                    cfg.factor *
                    Math.sin((i * cfg.radians) / total)),
              (cfg.h / 2) *
                (1 -
                  (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                    cfg.factor *
                    Math.cos((i * cfg.radians) / total)),
            ]);
          });

          dataValues.push(dataValues[0]);
          g.selectAll(".area")
            .data([dataValues])
            .enter()
            .append("polygon")
            .attr("class", "poly" + " radar-chart-serie" + series)
            .style("stroke-width", "2px")
            .style("stroke", cfg.color(series.toString()))
            .attr("points", function (d) {
              return d3
                .range(d.length)
                .map(function () {
                  return cfg.w / 2 + "," + cfg.h / 2;
                })
                .join(" ");
            })
            .style("fill", function (j, i) {
              return "none";
            })
            .style("fill-opacity", cfg.opacityArea)
            .on("mouseover", function (d) {
              const z = "polygon." + d3.select(this).attr("class");
              g.selectAll("polygon")
                .transition("200")
                .style("fill-opacity", 0.1);
              g.selectAll(z).transition("200").style("fill-opacity", 0.7);
            })
            .on("mouseout", function () {
              g.selectAll("polygon")
                .transition("200")
                .style("fill-opacity", cfg.opacityArea);
            });
          series++;
        });

        series = 0;

        radarData.forEach(function (y, x) {
          g.selectAll(".nodes")
            .data(y)
            .enter()
            .append("svg:circle")
            .attr("class", "point" + " radar-chart-serie" + series)
            .attr("r", cfg.radius)
            .attr("alt", function (j) {
              return Math.max(j.value, 0);
            })
            .attr("cx", cfg.w / 2)
            .attr("cy", cfg.h / 2)
            .attr("data-id", function (j) {
              return j.area;
            })
            .style("fill", cfg.color(series.toString()))
            .style("stroke-width", "2px")
            .style("stroke", cfg.color(series.toString()));

          series++;
        });

        const legendRectSize = 8;
        const legendSpacing = 4;

        const bLegend = g
          .selectAll("bLegend")
          .data(cfg.color.domain())
          .enter()
          .append("g")
          .attr("class", "bLegend")
          .attr("transform", function (d, i) {
            const height = 320;
            let horz = 75;
            return "translate(" + horz + "," + height + ")";
          });

        dataValues = [];

        g.selectAll(".point")
          .transition()
          .duration(800)
          .attr("cx", function (j: any, i) {
            dataValues.push([
              (cfg.w / 2) *
                (1 -
                  (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                    cfg.factor *
                    Math.sin((i * cfg.radians) / total)),
              (cfg.h / 2) *
                (1 -
                  (parseFloat(Math.max(j.value, 0).toString()) / cfg.maxValue) *
                    cfg.factor *
                    Math.cos((i * cfg.radians) / total)),
            ]);
            return (
              (cfg.w / 2) *
              (1 -
                (Math.max(j.value, 0) / cfg.maxValue) *
                  cfg.factor *
                  Math.sin((i * cfg.radians) / total))
            );
          })
          .attr("cy", function (j: any, i) {
            return (
              (cfg.h / 2) *
              (1 -
                (Math.max(j.value, 0) / cfg.maxValue) *
                  cfg.factor *
                  Math.cos((i * cfg.radians) / total))
            );
          });

        g.selectAll(".poly")
          .transition()
          .duration(800)
          .attr("points", function (d: any) {
            let str = "";
            for (let pti = 0; pti < d.length; pti++) {
              str = str + d[pti][0] + "," + d[pti][1] + " ";
            }
            return str;
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [props.data, radarContainer.current]);

  return <svg ref={radarContainer} width={cfg.w + 160} height={260} />;
};
