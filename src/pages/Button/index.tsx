import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import LoadingIcon from "@/components/Base/LoadingIcon";
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
            دکمه‌ها
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            تنوع اجزای دکمه ما را برای بهبود تعامل کاربر در برنامه خود کاوش کنید.
            تعاملات روی برنامه‌ی شما.
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
                        دکمه‌های ابتدایی
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
                        دکمه‌ها عناصر اساسی در طراحی وب و برنامه هستند،
                        که به کاربران اجازه می دهند با محتوای شما تعامل داشته و اقداماتی انجام دهند.
                        اقدامات. اجزای دکمه‌های ابتدایی یک مجموعه از
                        استایل‌های دکمه را که به راحتی می‌توانید در پروژه خود
                        اضافه کنید. این دکمه‌ها در انواع متفاوت رنگ برای
                        رضایت از نیازهای طراحی شما آمده‌اند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap gap-2">
                              <Button variant="primary" className="w-24">
                                اصلی
                              </Button>
                              <Button variant="secondary" className="w-24">
                                ثانویه
                              </Button>
                              <Button variant="success" className="w-24">
                                موفقیت
                              </Button>
                              <Button variant="warning" className="w-24">
                                اخطار
                              </Button>
                              <Button variant="pending" className="w-24">
                                در انتظار
                              </Button>
                              <Button variant="danger" className="w-24">
                                خطر
                              </Button>
                              <Button variant="dark" className="w-24">
                                تیره
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap gap-2">
                <Button variant="primary" className="w-24">
                  اصلی
                </Button>
                <Button variant="secondary" className="w-24">
                  ثانویه
                </Button>
                <Button variant="success" className="w-24">
                  موفقیت
                </Button>
                <Button variant="warning" className="w-24">
                  اخطار
                </Button>
                <Button variant="pending" className="w-24">
                  در انتظار
                </Button>
                <Button variant="danger" className="w-24">
                  خطر
                </Button>
                <Button variant="dark" className="w-24">
                  تیره
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        دکمه‌ها برای تعامل کاربر در وب شما ضروری هستند،
                        یا پروژه برنامه. اجزای دکمه‌های ابتدایی یک
                        مجموعه گسترده از استایل‌ها و گزینه‌های سفارشی‌سازی را ارائه می‌دهد تا
                        اطمینان حاصل شود که دکمه‌های شما نه تنها کارآمدند بلکه به نظر هم زیبا باشند.
                        جذاب.
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
                        اندازه‌های دکمه
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
                        اجزای اندازه‌های دکمه به شما امکان می‌دهد اندازه
                        دکمه‌ها را با نیازهای طراحی خود هماهنگ کنید. چه
                        آیا نیاز به دکمه‌های کوچک، متوسط یا بزرگ دارید، این ویژگی
                        تضمین می‌کند که دکمه‌های شما به طور ساده در
                        رابط کاربری شما جا بیافتند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="primary"
                                size="sm"
                                className="w-24"
                              >
                                کوچک
                              </Button>
                              <Button variant="primary" className="w-24">
                                متوسط
                              </Button>
                              <Button
                                variant="primary"
                                size="lg"
                                className="w-24"
                              >
                                بزرگ
                              </Button>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-5">
                              <Button
                                variant="secondary"
                                size="sm"
                                className="w-24"
                              >
                                کوچک
                              </Button>
                              <Button variant="secondary" className="w-24">
                                متوسط
                              </Button>
                              <Button
                                variant="secondary"
                                size="lg"
                                className="w-24"
                              >
                                بزرگ
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-24"
                >
                  کوچک
                </Button>
                <Button variant="primary" className="w-24">
                  متوسط
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-24"
                >
                  بزرگ
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-5">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-24"
                >
                  کوچک
                </Button>
                <Button variant="secondary" className="w-24">
                  متوسط
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-24"
                >
                  بزرگ
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اندازه‌های دکمه انعطاف‌پذیری که نیاز دارید برای ایجاد
                        دکمه‌هایی که به طور ساده با پروژه شما
                        هماهنگ شوند، فراهم می‌کنند. آیا می‌خواهید کوچک، متوسط یا بزرگ
                        دکمه‌ها، می‌توانید به راحتی به اندازه دکمه مورد نظر برسید
                        با این اجزا.
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
                        کار با پیوندها
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
                        اجزای دکمه پیوند به شما امکان می‌دهد که دکمه‌ها را ایجاد کنید
                        این دکمه‌ها کارایی به عنوان لینک دارند. این دکمه‌ها چند منظوره هستند و
                        می‌توانند برای راهبری به بخش‌های مختلف وب‌سایت شما یا آدرس‌های خارجی استفاده شوند.
                        وب‌سایت یا آدرس‌های خارجی.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                as="a"
                                variant="primary"
                                href=""
                                className="inline-block w-24"
                              >
                                پیوند
                              </Button>
                              <Button
                                as="a"
                                variant="secondary"
                                href=""
                                className="inline-block w-24"
                              >
                                دکمه
                              </Button>
                              <Button
                                as="a"
                                variant="success"
                                href=""
                                className="inline-block w-24"
                              >
                                Input
                              </Button>
                              <Button
                                as="a"
                                variant="warning"
                                href=""
                                className="inline-block w-24"
                              >
                                ثبت
                              </Button>
                              <Button
                                as="a"
                                variant="pending"
                                href=""
                                className="inline-block w-24"
                              >
                                در انتظار
                              </Button>
                              <Button
                                as="a"
                                variant="danger"
                                href=""
                                className="inline-block w-24"
                              >
                                تنظیم مجدد
                              </Button>
                              <Button
                                as="a"
                                variant="dark"
                                href=""
                                className="inline-block w-24"
                              >
                                فلزی
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  as="a"
                  variant="primary"
                  href=""
                  className="inline-block w-24"
                >
                  پیوند
                </Button>
                <Button
                  as="a"
                  variant="secondary"
                  href=""
                  className="inline-block w-24"
                >
                  دکمه
                </Button>
                <Button
                  as="a"
                  variant="success"
                  href=""
                  className="inline-block w-24"
                >
                  Input
                </Button>
                <Button
                  as="a"
                  variant="warning"
                  href=""
                  className="inline-block w-24"
                >
                  ثبت
                </Button>
                <Button
                  as="a"
                  variant="pending"
                  href=""
                  className="inline-block w-24"
                >
                  در انتظار
                </Button>
                <Button
                  as="a"
                  variant="danger"
                  href=""
                  className="inline-block w-24"
                >
                  تنظیم مجدد
                </Button>
                <Button
                  as="a"
                  variant="dark"
                  href=""
                  className="inline-block w-24"
                >
                  فلزی
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای دکمه لینک یک راه ساده برای
                        درج لینک‌های تعاملی در پروژه وب خود را ارائه می‌دهند. از آن‌ها برای ایجاد دکمه‌هایی که کاربران را به بخش‌های مختلف
                        وب‌سایت یا آدرس‌های خارجی هدایت می‌کنند، از طریق افزایش تجربه کاربری و راهبری.
                        بخش‌های وب‌سایت یا آدرس‌های خارجی، باعث افزایش
                        تجربه کاربری و راهبری می‌شوند.
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
                        دکمه‌های بلند
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
                        دکمه‌های بلند برای استفاده و ارائه عمق بصری طراحی شده‌اند. آن‌ها حس تعاملی را به رابط کاربری شما اضافه می‌کنند و واضح می‌کنند که این عناصر قابل کلیک هستند.
                        عمق بصری. آن‌ها حس تعاملی را به
                        رابط کاربری شما اضافه می‌کنند و واضح می‌کنند که این‌ها قابل کلیک هستند.
                        عناصر هستند. این بخش دکمه‌های بلند را به
                        سبک‌های مختلف پوشش می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="primary"
                                elevated
                                className="w-24"
                              >
                                اصلی
                              </Button>
                              <Button
                                variant="secondary"
                                elevated
                                className="w-24"
                              >
                                ثانویه
                              </Button>
                              <Button
                                variant="success"
                                elevated
                                className="w-24"
                              >
                                موفقیت
                              </Button>
                              <Button
                                variant="warning"
                                elevated
                                className="w-24"
                              >
                                اخطار
                              </Button>
                              <Button
                                variant="pending"
                                elevated
                                className="w-24"
                              >
                                در انتظار
                              </Button>
                              <Button
                                variant="danger"
                                elevated
                                className="w-24"
                              >
                                خطر
                              </Button>
                              <Button variant="dark" elevated className="w-24">
                                تیره
                              </Button>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-5">
                              <Button
                                variant="primary"
                                elevated
                                rounded
                                className="w-24"
                              >
                                اصلی
                              </Button>
                              <Button
                                variant="secondary"
                                elevated
                                rounded
                                className="w-24"
                              >
                                ثانویه
                              </Button>
                              <Button
                                variant="success"
                                elevated
                                rounded
                                className="w-24"
                              >
                                موفقیت
                              </Button>
                              <Button
                                variant="warning"
                                elevated
                                rounded
                                className="w-24"
                              >
                                اخطار
                              </Button>
                              <Button
                                variant="pending"
                                elevated
                                rounded
                                className="w-24"
                              >
                                در انتظار
                              </Button>
                              <Button
                                variant="danger"
                                elevated
                                rounded
                                className="w-24"
                              >
                                خطر
                              </Button>
                              <Button
                                variant="dark"
                                elevated
                                rounded
                                className="w-24"
                              >
                                تیره
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="primary"
                  elevated
                  className="w-24"
                >
                  اصلی
                </Button>
                <Button
                  variant="secondary"
                  elevated
                  className="w-24"
                >
                  ثانویه
                </Button>
                <Button
                  variant="success"
                  elevated
                  className="w-24"
                >
                  موفقیت
                </Button>
                <Button
                  variant="warning"
                  elevated
                  className="w-24"
                >
                  اخطار
                </Button>
                <Button
                  variant="pending"
                  elevated
                  className="w-24"
                >
                  در انتظار
                </Button>
                <Button
                  variant="danger"
                  elevated
                  className="w-24"
                >
                  خطر
                </Button>
                <Button variant="dark" elevated className="w-24">
                  تیره
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-5">
                <Button
                  variant="primary"
                  elevated
                  rounded
                  className="w-24"
                >
                  اصلی
                </Button>
                <Button
                  variant="secondary"
                  elevated
                  rounded
                  className="w-24"
                >
                  ثانویه
                </Button>
                <Button
                  variant="success"
                  elevated
                  rounded
                  className="w-24"
                >
                  موفقیت
                </Button>
                <Button
                  variant="warning"
                  elevated
                  rounded
                  className="w-24"
                >
                  اخطار
                </Button>
                <Button
                  variant="pending"
                  elevated
                  rounded
                  className="w-24"
                >
                  در انتظار
                </Button>
                <Button
                  variant="danger"
                  elevated
                  rounded
                  className="w-24"
                >
                  خطر
                </Button>
                <Button
                  variant="dark"
                  elevated
                  rounded
                  className="w-24"
                >
                  تیره
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        دکمه‌های بلند یک راه موثر برای افزایش
                        تعامل و جذابیت بصری رابط کاربری شما هستند.
                        آن‌ها نشانه‌گذاری واضحی از عناصر قابل کلیک ارائه می‌دهند و
                        می‌توانند برای تطبیق با ترجیحات طراحی شما سفارشی شوند.
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
                        دکمه‌های رسانه‌های اجتماعی
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
                        دکمه‌های رسانه‌های اجتماعی برای ارتباط با
                        مخاطبان خود و تبلیغ محتوای شما در اینترنت
                        ضروری هستند. این بخش دکمه‌های رسانه‌های اجتماعی با
                        آیکون‌ها و سبک‌های مختلف را پوشش می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2 mt-5">
                              <Button variant="facebook" className="w-32">
                                <Lucide
                                  icon="Facebook"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                فیس‌بوک
                              </Button>
                              <Button variant="twitter" className="w-32">
                                <Lucide
                                  icon="Twitter"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                توییتر
                              </Button>
                              <Button variant="instagram" className="w-32">
                                <Lucide
                                  icon="Instagram"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                اینستاگرام
                              </Button>
                              <Button variant="linkedin" className="w-32">
                                <Lucide
                                  icon="Linkedin"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                لینکداین
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2 mt-5">
                <Button variant="facebook" className="w-32">
                  <Lucide
                    icon="Facebook"
                    className="w-4 h-4 me-2"
                  />{" "}
                  فیس‌بوک
                </Button>
                <Button variant="twitter" className="w-32">
                  <Lucide
                    icon="Twitter"
                    className="w-4 h-4 me-2"
                  />{" "}
                  توییتر
                </Button>
                <Button variant="instagram" className="w-32">
                  <Lucide
                    icon="Instagram"
                    className="w-4 h-4 me-2"
                  />{" "}
                  اینستاگرام
                </Button>
                <Button variant="linkedin" className="w-32">
                  <Lucide
                    icon="Linkedin"
                    className="w-4 h-4 me-2"
                  />{" "}
                  لینکداین
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        از این دکمه‌های رسانه‌های اجتماعی به صورت استراتژیک برای تبلیغ
                        محتوای خود و ارتباط برقرار کنید با مخاطبان خود در
                        پلتفرم‌های ترجیحی‌شان، در نهایت افزایش ارتباط و
                        رشد.
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
                        دکمه‌های خط مرزی
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
                        دکمه‌های خط مرزی یک راه ملایم و شیک برای
                        ارائه اعمال یا گزینه‌ها به کاربران شما فراهم می‌کنند. آن‌ها
                        ظاهری تمیز و حداقلیت را حفظ می‌کنند در حالی که امکان ارتباط را
                        اعلام می‌کنند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="outline-primary"
                                className="inline-block w-24"
                              >
                                اصلی
                              </Button>
                              <Button
                                variant="outline-secondary"
                                className="inline-block w-24"
                              >
                                ثانویه
                              </Button>
                              <Button
                                variant="outline-success"
                                className="inline-block w-24"
                              >
                                موفقیت
                              </Button>
                              <Button
                                variant="outline-warning"
                                className="inline-block w-24"
                              >
                                اخطار
                              </Button>
                              <Button
                                variant="outline-pending"
                                className="inline-block w-24"
                              >
                                در انتظار
                              </Button>
                              <Button
                                variant="outline-danger"
                                className="inline-block w-24"
                              >
                                خطر
                              </Button>
                              <Button
                                variant="outline-dark"
                                className="inline-block w-24"
                              >
                                تیره
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="outline-primary"
                  className="inline-block w-24"
                >
                  اصلی
                </Button>
                <Button
                  variant="outline-secondary"
                  className="inline-block w-24"
                >
                  ثانویه
                </Button>
                <Button
                  variant="outline-success"
                  className="inline-block w-24"
                >
                  موفقیت
                </Button>
                <Button
                  variant="outline-warning"
                  className="inline-block w-24"
                >
                  اخطار
                </Button>
                <Button
                  variant="outline-pending"
                  className="inline-block w-24"
                >
                  در انتظار
                </Button>
                <Button
                  variant="outline-danger"
                  className="inline-block w-24"
                >
                  خطر
                </Button>
                <Button
                  variant="outline-dark"
                  className="inline-block w-24"
                >
                  تیره
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        از دکمه‌های خط مرزی برای اعمالی مانند ارسال فرم،
                        راهبری، یا به عنوان جایگزین‌هایی برای دکمه‌های معمولی برای
                        افزایش کلی رابط کاربری وب‌سایت یا برنامه‌ی شما
                        با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
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
                        دکمه‌های وضعیت بارگذاری
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
                        دکمه‌های وضعیت بارگذاری بخشی ضروری از
                        رابط کاربری کاربرپسند هستند. آن‌ها اعمالی مداوم را نشان می‌دهند،
                        مانند ذخیره، افزودن، بارگذاری، یا حذف، و
                        به کاربران باقی می‌مانند در حالی که منتظر یک
                        پروسه برای تکمیل است.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button variant="primary">
                                ذخیره کردن
                                <LoadingIcon
                                  icon="oval"
                                  color="white"
                                  className="w-4 h-4 ms-2"
                                />
                              </Button>
                              <Button variant="success">
                                افزودن
                                <LoadingIcon
                                  icon="spinning-circles"
                                  color="white"
                                  className="w-4 h-4 ms-2"
                                />
                              </Button>
                              <Button variant="warning">
                                بارگذاری
                                <LoadingIcon
                                  icon="three-dots"
                                  color="1a202c"
                                  className="w-4 h-4 ms-2"
                                />
                              </Button>
                              <Button variant="danger">
                                حذف
                                <LoadingIcon
                                  icon="puff"
                                  color="white"
                                  className="w-4 h-4 ms-2"
                                />
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button variant="primary">
                  ذخیره کردن
                  <LoadingIcon
                    icon="oval"
                    color="white"
                    className="w-4 h-4 ms-2"
                  />
                </Button>
                <Button variant="success">
                  افزودن
                  <LoadingIcon
                    icon="spinning-circles"
                    color="white"
                    className="w-4 h-4 ms-2"
                  />
                </Button>
                <Button variant="warning">
                  بارگذاری
                  <LoadingIcon
                    icon="three-dots"
                    color="1a202c"
                    className="w-4 h-4 ms-2"
                  />
                </Button>
                <Button variant="danger">
                  حذف
                  <LoadingIcon
                    icon="puff"
                    color="white"
                    className="w-4 h-4 ms-2"
                  />
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در نظر گرفتن استفاده از دکمه‌های وضعیت بارگذاری برای اعمالی مانند
                        ذخیره، افزودن، بارگذاری داده، یا حذف موارد برای بهبود کلیت قابلیت استفاده از وب‌سایت شما یا
                        بهبود قابلیت استفاده کلی از وب‌سایت یا
                        اپلیکیشن
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
                        دکمه‌های گرد
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
                        دکمه‌های گرد لمس بصری و مدرنی را به رابط کاربری شما ارائه می‌دهند. آن‌ها لبه‌های دکمه‌های سنتی را نرم می‌کنند، باعث می‌شوند که بیشتر دعوت‌کننده و کاربرپسند به نظر بیایند.
                        لمس بصری به رابط کاربری شما اضافه می‌کنند. آن‌ها لبه‌های دکمه‌های سنتی را نرم می‌کنند، باعث می‌شوند که بیشتر دعوت‌کننده و کاربرپسند به نظر بیایند.
                        دکمه‌های سنتی را نرم می‌کنند، باعث می‌شوند که بیشتر دعوت‌کننده و کاربرپسند به نظر بیایند.
                        و کاربرپسند به نظر بیایند. این بخش بررسی می‌کند که چگونه باید از
                        دکمه‌های گرد به طور موثر در پروژه‌ی شما استفاده کرد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="primary"
                                rounded
                                className="w-24"
                              >
                                اصلی
                              </Button>
                              <Button
                                variant="secondary"
                                rounded
                                className="w-24"
                              >
                                ثانویه
                              </Button>
                              <Button
                                variant="success"
                                rounded
                                className="w-24"
                              >
                                موفقیت
                              </Button>
                              <Button
                                variant="warning"
                                rounded
                                className="w-24"
                              >
                                اخطار
                              </Button>
                              <Button
                                variant="pending"
                                rounded
                                className="w-24"
                              >
                                در انتظار
                              </Button>
                              <Button variant="danger" rounded className="w-24">
                                خطر
                              </Button>
                              <Button variant="dark" rounded className="w-24">
                                تیره
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="primary"
                  rounded
                  className="w-24"
                >
                  اصلی
                </Button>
                <Button
                  variant="secondary"
                  rounded
                  className="w-24"
                >
                  ثانویه
                </Button>
                <Button
                  variant="success"
                  rounded
                  className="w-24"
                >
                  موفقیت
                </Button>
                <Button
                  variant="warning"
                  rounded
                  className="w-24"
                >
                  اخطار
                </Button>
                <Button
                  variant="pending"
                  rounded
                  className="w-24"
                >
                  در انتظار
                </Button>
                <Button variant="danger" rounded className="w-24">
                  خطر
                </Button>
                <Button variant="dark" rounded className="w-24">
                  تیره
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در نظر بگیرید که از دکمه‌های گرد برای اعمال مختلف، مانند
                        اعمال اولیه، اعمال ثانویه، اعلان‌های موفقیت، و موارد دیگر، برای
                        اعمال اولیه، اعمال ثانویه، اعلان‌های موفقیت، و موارد دیگر، برای
                        اعمال اولیه، اعمال ثانویه، اعلان‌های موفقیت، و موارد دیگر، برای
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
                        دکمه‌های رنگی نرم
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
                        دکمه‌های رنگی نرم لمسی از شیکی و ظرافت به رابط کاربری شما اضافه می‌کنند. این دکمه‌ها از رنگ‌های نرم و آرامی استفاده می‌کنند که به چشم می‌آیند بدون آنکه زیادی غلظت داشته باشند.
                        به رابط کاربری شما اضافه می‌کنند. این دکمه‌ها از رنگ‌های نرم و آرامی استفاده می‌کنند که به چشم می‌آیند بدون آنکه زیادی غلظت داشته باشند.
                        به رابط کاربری شما اضافه می‌کنند. این دکمه‌ها از رنگ‌های نرم و آرامی استفاده می‌کنند که به چشم می‌آیند بدون آنکه زیادی غلظت داشته باشند.
                        به رابط کاربری شما اضافه می‌کنند. این دکمه‌ها از رنگ‌های نرم و آرامی استفاده می‌کنند که به چشم می‌آیند بدون آنکه زیادی غلظت داشته باشند.
                        به رابط کاربری شما اضافه می‌کنند. این بخش به شما نشان می‌دهد که چگونه از دکمه‌های رنگی نرم به طور موثر در پروژه‌ی خود استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="soft-primary"
                                rounded
                                className="w-24"
                              >
                                اصلی
                              </Button>
                              <Button
                                variant="soft-secondary"
                                rounded
                                className="w-24"
                              >
                                ثانویه
                              </Button>
                              <Button
                                variant="soft-success"
                                rounded
                                className="w-24"
                              >
                                موفقیت
                              </Button>
                              <Button
                                variant="soft-warning"
                                rounded
                                className="w-24"
                              >
                                اخطار
                              </Button>
                              <Button
                                variant="soft-pending"
                                rounded
                                className="w-24"
                              >
                                در انتظار
                              </Button>
                              <Button
                                variant="soft-danger"
                                rounded
                                className="w-24"
                              >
                                خطر
                              </Button>
                              <Button
                                variant="soft-dark"
                                rounded
                                className="w-24"
                              >
                                تیره
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="soft-primary"
                  rounded
                  className="w-24"
                >
                  اصلی
                </Button>
                <Button
                  variant="soft-secondary"
                  rounded
                  className="w-24"
                >
                  ثانویه
                </Button>
                <Button
                  variant="soft-success"
                  rounded
                  className="w-24"
                >
                  موفقیت
                </Button>
                <Button
                  variant="soft-warning"
                  rounded
                  className="w-24"
                >
                  اخطار
                </Button>
                <Button
                  variant="soft-pending"
                  rounded
                  className="w-24"
                >
                  در انتظار
                </Button>
                <Button
                  variant="soft-danger"
                  rounded
                  className="w-24"
                >
                  خطر
                </Button>
                <Button
                  variant="soft-dark"
                  rounded
                  className="w-24"
                >
                  تیره
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        دکمه‌های رنگی نرم یک گزینه ظریف اما لمس بصری برای عناصر رابط کاربری شما فراهم می‌کنند. رنگ‌های نرم آن‌ها می‌تواند ظاهر رابط کاربری شما را بهبود بخشد بدون اینکه کاربر را بیش از حد متاثر کند.
                        گزینه‌ی جذاب برای عناصر رابط کاربری شما هستند. رنگ‌های نرم آن‌ها می‌تواند ظاهر رابط کاربری شما را بهبود بخشد بدون اینکه کاربر را بیش از حد متاثر کند.
                        گزینه‌ی جذاب برای عناصر رابط کاربری شما هستند. رنگ‌های نرم آن‌ها می‌تواند ظاهر رابط کاربری شما را بهبود بخشد بدون اینکه کاربر را بیش از حد متاثر کند.
                        کاربر را بیش از حد متاثر کند.
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
                        دکمه‌های آیکون
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
                        دکمه‌های آیکون به شما اجازه می‌دهند تا آیکون‌های معنی‌دار را به رابط کاربری خود برای اعمال یا عملکردهای مختلف اضافه کنید. در این بخش، چگونگی استفاده از دکمه‌های آیکون به طور موثر و افزایش انگیزه کاربر را خواهید آموخت.
                        به رابط کاربری خود برای اعمال یا عملکردهای مختلف اضافه کنید. در این بخش، چگونگی استفاده از دکمه‌های آیکون به طور موثر و افزایش انگیزه کاربر را خواهید آموخت.
                        به رابط کاربری خود برای اعمال یا عملکردهای مختلف اضافه کنید. در این بخش، چگونگی استفاده از دکمه‌های آیکون به طور موثر و افزایش انگیزه کاربر را خواهید آموخت.
                        به رابط کاربری خود برای اعمال یا عملکردهای مختلف اضافه کنید. در این بخش، چگونگی استفاده از دکمه‌های آیکون به طور موثر و افزایش انگیزه کاربر را خواهید آموخت.
                        با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button variant="primary" className="w-32">
                                <Lucide
                                  icon="Activity"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                فعالیت
                              </Button>
                              <Button variant="secondary" className="w-32">
                                <Lucide
                                  icon="HardDrive"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                دیسک سخت
                              </Button>
                              <Button variant="success" className="w-32">
                                <Lucide
                                  icon="Calendar"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                تقویم
                              </Button>
                              <Button variant="warning" className="w-32">
                                <Lucide
                                  icon="Share2"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                اشتراک گذاری
                              </Button>
                              <Button variant="pending" className="w-32">
                                <Lucide
                                  icon="Download"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                در انتظار
                              </Button>
                              <Button variant="danger" className="w-32">
                                <Lucide icon="Trash" className="w-4 h-4 me-2" />{" "}
                                زباله
                              </Button>
                              <Button variant="dark" className="w-32">
                                <Lucide icon="Image" className="w-4 h-4 me-2" />{" "}
                                Image
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button variant="primary" className="w-32">
                  <Lucide
                    icon="Activity"
                    className="w-4 h-4 me-2"
                  />{" "}
                  فعالیت
                </Button>
                <Button variant="secondary" className="w-32">
                  <Lucide
                    icon="HardDrive"
                    className="w-4 h-4 me-2"
                  />{" "}
                  دیسک سخت
                </Button>
                <Button variant="success" className="w-32">
                  <Lucide
                    icon="Calendar"
                    className="w-4 h-4 me-2"
                  />{" "}
                  تقویم
                </Button>
                <Button variant="warning" className="w-32">
                  <Lucide
                    icon="Share2"
                    className="w-4 h-4 me-2"
                  />{" "}
                  اشتراک گذاری
                </Button>
                <Button variant="pending" className="w-32">
                  <Lucide
                    icon="Download"
                    className="w-4 h-4 me-2"
                  />{" "}
                  در انتظار
                </Button>
                <Button variant="danger" className="w-32">
                  <Lucide icon="Trash" className="w-4 h-4 me-2" />{" "}
                  زباله
                </Button>
                <Button variant="dark" className="w-32">
                  <Lucide icon="Image" className="w-4 h-4 me-2" />{" "}
                  Image
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در نظر بگیرید که از دکمه‌های آیکون برای ساده‌سازی تعاملات کاربر، بیان معنی به یک نگاه، و ایجاد یک رابط کاربری بیشتر به سمت بینایی برای مخاطبان خود استفاده کنید.
                        تعاملات کاربر، بیان معنی به یک نگاه، و ایجاد یک رابط کاربری بیشتر به سمت بینایی برای مخاطبان خود استفاده کنید.
                        بیشتر به سمت بینایی برای مخاطبان خود استفاده کنید.
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
                        دکمه‌های فقط آیکون
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
                        دکمه‌های فقط آیکون یک ابزار قدرتمند برای ایجاد
                        رابط‌های کاربری حداقلی و شهودی هستند. در این
                        بخش، چگونگی استفاده از دکمه‌های فقط آیکون را خواهید آموخت
                        تا به بهبود قابلیت استفاده و زیبایی
                        پروژه‌ی وب یا برنامه خود بپردازید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button variant="primary">
                                <Lucide icon="Activity" className="w-5 h-5" />
                              </Button>
                              <Button variant="secondary">
                                <Lucide icon="HardDrive" className="w-5 h-5" />
                              </Button>
                              <Button variant="success">
                                <Lucide icon="Calendar" className="w-5 h-5" />
                              </Button>
                              <Button variant="warning">
                                <Lucide icon="Share2" className="w-5 h-5" />
                              </Button>
                              <Button variant="pending">
                                <Lucide icon="Download" className="w-5 h-5" />
                              </Button>
                              <Button variant="danger">
                                <Lucide icon="Trash" className="w-5 h-5" />
                              </Button>
                              <Button variant="dark">
                                <Lucide icon="Image" className="w-5 h-5" />
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button variant="primary">
                  <Lucide icon="Activity" className="w-5 h-5" />
                </Button>
                <Button variant="secondary">
                  <Lucide icon="HardDrive" className="w-5 h-5" />
                </Button>
                <Button variant="success">
                  <Lucide icon="Calendar" className="w-5 h-5" />
                </Button>
                <Button variant="warning">
                  <Lucide icon="Share2" className="w-5 h-5" />
                </Button>
                <Button variant="pending">
                  <Lucide icon="Download" className="w-5 h-5" />
                </Button>
                <Button variant="danger">
                  <Lucide icon="Trash" className="w-5 h-5" />
                </Button>
                <Button variant="dark">
                  <Lucide icon="Image" className="w-5 h-5" />
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        دکمه‌های فقط آیکون یک انتخاب عالی برای رابط‌های کاربری مدرن هستند، با ارائه سادگی، وضوح، و طراحی براق. آیا شما دارید یک برنامه‌ی تلفن همراه طراحی می‌کنید یا یک برنامه وب، در نظر بگیرید که از دکمه‌های فقط آیکون برای ایجاد یک رابط کاربری کاربرپسند و ظاهری جذاب استفاده کنید که کاربران را درگیر و مطلع نگه دارد.
                        رابط‌های کاربری مدرن هستند، با ارائه سادگی، وضوح، و طراحی براق. آیا شما دارید یک برنامه‌ی تلفن همراه طراحی می‌کنید یا یک برنامه وب، در نظر بگیرید که از دکمه‌های فقط آیکون برای ایجاد یک رابط کاربری کاربرپسند و ظاهری جذاب استفاده کنید که کاربران را درگیر و مطلع نگه دارد.
                        طراحی براق. آیا شما دارید یک برنامه‌ی تلفن همراه طراحی می‌کنید یا یک برنامه وب، در نظر بگیرید که از دکمه‌های فقط آیکون برای ایجاد یک رابط کاربری کاربرپسند و ظاهری جذاب استفاده کنید که کاربران را درگیر و مطلع نگه دارد.
                        برنامه وب، در نظر بگیرید که از دکمه‌های فقط آیکون برای ایجاد یک رابط کاربری کاربرپسند و ظاهری جذاب استفاده کنید که کاربران را درگیر و مطلع نگه دارد.
                        ایجاد یک رابط کاربری کاربرپسند و ظاهری جذاب
                        که کاربران را درگیر و مطلع نگه دارد.
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
                    <div className="-mt-px">دکمه</div>
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
                            نوع عنصر HTML برای دکمه (پیش‌فرض
                            ("دکمه" یا "لینک")
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`size`</Table.Td>
                          <Table.Td>`Size`</Table.Td>
                          <Table.Td>اندازه دکمه ("sm" یا "lg")</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`variant`</Table.Td>
                          <Table.Td>`Variant`</Table.Td>
                          <Table.Td>نوعی از سبک دکمه</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`elevated`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            نشان می‌دهد که آیا دکمه دارای سایه بلند می‌باشد یا خیر
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`rounded`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            نشان می‌دهد که دکمه گرد می‌باشد یا خیر
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
                    دکمه‌های ابتدایی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    اندازه‌های دکمه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    کار با لینک‌ها
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    دکمه‌های بلند
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    دکمه‌های رسانه‌های اجتماعی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    دکمه‌های خط مرزی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    دکمه‌های وضعیت بارگذاری
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    دکمه‌های گرد
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    دکمه‌های رنگی نرم
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    دکمه‌های آیکون
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    دکمه‌های فقط آیکون
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
