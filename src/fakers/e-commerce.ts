import _ from "lodash";
import products, { type Product } from "./products";
import { icons } from "@/components/Base/Lucide";

interface PerformanceInsight {
  title: string;
  subtitle: string;
  icon: keyof typeof icons;
  images: Product["images"];
  link: string;
}

const fakers = {
  fakePerformanceInsights() {
    const performanceInsights: Array<PerformanceInsight> = [
      {
        title: "10 محصول برتر",
        subtitle: "محصولات ویژه",
        icon: "Zap",
        images: products.fakeProducts()[0].images,
        link: "کاوش در محصولات",
      },
      {
        title: "5 دسته برتر",
        subtitle: "دسته‌های محبوب",
        icon: "Laptop",
        images: products.fakeProducts()[0].images,
        link: "کاوش در دسته‌ها",
      },

      {
        title: "محبوبیت مشتریان",
        subtitle: "مشتری ماه",
        icon: "Fingerprint",
        images: products.fakeProducts()[0].images,
        link: "کاوش در محصولات",
      },
      {
        title: "هشدارهای کم‌موجودی",
        subtitle: "مواردی که به پایان رسیده‌اند",
        icon: "Inbox",
        images: products.fakeProducts()[0].images,
        link: "مشاهده موجودی",
      },

      {
        title: "برجستگی‌های بازاریابی",
        subtitle: "کمپین‌های اخیر",
        icon: "Database",
        images: products.fakeProducts()[0].images,
        link: "کاوش در کمپین‌ها",
      },
    ];

    return _.shuffle(performanceInsights);
  },
};

export default fakers;
