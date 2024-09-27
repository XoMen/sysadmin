import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import Alert from "@/components/Base/Alert";
import Lucide from "@/components/Base/Lucide";
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
            هشدار
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            قدرت مؤلفه هشدارهای ما را برای ارسال پیام‌ها و اعلان‌های مهم به کاربران خود کشف کنید.
            پیام‌ها و اعلان‌ها به کاربران شما.
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
                        هشدارهای پایه
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
                        هشدارها برای ارتباط با پیام‌ها، هشدارها یا به‌روزرسانی‌های مهم به کاربران ضروری هستند. در این
                        بخش، شما خواهید آموخت که چگونه از هشدارهای پایه
                        به طور مؤثر برای ارائه اطلاعات و بهبود تجربه کاربر استفاده کنید
                        به طور مؤثر برای ارائه اطلاعات و بهبود تجربه کاربر
                        با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Alert variant="primary">
                                هشدار ساده عالی
                              </Alert>
                              <Alert variant="secondary">
                                هشدار ساده عالی
                              </Alert>
                              <Alert variant="success">
                                هشدار ساده عالی
                              </Alert>
                              <Alert variant="warning">
                                هشدار ساده عالی
                              </Alert>
                              <Alert variant="pending">
                                هشدار ساده عالی
                              </Alert>
                              <Alert variant="danger">
                                هشدار ساده عالی
                              </Alert>
                              <Alert variant="dark">هشدار ساده عالی</Alert>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-col gap-2">
                <Alert variant="primary">
                  هشدار ساده عالی
                </Alert>
                <Alert variant="secondary">
                  هشدار ساده عالی
                </Alert>
                <Alert variant="success">
                  هشدار ساده عالی
                </Alert>
                <Alert variant="warning">
                  هشدار ساده عالی
                </Alert>
                <Alert variant="pending">
                  هشدار ساده عالی
                </Alert>
                <Alert variant="danger">
                  هشدار ساده عالی
                </Alert>
                <Alert variant="dark">هشدار ساده عالی</Alert>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        هشدارهای پایه عنصر اساسی طراحی رابط کاربری هستند، که به عنوان یک وسیله برای ارتباط پیام‌های مهم به صورت روشن و مؤثر به‌کار می‌روند. برای ساخت وب‌سایت یا برنامه، اضافه کردن
                        به عنوان یک وسیله برای ارتباط پیام‌های مهم به صورت روشن و مؤثر
                        آیا شما در حال ساخت یک وب‌سایت یا برنامه هستید، اضافه کردن
                        می‌تواند تجربه کاربر را بهبود بخشیده و با ارائه اطلاعات و بازخورد به موقع
                        واکنش به پیام‌های مهم را بهبود بخشد.
                        با ارائه اطلاعات و بازخورد به موقع
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        هشدارهای آیکن
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
                        هشدارهای آیکن پیام‌های اطلاعاتی را با اعلان‌هایی که به راحتی
                        آیکون‌های قابل تشخیص برای انتقال اطلاعات مهم به کاربران به طور مؤثر استفاده می‌شوند.
                        کاربران را به طور مؤثر هدایت می‌کند. این بخش به شما راهنمایی می‌کند که چگونه
                        از هشدارهای آیکونی در پروژه خود استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Alert
                                variant="primary"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertCircle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="secondary"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertOctagon"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="success"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertTriangle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="warning"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertCircle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="pending"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertTriangle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="danger"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertOctagon"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="dark"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertTriangle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-col gap-2">
                <Alert
                  variant="primary"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertCircle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="secondary"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertOctagon"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="success"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertTriangle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="warning"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertCircle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="pending"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertTriangle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="danger"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertOctagon"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="dark"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertTriangle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        هشدارهای آیکونی ابزار مهمی برای بهبود تعامل کاربران است
                        که با ارائه پیام‌های واضح و جذاب به طریق بصری، تعامل کاربران را افزایش می‌دهند.
                        پیام‌ها. با پیگیری مراحل فوق، به راحتی می‌توانید
                        هشدارهای آیکونی را به پروژه خود ادغام کنید و به طور مؤثر
                        اطلاعات مهم را به کاربران خود ارسال کنید.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        هشدارهای محتوای اضافی
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
                        هشدارهای محتوای اضافی به شما اجازه می‌دهند که اطلاعات بیشتری را به کاربران ارائه دهید
                        با اضافه کردن عناصر اضافی درون هشدار، مانند آیکون‌ها، برچسب‌ها یا متن اضافی.
                        هشدار، مانند آیکون‌ها، برچسب‌ها یا متن اضافی.
                        این بخش راهنمایی در مورد استفاده موثر از هشدارهای محتوای اضافی ارائه می‌دهد.
                        هشدارهای محتوا را به طور موثر استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Alert variant="primary">
                                <div className="flex items-center">
                                  <div className="text-lg font-medium">
                                    هشدار شگفت‌انگیز با اطلاعات اضافی
                                  </div>
                                  <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                                    New
                                  </div>
                                </div>
                                <div className="mt-3">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  متن آزمایشی بوده است.
                                </div>
                              </Alert>
                              <Alert variant="secondary">
                                <div className="flex items-center">
                                  <div className="text-lg font-medium">
                                    هشدار شگفت‌انگیز با اطلاعات اضافی
                                  </div>
                                  <div className="px-1 ms-auto text-xs text-white rounded-md bg-slate-500">
                                    New
                                  </div>
                                </div>
                                <div className="mt-3">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  متن آزمایشی بوده است.
                                </div>
                              </Alert>
                              <Alert variant="success">
                                <div className="flex items-center">
                                  <div className="text-lg font-medium">
                                    هشدار شگفت‌انگیز با اطلاعات اضافی
                                  </div>
                                  <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                                    New
                                  </div>
                                </div>
                                <div className="mt-3">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  متن آزمایشی بوده است.
                                </div>
                              </Alert>
                              <Alert variant="warning">
                                <div className="flex items-center">
                                  <div className="text-lg font-medium">
                                    هشدار شگفت‌انگیز با اطلاعات اضافی
                                  </div>
                                  <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                                    New
                                  </div>
                                </div>
                                <div className="mt-3">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  متن آزمایشی بوده است.
                                </div>
                              </Alert>
                              <Alert variant="pending">
                                <div className="flex items-center">
                                  <div className="text-lg font-medium">
                                    هشدار شگفت‌انگیز با اطلاعات اضافی
                                  </div>
                                  <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                                    New
                                  </div>
                                </div>
                                <div className="mt-3">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  متن آزمایشی بوده است.
                                </div>
                              </Alert>
                              <Alert variant="danger">
                                <div className="flex items-center">
                                  <div className="text-lg font-medium">
                                    هشدار شگفت‌انگیز با اطلاعات اضافی
                                  </div>
                                  <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                                    New
                                  </div>
                                </div>
                                <div className="mt-3">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  متن آزمایشی بوده است.
                                </div>
                              </Alert>
                              <Alert variant="dark">
                                <div className="flex items-center">
                                  <div className="text-lg font-medium">
                                    هشدار شگفت‌انگیز با اطلاعات اضافی
                                  </div>
                                  <div className="px-1 ms-auto text-xs text-white rounded-md bg-slate-500">
                                    New
                                  </div>
                                </div>
                                <div className="mt-3">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  متن آزمایشی بوده است.
                                </div>
                              </Alert>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-col gap-2">
                <Alert variant="primary">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      هشدار شگفت‌انگیز با اطلاعات اضافی
                    </div>
                    <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    متن آزمایشی است
                    صنعت چاپ و تنظیم‌مجدد متن است.
                    این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                    متن آزمایشی بوده است.
                  </div>
                </Alert>
                <Alert variant="secondary">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      هشدار شگفت‌انگیز با اطلاعات اضافی
                    </div>
                    <div className="px-1 ms-auto text-xs text-white rounded-md bg-slate-500">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    متن آزمایشی است
                    صنعت چاپ و تنظیم‌مجدد متن است.
                    این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                    متن آزمایشی بوده است.
                  </div>
                </Alert>
                <Alert variant="success">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      هشدار شگفت‌انگیز با اطلاعات اضافی
                    </div>
                    <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    متن آزمایشی است
                    صنعت چاپ و تنظیم‌مجدد متن است.
                    این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                    متن آزمایشی بوده است.
                  </div>
                </Alert>
                <Alert variant="warning">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      هشدار شگفت‌انگیز با اطلاعات اضافی
                    </div>
                    <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    متن آزمایشی است
                    صنعت چاپ و تنظیم‌مجدد متن است.
                    این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                    متن آزمایشی بوده است.
                  </div>
                </Alert>
                <Alert variant="pending">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      هشدار شگفت‌انگیز با اطلاعات اضافی
                    </div>
                    <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    متن آزمایشی است
                    صنعت چاپ و تنظیم‌مجدد متن است.
                    این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                    متن آزمایشی بوده است.
                  </div>
                </Alert>
                <Alert variant="danger">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      هشدار شگفت‌انگیز با اطلاعات اضافی
                    </div>
                    <div className="px-1 ms-auto text-xs bg-white rounded-md text-slate-700">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    متن آزمایشی است
                    صنعت چاپ و تنظیم‌مجدد متن است.
                    این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                    متن آزمایشی بوده است.
                  </div>
                </Alert>
                <Alert variant="dark">
                  <div className="flex items-center">
                    <div className="text-lg font-medium">
                      هشدار شگفت‌انگیز با اطلاعات اضافی
                    </div>
                    <div className="px-1 ms-auto text-xs text-white rounded-md bg-slate-500">
                      New
                    </div>
                  </div>
                  <div className="mt-3">
                    متن آزمایشی است
                    صنعت چاپ و تنظیم‌مجدد متن است.
                    این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                    متن آزمایشی بوده است.
                  </div>
                </Alert>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        هشدارهای محتوای اضافی ابزار مهمی برای
                        ارسال اطلاعات غنی‌تر به کاربران هستند، همچنین
                        طراحی تمیز و منظم را حفظ می‌کنند. با پیگیری مراحل
                        فوق، می‌توانید به راحتی هشدارهای محتوای اضافی را
                        به پروژه خود اضافه کرده و ارتباط خود را با کاربران بهبود بخشید.
                        با کاربران.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        هشدارهای آیکونی و رد کردن
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
                        هشدارهای آیکونی و رد کردن آیکون‌ها را با قابلیت رد کردن
                        ترکیب می‌کنند، این امکان را به شما می‌دهند که پیام‌های مهم را نمایش دهید
                        و به کاربران امکان می‌دهند که گزینه بستن هشدار را داشته باشند
                        هنگامی که آن را خوانده‌اند. این بخش راهنمایی در مورد استفاده موثر از این هشدارها ارائه می‌دهد.
                        راهنمایی در مورد استفاده موثر از این هشدارها.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Alert
                                variant="primary"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertCircle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="text-white"
                                      aria-label="Close"
                                      onClick={dismiss}
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="secondary"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertOctagon"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      aria-label="Close"
                                      onClick={dismiss}
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="success"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertTriangle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      aria-label="Close"
                                      onClick={dismiss}
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="warning"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertCircle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      aria-label="Close"
                                      onClick={dismiss}
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="pending"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertTriangle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      aria-label="Close"
                                      onClick={dismiss}
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="danger"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertOctagon"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="text-white"
                                      aria-label="Close"
                                      onClick={dismiss}
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="dark"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertTriangle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="text-white"
                                      aria-label="Close"
                                      onClick={dismiss}
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-col gap-2">
                <Alert
                  variant="primary"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertCircle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="text-white"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="secondary"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertOctagon"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="success"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="warning"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertCircle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="pending"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="danger"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertOctagon"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="text-white"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="dark"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="text-white"
                        aria-label="Close"
                        onClick={dismiss}
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        هشدارهای آیکونی و رد کردن روش کاربر پسندی است
                        برای ارائه اطلاعات و اجازه دادن به کاربران برای مدیریت
                        هشدارهای خود. با پیگیری مراحل فوق، می‌توانید
                        این هشدارها را به طور بی‌درنگ به پروژه خود ادغام کنید و
                        تعامل کاربر و ارتباط را بهبود بخشید.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        هشدارهای خطی
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
                        هشدارهای خطی روشی تمیز و کم‌حجم برای
                        نمایش پیام‌های مهم با مرزهای مشخص است.
                        این بخش راهنمایی در مورد استفاده موثر از این هشدارها ارائه می‌دهد
                        تا اطلاعات را به کاربران خود منتقل کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Alert
                                variant="outline-primary"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertCircle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      onClick={dismiss}
                                      aria-label="Close"
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="outline-secondary"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertOctagon"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      onClick={dismiss}
                                      aria-label="Close"
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="outline-success"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertTriangle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      onClick={dismiss}
                                      aria-label="Close"
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="outline-warning"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertCircle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      onClick={dismiss}
                                      aria-label="Close"
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="outline-pending"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertCircle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      onClick={dismiss}
                                      aria-label="Close"
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="outline-danger"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertOctagon"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      onClick={dismiss}
                                      aria-label="Close"
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                              <Alert
                                variant="outline-dark"
                                className="flex items-center"
                              >
                                {({ dismiss }) => (
                                  <>
                                    <Lucide
                                      icon="AlertTriangle"
                                      className="w-6 h-6 me-2"
                                    />{" "}
                                    هشدار شگفت‌انگیز با آیکون
                                    <Alert.DismissButton
                                      type="button"
                                      className="btn-close"
                                      onClick={dismiss}
                                      aria-label="Close"
                                    >
                                      <Lucide icon="X" className="w-4 h-4" />
                                    </Alert.DismissButton>
                                  </>
                                )}
                              </Alert>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-col gap-2">
                <Alert
                  variant="outline-primary"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertCircle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-secondary"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertOctagon"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-success"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-warning"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertCircle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-pending"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertCircle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-danger"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertOctagon"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
                <Alert
                  variant="outline-dark"
                  className="flex items-center"
                >
                  {({ dismiss }) => (
                    <>
                      <Lucide
                        icon="AlertTriangle"
                        className="w-6 h-6 me-2"
                      />{" "}
                      هشدار شگفت‌انگیز با آیکون
                      <Alert.DismissButton
                        type="button"
                        className="btn-close"
                        onClick={dismiss}
                        aria-label="Close"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Alert.DismissButton>
                    </>
                  )}
                </Alert>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        هشدارهای خطی راهی شیک و موثر برای
                        اطلاعات اساسی را به کاربران منتقل کنید در حالی که
                        طراحی تمیزی را حفظ کنید. با پیگیری مراحل
                        فوق، می‌توانید به طور بی‌درنگ این هشدارها را وارد کنید به
                        پروژه خود و تجربه کاربر را بهبود بخشید.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        هشدارهای رنگی نرم
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
                        هشدارهای رنگی نرم یک روش دلپذیر و ملایم برای انتقال پیام‌های مهم با رنگ‌های نرم ارائه می‌دهند.
                        این بخش راهنمایی در مورد استفاده موثر از این هشدارها را برای بهبود تجربه کاربر ارائه می‌دهد.
                        این بخش راهنمایی در مورد استفاده موثر از این
                        هشدارها برای بهبود تجربه کاربر ارائه می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Alert
                                variant="soft-primary"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertCircle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="soft-secondary"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertOctagon"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="soft-success"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertTriangle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="soft-warning"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertCircle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="soft-pending"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertTriangle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="soft-danger"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertOctagon"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                              <Alert
                                variant="soft-dark"
                                className="flex items-center"
                              >
                                <Lucide
                                  icon="AlertTriangle"
                                  className="w-6 h-6 me-2"
                                />{" "}
                                هشدار شگفت‌انگیز با آیکون
                              </Alert>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-col gap-2">
                <Alert
                  variant="soft-primary"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertCircle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="soft-secondary"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertOctagon"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="soft-success"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertTriangle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="soft-warning"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertCircle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="soft-pending"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertTriangle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="soft-danger"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertOctagon"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
                <Alert
                  variant="soft-dark"
                  className="flex items-center"
                >
                  <Lucide
                    icon="AlertTriangle"
                    className="w-6 h-6 me-2"
                  />{" "}
                  هشدار شگفت‌انگیز با آیکون
                </Alert>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        هشدارهای رنگی نرم یک راه ملایم و دلپذیر برای
                        اطلاعات اساسی را به کاربران منتقل کنید در حالی که
                        حفظ زیبایی ملایم ارائه می‌دهند. با پیگیری مراحل
                        فوق، می‌توانید به طور بی‌درنگ این هشدارها را وارد کنید به
                        پروژه خود و ایجاد یک تجربه کاربری جذاب ارائه می‌دهند.
                        با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
                      </p>
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
                    <div className="-mt-px">هشدار</div>
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
                          <Table.Td>`dismissible`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            نشان می‌دهد که آیا می‌توان هشدار را رد کرد
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`variant`</Table.Td>
                          <Table.Td>`Variant`</Table.Td>
                          <Table.Td>نوعی از سبک هشدار</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onShow`</Table.Td>
                          <Table.Td>`() =&gt; {}`</Table.Td>
                          <Table.Td>پس از نشان داده شدن هشدار، تابع فراخوانی می‌شود</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onShown`</Table.Td>
                          <Table.Td>`() =&gt; {}`</Table.Td>
                          <Table.Td>پس از نشان داده شدن هشدار، تابع فراخوانی می‌شود</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onHide`</Table.Td>
                          <Table.Td>`() =&gt; {}`</Table.Td>
                          <Table.Td>
                            پیش از مخفی شدن هشدار، تابع فراخوانی می‌شود
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onHidden`</Table.Td>
                          <Table.Td>`() =&gt; {}`</Table.Td>
                          <Table.Td>
                            پس از مخفی شدن هشدار، تابع فراخوانی می‌شود
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Alert.DismissButton</div>
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
                            HTML element type for the dismiss button (default is
                            "button" or "a")
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
                    هشدارهای پایه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    هشدارهای آیکن
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    هشدارهای محتوای اضافی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    هشدارهای آیکونی و رد کردن
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    هشدارهای خطی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    هشدارهای رنگی نرم
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
