import clsx from "clsx";
import _ from "lodash";
import { useState } from "react";
import Table from "@/components/Base/Table";
import TomSelect from "@/components/Base/TomSelect";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";

function Main() {
  const [select, setSelect] = useState("1");
  const [selectMultiple, setSelectMultiple] = useState(["1", "3"]);
  const [selectHeader, setSelectHeader] = useState(["2", "3", "5"]);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            انتخاب تام
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            قدرت اجزای انتخاب تام ما را برای ایجاد
            ورودی‌های انتخابی قابل تنظیم و کاربرپسند در برنامه‌های وب خود کشف کنید.
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
                        انتخاب ابتدایی
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
                        اجزای "انتخاب ابتدایی" یک منوی کشویی ساده فراهم می‌کند
                        برای انتخاب گزینه‌ها از لیست است. این یک
                        عنصر رابط کاربری اساسی برای جمع‌آوری ورودی کاربر در
                        فرم یک گزینه از گزینه‌های متعدد است.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Basic Select */}
                            <div>
                              <label>پایه</label>
                              <div className="mt-2">
                                <TomSelect
                                  value={select}
                                  onChange={(e) => {
                                    setSelect(e.target.value);
                                  }}
                                  options={{
                                    placeholder: "انتخاب your favorite actors",
                                  }}
                                  className="w-full"
                                >
                                  <option value="1">لئوناردو دی‌کاپریو</option>
                                  <option value="2">جانی دیپ</option>
                                  <option value="3">رابرت داونی‌ جونیور</option>
                                  <option value="4">ساموئل ال. جکسون</option>
                                  <option value="5">مورگان فریمن</option>
                                </TomSelect>
                              </div>
                            </div>
                            {/* END: Basic Select */}
                            {/* BEGIN: Nested Select */}
                            <div className="mt-3">
                              <label>تودرتو</label>
                              <div className="mt-2">
                                <TomSelect
                                  value={select}
                                  onChange={(e) => {
                                    setSelect(e.target.value);
                                  }}
                                  options={{
                                    placeholder: "انتخاب your favorite actors",
                                  }}
                                  className="w-full"
                                >
                                  <optgroup label="American Actors">
                                    <option value="1">لئوناردو دی‌کاپریو</option>
                                    <option value="2">جانی دیپ</option>
                                    <option value="3">رابرت داونی‌ جونیور</option>
                                    <option value="4">ساموئل ال. جکسون</option>
                                    <option value="5">مورگان فریمن</option>
                                  </optgroup>
                                  <optgroup label="American Actresses">
                                    <option value="6">
                                      اسکارلت جوهانسون
                                    </option>
                                    <option value="7">جسیکا آلبا</option>
                                    <option value="8">جنیفر لارنس</option>
                                    <option value="9">ایما استون</option>
                                    <option value="10">آنجلینا جولی</option>
                                  </optgroup>
                                </TomSelect>
                              </div>
                            </div>
                            {/* END: Nested Select */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              {/* BEGIN: Basic Select */}
              <div>
                <label>پایه</label>
                <div className="mt-2">
                  <TomSelect
                    value={select}
                    onChange={(e) => {
                      setSelect(e.target.value);
                    }}
                    options={{
                      placeholder: "انتخاب your favorite actors",
                    }}
                    className="w-full"
                  >
                    <option value="1">لئوناردو دی‌کاپریو</option>
                    <option value="2">جانی دیپ</option>
                    <option value="3">رابرت داونی‌ جونیور</option>
                    <option value="4">ساموئل ال. جکسون</option>
                    <option value="5">مورگان فریمن</option>
                  </TomSelect>
                </div>
              </div>
              {/* END: Basic Select */}
              {/* BEGIN: Nested Select */}
              <div className="mt-3">
                <label>تودرتو</label>
                <div className="mt-2">
                  <TomSelect
                    value={select}
                    onChange={(e) => {
                      setSelect(e.target.value);
                    }}
                    options={{
                      placeholder: "انتخاب your favorite actors",
                    }}
                    className="w-full"
                  >
                    <optgroup label="American Actors">
                      <option value="1">لئوناردو دی‌کاپریو</option>
                      <option value="2">جانی دیپ</option>
                      <option value="3">رابرت داونی‌ جونیور</option>
                      <option value="4">ساموئل ال. جکسون</option>
                      <option value="5">مورگان فریمن</option>
                    </optgroup>
                    <optgroup label="American Actresses">
                      <option value="6">اسکارلت جوهانسون</option>
                      <option value="7">جسیکا آلبا</option>
                      <option value="8">جنیفر لارنس</option>
                      <option value="9">ایما استون</option>
                      <option value="10">آنجلینا جولی</option>
                    </optgroup>
                  </TomSelect>
                </div>
              </div>
              {/* END: Nested Select */}
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای "انتخاب پایه" یک روش ساده
                        برای ادغام منوهای کشویی در برنامه وب خود
                        با دنبال کردن مراحل ذکر شده بالا، شما
                        می‌توانید به سادگی منوهای کشویی را ایجاد و سفارشی کنید تا ورودی کاربر را جمع‌آوری کنید یا از فهرستی از گزینه‌ها انتخاب کنید.
                        ورود کاربر یا انتخاب‌ها را از لیست گزینه‌ها انجام دهید.
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
                        انتخاب چندگانه
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
                        اجزای "انتخاب چندگانه" به کاربران اجازه می‌دهد تا گزینه‌های چندگانه را از یک لیست انتخاب کنند. این یک
                        عنصر رابط کاربری چندمنظوره است که اغلب در صورتی که کاربران نیاز دارند گزینه‌های چندگانه انتخاب کنند، مورد استفاده قرار می‌گیرد، مانند انتخاب چند مورد
                        از یک لیست گزینه‌های موجود است.
                        اجزای "انتخاب چندگانه" با استفاده از TomSelect راه‌حلی آسان و کاربرپسند برای کاربران ارائه می‌دهد تا گزینه‌های چندگانه را از یک لیست انتخاب کنند. این قابلیت
                        بسیار قابل تنظیم است و می‌تواند به موارد استفاده مختلف در
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <TomSelect
                              value={selectMultiple}
                              onChange={(e) => {
                                setSelectMultiple(e.target.value);
                              }}
                              options={{
                                placeholder: "انتخاب your favorite actors",
                              }}
                              className="w-full"
                              multiple
                            >
                              <option value="1">لئوناردو دی‌کاپریو</option>
                              <option value="2">جانی دیپ</option>
                              <option value="3">رابرت داونی‌ جونیور</option>
                              <option value="4">ساموئل ال. جکسون</option>
                              <option value="5">مورگان فریمن</option>
                            </TomSelect>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <TomSelect
                value={selectMultiple}
                onChange={setSelectMultiple}
                options={{
                  placeholder: "انتخاب your favorite actors",
                }}
                className="w-full"
                multiple
              >
                <option value="1">لئوناردو دی‌کاپریو</option>
                <option value="2">جانی دیپ</option>
                <option value="3">رابرت داونی‌ جونیور</option>
                <option value="4">ساموئل ال. جکسون</option>
                <option value="5">مورگان فریمن</option>
              </TomSelect>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای "انتخاب چندگانه" با استفاده از TomSelect راه‌حلی آسان و کاربرپسند برای کاربران ارائه می‌دهد تا گزینه‌های چندگانه را از یک لیست انتخاب کنند. این بسیار
                        قابل تنظیم است و می‌تواند به موارد استفاده مختلف در
                        راحتی و کاربرپسند برای کاربران ارائه دهد. این بسیار
                        قابل تنظیم است و می‌تواند به موارد استفاده مختلف در
                        برنامه وب خود.
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
                        اجزای "TomSelect" یک کتابخانه ورودی انتخابی چندمنظوره است که به شما اجازه می‌دهد تا منوهای کشویی سفارشی و ورودی‌های چندگانه را ایجاد کنید. در این بخش، ما به بررسی
                        چگونگی بهبود اجزای "TomSelect" خود با اضافه کردن یک
                        سربرگ به منوی کشویی می‌پردازیم. این می‌تواند به خصوص مفید باشد
                        زمانی که می‌خواهید متن کناری یا گروه‌ها را در داخل
                        منوی کشویی فراهم کنید.
                        زمانی که می‌خواهید زمینه یا گروه بندی برای موارد داخلی
                        منوی کشویی فراهم کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <TomSelect
                              value={selectHeader}
                              onChange={(e) => {
                                setSelectHeader(e.target.value);
                              }}
                              options={{
                                placeholder: "انتخاب your favorite actors",
                                plugins: {
                                  dropdown_header: {
                                    title: "Actors",
                                  },
                                },
                              }}
                              className="w-full"
                              multiple
                            >
                              <option value="1">لئوناردو دی‌کاپریو</option>
                              <option value="2">جانی دیپ</option>
                              <option value="3">رابرت داونی‌ جونیور</option>
                              <option value="4">ساموئل ال. جکسون</option>
                              <option value="5">مورگان فریمن</option>
                            </TomSelect>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <TomSelect
                value={selectHeader}
                onChange={(e) => {
                  setSelectHeader(e.target.value);
                }}
                options={{
                  placeholder: "انتخاب your favorite actors",
                  plugins: {
                    dropdown_header: {
                      title: "Actors",
                    },
                  },
                }}
                className="w-full"
                multiple
              >
                <option value="1">لئوناردو دی‌کاپریو</option>
                <option value="2">جانی دیپ</option>
                <option value="3">رابرت داونی‌ جونیور</option>
                <option value="4">ساموئل ال. جکسون</option>
                <option value="5">مورگان فریمن</option>
              </TomSelect>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        با اضافه کردن یک سربرگ به اجزای "TomSelect" خود می‌توانید
                        متن کناری ارزشمند و گروه‌بندی برای
                        گزینه‌ها درون منوی کشویی ارائه دهید. این تجربه کاربر را بهبود می‌بخشد
                        و به کاربران کمک می‌کند تا انتخاب‌های آگاهانه داشته باشند.
                        عنوان سربرگ را برای تطابق با نیازها و طراحی برنامه‌ی شما سفارشی سازی کنید.
                        نیازها و طراحی. کتابخانه "TomSelect" ارائه می‌دهد
                        نیازها و طراحی. کتابخانه "TomSelect" افزونه‌های مختلفی ارائه می‌دهد
                        برای گسترش عملکرد ورودی‌های انتخابی شما.
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
                        گروه ورودی
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
                        اجزای "TomSelect"، در کنار یک گروه ورودی،
                        به شما امکان می‌دهد تا یک ورودی انتخابی شیک و کارآمد را با یک
                        آیکون یا کاراکتر سفارشی پیش از آن ایجاد کنید. این
                        زمانی مفید است که می‌خواهید زمینه اضافی را به
                        ورودی انتخابی فراهم کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex">
                              <div className="z-30 flex items-center justify-center w-10 -me-1 border rounded-l bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                                @
                              </div>
                              <TomSelect
                                value={select}
                                onChange={(e) => {
                                  setSelect(e.target.value);
                                }}
                                className="w-full"
                              >
                                <option value="1">لئوناردو دی‌کاپریو</option>
                                <option value="2">جانی دیپ</option>
                                <option value="3">رابرت داونی‌ جونیور</option>
                                <option value="4">ساموئل ال. جکسون</option>
                                <option value="5">مورگان فریمن</option>
                              </TomSelect>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="flex">
                <div className="flex">
                  <div
                    className="z-30 flex items-center justify-center w-10 -me-1 border rounded-l bg-slate-100 text-slate-600 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400"
                  >
                    @
                  </div>
                  <TomSelect
                    value={select}
                    onChange={(e) => {
                      setSelect(e.target.value);
                    }}
                    className="w-full"
                  >
                    <option value="1">لئوناردو دی‌کاپریو</option>
                    <option value="2">جانی دیپ</option>
                    <option value="3">رابرت داونی‌ جونیور</option>
                    <option value="4">ساموئل ال. جکسون</option>
                    <option value="5">مورگان فریمن</option>
                  </TomSelect>
                </div>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        ترکیب اجزای "TomSelect" با یک گروه ورودی به شما امکان می‌دهد تا
                        ورودی انتخابی با آیکون یا کاراکتر شخصی سازی شده قبل از آن ایجاد کنید. این ویژگی
                        واسط کاربر و یک نمایش بصری منحصر به فرد برای ورودی انتخابی شما فراهم می‌کند، که آن را بیشتر
                        کاربرپسند و جذاب می‌کند.
                        نمایش برای ورودی انتخابی شما، که آن را بیشتر
                        کاربرپسند و جذاب تر می‌کند.
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
                      <div className="text-[0.94rem] font-medium">غیرفعال</div>
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
                        اجزای "TomSelect" به راحتی قابل پیکربندی برای
                        غیرفعال سازی، کاربران را از تعامل با آن جلوگیری می‌کند. این ویژگی زمانی مفید است که می‌خواهید یک
                        ورودی انتخابی را نمایش دهید که توسط کاربر تغییر یافته یا انتخاب نشود.
                        ورودی که نباید توسط کاربر تغییر یابد یا انتخاب شود.
                        user.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <TomSelect
                              value={select}
                              onChange={(e) => {
                                setSelect(e.target.value);
                              }}
                              className="w-full"
                              disabled
                            >
                              <option value="1">لئوناردو دی‌کاپریو</option>
                              <option value="2">جانی دیپ</option>
                              <option value="3">رابرت داونی‌ جونیور</option>
                              <option value="4">ساموئل ال. جکسون</option>
                              <option value="5">مورگان فریمن</option>
                            </TomSelect>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <TomSelect
                value={select}
                onChange={(e) => {
                  setSelect(e.target.value);
                }}
                className="w-full"
                disabled
              >
                <option value="1">لئوناردو دی‌کاپریو</option>
                <option value="2">جانی دیپ</option>
                <option value="3">رابرت داونی‌ جونیور</option>
                <option value="4">ساموئل ال. جکسون</option>
                <option value="5">مورگان فریمن</option>
              </TomSelect>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای "TomSelect" به راحتی با تنظیم ویژگی غیرفعال به درستی می‌توانند
                        غیرقابل انتخاب و جلوگیری از تعامل کاربر. این ویژگی به خصوص زمانی مفید است که می‌خواهید یک
                        ورودی انتخابی را نمایش دهید که فقط برای موارد اطلاعاتی است و توسط کاربران انتخاب نشود. شما می‌توانید
                        ظاهر و محتوای "TomSelect" غیرفعال شده را به نیازها و طراحی برنامه خود تنظیم کنید. آن را به برنامه خود اضافه کنید تا یک
                        واسط کاربرپسند و قابل دسترسی ایجاد کنید.
                        و نباید توسط کاربران تغییر یابد. شما می‌توانید
                        ظاهر و محتوای "TomSelect" غیرفعال را سفارشی کنید تا با سبک و طرح برنامه‌ی شما همخوانی داشته باشد.
                        آن را در برنامه‌ی خود به عنوان نیازهای خود، به طوری که یک
                        رابط کاربری کاربرپسند و قابل دسترسی ایجاد شود.
                        رابط کاربری کاربرپسند و قابل دسترس.
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
                        گزینه غیرفعال
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
                        اجزای "TomSelect" به شما امکان می‌دهد تا ورودی انتخابی با گزینه‌های غیرفعال ایجاد کنید. گزینه‌های غیرفعال
                        عناصری در داخل منوی کشویی هستند که توسط کاربران قابل انتخاب نیستند. این می‌تواند برای فراهم کردن
                        زمینه‌های اضافی یا نشان دادن انتخاب‌های غیرقابل دسترس داخل یک ورودی انتخابی مفید باشد.
                        توسط کاربران انتخاب شود. این می‌تواند مفید باشد برای ارائه
                        زمینه اضافی یا نشان دادن گزینه‌های غیرقابل دسترس داخل یک ورودی انتخابی.
                        در داخل یک ورودی انتخابی.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <TomSelect
                              value={select}
                              onChange={(e) => {
                                setSelect(e.target.value);
                              }}
                              className="w-full"
                            >
                              <option value="1" disabled>
                                لئوناردو دی‌کاپریو
                              </option>
                              <option value="2">جانی دیپ</option>
                              <option value="3">رابرت داونی‌ جونیور</option>
                              <option value="4" disabled>
                                ساموئل ال. جکسون
                              </option>
                              <option value="5">مورگان فریمن</option>
                            </TomSelect>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <TomSelect
                value={select}
                onChange={(e) => {
                  setSelect(e.target.value);
                }}
                className="w-full"
              >
                <option value="1" disabled>لئوناردو دی‌کاپریو</option>
                <option value="2">جانی دیپ</option>
                <option value="3">رابرت داونی‌ جونیور</option>
                <option value="4" disabled>ساموئل ال. جکسون</option>
                <option value="5">مورگان فریمن</option>
              </TomSelect>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای "TomSelect" به شما امکان می‌دهد تا گزینه‌های غیرفعال را در داخل ورودی انتخابی قرار دهید. این گزینه‌های غیرفعال
                        در منوی کشویی نمایش داده می‌شوند اما توسط کاربران انتخاب نمی‌شوند. شما می‌توانید از گزینه‌های غیرفعال برای
                        فراهم کردن اطلاعات اضافی یا نمایش گزینه‌هایی که در حال حاضر در دسترس نیستند، استفاده کنید.
                        توسط کاربران انتخاب شود. می‌توانید از گزینه‌های غیرفعال برای
                        ارائه اطلاعات اضافی یا نشان دادن گزینه‌هایی که در حال حاضر در دسترس نیستند، استفاده کنید.
                        در حال حاضر در دسترس نیستند.
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
                    <div className="-mt-px">TomSelect</div>
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
                          <Table.Td>`value`</Table.Td>
                          <Table.Td>`string` or `string[]`</Table.Td>
                          <Table.Td>
                            مقدار(های) انتخاب شده در اجزای TomSelect.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onOptionAdd`</Table.Td>
                          <Table.Td>`(value: string) =&gt; void`</Table.Td>
                          <Table.Td>
                            یک تابع بازخوانی که هنگامی که یک گزینه
                            added.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onChange`</Table.Td>
                          <Table.Td>
                            `(value: `string` or `string[]`) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            تابع بازخوانی که وقتی مقدار(های) انتخابی تغییر می‌کند فراخوانی می‌شود.
                            تغییر می‌کند.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`options`</Table.Td>
                          <Table.Td>`TomSettings`</Table.Td>
                          <Table.Td>گزینه‌های پیکربندی TomSelect.</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: TomSelectElement) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            یک تابع که یک مرجع به
                            عنصر ورودی TomSelect.
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
                    انتخاب ابتدایی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    انتخاب چندگانه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
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
                    گروه ورودی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    غیرفعال
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    گزینه غیرفعال
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
