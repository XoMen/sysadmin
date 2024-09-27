import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
import { getColor } from "@/utils/colors";
import ReportLineChart from "@/components/ReportLineChart";
import ReportDonutChart3 from "@/components/ReportDonutChart3";
import Pagination from "@/components/Base/Pagination";
import { FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import eCommerce from "@/fakers/e-commerce";
import transactions from "@/fakers/transactions";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import Table from "@/components/Base/Table";
import { useState, useRef } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [generalReportFilter, setGeneralReportFilter] = useState<string>();
  const sliderRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    sliderRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    sliderRef.current?.tns.goTo("next");
  };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            گزارش عمومی
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ms-auto">
            <div className="relative">
              <Lucide
                icon="CalendarCheck2"
                className="absolute group-[.mode--light]:!text-slate-200 inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3]"
              />
              <FormSelect className="sm:w-44 rounded-[0.5rem] group-[.mode--light]:bg-chevron-white group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent ps-9">
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
                className="absolute group-[.mode--light]:!text-slate-200 inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3]"
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
                className="ps-9 sm:w-64 rounded-[0.5rem] group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-3.5">
          <div className="col-span-12 p-1 md:col-span-6 2xl:col-span-3 box box--stacked">
            <div className="-mx-1 overflow-hidden h-[244px] [&_.tns-nav]:bottom-auto [&_.tns-nav]:w-auto [&_.tns-nav]:ms-5 [&_.tns-nav]:mt-5 [&_.tns-nav_button]:w-2 [&_.tns-nav_button]:h-2 [&_.tns-nav_button.tns-nav-active]:w-5 [&_.tns-nav_button]:mx-0.5 [&_.tns-nav_button]:bg-white/40 [&_.tns-nav_button.tns-nav-active]:bg-white/70">
              <TinySlider options={{ mode: "gallery", nav: true }}>
                <div className="px-1">
                  <div className="overflow-hidden relative flex flex-col w-full h-full p-5 rounded-[0.5rem] bg-gradient-to-b from-theme-2/90 to-theme-1/[0.85]">
                    <Lucide
                      icon="Medal"
                      className="absolute top-0 end-0 w-36 h-36 -mt-5 -me-5 text-white/20 fill-white/[0.03] transform rotate-[-10deg] stroke-[0.3]"
                    />
                    <div className="mt-12 mb-9">
                      <div className="text-2xl font-medium leading-snug text-white">
                        ویژگی جدید
                        <br />
                        باز کردن شد!
                      </div>
                      <div className="mt-1.5 text-lg text-white/70">
                        عملکرد خود را بهبود بخشید!
                      </div>
                    </div>
                    <a
                      className="flex items-center font-medium text-white"
                      href=""
                    >
                      هم‌اکنون ارتقا دهید
                      <Lucide icon="MoveRight" className="w-4 h-4 ms-1.5" />
                    </a>
                  </div>
                </div>
                <div className="px-1">
                  <div className="overflow-hidden relative flex flex-col w-full h-full p-5 rounded-[0.5rem] bg-gradient-to-b from-theme-2/90 to-theme-1/90">
                    <Lucide
                      icon="Database"
                      className="absolute top-0 end-0 w-36 h-36 -mt-5 -me-5 text-white/20 fill-white/[0.03] transform rotate-[-10deg] stroke-[0.3]"
                    />
                    <div className="mt-12 mb-9">
                      <div className="text-2xl font-medium leading-snug text-white">
                        پیشی را حفظ کنید
                        <br />
                        با ارتقاها
                      </div>
                      <div className="mt-1.5 text-lg text-white/70">
                        ویژگی‌ها و به‌روزرسانی‌های جدید!
                      </div>
                    </div>
                    <a
                      className="flex items-center font-medium text-white"
                      href=""
                    >
                      اکنون کشف کنید
                      <Lucide icon="ArrowRight" className="w-4 h-4 ms-1.5" />
                    </a>
                  </div>
                </div>
                <div className="px-1">
                  <div className="overflow-hidden relative flex flex-col w-full h-full p-5 rounded-[0.5rem] bg-gradient-to-b from-theme-2/90 to-theme-1/90">
                    <Lucide
                      icon="Gauge"
                      className="absolute top-0 end-0 w-36 h-36 -mt-5 -me-5 text-white/20 fill-white/[0.03] transform rotate-[-10deg] stroke-[0.3]"
                    />
                    <div className="mt-12 mb-9">
                      <div className="text-2xl font-medium leading-snug text-white">
                        عملکرد خود را افزایش دهید
                        <br />
                        جریان کاری خود را
                      </div>
                      <div className="mt-1.5 text-lg text-white/70">
                        عملکرد را بهبود بخشید!
                      </div>
                    </div>
                    <a
                      className="flex items-center font-medium text-white"
                      href=""
                    >
                      شروع کنید
                      <Lucide icon="ArrowRight" className="w-4 h-4 ms-1.5" />
                    </a>
                  </div>
                </div>
              </TinySlider>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">
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
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="Database"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ms-4">
                <div className="text-base font-medium">41 هزار محصول فروخته شده</div>
                <div className="text-slate-500 mt-0.5">در 21 فروشگاه</div>
              </div>
            </div>
            <div className="relative mt-5 mb-6 overflow-hidden">
              <div className="absolute inset-0 h-px my-auto tracking-widest text-slate-400/60 whitespace-nowrap leading-[0] text-xs">
                .......................................................................
              </div>
              <ReportLineChart
                className="relative z-10 -ms-1.5"
                height={100}
                index={2}
                borderColor={getColor("primary")}
                backgroundColor={getColor("primary", 0.3)}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                <div className="ms-2.5">محصولات فروخته شده</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div className="ms-2.5">موقعیت فروشگاه‌ها</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">
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
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-success/10 bg-success/10">
                <Lucide
                  icon="Files"
                  className="w-6 h-6 text-success fill-success/10"
                />
              </div>
              <div className="ms-4">
                <div className="text-base font-medium">
                  36 هزار محصول ارسال شده
                </div>
                <div className="text-slate-500 mt-0.5">
                  در 14 انبار
                </div>
              </div>
            </div>
            <div className="relative mt-5 mb-6 overflow-hidden">
              <div className="absolute inset-0 h-px my-auto tracking-widest text-slate-400/60 whitespace-nowrap leading-[0] text-xs">
                .......................................................................
              </div>
              <ReportLineChart
                className="relative z-10 -ms-1.5"
                height={100}
                index={0}
                borderColor={getColor("success")}
                backgroundColor={getColor("success", 0.3)}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success/70"></div>
                <div className="ms-2.5">مجموع ارسال شده</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div className="ms-2.5">انبارها</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">
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
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="Zap"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ms-4">
                <div className="text-base font-medium">
                  3.7 هزار سفارش پردازش شده
                </div>
                <div className="text-slate-500 mt-0.5">در 9 منطقه</div>
              </div>
            </div>
            <div className="relative mt-5 mb-6">
              <ReportDonutChart3 className="relative z-10" height={100} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                <div className="ms-2.5">حجم سفارش</div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-danger/70"></div>
                <div className="ms-2.5">محدوده پوشش</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium">بینش‌های عملکرد</div>
          <div className="flex gap-x-3 gap-y-2 md:ms-auto">
            <Button
              data-carousel="important-notes"
              data-target="prev"
              className="rounded-[0.5rem] bg-white text-slate-600 dark:text-slate-300"
              onClick={prevImportantNotes}
            >
              <div className="flex items-center justify-center w-3.5 h-5">
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
              </div>
            </Button>
            <Button
              data-carousel="important-notes"
              data-target="next"
              className="rounded-[0.5rem] bg-white text-slate-600 dark:text-slate-300"
              onClick={nextImportantNotes}
            >
              <div className="flex items-center justify-center w-3.5 h-5">
                <Lucide icon="ChevronRight" className="w-4 h-4" />
              </div>
            </Button>
          </div>
        </div>
        <div className="mt-3.5 -mx-2.5">
          <TinySlider
            options={{
              autoplay: false,
              controls: false,
              items: 1,
              responsive: {
                640: { items: 2 },
                768: { items: 3 },
                1024: { items: 4 },
                1320: {
                  items: 5,
                },
              },
            }}
            getRef={(el) => {
              sliderRef.current = el;
            }}
          >
            {eCommerce.fakePerformanceInsights().map((faker, fakerKey) => (
              <div className="px-2.5 pb-3" key={fakerKey}>
                <div className="relative p-5 box box--stacked">
                  <div className="flex items-center">
                    <div
                      className={clsx([
                        "group flex items-center justify-center w-10 h-10 border rounded-full",
                        "[&.primary]:border-primary/10 [&.primary]:bg-primary/10",
                        "[&.success]:border-success/10 [&.success]:bg-success/10",
                        ["primary", "success"][_.random(0, 1)],
                      ])}
                    >
                      <Lucide
                        icon={faker.icon}
                        className={clsx([
                          "w-5 h-5",
                          "group-[.primary]:text-primary group-[.primary]:fill-primary/10",
                          "group-[.success]:text-success group-[.success]:fill-success/10",
                        ])}
                      />
                    </div>
                    <div className="flex ms-auto">
                      <div className="w-8 h-8 image-fit zoom-in">
                        <img
                          alt="تیل وایز - قالب داشبورد مدیریتی"
                          className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                          src={faker.images[0].path}
                        />
                      </div>
                      <div className="w-8 h-8 -ms-3 image-fit zoom-in">
                        <img
                          alt="تیل وایز - قالب داشبورد مدیریتی"
                          className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                          src={faker.images[1].path}
                        />
                      </div>
                      <div className="w-8 h-8 -ms-3 image-fit zoom-in">
                        <img
                          alt="تیل وایز - قالب داشبورد مدیریتی"
                          className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                          src={faker.images[2].path}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-11">
                    <div className="text-base font-medium">{faker.title}</div>
                    <div className="text-slate-500 mt-0.5">
                      {faker.subtitle}
                    </div>
                  </div>
                  <a
                    className="flex items-center pt-4 mt-4 font-medium border-t border-dashed text-primary"
                    href=""
                  >
                    {faker.link}
                    <Lucide icon="ArrowRight" className="w-4 h-4 ms-1.5" />
                  </a>
                </div>
              </div>
            ))}
          </TinySlider>
        </div>
      </div>
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium">سفارش‌های اخیر</div>
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
        <div className="mt-2 overflow-auto lg:overflow-visible">
          <Table className="border-spacing-y-[10px] border-separate">
            <Table.Tbody>
              {_.take(transactions.fakeTransactions(), 5).map(
                (faker, fakerKey) => (
                  <Table.Tr key={fakerKey}>
                    <Table.Td className="box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 dark:bg-darkmode-600">
                      <div className="flex items-center">
                        <Lucide
                          icon={faker.category.icon}
                          className="w-6 h-6 text-theme-1 fill-primary/10 stroke-[0.8]"
                        />
                        <div className="ms-3.5">
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.orderId}
                          </a>
                          <div className="mt-1 text-xs text-slate-500 whitespace-nowrap">
                            {faker.category.name}
                          </div>
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="w-60 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1 text-xs text-slate-500 whitespace-nowrap">
                        نام مشتری
                      </div>
                      <a href="" className="flex items-center text-primary">
                        <Lucide
                          icon="ExternalLink"
                          className="w-3.5 h-3.5 stroke-[1.7]"
                        />
                        <div className="ms-1.5 whitespace-nowrap">
                          {faker.user.name}
                        </div>
                      </a>
                    </Table.Td>
                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1.5 text-xs text-slate-500 whitespace-nowrap">
                        موارد خریداری شده
                      </div>
                      <div className="flex mb-1">
                        <div className="w-5 h-5 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="تیل وایز - قالب داشبورد مدیریتی"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker.products[0].images[0].path}
                            content={faker.products[0].name}
                          />
                        </div>
                        <div className="w-5 h-5 -ms-1.5 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="تیل وایز - قالب داشبورد مدیریتی"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker.products[1].images[0].path}
                            content={faker.products[1].name}
                          />
                        </div>
                        <div className="w-5 h-5 -ms-1.5 image-fit zoom-in">
                          <Tippy
                            as="img"
                            alt="تیل وایز - قالب داشبورد مدیریتی"
                            className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                            src={faker.products[2].images[0].path}
                            content={faker.products[2].name}
                          />
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1 text-xs text-slate-500 whitespace-nowrap">
                        وضعیت
                      </div>
                      <div
                        className={clsx([
                          "flex items-center",
                          faker.orderStatus.textColor,
                        ])}
                      >
                        <Lucide
                          icon={faker.orderStatus.icon}
                          className="w-3.5 h-3.5 stroke-[1.7]"
                        />
                        <div className="ms-1.5 whitespace-nowrap">
                          {faker.orderStatus.name}
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td className="w-44 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 dark:bg-darkmode-600">
                      <div className="mb-1 text-xs text-slate-500 whitespace-nowrap">
                        تاریخ
                      </div>
                      <div className="whitespace-nowrap">{faker.orderDate}</div>
                    </Table.Td>
                    <Table.Td className="w-20 relative py-0 box shadow-[5px_3px_5px_#00000005] first:border-l last:border-r first:rounded-s-[0.6rem] last:rounded-e-[0.6rem] rounded-s-none rounded-e-none border-x-0 dark:bg-darkmode-600">
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
                                icon="WalletCards"
                                className="w-4 h-4 me-2"
                              />{" "}
                              مشاهده جزئیات
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="FilePen" className="w-4 h-4 me-2" />
                              ویرایش سفارش
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="Printer" className="w-4 h-4 me-2" />
                              چاپ فاکتور
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </Table.Td>
                  </Table.Tr>
                )
              )}
            </Table.Tbody>
          </Table>
        </div>
        <div className="flex flex-col-reverse flex-wrap items-center mt-3 flex-reverse gap-y-2 sm:flex-row">
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
  );
}

export default Main;
