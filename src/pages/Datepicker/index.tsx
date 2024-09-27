import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormLabel, FormSwitch } from "@/components/Base/Form";
import { Menu, Dialog } from "@/components/Base/Headless";
import Litepicker from "@/components/Base/Litepicker";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import { useState, useRef } from "react";

function Main() {
  const [date, setDate] = useState("");
  const [daterange, setDaterange] = useState("");
  const [datepickerModalPreview, setDatepickerModalPreview] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            انتخاب تاریخ
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            قدرت مؤلفه انتخاب تاریخ ما را برای تاریخ ساده شده کشف کنید
            و ورود در برنامه‌های وب خود.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        انتخاب تاریخ پایه
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        مؤلفه "انتخاب تاریخ پایه" به کاربران اجازه می‌دهد که انتخاب کنند
                        تاریخ‌ها را از یک تقویم. این یک عنصر ورودی اساسی است
                        در بسیاری از برنامه‌های وب، به خصوص در فرم‌هایی که
                        نیاز به ورود یا انتخاب تاریخ دارند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Litepicker
                              value={date}
                              onChange={(e) => {
                                setDate(e.target.value);
                              }}
                              options={{
                                autoApply: false,
                                showWeekNumbers: true,
                                dropdowns: {
                                  minYear: 1990,
                                  maxYear: null,
                                  months: true,
                                  years: true,
                                },
                              }}
                              className="block w-56 mx-auto"
                            />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <Litepicker
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                options={{
                  autoApply: false,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }}
                className="block w-56 mx-auto"
              />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مؤلفه "انتخاب تاریخ پایه" با استفاده از Litepicker
                        یک راه دوستانه برای انتخاب تاریخ‌ها برای شما ارائه می‌دهد
                        برنامه وب شما. این قابلیت پیکربندی بالایی دارد و آسان است برای
                        ادغام در پروژه‌های شما.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        گروه ورودی
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        مؤلفه "گروه ورودی" یک فیلد ورودی را با هم ترکیب می‌کند
                        یک نماد تقویم و یک datepicker برای تسهیل در تاریخ
                        انتخاب در برنامه وب شما. این مؤلفه
                        مفید برای بهبود تجربه کاربری هنگام ورود
                        تاریخ‌ها در فرم‌ها است.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="relative w-56 mx-auto">
                              <div className="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                                <Lucide icon="Calendar" className="w-4 h-4" />
                              </div>
                              <Litepicker
                                value={date}
                                onChange={(e) => {
                                  setDate(e.target.value);
                                }}
                                options={{
                                  autoApply: false,
                                  showWeekNumbers: true,
                                  dropdowns: {
                                    minYear: 1990,
                                    maxYear: null,
                                    months: true,
                                    years: true,
                                  },
                                }}
                                className="ps-12"
                              />
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="relative w-56 mx-auto">
                <div className="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                  <Lucide icon="Calendar" className="w-4 h-4" />
                </div>
                <Litepicker
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  options={{
                    autoApply: false,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="ps-12"
                />
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مؤلفه "گروه ورودی انتخاب تاریخ" یک
                        روش شیک و کاربرپسند برای انتخاب تاریخ‌ها در برنامه
                        وب شما فراهم می‌کند. با ترکیب یک فیلد ورودی با یک
                        نماد تقویم و Litepicker، کاربران می‌توانند به راحتی ورودی
                        تاریخ‌ها، فرم‌های شما را بیشتر شیوا و قابل دسترس می‌کنند.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        انتخاب کننده محدوده تاریخ
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        مؤلفه "انتخاب کننده محدوده تاریخ" به کاربران اجازه می‌دهد که انتخاب کنند
                        یک محدوده تاریخ در برنامه وب شما. این مؤلفه
                        مفید برای حالت‌هایی که نیاز به جمع‌آوری تاریخ دارید
                        مانند سیستم‌های رزرو یا فیلترینگ بر اساس تاریخ.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Litepicker
                              value={daterange}
                              onChange={(e) => {
                                setDaterange(e.target.value);
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
                              className="block w-56 mx-auto"
                            />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <Litepicker
                value={daterange}
                onChange={(e) => {
                  setDaterange(e.target.value);
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
                className="block w-56 mx-auto"
              />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مؤلفه "انتخاب کننده محدوده تاریخ" وب شما را بهبود می‌بخشد
                        با ارائه راهی آسان و شهودی برای
                        کاربران برای انتخاب محدوده تاریخ. برای ساختن یک
                        سیستم رزرو یا اجرای فیلترینگ بر اساس تاریخ،
                        این مؤلفه فرایند جمع‌آوری
                        محدوده تاریخ را ساده‌تر می‌کند، برنامه شما را دوستانه‌تر
                        و کارآمدتر می‌کند.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        انتخاب تاریخ مودال
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        مؤلفه "انتخاب تاریخ مودال" عملکرد یک datepicker را با یک پنجره مودال ترکیب می‌کند،
                        که به کاربران اجازه می‌دهد تا تاریخ‌ها را در یک رابط مودال انتخاب کنند.
                        این مؤلفه در حالت‌هایی کاربردی است که می‌خواهید انتخاب تاریخی متمرکز و بدون مزاحمت فراهم کنید
                        این مؤلفه برای حالت‌هایی کاربردی است که می‌خواهید
                        انتخاب تاریخی متمرکز و بدون مزاحمت فراهم کنید
                        با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Show Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setDatepickerModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Show Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={datepickerModalPreview}
                              onClose={() => {
                                setDatepickerModalPreview(false);
                              }}
                              initialFocus={cancelButtonRef}
                            >
                              <Dialog.Panel>
                                {/* BEGIN: Modal Header */}
                                <Dialog.Title>
                                  <h2 className="me-auto text-base font-medium">
                                    فیلتر بر اساس تاریخ
                                  </h2>
                                  <Button
                                    variant="outline-secondary"
                                    className="hidden sm:flex"
                                  >
                                    <Lucide
                                      icon="File"
                                      className="w-4 h-4 me-2"
                                    />{" "}
                                    دانلود اسناد
                                  </Button>
                                  <Menu className="sm:hidden">
                                    <Menu.Button
                                      as="a"
                                      className="block w-5 h-5"
                                      href="#"
                                    >
                                      <Lucide
                                        icon="MoreHorizontal"
                                        className="w-5 h-5 text-slate-500"
                                      />
                                    </Menu.Button>
                                    <Menu.Items className="w-40">
                                      <Menu.Item>
                                        <Lucide
                                          icon="File"
                                          className="w-4 h-4 me-2"
                                        />
                                        دانلود اسناد
                                      </Menu.Item>
                                    </Menu.Items>
                                  </Menu>
                                </Dialog.Title>
                                {/* END: Modal Header */}
                                {/* BEGIN: Modal Body */}
                                <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-datepicker-1">
                                      From
                                    </FormLabel>
                                    <Litepicker
                                      id="modal-datepicker-1"
                                      value={date}
                                      onChange={(e) => {
                                        setDate(e.target.value);
                                      }}
                                      options={{
                                        autoApply: false,
                                        showWeekNumbers: true,
                                        dropdowns: {
                                          minYear: 1990,
                                          maxYear: null,
                                          months: true,
                                          years: true,
                                        },
                                      }}
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-datepicker-2">
                                      To
                                    </FormLabel>
                                    <Litepicker
                                      id="modal-datepicker-2"
                                      value={date}
                                      onChange={(e) => {
                                        setDate(e.target.value);
                                      }}
                                      options={{
                                        autoApply: false,
                                        showWeekNumbers: true,
                                        dropdowns: {
                                          minYear: 1990,
                                          maxYear: null,
                                          months: true,
                                          years: true,
                                        },
                                      }}
                                    />
                                  </div>
                                </Dialog.Description>
                                {/* END: Modal Body */}
                                {/* BEGIN: Modal Footer */}
                                <Dialog.Footer className="text-end">
                                  <Button
                                    variant="outline-secondary"
                                    type="button"
                                    onClick={() => {
                                      setDatepickerModalPreview(false);
                                    }}
                                    className="w-20 me-1"
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    variant="primary"
                                    type="button"
                                    className="w-20"
                                    ref={cancelButtonRef}
                                  >
                                    ثبت
                                  </Button>
                                </Dialog.Footer>
                                {/* END: Modal Footer */}
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              {/* BEGIN: Show Modal Toggle */}
              <div className="text-center">
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setDatepickerModalPreview(true);
                  }}
                >
                  نمایش مودال
                </Button>
              </div>
              {/* END: Show Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Dialog
                open={datepickerModalPreview}
                onClose={() => {
                  setDatepickerModalPreview(false);
                }}
                initialFocus={cancelButtonRef}
              >
                <Dialog.Panel>
                  {/* BEGIN: Modal Header */}
                  <Dialog.Title>
                    <h2 className="me-auto text-base font-medium">
                      فیلتر بر اساس تاریخ
                    </h2>
                    <Button
                      variant="outline-secondary"
                      className="hidden sm:flex"
                    >
                      <Lucide icon="File" className="w-4 h-4 me-2" />{" "}
                      دانلود اسناد
                    </Button>
                    <Menu className="sm:hidden">
                      <Menu.Button
                        as="a"
                        className="block w-5 h-5"
                        href="#"
                      >
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="File" className="w-4 h-4 me-2" />
                          دانلود اسناد
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </Dialog.Title>
                  {/* END: Modal Header */}
                  {/* BEGIN: Modal Body */}
                  <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                    <div className="col-span-12 sm:col-span-6">
                      <FormLabel
                        htmlFor="modal-datepicker-1"
                      >
                        From
                      </FormLabel>
                      <Litepicker
                        id="modal-datepicker-1"
                        value={date}
                        onChange={setDate}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <FormLabel
                        htmlFor="modal-datepicker-2"
                      >
                        To
                      </FormLabel>
                      <Litepicker
                        id="modal-datepicker-2"
                        value={date}
                        onChange={setDate}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                      />
                    </div>
                  </Dialog.Description>
                  {/* END: Modal Body */}
                  {/* BEGIN: Modal Footer */}
                  <Dialog.Footer className="text-end">
                    <Button
                      variant="outline-secondary"
                      type="button"
                      onClick={() => {
                        setDatepickerModalPreview(false);
                      }}
                      className="w-20 me-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      type="button"
                      className="w-20"
                      ref={cancelButtonRef}
                    >
                      ثبت
                    </Button>
                  </Dialog.Footer>
                  {/* END: Modal Footer */}
                </Dialog.Panel>
              </Dialog>
              {/* END: Modal Content */}
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مؤلفه "انتخاب تاریخ مودال" عملکرد یک datepicker را با یک پنجره مودال ترکیب می‌کند،
                        راحتی یک datepicker با تجربه کاربری دوستانه
                        پنجره مودال. این ادغام، راهی تمیز و منظم برای انتخاب تاریخ توسط کاربران در
                        برنامه وب شما فراهم می‌کند، که برای فیلترینگ بر اساس تاریخ یا هر حالتی که انتخاب تاریخ لازم است،
                        ایده‌آل است.
                        فیلتر کردن یا هر سناریویی که انتخاب تاریخ مورد نیاز است
                        required.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                <div className="text-[0.94rem] font-medium">رابط اجزاء</div>
              </div>
              <div>
                <p className="leading-relaxed">
                  در این بخش، اطلاعات جزئی در مورد
                  ویژگی‌ها، کلاس‌ها و گزینه‌های موجود که می‌توانید با
                  اجزاء است. درک این خصوصیات برای
                  سفارشی کردن و پیکربندی اجزاء برای مطابقت با
                  نیازهای خاص شما ضروری است.
                </p>
                <p className="mt-2 leading-relaxed">
                  در زیر لیستی از ویژگی‌هایی که می‌توان به اجزاء منتقل کرد، آمده است:
                </p>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Litepicker</div>
                  </div>
                  <div className="px-5 pt-2 pb-5 mt-2.5 flex flex-col gap-3.5 leading-relaxed overflow-x-auto">
                    <Table sm>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="w-44 whitespace-nowrap">
                            Prop
                          </Table.Th>
                          <Table.Th className="w-56 whitespace-nowrap">
                            Type
                          </Table.Th>
                          <Table.Th className="whitespace-nowrap">
                            Description
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        <Table.Tr>
                          <Table.Td>`options`</Table.Td>
                          <Table.Td>`LitepickerConfig`</Table.Td>
                          <Table.Td>گزینه‌های پیکربندی Litepicker.</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`value`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            ارزش ورودی Litepicker.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onChange`</Table.Td>
                          <Table.Td>`(date: string) =&gt; void`</Table.Td>
                          <Table.Td>
                            تابع بازخوانی که هنگامی که
                            مقدار ورودی Litepicker تغییر می‌کند فراخوانی می‌شود.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: LitepickerElement) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            یک تابع که یک مرجع به
                            عنصر ورودی Litepicker.
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-first col-span-12 lg:order-last lg:col-span-3 xl:col-span-2">
            <div className="sticky top-[104px]">
              <ul className="relative flex flex-col py-2.5 rounded-[0.6rem] bg-primary/[0.03] group-[.mode--light]:bg-slate-300/10 border border-primary/10 group-[.mode--light]:border-slate-300/20 text-slate-600/80">
                <li
                  className={clsx([
                    "relative ps-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white active",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    انتخاب تاریخ پایه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    گروه ورودی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    انتخاب کننده محدوده تاریخ
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    انتخاب تاریخ مودال
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    رابط اجزاء
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
