import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
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
            سربرگ
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            قدرت مؤلفه سربرگ ما را به طور آسان برای ایجاد سربرگ‌های جذاب و به‌ساختار برای محتوای وب خود رها کنید.
            سربرگ‌ها بخش اساسی از ساختاردهی و ترتیب دادن محتوا در برنامه‌ی شما هستند. آنها سلسله‌مراتب را فراهم می‌کنند و به کاربران کمک می‌کنند تا اطلاعات ارائه‌شده را درک و دسترسی داشته باشند. این بخش نحوه استفاده موثر از سربرگ‌ها در پروژه شما را پوشش می‌دهد.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">سربرگ</div>
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
                        سربرگs are an essential part of structuring and
                        organizing content in your اپلیکیشن They provide
                        hierarchy and help users navigate and understand the
                        information presented. This section covers how to use
                        headings effectively in your project.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <h1 className="text-4xl font-medium leading-none">
                                سربرگ 1
                              </h1>
                              <h2 className="mt-3 text-3xl font-medium leading-none">
                                سربرگ 2
                              </h2>
                              <h3 className="mt-3 text-2xl font-medium leading-none">
                                سربرگ 3
                              </h3>
                              <h4 className="mt-3 text-xl font-medium leading-none">
                                سربرگ 4
                              </h4>
                              <h5 className="mt-3 text-lg font-medium leading-none">
                                سربرگ 5
                              </h5>
                              <h6 className="mt-3 font-medium leading-none">
                                سربرگ 6
                              </h6>
                            </div>
                            <div className="mt-5">
                              <h1 className="text-4xl font-medium leading-none text-primary">
                                سربرگ 1
                              </h1>
                              <h2 className="mt-3 text-3xl font-medium leading-none text-slate-600 dark:text-slate-500">
                                سربرگ 2
                              </h2>
                              <h3 className="mt-3 text-2xl font-medium leading-none text-success">
                                سربرگ 3
                              </h3>
                              <h4 className="mt-3 text-xl font-medium leading-none text-warning">
                                سربرگ 4
                              </h4>
                              <h5 className="mt-3 text-lg font-medium leading-none text-danger">
                                سربرگ 5
                              </h5>
                              <h6 className="mt-3 font-medium leading-none text-slate-500">
                                سربرگ 6
                              </h6>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div>
                <h1 className="text-4xl font-medium leading-none">سربرگ 1</h1>
                <h2 className="mt-3 text-3xl font-medium leading-none">
                  سربرگ 2
                </h2>
                <h3 className="mt-3 text-2xl font-medium leading-none">
                  سربرگ 3
                </h3>
                <h4 className="mt-3 text-xl font-medium leading-none">
                  سربرگ 4
                </h4>
                <h5 className="mt-3 text-lg font-medium leading-none">
                  سربرگ 5
                </h5>
                <h6 className="mt-3 font-medium leading-none">سربرگ 6</h6>
              </div>
              <div className="mt-5">
                <h1 className="text-4xl font-medium leading-none text-primary">
                  سربرگ 1
                </h1>
                <h2
                  className="mt-3 text-3xl font-medium leading-none text-slate-600 dark:text-slate-500"
                >
                  سربرگ 2
                </h2>
                <h3 className="mt-3 text-2xl font-medium leading-none text-success">
                  سربرگ 3
                </h3>
                <h4 className="mt-3 text-xl font-medium leading-none text-warning">
                  سربرگ 4
                </h4>
                <h5 className="mt-3 text-lg font-medium leading-none text-danger">
                  سربرگ 5
                </h5>
                <h6 className="mt-3 font-medium leading-none text-slate-500">
                  سربرگ 6
                </h6>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        سربرگ‌ها نقش حیاتی در ساختاردهی و
                        سازماندهی محتوای شما دارند. با استفاده موثر از سربرگ‌ها و
                        به صورت مداوم، شما می‌توانید قابلیت دسترسی و
                        خوانایی برنامه‌ی خود را ارتقاء دهید. به یاد داشته باشید که سطح سربرگ مناسب را انتخاب کنید، سربرگ‌ها را به صورت معنایی نگه دارید، و
                        بهترین روش‌های دسترسی را دنبال کنید تا تجربه کاربر بهتری ایجاد کنید.
                        تنظیمات متن
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
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        تنظیمات متن
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
                        تنظیمات و استایل‌های متن برای اطمینان از آنکه
                        محتوای شما هم جذاب ویژگی‌های بصری داشته باشد و هم راحت قابل خواندن باشد.
                        این بخش نحوه اعمال تنظیمات متنی مختلف را به محتوای خود می‌پوشاند.

                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <div className="font-normal">متن نمونه</div>
                              <div className="font-medium">
                                متن متوسط نمونه
                              </div>
                              <div className="font-semibold">
                                متن نیمه‌جسور نمونه
                              </div>
                              <div className="font-bold">
                                متن پردازش شده نمونه
                              </div>
                              <div className="font-extrabold">
                                متن بلند شده نمونه
                              </div>
                            </div>
                            <div className="mt-5">
                              <div className="uppercase">
                                متن بزرگ نویسی نمونه
                              </div>
                              <div className="lowercase">
                                متن کوچک نویسی نمونه
                              </div>
                              <div className="capitalize">
                                متن بزرگ شده نویسی نمونه
                              </div>
                              <div className="normal-case">
                                متن دستنویس نمونه
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div>
                <div className="font-normal">متن نمونه</div>
                <div className="font-medium">متن متوسط نمونه</div>
                <div className="font-semibold">متن نیمه‌جسور نمونه</div>
                <div className="font-bold">متن پردازش شده نمونه</div>
                <div className="font-extrabold">متن بلند شده نمونه</div>
              </div>
              <div className="mt-5">
                <div className="uppercase">متن بزرگ نویسی نمونه</div>
                <div className="lowercase">متن کوچک نویسی نمونه</div>
                <div className="capitalize">متن بزرگ شده نویسی نمونه</div>
                <div className="normal-case">متن دستنویس نمونه</div>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        سفارشی کردن تنظیمات متن برای ایجاد
                        محتوایی که هم ظاهراً جذاب است و هم قابل خواندن. با تنظیم
                        اندازه فونت، ارتفاع خط، رنگ، خانواده فونت، تنظیمات
                        ترتیب و تزیین متن، می‌توانید متن خود را به طور
                        بهترین شکل ممکن به طراحی برنامه‌ی خود و بهبود تجربه کاربر تنظیم کنید.
                        به خاطر داشته باشید که ستونتاری و
                        تنظیمات متنی خود را در سراسر برنامه‌ی خود برای
                        look.
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
                        عناصر مشترک
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
                        عناصر HTML مشترک اغلب برای استایل یا انتقال
                        معانی ویژه درون محتوای شما استفاده می‌شوند. این بخش
                        به بررسی برخی از عناصر HTML مشترک می‌پردازد که برای
                        بهبود ارائه محتوای متنی شما مورد استفاده قرار می‌گیرند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              می‌توانید برچسب mark را برای
                              <mark className="p-1 bg-yellow-200">
                                highlight
                              </mark>{" "}
                              text.
                            </div>
                            <del className="block mt-1">
                              این خط متن به عنوان
                              متن حذف شده تلقی می‌شود.
                            </del>
                            <s className="block mt-1">
                              این خط متن به عنوان متنی که دیگر
                              دقیق نیست تلقی می‌شود.
                            </s>
                            <ins className="block mt-1">
                              این خط متن به عنوان متنی که به محتوا اضافه
                              شده است تلقی می‌شود.
                            </ins>
                            <u className="block mt-1">
                              این خط متن به صورت مورد زیرخط قرار خواهد گرفت.
                            </u>
                            <small className="block mt-1">
                              این خط متن به عنوان متنی که به شکل
                              چاپ کیفی در نظر گرفته شده تلقی می‌شود.
                            </small>
                            <strong className="block mt-1">
                              این خط به عنوان متنی که بصورت پررنگ نمایش داده شده
                            </strong>
                            <em className="block mt-1">
                              این خط به عنوان متنی که به صورت کج نمایش داده شده
                            </em>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div>
                می‌توانید برچسب mark را برای
                <mark className="p-1 bg-yellow-200">highlight</mark> text.
              </div>
              <del className="block mt-1"
                >این خط متن به عنوان متن حذف شده تلقی می‌شود.</del
              >
              <s className="block mt-1"
                >این خط متن به عنوان متنی که دیگر longer
                accurate.</s
              >
              <ins className="block mt-1"
                >این خط متن به عنوان متنی که به محتوا اضافه افزودنی به
                document.</ins
              >
              <u className="block mt-1"
                >این خط متن به صورت مورد زیرخط قرار خواهد گرفت.</u
              >
              <small className="block mt-1"
                >این خط متن به عنوان متنی که به شکل چاپ کیفی در نظر گرفته شده تلقی می‌شود.</small
              >
              <strong className="block mt-1"
                >این خط به عنوان متنی که بصورت پررنگ نمایش داده شده</strong
              >
              <em className="block mt-1">این خط به عنوان متنی که به صورت کج نمایش داده شده</em>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        این عناصر معمول HTML مجموعه‌ای از ابزارها را برای بهبود استایل و معنا‌بخشی به محتوای متنی شما فراهم می‌کنند. با استفاده مناسب از این عناصر، می‌توانید خوانایی و ارائه بصری محتوای خود را بهبود بخشیده و در عین حال معانی خاص یا تأکیدات لازم را انتقال دهید.
                        ابزارهایی برای بهبود استایل و معنای محتوای شما
                        محتوای متنی مبتنی بر متن. با استفاده از این عناصر
                        به‌طور مناسب، می‌توانید خوانایی را بهبود بخشیده و
                        ارائه بصری محتوای خود را بهبود بخشیده و هم‌زمان معانی
                        مخصوص یا تأکیدات لازم را منتقل کنید.
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
                      <div className="text-[0.94rem] font-medium">نشان‌ها</div>
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
                        نشان‌ها، اجزای کوچک و اطلاعاتی هستند که برای
                        نمایش وضعیت، اعلان‌ها یا سایر موارد را به‌صورت بصری
                        متادیتای در یک روش مختصر. این بخش درباره نحوه
                        استفاده موثر از نشان‌ها در برنامه‌های وب شما پوشش داده شده است.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="font-medium">نشانه پایه</div>
                            <div className="mt-2">
                              <span className="px-1 me-1 text-xs text-white rounded-full bg-primary">
                                1
                              </span>
                              <span className="px-1 me-1 text-xs border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-1 me-1 text-xs text-white rounded-full bg-success">
                                3
                              </span>
                              <span className="px-1 me-1 text-xs text-white rounded-full bg-warning">
                                4
                              </span>
                              <span className="px-1 me-1 text-xs text-white rounded-full bg-danger">
                                5
                              </span>
                              <span className="px-1 me-1 text-xs rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-6 font-medium">اندازه‌های نشانه</div>
                            <div className="mt-3">
                              <span className="px-2 py-1 me-1 text-white rounded-full bg-primary">
                                1
                              </span>
                              <span className="px-2 py-1 me-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-2 py-1 me-1 text-white rounded-full bg-success">
                                3
                              </span>
                              <span className="px-2 py-1 me-1 text-white rounded-full bg-warning">
                                4
                              </span>
                              <span className="px-2 py-1 me-1 text-white rounded-full bg-danger">
                                5
                              </span>
                              <span className="px-2 py-1 me-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-4">
                              <span className="px-3 py-2 me-1 text-white rounded-full bg-primary">
                                1
                              </span>
                              <span className="px-3 py-2 me-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-3 py-2 me-1 text-white rounded-full bg-success">
                                3
                              </span>
                              <span className="px-3 py-2 me-1 text-white rounded-full bg-warning">
                                4
                              </span>
                              <span className="px-3 py-2 me-1 text-white rounded-full bg-danger">
                                5
                              </span>
                              <span className="px-3 py-2 me-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-6">
                              <span className="px-4 py-3 me-1 text-white rounded-full bg-primary">
                                1
                              </span>
                              <span className="px-4 py-3 me-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-4 py-3 me-1 text-white rounded-full bg-success">
                                3
                              </span>
                              <span className="px-4 py-3 me-1 text-white rounded-full bg-warning">
                                4
                              </span>
                              <span className="px-4 py-3 me-1 text-white rounded-full bg-danger">
                                5
                              </span>
                              <span className="px-4 py-3 me-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-10 font-medium">
                              نشانه مربعی
                            </div>
                            <div className="mt-2">
                              <span className="px-1 me-1 text-xs text-white bg-primary">
                                1
                              </span>
                              <span className="px-1 me-1 text-xs border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-1 me-1 text-xs text-white bg-success">
                                3
                              </span>
                              <span className="px-1 me-1 text-xs text-white bg-warning">
                                4
                              </span>
                              <span className="px-1 me-1 text-xs text-white bg-danger">
                                5
                              </span>
                              <span className="px-1 me-1 text-xs bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-6 font-medium">
                              نشانه حاشیه
                            </div>
                            <div className="mt-4">
                              <span className="px-3 py-2 me-1 border rounded-full border-primary text-primary dark:border-primary">
                                1
                              </span>
                              <span className="px-3 py-2 me-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-3 py-2 me-1 border rounded-full border-success text-success dark:border-success">
                                3
                              </span>
                              <span className="px-3 py-2 me-1 border rounded-full border-warning text-warning dark:border-warning">
                                4
                              </span>
                              <span className="px-3 py-2 me-1 border rounded-full border-danger text-danger dark:border-danger">
                                5
                              </span>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="font-medium">نشانه پایه</div>
              <div className="mt-2">
                <span
                  className="px-1 me-1 text-xs text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-1 me-1 text-xs border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span
                  className="px-1 me-1 text-xs text-white rounded-full bg-success"
                  >3</span
                >
                <span
                  className="px-1 me-1 text-xs text-white rounded-full bg-warning"
                  >4</span
                >
                <span
                  className="px-1 me-1 text-xs text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-1 me-1 text-xs rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-6 font-medium">اندازه‌های نشانه</div>
              <div className="mt-3">
                <span className="px-2 py-1 me-1 text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-2 py-1 me-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-2 py-1 me-1 text-white rounded-full bg-success"
                  >3</span
                >
                <span className="px-2 py-1 me-1 text-white rounded-full bg-warning"
                  >4</span
                >
                <span className="px-2 py-1 me-1 text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-2 py-1 me-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-4">
                <span className="px-3 py-2 me-1 text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-3 py-2 me-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-3 py-2 me-1 text-white rounded-full bg-success"
                  >3</span
                >
                <span className="px-3 py-2 me-1 text-white rounded-full bg-warning"
                  >4</span
                >
                <span className="px-3 py-2 me-1 text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-3 py-2 me-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-6">
                <span className="px-4 py-3 me-1 text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-4 py-3 me-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-4 py-3 me-1 text-white rounded-full bg-success"
                  >3</span
                >
                <span className="px-4 py-3 me-1 text-white rounded-full bg-warning"
                  >4</span
                >
                <span className="px-4 py-3 me-1 text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-4 py-3 me-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-10 font-medium">نشانه مربعی</div>
              <div className="mt-2">
                <span className="px-1 me-1 text-xs text-white bg-primary">1</span>
                <span
                  className="px-1 me-1 text-xs border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-1 me-1 text-xs text-white bg-success">3</span>
                <span className="px-1 me-1 text-xs text-white bg-warning">4</span>
                <span className="px-1 me-1 text-xs text-white bg-danger">5</span>
                <span
                  className="px-1 me-1 text-xs bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-6 font-medium">نشانه حاشیه</div>
              <div className="mt-4">
                <span
                  className="px-3 py-2 me-1 border rounded-full border-primary text-primary dark:border-primary"
                  >1</span
                >
                <span
                  className="px-3 py-2 me-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span
                  className="px-3 py-2 me-1 border rounded-full border-success text-success dark:border-success"
                  >3</span
                >
                <span
                  className="px-3 py-2 me-1 border rounded-full border-warning text-warning dark:border-warning"
                  >4</span
                >
                <span
                  className="px-3 py-2 me-1 border rounded-full border-danger text-danger dark:border-danger"
                  >5</span
                >
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        نشان‌ها اجزای چندمنظوره‌ای هستند که می‌توانند به شما در انتقال
                        اطلاعات مهم یا برجسته کردن عناصر خاص در
                        برنامه‌ی شما کمک کنند. با استفاده از انواع مختلف، آیکون‌ها،
                        شمارش و استایل دلخواه، می‌توانید نشانه‌هایی ایجاد کنید که
                        به‌طور یکپارچه در طراحی شما جا بیفتند و تجربه کاربر را بهبود بخشند
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
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        جداکننده
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
                        جداکننده‌ها برای ایجاد تقسیم‌بندی‌های بصری یا
                        فاصله بین عناصر در یک رابط کاربری استفاده می‌شوند. آن‌ها به
                        بهبود طرح کلی و خوانایی یک صفحه کمک می‌کنند.
                        این بخش راه‌های مختلف استفاده از جداکننده‌ها را پوشش می‌دهد
                        در برنامه‌های وب شما به‌طور موثر.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="w-full border-t border-dashed border-slate-200/60 dark:border-darkmode-400"></div>
                            <div className="w-full mt-5 border-t border-slate-200/60 dark:border-darkmode-400"></div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div
                className="w-full border-t border-dashed border-slate-200/60 dark:border-darkmode-400"
              ></div>
              <div
                className="w-full mt-5 border-t border-slate-200/60 dark:border-darkmode-400"
              ></div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        جداکننده‌ها نقش حیاتی در بهبود طرح
                        و خوانایی صفحات وب شما دارند. آن‌ها می‌توانند به
                        ایجاد یک سلسله مراتب بصری و بهبود کلی تجربه کاربر
                        کمک کنند. با استفاده از انواع مختلف جداکننده‌ها و
                        استایل‌های دلخواه، می‌توانید آن‌ها را به‌طوری که با
                        طراحی برنامه شما همخوانی داشته باشند و ساختار موثری را
                        content.
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
                      <div className="text-[0.94rem] font-medium">Divider</div>
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
                        تقسیم‌کننده‌ها برای ایجاد جدایی‌های بصری روشن
                        بین بخش‌ها یا محتوا در یک صفحه وب استفاده می‌شوند. آن‌ها به
                        بهبود ساختار کلی و سازماندهی یک
                        صفحه کمک می‌کنند. این بخش راه‌های مختلف استفاده از تقسیم‌کننده‌ها را پوشش می‌دهد
                        در برنامه‌های وب شما به‌طور موثر.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center w-full mt-2 border-t border-slate-200/60 dark:border-darkmode-400">
                              <div className="px-5 -mt-3 bg-white dark:bg-darkmode-600 text-slate-500">
                                or
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div
                className="flex justify-center w-full mt-2 border-t border-slate-200/60 dark:border-darkmode-400"
              >
                <div
                  className="px-5 -mt-3 bg-white dark:bg-darkmode-600 text-slate-500"
                >
                  or
                </div>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        تقسیم‌کننده‌ها برای حفظ یک ساختار خوب
                        در برنامه‌های وب شما ضروری هستند. آن‌ها به
                        ایجاد یک سلسله مراتب بصری روشن و بهبود کلی تجربه کاربر
                        را با ارائه احساس سازمان و
                        جدایی بین بخش‌های محتوا فراهم می‌کنند.
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
                      <div className="text-[0.94rem] font-medium">Links</div>
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
                        پیوندها بخش اساسی از توسعه وب هستند و
                        هدایت. آن‌ها به کاربران اجازه می‌دهند بین
                        صفحات یا منابع مختلف در اینترنت پیمایش کنند. این
                        بخش مروری بر روی استفاده از پیوندها در توسعه وب و
                        ارائه نمونه‌هایی از چگونگی ایجاد و استایل پیوندها را
                        به‌طور موثر فراهم می‌کند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <a
                                href=""
                                className="block font-normal text-primary"
                              >
                                متن نمونه
                              </a>
                              <a
                                href=""
                                className="block font-medium text-primary"
                              >
                                متن متوسط نمونه
                              </a>
                              <a
                                href=""
                                className="block font-semibold text-primary"
                              >
                                متن نیمه‌جسور نمونه
                              </a>
                              <a
                                href=""
                                className="block font-bold text-primary"
                              >
                                متن پردازش شده نمونه
                              </a>
                              <a
                                href=""
                                className="block font-extrabold text-primary"
                              >
                                متن بلند شده نمونه
                              </a>
                            </div>
                            <div className="mt-5">
                              <a href="" className="block text-primary">
                                حالت اصلی
                              </a>
                              <a
                                href=""
                                className="block text-slate-600 dark:text-slate-500"
                              >
                                حالت ثانویه
                              </a>
                              <a href="" className="block text-success">
                                حالت موفقیت
                              </a>
                              <a href="" className="block text-warning">
                                حالت هشدار
                              </a>
                              <a href="" className="block text-danger">
                                حالت خطر
                              </a>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div>
                <a href="" className="block font-normal text-primary"
                  >متن نمونه</a
                >
                <a href="" className="block font-medium text-primary"
                  >متن متوسط نمونه</a
                >
                <a href="" className="block font-semibold text-primary"
                  >متن نیمه‌جسور نمونه</a
                >
                <a href="" className="block font-bold text-primary"
                  >متن پردازش شده نمونه</a
                >
                <a href="" className="block font-extrabold text-primary"
                  >متن بلند شده نمونه</a
                >
              </div>
              <div className="mt-5">
                <a href="" className="block text-primary">حالت اصلی</a>
                <a href="" className="block text-slate-600 dark:text-slate-500"
                  >حالت ثانویه</a
                >
                <a href="" className="block text-success">حالت موفقیت</a>
                <a href="" className="block text-warning">حالت هشدار</a>
                <a href="" className="block text-danger">حالت خطر</a>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        پیوندها بخش حیاتی از توسعه وب هستند و امکان می‌دهند
                        کاربران بین صفحات و منابع مختلف حرکت کنند. درک
                        چگونگی ایجاد و استایل پیوندها به‌طور موثر برای
                        فراهم کردن یک تجربه یافتنی و کاربرپسند حیاتی است.
                        تجربه مرور. با استفاده از دستور زبان HTML و CSS مناسب
                        استایل، می‌توانید پیوندهای خود را جذاب بصری کنید و
                        کاربردی، تجربه کاربری کلی را در
                        وب‌سایت یا برنامه وب خود بهبود بخشید.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
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
                    سربرگ
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    تنظیمات متن
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    عناصر مشترک
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نشان‌ها
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    جداکننده
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Divider
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Links
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
