import { NotKeyNotYourBitcoin } from "@/widgets";
import { PremiumPannel } from "@/widgets/pages/premium";
import "./PremiumPage.scss";


export default function PremiumPage() {

  return (
    <div className="premium-page__area">
      <PremiumPannel />
      {/* <KIcon icon="won" /> */}
      {/* <KIcon icon="dollar" /> */}
      <NotKeyNotYourBitcoin />
    </div>
  );
}
