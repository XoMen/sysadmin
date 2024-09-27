import Lucide from "@/components/Base/Lucide";
import TomSelect from "@/components/Base/TomSelect";
import { Link, useLocation } from "react-router-dom";
import {
  FormLabel,
  FormCheck,
  FormInput,
  FormSelect,
  FormSwitch,
  FormHelp,
} from "@/components/Base/Form";
import Alert from "@/components/Base/Alert";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import countries from "@/fakers/countries";
import languages from "@/fakers/languages";
import timezones from "@/fakers/timezones";
import recentDevices from "@/fakers/recent-devices";
import Button from "@/components/Base/Button";
import Litepicker from "@/components/Base/Litepicker";
import Table from "@/components/Base/Table";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [selectedCountry, setSelectedCountry] = useState("1");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedTimezone, setSelectedTimezone] = useState("-05:00");
  const [dateOfBirth, setDateOfBirth] = useState<string>();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            تنظیمات
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ms-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide
                icon="ExternalLink"
                className="stroke-[1.3] w-4 h-4 me-3"
              />{" "}
              رفتن به پروفایل من
            </Button>
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="relative col-span-12 xl:col-span-3">
            <div className="sticky top-[104px]">
              <div className="flex flex-col px-5 pt-5 pb-6 box box--stacked">
                <Link
                  to="/settings"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === null },
                  ])}
                >
                  <Lucide
                    icon="AppWindow"
                    className="stroke-[1.3] w-4 h-4 me-3"
                  />{" "}
                  اطلاعات پروفایل
                </Link>
                <Link
                  to="/settings?page=email-settings"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === "email-settings" },
                  ])}
                >
                  <Lucide
                    icon="MailCheck"
                    className="stroke-[1.3] w-4 h-4 me-3"
                  />{" "}
                  تنظیمات ایمیل
                </Link>
                <Link
                  to="/settings?page=security"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === "security" },
                  ])}
                >
                  <Lucide
                    icon="KeyRound"
                    className="stroke-[1.3] w-4 h-4 me-3"
                  />{" "}
                  امنیت
                </Link>
                <Link
                  to="/settings?page=preferences"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === "preferences" },
                  ])}
                >
                  <Lucide
                    icon="PackageCheck"
                    className="stroke-[1.3] w-4 h-4 me-3"
                  />{" "}
                  ترجیحات
                </Link>
                <Link
                  to="/settings?page=two-factor-authentication"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active:
                        queryParams.get("page") === "two-factor-authentication",
                    },
                  ])}
                >
                  <Lucide
                    icon="ShieldCheck"
                    className="stroke-[1.3] w-4 h-4 me-3"
                  />{" "}
                  احراز هویت دو عاملی
                </Link>
                <Link
                  to="/settings?page=device-history"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    { active: queryParams.get("page") === "device-history" },
                  ])}
                >
                  <Lucide
                    icon="Smartphone"
                    className="stroke-[1.3] w-4 h-4 me-3"
                  />{" "}
                  تاریخچه دستگاه
                </Link>
                <Link
                  to="/settings?page=notification-settings"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active:
                        queryParams.get("page") === "notification-settings",
                    },
                  ])}
                >
                  <Lucide
                    icon="BellDot"
                    className="stroke-[1.3] w-4 h-4 me-3"
                  />{" "}
                  تنظیمات اعلان
                </Link>
                <Link
                  to="/settings?page=connected-services"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active: queryParams.get("page") === "connected-services",
                    },
                  ])}
                >
                  <Lucide
                    icon="Workflow"
                    className="stroke-[1.3] w-4 h-4 me-3"
                  />{" "}
                  خدمات متصل
                </Link>
                <Link
                  to="/settings?page=social-media-links"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active: queryParams.get("page") === "social-media-links",
                    },
                  ])}
                >
                  <Lucide
                    icon="Podcast"
                    className="stroke-[1.3] w-4 h-4 me-3"
                  />{" "}
                  پیوندهای رسانه‌های اجتماعی
                </Link>
                <Link
                  to="/settings?page=account-deactivation"
                  className={clsx([
                    "flex items-center py-3 first:-mt-3 last:-mb-3 [&.active]:text-primary [&.active]:font-medium hover:text-primary",
                    {
                      active:
                        queryParams.get("page") === "account-deactivation",
                    },
                  ])}
                >
                  <Lucide icon="Trash2" className="stroke-[1.3] w-4 h-4 me-3" />{" "}
                  غیرفعال‌سازی حساب کاربری
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 xl:col-span-9 gap-y-7">
            <div className="p-1.5 box flex flex-col box--stacked">
              <div className="h-60 relative w-full rounded-[0.6rem] bg-gradient-to-b from-theme-1/95 to-theme-2/95">
                <div
                  className={clsx([
                    "w-full h-full relative overflow-hidden",
                    "before:content-[''] before:absolute before:inset-0 before:bg-texture-white before:-mt-[50rem]",
                    "after:content-[''] after:absolute after:inset-0 after:bg-texture-white after:-mt-[50rem]",
                  ])}
                ></div>
                <div className="absolute inset-x-0 top-0 w-32 h-32 mx-auto mt-36">
                  <div className="w-full h-full overflow-hidden border-[6px] box border-white rounded-full image-fit">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <div className="absolute bottom-0 end-0 w-5 h-5 mb-2.5 me-2.5 border-2 border-white rounded-full bg-success box"></div>
                </div>
              </div>
              <div className="p-5 flex flex-col sm:flex-row gap-y-3 sm:items-end rounded-[0.6rem] bg-slate-50 pt-12">
                <div>
                  <FormLabel
                    htmlFor="regular-form-1"
                    className="flex items-center text-slate-500"
                  >
                    چه کسی می‌تواند عکس پروفایل شما را ببیند؟
                    <Tippy as="div" content="پایین" className="ms-1.5">
                      <Lucide
                        icon="Info"
                        className="w-3.5 h-3.5 text-slate-500 stroke-[1.3]"
                      />
                    </Tippy>
                  </FormLabel>
                  <div className="relative mt-2.5">
                    <Lucide
                      icon="Globe"
                      className="absolute inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3]"
                    />
                    <FormSelect className="sm:w-44 me-3 rounded-[0.5rem] ps-9">
                      <option value="custom-date">هر کسی</option>
                      <option value="daily">فقط شما</option>
                    </FormSelect>
                  </div>
                </div>
                <Button
                  variant="outline-primary"
                  className="sm:ms-auto border-primary/50"
                >
                  <Lucide
                    icon="Image"
                    className="stroke-[1.3] w-4 h-4 me-2.5"
                  />{" "}
                  بارگذاری کاور
                </Button>
              </div>
            </div>
            {queryParams.get("page") === null && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  اطلاعات پروفایل
                </div>
                <div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">نام کامل</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          نام کامل و قانونی خود را به همان شکلی که در
                          شناسنامه رسمی شما ظاهر می‌شود وارد کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <FormInput
                          type="text"
                          className="first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                          placeholder={users.fakeUsers()[0].name.split(" ")[0]}
                        />
                        <FormInput
                          type="text"
                          className="first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                          placeholder={users.fakeUsers()[0].name.split(" ")[1]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">تاریخ تولد</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          این اطلاعات برای تأیید سن شما و
                          ارائه خدمات مناسب سن مورد نیاز است.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <Litepicker
                        value={dateOfBirth}
                        onChange={(e) => {
                          setDateOfBirth(e.target.value);
                        }}
                        options={{
                          autoApply: false,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">جنسیت</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          جنسیت خود را از گزینه‌ها انتخاب کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-1"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-1">
                              مرد
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-2"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-2">
                              زن
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-3"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-3">
                              ترجیح می‌دهم بگویم
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">ایمیل</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          لطفاً یک آدرس ایمیل معتبر که دسترسی به آن دارید را وارد کنید.
                          دسترسی دارید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].email}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">شماره تلفن</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          لطفاً یک شماره تلفن معتبر ارائه دهید تا در صورت نیاز به شما تماس بگیریم.
                          اگر شما لازم دارید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <FormInput
                          type="text"
                          className="first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                          placeholder={users.fakeUsers()[0].phone}
                        />
                        <FormSelect className="md:w-36 first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <option value="office">دفتر</option>
                          <option value="home">خانه</option>
                        </FormSelect>
                      </div>
                      <a
                        className="flex items-center mt-3.5 -mb-1 font-medium text-primary"
                        href=""
                      >
                        <Lucide
                          className="w-4 h-4 stroke-[1.3] me-1"
                          icon="Plus"
                        />
                        افزودن تلفن
                      </a>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">بخش</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          بخش یا بخش خود را از لیست
                          گزینه‌های موجود انتخاب کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSelect>
                        {_.take(users.fakeUsers(), 5).map((faker, fakerKey) => (
                          <option key={fakerKey} value={faker.department}>
                            {faker.department}
                          </option>
                        ))}
                      </FormSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">نوع حساب</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          نوع حساب شما ویژگی‌ها و
                          امتیازهایی که در این پلتفرم دارید را تعیین می‌کند.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-4"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-4">
                              شخصی
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                        <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <FormCheck>
                            <FormCheck.Input
                              id="checkbox-switch-5"
                              type="radio"
                              value=""
                            />
                            <FormCheck.Label htmlFor="checkbox-switch-5">
                              شرکت
                            </FormCheck.Label>
                          </FormCheck>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">کشور</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          لطفاً کشوری که در حال حاضر در آن زندگی می‌کنید را مشخص کنید.
                          in.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <TomSelect
                        value={selectedCountry}
                        onChange={(e) => {
                          setSelectedCountry(e.target.value);
                        }}
                        options={{
                          placeholder: "انتخاب your country",
                        }}
                        className="w-full"
                      >
                        {countries.fakeCountries().map((faker, fakerKey) => (
                          <option key={fakerKey} value={fakerKey}>
                            {faker.name}
                          </option>
                        ))}
                      </TomSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">خط آدرس ۱</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          خط اصلی آدرس فیزیکی خود را وارد کنید،
                          معمولاً شامل شماره خانه یا ساختمان و
                          نام خیابان است.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].location}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">خط آدرس ۲</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          این فیلد اختیاری است و می‌تواند برای ارائه هر
                          جزئیات آدرس اضافی مانند شماره آپارتمان،
                          سوئیت، طبقه یا هر اطلاعات مرتبط دیگر استفاده شود.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].location}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">City</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          نام شهر یا محله‌ای که آدرس شما در آن قرار دارد را وارد کنید.
                          آدرس قرار دارد.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].location}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">ایالت / استان</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          لطفا ایالت یا استان خود را از لیست ارائه شده انتخاب کنید.
                          list.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].location}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">کد پستی</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          کد پستی یا ZIP کد مرتبط با آدرس خود را وارد کنید.
                          آدرس.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={_.random(5000, 9000).toString()}
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">اختصاصی</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          اگر می خواهید دسترسی اختصاصی به برخی از ویژگی ها یا محتوای پلتفرم ما را فعال کنید، این جعبه را علامت بزنید.
                          به برخی از ویژگی ها یا محتوای مشخص بر روی پلتفرم ما.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormCheck>
                        <FormCheck.Input
                          id="checkbox-switch-1"
                          type="checkbox"
                          value=""
                        />
                        <FormCheck.Label
                          className="ms-3.5 text-slate-500 leading-relaxed"
                          htmlFor="checkbox-switch-1"
                        >
                          انتخاب حفظ اختصاصی برای پروتفویل آیتم های خود بر روی این پلتفرم می تواند درآمد شما را به طور قابل توجهی افزایش دهد.
                          آیتم ها بر روی این پلتفرم می تواند به طور قابل توجهی درآمد شما را افزایش دهد.
                          earnings.
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    ذخیره تغییرات
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "email-settings" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  تنظیمات ایمیل
                </div>
                <div>
                  <div className="text-slate-500">
                    آدرس ایمیل فعلی شما{" "}
                    <span className="font-medium">
                      {users.fakeUsers()[1].email}
                    </span>
                    .
                  </div>
                  <div className="flex-col block pt-5 mt-2 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">آدرس ایمیل جدید</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          لطفاً یک آدرس ایمیل معتبر که دسترسی به آن دارید را وارد کنید.
                          دسترسی دارید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        type="text"
                        placeholder={users.fakeUsers()[0].email}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    ذخیره تغییرات
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "security" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  امنیت
                </div>
                <div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-64 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">رمز عبور فعلی</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          رمز عبور فعلی خود را وارد کنید تا هویت شما تأیید شود.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="P**********d" />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-64 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">رمز عبور جدید</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          رمز عبور جدید برای حساب خود ایجاد کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="P**********d" />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-64 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">
                            تأیید رمز عبور جدید
                          </div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          لطفاً رمز عبور جدیدی که به تازگی انتخاب کرده‌اید را دوباره وارد کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="P**********d" />
                      <div className="mt-4 text-slate-500">
                        <div className="font-medium">
                          الزامات رمز عبور:
                        </div>
                        <ul className="flex flex-col gap-1 ps-3 mt-2.5 list-disc text-slate-500">
                          <li className="ps-0.5">
                            رمز عبور باید حداقل 8 کاراکتر باشد.
                          </li>
                          <li className="ps-0.5">
                            حداقل یک رقم عددی (0-9) را در بر بگیرید.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    ذخیره تغییرات
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "preferences" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  ترجیحات
                </div>
                <div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">زبان</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          زبان مورد نظر خود را از زبان‌های موجود انتخاب کنید
                          options.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <TomSelect
                        value={selectedLanguage}
                        onChange={(e) => {
                          setSelectedLanguage(e.target.value);
                        }}
                        options={{
                          placeholder: "انتخاب your language",
                        }}
                        className="w-full"
                      >
                        {languages.fakeLanguages().map((faker, fakerKey) => (
                          <option key={fakerKey} value={faker.code}>
                            {faker.name}
                          </option>
                        ))}
                      </TomSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">منطقه زمانی</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          منطقه زمانی فعلی خود را از لیست
                          گزینه‌های موجود انتخاب کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <TomSelect
                        value={selectedTimezone}
                        onChange={(e) => {
                          setSelectedTimezone(e.target.value);
                        }}
                        options={{
                          placeholder: "انتخاب your timezone",
                        }}
                        className="w-full"
                      >
                        {timezones.fakeTimezones().map((faker, fakerKey) => (
                          <option key={fakerKey} value={faker.offset}>
                            {faker.name}
                          </option>
                        ))}
                      </TomSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">پشتیبانی از مورد</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          اگر به پشتیبانی اضافی نیاز دارید یا
                          کمک با مورد خود، این جعبه را علامت بزنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSwitch.Input
                        id="checkbox-switch-7"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">موارد برگزیده</div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          اگر می‌خواهید موارد خود را ویژه کنید
                          یا برجسته شوند در{" "}
                          <a href="" className="text-primary">
                            پلتفرم ما
                          </a>
                          .
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSwitch.Input
                        id="checkbox-switch-7"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    ذخیره تغییرات
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "two-factor-authentication" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="flex items-center pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  احراز هویت دوعاملی (2FA)
                  <div className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px ms-3">
                    <span className="-mt-px">فعال شده</span>
                  </div>
                </div>
                <div>
                  <div className="text-slate-500">
                    امنیت حساب خود را با فعالسازی احراز هویت دوعاملی
                    در تنظیمات افزایش دهید.
                  </div>
                  <div className="flex-col block pt-5 mt-2 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-64 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">رمز عبور حساب</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          رمز عبور فعلی خود را وارد کنید تا هویت شما تأیید شود.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="P**********d" />
                      <FormHelp>
                        این رمز عبوری است که برای ورود به حساب کاربری خود استفاده می‌کنید.
                      </FormHelp>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    ذخیره تغییرات
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "device-history" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="flex items-center pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  تاریخچه دستگاه
                </div>
                <div>
                  <div className="text-slate-500">
                    دسترسی و کنترل دستگاه‌هایی که در حال حاضر متصل هستند.
                  </div>
                  <div className="mt-5 border rounded-lg border-slate-200/80">
                    <div className="overflow-auto xl:overflow-visible">
                      <Table>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Td className="py-4 font-medium whitespace-nowrap first:rounded-ss-lg border-slate-200/80 last:rounded-se-lg bg-slate-50 text-slate-500">
                              Browser
                            </Table.Td>
                            <Table.Td className="py-4 font-medium whitespace-nowrap first:rounded-ss-lg border-slate-200/80 last:rounded-se-lg bg-slate-50 text-slate-500">
                              Device
                            </Table.Td>
                            <Table.Td className="py-4 font-medium whitespace-nowrap first:rounded-ss-lg border-slate-200/80 last:rounded-se-lg bg-slate-50 text-slate-500">
                              Location
                            </Table.Td>
                            <Table.Td className="py-4 font-medium whitespace-nowrap first:rounded-ss-lg border-slate-200/80 last:rounded-se-lg bg-slate-50 text-slate-500">
                              فعالیت‌های اخیر
                            </Table.Td>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          {recentDevices
                            .fakeRecentDevices()
                            .map((faker, fakerKey) => (
                              <Table.Tr
                                key={fakerKey}
                                className="[&_td]:last:border-b-0"
                              >
                                <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                                  <div className="flex items-center whitespace-nowrap">
                                    <div className="w-4 h-4 image-fit zoom-in">
                                      <img
                                        alt="تیل وایز - قالب داشبورد مدیریتی"
                                        className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                        src={faker.browser.image}
                                      />
                                    </div>
                                    <div className="ms-3.5">
                                      {faker.browser.name} on{" "}
                                      {faker.operatingSystem}
                                    </div>
                                  </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                                  <div className="flex items-center whitespace-nowrap">
                                    <Lucide
                                      icon="Smartphone"
                                      className="stroke-[1.3] w-4 h-4 me-2"
                                    />{" "}
                                    {faker.device}
                                    {!fakerKey && (
                                      <div className="flex items-center text-xs font-medium rounded-md text-primary bg-primary/10 border border-primary/10 px-1.5 py-px ms-3">
                                        <span className="-mt-px">Current</span>
                                      </div>
                                    )}
                                  </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                                  <div className="whitespace-nowrap">
                                    {faker.location}
                                  </div>
                                </Table.Td>
                                <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                                  <div className="whitespace-nowrap">
                                    {faker.activity}
                                  </div>
                                </Table.Td>
                              </Table.Tr>
                            ))}
                        </Table.Tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {queryParams.get("page") === "notification-settings" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="flex items-center pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  تنظیمات اعلان
                </div>
                <div>
                  <Alert
                    variant="outline-primary"
                    className="flex items-center px-4 mb-2 bg-primary/5 border-primary/20"
                  >
                    {({ dismiss }) => (
                      <>
                        <div>
                          <Lucide
                            icon="AlertCircle"
                            className="stroke-[1.3] w-4 h-4 me-3 md:me-2"
                          />
                        </div>
                        <div className="me-5 leading-relaxed">
                          ما اجازه مرورگر شما را برای درخواست
                          نمایش اعلان‌ها می‌خواهیم.
                          <a
                            href=""
                            className="ms-1 font-medium underline decoration-dotted decoration-warning/50 underline-offset-[3px]"
                          >
                            درخواست اجازه
                          </a>
                          <Alert.DismissButton
                            type="button"
                            className="inset-y-0 btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </div>
                      </>
                    )}
                  </Alert>
                  <div className="mt-5 border rounded-lg border-slate-200/80">
                    <div className="overflow-auto xl:overflow-visible">
                      <Table>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Td className="py-4 font-medium first:rounded-ss-lg border-slate-200/80 last:rounded-se-lg bg-slate-50 text-slate-500">
                              Type
                            </Table.Td>
                            <Table.Td className="py-4 font-medium first:rounded-ss-lg border-slate-200/80 last:rounded-se-lg bg-slate-50 text-slate-500">
                              <div className="flex flex-col items-center">
                                <Lucide icon="MailCheck" className="w-6 h-6" />
                                <div className="mt-1.5">ایمیل</div>
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 font-medium first:rounded-ss-lg border-slate-200/80 last:rounded-se-lg bg-slate-50 text-slate-500">
                              <div className="flex flex-col items-center">
                                <Lucide icon="Globe" className="w-6 h-6" />
                                <div className="mt-1.5">Browser</div>
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 font-medium first:rounded-ss-lg border-slate-200/80 last:rounded-se-lg bg-slate-50 text-slate-500">
                              <div className="flex flex-col items-center">
                                <Lucide icon="Smartphone" className="w-6 h-6" />
                                <div className="mt-1.5">App</div>
                              </div>
                            </Table.Td>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="whitespace-nowrap">
                                فعالیت ورود غیرمعمول شناسایی شد
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="flex items-center whitespace-nowrap">
                                درخواست تغییر گذرواژه
                                <Lucide
                                  className="w-4 h-4 ms-1.5 text-slate-400 stroke-[1.3]"
                                  icon="Info"
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="whitespace-nowrap">
                                پیام جدید دریافت شد
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="whitespace-nowrap">
                                خلاصه فعالیت حساب
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr className="[&_td]:last:border-b-0">
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="flex items-center whitespace-nowrap">
                                هشدار امنیتی: دستگاه نامشخص
                                <Lucide
                                  className="w-4 h-4 ms-1.5 text-slate-400 stroke-[1.3]"
                                  icon="Info"
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                            <Table.Td className="py-4 border-dashed border-slate-300/70 dark:bg-darkmode-600">
                              <div className="text-center">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-3 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-1/2 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">
                            کی مایلید اعلان‌ها را دریافت کنید؟
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSelect>
                        <option value="فوراً">فوراً</option>
                        <option value="صبح">صبح</option>
                        <option value="ظهر">ظهر</option>
                        <option value="عصر">
                          عصر
                        </option>
                        <option value="شب">شب</option>
                        <option value="شبانه">شبانه</option>
                        <option value="یکبار در روز">یکبار در روز</option>
                        <option value="دوبار در روز">دوبار در روز</option>
                        <option value="زمان‌بندی دلخواه">زمان‌بندی دلخواه</option>
                        <option value="اعلان‌ها را ارسال نکنید">
                          اعلان‌ها را ارسال نکنید
                        </option>
                      </FormSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-3 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-1/2 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">
                            یک بررسی روزانه ('خلاصه روزانه') از
                            فعالیت وظیفه‌های شما دریافت کنید.
                          </div>
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col items-center md:flex-row">
                        <FormSelect className="first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <option value="هر روز">هر روز</option>
                          <option value="یکبار در روز">یکبار در روز</option>
                          <option value="دوبار در روز">دوبار در روز</option>
                          <option value="بدون بررسی روزانه (غیرفعال سازی خلاصه روزانه)">
                            بدون بررسی روزانه (غیرفعال سازی خلاصه روزانه)
                          </option>
                        </FormSelect>
                        <FormSelect className="first:rounded-b-none first:md:rounded-es-md first:md:rounded-e-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-s-none last:md:rounded-se-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                          <option value="ساعت 8:00 صبح">ساعت 8:00 صبح</option>
                          <option value="ساعت 12:00 ظهر">ساعت 12:00 ظهر</option>
                          <option value="ساعت 4:00 عصر">ساعت 4:00 عصر</option>
                          <option value="ساعت 8:00 شب">ساعت 8:00 شب</option>
                        </FormSelect>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 text-slate-500">
                    برای کاهش وقفه‌ها، اعلان‌های ایمیل گروه‌بندی و
                    زمانی که از دستگاه خود فعال استفاده نمی‌کنید تحویل داده می‌شوند.
                  </div>
                </div>
                <div className="flex pt-5 mt-6 border-t border-dashed md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-primary"
                    className="w-full px-4 border-primary/50 md:w-auto"
                  >
                    ذخیره تغییرات
                  </Button>
                </div>
              </div>
            )}
            {queryParams.get("page") === "connected-services" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  خدمات متصل
                </div>
                <div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Linkedin"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">لینکدین</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          شبکه حرفه‌ای و پروفایل حرفه‌ای
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Dribbble"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">دریبل</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          نمونه‌کارها و کارهای خلاقانه طراحی
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Facebook"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">فیس‌بوک</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          ارتباطات اجتماعی و به‌روزرسانی‌های شخصی
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Instagram"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">اینستاگرام</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          داستان‌ها و عکس‌های تصویری
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Twitter"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">توییتر</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          میکروبلاگینگ و به‌روزرسانی‌های زمان واقعی
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <FormSwitch.Input
                          id="checkbox-switch-7"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {queryParams.get("page") === "social-media-links" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  پیوندهای رسانه‌های اجتماعی
                </div>
                <div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Linkedin"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">لینکدین</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          متصل نیست
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="UserPlus"
                            className="stroke-[1.3] w-4 h-4 -ms-0.5 me-2"
                          />
                          اتصال
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Twitter"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">دریبل</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          متصل نیست
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="UserPlus"
                            className="stroke-[1.3] w-4 h-4 -ms-0.5 me-2"
                          />
                          اتصال
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Facebook"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">فیس‌بوک</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          <a
                            className="text-primary underline decoration-dotted decoration-primary/30 underline-offset-[3px] text-xs"
                            href=""
                          >
                            www.facebook.com/
                            {users
                              .fakeUsers()[0]
                              .name.toLowerCase()
                              .replace(" ", "")}
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="Check"
                            className="stroke-[1.3] w-4 h-4 -ms-0.5 me-2"
                          />
                          متصل
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Instagram"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">اینستاگرام</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          متصل نیست
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="UserPlus"
                            className="stroke-[1.3] w-4 h-4 -ms-0.5 me-2"
                          />
                          اتصال
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pt-2.5 mt-2.5 last:mb-2 first:mt-0 first:pt-0">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 ms-2 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Twitter"
                          className="stroke-[1.3] w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-center ms-5 gap-y-2.5 sm:flex-row w-full">
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium">توییتر</div>
                        </div>
                        <div className="pe-10 mt-1 text-xs leading-relaxed text-slate-500">
                          <a
                            className="text-primary underline decoration-dotted decoration-primary/30 underline-offset-[3px] text-xs"
                            href=""
                          >
                            www.twitter.com/
                            {users
                              .fakeUsers()[0]
                              .name.toLowerCase()
                              .replace(" ", "")}
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-1 w-full sm:justify-end">
                        <Button
                          variant="primary"
                          className="px-4 bg-primary/5 border-primary/50 text-primary"
                        >
                          <Lucide
                            icon="Check"
                            className="stroke-[1.3] w-4 h-4 -ms-0.5 me-2"
                          />
                          متصل
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {queryParams.get("page") === "account-deactivation" && (
              <div className="flex flex-col p-5 box box--stacked">
                <div className="flex items-center pb-5 mb-6 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                  غیرفعال‌سازی حساب کاربری
                </div>
                <div>
                  <div className="leading-relaxed">
                    زمانی که فرایند حذف حساب کاربری را آغاز می‌کنید، دیگر
                    دسترسی به خدمات حساب کاربری Front را ندارید و
                    داده‌های شخصی شما به طور دائم حذف می‌شود. شما یک دوره 10 روزه دارید
                    برای لغو حذف در صورت نیاز.
                  </div>
                  <FormCheck className="mt-5">
                    <FormCheck.Input
                      id="checkbox-switch-1"
                      type="checkbox"
                      value=""
                    />
                    <FormCheck.Label htmlFor="checkbox-switch-1">
                      تایید کنید که می‌خواهم حساب کاربری خود را حذف کنم.
                    </FormCheck.Label>
                  </FormCheck>
                </div>
                <div className="flex flex-col-reverse gap-3 pt-5 mt-6 border-t border-dashed md:flex-row md:justify-end border-slate-300/70">
                  <Button
                    variant="outline-secondary"
                    className="w-full px-4 md:w-auto"
                  >
                    بیشتر بدانید
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="w-full px-4 border-danger/50 bg-danger/5 md:w-auto"
                  >
                    حذف
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
