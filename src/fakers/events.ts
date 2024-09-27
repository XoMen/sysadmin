import _ from "lodash";
import dayjs from "dayjs";
import { icons } from "@/components/Base/Lucide";
import users, { type User } from "./users";

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  icon: keyof typeof icons;
  organizer: string;
  attendees: Array<User>;
  availableSeats: number;
  registrationLink?: string;
  maxAttendees?: number;
  image: string;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/projects/*.{jpg,jpeg,png,svg}", { eager: true });

const fakers = {
  fakeEvents() {
    const events: Array<Event> = [
      {
        id: "1",
        title: "کنفرانس تکنولوژی",
        description: "کنفرانس سالانه تکنولوژی برای توسعه‌دهندگان",
        location: "مرکز کنوانسیون شهری",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۰۹:۰۰ صبح",
        icon: "Hourglass",
        organizer: "رویدادهای فناوری شرکت",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/tech-conference",
        maxAttendees: 500,
        image:
          imageAssets["/src/assets/images/projects/project1-400x400.jpg"]
            .default,
      },
      {
        id: "2",
        title: "راه‌اندازی محصول",
        description: "رویداد راه‌اندازی برای آخرین محصول ما",
        location: "مرکز مدیریت شرکت",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۲:۳۰ بعد از ظهر",
        icon: "Clock4",
        organizer: "eltheme",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/product-launch",
        maxAttendees: 200,
        image:
          imageAssets["/src/assets/images/projects/project2-400x400.jpg"]
            .default,
      },
      {
        id: "3",
        title: "کارگاه ساخت تیم",
        description: "فعالیت‌ها و بازی‌های ساخت تیم",
        location: "پارک شهری",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "10:00 صبح",
        icon: "Truck",
        organizer: "شرکت سازندگان تیم",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/team-building",
        maxAttendees: 100,
        image:
          imageAssets["/src/assets/images/projects/project3-400x400.jpg"]
            .default,
      },
      {
        id: "4",
        title: "کارگاه بازاریابی",
        description: "کارگاه درباره استراتژی‌های بازاریابی مدرن",
        location: "اتاق کنفرانس هتل",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۱۱:۱۵ صبح",
        icon: "PackageCheck",
        organizer: "بازاریابی حرفه‌ای",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/marketing-workshop",
        maxAttendees: 150,
        image:
          imageAssets["/src/assets/images/projects/project4-400x400.jpg"]
            .default,
      },
      {
        id: "5",
        title: "تمیزکاری اجتماعی",
        description: "رویداد داوطلبانه برای پاکسازی محله",
        location: "مرکز اجتماعی",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۰۹:۰۰ صبح",
        icon: "PackageX",
        organizer: "انجمن اجتماعی محلی",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/community-cleanup",
        maxAttendees: 50,
        image:
          imageAssets["/src/assets/images/projects/project5-400x400.jpg"]
            .default,
      },
      {
        id: "6",
        title: "وبینار: هوش مصنوعی در مراقبت‌های بهداشتی",
        description: "وبینار آنلاین درباره کاربردهای هوش مصنوعی در مراقبت‌های بهداشتی",
        location: "آنلاین",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "03:00 بعدازظهر",
        icon: "Wallet",
        organizer: "متخصصان هوش مصنوعی",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/ai-webinar",
        maxAttendees: 300,
        image:
          imageAssets["/src/assets/images/projects/project6-400x400.jpg"]
            .default,
      },
      {
        id: "7",
        title: "مخلوط کننده شبکه‌سازی",
        description: "رویداد شبکه‌سازی برای حرفه‌ایان",
        location: "سالن شهر",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۰۷:۳۰ بعدازظهر",
        icon: "ArrowLeftSquare",
        organizer: "شبکه‌سازی حرفه‌ای",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/networking-mixer",
        maxAttendees: 80,
        image:
          imageAssets["/src/assets/images/projects/project7-400x400.jpg"]
            .default,
      },
      {
        id: "8",
        title: "کارگاه مشتری",
        description: "کارگاه عملی برای مشتریان ما",
        location: "مرکز آموزش شرکت",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "10:30 صبح",
        icon: "FileX2",
        organizer: "eltheme",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/customer-workshop",
        maxAttendees: 120,
        image:
          imageAssets["/src/assets/images/projects/project8-400x400.jpg"]
            .default,
      },
      {
        id: "9",
        title: "مهمانی تعطیلات",
        description: "جشن و تعطیلات سالیانه",
        location: "سالن بزرگ هتل",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۸:۰۰ بعد از ظهر",
        icon: "PackageSearch",
        organizer: "eltheme",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/holiday-party",
        maxAttendees: 250,
        image:
          imageAssets["/src/assets/images/projects/project9-400x400.jpg"]
            .default,
      },
      {
        id: "10",
        title: "تفریح شرکت",
        description: "بازی تیمی در یک مکان زیبا",
        location: "مجتمع تفریحی کوهستانی",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "تمام روز",
        icon: "Package",
        organizer: "eltheme",
        attendees: users.fakeUsers(),
        availableSeats: _.random(1, 4),
        registrationLink: "https://left4code.com/company-retreat",
        maxAttendees: 60,
        image:
          imageAssets["/src/assets/images/projects/project10-400x400.jpg"]
            .default,
      },
    ];

    return _.shuffle(events);
  },
};

export default fakers;
