import { Select } from "antd";
import { dataMonth, dataYear } from "../../utils/dataFetch";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  dashboardGetDashboardPostMonth,
  dashboardGetDashboardPostYear,
} from "../../store/dashboard/dashboard-slice";
import { Line } from "react-chartjs-2";

const generateDataPost = (
  timeframe: "month" | "year",
  monthlyData: any,
  yearlyData: any
) => {
  let labels: any = [];
  let counts = [];
  let label = "";
  if (timeframe === "month" && monthlyData) {
    labels = Array.from(
      { length: Object.keys(monthlyData).length },
      (_, i) => i + 1
    );
    counts = labels.map((day: any) => monthlyData[day] || 0);
    label = "User Registrations per Day in a Month";
  } else if (timeframe === "year" && yearlyData) {
    labels = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
    counts = labels.map((_: any, month: any) => yearlyData[month + 1] || 0);
    label = "User Registrations per Month in a Year";
  }
  return {
    labels: labels,
    datasets: [
      {
        label: label,
        data: counts,
        backgroundColor: "rgba(103, 133, 233, 0.2)",
        borderColor: "#4b6bec",
        borderWidth: 0.8,
      },
    ],
  };
};

const LineChartPost = () => {
  const { dashboardPostMonth, dashboardPostYear } = useSelector(
    (state: any) => state.dashboard
  );
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const { users } = useSelector((state: any) => state.auth);
  const [monthlyData, setMonthlyData] = useState(null);
  const [yearlyData, setYearlyData] = useState(null);
  const [timeframe, setTimeframe] = useState<"month" | "year">("month");
  const handleTimeRangeChange = (range: "year" | "month") => {
    setTimeframe(range);
    if (range === "month") {
      dispatch(
        dashboardGetDashboardPostMonth({
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
        })
      );
      setMonth(new Date().getMonth() + 1);
      setYear(new Date().getFullYear());
    } else if (range === "year") {
      dispatch(
        dashboardGetDashboardPostYear({ year: new Date().getFullYear() })
      );
      setYear(new Date().getFullYear());
    }
  };
  const data: any = generateDataPost(timeframe, monthlyData, yearlyData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (users?.id)
      dispatch(
        dashboardGetDashboardPostMonth({
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
        })
      );
  }, [users]);
  useEffect(() => {
    if (dashboardPostMonth) setMonthlyData(dashboardPostMonth);
  }, [dashboardPostMonth]);
  useEffect(() => {
    if (dashboardPostYear) setYearlyData(dashboardPostYear);
  }, [dashboardPostYear]);

  const onChangeMonth = (e: any) => {
    setMonth(e);
    dispatch(dashboardGetDashboardPostMonth({ year: year, month: e }));
  };
  const onChangeYearofMonth = (e: any) => {
    setYear(e);
    dispatch(dashboardGetDashboardPostMonth({ year: e, month: month }));
  };
  const onChangeYear = (e: any) => {
    dispatch(dashboardGetDashboardPostYear({ year: e }));
  };

  return (
    <>
      <div className="w-full">
        <div className="flex gap-2">
          <button
            className={`ml-2 min-w-[80px] px-3 py-1 rounded-md ${
              timeframe == "month" ? "bg-primary text-white" : "bg-gray-200"
            } `}
            onClick={() => handleTimeRangeChange("month")}
          >
            Tháng
          </button>
          <button
            className={`ml-2 min-w-[80px] px-3 py-1 rounded-md ${
              timeframe == "year" ? "bg-primary text-white" : "bg-gray-200"
            } `}
            onClick={() => handleTimeRangeChange("year")}
          >
            Năm
          </button>
          {timeframe === "month" ? (
            <div className="flex gap-2">
              <Select
                placeholder="Tháng"
                value={month}
                className="!py-0 ml-2 w-[120px]"
                onChange={onChangeMonth}
                options={dataMonth}
              />
              <Select
                placeholder="Năm"
                value={year}
                className="!py-0 ml-2 w-[120px]"
                onChange={onChangeYearofMonth}
                options={dataYear}
              />
            </div>
          ) : (
            <>
              <Select
                value={year}
                placeholder="Năm"
                className="!py-0 ml-2 w-[120px]"
                onChange={onChangeYear}
                options={dataYear}
              />
            </>
          )}
        </div>
        <div className="w-full mt-3">
          <Line data={data} />
        </div>
      </div>
    </>
  );
};
export default LineChartPost;