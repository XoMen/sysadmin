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
import VerticalBarChart from "@/components/VerticalBarChart";
import StackedBarChart from "@/components/StackedBarChart";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import LineChart from "@/components/LineChart";
import DonutChart from "@/components/DonutChart";
import PieChart from "@/components/PieChart";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            نمودار
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            پتانسیل بصری‌سازی داده را با مؤلفه نمودار ما فعال کنید.
            به آسانی نمودارهای شگفت‌انگیز و اطلاعاتی ایجاد کنید.
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
                        نمودار میله‌ای عمودی
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
                        مؤلفه «نمودار میله‌ای عمودی» به شما اجازه می‌دهد تا
                        داده‌ها را به صورت بصری در قالب یک نمودار میله‌ای عمودی نمایش دهید.
                        نمودارهای میله‌ای عمودی برای نمایش و
                        مقایسه داده‌های عددی در دسته‌ها یا گروه‌ها موثر هستند.
                        این بخش نحوه ایجاد و سفارشی‌سازی نمودارهای
                        میله‌ای عمودی با استفاده از یک کتابخانه نمودار محبوب را نشان می‌دهد.
                        مانند یک کتابخانه نمودارسازی محبوب مانند نمودار.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <VerticalBarChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <VerticalBarChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        نمودارهای میله‌ای عمودی یک روش قدرتمند برای تصویرسازی داده‌ها هستند،
                        که باعث می‌شوند درک و مقایسه ارزش‌ها آسان‌تر شود
                        در دسته‌ها یا گروه‌های مختلف. با دنبال کردن
                        مراحل بالا و سفارشی‌سازی نمودار برای مناسب کردن آن با
                        نیازهای داده‌ها و طرح خاص خود، شما می‌توانید
                        به طور موثر نمودارهای میله‌ای عمودی را در
                        برنامه وب خود برای تصویرسازی داده‌ها گنجانده شوید.
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
                        نمودار میله‌ای افقی
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
                        مؤلفه «نمودار میله‌ای افقی» به شما اجازه می‌دهد تا
                        داده‌ها را به صورت بصری در یک نمودار میله‌ای افقی
                        نمایش دهید. نمودارهای میله‌ای افقی برای
                        نمایش و مقایسه داده‌های عددی در
                        دسته‌ها یا گروه‌ها موثر هستند. این بخش نشان می‌دهد که چگونه
                        نمودارهای میله‌ای افقی را با استفاده از
                        یک کتابخانه نمودارسازی محبوب مانند نمودار.js ایجاد و سفارشی کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <HorizontalBarChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <HorizontalBarChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        نمودارهای میله‌ای افقی راهی موثر برای
                        تصویرسازی داده‌ها فراهم می‌کنند، که باعث می‌شود درک و
                        مقایسه ارزش‌ها در دسته‌ها یا گروه‌های مختلف آسان‌تر شود. با
                        دنبال کردن مراحل بالا و سفارشی‌سازی نمودار برای
                        به منظور تطابق با نیازهای داده‌ها و طراحی خاص خود، می‌توانید
                        به طور موثر نمودارهای میله‌ای افقی را در
                        برنامه وب خود برای تصویرسازی داده‌ها گنجانده شوید.
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
                        نمودار دونات
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
                        مؤلفه «نمودار دونات» نوعی نمودار دایره‌ای است
                        که برای نمایش داده‌ها به شکلی جذاب استفاده می‌شود. نمودار دونات
                        نوعی تغییر در نمودارهای پایه با یک حفره در
                        وسط است که آنها را برای نمایش داده‌ها
                        توزیع و مقایسه مفید می‌سازد. این بخش نشان می‌دهد که
                        چگونگی ایجاد و سفارشی‌سازی نمودار دونات با استفاده از یک
                        کتابخانه نمودارسازی محبوب مانند یک کتابخانه نمودارسازی محبوب مانند نمودار.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <DonutChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <DonutChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مؤلفه «نمودار دونات» نوعی نمودار دایره‌ای است
                        که برای نمایش داده‌ها به شکلی جذاب استفاده می‌شود. نمودار دونات
                        نوعی تغییر در نمودارهای پایه با یک حفره در
                        وسط است که آنها را برای نمایش داده‌ها
                        توزیع و مقایسه مفید می‌سازد. این بخش نشان می‌دهد که
                        چگونگی ایجاد و سفارشی‌سازی نمودار دونات با استفاده از یک
                        کتابخانه نمودارسازی محبوب مانند یک کتابخانه نمودارسازی محبوب مانند نمودار.js.
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
                        نمودار میله‌ای توده‌ای
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
                        مؤلفه «نمودار میله‌ای توده‌ای» ابزار قدرتمندی برای تصویرسازی داده است
                        که به شما اجازه می‌دهد داده‌ها را به صورت
                        توده‌ای نمایش دهید. نمودارهای میله‌ای توده‌ای برای
                        تصویرسازی داده‌ها با چندین دسته و مقایسه
                        ترکیب هر دسته در گروه‌ها یا دوره‌های زمانی مختلف موثر هستند. این بخش نشان می‌دهد که چگونه
                        نمودارهای میله‌ای توده‌ای را ایجاد و سفارشی کنید با استفاده از
                        یک کتابخانه نمودارسازی محبوب مانند یک کتابخانه نمودارسازی محبوب مانند نمودار.js.
                        کتابخانه نمودارسازی محبوب مانند یک کتابخانه نمودارسازی محبوب مانند نمودار.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <StackedBarChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <StackedBarChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        نمودارهای میله‌ای توده‌ای یک راه چندمنظوره برای نمایش داده‌ها هستند
                        که آن را آسان‌تر می‌کنند برای مقایسه و
                        تجزیه و تحلیل ترکیب هر دسته. با
                        دنبال کردن مراحل بالا و سفارشی‌سازی نمودار برای
                        به منظور تطابق با نیازهای داده‌ها و طراحی خاص خود، می‌توانید
                        به طور موثر نمودارهای میله‌ای توده‌ای را به
                        برنامه وب خود برای تصویرسازی داده‌ها گنجانید.
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
                        نمودار خطی
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
                        مؤلفه «نمودار خطی» ابزار ارزشمندی برای تصویرسازی داده است
                        که به شما اجازه می‌دهد داده‌ها را به عنوان یک سری نشانگر داده متصل نمایید
                        تشکیل خط می‌دهد. نمودارهای خطی برای نمایش روندها در طول زمان موثر هستند
                        ، مقایسه‌ها را انجام داده و داده‌ها با متغیرهای پیوسته را تصویرسازی می‌کنند. این بخش نشان می‌دهد که چگونه
                        نمودارهای خطی را ایجاد و سفارشی کنید با استفاده از
                        یک کتابخانه نمودارسازی محبوب مانند یک کتابخانه نمودارسازی محبوب مانند نمودار.js. نمودارهای خطی ابزار قدرتمندی برای تصویرسازی روندها و الگوهای داده‌های شما هستند.
                        با دنبال کردن مراحل بالا و سفارشی‌سازی نمودار
                        کتابخانه نمودارسازی محبوب مانند یک کتابخانه نمودارسازی محبوب مانند نمودار.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <LineChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <LineChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        برای تطابق با داده‌ها و نیازهای طراحی خاص خود می‌توانید
                        به طور موثر نمودارهای خطی را به
                        برنامه وب خود برای تصویرسازی داده‌ها گنجانید.
                        با رعایت نیازهای طراحی، می‌توانید به طور موثر
                        نمودارهای خطی را به برنامه وب خود برای تصویرسازی داده
                        گنجانید.
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
                        نمودار دایره‌ای
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
                        مؤلفه «نمودار دایره‌ای» یک ابزار محبوب برای تصویرسازی داده است
                        که برای نمایش داده‌ها به عنوان یک نمودار دایره‌ای استفاده می‌شود
                        هر نقطه داده به عنوان یک برش از
                        دایره نمایش داده می‌شود، با اندازه هر برش به تناسب
                        داده‌ای که نمایانگر آن است. نمودارهای دایره‌ای برای
                        نمایش داده با چندین دسته و نمایش
                        نسبت‌های نسبی هر دسته در مجموعه کاربرد دارند. این بخش نشان می‌دهد که چگونه
                        این بخش نحوه ایجاد و سفارشی‌سازی نمودارهای
                        نمودارهای دایره‌ای را ایجاد و سفارشی کنید با استفاده از
                        یک کتابخانه نمودارسازی محبوب مانند نمودار.js.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <PieChart height={400} />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <PieChart height={400} />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        نمودارهای دایره‌ای ابزار مفیدی برای تصویرسازی
                        توزیع داده بین دسته‌ها یا نمایش
                        نسبت‌های نسبی اجزا مختلف در یک کل می‌باشند. با دنبال کردن مراحل بالا و سفارشی‌سازی نمودار
                        به منظور تطابق با داده‌های و نیازهای طراحی خاص خود می‌توانید
                        نمودارهای دایره‌ای را به
                        برنامه وب خود برای تصویرسازی داده‌ها گنجانید.
                        برنامه وب خود برای تصویرسازی داده‌ها گنجانید.
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
                    <div className="-mt-px">نمودار</div>
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
                          <Table.Td>`type`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            The type of chart (e.g., "line", "bar", "pie").
                            پیش‌فرض "خطی" است.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`data`</Table.Td>
                          <Table.Td>`ChartConfiguration['data']`</Table.Td>
                          <Table.Td>
                            پیکربندی داده‌ها برای نمودار.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`options`</Table.Td>
                          <Table.Td>`ChartConfiguration['options']`</Table.Td>
                          <Table.Td>
                            پیکربندی گزینه‌ها برای نمودار.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`width`</Table.Td>
                          <Table.Td>`number`, `auto`</Table.Td>
                          <Table.Td>
                            عرض کانوس نمودار به پیکسل یا "اتو" برای
                            استفاده از عرض مخزن والد. پیش‌فرض:
                            "auto".
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`height`</Table.Td>
                          <Table.Td>`number`, `auto`</Table.Td>
                          <Table.Td>
                            ارتفاع کانوس نمودار به پیکسل یا "اتو"
                            برای استفاده از ارتفاع مخزن والد. پیش‌فرض:
                            "auto".
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: ChartElement | null) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            یک تابع که یک مرجع به عنصر کانوس نمودار دریافت می‌کند.
                            عنصر کانوس.
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
                    نمودار میله‌ای عمودی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نمودار میله‌ای افقی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نمودار دونات
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نمودار میله‌ای توده‌ای
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نمودار خطی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نمودار دایره‌ای
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
