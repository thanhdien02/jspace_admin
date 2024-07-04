import { format } from "date-fns";
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
