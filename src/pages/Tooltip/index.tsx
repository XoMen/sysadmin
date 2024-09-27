import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import Tippy from "@/components/Base/Tippy";
import Button from "@/components/Base/Button";
import TippyContent from "@/components/Base/TippyContent";
import users from "@/fakers/users";
import SimpleLineChart1 from "@/components/SimpleLineChart1";
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
            راهنمای ابزار
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            چگونگی استفاده از انعطاف پذیری اجزای ابزارک ما برای افزودن راهنماها و اطلاعات اضافی به رابط کاربری خود را کشف کنید.
            راهنماها و اطلاعات اضافی به رابط کاربری خود.
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
                        راهنمای ابتدایی
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
                        راهنماها راهی مفید برای ارائه اطلاعات اضافی یا توضیحات برای عناصر در یک صفحه وب هستند.
                        آنها معمولا زمانی ظاهر می شوند که کاربران روی عنصر موسیقی کرده و یا با آن تعامل دارند.
                        آنها معمولا زمانی ظاهر می شوند که کاربران روی عنصر موسیقی کرده و یا با آن تعامل دارند.
                        با ارائه زمینه و روشن شدن.
                        این بخش توضیح می دهد که چگونه راهنماهای ابتدایی را در برنامه وب خود اجرا کنید.
                        برنامه وب خود.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              <Tippy
                                as={Button}
                                variant="primary"
                                content="This is awesome tooltip example!"
                              >
                                نمایش راهنما
                              </Tippy>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                <Tippy
                  as={Button}
                  variant="primary"
                  content="This is awesome tooltip example!"
                >
                  نمایش راهنما
                </Tippy>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        بخش "راهنمای ابتدایی" نشان داده است چگونه از راهنماها برای ارائه اطلاعات اضافی و راهنمایی به کاربران زمانی که با عناصر در صفحه وب شما تعامل دارند، استفاده کنید.
                        راهنماها برای ارائه اطلاعات اضافی و راهنمایی به
                        به کاربران زمانی که با عناصر در صفحه وب شما تعامل دارند.
                        با پیروی از این رهنمودها و بهترین روش ها،
                        می توانید تجربه کاربر را ارتقا دهید و زمینه ارزشمندی را فراهم کنید
                        بدون اضافه کردن UI شما.
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
                        راهنمای کلیک بر روی
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
                        راهنمای کلیک بر روی یک نوع از راهنماهای سنتی است که ظاهر می شود زمانی که کاربر بر روی یک عنصر کلیک می کند
                        به جای هواپیما رفتن به آن. این بخش توضیح می دهد که چگونه
                        برای پیاده سازی راهنماهای که زمانی ظاهر می شود که کاربران روی
                        عناصر در برنامه وب خود کلیک کنند.
                        برنامه وب خود.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              <Tippy
                                as={Button}
                                variant="primary"
                                content="This is awesome tooltip example!"
                                options={{
                                  trigger: "click",
                                }}
                              >
                                نمایش راهنما
                              </Tippy>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                <Tippy
                  as={Button}
                  variant="primary"
                  content="This is awesome tooltip example!"
                  options={{
                    trigger: "click",
                  }}
                >
                  نمایش راهنما
                </Tippy>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        بخش "راهنمای کلیک بر روی" نشان داده است که چگونه
                        از راهنماها استفاده کنید که ظاهر می شود زمانی که کاربر بر روی
                        عناصر در برنامه وب شما کلیک می کند. با پیروی از این
                        راهنمودها و بهترین روش ها، می توانید
                        اطلاعات اضافی و زمینه را به کاربران خود زمانی که
                        آنها نیاز دارند، تجربه کاربر کلی را بهبود بخشید.
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
                        راهنمای نور
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
                        یک "راهنمای نور" یک نوع از راهنمایی است که اطلاعات اضافی را فراهم می کند زمانی که کاربر روی
                        عنصر نوری می کند. این بخش توضیح می دهد که چگونه
                        راهنماهای نور را در برنامه وب خود پیاده سازی کنید.
                        بخش "راهنمای نور" نشان داده است چگونه از راهنماهای نور برای ارائه اطلاعات اضافی و زمینه به کاربران زمانی که آنها نیاز دارند، استفاده کنید.
                        برنامه وب خود را پیاده سازی کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              <Tippy
                                as={Button}
                                variant="primary"
                                content="This is awesome tooltip example!"
                                options={{
                                  theme: "light",
                                }}
                              >
                                نمایش راهنما
                              </Tippy>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                <Tippy
                  as={Button}
                  variant="primary"
                  content="This is awesome tooltip example!"
                  options={{
                    theme: "light",
                  }}
                >
                  نمایش راهنما
                </Tippy>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        بخش "راهنمای نور" نشان داده است چگونه استفاده کنید
                        راهنماهایی که اطلاعات اضافی را در هنگام رویت المان‌ها در برنامه وب‌شما فراهم می‌کنند. با پیروی از این راهنماها و بهترین روش‌ها، می‌توانید درک کاربر را افزایش دهید و تجربه کاربری کلی را بهبود ببخشید.
                        کاربران روی المان‌ها در برنامه وب‌شما را هنگام رویت، توضیحات ارائه می‌دهند. با پیروی از این راهنماها و بهترین روش‌ها، می‌توانید درک کاربر را افزایش دهید و تجربه کاربری کلی را بهبود ببخشید.
                        با پیروی از این راهنماها و بهترین روش‌ها، می‌توانید
                        فهم کاربر را ارتقا داده و تجربه کاربری کلی را بهبود بخشید.
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
                        محتوای راهنمای سفارشی
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
                        راهنماهای سفارشی به شما امکان ایجاد راهنماها با اطلاعات شخصی و پویا را می‌دهد.
                        با استفاده از اطلاعات شخصی و پویا. به جای
                        استفاده از متن استاتیک، می‌توانید راهنماها را با
                        اطلاعات پویا مانند تصاویر، آیکون‌ها یا حتی اجزای React پر کنید.
                        این بخش توضیح می‌دهد چگونه
                        راهنمای سفارشی را در برنامه وب خود پیاده‌سازی کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Custom Tooltip Toggle */}
                            <div className="text-center">
                              <Button
                                variant="primary"
                                data-tooltip="custom-tooltip-content"
                              >
                                نمایش راهنما
                              </Button>
                            </div>
                            {/* END: Custom Tooltip Toggle */}
                            {/* BEGIN: Custom Tooltip Content */}
                            <div className="tooltip-content">
                              <TippyContent to="custom-tooltip-content">
                                <div className="relative flex items-center px-1 py-2">
                                  <div className="w-10 h-10 image-fit">
                                    <img
                                      alt="تیل وایز - قالب داشبورد مدیریتی"
                                      className="rounded-full"
                                      src={users.fakeUsers()[0].photo}
                                    />
                                  </div>
                                  <div className="ms-4 me-auto">
                                    <div className="font-medium leading-normal whitespace-nowrap dark:text-slate-200">
                                      {users.fakeUsers()[0].name}
                                    </div>
                                    <div className="mt-0.5 text-xs text-slate-500 whitespace-nowrap dark:text-slate-400">
                                      تیلویند سی‌اس‌اس ۳+ Admin داشبورد Template
                                    </div>
                                  </div>
                                </div>
                              </TippyContent>
                            </div>
                            {/* END: Custom Tooltip Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              {/* BEGIN: Custom Tooltip Toggle */}
              <div className="text-center">
                <Button
                  variant="primary"
                  data-tooltip="custom-tooltip-content"
                >
                  نمایش راهنما
                </Button>
              </div>
              {/* END: Custom Tooltip Toggle */}
              {/* BEGIN: Custom Tooltip Content */}
              <div className="tooltip-content">
                <TippyContent to="custom-tooltip-content">
                  <div className="relative flex items-center px-1 py-2">
                    <div className="w-10 h-10 image-fit">
                      <img
                        alt="تیل وایز - قالب داشبورد مدیریتی"
                        className="rounded-full"
                        src={users.fakeUsers()[0].photo}
                      />
                    </div>
                    <div className="ms-4 me-auto">
                      <div className="font-medium leading-normal whitespace-nowrap dark:text-slate-200">
                        {users.fakeUsers()[0].name}
                      </div>
                      <div className="mt-0.5 text-xs text-slate-500 whitespace-nowrap dark:text-slate-400">
                        تیلویند سی‌اس‌اس ۳+ Admin داشبورد Template
                      </div>
                    </div>
                  </div>
                </TippyContent>
              </div>
              {/* END: Custom Tooltip Content */}
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        بخش "محتوای راهنمای سفارشی" نشان داده است
                        چگونه راهنماها را با اطلاعات شخصی و پویا ایجاد کنید.
                        این امکان را به شما می‌دهد تا به کاربران خود راهنماهایی با راهنماهایی غنی و
                        مربوط به متن ارائه دهید. با بهره‌مندی از این ویژگی،
                        می‌توانید تجربه کاربری کلی را بهبود ببخشید و
                        قابلیت استفاده از برنامه وب خود را افزایش دهید.
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
                        راهنمای نمودار
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
                        راهنماهای نمودار جزء مهمی از بصیرت‌های ارزشمندی هستند که
                        هنگام تعامل با نمودارها و نمودارها، به کاربران ارائه می‌دهند.
                        این بخش توضیح می‌دهد چگونه راهنماهای نمودار را پیاده‌سازی و سفارشی کنید
                        در برنامه وب خود.
                        در برنامه وب خود.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Custom Tooltip Toggle */}
                            <div className="text-center">
                              <Button
                                variant="primary"
                                data-tooltip="chart-tooltip"
                              >
                                نمایش راهنما
                              </Button>
                            </div>
                            {/* END: Custom Tooltip Toggle */}
                            {/* BEGIN: Custom Tooltip Content */}
                            <div className="tooltip-content">
                              <TippyContent
                                to="chart-tooltip"
                                className="px-1 py-2"
                              >
                                <div className="font-medium dark:text-slate-200">
                                  ارزش خالص
                                </div>
                                <div className="flex items-center mt-2 sm:mt-0">
                                  <div className="flex w-20 me-2 dark:text-slate-400">
                                    نقطه قوت منحصر به فرد:
                                    <span className="ms-auto font-medium text-success">
                                      +23%
                                    </span>
                                  </div>
                                  <div className="w-24 sm:w-32 lg:w-56">
                                    <SimpleLineChart1 height={30} />
                                  </div>
                                </div>
                              </TippyContent>
                            </div>
                            {/* END: Custom Tooltip Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              {/* BEGIN: Custom Tooltip Toggle */}
              <div className="text-center">
                <Button
                  variant="primary"
                  data-tooltip="chart-tooltip"
                >
                  نمایش راهنما
                </Button>
              </div>
              {/* END: Custom Tooltip Toggle */}
              {/* BEGIN: Custom Tooltip Content */}
              <div className="tooltip-content">
                <TippyContent to="chart-tooltip" className="px-1 py-2">
                  <div className="font-medium dark:text-slate-200">
                    ارزش خالص
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <div className="flex w-20 me-2 dark:text-slate-400">
                      نقطه قوت منحصر به فرد:
                      <span className="ms-auto font-medium text-success">
                        +23%
                      </span>
                    </div>
                    <div className="w-24 sm:w-32 lg:w-56">
                      <SimpleLineChart1 height={30} />
                    </div>
                  </div>
                </TippyContent>
              </div>
              {/* END: Custom Tooltip Content */}
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        بخش "راهنمای نمودار" نشان داده است چگونه
                        راهنماهای نمودار و داده‌های خود را سفارشی کنید.
                        با پیاده‌سازی راهنماهای نمودار طراحی شده به خوبی،
                        می‌توانید به کاربران بینش‌های ارزشمندی ارائه دهید،
                        فهم آن‌ها از داده‌ها را ارتقا داده و
                        مشارکت کاربران را بهبود ببخشید.
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
                    <div className="-mt-px">تیپی</div>
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
                            `(el: PopperElement | null) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            تابعی برای دریافت مرجع به عنصر Popper
                            or null
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`content`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            محتوایی که در راهنما نمایش داده می‌شود
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`as`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            نوع عنصر HTML یا مولفه React برای نمایش
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`options`</Table.Td>
                          <Table.Td>`Props`</Table.Td>
                          <Table.Td>
                            گزینه‌های اضافی برای سفارشی‌سازی راهنما
                            ظاهر و رفتار
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">TippyContent</div>
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
                          <Table.Td>`to`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            انتخاب کننده عنصر هدف برای راهنما
                            (استفاده از ویژگی data-tooltip)
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: HTMLElement | null) =&gt; HTMLElement`
                          </Table.Td>
                          <Table.Td>
                            تابعی برای دریافت مرجع به عنصر راهنما
                            or null
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`options`</Table.Td>
                          <Table.Td>`Props`</Table.Td>
                          <Table.Td>
                            گزینه‌های اضافی برای سفارشی‌سازی راهنما
                            ظاهر و رفتار
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
                    راهنمای ابتدایی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    راهنمای کلیک بر روی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    راهنمای نور
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    محتوای راهنمای سفارشی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    راهنمای نمودار
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
