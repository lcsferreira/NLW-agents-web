import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-BR");

export const formatDateToNow = (datesString: string) => {
  return dayjs(datesString).fromNow();
};
