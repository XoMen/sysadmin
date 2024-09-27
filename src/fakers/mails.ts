import _ from "lodash";
import dayjs from "dayjs";
import users, { type User } from "./users";

export interface Mail {
  sender: User;
  subject: string;
  content: string;
  date: string;
  opened: boolean;
}

const fakers = {
  fakeMails() {
    const mails: Array<Mail> = [
      {
        sender: users.fakeUsers()[0],
        subject: "درباره مهلت پروژه",
        content:
          "Hello team, I wanted to discuss the upcoming project deadline. Let's meet tomorrow to go over the details.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "گزارش وضعیت هفتگی",
        content:
          "Hi everyone, please submit your weekly status reports by the end of the day. Thank you!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "دعوت به ناهار تیم",
        content:
          "Dear team, we're organizing a team lunch this Friday at the new Italian restaurant. Please RSVP by Wednesday.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "راه‌اندازی محصول جدید",
        content:
          "Hello everyone, we're excited to announce the launch of our new product line. Check out the attached brochure for details.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "جلسه آموزشی آینده",
        content:
          "Hi team, there will be a training session on the new software next Monday. Be sure to attend!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "جلسه به‌روزرسانی پروژه",
        content:
          "Dear team, let's schedule a project update meeting for next week to discuss our progress.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "اعلان مهم",
        content:
          "Hello team, we have an important announcement regarding changes to the company policies. Please read the attached document.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "رویداد ساخت تیم",
        content:
          "Hi everyone, get ready for a fun team-building event this weekend! Don't forget to bring your enthusiasm.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "- عزیزان، جلسه‌ی برنامه‌ریزی‌شده برای فردا به هفته‌ی بعد موکول شده است. تقویم‌های به‌روز‌شده‌ی خود را بررسی کنید.",
        content:
          "Dear team, the meeting scheduled for tomorrow has been rescheduled to next week. Check your updated calendars.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "برنامه تعطیلات",
        content:
          "Hello team, here is the holiday schedule for the upcoming month. Plan your time off accordingly.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "به‌روزرسانی مهم: سیاست‌های جدید",
        content:
          "Hello team, please review the updated company policies attached to this email.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "یادآوری: جلسه تیم فردا",
        content:
          "Hi everyone, a reminder that we have a team meeting scheduled for tomorrow. Don't forget to prepare your updates.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "تمدید مهلت پروژه",
        content:
          "Dear team, we've extended the project deadline by one week. Please adjust your schedules accordingly.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "تبریک بابت راه‌اندازی موفق!",
        content:
          "Hello team, I wanted to congratulate everyone on the successful launch of our new product. Great job!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "جلسه آموزشی آینده",
        content:
          "Hi team, there will be a training session on the new software next Monday. Be sure to attend!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "جلسه به‌روزرسانی پروژه",
        content:
          "Dear team, let's schedule a project update meeting for next week to discuss our progress.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "اعلان مهم",
        content:
          "Hello team, we have an important announcement regarding changes to the company policies. Please read the attached document.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "رویداد ساخت تیم",
        content:
          "Hi everyone, get ready for a fun team-building event this weekend! Don't forget to bring your enthusiasm.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "- عزیزان، جلسه‌ی برنامه‌ریزی‌شده برای فردا به هفته‌ی بعد موکول شده است. تقویم‌های به‌روز‌شده‌ی خود را بررسی کنید.",
        content:
          "Dear team, the meeting scheduled for tomorrow has been rescheduled to next week. Check your updated calendars.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: true,
      },
      {
        sender: users.fakeUsers()[0],
        subject: "برنامه تعطیلات",
        content:
          "Hello team, here is the holiday schedule for the upcoming month. Plan your time off accordingly.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        opened: false,
      },
    ];

    return _.shuffle(mails);
  },
};

export default fakers;
