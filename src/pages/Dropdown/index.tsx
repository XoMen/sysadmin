import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormInput, FormSwitch } from "@/components/Base/Form";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            کشویی
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            از انعطاف‌پذیری مؤلفه کشویی ما برای ایجاد
            منوهای تعاملی و گزینه‌های انتخابی در برنامه‌های وب شما.
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
                        منوی پایه
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
                        منوهای کشویی واسط کاربر اصلی هستند
                        که به کاربران اجازه می‌دهند از یک لیست گزینه انتخاب کنند
                        گزینه‌ها در یک فرمت قابل جمع شدن. این بخش شامل موارد زیر می‌شود:
                        ایجاد و استفاده از منوهای پایه در برنامه‌های وب شما با استفاده از مؤلفه `منو`.
                        برنامه‌هایی که از مؤلفه منو استفاده می‌کنند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  نمایش منو
                                </Menu.Button>
                                <Menu.Items className="w-40">
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    نمایش منو
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>منو جدید</Menu.Item>
                    <Menu.Item>حذف منو</Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        با کد ارائه شده آزمایش کنید و آن را سفارشی سازی کنید تا
                        به نیازهای خاص شما پاسخ دهد. منوها می‌توانند تجربه کاربر را بهبود بخشید
                        با ساده‌سازی ناوبری و تعامل در
                        برنامه شما.
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
                        منوی سربرگ و پاورقی
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
                        منوهای کشویی اغلب نیاز به عناصر اضافی مانند
                        سربرگ‌ها و پاورقی‌ها دارند تا زمینه یا اطلاعات اضافی را ارائه دهند.
                        این بخش به چگونگی ایجاد منوها با هم سربرگ و پاورقی با استفاده از مؤلفه `منو` پرداخته می‌شود.
                        با هم سربرگ و پاورقی با استفاده از مؤلفه `منو`
                        component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  نمایش منو
                                </Menu.Button>
                                <Menu.Items className="w-56">
                                  <Menu.Header>گزینه‌های صادرات</Menu.Header>
                                  <Menu.Divider />
                                  <Menu.Item>
                                    <Lucide
                                      icon="Activity"
                                      className="w-4 h-4 me-2"
                                    />
                                    انگلیسی
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="Box"
                                      className="w-4 h-4 me-2"
                                    />
                                    اندونزی
                                    <div className="px-1 ms-auto text-xs text-white rounded-full bg-danger">
                                      10
                                    </div>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="PanelsTopLeft"
                                      className="w-4 h-4 me-2"
                                    />
                                    انگلیسی
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="PanelRight"
                                      className="w-4 h-4 me-2"
                                    />
                                    اندونزی
                                  </Menu.Item>
                                  <Menu.Divider />
                                  <Menu.Footer>
                                    <Button
                                      type="button"
                                      variant="primary"
                                      className="px-2 py-1"
                                    >
                                      تنظیمات
                                    </Button>
                                    <Button
                                      type="button"
                                      variant="secondary"
                                      className="px-2 py-1 ms-auto"
                                    >
                                      مشاهده پروفایل
                                    </Button>
                                  </Menu.Footer>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    نمایش منو
                  </Menu.Button>
                  <Menu.Items className="w-56">
                    <Menu.Header>گزینه‌های صادرات</Menu.Header>
                    <Menu.Divider />
                    <Menu.Item>
                      <Lucide icon="Activity" className="w-4 h-4 me-2" />
                      انگلیسی
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Box" className="w-4 h-4 me-2" />
                      اندونزی
                      <div className="px-1 ms-auto text-xs text-white rounded-full bg-danger">
                        10
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="PanelsTopLeft" className="w-4 h-4 me-2" />
                      انگلیسی
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Sidebar" className="w-4 h-4 me-2" />
                      اندونزی
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Footer>
                      <Button
                        type="button"
                        variant="primary"
                        className="px-2 py-1"
                      >
                        تنظیمات
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        className="px-2 py-1 ms-auto"
                      >
                        مشاهده پروفایل
                      </Button>
                    </Menu.Footer>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        منوهای با سربرگ و پاورقی یک ساختار فرماندهی شده را فراهم می‌کنند
                        برای ارائه گزینه‌ها و اطلاعات به کاربران. آنها
                        به طور خاص مفید هستند در مواقعی که نیاز دارید
                        به گروه‌بندی موارد مرتبط یا ارائه زمینه‌ای اضافی.
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
                        منو آیکون
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
                        منوهای آیکون می‌توانند نشانه‌های بصری اضافه کنند و تجربه کاربر را بهبود بخشند
                        هنگام انتخاب گزینه‌ها. این بخش به چگونگی ایجاد منوها با آیکون با استفاده از مؤلفه `منو` پرداخته می‌شود.
                        چگونگی ایجاد منوهای دارای آیکون با استفاده از مؤلفه منو
                        component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  نمایش منو
                                </Menu.Button>
                                <Menu.Items className="w-48">
                                  <Menu.Item>
                                    <Lucide
                                      icon="FilePen"
                                      className="w-4 h-4 me-2"
                                    />{" "}
                                    منو جدید
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="Trash"
                                      className="w-4 h-4 me-2"
                                    />{" "}
                                    حذف منو
                                  </Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    نمایش منو
                  </Menu.Button>
                  <Menu.Items className="w-48">
                    <Menu.Item>
                      <Lucide icon="Edit2" className="w-4 h-4 me-2" /> New
                      Dropdown
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Trash" className="w-4 h-4 me-2" />{" "}
                      حذف منو
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        منوهای آیکون به کاربران کمک بصری می‌کنند زمانی که
                        گزینه‌ها را انتخاب می‌کنند و رابط کاربری را بیشتر خرد می‌کنند
                        و کاربرپسندتر می‌سازند. با آیکون‌های مختلف آزمایش کنید و
                        استایل‌ها را برای ایجاد منوهایی که بهترین
                        مناسبی برای طراحی و نیازهای کاربر شما هستند.
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
                        منو با دکمه بستن
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
                        منوهای با دکمه بستن یک راه کاربرپسند برای
                        ارائه گزینه‌ها هستند در حالی که به کاربران اجازه می‌دهند تا
                        منو را از بین ببرند هنگام لازم. این بخش به چگونگی ایجاد
                        منوها با دکمه بستن با استفاده از مؤلفه `منو` پرداخته می‌شود.
                        component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              <Popover className="inline-block">
                                {({ close }) => (
                                  <>
                                    <Popover.Button
                                      as={Button}
                                      variant="primary"
                                    >
                                      منوی فیلتر
                                      <Lucide
                                        icon="ChevronDown"
                                        className="w-4 h-4 ms-2"
                                      />
                                    </Popover.Button>
                                    <Popover.Panel placement="bottom-start">
                                      <div className="p-2">
                                        <div>
                                          <div className="text-xs text-start">
                                            From
                                          </div>
                                          <FormInput
                                            type="text"
                                            className="flex-1 mt-2"
                                            placeholder="example@gmail.com"
                                          />
                                        </div>
                                        <div className="mt-3">
                                          <div className="text-xs text-start">
                                            To
                                          </div>
                                          <FormInput
                                            type="text"
                                            className="flex-1 mt-2"
                                            placeholder="example@gmail.com"
                                          />
                                        </div>
                                        <div className="flex items-center mt-3">
                                          <Button
                                            variant="secondary"
                                            onClick={() => {
                                              close();
                                            }}
                                            className="w-32 ms-auto"
                                          >
                                            Close
                                          </Button>
                                          <Button
                                            variant="primary"
                                            className="w-32 ms-2"
                                          >
                                            Search
                                          </Button>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </>
                                )}
                              </Popover>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="text-center">
                <Popover className="inline-block">
                  {({ close }) => (
                    <>
                      <Popover.Button
                        as={Button}
                        variant="primary"
                      >
                        منوی فیلتر
                        <Lucide
                          icon="ChevronDown"
                          className="w-4 h-4 ms-2"
                        />
                      </Popover.Button>
                      <Popover.Panel placement="bottom-start">
                        <div className="p-2">
                          <div>
                            <div className="text-xs text-start">From</div>
                            <FormInput
                              type="text"
                              className="flex-1 mt-2"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="mt-3">
                            <div className="text-xs text-start">To</div>
                            <FormInput
                              type="text"
                              className="flex-1 mt-2"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="flex items-center mt-3">
                            <Button
                              variant="secondary"
                              onClick={() => {
                                close();
                              }}
                              className="w-32 ms-auto"
                            >
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              className="w-32 ms-2"
                            >
                              Search
                            </Button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        منوهای با دکمه بستن تعامل بهتری را ارائه می‌دهند
                        که به کاربران اجازه می‌دهند به راحتی منو را از بین ببرند
                        هنگامی که دیگر لازم نیست. ظاهر و رفتار دکمه بستن را به نیازهای خود سفارشی سازی کنید
                        ظاهر و رفتار دکمه بستن را به سبک و نیازهای برنامه‌ی شما تنظیم کنید.
                        ایجاد کنید.
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
                        منوی مرتبط
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
                        منوهای مرتبط زمانی که یک لیست طولانی دارید مفید هستند
                        برای نمایش در یک منوی کشویی. با محدود کردن
                        ارتفاع منو و فعال کردن اسکرولینگ، شما می‌توانید
                        یک رابط کاربری کمتر و کاربرپسندتر ارائه دهید.
                        این بخش به چگونگی ایجاد منوهای مرتبط با استفاده از مؤلفه `منو` پرداخته می‌شود.
                        استفاده از مؤلفه Menu.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  نمایش منو
                                </Menu.Button>
                                <Menu.Items className="w-40 h-32 overflow-y-auto">
                                  <Menu.Item>ژانویه</Menu.Item>
                                  <Menu.Item>فوریه</Menu.Item>
                                  <Menu.Item>مارس</Menu.Item>
                                  <Menu.Item>ژوئن</Menu.Item>
                                  <Menu.Item>جولای</Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    نمایش منو
                  </Menu.Button>
                  <Menu.Items className="w-40 h-32 overflow-y-auto">
                    <Menu.Item>ژانویه</Menu.Item>
                    <Menu.Item>فوریه</Menu.Item>
                    <Menu.Item>مارس</Menu.Item>
                    <Menu.Item>ژوئن</Menu.Item>
                    <Menu.Item>جولای</Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        منوهای مرتبط یک راه حل عملی هستند زمانی که با مواجهه
                        با لیست‌های طولانی از گزینه‌ها در یک فضای محدود. با
                        فعال کردن اسکرولینگ، شما می‌توانید منو را کم حجم نگه دارید
                        و کاربرپسند. ظاهر و رفتار اسکرولبار و منو را سفارشی سازی کنید
                        با سبک و نیازهای برنامه‌ی شما هماهنگ کنید.
                        سبک و نیازهای برنامه.
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
                        منوی سربرگ و آیکون
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
                        منوهای سربرگ و آیکون یک راه عالی برای دسته بندی هستند
                        و بهبود بصری منوهای کشویی شما هستند. این بخش
                        به چگونگی ایجاد منوهای با سربرگ و آیکون پرداخته می‌شود
                        استفاده از مؤلفه Menu.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center">
                              <Menu>
                                <Menu.Button as={Button} variant="primary">
                                  نمایش منو
                                </Menu.Button>
                                <Menu.Items className="w-40">
                                  <Menu.Header>ابزارهای صادرات</Menu.Header>
                                  <Menu.Divider />
                                  <Menu.Item>
                                    <Lucide
                                      icon="Printer"
                                      className="w-4 h-4 me-2"
                                    />
                                    چاپ
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="ExternalLink"
                                      className="w-4 h-4 me-2"
                                    />
                                    اکسل
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="FileText"
                                      className="w-4 h-4 me-2"
                                    />
                                    CSV
                                  </Menu.Item>
                                  <Menu.Item>
                                    <Lucide
                                      icon="Archive"
                                      className="w-4 h-4 me-2"
                                    />
                                    PDF
                                  </Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="primary"
                  >
                    نمایش منو
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Header>ابزارهای صادرات</Menu.Header>
                    <Menu.Divider />
                    <Menu.Item>
                      <Lucide icon="Printer" className="w-4 h-4 me-2" />
                      چاپ
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide
                        icon="ExternalLink"
                        className="w-4 h-4 me-2"
                      />
                      اکسل
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="FileText" className="w-4 h-4 me-2" />
                      CSV
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="Archive" className="w-4 h-4 me-2" />
                      PDF
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        منوهای سربرگ و آیکون یک راه واضح و بصری ارائه می‌دهند
                        برای ارائه موارد منو گروه‌بندی شده. ظاهر و رفتار سربرگ، آیکون‌ها و
                        موارد منو را سفارشی کنید تا با سبک و نیازهای برنامه‌ی شما هماهنگ شود.
                        موارد منو را با سبک برنامه‌ی خود هماهنگ کنید
                        و نیازها.
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
                        قرارگیری منو کشویی
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
                        قرارگیری منو کشویی به شما امکان می‌دهد که کنترل کنید که
                        منو کشویی در رابطه با المان محرکی که
                        آن ظاهر می‌شود را کنترل کنید. این بخش به چگونگی مشخص کردن
                        قرارگیری منو کشویی با استفاده از مؤلفه `منو` پرداخته می‌شود.
                        component.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  شروع بالا
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="top-start"
                                >
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  بالا
                                </Menu.Button>
                                <Menu.Items className="w-40" placement="top">
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  پایان بالا
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="top-end"
                                >
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  شروع راست
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="right-start"
                                >
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  راست
                                </Menu.Button>
                                <Menu.Items className="w-40" placement="right">
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  پایان راست
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="right-end"
                                >
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  پایان پایین
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="bottom-end"
                                >
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  پایین
                                </Menu.Button>
                                <Menu.Items className="w-40" placement="bottom">
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  شروع پایین
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="bottom-start"
                                >
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  شروع چپ
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="left-start"
                                >
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  چپ
                                </Menu.Button>
                                <Menu.Items className="w-40" placement="left">
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                              <Menu className="inline-block mb-2 me-1">
                                <Menu.Button
                                  as={Button}
                                  variant="primary"
                                  className="w-32"
                                >
                                  پایان چپ
                                </Menu.Button>
                                <Menu.Items
                                  className="w-40"
                                  placement="left-end"
                                >
                                  <Menu.Item>منو جدید</Menu.Item>
                                  <Menu.Item>حذف منو</Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="text-center">
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      شروع بالا
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="top-start">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      بالا
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="top">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      پایان بالا
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="top-end">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      شروع راست
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="right-start">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      راست
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="right">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      پایان راست
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="right-end">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      پایان پایین
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="bottom-end">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      پایین
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="bottom">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      شروع پایین
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="bottom-start">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      شروع چپ
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="left-start">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      چپ
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="left">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Menu className="inline-block mb-2 me-1">
                    <Menu.Button
                      as={Button}
                      variant="primary"
                      className="w-32"
                    >
                      پایان چپ
                    </Menu.Button>
                    <Menu.Items className="w-40" placement="left-end">
                      <Menu.Item>منو جدید</Menu.Item>
                      <Menu.Item>حذف منو</Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        قرارگیری منو کشویی یک جنبه حیاتی از طراحی منو کشویی است.
                        با کنترل جایی که منو کشویی ظاهر می‌شود، می‌توانید
                        تضمین کنید که در چیدمان برنامه‌ی شما جا بیافتد
                        و تجربه‌ی کاربری بی‌سر و صدا ارائه دهید.
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
                    <div className="-mt-px">منو</div>
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
                    <div className="-mt-px">Menu.Button</div>
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
                            عنصر HTML یا نوع مؤلفه React برای رندر کردن
                            به عنوان دکمه
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Menu.Items</div>
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
                          <Table.Td>`placement`</Table.Td>
                          <Table.Td>
                            `top-start`, `top`, `top-end`, `right-start`,
                            `right`, `right-end`, `bottom-end`, `bottom`,
                            `bottom-start`, `left-start`, `left`, `left-end`
                          </Table.Td>
                          <Table.Td>
                            موقعیت منو کشویی را تعیین می‌کند
                            نسبت به عنصر محرکی که مشخص کننده منو کشویی است. از گزینه‌ها انتخاب کنید
                            مانند 'بالا'، 'پایین'، 'چپ' یا 'راست' برای
                            کنترل جهتی که منو در آن گسترش می‌یابد.
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Menu.Item</div>
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
                    <div className="-mt-px">Menu.Divider</div>
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
                    <div className="-mt-px">Menu.Header</div>
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
                    <div className="-mt-px">Menu.Footer</div>
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
                    منوی پایه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    منوی سربرگ و پاورقی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    منو آیکون
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    منو با دکمه بستن
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    منوی مرتبط
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    منوی سربرگ و آیکون
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    قرارگیری منو کشویی
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
