import _ from "lodash";
import countries, { type Country } from "./countries";

export interface Department {
  id: number;
  name: string;
  location: Country;
  head: string;
  employees: number;
  budget: string;
}

const fakers = {
  fakeDepartments() {
    const departments: Array<Department> = [
      {
        id: 1,
        name: "فروش",
        location: countries.fakeCountries()[0],
        head: "جان دو",
        employees: 35,
        budget: "$2,500,000",
      },
      {
        id: 2,
        name: "بازاریابی",
        location: countries.fakeCountries()[0],
        head: "جین اسمیت",
        employees: 42,
        budget: "$1,800,000",
      },
      {
        id: 3,
        name: "پشتیبانی مشتری",
        location: countries.fakeCountries()[0],
        head: "دیوید جانسون",
        employees: 28,
        budget: "$1,200,000",
      },
      {
        id: 4,
        name: "مالی",
        location: countries.fakeCountries()[0],
        head: "سارا ویلیامز",
        employees: 19,
        budget: "$3,000,000",
      },
      {
        id: 5,
        name: "منابع انسانی",
        location: countries.fakeCountries()[0],
        head: "مایکل براون",
        employees: 14,
        budget: "$900,000",
      },
      {
        id: 6,
        name: "مهندسی",
        location: countries.fakeCountries()[0],
        head: "امیلی دیویس",
        employees: 56,
        budget: "$4,500,000",
      },
      {
        id: 7,
        name: "مدیریت محصول",
        location: countries.fakeCountries()[0],
        head: "دنیل لی",
        employees: 23,
        budget: "$2,200,000",
      },
      {
        id: 8,
        name: "عملیات",
        location: countries.fakeCountries()[0],
        head: "الیویا ویلسون",
        employees: 31,
        budget: "$1,600,000",
      },
      {
        id: 9,
        name: "تحقیق و توسعه",
        location: countries.fakeCountries()[0],
        head: "متیو تیلور",
        employees: 47,
        budget: "$3,800,000",
      },
      {
        id: 10,
        name: "ضمانت کیفیت",
        location: countries.fakeCountries()[0],
        head: "صوفیا آندرسون",
        employees: 25,
        budget: "$1,300,000",
      },
    ];

    return _.shuffle(departments);
  },
};

export default fakers;
