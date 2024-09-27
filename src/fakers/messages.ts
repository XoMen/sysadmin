import _ from "lodash";
import dayjs from "dayjs";
import users, { type User } from "./users";

export interface Message {
  id: string;
  sender: User;
  content: string;
  date: string;
  time: string;
}

const fakers = {
  fakeMessages() {
    const messages: Array<Message> = [
      {
        id: "1",
        sender: users.fakeUsers()[0],
        content: "سلام!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۰۹:۰۰ صبح",
      },
      {
        id: "2",
        sender: users.fakeUsers()[0],
        content: "سلام، حالت چطوره؟",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۲:۳۰ بعد از ظهر",
      },
      {
        id: "3",
        sender: users.fakeUsers()[0],
        content: "صبح بخیر!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "10:00 صبح",
      },
      {
        id: "4",
        sender: users.fakeUsers()[0],
        content: "چه خبر؟",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۱۱:۱۵ صبح",
      },
      {
        id: "5",
        sender: users.fakeUsers()[0],
        content: "خوبم، متشکرم!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۰۹:۰۰ صبح",
      },
      {
        id: "6",
        sender: users.fakeUsers()[0],
        content: "برنامه‌ای برای آخر هفته دارید؟",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "03:00 بعدازظهر",
      },
      {
        id: "7",
        sender: users.fakeUsers()[0],
        content: "هنوز نه، اما دارم به فکر صعود کوه می‌افتم.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۰۷:۳۰ بعدازظهر",
      },
      {
        id: "8",
        sender: users.fakeUsers()[0],
        content: "این به نظر جالب می‌آید!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "10:30 صبح",
      },
      {
        id: "9",
        sender: users.fakeUsers()[0],
        content: "سلام همگی!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "۸:۰۰ بعد از ظهر",
      },
      {
        id: "10",
        sender: users.fakeUsers()[0],
        content: "سلام جیمز!",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        time: "03:00 بعدازظهر",
      },
    ];

    return _.shuffle(messages);
  },
};

export default fakers;
