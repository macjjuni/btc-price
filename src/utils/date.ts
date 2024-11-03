import "dayjs/locale/ko";
import dayjs from "dayjs";

dayjs.locale("ko");

type DateType = string | number | Date;

const defaultFormat = "YYYY.MM.DD";
const defaultDetailFormat = "YYYY-MM-DD HH:mm";

const now = dayjs();

export function getCurrentFormatted(format: string | undefined = defaultDetailFormat) {
  return dayjs().format(format);
}

export function formattedDate(date: DateType, format: string | undefined = defaultFormat) {
  return dayjs(date).format(format);
}

export function getCurrentDate(format: string | undefined = defaultDetailFormat) {
  return dayjs().format(format);
}

export function getMinuteDifference(date1: DateType, date2: DateType) {
  return dayjs(date2).diff(dayjs(date1), "minute");
}

const date = {
  now: () => now.format(defaultFormat),
  nowDiff: (dateStr: string) => {
    const nowDate = dayjs(new Date(), defaultFormat);
    const diffTargetDate = dayjs(dateStr, defaultFormat);
    return nowDate.diff(diffTargetDate, "d");
  },
  format: (dateStr: string | number) => dayjs(dateStr).format(defaultFormat),
  formatDetail: (dateStr: string) => dayjs(dateStr).format(defaultDetailFormat),
  diff: (date1: string, date2: string) => {
    const formatDate1 = dayjs(date1, defaultDetailFormat);
    const formatDate2 = dayjs(date2, defaultDetailFormat);
    return formatDate1.diff(formatDate2, "second");
  },
};

export default date;
