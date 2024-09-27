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
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            جدول معمولی
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            تنوع‌های مختلف مؤلفه جدول را با استایل ساده‌شده بررسی کنید برای
            جداول پویا!
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
                        جدول پایه
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
                        کامپوننت "جدول پایه" یک راه ساده را برای ایجاد جداول ساختارمند در وب
                        اپلیکیشن‌ها فراهم می‌کند. این سبک جدول تمیز و کم حجم است،
                        که مناسب برای موارد استفاده گسترده‌ای است.
                        این مثال نشان می‌دهد که چگونه یک جدول پایه با ستون‌های "نام اول"، "نام آخر" و
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="overflow-x-auto">
                              <Table>
                                <Table.Thead>
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr>
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>آنجلینا</Table.Td>
                                    <Table.Td>چارلی</Table.Td>
                                    <Table.Td>@angelinajolie</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>برد</Table.Td>
                                    <Table.Td>هانم</Table.Td>
                                    <Table.Td>@bradpitt</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                                    <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                                    <Table.Td>@charliehunnam</Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                              <Table dark className="mt-5">
                                <Table.Thead>
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr>
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>آنجلینا</Table.Td>
                                    <Table.Td>چارلی</Table.Td>
                                    <Table.Td>@angelinajolie</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>برد</Table.Td>
                                    <Table.Td>هانم</Table.Td>
                                    <Table.Td>@bradpitt</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                                    <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                                    <Table.Td>@charliehunnam</Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>آنجلینا</Table.Td>
                        <Table.Td>چارلی</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>برد</Table.Td>
                        <Table.Td>هانم</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                        <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                  <Table dark className="mt-5">
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>آنجلینا</Table.Td>
                        <Table.Td>چارلی</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>برد</Table.Td>
                        <Table.Td>هانم</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                        <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        کامپوننت "جدول پایه" زمانی استفاده کنید که می‌خواهید یک
                        جدول ساده،
                        "پایدار و سفارشی‌سازی شود.
                        برای سفارشی‌سازی بیشتر و تطابق با نیازهای برنامه‌ی خود استفاده کنید
                        کامپوننت "جدول پایه" را زمانی استفاده کنید که می‌خواهید یک ساختار جدول ساده،
                        تمیز و بدون پوشش یا
                        complexity.
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
                        جدول با حاشیه
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-2"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-2"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        کامپوننت "جدول با حاشیه" یک نسخه از
                        جدول پایه است که ویژگی اضافی حاشیه‌ها دور
                        جدول و سلول‌هایش را دارد. این انتخاب استایلی
                        تمایز بصری بین ردیف‌ها و ستون‌ها را افزایش می‌دهد و
                        محتوای جدول را مشخص‌تر و سازمان‌دهی‌شده‌تر می‌کند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="overflow-x-auto">
                              <Table bordered>
                                <Table.Thead>
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr>
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>آنجلینا</Table.Td>
                                    <Table.Td>چارلی</Table.Td>
                                    <Table.Td>@angelinajolie</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>برد</Table.Td>
                                    <Table.Td>هانم</Table.Td>
                                    <Table.Td>@bradpitt</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                                    <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                                    <Table.Td>@charliehunnam</Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="overflow-x-auto">
                  <Table bordered>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>آنجلینا</Table.Td>
                        <Table.Td>چارلی</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>برد</Table.Td>
                        <Table.Td>هانم</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                        <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در این مثال، یک "جدول با حاشیه" با
                        حاشیه‌ها دور جدول و سلول‌هایش ایجاد می‌شود. این تمایز بصری اضافی می‌تواند به‌ویژه زمانی که می‌خواهید
                        ساختار جدول خود را تأکید دهید، مفید باشد. از کامپوننت
                        جدول با حاشیه" زمانی استفاده کنید که نیاز به جدول با
                        حاشیه‌های مشخص برای افزایش تفکیک بصری بین ردیف‌ها و ستون‌ها دارید.
                        حاشیه‌های مشخص برای بهبود جداکردن بصری
                        بین ردیف‌ها و ستون‌ها.
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
                        جدول قابل هاور
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-3"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-3"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        کامپوننت "جدول قابل هاور" طراحی شده است تا تجربه کاربر را ارتقا دهد با اضافه کردن یک اثر هاور به
                        ردیف‌های جدول. زمانی که کاربران موس خود را بر روی یک ردیف قرار می‌دهند، آن ردیف برجسته می‌شود و
                        یک روند بصری ارائه می‌دهد و تعامل را بهبود می‌بخشد.
                        در این مثال، یک "جدول قابل هاور" با افزودن prop هاور به کامپوننت جدول ایجاد شده است. هنگامی که کاربران بر روی ردیف‌ها هاور می‌کنند، به طور بصری با برجسته شدن پاسخ می‌دهند، که ارتباطاتشان را ردیابی کردن آسان‌تر می‌کند. از کامپوننت "جدول قابل هاور" زمانی استفاده کنید که می‌خواهید در محتوای مبتنی بر جدولتان تعامل کاربر را بهبود بخشید.
                        بهبود تعامل
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="overflow-x-auto">
                              <Table bordered hover>
                                <Table.Thead>
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr>
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>آنجلینا</Table.Td>
                                    <Table.Td>چارلی</Table.Td>
                                    <Table.Td>@angelinajolie</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>برد</Table.Td>
                                    <Table.Td>هانم</Table.Td>
                                    <Table.Td>@bradpitt</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                                    <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                                    <Table.Td>@charliehunnam</Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="overflow-x-auto">
                  <Table
                    bordered
                    hover
                  >
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>آنجلینا</Table.Td>
                        <Table.Td>چارلی</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>برد</Table.Td>
                        <Table.Td>هانم</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                        <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در این مثال، یک "جدول قابل هاور" با اضافه کردن prop هاور به کامپوننت جدول ایجاد شده است. هنگامی که کاربران
                        بر روی ردیف‌ها هاور می‌کنند، به طور بصری با برجسته شدن
                        پاسخ می‌دهند، که ارتباطاتشان را ردیابی کردن آسان‌تر می‌کند.
                        از کامپوننت "جدول قابل هاور" زمانی استفاده کنید که می‌خواهید
                        در محتوای مبتنی بر جدولتان تعامل کاربر را بهبود بخشید.
                        ارتباط کاربری را بهبود بخشید و تجربه‌ای بیشتر از نظر تعاملی
                        در محتوای مبتنی بر جدولتان فراهم کنید.
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
                        وضعیت ردیف‌های جدول
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-3"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-3"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        ویژگی "وضعیت ردیف‌های جدول" به شما امکان می‌دهد که نشانگرهای بصری به ردیف‌های جدول اضافه کنید، بهبود ارائه و انتقال اطلاعات اضافی به کاربران را فراهم می‌کند. شما می‌توانید استایل‌های مختلف را به ردیف‌ها اعمال کنید تا وضعیت‌ها یا دسته‌بندی‌های مختلف را نمایش دهید و جداول خود را اطلاعاتی‌تر و جذاب‌تر کنید.
                        نشانگرهای به ردیف‌های جدول اضافه کنید تا ارائه و
                        conveying additional information to users. You can apply
                        استفاده از استایل‌های مختلف برای نمایش وضعیت‌ها یا دسته‌های مختلف ردیف‌ها
                        دسته‌بندی‌ها، جداول شما را اطلاعات‌بخش‌تر و
                        جذاب‌تر می‌کنند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="overflow-x-auto">
                              <Table>
                                <Table.Thead>
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr className="text-white bg-primary">
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>آنجلینا</Table.Td>
                                    <Table.Td>چارلی</Table.Td>
                                    <Table.Td>@angelinajolie</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr className="text-white bg-danger">
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>برد</Table.Td>
                                    <Table.Td>هانم</Table.Td>
                                    <Table.Td>@bradpitt</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr className="bg-warning">
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                                    <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                                    <Table.Td>@charliehunnam</Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr className="text-white bg-primary">
                        <Table.Td>1</Table.Td>
                        <Table.Td>آنجلینا</Table.Td>
                        <Table.Td>چارلی</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr className="text-white bg-danger">
                        <Table.Td>2</Table.Td>
                        <Table.Td>برد</Table.Td>
                        <Table.Td>هانم</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr className="bg-warning">
                        <Table.Td>3</Table.Td>
                        <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                        <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در این مثال، وضعیت‌های مختلف ردیف‌ها را اعمال کرده‌ایم تا
                        ردیف‌های خاصی را برجسته کنیم:
                      </p>
                      <ul className="mt-2 mb-4 leading-relaxed list-decimal ms-7">
                        <li className="mb-0.5">
                          ردیف اول با وضعیت اصلی علامت‌گذاری شده است،
                          که معمولاً برای محتوای مثبت یا برجسته استفاده می‌شود.
                        </li>
                        <li className="mb-0.5">
                          ردیف دوم با وضعیت خطر علامت‌گذاری شده است، که اغلب
                          برای نشان دادن یک شرایط بحرانی یا منفی استفاده می‌شود.
                        </li>
                        <li className="mb-0.5">
                          ردیف سوم با وضعیت هشدار علامت‌گذاری شده است، مناسب
                          برای هشدار دادن به کاربران در مواقع هشداردهنده است.
                        </li>
                      </ul>
                      <p className="leading-relaxed">
                        با استفاده از "وضعیت‌های ردیف جدول"، می‌توانید به طور بصری
                        ردیف‌ها را بر اساس اهمیت یا
                        دسته‌بندی متفاوت کنید که این برای کاربران آسان‌تر می‌شود تا محتوای
                        محتوای داخل جدول را مشخص می‌کند.
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
                        گزینه‌های سرجدول
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-3"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-3"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        ویژگی «گزینه‌های سرجدول» به شما اجازه می‌دهد تا سفارشی‌سازی کنید
                        the appearance of the table header to better match your
                        انتخاب کنید. می‌توانید بین دو نوع مختلف، "تیره" و "روشن"، انتخاب کنید که هر کدام
                        استایل مختلفی را برای سرصفحه جدول ارائه می‌دهند.
                        ارائه یک سبک بصری متمایز برای سربرگ جدول.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="overflow-x-auto">
                              <Table>
                                <Table.Thead variant="dark">
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr>
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>آنجلینا</Table.Td>
                                    <Table.Td>چارلی</Table.Td>
                                    <Table.Td>@angelinajolie</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>برد</Table.Td>
                                    <Table.Td>هانم</Table.Td>
                                    <Table.Td>@bradpitt</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                                    <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                                    <Table.Td>@charliehunnam</Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                              <Table className="mt-5">
                                <Table.Thead variant="light">
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr>
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>آنجلینا</Table.Td>
                                    <Table.Td>چارلی</Table.Td>
                                    <Table.Td>@angelinajolie</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>برد</Table.Td>
                                    <Table.Td>هانم</Table.Td>
                                    <Table.Td>@bradpitt</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                                    <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                                    <Table.Td>@charliehunnam</Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Thead variant="dark">
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>آنجلینا</Table.Td>
                        <Table.Td>چارلی</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>برد</Table.Td>
                        <Table.Td>هانم</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                        <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                  <Table className="mt-5">
                    <Table.Thead variant="light">
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>آنجلینا</Table.Td>
                        <Table.Td>چارلی</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>برد</Table.Td>
                        <Table.Td>هانم</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                        <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در این مثال، دو سرصفحه مختلف جدول را به نمایش می‌گذاریم با استفاده از نوع‌های "تیره" و "روشن":
                        سرصفحه اول با نوع "تیره" طراحی شده است که باعث ایجاد یک پس‌زمینه تیره و متن سفید مشخص می‌شود.
                      </p>
                      <ul className="mt-2 mb-4 leading-relaxed list-decimal ms-7">
                        <li className="mb-0.5">
                          سربرگ اول جدول با نوع "تاریک" طراحی شده است که رنگ پس‌زمینه تاریک و متن سفید ارائه می‌دهد،
                          ویژگی که رنگ پس‌زمینه تاریک و
                          متن سفید ارائه می‌دهد و یک سربرگ متمایز بصری ایجاد می‌کند.
                        </li>
                        <li className="mb-0.5">
                          سرصفحه دوم از نوع "روشن" استفاده می‌کند، که یک پس‌زمینه روشن با متن تیره برای یک ظاهر
                          ملایم‌تر ارائه می‌دهد.
                          ظاهری ظریف.
                        </li>
                      </ul>
                      <p className="leading-relaxed">
                        با استفاده از "گزینه‌های سرصفحه جدول"، می‌توانید سرصفحه جدول خود را با طرح طراحی برنامه‌ی
                        شما هماهنگ کنید و یک رابط کاربری سازگار و جذاب
                        را ایجاد کنید.
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
                        جدول واکنشگرا
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-3"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-3"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        ویژگی "جدول واکنشگرا" اطمینان می‌دهد که محتوای جدول شما به بهترین شکل به اندازه‌گیری‌های مختلف صفحه
                        سازگار باشد، تجربه مشاهده بهینه را برای هر دو اندازه‌ی بزرگ
                        صفحه و دستگاه‌های تلفن همراه کوچک ارائه می‌دهد.
                        هنگامی که قابلیت "جدول واکنشگرا" را فعال می‌کنید، به کاربران اجازه می‌دهد که به صورت افقی به جدول کلی دسترسی داشته باشند،
                        با اطمینان از اینکه هیچ داده‌ای در صفحات کوچک بریده نمی‌شود.
                        برای اسکرول افقی و مشاهده کامل جدول،
                        اطمینان حاصل می‌شود که داده‌ها در صفحات کوچک قطع نمی‌شوند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="overflow-x-auto">
                              <Table>
                                <Table.Thead>
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      ایمیل
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      آدرس
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr>
                                    <Table.Td className="whitespace-nowrap">
                                      1
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      آنجلینا
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      چارلی
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      @angelinajolie
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      angelinajolie@gmail.com
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      260 خیابان و. استورم نیویورک، NY 10025.
                                    </Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td className="whitespace-nowrap">
                                      2
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      برد
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      هانم
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      @bradpitt
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      براد پیت@gmail.com
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      47 خیابان دیویژن بوفالو، NY 14241.
                                    </Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td className="whitespace-nowrap">
                                      3
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      "نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      @charliehunnam
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      charliehunnam@gmail.com
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap">
                                      8023 خیابان آمریج هریمن، NY 10926.
                                    </Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          ایمیل
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          آدرس
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td className="whitespace-nowrap">1</Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          آنجلینا
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          چارلی
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          @angelinajolie
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          angelinajolie@gmail.com
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          260 خیابان و. استورم نیویورک، NY 10025.
                        </Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td className="whitespace-nowrap">2</Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          برد
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          هانم
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          @bradpitt
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          براد پیت@gmail.com
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          47 خیابان دیویژن بوفالو، NY 14241.
                        </Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td className="whitespace-nowrap">3</Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          "نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          @charliehunnam
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          charliehunnam@gmail.com
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          8023 خیابان آمریج هریمن، NY 10926.
                        </Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در این مثال، یک «جدول واکنشگرا» توسط
                        بسته‌بندی آن داخل یک ظرف با سرریز افقی ایجاد می‌شود.
                        این امکان را به کاربران می‌دهد تا به صورت افقی اسکرول کنند و جدول کامل را ببینند،
                        اطمینان حاصل می‌شود که تمام ستون‌ها و داده‌ها
                        قابل دسترسی باقی بماند روی صفحات کوچک. هنگامی که می‌خواهید جدول خود
                        واکنشگرا را استفاده کنید.
                        جهت حفظ خوانایی و قابلیت استفاده را در انواع
                        دستگاه‌ها، بدون توجه به اندازه صفحه نمایش.
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
                        جدول کوچک
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-3"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-3"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        اجازه می‌دهد یک جدول کوچک و کارآمد فضا ایجاد کنید، ایده‌آل برای مواقعی که نیاز به نمایش داده‌های جدولی در فضای محدود دارید
                        یا تأکید بر یک طراحی کم حجم. با اضافه کردن
                        ویژگی sm (small) به جدول، می‌توانید اندازه کلی جدول را کاهش دهید و آن را مناسب‌تر برای
                        نمایش اطلاعات به صورت مختصر کنید.
                        با اضافه کردن ویژگی sm (کوچک) به جدول، می‌توانید اندازه کلی جدول را کاهش دهید و
                        آن را مناسب‌تر برای
                        نمایش اطلاعات به صورت مختصر کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="overflow-x-auto">
                              <Table sm>
                                <Table.Thead>
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr>
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>آنجلینا</Table.Td>
                                    <Table.Td>چارلی</Table.Td>
                                    <Table.Td>@angelinajolie</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>برد</Table.Td>
                                    <Table.Td>هانم</Table.Td>
                                    <Table.Td>@bradpitt</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                                    <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                                    <Table.Td>@charliehunnam</Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="overflow-x-auto">
                  <Table sm>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>آنجلینا</Table.Td>
                        <Table.Td>چارلی</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>برد</Table.Td>
                        <Table.Td>هانم</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                        <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در این مثال، یک "جدول کوچک" با اعمال
                        ویژگی sm به جزئیات جدول ایجاد شده است. این باعث کاهش
                        اندازه کلی جدول می‌شود و
                        آن را مناسب برای مواقعی که فضا محدود است. از مجموعه
                        جدول کوچک استفاده کنید هنگامی که نیاز دارید داده‌های جدولی را نمایش دهید
                        در یک فضای محدود یا زمانی که می‌خواهید
                        طراحی ساده و کم حجمی را حفظ کنید.
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
                        جدول سطرهای موخط
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ms-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-3"
                          className="ms-0 sm:ms-2"
                        >
                          نمایش کد نمونه
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-3"
                          onClick={toggle}
                          className="ms-3 me-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        ویژگی «جدول سطرهای موخط» خوانایی و جذابیت بصری جدول‌های شما را با اعمال رنگ‌های پس‌زمینه متناوب به سطرها افزایش می‌دهد.
                        خوانایی و جذابیت بصری جداول خود را با اعمال
                        تغییر رنگ‌های پس‌زمینه متناوب به ردیف‌ها افزایش می‌دهد. این باعث می‌شود
                        تمایز واضح بین ردیف‌های زوج و فرد ایجاد شود، که این کار باعث می‌شود
                        برای کاربران آسان‌تر شود تا داده‌های جدولی را پیگیری و تفسیر کنند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="overflow-x-auto">
                              <Table striped>
                                <Table.Thead>
                                  <Table.Tr>
                                    <Table.Th className="whitespace-nowrap">
                                      #
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      نام کاربری
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      جولی
                                    </Table.Th>
                                    <Table.Th className="whitespace-nowrap">
                                      پیت
                                    </Table.Th>
                                  </Table.Tr>
                                </Table.Thead>
                                <Table.Tbody>
                                  <Table.Tr>
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>آنجلینا</Table.Td>
                                    <Table.Td>چارلی</Table.Td>
                                    <Table.Td>@angelinajolie</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>برد</Table.Td>
                                    <Table.Td>هانم</Table.Td>
                                    <Table.Td>@bradpitt</Table.Td>
                                  </Table.Tr>
                                  <Table.Tr>
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                                    <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                                    <Table.Td>@charliehunnam</Table.Td>
                                  </Table.Tr>
                                </Table.Tbody>
                              </Table>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="overflow-x-auto">
                  <Table striped>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          نام کاربری
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          جولی
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          پیت
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>آنجلینا</Table.Td>
                        <Table.Td>چارلی</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>برد</Table.Td>
                        <Table.Td>هانم</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>مثال بالا نشان می‌دهد که چگونه یک جدول پایه را با ستون‌های "نام اول"، "نام آخر" و</Table.Td>
                        <Table.Td>"نام کاربری" ایجاد کنید. این جدول آسان به خواندن است و می‌توانید آن را برای نیازهای برنامه‌ی خود سفارشی‌سازی کنید. از</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        در این مثال، یک "جدول ردیف‌های خط‌خطی" با اضافه کردن ویژگی خط‌خطی به جزئیات جدول ایجاد شده است.
                        ایجاد می‌شود. ردیف‌های زوج با یک رنگ پس‌زمینه طراحی شده‌اند،
                        در حالی که ردیف‌های فرد با پس‌زمینه پیش‌فرض باقی می‌مانند. این الگوی متناوب بهبود می‌بخشد
                        جدایی بصری ردیف‌ها و خوانایی کلی جدول را افزایش می‌دهد. از مجموعه
                        جدول ردیف‌های خط‌خطی استفاده کنید هنگامی که می‌خواهید داده‌های جدولی را به صورت بصری
                        منظم و آسان خوانده شوند.
                        از جزئیات "جدول ردیف‌های خط‌خطی" استفاده کنید
                        زمانی که می‌خواهید داده‌های جدولی را به صورت بصری
                        منظم و قابل خواندن ارائه دهید.
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
                    <div className="-mt-px">جدول</div>
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
                          <Table.Td>`dark`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            فعال کردن سبک حالت تاریک برای جدول.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`bordered`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>افزودن حاشیه به سلول‌های جدول.</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`hover`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            فعال کردن افکت‌های هاور بر روی سطرهای جدول.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`striped`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            تغییر رنگ‌های پس‌زمینه سطرها به صورت متناوب برای بهبود
                            خوانایی.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`sm`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            کاهش اندازه جدول برای نمایش جدولی
                            جمع و جورتر.
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Table.Thead</div>
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
                          <Table.Td>`default`, `light`, `dark`</Table.Td>
                          <Table.Td>
                            استایل نوعی را برای سر جدول تنظیم می‌کند.
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Tab.Tbody</div>
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
                    <div className="-mt-px">Table.Tr</div>
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
                    <div className="-mt-px">Table.Th</div>
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
                    <div className="-mt-px">Table.Td</div>
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
                    جدول پایه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    جدول با حاشیه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    جدول قابل هاور
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    وضعیت ردیف‌های جدول
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    گزینه‌های سرجدول
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    جدول واکنشگرا
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    جدول کوچک
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    ردیف‌های خط‌خطی
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
