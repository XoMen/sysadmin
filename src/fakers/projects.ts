import _ from "lodash";
import dayjs from "dayjs";
import users, { type User } from "./users";

export interface Project {
  projectName: string;
  projectManager: User;
  creativeDirector: User;
  dueDate: string;
}

const fakers = {
  fakeProjects() {
    const projects: Array<Project> = [
      {
        projectName: "سفر وب: بازطراحی آینده - ۲۰۴۳",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "ماجراجویی‌های برنامه: ساخت جادو - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "مجموعه‌های محتوا: شکل‌دهی به داستان‌ها - ۲۰۴۳",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "داستان‌های مشتری: ماجراجویی مشارکت - ۲۰۴۲",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "Social Symphony: Spring Serenade - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "جادوی تجارت الکترونیک: شگفتی‌های زمستان - ۲۰۴۳",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "پیشگامان بهره‌وری: سفر به کارآیی - 2042",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "برند باله: رقص بهار - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "بازارQuest: کاوش در افق‌های جدید - 2042",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        projectName: "سال موفقیت تابستانی - 2043",
        projectManager: users.fakeUsers()[0],
        creativeDirector: users.fakeUsers()[0],
        dueDate: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
    ];

    return _.shuffle(projects);
  },
};

export default fakers;
