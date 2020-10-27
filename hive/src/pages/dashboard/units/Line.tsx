import React from "react";
import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "us",
    color: "hsl(100, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 149,
      },
      {
        x: "helicopter",
        y: 282,
      },
      {
        x: "boat",
        y: 124,
      },
      {
        x: "train",
        y: 28,
      },
      {
        x: "subway",
        y: 48,
      },
      {
        x: "bus",
        y: 180,
      },
      {
        x: "car",
        y: 222,
      },
      {
        x: "moto",
        y: 155,
      },
      {
        x: "bicycle",
        y: 238,
      },
      {
        x: "horse",
        y: 124,
      },
      {
        x: "skateboard",
        y: 126,
      },
      {
        x: "others",
        y: 40,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(131, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 24,
      },
      {
        x: "helicopter",
        y: 44,
      },
      {
        x: "boat",
        y: 200,
      },
      {
        x: "train",
        y: 30,
      },
      {
        x: "subway",
        y: 249,
      },
      {
        x: "bus",
        y: 48,
      },
      {
        x: "car",
        y: 50,
      },
      {
        x: "moto",
        y: 298,
      },
      {
        x: "bicycle",
        y: 180,
      },
      {
        x: "horse",
        y: 179,
      },
      {
        x: "skateboard",
        y: 134,
      },
      {
        x: "others",
        y: 139,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(108, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 14,
      },
      {
        x: "helicopter",
        y: 269,
      },
      {
        x: "boat",
        y: 48,
      },
      {
        x: "train",
        y: 187,
      },
      {
        x: "subway",
        y: 157,
      },
      {
        x: "bus",
        y: 21,
      },
      {
        x: "car",
        y: 73,
      },
      {
        x: "moto",
        y: 121,
      },
      {
        x: "bicycle",
        y: 160,
      },
      {
        x: "horse",
        y: 64,
      },
      {
        x: "skateboard",
        y: 188,
      },
      {
        x: "others",
        y: 149,
      },
    ],
  },
];
export default function Line() {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      colors={["#212529", "#6c757d", "#adb5bd", "#dee2e6"]}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
