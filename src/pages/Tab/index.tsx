import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import { Tab } from "@/components/Base/Headless";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            تب
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            کامپوننت تب کشف کنید، ناوبری را با تب‌های چندمنظوره بهبود بخشید –
            از سبک‌های کلاسیک تا جعبه‌ای!
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        تب پایه
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
                        کامپوننت "تب پایه" یک راه ساده و
                        به طور قابل فهم برای ایجاد محتوای تبی برای وب
                        اپلیکیشن‌ها فراهم می‌کند. به راحتی اطلاعات را سازماندهی و نمایش دهید
                        در یک رابط کاربری تمیز تب‌خورده.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Tab.Group>
                              <Tab.List variant="tabs">
                                <Tab>
                                  <Tab.Button
                                    className="w-full py-2"
                                    as="button"
                                  >
                                    مثال تب 1
                                  </Tab.Button>
                                </Tab>
                                <Tab>
                                  <Tab.Button
                                    className="w-full py-2"
                                    as="button"
                                  >
                                    مثال تب 2
                                  </Tab.Button>
                                </Tab>
                              </Tab.List>
                              <Tab.Panels className="border-b border-l border-r">
                                <Tab.Panel className="p-5 leading-relaxed">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  بدون تغییر. در دهه ۱۹۶۰ محبوب شد
                                  با انتشار برگه‌های Letraset حاوی
                                  متون لورم ایپسوم، و اخیراً با
                                  نرم‌افزارهای دسکتاپ پابلیشینگ مانند Aldus
                                  PageMaker شامل نسخه‌هایی از لورم ایپسوم بود.
                                </Tab.Panel>
                                <Tab.Panel className="p-5 leading-relaxed">
                                  این یک واقعیت بسیار قدیمی است که خواننده
                                  توسط محتوای قابل خواندن یک صفحه
                                  هنگام نگاه به طرح آن حواس پرت خواهد شد. هدف
                                  استفاده از Lorem Ipsum این است که یک
                                  توزیع نسبتاً عادی از حروف داشته باشد،
                                  برخلاف استفاده از 'محتوا اینجا، محتوا
                                  اینجا'، آن را شبیه به انگلیسی قابل خواندن می‌کند. بسیاری
                                  از بسته‌های انتشار دسکتاپ و ویرایشگرهای صفحه وب اکنون
                                  از Lorem Ipsum به عنوان متن مدل پیش‌فرض خود استفاده می‌کنند، و
                                  جستجو برای 'lorem ipsum' ممکن است
                                  بسیاری از وب‌سایت‌های هنوز در دوران
                                  کودکی خود هستند. نسخه‌های مختلف در طول
                                  سال‌ها تکامل یافته‌اند، گاهی از طریق حادثه، گاهی از روی
                                  اهداف (طنز و موارد مشابه).
                                </Tab.Panel>
                              </Tab.Panels>
                            </Tab.Group>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Tab.Group>
                  <Tab.List variant="tabs">
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        مثال تب 1
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        مثال تب 2
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="border-b border-l border-r">
                    <Tab.Panel className="p-5 leading-relaxed">
                      لورم ایپسوم به طور ساده متن مجازی چاپ و and
                      صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                      متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                      زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                      آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                      نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                      به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                      تغییر نکرده است. این در دهه ۱۹۶۰ با انتشار
                      برگه‌های Letraset شامل Lorem Ipsum
                      و به تازگی‌تر با نرم‌افزارهای دسکتاپ
                      انتشار صفحه‌مانند Aldus PageMaker شامل نسخه‌هایی از
                      Lorem Ipsum.
                    </Tab.Panel>
                    <Tab.Panel className="p-5 leading-relaxed">
                      این یک واقعیت بسیار قدیمی است که خواننده will be
                      توسط محتوای قابل خواندن یک صفحه هنگام
                      نگاه به طرح آن حواس پرت خواهد شد. هدف استفاده از Lorem Ipsum
                      این است که یک توزیع نسبتاً عادی از
                      حروف داشته باشد، بر خلاف استفاده از 'محتوا اینجا، محتوا
                      اینجا'، آن را شبیه به انگلیسی قابل خواندن می‌کند. بسیاری
                      از بسته‌های انتشار دسکتاپ و ویرایشگرهای صفحه وب اکنون
                      از Lorem Ipsum به عنوان متن مدل پیش‌فرض خود استفاده می‌کنند، و
                      جستجو برای 'lorem ipsum' ممکن است
                      بسیاری از وب‌سایت‌های هنوز در دوران
                      کودکی خود هستند. نسخه‌های مختلف در طول
                      اهداف (طنز و موارد مشابه).
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        تب جعبه‌ای
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
                        کامپوننت "تب جعبه‌ای" یک رابط تبی منحصر به فرد را ارائه می‌دهد
                        با ظاهر جعبه‌ای. این یک انتخاب عالی است زمانی که می‌خواهید
                        محتوای تبی را به یک
                        سبک متمایز نمایش دهید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Tab.Group>
                              <Tab.List variant="boxed-tabs">
                                <Tab>
                                  <Tab.Button
                                    className="w-full py-2"
                                    as="button"
                                  >
                                    مثال تب 1
                                  </Tab.Button>
                                </Tab>
                                <Tab>
                                  <Tab.Button
                                    className="w-full py-2"
                                    as="button"
                                  >
                                    مثال تب 2
                                  </Tab.Button>
                                </Tab>
                              </Tab.List>
                              <Tab.Panels className="mt-5">
                                <Tab.Panel className="leading-relaxed">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  بدون تغییر. در دهه ۱۹۶۰ محبوب شد
                                  با انتشار برگه‌های Letraset حاوی
                                  متون لورم ایپسوم، و اخیراً با
                                  نرم‌افزارهای دسکتاپ پابلیشینگ مانند Aldus
                                  PageMaker شامل نسخه‌هایی از لورم ایپسوم بود.
                                </Tab.Panel>
                                <Tab.Panel className="leading-relaxed">
                                  این یک واقعیت بسیار قدیمی است که خواننده
                                  توسط محتوای قابل خواندن یک صفحه
                                  هنگام نگاه به طرح آن حواس پرت خواهد شد. هدف
                                  استفاده از Lorem Ipsum این است که یک
                                  توزیع نسبتاً عادی از حروف داشته باشد،
                                  برخلاف استفاده از 'محتوا اینجا، محتوا
                                  اینجا'، آن را شبیه به انگلیسی قابل خواندن می‌کند. بسیاری
                                  از بسته‌های انتشار دسکتاپ و ویرایشگرهای صفحه وب اکنون
                                  از Lorem Ipsum به عنوان متن مدل پیش‌فرض خود استفاده می‌کنند، و
                                  جستجو برای 'lorem ipsum' ممکن است
                                  بسیاری از وب‌سایت‌های هنوز در دوران
                                  کودکی خود هستند. نسخه‌های مختلف در طول
                                  سال‌ها تکامل یافته‌اند، گاهی از طریق حادثه، گاهی از روی
                                  اهداف (طنز و موارد مشابه).
                                </Tab.Panel>
                              </Tab.Panels>
                            </Tab.Group>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Tab.Group>
                  <Tab.List variant="boxed-tabs">
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        مثال تب 1
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        مثال تب 2
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-5">
                    <Tab.Panel className="leading-relaxed">
                      لورم ایپسوم به طور ساده متن مجازی چاپ و and
                      صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                      متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                      زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                      آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                      نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                      به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                      تغییر نکرده است. این در دهه ۱۹۶۰ با انتشار
                      برگه‌های Letraset شامل Lorem Ipsum
                      و به تازگی‌تر با نرم‌افزارهای دسکتاپ
                      انتشار صفحه‌مانند Aldus PageMaker شامل نسخه‌هایی از
                      Lorem Ipsum.
                    </Tab.Panel>
                    <Tab.Panel className="leading-relaxed">
                      این یک واقعیت بسیار قدیمی است که خواننده will be
                      توسط محتوای قابل خواندن یک صفحه هنگام
                      نگاه به طرح آن حواس پرت خواهد شد. هدف استفاده از Lorem Ipsum
                      این است که یک توزیع نسبتاً عادی از
                      حروف داشته باشد، بر خلاف استفاده از 'محتوا اینجا، محتوا
                      اینجا'، آن را شبیه به انگلیسی قابل خواندن می‌کند. بسیاری
                      از بسته‌های انتشار دسکتاپ و ویرایشگرهای صفحه وب اکنون
                      از Lorem Ipsum به عنوان متن مدل پیش‌فرض خود استفاده می‌کنند، و
                      جستجو برای 'lorem ipsum' ممکن است
                      بسیاری از وب‌سایت‌های هنوز در دوران
                      کودکی خود هستند. نسخه‌های مختلف در طول
                      اهداف (طنز و موارد مشابه).
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">تب لینک</div>
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
                        کامپوننت "تب لینک" یک رابط تبی تمیز و ساده ارائه می‌دهد
                        با دکمه‌های مانند لینک. این یک انتخاب عالی است زمانی که می‌خواهید
                        محتوای تبی را با یک
                        طراحی کم حجم.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Tab.Group>
                              <Tab.List variant="link-tabs">
                                <Tab>
                                  <Tab.Button
                                    className="w-full py-2"
                                    as="button"
                                  >
                                    مثال تب 1
                                  </Tab.Button>
                                </Tab>
                                <Tab>
                                  <Tab.Button
                                    className="w-full py-2"
                                    as="button"
                                  >
                                    مثال تب 2
                                  </Tab.Button>
                                </Tab>
                              </Tab.List>
                              <Tab.Panels className="mt-5">
                                <Tab.Panel className="leading-relaxed">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  بدون تغییر. در دهه ۱۹۶۰ محبوب شد
                                  با انتشار برگه‌های Letraset حاوی
                                  متون لورم ایپسوم، و اخیراً با
                                  نرم‌افزارهای دسکتاپ پابلیشینگ مانند Aldus
                                  PageMaker شامل نسخه‌هایی از لورم ایپسوم بود.
                                </Tab.Panel>
                                <Tab.Panel className="leading-relaxed">
                                  این یک واقعیت بسیار قدیمی است که خواننده
                                  توسط محتوای قابل خواندن یک صفحه
                                  هنگام نگاه به طرح آن حواس پرت خواهد شد. هدف
                                  استفاده از Lorem Ipsum این است که یک
                                  توزیع نسبتاً عادی از حروف داشته باشد،
                                  برخلاف استفاده از 'محتوا اینجا، محتوا
                                  اینجا'، آن را شبیه به انگلیسی قابل خواندن می‌کند. بسیاری
                                  از بسته‌های انتشار دسکتاپ و ویرایشگرهای صفحه وب اکنون
                                  از Lorem Ipsum به عنوان متن مدل پیش‌فرض خود استفاده می‌کنند، و
                                  جستجو برای 'lorem ipsum' ممکن است
                                  بسیاری از وب‌سایت‌های هنوز در دوران
                                  کودکی خود هستند. نسخه‌های مختلف در طول
                                  سال‌ها تکامل یافته‌اند، گاهی از طریق حادثه، گاهی از روی
                                  اهداف (طنز و موارد مشابه).
                                </Tab.Panel>
                              </Tab.Panels>
                            </Tab.Group>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Tab.Group>
                  <Tab.List variant="link-tabs">
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        مثال تب 1
                      </Tab.Button>
                    </Tab>
                    <Tab>
                      <Tab.Button className="w-full py-2" as="button">
                        مثال تب 2
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-5">
                    <Tab.Panel className="leading-relaxed">
                      لورم ایپسوم به طور ساده متن مجازی چاپ و and
                      صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                      متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                      زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                      آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                      نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                      به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                      تغییر نکرده است. این در دهه ۱۹۶۰ با انتشار
                      برگه‌های Letraset شامل Lorem Ipsum
                      و به تازگی‌تر با نرم‌افزارهای دسکتاپ
                      انتشار صفحه‌مانند Aldus PageMaker شامل نسخه‌هایی از
                      Lorem Ipsum.
                    </Tab.Panel>
                    <Tab.Panel className="leading-relaxed">
                      این یک واقعیت بسیار قدیمی است که خواننده will be
                      توسط محتوای قابل خواندن یک صفحه هنگام
                      نگاه به طرح آن حواس پرت خواهد شد. هدف استفاده از Lorem Ipsum
                      این است که یک توزیع نسبتاً عادی از
                      حروف داشته باشد، بر خلاف استفاده از 'محتوا اینجا، محتوا
                      اینجا'، آن را شبیه به انگلیسی قابل خواندن می‌کند. بسیاری
                      از بسته‌های انتشار دسکتاپ و ویرایشگرهای صفحه وب اکنون
                      از Lorem Ipsum به عنوان متن مدل پیش‌فرض خود استفاده می‌کنند، و
                      جستجو برای 'lorem ipsum' ممکن است
                      بسیاری از وب‌سایت‌های هنوز در دوران
                      کودکی خود هستند. نسخه‌های مختلف در طول
                      اهداف (طنز و موارد مشابه).
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
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
                    <div className="-mt-px">تب</div>
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
                          <Table.Td>`fullWidth`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            آیا تب باید عرض کامل را پوشش دهد؟
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Tab.Button</div>
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
                          <Table.Td>`as`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            Element type (e.g., "a", "button") for the tab
                            button.
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Tab.Group</div>
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
                          <Table.Td className="text-center" colSpan={3}>
                            No spesific props
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Tab.List</div>
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
                          <Table.Td>`variant`</Table.Td>
                          <Table.Td>
                            `tabs`, `pills`, `boxed-tabs`, `link-tabs`
                          </Table.Td>
                          <Table.Td>
                            استیل متغیر برای سر تصویر (پیش‌فرض
                            استایل "تب‌ها" است).
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Tab.Panels</div>
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
                          <Table.Td className="text-center" colSpan={3}>
                            No spesific props
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Tab.Panel</div>
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
                          <Table.Td className="text-center" colSpan={3}>
                            No spesific props
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
                    تب پایه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    تب جعبه‌ای
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    تب لینک
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
