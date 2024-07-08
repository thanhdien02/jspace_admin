import { format } from "date-fns";
import * as XLSX from "xlsx";
import { enUS } from "date-fns/locale";
export const formatTimeDate = (timestamp: string) => {
  const date = new Date(timestamp);

  // Format ngày
  const formattedDate = format(date, "EEEE, MMMM d - HH:mm aa", {
    locale: enUS,
  });
  return formattedDate;
};
export const sortAscDesc = (sortDescAndAcs: string) => {
  let sort = "";
  if (sortDescAndAcs == "") sort = "desc";
  else if (sortDescAndAcs == "desc") sort = "asc";
  else sort = "";
  return sort;
};

export const exportToExcel = (data: any, nameFile: string) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  // Xuất file excel
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const dataBlob = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });
  // Tạo URL cho file và mở hộp thoại lưu file
  const url = window.URL.createObjectURL(dataBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${nameFile}.xlsx`;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};
export const convertDollarToVN = (moneyDollar: number, currency: number) => {
  return moneyDollar * currency;
};
