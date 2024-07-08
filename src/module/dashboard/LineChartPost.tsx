import { Select } from "antd";
import { dataMonth, dataYear } from "../../utils/dataFetch";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  dashboardGetDashboardPostMonth,
  dashboardGetDashboardPostYear,
} from "../../store/dashboard/dashboard-slice";
import { Line } from "react-chartjs-2";
import { exportToExcel } from "../../utils/common-fucntion";

const generateDataPost = (
  timeframe: "month" | "year",
  monthlyData: any,
  yearlyData: any
) => {
  let labels: any = [];
  let counts = [];
  if (timeframe === "month" && monthlyData) {
    labels = Array.from(
      { length: Object.keys(monthlyData).length },
      (_, i) => i + 1
    );
    counts = labels.map((day: any) => monthlyData[day] || 0);
  } else if (timeframe === "year" && yearlyData) {
    labels = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
    counts = labels.map((_: any, month: any) => yearlyData[month + 1] || 0);
  }
  return {
    labels: labels,
    datasets: [
      {
        label: "Bài đăng",
        data: counts,
        backgroundColor: "rgba(103, 133, 233, 0.2)",
        borderColor: "#14a6db",
        borderWidth: 0.8,
      },
    ],
  };
};
const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};
const LineChartPost = () => {
  const { dashboardPostMonth, dashboardPostYear } = useSelector(
    (state: any) => state.dashboard
  );
  const [month, setMonth] = useState<any>(`${new Date().getMonth() + 1}`);
  const [year, setYear] = useState<any>(new Date().getFullYear());
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
      setMonth(`Tháng ${new Date().getMonth() + 1}`);
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
    dispatch(dashboardGetDashboardPostMonth({ year: year, month: e }));
    setMonth(e);
  };
  const onChangeYearofMonth = (e: any) => {
    dispatch(dashboardGetDashboardPostMonth({ year: e, month: month }));
    setYear(e);
  };
  const onChangeYear = (e: any) => {
    dispatch(dashboardGetDashboardPostYear({ year: e }));
    setYear(e);
  };
  const handleExportExcel = () => {
    if (timeframe === "month") {
      const transformedArray: any = Object.entries(dashboardPostMonth).map(
        ([key, value]) => ({
          THÁNG: Number(key),
          "SỐ LƯỢNG NGƯỜI DÙNG": value,
        })
      );
      exportToExcel(transformedArray, "ThongKeSoLuongBaiDang");
    } else {
      const transformedArray: any = Object.entries(dashboardPostYear).map(
        ([key, value]) => ({
          NĂM: Number(key),
          "SỐ LƯỢNG NGƯỜI DÙNG": value,
        })
      );
      exportToExcel(transformedArray, "ThongKeSoLuongBaiDang");
    }
  };
  return (
    <>
      <div className="w-full">
        <div className="flex gap-2">
          <button
            className={`ml-2 min-w-[80px] px-3 py-1 rounded ${
              timeframe == "month"
                ? "bg-white text-primary border border-solid border-primary"
                : "bg-gray-200"
            } `}
            onClick={() => handleTimeRangeChange("month")}
          >
            Tháng
          </button>
          <button
            className={`ml-2 min-w-[80px] px-3 py-1 rounded ${
              timeframe == "year"
                ? "bg-white text-primary border border-solid border-primary"
                : "bg-gray-200"
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
                className="select-filter !py-0 ml-2 w-[120px]"
                onChange={onChangeMonth}
                options={dataMonth}
              />
              <Select
                placeholder="Năm"
                value={year}
                className="select-filter !py-0 ml-2 w-[120px]"
                onChange={onChangeYearofMonth}
                options={dataYear}
              />
            </div>
          ) : (
            <>
              <Select
                value={year}
                placeholder="Năm"
                className="select-filter !py-0 ml-2 w-[120px]"
                onChange={onChangeYear}
                options={dataYear}
              />
            </>
          )}
          <button
            type="button"
            className="px-3 py-1 rounded border border-solid border-slate-200"
            onClick={handleExportExcel}
          >
            Export
          </button>
        </div>
        <div className="w-full mt-3">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};
export default LineChartPost;
