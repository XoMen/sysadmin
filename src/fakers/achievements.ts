import _ from "lodash";
import users, { type User } from "./users";
import events, { type Event } from "./events";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: string;
  location?: string;
  awardingOrganization?: string;
  level: number;
  duration: string;
  score: number;
  collaborators: Array<User>;
  event: Event;
}

const fakers = {
  fakeAchievements() {
    const achievements: Achievement[] = [
      {
        id: "1",
        title: "توسعه‌دهنده وب مجاز",
        description: "گواهی‌نامه در زمینه توسعه وب دریافت کرد",
        date: "2023-05-15",
        imageUrl: "/src/assets/images/projects/achievement1.jpg",
        category: "حرفه‌ای",
        location: "آنلاین",
        awardingOrganization: "Web Development Certification Institute",
        level: 3,
        duration: "6m",
        score: 95,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "2",
        title: "برترین اجراکننده سال",
        description: "به عنوان برترین اجراکننده در شرکت شناخته شد",
        date: "2023-07-20",
        imageUrl: "/src/assets/images/projects/achievement2.jpg",
        category: "حرفه‌ای",
        awardingOrganization: "شرکت ABC",
        location: "Headquarters",
        level: 2,
        duration: "1y",
        score: 90,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "3",
        title: "جایزه داوطلبانه اجتماعی",
        description: "برای کار داوطلبانه اجتماعی جایزه دریافت کرد",
        date: "2023-08-10",
        imageUrl: "/src/assets/images/projects/achievement3.jpg",
        category: "شخصی",
        location: "Local Community",
        awardingOrganization: "Community Service Association",
        level: 1,
        duration: "2y",
        score: 98,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "4",
        title: "برنده مسابقه کدنویسی",
        description: "رتبه اول در مسابقه ملی کدنویسی",
        date: "2023-09-05",
        imageUrl: "/src/assets/images/projects/achievement4.jpg",
        category: "تحصیلی",
        location: "City Auditorium",
        awardingOrganization: "National Coding Association",
        level: 3,
        duration: "3m",
        score: 100,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "5",
        title: "جایزه برتری رهبری",
        description: "تشخیص مهارت‌های برتر رهبری",
        date: "2023-10-15",
        imageUrl: "/src/assets/images/projects/achievement5.jpg",
        category: "حرفه‌ای",
        awardingOrganization: "Leadership Association",
        level: 2,
        duration: "2y",
        score: 93,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "6",
        title: "احترام نمایشگاه هنر",
        description: "نقاشی‌های ویژه در یک نمایشگاه هنری معتبر",
        date: "2023-11-20",
        imageUrl: "/src/assets/images/projects/achievement6.jpg",
        category: "شخصی",
        location: "Art Gallery",
        awardingOrganization: "Art Society",
        level: 2,
        duration: "1y",
        score: 88,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "7",
        title: "برنده مسابقه کارآفرینی",
        description: "رتبه اول در مسابقه استارت‌آپ",
        date: "2023-12-10",
        imageUrl: "/src/assets/images/projects/achievement7.jpg",
        category: "حرفه‌ای",
        location: "Startup Expo",
        awardingOrganization: "Entrepreneurship Association",
        level: 3,
        duration: "6m",
        score: 97,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "8",
        title: "جایزه اجرای موسیقی",
        description: "برای اجرای برجسته موسیقی جایزه دریافت کرد",
        date: "2024-01-15",
        imageUrl: "/src/assets/images/projects/achievement8.jpg",
        category: "شخصی",
        location: "Concert Hall",
        awardingOrganization: "Music Society",
        level: 2,
        duration: "2y",
        score: 91,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "9",
        title: "برنده چالش نوآوری",
        description: "با یک راه‌حل خلاقانه چالش نوآوری را برنده شد",
        date: "2024-02-20",
        imageUrl: "/src/assets/images/projects/achievement9.jpg",
        category: "حرفه‌ای",
        location: "Innovation Expo",
        awardingOrganization: "Innovation Institute",
        level: 3,
        duration: "9m",
        score: 96,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
      {
        id: "10",
        title: "دستاورد تناسب اندام",
        description: "اهداف تناسب اندام را دستیابی کرد و ۲۰ پوند وزن کاهش یافت",
        date: "2024-03-10",
        imageUrl: "/src/assets/images/projects/achievement10.jpg",
        category: "شخصی",
        location: "Gym",
        level: 1,
        duration: "1y",
        score: 85,
        collaborators: users.fakeUsers(),
        event: events.fakeEvents()[0],
      },
    ];

    return _.shuffle(achievements);
  },
};

export default fakers;
