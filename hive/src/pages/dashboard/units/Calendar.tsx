import React, { FunctionComponent } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { useQuery } from "react-query";
import UnitsApi from "../../../api/units.rest";
import { useAuthStore } from "../../../store/auth_store";

type CalendarProps = {
  id: string;
};

export const Calendar: FunctionComponent<CalendarProps> = ({ id }) => {
  const authParams = useAuthStore();

  const accessToken = authParams.accessToken || "";
  const client = authParams.client || "";
  const uid = authParams.uid || "";

  const repo = new UnitsApi({ accessToken, client, uid });

  const { isLoading, data, error } = useQuery("calendar_" + id, () => repo.fetchMetricsFromUnit(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching the units :( !</p>;

  return (
    <ResponsiveCalendar
      data={data}
      from={data[10].day || "2019-01-01"}
      to={data[0].day}
      emptyColor="#eeeeee"
      colors={["#dee2e6", "#adb5bd", "#6c757d", "#212529"]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
};
