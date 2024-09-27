import _ from "lodash";
import { icons } from "@/components/Base/Lucide";

export interface TransactionStatus {
  name: string;
  textColor: string;
  icon: keyof typeof icons;
}

const fakers = {
  fakeTransactionStatus() {
    const transactionStatus: Array<TransactionStatus> = [
      { name: "در انتظار پرداخت", textColor: "text-primary", icon: "Hourglass" },
      { name: "در حال پردازش", textColor: "text-primary", icon: "Clock4" },
      { name: "ارسال شده", textColor: "text-success", icon: "Truck" },
      { name: "تحویل شده", textColor: "text-success", icon: "PackageCheck" },
      { name: "لغو شده", textColor: "text-primary", icon: "PackageX" },
      { name: "بازپرداخت شده", textColor: "text-primary", icon: "Wallet" },
      { name: "برگشتی", textColor: "text-primary", icon: "ArrowLeftSquare" },
      { name: "ناموفق", textColor: "text-primary", icon: "FileX2" },
      { name: "در انتظار", textColor: "text-success", icon: "PackageSearch" },
      { name: "تکمیل شده", textColor: "text-success", icon: "Package" },
    ];

    return _.shuffle(transactionStatus);
  },
};

export default fakers;
