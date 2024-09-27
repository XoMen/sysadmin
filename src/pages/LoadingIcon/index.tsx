import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
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
            آیکون بارگذاری
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            اکتشاف سادگی و کارآمدی آیکون بارگذاری ما
            component
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
                        آیکون‌های در دسترس
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
                        آیکون‌های بارگذاری برای نشان دادن این استفاده می‌شوند که یک فرآیند در
                        پیشرفت است یا برنامه داده را دریافت می‌کند. آن‌ها
                        به کاربران بازخورد بصری ارائه می‌دهند تا بدانند که
                        یک عمل در حال انجام است. این بخش نحوه
                        استفاده از آیکون‌های بارگذاری در برنامه وب خود را پوشش می‌دهد و ارائه می‌دهد
                        نمونه‌های مختلف از سبک‌های آیکون بارگذاری.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="grid grid-cols-12 py-3 sm:gap-7 gap-y-6">
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="audio"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  audio
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="ball-triangle"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  ball-triangle
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="bars"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  bars
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="circles"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  circles
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="grid"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  grid
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="hearts"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  hearts
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="oval"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  oval
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="puff"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  puff
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="rings"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  rings
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="spinning-circles"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  spinning-circles
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="tail-spin"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  tail-spin
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                                <LoadingIcon
                                  color="#64748b"
                                  icon="three-dots"
                                  className="w-8 h-8"
                                />
                                <div className="mt-2 text-xs text-center">
                                  three-dots
                                </div>
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="grid grid-cols-12 py-3 sm:gap-7 gap-y-6">
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="audio" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  audio
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="ball-triangle"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  ball-triangle
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="bars" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  bars
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="circles"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  circles
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="grid" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  grid
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="hearts"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  hearts
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="oval" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  oval
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="puff" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  puff
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon icon="rings" className="w-8 h-8" />
                <div className="mt-2 text-xs text-center">
                  rings
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="spinning-circles"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  spinning-circles
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="tail-spin"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  tail-spin
                </div>
              </div>
              <div className="flex flex-col items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
                <LoadingIcon
                  icon="three-dots"
                  className="w-8 h-8"
                />
                <div className="mt-2 text-xs text-center">
                  three-dots
                </div>
              </div>
            </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        آیکون‌های بارگذاری برای ارائه بازخورد به
                        کاربران در طول عملیات ناهمگام اساسی هستند. با استفاده از
                        مؤلفه `LoadingIcon` و سفارشی کردن ظاهر آن،
                        می‌توانید یک تجربه بارگذاری مداوم و جذاب بصری ایجاد کنید
                        در برنامه وب خود. اطمینان حاصل کنید که
                        یک سبک مناسب آیکون بارگذاری را انتخاب کنید که با
                        طراحی برنامه شما همخوانی داشته باشد و بازخورد روشنی ارائه دهد به
                        users.
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
                          <Table.Td>`icon`</Table.Td>
                          <Table.Td>
                            `audio`, `ball-triangle`, `bars`, `circles` ,
                            `grid`, `hearts`, `oval`, `puff`, `rings` ,
                            `spinning-circles`, `tail-spin`, `three-dots`
                          </Table.Td>
                          <Table.Td>
                            نام آیکون بارگذاری را برای نمایش مشخص می‌کند
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`color`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>رنگ آیکون را مشخص می‌کند</Table.Td>
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
                    آیکون‌های در دسترس
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
