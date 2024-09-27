import clsx from "clsx";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import Table from "@/components/Base/Table";
import Lucide from "@/components/Base/Lucide";
import Notification from "@/components/Base/Notification";
import { NotificationElement } from "@/components/Base/Notification";
import { FormSwitch } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import users from "@/fakers/users";
import { useRef } from "react";

function Main() {
  // Basic non sticky notification
  const basicNonStickyNotification = useRef<NotificationElement>();
  const basicNonStickyNotificationToggle = () => {
    // Show notification
    basicNonStickyNotification.current?.showToast();
  };

  // Basic sticky notification
  const basicStickyNotification = useRef<NotificationElement>();
  const basicStickyNotificationToggle = () => {
    // Show notification
    basicStickyNotification.current?.showToast();
  };

  // Success notification
  const successNotification = useRef<NotificationElement>();
  const successNotificationToggle = () => {
    // Show notification
    successNotification.current?.showToast();
  };

  // Notification with actions
  const notificationWithActions = useRef<NotificationElement>();
  const notificationWithActionsToggle = () => {
    // Show notification
    notificationWithActions.current?.showToast();
  };

  // Notification with avatar
  const notificationWithAvatar = useRef<NotificationElement>();
  const notificationWithAvatarToggle = () => {
    // Show notification
    notificationWithAvatar.current?.showToast();
  };

  // Notification with split buttons
  const notificationWithSplitButtons = useRef<NotificationElement>();
  const notificationWithSplitButtonsToggle = () => {
    // Show notification
    notificationWithSplitButtons.current?.showToast();
  };

  // Notification with buttons below
  const notificationWithButtonsBelow = useRef<NotificationElement>();
  const notificationWithButtonsBelowToggle = () => {
    // Show notification
    notificationWithButtonsBelow.current?.showToast();
  };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            اطلاعیه
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            اکتشاف مؤلفه اعلان، تجربه کاربر را با اعلان‌های ساده و شادی‌بخش به سطح بالاتر برسانید!
            و اعلان‌ها!
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
                        اعلان پایه
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
                        اعلان‌ها راهی برای ارتباط دادن پیام‌ها یا به‌روزرسانی‌های مهم به کاربران شما فراهم می‌کنند. این بخش دو نوع اعلان پایه را پوشش می‌دهد: اعلان‌های چسبان و غیر چسبان.
                        پیام‌ها یا به‌روزرسانی‌ها را به کاربران خود ارائه می‌دهند. این بخش دو نوع اعلان پایه را پوشش می‌دهد:
                        دو نوع اعلان پایه: غیر چسبان و چسبان.
                        اعلان‌ها.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Basic Non Sticky Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  basicNonStickyNotification.current = el;
                                }}
                                options={{
                                  duration: 3000,
                                }}
                                className="flex flex-col sm:flex-row"
                              >
                                <div className="font-medium">
                                  وای! به‌روزرسانی‌ها منتشر شدند!
                                </div>
                                <a
                                  className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ms-40"
                                  href=""
                                >
                                  بررسی تغییرات
                                </a>
                              </Notification>
                              {/* END: Basic Non Sticky Notification Content */}
                              {/* BEGIN: Basic Sticky Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  basicStickyNotification.current = el;
                                }}
                                className="flex flex-col sm:flex-row"
                              >
                                <div className="font-medium">
                                  وای! به‌روزرسانی‌ها منتشر شدند!
                                </div>
                                <a
                                  className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ms-40"
                                  href=""
                                >
                                  بررسی تغییرات
                                </a>
                              </Notification>
                              {/* END: Basic Sticky Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                className="me-1"
                                onClick={basicNonStickyNotificationToggle}
                              >
                                نمایش اعلان غیر چسبان
                              </Button>
                              <Button
                                variant="primary"
                                className="mt-2 sm:mt-0"
                                onClick={basicStickyNotificationToggle}
                              >
                                نمایش اعلان چسبان
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Basic Non Sticky Notification Content */}
                <Notification
                  getRef={(el) => {
                    basicNonStickyNotification.current = el;
                  }}
                  options={{
                    duration: 3000,
                  }}
                  className="flex flex-col sm:flex-row"
                >
                  <div className="font-medium">
                    وای! به‌روزرسانی‌ها منتشر شدند!
                  </div>
                  <a
                    className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ms-40"
                    href=""
                  >
                    بررسی تغییرات
                  </a>
                </Notification>
                {/* END: Basic Non Sticky Notification Content */}
                {/* BEGIN: Basic Sticky Notification Content */}
                <Notification
                  getRef={(el) => {
                    basicStickyNotification.current = el;
                  }}
                  className="flex flex-col sm:flex-row"
                >
                  <div className="font-medium">
                    وای! به‌روزرسانی‌ها منتشر شدند!
                  </div>
                  <a
                    className="mt-1 font-medium text-primary dark:text-slate-400 sm:mt-0 sm:ms-40"
                    href=""
                  >
                    بررسی تغییرات
                  </a>
                </Notification>
                {/* END: Basic Sticky Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  className="me-1"
                  onClick={basicNonStickyNotificationToggle}
                >
                  نمایش اعلان غیر چسبان
                </Button>
                <Button
                  variant="primary"
                  className="mt-2 sm:mt-0"
                  onClick={basicStickyNotificationToggle}
                >
                  نمایش اعلان چسبان
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Basic non sticky notification
                const basicNonStickyNotification = useRef<NotificationElement>();
                const basicNonStickyNotificationToggle = () => {
                  // Show notification
                  basicNonStickyNotification.current?.showToast();
                };
              
                // Basic sticky notification
                const basicStickyNotification = useRef<NotificationElement>();
                const basicStickyNotificationToggle = () => {
                  // Show notification
                  basicStickyNotification.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اعلان‌های پایه راهی ساده اما موثر برای
                        اطلاع‌رسانی به کاربران درباره به‌روزرسانی‌ها یا اقدامات مهمی که آنها
                        باید انجام دهند. اینکه اعلان‌های غیر چسبان یا چسبان را انتخاب کنید
                        بستگی به فوریت و تجربه کاربری دارد که می‌خواهید ارائه دهید. با استفاده از
                        استایل‌ها و پیام‌های مختلف، اعلان‌هایی ایجاد کنید که تجربه کاربری شما را بهبود بخشد.

                        کارایی برنامه‌تان را ارتقاء دهد.
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
                        اعلان موفقیت
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
                        اعلان‌های موفقیت راهی برای ارائه بازخورد مثبت به کاربران هنگامی که اقدامات
                        را با موفقیت انجام می‌دهند. این بخش نشان می‌دهد که چگونه اعلان‌های موفقیت را ایجاد
                        و استفاده کنید.
                        و از اعلان‌های موفقیت استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  successNotification.current = el;
                                }}
                                className="flex"
                              >
                                <Lucide
                                  icon="CheckCircle"
                                  className="text-success"
                                />
                                <div className="ms-4 me-4">
                                  <div className="font-medium">
                                    پیام ذخیره شد!
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    پیام در ۵ دقیقه ارسال خواهد شد.
                                  </div>
                                </div>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={successNotificationToggle}
                              >
                                نمایش اعلان
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    successNotification.current = el;
                  }}
                  className="flex"
                >
                  <Lucide icon="CheckCircle" className="text-success" />
                  <div className="ms-4 me-4">
                    <div className="font-medium">پیام ذخیره شد!</div>
                    <div className="mt-1 text-slate-500">
                      پیام در ۵ دقیقه ارسال خواهد شد.
                    </div>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={successNotificationToggle}
                >
                  نمایش اعلان
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Success notification
                const successNotification = useRef<NotificationElement>();
                const successNotificationToggle = () => {
                  // Show notification
                  successNotification.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اعلان‌های موفقیت نقش اساسی در ارتقای
                        تجربه کاربری با ارائه بازخورد فوری در مورد
                        اقدامات موفقیت‌آمیز دارند. آن‌ها به کاربران کمک می‌کنند تا درک کنند که
                        اقدامات آنها با موفقیت انجام شده‌اند، که اعتمادشان به برنامه‌ی شما را افزایش می‌دهد.
                        در نظر داشته باشید که از اعلان‌های موفقیت برای اقداماتی مانند ذخیره داده‌ها،
                        کامل کردن وظایف یا ارسال‌های موفق استفاده کنید. پیام و استایل را به‌روز کنید
                        تا با نیازهای برنامه‌ی شما و انتظارات کاربران همخوانی داشته باشد.
                        پیام و استایل را به هماهنگی با برنامه‌ی شما تنظیم کنید.
                        نام‌گذاری و انتظارات کاربر.
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
                        اعلان با اقدامات
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
                        اعلان‌ها با اقدامات به شما امکان می‌دهند که به کاربران
                        گزینه‌های واضحی پس از دریافت یک
                        اعلان ارائه دهید. این بخش نشان می‌دهد که چگونه اعلان‌های با اقدامات را ایجاد
                        و استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  notificationWithActions.current = el;
                                }}
                                className="flex"
                              >
                                <Lucide icon="HardDrive" />
                                <div className="ms-4 me-4">
                                  <div className="font-medium">
                                    ذخیره سازی حذف شد!
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    The server will restart in 30 seconds, don't
                                    make
                                    <br />
                                    در طول فرآیند به‌روزرسانی!
                                  </div>
                                  <div className="font-medium flex mt-1.5">
                                    <a
                                      className="text-primary dark:text-slate-400"
                                      href=""
                                    >
                                      هم اکنون راه‌اندازی مجدد کنید
                                    </a>
                                    <a className="ms-3 text-slate-500" href="">
                                      Cancel
                                    </a>
                                  </div>
                                </div>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={notificationWithActionsToggle}
                              >
                                نمایش اعلان
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithActions.current = el;
                  }}
                  className="flex"
                >
                  <Lucide icon="HardDrive" />
                  <div className="ms-4 me-4">
                    <div className="font-medium">ذخیره سازی حذف شد!</div>
                    <div className="mt-1 text-slate-500">
                      سرور در ۳۰ ثانیه دوباره راه‌اندازی خواهد شد، اقدامی ننمایید
                      <br />
                      در طول فرآیند به‌روزرسانی!
                    </div>
                    <div className="font-medium flex mt-1.5">
                      <a
                        className="text-primary dark:text-slate-400"
                        href=""
                      >
                        هم اکنون راه‌اندازی مجدد کنید
                      </a>
                      <a className="ms-3 text-slate-500" href="">
                        Cancel
                      </a>
                    </div>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithActionsToggle}
                >
                  نمایش اعلان
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Notification with actions
                const notificationWithActions = useRef<NotificationElement>();
                const notificationWithActionsToggle = () => {
                  // Show notification
                  notificationWithActions.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اعلان‌ها با اقدامات یک راه قدرتمند برای جذب
                        کاربران و راهنمایی آن‌ها در مورد مراحل بعدی که می‌توانند انجام دهند هستند.
                        این اعلان‌ها به ویژه برای هشدارهای حیاتی مفید هستند یا وضعیت‌هایی که نیاز به تعامل کاربر دارند.
                        با ارائه دکمه‌های عمل واضح و مربوط، می‌توانید به کاربران کمک کنید
                        تصمیمات مطلع بگیرند و اقدامات مناسب را انجام دهند. پیام، آیکون و اقدامات را
                        با نیازهای برنامه‌ی شما و نیازهای کاربر همخوانی دهید.
                        اقدامات را سفارشی کنید. پیام، آیکون‌ها و اقدامات را برای
                        تطابق با نیازها و نیازهای کاربران برنامه‌ی شما.
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
                        اعلان با آواتار
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
                        اعلان‌ها با آواتار به شما امکان می‌دهند که شخصی‌سازی کنید
                        اعلان‌ها را با اضافه کردن آواتارهای کاربر یا عکس‌های پروفایل.
                        این بخش نشان می‌دهد که چگونه اعلان‌های با آواتار ایجاد و
                        استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  notificationWithAvatar.current = el;
                                }}
                                options={{
                                  close: false,
                                }}
                                className="flex"
                              >
                                <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                                  <img
                                    alt="تیل وایز - قالب داشبورد مدیریتی"
                                    src={users.fakeUsers()[0].photo}
                                  />
                                </div>
                                <div className="ms-4 sm:me-28">
                                  <div className="font-medium">
                                    {users.fakeUsers()[0].name}
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    See you later! 😃😃😃
                                  </div>
                                </div>
                                <a
                                  data-dismiss="notification"
                                  className="absolute top-0 bottom-0 end-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400"
                                  href="#"
                                >
                                  پاسخ
                                </a>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={notificationWithAvatarToggle}
                              >
                                نمایش اعلان
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithAvatar.current = el;
                  }}
                  options={{
                    close: false,
                  }}
                  className="flex"
                >
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <div className="ms-4 sm:me-28">
                    <div className="font-medium">
                      {users.fakeUsers()[0].name}
                    </div>
                    <div className="mt-1 text-slate-500">
                      See you later! 😃😃😃
                    </div>
                  </div>
                  <a
                    data-dismiss="notification"
                    className="absolute top-0 bottom-0 end-0 flex items-center px-6 font-medium border-l border-slate-200/60 dark:border-darkmode-400 text-primary dark:text-slate-400"
                    href="#"
                  >
                    پاسخ
                  </a>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithAvatarToggle}
                >
                  نمایش اعلان
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Notification with avatar
                const notificationWithAvatar = useRef<NotificationElement>();
                const notificationWithAvatarToggle = () => {
                  // Show notification
                  notificationWithAvatar.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اعلان‌ها با آواتار یک لمس شخصی به اعلان‌های شما اضافه می‌کنند
                        و آنها را جذاب‌تر و قابل ارتباط تر به کاربران می‌کنند.
                        شما می‌توانید از آواتارها برای شناسایی فرستنده یا
                        منبع اعلان استفاده کنید، ساختن تجربه‌ای بیشتر
                        کاربرمحور و تعاملی. آواتار، اطلاعات کاربر و پیام را سفارشی کنید
                        تا با متناسب با زمینه برنامه‌ی شما و تعاملات کاربر.
                        زمینه و تعاملات کاربری برنامه.
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
                        اعلان با دکمه‌های تقسیم شده
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
                        اعلان‌ها با دکمه‌های تقسیم شده به شما امکان می‌دهند که
                        گزینه‌های عمل چندگانه را در یک اعلان فراهم کنید.
                        این بخش نشان می‌دهد که چگونه اعلان‌های با دکمه‌های تقسیم شده را ایجاد و
                        استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  notificationWithSplitButtons.current = el;
                                }}
                                options={{
                                  close: false,
                                }}
                                className="flex"
                              >
                                <div className="sm:me-40">
                                  <div className="font-medium">
                                    معرفی تم جدید
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    نسخه 2.3.3 را منتشر کنید
                                  </div>
                                </div>
                                <div className="absolute top-0 bottom-0 end-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400">
                                  <a
                                    className="flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400"
                                    href="#"
                                  >
                                    مشاهده جزئیات
                                  </a>
                                  <a
                                    data-dismiss="notification"
                                    className="flex items-center justify-center flex-1 px-6 font-medium text-slate-500"
                                    href="#"
                                  >
                                    رد کردن
                                  </a>
                                </div>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={notificationWithSplitButtonsToggle}
                              >
                                نمایش اعلان
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithSplitButtons.current = el;
                  }}
                  options={{
                    close: false,
                  }}
                  className="flex"
                >
                  <div className="sm:me-40">
                    <div className="font-medium">
                      معرفی تم جدید
                    </div>
                    <div className="mt-1 text-slate-500">
                      نسخه 2.3.3 را منتشر کنید
                    </div>
                  </div>
                  <div className="absolute top-0 bottom-0 end-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400">
                    <a
                      className="flex items-center justify-center flex-1 px-6 font-medium border-b text-primary dark:text-slate-400 border-slate-200/60 dark:border-darkmode-400"
                      href="#"
                    >
                      مشاهده جزئیات
                    </a>
                    <a
                      data-dismiss="notification"
                      className="flex items-center justify-center flex-1 px-6 font-medium text-slate-500"
                      href="#"
                    >
                      رد کردن
                    </a>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithSplitButtonsToggle}
                >
                  نمایش اعلان
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Notification with split buttons
                const notificationWithSplitButtons = useRef<NotificationElement>();
                const notificationWithSplitButtonsToggle = () => {
                  // Show notification
                  notificationWithSplitButtons.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اعلان‌ها با دکمه‌های تقسیم شده تعامل کاربر را بهبود می‌بخشند
                        با ارائه چندین اقدام در یک اعلان تنها.
                        این ویژگی برای ارائه گزینه‌ها یا دسترسی سریع به اقدامات مربوط بدون
                        اشغال کردن رابط اعلان مفید است. دکمه‌ها و اقدامات را
                        به نیازها و نیازهای برنامه‌ی شما و تجربه کاربری بی‌درنگ
                        سفارشی کنید.
                        تجربه کاربری بی‌درزگیری ارائه دهید.
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
                        اعلان با دکمه‌های زیر
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
                        اعلان‌ها با دکمه‌های زیر به شما اجازه می‌دهند که شامل
                        دکمه‌های عمل مستقیما زیر اعلان
                        محتوا. این بخش نشان می‌دهد که چگونه اعلان‌ها با دکمه‌های زیر را ایجاد و
                        استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Notification Content */}
                              <Notification
                                getRef={(el) => {
                                  notificationWithButtonsBelow.current = el;
                                }}
                                options={{
                                  close: false,
                                }}
                                className="flex"
                              >
                                <Lucide icon="FileText" />
                                <div className="ms-4 me-5 sm:me-20">
                                  <div className="font-medium">
                                    {users.fakeUsers()[0].name}
                                  </div>
                                  <div className="mt-1 text-slate-500">
                                    سند جدیدی برای شما ارسال شده است.
                                  </div>
                                  <div className="mt-2.5">
                                    <Button
                                      variant="primary"
                                      as="a"
                                      className="px-2 py-1 me-2"
                                      href=""
                                    >
                                      Preview
                                    </Button>
                                    <Button
                                      variant="outline-secondary"
                                      as="a"
                                      className="px-2 py-1"
                                      href=""
                                    >
                                      دانلود
                                    </Button>
                                  </div>
                                </div>
                              </Notification>
                              {/* END: Notification Content */}
                              {/* BEGIN: Notification Toggle */}
                              <Button
                                variant="primary"
                                onClick={notificationWithButtonsBelowToggle}
                              >
                                نمایش اعلان
                              </Button>
                              {/* END: Notification Toggle */}
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                {/* BEGIN: Notification Content */}
                <Notification
                  getRef={(el) => {
                    notificationWithButtonsBelow.current = el;
                  }}
                  options={{
                    close: false,
                  }}
                  className="flex"
                >
                  <Lucide icon="FileText" />
                  <div className="ms-4 me-5 sm:me-20">
                    <div className="font-medium">
                      {users.fakeUsers()[0].name}
                    </div>
                    <div className="mt-1 text-slate-500">
                      سند جدیدی برای شما ارسال شده است.
                    </div>
                    <div className="mt-2.5">
                      <Button
                        variant="primary"
                        as="a"
                        className="px-2 py-1 me-2"
                        href=""
                      >
                        پیش‌نمایش
                      </Button>
                      <Button
                        variant="outline-secondary"
                        as="a"
                        className="px-2 py-1"
                        href=""
                      >
                        دانلود
                      </Button>
                    </div>
                  </div>
                </Notification>
                {/* END: Notification Content */}
                {/* BEGIN: Notification Toggle */}
                <Button
                  variant="primary"
                  onClick={notificationWithButtonsBelowToggle}
                >
                  نمایش اعلان
                </Button>
                {/* END: Notification Toggle */}
              </div>
              `}
                            </Highlight>
                            <Highlight type="javascript" className="mt-5">
                              {`
                // Notification with buttons below
                const notificationWithButtonsBelow = useRef<NotificationElement>();
                const notificationWithButtonsBelowToggle = () => {
                  // Show notification
                  notificationWithButtonsBelow.current?.showToast();
                };
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اعلان‌ها با دکمه‌های زیر تعامل کاربر را بهبود می‌بخشند
                        با قرار دادن دکمه‌های قابل اجرا مستقیما زیر
                        پیام اعلان. این طراحی به کاربران امکان می‌دهد که
                        به سرعت پاسخ دهند یا اقدامات خاصی را انجام دهند که مرتبط با
                        محتوای اعلان است. دکمه‌ها و
                        محتوا را سفارشی کنید تا با نیازهای برنامه‌ی شما همخوانی داشته باشد و
                        تجربه کاربری بی‌درز باشد.
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
                    <div className="-mt-px">Dialog</div>
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
                          <Table.Td>`گزینه‌ها`</Table.Td>
                          <Table.Td>
                            یک شیء حاوی گزینه‌های پیکربندی
                            رفتار اعلان است. تمامی رابط‌های برنامه‌نویسی موجود را از طریق پیوندهای
                            مستندات مفید زیر بررسی کنید.
                            links
                            <a
                              href="https://apvarun.github.io/toastify-js/"
                              target="blank"
                              className="ms-1 text-primary"
                            >
                              https://apvarun.github.io/toastify-js/
                            </a>
                            .
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: NotificationElement) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            یک تابع بازخوانی برای دریافت مرجع به
                            عنصر اعلان.
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
                    اعلان پایه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    اعلان موفقیت
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    اعلان با اقدامات
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    اعلان با آواتار
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    اعلان با دکمه‌های تقسیم شده
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    اعلان با دکمه‌های زیر
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
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
