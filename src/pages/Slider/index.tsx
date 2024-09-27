import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import TinySlider from "@/components/Base/TinySlider";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";
import products from "@/fakers/products";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            اسلایدر
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            جهان اسلایدرهای تعاملی را با اجزای اسلایدر ما بکاوید.
            کاربران را جذب کنید، ورودی‌ها را جمع‌آوری کنید، و تجربیات کاربر را بهبود ببخشید
            effortlessly.
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
                        مورد تکی
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
                        اجزای "اسلایدر کوچک" سبک و
                        کتابخانه اسلایدر/کاروسل پاسخگو برای نمایش تصاویر
                        یا محتوا به صورت اسلایدشو. این بخش بر روی
                        استفاده از Tiny اسلایدر برای ایجاد یک اسلایدر تک موردی ساده تمرکز دارد
                        که برای نمایش یک قطعه از
                        محتوا در هر زمان مفید است، مانند تصویر برجسته یا
                        product.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="mx-6">
                              <TinySlider
                                options={{
                                  controls: true,
                                }}
                              >
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      1
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      2
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      3
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      4
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      5
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      6
                                    </h3>
                                  </div>
                                </div>
                              </TinySlider>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="mx-6">
                <TinySlider
                  options={{
                    controls: true,
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اسلایدر تک موردی ایجاد شده با استفاده از Tiny اسلایدر یک
                        انتخاب عالی است زمانی که باید محتوا را یک
                        قلمرو از هنری که یک قلمرو زمانی که
                        بصری دلپذیر و پاسخگو است. شما می‌توانید به راحتی این اسلایدر را به وب سایت خود ادغام کنید
                        برای نمایش تصاویر برجسته، محصولات،
                        یا هر محتوای دیگری که از یک
                        presentation.
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
                        مورد چندگانه
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
                        اجزای "اسلایدر کوچک" به شما امکان می‌دهد تا اسلایدرها و کاروسل‌های پاسخگو و دارای ویژگی‌های بیشتر را برای
                        نمایش چند مورد به صورت همزمان ایجاد کنید. این بخش بر روی
                        استفاده از Tiny اسلایدر برای ایجاد یک اسلایدر چند مورد،
                        که برای نمایش یک مجموعه از تصاویر،
                        محصولات یا محتوا به صورت کامپکت و جذاب
                        مناسب است.
                        format.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="mx-6">
                              <TinySlider
                                options={{
                                  autoplay: false,
                                  controls: true,
                                  items: 1,
                                  responsive: {
                                    600: {
                                      items: 3,
                                    },
                                    480: {
                                      items: 2,
                                    },
                                  },
                                }}
                              >
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      1
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      2
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      3
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      4
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      5
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      6
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      7
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      8
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      9
                                    </h3>
                                  </div>
                                </div>
                              </TinySlider>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="mx-6">
                <TinySlider
                  options={{
                    autoplay: false,
                    controls: true,
                    items: 1,
                    responsive: {
                      600: {
                        items: 3,
                      },
                      480: {
                        items: 2,
                      },
                    },
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        7
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        8
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        9
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اسلایدر چند موردی که با استفاده از Tiny اسلایدر ایجاد شده است، یک
                        اجزای چند منظوره برای نمایش مجموعه‌هایی از
                        محتوا، تصاویر یا محصولات به صورت جذاب و
                        پاسخگو. با دنبال کردن مراحل مشخص شده بالا
                        و تنظیمات اسلایدر را برای برآورده کردن
                        نیازهای خاص خود سفارشی‌سازی کنید، می‌توانید
                        وب‌سایت یا برنامه خود را با یک
                        کاروسل تعاملی و کاربرپسند بهبود ببخشید.
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
                        نمایش پاسخگو
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
                        اجزای "Tiny اسلایدر" راهی آسان برای
                        ایجاد اسلایدرها و کاروسل‌های پاسخگو که با
                        اندازه‌های مختلف صفحه سازگاری دارند. این بخش بر روی
                        پیکربندی Tiny اسلایدر برای نمایش پاسخگو تمرکز دارد و اطمینان حاصل می‌کند که
                        که اسلایدر شما به صورت بی‌درز و با
                        عملکرد صحیح در هر دو دستگاه رایانه شخصی و تلفن همراه عمل می‌کند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="pb-8 mx-6">
                              <TinySlider
                                options={{
                                  autoplay: false,
                                  controls: true,
                                  items: 1,
                                  nav: true,
                                  responsive: {
                                    600: {
                                      items: 3,
                                    },
                                    480: {
                                      items: 2,
                                    },
                                  },
                                }}
                              >
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      1
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      2
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      3
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      4
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      5
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      6
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      7
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      8
                                    </h3>
                                  </div>
                                </div>
                              </TinySlider>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="pb-8 mx-6">
                <TinySlider
                  options={{
                    autoplay: false,
                    controls: true,
                    items: 1,
                    nav: true,
                    responsive: {
                      600: {
                        items: 3,
                      },
                      480: {
                        items: 2,
                      },
                    },
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        7
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        8
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        با پیکربندی Tiny اسلایدر با تنظیمات پاسخگو، شما
                        اطمینان حاصل می‌کنید که اسلایدر شما به زیبایی با
                        انواع دستگاه‌ها و اندازه‌های صفحه سازگار است. این انعطاف‌پذیری تجربه کاربری را بهبود می‌بخشد و اطمینان می‌دهد که محتوای شما
                        در هر دو پلتفرم رایانه شخصی و تلفن همراه دیده
                        شده باشد.
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
                        حالت مرکز
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
                        حالت مرکز یک پیکربندی اسلایدر محبوب است که
                        اسلاید فعال را در مرکز ظرف اسلایدر قرار می‌دهد و
                        اسلایدهایی که به صورت جزئی قابل مشاهده هستند را در هر دو طرف قرار می‌دهد. این باعث ایجاد یک افکت کاروسل جذاب و دیدنی می‌شود.
                        این اقدام باعث ایجاد یک کاروسل جذاب و دیدنی می‌شود. این بخش نحوه پیکربندی Tiny
                        اسلایدر را برای دستیابی به حالت مرکز را نشان می‌دهد.
                        با اسلایدر برای دستیابی به حالت مرکز.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="mx-6">
                              <TinySlider
                                options={{
                                  autoplay: false,
                                  controls: true,
                                  center: true,
                                  items: 1,
                                  responsive: {
                                    600: {
                                      items: 2,
                                    },
                                  },
                                }}
                              >
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      1
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      2
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      3
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      4
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      5
                                    </h3>
                                  </div>
                                </div>
                                <div className="h-32 px-2">
                                  <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                                    <h3 className="flex items-center justify-center h-full text-2xl font-medium">
                                      6
                                    </h3>
                                  </div>
                                </div>
                              </TinySlider>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="mx-6">
                <TinySlider
                  options={{
                    autoplay: false,
                    controls: true,
                    center: true,
                    items: 1,
                    responsive: {
                      600: {
                        items: 2,
                      },
                    },
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400"
                    >
                      <h3
                        className="flex items-center justify-center h-full text-2xl font-medium"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        حالت مرکز یک پیکربندی اسلایدر محبوب است که
                        اسلاید فعال را در مرکز ظرف اسلایدر قرار می‌دهد و
                        اسلایدهایی که به صورت جزئی قابل مشاهده هستند را در هر دو طرف قرار می‌دهد. این باعث ایجاد یک افکت کاروسل جذاب و دیدنی می‌شود.
                        این اقدام باعث ایجاد یک کاروسل جذاب و دیدنی می‌شود. این بخش نحوه پیکربندی Tiny
                        اسلایدر را برای دستیابی به حالت مرکز را نشان می‌دهد.
                        با اسلایدر برای دستیابی به حالت مرکز.
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
                        انیمیشن محو شدن
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
                        انیمیشن محو شدن یک روش شیک و زیبا برای انتقال است
                        بین اسلایدها در یک اسلایدر است. Tiny اسلایدر یک
                        پیکربندی ساده برای دستیابی به اثر محو شدن را زمانی که
                        انتقال از یک اسلاید به دیگری. این بخش
                        نشان می دهد چگونه Tiny اسلایدر را با انیمیشن پژواک راه اندازی کنید.
                        انیمیشن.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="pb-8 mx-6">
                              <TinySlider
                                options={{
                                  mode: "gallery",
                                  controls: true,
                                  nav: true,
                                  speed: 500,
                                }}
                              >
                                <div className="h-64 px-2">
                                  <div className="h-full overflow-hidden rounded-md image-fit">
                                    <img
                                      alt="تیل وایز - قالب داشبورد مدیریتی"
                                      src={
                                        products.fakeProducts()[0].images[0]
                                          .path
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="h-64 px-2">
                                  <div className="h-full overflow-hidden rounded-md image-fit">
                                    <img
                                      alt="تیل وایز - قالب داشبورد مدیریتی"
                                      src={
                                        products.fakeProducts()[1].images[0]
                                          .path
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="h-64 px-2">
                                  <div className="h-full overflow-hidden rounded-md image-fit">
                                    <img
                                      alt="تیل وایز - قالب داشبورد مدیریتی"
                                      src={
                                        products.fakeProducts()[2].images[0]
                                          .path
                                      }
                                    />
                                  </div>
                                </div>
                              </TinySlider>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="pb-8 mx-6">
                <TinySlider
                  options={{
                    mode: 'gallery',
                    controls: true,
                    nav: true,
                    speed: 500,
                  }}
                >
                  <div className="h-64 px-2">
                    <div className="h-full overflow-hidden rounded-md image-fit">
                      <img
                        alt="تیل وایز - قالب داشبورد مدیریتی"
                        src={products.fakeProducts()[0].images[0].path}
                      />
                    </div>
                  </div>
                  <div className="h-64 px-2">
                    <div className="h-full overflow-hidden rounded-md image-fit">
                      <img
                        alt="تیل وایز - قالب داشبورد مدیریتی"
                        src={products.fakeProducts()[1].images[0].path}
                      />
                    </div>
                  </div>
                  <div className="h-64 px-2">
                    <div className="h-full overflow-hidden rounded-md image-fit">
                      <img
                        alt="تیل وایز - قالب داشبورد مدیریتی"
                        src={products.fakeProducts()[2].images[0].path}
                      />
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        انیمیشن پژواک در Tiny اسلایدر یک روش صاف و
                        جذاب برای گذر بین اسلایدها فراهم می کند.
                        به خصوص برای اسلایدرهایی که نیاز به
                        منتقل کردن حس از روشنایی و شیوه است. با پژواک
                        انیمیشن فعال شده، اسلایدر شما به طور یکپارچه خواهد آمد
                        و بیرون برای اسلایدها، ایجاد کاربر جذب کننده ایجاد می کند
                        با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
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
                    <div className="-mt-px">TinySlider</div>
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
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: TinySliderElement) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            یک تابع که یک مرجع به
                            عنصر ظرف TinySlider دریافت می کند.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`options`</Table.Td>
                          <Table.Td>`TinySliderSettings`</Table.Td>
                          <Table.Td>
                            تنظیمات و گزینه های پیکربندی برای
                            TinySlider. به صورت پیش فرض به یک شیء خالی.
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
                    مورد تکی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مورد چندگانه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نمایش پاسخگو
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    حالت مرکز
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    انیمیشن محو شدن
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
