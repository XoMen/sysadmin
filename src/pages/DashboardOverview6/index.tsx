import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import cafe from "@/fakers/cafe";
import ReportBarChart5 from "@/components/ReportBarChart5";
import ReportDonutChart5 from "@/components/ReportDonutChart5";
import Pagination from "@/components/Base/Pagination";
import { FormSelect } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import { Tab } from "@/components/Base/Headless";
import Table from "@/components/Base/Table";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();

  return (
    <div className="grid grid-cols-10 gap-y-10 gap-x-6">
      <div className="col-span-12 2xl:col-span-3 gap-y-10">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-12 md:col-span-6 2xl:col-span-12">
            <div className="flex items-center h-10">
              <div className="text-base font-medium group-[.mode--light]:text-white">
                موجودی فعلی
              </div>
            </div>
            <div className="mt-3.5 box box--stacked">
              <div className="p-5 border-b border-dashed">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div>
                    <div className="text-base text-slate-500">کل سفارشات</div>
                    <div className="flex items-center mt-1">
                      <div className="text-xl font-medium">1,241,221</div>
                      <div className="flex items-center ms-2.5 -me-1 text-success">
                        11%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                      </div>
                    </div>
                  </div>
                  <div className="sm:ms-auto">
                    <FormSelect className="px-4 sm:w-28">
                      <option value="monthly">ماهانه</option>
                      <option value="yearly">سالیانه</option>
                      <option value="weekly">Weekly</option>
                      <option value="daily">روزانه</option>
                    </FormSelect>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 px-5 py-6 border-b border-dashed">
                <div>
                  <div className="flex items-center text-slate-500">
                    <div className="me-auto">هدف سفارش</div>
                    <span className="ms-auto">201 / 410</span>
                  </div>
                  <div className="flex h-2 mt-2.5 border rounded-full bg-slate-50">
                    <div className="first:rounded-l last:rounded-r border border-theme-1/40 -m-px bg-theme-1/30 w-[75%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-slate-500">
                    <div className="me-auto">پیشرفت درآمد</div>
                    <span className="ms-auto">$8,500 / $10,000</span>
                  </div>
                  <div className="flex h-2 mt-2.5 border rounded-full bg-slate-50">
                    <div className="first:rounded-l last:rounded-r border border-theme-2/40 -m-px bg-theme-2/30 w-[45%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-slate-500">
                    <div className="me-auto">سفارشات تکمیل شده</div>
                    <span className="ms-auto">395 / 450</span>
                  </div>
                  <div className="flex h-2 mt-2.5 border rounded-full bg-slate-50">
                    <div className="first:rounded-l last:rounded-r border border-primary/40 -m-px bg-primary/30 w-[75%]"></div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-6">
                <Button
                  as="a"
                  variant="outline-primary"
                  rounded
                  className="relative justify-start w-full px-4 border-primary/20 py-2.5"
                  href=""
                >
                  جزئیات را کاوش کنید
                  <div className="absolute end-0 w-9 h-9 me-0.5 flex items-center justify-center border rounded-full bg-primary/[0.15] border-primary/[0.15]">
                    <Lucide icon="ArrowRight" className="w-4 h-4" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 2xl:col-span-12">
            <div className="flex items-center h-10">
              <div className="text-base font-medium md:group-[.mode--light]:text-white 2xl:group-[.mode--light]:text-current">
                تجزیه و تحلیل فروش
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
                      Weekly
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
                </Tab.List>
                <Tab.Panels className="mt-8">
                  <Tab.Panel>
                    <div className="[&>div]:!h-[200px] [&>div]:sm:!h-[160px] [&>div]:2xl:!h-[200px] relative w-4/5 mx-auto">
                      <ReportDonutChart5
                        className="relative z-10"
                        height={200}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg font-medium text-slate-600/90">
                            781,224
                          </div>
                          <div className="mt-1 text-slate-500">کل فروش</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center mt-7 gap-y-3 gap-x-5">
                      <div className="flex items-center text-slate-500">
                        <div className="w-2 h-2 me-2 border rounded-full border-primary/60 bg-primary/60"></div>
                        قهوه
                      </div>
                      <div className="flex items-center text-slate-500">
                        <div className="w-2 h-2 me-2 border rounded-full border-success/60 bg-success/60"></div>
                        شیرینی‌جات
                      </div>
                      <div className="flex items-center text-slate-500">
                        <div className="w-2 h-2 me-2 border rounded-full border-warning/60 bg-warning/60"></div>
                        نوشیدنی‌ها
                      </div>
                    </div>
                    <Button className="w-full border-dashed mt-9 border-slate-300 hover:bg-slate-50">
                      <Lucide
                        icon="ExternalLink"
                        className="stroke-[1.3] w-4 h-4 me-2"
                      />
                      گزارش صادرات
                    </Button>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 2xl:col-span-7 gap-y-10">
        <div>
          <div className="flex items-center h-10">
            <div className="text-base font-medium 2xl:group-[.mode--light]:text-white">
              بینش کافه
            </div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="flex flex-col lg:items-center lg:flex-row gap-y-5">
              <div className="flex flex-col sm:items-center sm:flex-row gap-x-3 gap-y-2">
                <div className="relative">
                  <Lucide
                    icon="CalendarCheck2"
                    className="absolute inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3]"
                  />
                  <FormSelect className="sm:w-44 ps-9">
                    <option value="custom-date">تاریخ سفارشی</option>
                    <option value="daily">روزانه</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">ماهانه</option>
                    <option value="yearly">سالیانه</option>
                  </FormSelect>
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
                    className="ps-9 sm:w-64 rounded-[0.3rem]"
                  />
                </div>
              </div>
              <div className="flex items-center lg:ms-auto gap-3.5">
                <a href="" className="flex items-center text-slate-500">
                  <Lucide icon="Printer" className="w-3.5 h-3.5 stroke-[1.7]" />
                  <div className="ms-1.5 whitespace-nowrap underline decoration-dotted decoration-slate-300 underline-offset-[3px]">
                    صدور به PDF
                  </div>
                </a>
                <a href="" className="flex items-center text-primary">
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
            <div className="py-5 mt-5 border border-dashed rounded-md border-slate-300/70">
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center flex-1 py-3 border-dashed md:border-r border-slate-300/70 last:border-0">
                  <div
                    className={clsx([
                      "group flex items-center justify-center w-10 h-10 border rounded-full me-5",
                      "[&.primary]:border-primary/10 [&.primary]:bg-primary/10",
                      "[&.success]:border-success/10 [&.success]:bg-success/10",
                      ["primary", "success"][_.random(0, 1)],
                    ])}
                  >
                    <Lucide
                      icon="KanbanSquare"
                      className={clsx([
                        "w-5 h-5",
                        "group-[.primary]:text-primary group-[.primary]:fill-primary/10",
                        "group-[.success]:text-success group-[.success]:fill-success/10",
                      ])}
                    />
                  </div>
                  <div className="flex flex-col flex-start">
                    <div className="text-slate-500">کل سفارشات</div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">876,221</div>
                      <div className="flex items-center ms-2 -me-1 text-xs text-success">
                        11%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-1 py-3 border-dashed md:border-r border-slate-300/70 last:border-0">
                  <div
                    className={clsx([
                      "group flex items-center justify-center w-10 h-10 border rounded-full me-5",
                      "[&.primary]:border-primary/10 [&.primary]:bg-primary/10",
                      "[&.success]:border-success/10 [&.success]:bg-success/10",
                      ["primary", "success"][_.random(0, 1)],
                    ])}
                  >
                    <Lucide
                      icon="PersonStanding"
                      className={clsx([
                        "w-5 h-5",
                        "group-[.primary]:text-primary group-[.primary]:fill-primary/10",
                        "group-[.success]:text-success group-[.success]:fill-success/10",
                      ])}
                    />
                  </div>
                  <div className="flex flex-col flex-start">
                    <div className="text-slate-500">بازخورد مشتری</div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">46,221</div>
                      <div className="flex items-center ms-2 -me-1 text-xs text-success">
                        2%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-1 py-3 border-dashed md:border-r border-slate-300/70 last:border-0">
                  <div
                    className={clsx([
                      "group flex items-center justify-center w-10 h-10 border rounded-full me-5",
                      "[&.primary]:border-primary/10 [&.primary]:bg-primary/10",
                      "[&.success]:border-success/10 [&.success]:bg-success/10",
                      ["primary", "success"][_.random(0, 1)],
                    ])}
                  >
                    <Lucide
                      icon="Banknote"
                      className={clsx([
                        "w-5 h-5",
                        "group-[.primary]:text-primary group-[.primary]:fill-primary/10",
                        "group-[.success]:text-success group-[.success]:fill-success/10",
                      ])}
                    />
                  </div>
                  <div className="flex flex-col flex-start">
                    <div className="text-slate-500">سفارشات قهوه</div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">350</div>
                      <div className="flex items-center ms-2 -me-1 text-xs text-danger">
                        4%
                        <Lucide icon="ChevronDown" className="w-4 h-4 ml-px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px mx-5 my-5 border-t border-dashed border-slate-300/70"></div>
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center flex-1 py-3 border-dashed md:border-r border-slate-300/70 last:border-0">
                  <div
                    className={clsx([
                      "group flex items-center justify-center w-10 h-10 border rounded-full me-5",
                      "[&.primary]:border-primary/10 [&.primary]:bg-primary/10",
                      "[&.success]:border-success/10 [&.success]:bg-success/10",
                      ["primary", "success"][_.random(0, 1)],
                    ])}
                  >
                    <Lucide
                      icon="Coffee"
                      className={clsx([
                        "w-5 h-5",
                        "group-[.primary]:text-primary group-[.primary]:fill-primary/10",
                        "group-[.success]:text-success group-[.success]:fill-success/10",
                      ])}
                    />
                  </div>
                  <div className="flex flex-col flex-start">
                    <div className="text-slate-500">کل تامین‌کننده</div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">1,523</div>
                      <div className="flex items-center ms-2 -me-1 text-xs text-success">
                        11%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-1 py-3 border-dashed md:border-r border-slate-300/70 last:border-0">
                  <div
                    className={clsx([
                      "group flex items-center justify-center w-10 h-10 border rounded-full me-5",
                      "[&.primary]:border-primary/10 [&.primary]:bg-primary/10",
                      "[&.success]:border-success/10 [&.success]:bg-success/10",
                      ["primary", "success"][_.random(0, 1)],
                    ])}
                  >
                    <Lucide
                      icon="CreditCard"
                      className={clsx([
                        "w-5 h-5",
                        "group-[.primary]:text-primary group-[.primary]:fill-primary/10",
                        "group-[.success]:text-success group-[.success]:fill-success/10",
                      ])}
                    />
                  </div>
                  <div className="flex flex-col flex-start">
                    <div className="text-slate-500">تجزیه و تحلیل هزینه‌ها</div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">261</div>
                      <div className="flex items-center ms-2 -me-1 text-xs text-success">
                        2%
                        <Lucide icon="ChevronUp" className="w-4 h-4 ml-px" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-1 py-3 border-dashed md:border-r border-slate-300/70 last:border-0">
                  <div
                    className={clsx([
                      "group flex items-center justify-center w-10 h-10 border rounded-full me-5",
                      "[&.primary]:border-primary/10 [&.primary]:bg-primary/10",
                      "[&.success]:border-success/10 [&.success]:bg-success/10",
                      ["primary", "success"][_.random(0, 1)],
                    ])}
                  >
                    <Lucide
                      icon="PackageSearch"
                      className={clsx([
                        "w-5 h-5",
                        "group-[.primary]:text-primary group-[.primary]:fill-primary/10",
                        "group-[.success]:text-success group-[.success]:fill-success/10",
                      ])}
                    />
                  </div>
                  <div className="flex flex-col flex-start">
                    <div className="text-slate-500">انواع قهوه</div>
                    <div className="flex items-center mt-1.5">
                      <div className="text-base font-medium">141</div>
                      <div className="flex items-center ms-2 -me-1 text-xs text-danger">
                        4%
                        <Lucide icon="ChevronDown" className="w-4 h-4 ml-px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">تجزیه و تحلیل درآمد</div>
          </div>
          <div className="p-5 mt-3.5 box box--stacked">
            <div className="flex flex-col lg:items-center lg:flex-row gap-y-5">
              <div className="flex flex-col sm:items-center sm:flex-row gap-x-3 gap-y-2">
                <div className="relative">
                  <Lucide
                    icon="CalendarCheck2"
                    className="absolute inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3]"
                  />
                  <FormSelect className="sm:w-44 ps-9">
                    <option value="custom-date">تاریخ سفارشی</option>
                    <option value="daily">روزانه</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">ماهانه</option>
                    <option value="yearly">سالیانه</option>
                  </FormSelect>
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
                    className="ps-9 sm:w-64 rounded-[0.3rem]"
                  />
                </div>
              </div>
              <div className="flex items-center lg:ms-auto gap-3.5">
                <a href="" className="flex items-center text-slate-500">
                  <Lucide icon="Printer" className="w-3.5 h-3.5 stroke-[1.7]" />
                  <div className="ms-1.5 whitespace-nowrap underline decoration-dotted decoration-slate-300 underline-offset-[3px]">
                    صدور به PDF
                  </div>
                </a>
                <a href="" className="flex items-center text-primary">
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
            <div className="mb-1 mt-7">
              <ReportBarChart5 height={220} />
            </div>
            <div className="flex flex-wrap items-center justify-center mt-5 gap-y-3 gap-x-5">
              <div className="flex items-center text-slate-500">
                <div className="w-2 h-2 me-2 border rounded-full border-primary/60 bg-primary/60"></div>{" "}
                کل درآمد
              </div>
              <div className="flex items-center text-slate-500">
                <div className="w-2 h-2 me-2 border rounded-full border-slate-500/60 bg-slate-500/60"></div>{" "}
                بازدیدهای مشتری
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium">لینک‌های سریع</div>
            <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ms-auto">
              <div className="relative">
                <Lucide
                  icon="CalendarCheck2"
                  className="absolute inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3]"
                />
                <FormSelect className="sm:w-44 rounded-[0.5rem] ps-9">
                  <option value="custom-date">تاریخ سفارشی</option>
                  <option value="daily">روزانه</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">ماهانه</option>
                  <option value="yearly">سالیانه</option>
                </FormSelect>
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
          </div>
          <div className="mt-3.5 box box--stacked">
            <div className="overflow-auto xl:overflow-visible">
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Td className="font-medium bg-slate-50 first:rounded-ss-[0.6rem] last:rounded-se-[0.6rem] py-5 border-slate-200/80 text-slate-500">
                      تاریخ
                    </Table.Td>
                    <Table.Td className="w-56 font-medium bg-slate-50 first:rounded-ss-[0.6rem] last:rounded-se-[0.6rem] py-5 border-slate-200/80 text-slate-500">
                      موارد منو فروخته شده
                    </Table.Td>
                    <Table.Td className="truncate font-medium bg-slate-50 first:rounded-ss-[0.6rem] last:rounded-se-[0.6rem] py-5 border-slate-200/80 text-slate-500">
                      بازخورد مشتری
                    </Table.Td>
                    <Table.Td className="w-32 truncate text-end font-medium bg-slate-50 first:rounded-ss-[0.6rem] last:rounded-se-[0.6rem] py-5 border-slate-200/80 text-slate-500">
                      کل فروش
                    </Table.Td>
                    <Table.Td className="w-32 font-medium bg-slate-50 first:rounded-ss-[0.6rem] last:rounded-se-[0.6rem] py-5 text-center border-slate-200/80 text-slate-500">
                      عملیات
                    </Table.Td>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {_.take(cafe.fakeCafeSales(), 5).map((faker, fakerKey) => (
                    <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                      <Table.Td className="py-5 first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 border-t-0 border-dashed dark:bg-darkmode-600">
                        <a href="" className="whitespace-nowrap">
                          {faker.date}
                        </a>
                      </Table.Td>
                      <Table.Td className="py-5 first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 border-t-0 border-dashed dark:bg-darkmode-600">
                        <a href="" className="flex items-center text-primary">
                          <Lucide
                            icon="ExternalLink"
                            className="w-3.5 h-3.5 stroke-[1.7]"
                          />
                          <div className="ms-1.5 whitespace-nowrap">
                            {faker.menuItemsSold}
                          </div>
                        </a>
                      </Table.Td>
                      <Table.Td className="py-5 first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 border-t-0 border-dashed dark:bg-darkmode-600">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-pending fill-pending/30"
                            />
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-pending fill-pending/30"
                            />
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-pending fill-pending/30"
                            />
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-pending fill-pending/30"
                            />
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-slate-400 fill-slate/30"
                            />
                          </div>
                          <div className="ms-1 text-xs text-slate-500">
                            ({faker.customerFeedback})
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="text-end py-5 first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 border-t-0 border-dashed dark:bg-darkmode-600">
                        <a href="" className="font-medium whitespace-nowrap">
                          {faker.totalSales}
                        </a>
                      </Table.Td>
                      <Table.Td className="py-5 relative first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 border-t-0 border-dashed dark:bg-darkmode-600">
                        <div className="flex items-center justify-center">
                          <Menu className="h-5">
                            <Menu.Button className="w-5 h-5 text-slate-500">
                              <Lucide
                                icon="MoreVertical"
                                className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                              />
                            </Menu.Button>
                            <Menu.Items className="w-40">
                              <Menu.Item>
                                <Lucide
                                  icon="FileLineChart"
                                  className="w-4 h-4 me-2"
                                />
                                گزارش فروش
                              </Menu.Item>
                              <Menu.Item>
                                <Lucide
                                  icon="FileCheck2"
                                  className="w-4 h-4 me-2"
                                />
                                جزئیات مورد
                              </Menu.Item>
                            </Menu.Items>
                          </Menu>
                        </div>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
          </div>
          <div className="flex flex-col-reverse flex-wrap items-center mt-8 flex-reverse gap-y-2 sm:flex-row">
            <Pagination className="flex-1 w-full me-auto sm:w-auto">
              <Pagination.Link>
                <Lucide icon="ChevronsLeft" className="w-4 h-4" />
              </Pagination.Link>
              <Pagination.Link>
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
              </Pagination.Link>
              <Pagination.Link>...</Pagination.Link>
              <Pagination.Link>1</Pagination.Link>
              <Pagination.Link active>2</Pagination.Link>
              <Pagination.Link>3</Pagination.Link>
              <Pagination.Link>...</Pagination.Link>
              <Pagination.Link>
                <Lucide icon="ChevronRight" className="w-4 h-4" />
              </Pagination.Link>
              <Pagination.Link>
                <Lucide icon="ChevronsRight" className="w-4 h-4" />
              </Pagination.Link>
            </Pagination>
            <FormSelect className="sm:w-20 rounded-[0.5rem]">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </FormSelect>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
