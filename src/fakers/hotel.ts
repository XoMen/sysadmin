import _ from "lodash";
import { icons } from "@/components/Base/Lucide";

export interface PerformanceInsight {
  title: string;
  value: string;
  percentageChange: number;
  description: string;
}

export interface ActivityStream {
  icon: keyof typeof icons;
  roomNumber: string;
  roomType: string;
  activity: string;
}

const fakers = {
  fakePerformanceInsight() {
    const performanceInsight: Array<PerformanceInsight> = [
      {
        title: "اتاق‌های مشغول",
        value: "1,285",
        percentageChange: 5,
        description: "Number of rooms currently occupied",
      },
      {
        title: "آمار رزرو",
        value: "3,120",
        percentageChange: -2,
        description: "Total number of bookings made",
      },
      {
        title: "درآمد رزرو اتاق",
        value: "28,500",
        percentageChange: 8,
        description: "Total revenue from room bookings",
      },
      {
        title: "ورود شده Guests",
        value: "2,442",
        percentageChange: 10,
        description: "Number of guests checked in today",
      },
      {
        title: "مهمانان خروجی",
        value: "9,538",
        percentageChange: -6,
        description: "Number of guests checked out today",
      },
      {
        title: "چک‌های روزانه",
        value: "7,810",
        percentageChange: 15,
        description: "Number of guests checked in today",
      },
      {
        title: "بررسی‌های روزانه",
        value: "4,218",
        percentageChange: 20,
        description: "Number of guests checked out today",
      },
      {
        title: "نرخ اشغال",
        value: "5,672",
        percentageChange: 3,
        description: "Percentage of occupied rooms",
      },
      {
        title: "روند درآمد اتاق",
        value: "1.08",
        percentageChange: 5,
        description: "Revenue trends over the past week",
      },
      {
        title: "واردات هفتگی",
        value: "6,232",
        percentageChange: -2,
        description: "Number of guests arriving this week",
      },
      {
        title: "رفت‌وآمد هفتگی",
        value: "1,728",
        percentageChange: -4,
        description: "Number of guests departing this week",
      },
      {
        title: "توزیع نوع اتاق - لوکس",
        value: "9,345",
        percentageChange: 6,
        description: "Percentage of لوکس rooms occupied",
      },
      {
        title: "توزیع نوع اتاق - استاندارد",
        value: "4,135",
        percentageChange: -5,
        description: "Percentage of Standard rooms occupied",
      },
      {
        title: "توزیع نوع اتاق - سوئیت",
        value: "1,520",
        percentageChange: 10,
        description: "Percentage of سوئیت rooms occupied",
      },
      {
        title: "اتاق‌های مشغول",
        value: "7,172",
        percentageChange: 2,
        description: "Number of rooms currently occupied",
      },
      {
        title: "اتاق‌های خالی",
        value: "9,828",
        percentageChange: -2,
        description: "Number of rooms currently vacant",
      },
      {
        title: "درآمد به ازای هر اتاق خالی",
        value: "8,120",
        percentageChange: 7,
        description: "Revenue per available room",
      },
      {
        title: "Average Guest امتیاز",
        value: "4.5",
        percentageChange: 4,
        description: "Average rating given by guests",
      },
      {
        title: "اتاق‌های تمیز شده",
        value: "2,295",
        percentageChange: 12,
        description: "Number of rooms cleaned today",
      },
      {
        title: "درخواست‌های نگهداری",
        value: "4,792",
        percentageChange: -3,
        description: "Number of maintenance requests",
      },
      {
        title: "زمان پاسخ (دقیقه)",
        value: "3,201",
        percentageChange: -8,
        description: "Average response time for requests",
      },
      {
        title: "درخواست‌های ویژه انجام شده",
        value: "9,122",
        percentageChange: 20,
        description: "Number of special requests fulfilled",
      },
      {
        title: "مهمانان ویژه",
        value: "4,467",
        percentageChange: 0,
        description: "Number of VIP guests checked in",
      },
    ];

    return _.shuffle(performanceInsight);
  },
  fakeActivityStream() {
    const activityStream: Array<ActivityStream> = [
      {
        icon: "Zap",
        roomNumber: "101",
        roomType: "Standard",
        activity: "مهمان ساعت ۲:۰۰ بعد از ظهر وارد شد.",
      },
      {
        icon: "Laptop",
        roomNumber: "205",
        roomType: "لوکس",
        activity: "تمیز کردن اتاق ۲۰۵ تکمیل شد.",
      },
      {
        icon: "Fingerprint",
        roomNumber: "312",
        roomType: "سوئیت",
        activity: "مهمان درخواست دستمال‌های اضافی داد.",
      },
      {
        icon: "Inbox",
        roomNumber: "118",
        roomType: "Standard",
        activity: "مهمان در ساعت 11:30 صبح ترک کرد.",
      },
      {
        icon: "Database",
        roomNumber: "401",
        roomType: "سوئیت",
        activity: "درخواست نگهداری در ۴۰۱",
      },
      {
        icon: "Zap",
        roomNumber: "303",
        roomType: "لوکس",
        activity: "سفارش خدمات اتاق برای صبحانه.",
      },
      {
        icon: "Laptop",
        roomNumber: "102",
        roomType: "Standard",
        activity: "مهمان در ساعت 3:15 بعد از ظهر وارد شد.",
      },
      {
        icon: "Fingerprint",
        roomNumber: "306",
        roomType: "لوکس",
        activity: "تمیز کردن اتاق ۳۰۶ تکمیل شد.",
      },
      {
        icon: "Fingerprint",
        roomNumber: "215",
        roomType: "سوئیت",
        activity: "مهمان درخواست تماس بیدارکننده کرد.",
      },
      {
        icon: "Database",
        roomNumber: "125",
        roomType: "Standard",
        activity: "مهمان ساعت ۱۰:۴۵ صبح خروج کرد.",
      },
    ];

    return _.shuffle(activityStream);
  },
};

export default fakers;
