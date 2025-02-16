import axios from "axios";
import { toast } from "react-toastify";
import useStore from "@/shared/stores/store";
import { isDev } from "@/shared/utils/common";

const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json?ts=${Date.now()}`;

interface IExRateRes {
  date: string;
  usd: { krw: number };
}

export default async function initializeUsdExchangeRate(): Promise<void> {

  const { setExRate } = useStore.getState();

  if (isDev) {
    console.log("✅ 환율 데이터 초기화");
  }

  try {
    const res = await axios.get<IExRateRes>(apiUrl);

    const { date } = res.data;
    const usdToKrwExchangeRate = Math.floor(res.data?.usd?.krw) || 0;

    if (usdToKrwExchangeRate === 0) {
      throw new Error("USD 환율 데이터를 찾을 수 없습니다.");
    }

    setExRate({ value: usdToKrwExchangeRate, date });
  } catch (e) {
    console.error(e);
    toast.error("환율 데이터를 가져올 수 없어 김치 프리미엄 데이터를 표시할 수 없습니다.");
  }
}
