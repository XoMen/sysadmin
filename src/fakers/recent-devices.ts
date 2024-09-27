import _ from "lodash";
import browsers, { Browser } from "./browsers";

export interface RecentDevice {
  browser: Browser;
  device: string;
  location: string;
  activity: string;
  operatingSystem: string;
}

const fakers = {
  fakeRecentDevices() {
    const recentDevices: Array<RecentDevice> = [
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Desktop",
        location: "نیویورک، آمریکا",
        activity: "آنلاین",
        operatingSystem: "ویندوز ۱۰",
      },
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Laptop",
        location: "لندن، انگلستان",
        activity: "آنلاین",
        operatingSystem: "مک‌اواس کاتالینا",
      },
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Tablet",
        location: "پاریس، فرانسه",
        activity: "Offline",
        operatingSystem: "آی‌اواس ۱۴",
      },
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Mobile",
        location: "توکیو، ژاپن",
        activity: "آنلاین",
        operatingSystem: "اندروید ۱۱",
      },
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Desktop",
        location: "برلین، آلمان",
        activity: "آنلاین",
        operatingSystem: "ویندوز ۱۱",
      },
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Laptop",
        location: "سیدنی، استرالیا",
        activity: "Offline",
        operatingSystem: "مک‌اواس بیگ سور",
      },
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Tablet",
        location: "تورنتو، کانادا",
        activity: "آنلاین",
        operatingSystem: "آی‌اواس ۱۵",
      },
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Mobile",
        location: "سئول، کره جنوبی",
        activity: "Offline",
        operatingSystem: "اندروید ۱۲",
      },
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Desktop",
        location: "مومبای، هند",
        activity: "آنلاین",
        operatingSystem: "ویندوز ۱۰",
      },
      {
        browser: browsers.fakeBrowsers()[0],
        device: "Laptop",
        location: "ریو دو ژانیرو، برزیل",
        activity: "آنلاین",
        operatingSystem: "مک‌اواس مونتری",
      },
    ];

    return _.shuffle(recentDevices);
  },
};

export default fakers;
