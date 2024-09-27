import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import ReportLineChart2 from "@/components/ReportLineChart2";
import ReportLineChart3 from "@/components/ReportLineChart3";
import ReportLineChart4 from "@/components/ReportLineChart1";
import ReportDonutChart4 from "@/components/ReportDonutChart4";
import ReportBarChart from "@/components/ReportBarChart";
import products from "@/fakers/products";
import countries from "@/fakers/countries";
import { FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import { Tab } from "@/components/Base/Headless";
import { useState } from "react";
import _ from "lodash";

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12 lg:col-span-8 2xl:col-span-6">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium group-[.mode--light]:text-white">
              بینش تولید
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="flex flex-col gap-3 sm:items-center sm:flex-row">
              <div className="sm:me-auto">
                <div className="text-base text-slate-500">
                  مجموع واحدهای تولیدی
                </div>
                <div className="flex items-center mt-1">
                  <div className="text-xl font-medium">24,176,221</div>
                  <div className="flex items-center ms-2 -me-1 text-xs text-success">
                    11%
                    <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <Lucide
                  icon="Calendar"
                  className="absolute inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3]"
                />
                <Litepicker
                  value={generalReportFilter}
                  onChange={(e) => {
                    setGeneralReportFilter(e.target.value);
                  }}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="ps-9 sm:w-64 rounded-[0.5rem]"
                />
              </div>
            </div>
            <div className="mt-3">
              <ReportLineChart2 height={317} />
            </div>
            <div className="flex flex-col items-center gap-3 mt-5 sm:flex-row">
              <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
                <div className="flex items-center text-slate-500">
                  <div className="w-2 h-2 me-2 border rounded-full border-primary/60 bg-primary/60"></div>{" "}
                  عملکرد دستگاه
                </div>
                <div className="flex items-center text-slate-500">
                  <div className="w-2 h-2 me-2 border rounded-full border-slate-500/60 bg-slate-500/60"></div>{" "}
                  نرخ عیب
                </div>
              </div>
              <a href="" className="flex items-center sm:ms-auto text-primary">
                <Lucide
                  icon="ExternalLink"
                  className="w-3.5 h-3.5 stroke-[1.7]"
                />
                <div className="ms-1.5 whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                  نمایش گزارش کامل
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium lg:group-[.mode--light]:text-white">
              کارآیی تولید
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1 lg:col-span-2 p-5 mt-3.5 box box--stacked">
              <div className="relative h-1/2">
                <div className="text-base text-slate-500">مواد خام</div>
                <div className="flex items-center mt-1">
                  <div className="text-xl font-medium">3,700,121</div>
                  <div className="flex items-center ms-2 -me-1 text-xs text-danger">
                    4%
                    <Lucide icon="ChevronDown" className="w-4 h-4 ml-px" />
                  </div>
                </div>
                <div className="mt-4">
                  <ReportLineChart3 className="-mb-3 -ms-1.5" height={101} />
                </div>
                <Menu className="absolute top-0 end-0">
                  <Menu.Button className="w-5 h-5 text-slate-500">
                    <Lucide
                      icon="MoreVertical"
                      className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                    />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>
                      <Lucide icon="Copy" className="w-4 h-4 me-2" /> کپی لینک
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Trash" className="w-4 h-4 me-2" />
                      حذف
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-2 p-5 mt-3.5 box box--stacked">
              <div className="relative h-1/2">
                <div className="text-base text-slate-500">موجودی محصول</div>
                <div className="flex items-center mt-1">
                  <div className="text-xl font-medium">1,246,221</div>
                  <div className="flex items-center ms-2 -me-1 text-xs text-success">
                    8%
                    <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                  </div>
                </div>
                <div className="mt-4">
                  <ReportLineChart4 className="-mb-3 -ms-1.5" height={101} />
                </div>
                <Menu className="absolute top-0 end-0">
                  <Menu.Button className="w-5 h-5 text-slate-500">
                    <Lucide
                      icon="MoreVertical"
                      className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                    />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>
                      <Lucide icon="Copy" className="w-4 h-4 me-2" /> کپی لینک
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Trash" className="w-4 h-4 me-2" />
                      حذف
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 2xl:col-span-3">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium 2xl:group-[.mode--light]:text-white">
              خلاصه جمعیت‌شناسی
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <Menu className="absolute top-0 end-0 mt-5 me-5">
              <Menu.Button className="w-5 h-5 text-slate-500">
                <Lucide
                  icon="MoreVertical"
                  className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Copy" className="w-4 h-4 me-2" /> کپی لینک
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Trash" className="w-4 h-4 me-2" />
                  حذف
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="pb-5 mb-6 border-b border-dashed border-slate-300/70">
              <div className="text-base text-slate-500">کل مشتریان</div>
              <div className="flex items-center mt-1">
                <div className="text-xl font-medium">301,081,421</div>
                <div className="flex items-center ms-2 -me-1 text-xs text-danger">
                  4%
                  <Lucide icon="ChevronDown" className="w-4 h-4 ml-px" />
                </div>
              </div>
            </div>
            <div>
              {_.take(countries.fakeCountries(), 7).map((faker, fakerKey) => (
                <div
                  className="flex items-center mb-[18px] [&:nth-of-type(n+5)]:hidden [&:nth-of-type(n+5)]:2xl:flex"
                  key={fakerKey}
                >
                  <div className="w-[22px] h-[22px] overflow-hidden border-2 rounded-full image-fit border-slate-200/70 box">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={faker.image}
                    />
                  </div>
                  <div className="pe-8 ms-2.5 truncate">{faker.name}</div>
                  <div className="ms-auto">
                    {_.random(1, 20) * (7 - fakerKey)},{_.random(1, 9)}M
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-1.5 border-dashed border-slate-300 hover:bg-slate-50">
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 me-2"
              />{" "}
              مشاهده گزارش کامل
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 md:col-span-6 2xl:col-span-4 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">اهداف و تاخیرات</div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="pb-5 border-b border-dashed mb-7 border-slate-300/70">
              <div className="flex flex-col gap-3 sm:items-center sm:flex-row">
                <div>
                  <div className="text-base text-slate-500">
                    مجموع واحدهای هدف
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="text-xl font-medium">24,081,421</div>
                    <div className="flex items-center ms-2 -me-1 text-xs text-danger">
                      4%
                      <Lucide icon="ChevronDown" className="w-4 h-4 ml-px" />
                    </div>
                  </div>
                </div>
                <div className="relative sm:ms-auto">
                  <Lucide
                    icon="CalendarCheck2"
                    className="absolute inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3]"
                  />
                  <FormSelect className="sm:w-32 ps-9">
                    <option value="daily">روزانه</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">ماهانه</option>
                    <option value="yearly">سالیانه</option>
                  </FormSelect>
                </div>
              </div>
            </div>
            <ReportDonutChart4 className="relative z-10" height={100} />
            <div className="flex flex-wrap items-center justify-center mt-5 gap-y-3 gap-x-5">
              <div className="flex items-center text-slate-500">
                <div className="w-2 h-2 me-2 border rounded-full border-primary/60 bg-primary/60"></div>{" "}
                اهداف تولید
              </div>
              <div className="flex items-center text-slate-500">
                <div className="w-2 h-2 me-2 border rounded-full border-info/60 bg-info/60"></div>{" "}
                تاخیرات عملیاتی
              </div>
            </div>
            <Button className="w-full mt-6 border-dashed border-slate-300 hover:bg-slate-50">
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 me-2"
              />{" "}
              مشاهده گزارش کامل
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 md:col-span-6 2xl:col-span-4 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">
              اطلاعیه تاخیر تولید
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <Menu className="absolute top-0 end-0 mt-5 me-5">
              <Menu.Button className="w-5 h-5 text-slate-500">
                <Lucide
                  icon="MoreVertical"
                  className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                />
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Copy" className="w-4 h-4 me-2" /> کپی لینک
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="Trash" className="w-4 h-4 me-2" />
                  حذف
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="flex items-center">
              <Lucide
                icon="Zap"
                className="w-6 h-6 me-2.5 text-warning fill-warning/10"
              />{" "}
              <div className="text-base">
                <span className="font-medium">10+ Units</span> delayed in
                خط تولید.
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <div className="flex">
                {_.take(products.fakeProducts(), 5).map((faker, fakerKey) => (
                  <div
                    className="w-11 h-11 -ms-3.5 first:ms-0 image-fit zoom-in"
                    key={fakerKey}
                  >
                    <Tippy
                      as="img"
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      className="border-[3px] border-slate-50 rounded-full cursor-pointer"
                      src={faker.images[0].path}
                      content={faker.name}
                    />
                  </div>
                ))}
              </div>
              <div className="inset-y-0 z-10 font-medium flex items-center h-[22px] px-2.5 my-auto -ms-3 text-xs bg-white border border-slate-200/80 rounded-full shadow text-primary">
                24+
              </div>
            </div>
            <div className="mt-5 leading-relaxed text-center text-slate-600">
              ما یک تاخیر در خط تولید شناسایی کرده‌ایم که
              بیش از 10 واحد را تحت تأثیر قرار داده است. تیم ما به فعالیت برای حل
              این مشکل و بازگرداندن تولید به مسیر صحیح مشغول است.
            </div>
            <Button className="w-full mt-7 border-primary/20 text-primary/80 hover:bg-slate-50">
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 me-2"
              />{" "}
              مشاهده جزئیات
            </Button>
            <Button
              variant="outline-secondary"
              className="w-full mt-2.5 border-slate-300/60 hover:bg-slate-50"
            >
              <Lucide
                icon="ChevronRightSquare"
                className="stroke-[1.3] w-4 h-4 me-2"
              />{" "}
              تصدیق
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 md:col-span-6 2xl:col-span-4 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">
              خروجی تولید به صورت زنده
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <Tab.Group className="mt-1">
              <Tab.List
                variant="boxed-tabs"
                className="w-3/4 mx-auto bg-white shadow-sm rounded-[0.6rem] border-slate-200"
              >
                <Tab className="bg-slate-50 first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] [&[aria-selected='true']_button]:text-current">
                  <Tab.Button
                    className="w-full text-slate-500 whitespace-nowrap rounded-[0.6rem]"
                    as="button"
                  >
                    روزانه
                  </Tab.Button>
                </Tab>
                <Tab className="bg-slate-50 first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] [&[aria-selected='true']_button]:text-current">
                  <Tab.Button
                    className="w-full text-slate-500 whitespace-nowrap rounded-[0.6rem]"
                    as="button"
                  >
                    ماهانه
                  </Tab.Button>
                </Tab>
                <Tab className="bg-slate-50 first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] [&[aria-selected='true']_button]:text-current">
                  <Tab.Button
                    className="w-full text-slate-500 whitespace-nowrap rounded-[0.6rem]"
                    as="button"
                  >
                    سالیانه
                  </Tab.Button>
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-10">
                <Tab.Panel>
                  <div className="w-4/5 mx-auto">
                    <ReportBarChart className="relative z-10" height={121} />
                  </div>
                  <div className="flex flex-wrap items-center justify-center mt-4 gap-y-3 gap-x-5">
                    <div className="flex items-center text-slate-500">
                      <div className="w-2 h-2 me-2 border rounded-full border-primary/60 bg-primary/60"></div>{" "}
                      نرخ تولید
                    </div>
                    <div className="flex items-center text-slate-500">
                      <div className="w-2 h-2 me-2 border rounded-full border-info/60 bg-info/60"></div>{" "}
                      سرعت خروجی
                    </div>
                  </div>
                  <Button className="w-full mt-6 border-dashed border-slate-300 hover:bg-slate-50">
                    <Lucide
                      icon="ExternalLink"
                      className="stroke-[1.3] w-4 h-4 me-2"
                    />{" "}
                    مشاهده گزارش کامل
                  </Button>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
