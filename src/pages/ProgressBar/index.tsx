import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import Progress from "@/components/Base/Progress";
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
            نوار پیشرفت
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            قدرت اجزای نوار پیشرفت ما برای بصری‌سازی
            پیشرفت و انتقال اطلاعات به طور موثر را کشف کنید.
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
                        نوار پیشرفت پایه
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
                        این اجزای نوار پیشرفت پایه به شما امکان می‌دهد تا به طور بصری
                        پیشرفت کار یا فرآیند را نمایش دهید و
                        به کاربران بازخورد زمان واقعی در مورد وضعیت تکمیل ارائه کنید. این
                        بخش یک مقدمه به نوار پیشرفت پایه ارائه می‌دهد و نحوه استفاده از آن را به طور موثر توضیح می‌دهد.
                        نوارد و نحوه استفاده مفید از آن.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Progress>
                                <Progress.Bar
                                  className="w-1/2"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-2/3"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-3/4"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="flex flex-col gap-2">
              <Progress>
                <Progress.Bar
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-2/3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-3/4"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        نوار پیشرفت پایه یک اجزای بنیادین برای
                        بهبود تجربه کاربری با ارائه بازخورد واضح در مورد
                        پیشرفت کار است. با پیروی از مراحل بالا،
                        می‌توانید به راحتی آن را در پروژه خود یکپارچه کنید و
                        آن را برای برآورده کردن نیازهای خاص خود سفارشی کنید.
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
                        نوار پیشرفت با برچسب
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
                        اجزای نوار پیشرفت با برچسب یک ترکیب بصری
                        از نوار پیشرفت با برچسب با یک برچسب متنی برای ارائه
                        کاربران با یک نشانه واضح از پیشرفت ارائه می‌دهد. این بخش
                        نوار پیشرفت با برچسب و نحوه یکپارچه‌سازی آن با
                        پروژه خود به طور موثر.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Progress className="h-4">
                                <Progress.Bar
                                  className="w-1/2"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  50%
                                </Progress.Bar>
                              </Progress>
                              <Progress className="h-4">
                                <Progress.Bar
                                  className="w-2/3"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  60%
                                </Progress.Bar>
                              </Progress>
                              <Progress className="h-4">
                                <Progress.Bar
                                  className="w-3/4"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  70%
                                </Progress.Bar>
                              </Progress>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="flex flex-col gap-2">
              <Progress className="h-4">
                <Progress.Bar
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  50%
                </Progress.Bar>
              </Progress>
              <Progress className="h-4">
                <Progress.Bar
                  className="w-2/3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  60%
                </Progress.Bar>
              </Progress>
              <Progress className="h-4">
                <Progress.Bar
                  className="w-3/4"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  70%
                </Progress.Bar>
              </Progress>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای نوار پیشرفت با برچسب یک افزودنی ارزشمند است
                        برای رابط کاربری شما که هم بصری
                        هم متنی بروزرسانی‌های پیشرفت را ارائه می‌دهد. با پیروی از مراحل
                        فوق، می‌توانید آن را به طور یکپارچه در
                        پروژه خود یکپارچه کنید و آن را برای برآورده کردن نیازهای خاص خود سفارشی کنید.
                        requirements.
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
                        ارتفاع نوار پیشرفت
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
                        بخش "ارتفاع نوار پیشرفت" توضیح می‌دهد چگونه
                        ارتفاع نوارهای پیشرفت را برای مطابقت با
                        طراحی و طرح پروژه خود کنترل کنید. سفارشی کردن ارتفاع
                        نوارهای پیشرفت را به طور یکپارچه در
                        سلسله مراتب بصری برنامه‌ی خود یکپارچه کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Progress className="h-1">
                                <Progress.Bar
                                  className="w-1/2"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-2/3"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress className="h-3">
                                <Progress.Bar
                                  className="w-3/4"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="flex flex-col gap-2">
              <Progress className="h-1">
                <Progress.Bar
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-2/3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress className="h-3">
                <Progress.Bar
                  className="w-3/4"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        بخش "ارتفاع نوار پیشرفت" نشان داده است چگونه
                        ارتفاع نوارهای پیشرفت در پروژه خود را کنترل کنید. با پیروی از این راهنماها و حفظ
                        سریعتر و بهتر نوارهای پیشرفت در پروژه خود را ایجاد کنید. با پیروی از این
                        راهنماها و حفظ یکپارچگی، می‌توانید نوارهای پیشرفتی را ایجاد کنید که
                        جذاب و دسترسی‌پذیر هستند که با طرح و طرح برنامه‌ی خود هماهنگ هستند.
                        طراحی اپلیکیشن
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
                        رنگ نوار پیشرفت
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
                        بخش "رنگ نوار پیشرفت" شرح می‌دهد چگونه
                        رنگ‌های نوار پیشرفت را برای افزایش
                        جلب توجه بصری برنامه خود سفارشی کنید و اطلاعات را منتقل کنید
                        به طور موثر. می‌توانید از تنوع رنگ‌ها برای
                        مطابقت با هویت برند خود یا نشان دادن مراحل مختلف
                        فرایند استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col gap-2">
                              <Progress>
                                <Progress.Bar
                                  className="w-1/2"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-2/3 bg-success"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-3/4 bg-warning"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                              <Progress>
                                <Progress.Bar
                                  className="w-3/4 bg-danger"
                                  role="progressbar"
                                  aria-valuenow={0}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></Progress.Bar>
                              </Progress>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="flex flex-col gap-2">
              <Progress>
                <Progress.Bar
                  className="w-1/2"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-2/3 bg-success"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-3/4 bg-warning"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
              <Progress>
                <Progress.Bar
                  className="w-3/4 bg-danger"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></Progress.Bar>
              </Progress>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        بخش "رنگ نوار پیشرفت" به شما نشان داده است که چگونه
                        رنگ‌های نوار پیشرفت را برای هماهنگی با
                        طراحی برنامه خود سفارشی کنید و معنا را به طور موثر منتقل کنید. با
                        انتخاب رنگ‌های مناسب و در نظر گرفتن دسترسی‌پذیری،
                        تجربه کاربر را بهبود بخشیده و پیشرفت را
                        قسمتی اساسی از رابط کاربری برنامه خود کنید.
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
                    <div className="-mt-px">پیشرفت</div>
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
                    <div className="-mt-px">پیشرفت.Bar</div>
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
                    نوار پیشرفت پایه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نوار پیشرفت با برچسب
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    ارتفاع نوار پیشرفت
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    رنگ نوار پیشرفت
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
