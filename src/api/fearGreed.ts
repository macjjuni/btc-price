import axios from "axios";
import { toast } from "react-toastify";
import { FearGreedProps } from "@/store/store.interface";
import { getCurrentDate } from "@/utils/date";

const fearGreedURI = "https://api.alternative.me/fng/";

interface IResfearGreed {
  name: string;
  data: [
    {
      value: string;
      value_classification: string;
      timestamp: string;
      time_until_update: string;
    }
  ];
  metadata: {
    error: null | string;
  };
}

export const getFearGreed = async (): Promise<FearGreedProps> => {
  try {
    const { data } = await axios.get<IResfearGreed>(fearGreedURI);

    const ResponseData = {
      value: data.data[0].value,
      date: getCurrentDate("YYYY.MM.DD HH:mm:ss"),
    };
    return ResponseData;
  } catch (e) {
    console.error(e);
    toast.error("Fear and Greed Index update Error!");
    return {
      value: "error",
      date: "error",
    };
  }
};
