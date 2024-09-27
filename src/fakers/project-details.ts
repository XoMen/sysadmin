import _ from "lodash";
import users, { type User } from "./users";

export interface ProjectDetail {
  title: string;
  link: string;
  contributors: Array<User>;
  image: string;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/projects/*.{jpg,jpeg,png,svg}", { eager: true });

function generateRandomLink() {
  const randomChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return `http://left4code.com/share/${Array.from(
    { length: 10 },
    () => randomChars[Math.floor(Math.random() * randomChars.length)]
  ).join("")}`;
}

const fakers = {
  fakeProjectDetails() {
    const projectDetails: Array<ProjectDetail> = [
      {
        title: "پوستر کمپین بازاریابی",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project1-400x400.jpg"]
            .default,
      },
      {
        title: "گرافیک شبکه‌های اجتماعی",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project2-400x400.jpg"]
            .default,
      },
      {
        title: "طرح موکاپ بازطراحی وب‌سایت",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project3-400x400.jpg"]
            .default,
      },
      {
        title: "تقویم محتوا",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project4-400x400.jpg"]
            .default,
      },
      {
        title: "الگوهای کمپین ایمیل",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project5-400x400.jpg"]
            .default,
      },
      {
        title: "گزارش تحقیقات بازار",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project6-400x400.jpg"]
            .default,
      },
      {
        title: "تبلیغات ویدیویی",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project7-400x400.jpg"]
            .default,
      },
      {
        title: "بروشورهای محصول",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project8-400x400.jpg"]
            .default,
      },
      {
        title: "تجزیه و تحلیل رسانه‌های اجتماعی",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project9-400x400.jpg"]
            .default,
      },
      {
        title: "پرده‌ای پیشنهاد فروش",
        link: generateRandomLink(),
        contributors: users.fakeUsers(),
        image:
          imageAssets["/src/assets/images/projects/project10-400x400.jpg"]
            .default,
      },
    ];

    return _.shuffle(projectDetails);
  },
};

export default fakers;
