import { Select } from "antd";
import { dataMonth, dataYear } from "../../utils/dataFetch";
import { Bar } from "react-chartjs-2";
import {
  dashboardGetDashboardCompanyMonth,
  dashboardGetDashboardCompanyYear,
  dashboardGetDashboardUserMonth,
  dashboardGetDashboardUserYear,
} from "../../store/dashboard/dashboard-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const generateDataUser = (
  timeframe: "month" | "year",
  monthlyDataUser: any,
  yearlyDataUser: any,
  monthlyDataCompany: any,
  yearlyDataCompany: any
) => {
  let labels: any = [];
  let countsUser = [];
  let countsCompany = [];
  if (timeframe === "month" && monthlyDataUser) {
    labels = Array.from(
      { length: Object.keys(monthlyDataUser).length },
      (_, i) => i + 1
    );
    countsUser = labels.map((day: any) => monthlyDataUser[day] || 0);
    countsCompany = labels.map((day: any) => monthlyDataCompany[day] || 0);
  } else if (timeframe === "year" && yearlyDataUser) {
    labels = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
    countsUser = labels.map(
      (_: any, month: any) => yearlyDataUser[month + 1] || 0
    );
    countsCompany = labels.map(
      (_: any, month: any) => yearlyDataCompany[month + 1] || 0
    );
  }
  return {
    labels: labels,
    datasets: [
      {
        label: "Người dùng",
        data: countsUser,
        backgroundColor: "rgba(46, 199, 16, 0.2)",
        borderColor: "#84d43e",
        borderWidth: 0.8,
      },
      {
        label: "Công ty",
        data: countsCompany,
        backgroundColor: "rgba(103, 133, 233, 0.2)",
        borderColor: "#4b6bec",
        borderWidth: 0.8,
      },
    ],
  };
};
const BarChartUser = () => {
  const {
    dashboardUserMonth,
    dashboardUserYear,
    dashboardCompanyMonth,
    dashboardCompanyYear,
  } = useSelector((state: any) => state.dashboard);
  const { users } = useSelector((state: any) => state.auth);
  const [month, setMonth] = useState<any>(`Tháng ${new Date().getMonth() + 1}`);
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthlyDataUser, setMonthlyDataUser] = useState(null);
  const [yearlyDataUser, setYearlyDataUser] = useState(null);
  const [monthlyDataCompany, setMonthlyDataCompany] = useState(null);
  const [yearlyDataCompany, setYearlyDataCompany] = useState(null);
  const [timeframe, setTimeframe] = useState<"month" | "year">("month");
  const handleTimeRangeChange = (range: "year" | "month") => {
    setTimeframe(range);
    if (range === "month") {
      dispatch(
        dashboardGetDashboardUserMonth({
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
        })
      );
      dispatch(
        dashboardGetDashboardCompanyMonth({
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
        })
      );
      setMonth(`Tháng ${new Date().getMonth() + 1}`);
      setYear(new Date().getFullYear());
    } else if (range === "year") {
      dispatch(
        dashboardGetDashboardUserYear({ year: new Date().getFullYear() })
      );
      dispatch(
        dashboardGetDashboardCompanyYear({ year: new Date().getFullYear() })
      );
      setYear(new Date().getFullYear());
    }
  };
  const data: any = generateDataUser(
    timeframe,
    monthlyDataUser,
    yearlyDataUser,
    monthlyDataCompany,
    yearlyDataCompany
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (users?.id)
      dispatch(
        dashboardGetDashboardUserMonth({
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
        })
      );
    dispatch(
      dashboardGetDashboardCompanyMonth({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
      })
    );
  }, [users]);
  useEffect(() => {
    if (dashboardUserMonth) setMonthlyDataUser(dashboardUserMonth);
    if (dashboardCompanyMonth) setMonthlyDataCompany(dashboardCompanyMonth);
  }, [dashboardUserMonth, dashboardCompanyMonth]);
  useEffect(() => {
    if (dashboardUserYear) setYearlyDataUser(dashboardUserYear);
    if (dashboardCompanyYear) setYearlyDataCompany(dashboardCompanyYear);
  }, [dashboardUserYear, dashboardCompanyYear]);

  const onChangeMonth = (e: any) => {
    setMonth(e);
    dispatch(dashboardGetDashboardUserMonth({ year: year, month: e }));
    dispatch(dashboardGetDashboardCompanyMonth({ year: year, month: e }));
  };
  const onChangeYearofMonth = (e: any) => {
    setYear(e);
    dispatch(dashboardGetDashboardUserMonth({ year: e, month: month }));
    dispatch(dashboardGetDashboardCompanyMonth({ year: e, month: month }));
  };
  const onChangeYear = (e: any) => {
    dispatch(dashboardGetDashboardUserYear({ year: e }));
    dispatch(dashboardGetDashboardCompanyYear({ year: e }));
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        // display: true,
        text: "Người dùng và công ty",
      },
    },
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
                placeholder="Năm"
                value={year}
                className="!py-0 ml-2 w-[120px]"
                onChange={onChangeYear}
                options={dataYear}
              />
            </>
          )}
        </div>
        <div className="w-full mt-3">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
};
export default BarChartUser;
