import clsx from "clsx";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import {
  FormLabel,
  FormSwitch,
  FormInput,
  FormSelect,
} from "@/components/Base/Form";
import Table from "@/components/Base/Table";
import { Menu, Slideover } from "@/components/Base/Headless";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import React, { useState } from "react";

function Main() {
  const [basicSlideoverPreview, setBasicSlideoverPreview] = useState(false);
  const [smallSlideoverSizePreview, setSmallSlideoverSizePreview] =
    useState(false);
  const [mediumSlideoverSizePreview, setMediumSlideoverSizePreview] =
    useState(false);
  const [largeSlideoverSizePreview, setLargeSlideoverSizePreview] =
    useState(false);
  const [superlargeSlideoverSizePreview, setSuperlargeSlideoverSizePreview] =
    useState(false);
  const [programmaticallySlideover, setProgrammaticallySlideover] =
    useState(false);
  const [buttonSlideoverPreview, setButtonSlideoverPreview] = useState(false);
  const [overlappingSlideoverPreview, setOverlappingSlideoverPreview] =
    useState(false);
  const [nextOverlappingSlideoverPreview, setNextOverlappingSlideoverPreview] =
    useState(false);
  const [headerFooterSlideoverPreview, setHeaderFooterSlideoverPreview] =
    useState(false);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            سرریز
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            با استفاده از مؤلفه های اسلاید از بین برده، گفتگوهای چندمنظوره
            برای محتوای سفارشی، گزینه های اندازه گیری و ...
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
                        لغوی تهی
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
                        مؤلفه "لغوی تهی" ابزاری چندمنظوره است
                        که به شما امکان می دهد اسلاید از بین برده قابل تنظیم ایجاد کنید
                        گفتگوهایی برای اهداف مختلف در وب سایت شما است.
                        یک کانوا تمیز و ساده برای شما برای اضافه کردن
                        محتوای خود، این کار را مناسب برای یک مجموعه گسترده از استفاده ها می کند.
                        cases.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Slide Over Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setBasicSlideoverPreview(true);
                                }}
                              >
                                نمایش اسلاید بیرونی
                              </Button>
                            </div>
                            {/* END: Slide Over Toggle */}
                            {/* BEGIN: Slide Over Content */}
                            <Slideover
                              open={basicSlideoverPreview}
                              onClose={() => {
                                setBasicSlideoverPreview(false);
                              }}
                            >
                              <Slideover.Panel>
                                <Slideover.Title className="p-5">
                                  <h2 className="me-auto text-base font-medium">
                                    لغوی تهی
                                  </h2>
                                </Slideover.Title>
                                <Slideover.Description>
                                  {" "}
                                  این کاملاً اسلاید خالی عالی است!{" "}
                                </Slideover.Description>
                              </Slideover.Panel>
                            </Slideover>
                            {/* END: Slide Over Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Slide Over Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setBasicSlideoverPreview(true);
                    }}
                  >
                    نمایش اسلاید بیرونی
                  </Button>
                </div>
                {/* END: Slide Over Toggle */}
                {/* BEGIN: Slide Over Content */}
                <Slideover
                  open={basicSlideoverPreview}
                  onClose={() => {
                    setBasicSlideoverPreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="me-auto text-base font-medium">
                        لغوی تهی
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      {" "}
                      این کاملاً اسلاید خالی عالی است!{" "}
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Slide Over Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        آیا می خواهید اطلاعات اضافی را نمایش دهید،
                        ورودی کاربر را جمع آوری کنید یا به روز رسانی های مهم را ارائه دهید،
                        "Blank Slideover" یک راه حل انعطاف پذیر است که اطمینان می دهد
                        محتوای شما قابل دسترس و جذاب باقی مانده است. کاوش کنید
                        امکانات و راه های جدیدی برای تعامل باز کنید
                        مخاطب خود با استفاده از مؤلفه "Blank Slideover".
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
                         اندازه پنجره کشویی
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
                        کامپوننت "اندازه پنجره کشویی" به شما این امکان را می دهد که
                        ابعاد پنجره های کشویی خود را کنترل کنید و اطمینان حاصل کنید که
                        آنها از نظر بصری جذاب و کاملاً متناسب با
                        محتوای شما هستند. با چندین گزینه اندازه در دسترس، شما
                        می توانید موردی را انتخاب کنید که بهترین تناسب را داشته باشد
                        case.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Small Slide Over Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setSmallSlideoverSizePreview(true);
                                }}
                                className="mb-2 me-1"
                              >
                                نمایش پنجره کشویی کوچک
                              </Button>
                              {/* END: Small Slide Over Toggle */}
                              {/* BEGIN: Medium Slide Over Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setMediumSlideoverSizePreview(true);
                                }}
                                className="mb-2 me-1"
                              >
                                نمایش پنجره کشویی متوسط
                              </Button>
                              {/* END: Medium Slide Over Toggle */}
                              {/* BEGIN: Large Slide Over Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setLargeSlideoverSizePreview(true);
                                }}
                                className="mb-2 me-1"
                              >
                                نمایش پنجره کشویی بزرگ
                              </Button>
                              {/* END: Large Slide Over Toggle */}
                              {/* BEGIN: Super Large Slide Over Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setSuperlargeSlideoverSizePreview(true);
                                }}
                                className="mb-2 me-1"
                              >
                                نمایش پنجره کشویی بسیار بزرگ
                              </Button>
                              {/* END: Super Large Slide Over Toggle */}
                            </div>
                            {/* BEGIN: Small Slide Over Content */}
                            <Slideover
                              size="sm"
                              open={smallSlideoverSizePreview}
                              onClose={() => {
                                setSmallSlideoverSizePreview(false);
                              }}
                            >
                              <Slideover.Panel>
                                <Slideover.Title className="p-5">
                                  <h2 className="me-auto text-base font-medium">
                                    پنجره کشویی کوچک
                                  </h2>
                                </Slideover.Title>
                                <Slideover.Description>
                                  این یک پنجره کشویی کوچک فوق العاده است!
                                </Slideover.Description>
                              </Slideover.Panel>
                            </Slideover>
                            {/* END: Small Slide Over Content */}
                            {/* BEGIN: Medium Slide Over Content */}
                            <Slideover
                              open={mediumSlideoverSizePreview}
                              onClose={() => {
                                setMediumSlideoverSizePreview(false);
                              }}
                            >
                              <Slideover.Panel>
                                <Slideover.Title className="p-5">
                                  <h2 className="me-auto text-base font-medium">
                                    پنجره کشویی متوسط
                                  </h2>
                                </Slideover.Title>
                                <Slideover.Description>
                                  این یک پنجره کشویی متوسط فوق العاده است!
                                </Slideover.Description>
                              </Slideover.Panel>
                            </Slideover>
                            {/* END: Medium Slide Over Content */}
                            {/* BEGIN: Large Slide Over Content */}
                            <Slideover
                              size="lg"
                              open={largeSlideoverSizePreview}
                              onClose={() => {
                                setLargeSlideoverSizePreview(false);
                              }}
                            >
                              <Slideover.Panel>
                                <Slideover.Title className="p-5">
                                  <h2 className="me-auto text-base font-medium">
                                    پنجره کشویی بزرگ
                                  </h2>
                                </Slideover.Title>
                                <Slideover.Description>
                                  این یک پنجره کشویی بزرگ فوق العاده است!
                                </Slideover.Description>
                              </Slideover.Panel>
                            </Slideover>
                            {/* END: Large Slide Over Content */}
                            {/* BEGIN: Super Large Slide Over Content */}
                            <Slideover
                              size="xl"
                              open={superlargeSlideoverSizePreview}
                              onClose={() => {
                                setSuperlargeSlideoverSizePreview(false);
                              }}
                            >
                              <Slideover.Panel>
                                <Slideover.Title className="p-5">
                                  <h2 className="me-auto text-base font-medium">
                                    پنجره کشویی بسیار بزرگ
                                  </h2>
                                </Slideover.Title>
                                <Slideover.Description>
                                  این یک پنجره کشویی فوق العاده با اندازه بزرگ است!
                                </Slideover.Description>
                              </Slideover.Panel>
                            </Slideover>
                            {/* END: Super Large Slide Over Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="text-center">
                  {/* BEGIN: Small Slide Over Toggle */}
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setSmallSlideoverSizePreview(true);
                    }}
                    className="mb-2 me-1"
                  >
                    نمایش پنجره کشویی کوچک
                  </Button>
                  {/* END: Small Slide Over Toggle */}
                  {/* BEGIN: Medium Slide Over Toggle */}
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setMediumSlideoverSizePreview(true);
                    }}
                    className="mb-2 me-1"
                  >
                    نمایش پنجره کشویی متوسط
                  </Button>
                  {/* END: Medium Slide Over Toggle */}
                  {/* BEGIN: Large Slide Over Toggle */}
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setLargeSlideoverSizePreview(true);
                    }}
                    className="mb-2 me-1"
                  >
                    نمایش پنجره کشویی بزرگ
                  </Button>
                  {/* END: Large Slide Over Toggle */}
                  {/* BEGIN: Super Large Slide Over Toggle */}
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setSuperlargeSlideoverSizePreview(true);
                    }}
                    className="mb-2 me-1"
                  >
                    نمایش پنجره کشویی بسیار بزرگ
                  </Button>
                  {/* END: Super Large Slide Over Toggle */}
                </div>
                {/* BEGIN: Small Slide Over Content */}
                <Slideover
                  size="sm"
                  open={smallSlideoverSizePreview}
                  onClose={() => {
                    setSmallSlideoverSizePreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="me-auto text-base font-medium">
                        پنجره کشویی کوچک
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      این یک پنجره کشویی کوچک فوق العاده است!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Small Slide Over Content */}
                {/* BEGIN: Medium Slide Over Content */}
                <Slideover
                  open={mediumSlideoverSizePreview}
                  onClose={() => {
                    setMediumSlideoverSizePreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="me-auto text-base font-medium">
                        پنجره کشویی متوسط
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      این یک پنجره کشویی متوسط فوق العاده است!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Medium Slide Over Content */}
                {/* BEGIN: Large Slide Over Content */}
                <Slideover
                  size="lg"
                  open={largeSlideoverSizePreview}
                  onClose={() => {
                    setLargeSlideoverSizePreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="me-auto text-base font-medium">
                        پنجره کشویی بزرگ
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      این یک پنجره کشویی بزرگ فوق العاده است!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Large Slide Over Content */}
                {/* BEGIN: Super Large Slide Over Content */}
                <Slideover
                  size="xl"
                  open={superlargeSlideoverSizePreview}
                  onClose={() => {
                    setSuperlargeSlideoverSizePreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="me-auto text-base font-medium">
                        پنجره کشویی بسیار بزرگ
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      این یک پنجره کشویی فوق العاده با اندازه بزرگ است!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Super Large Slide Over Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اندازه پنجره کشویی خود را برای ایجاد
                        یک تجربه کاربرپسند و بصری جذاب تنظیم کنید. اینکه
                        شما به یک اعلان فشرده یا یک فرم جادار نیاز دارید،
                        “سایز پنجره کشویی” به شما انعطاف پذیری لازم را می دهد
                        برای دستیابی به چیدمان دلخواه خود. گزینه های اندازه مختلف را کاوش کنید
                        و تجربه کاربری وب سایت خود را با
                        “سایز پنجره کشویی” ارتقا دهید.
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
                        پنجره کشویی با دکمه بستن
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
                        کامپوننت "پنجره کشویی با دکمه بستن" لایه اضافی از
                        راحتی کاربر را به پنجره های کشویی شما اضافه می کند.
                        گفتگوها. این ویژگی به کاربران امکان می دهد تا به راحتی اسلاید اوور را با کلیک کردن روی دکمه بستن رد کنند و تجربه کلی کاربر را بهبود بخشد.
                        slide-over by clicking a close button, enhancing the
                        overall user با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setButtonSlideoverPreview(true);
                                }}
                              >
                                نمایش اسلاید بیرونی
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Slideover
                              staticBackdrop
                              open={buttonSlideoverPreview}
                              onClose={() => {
                                setButtonSlideoverPreview(false);
                              }}
                            >
                              <Slideover.Panel>
                                <a
                                  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setButtonSlideoverPreview(false);
                                  }}
                                  className="absolute top-0 start-0 right-auto mt-4 -ms-12"
                                  href="#"
                                >
                                  <Lucide
                                    icon="X"
                                    className="w-8 h-8 text-slate-400"
                                  />
                                </a>
                                <Slideover.Title className="p-5">
                                  <h2 className="me-auto text-base font-medium">
                                    پنجره کشویی با دکمه بستن
                                  </h2>
                                </Slideover.Title>
                                <Slideover.Description>
                                  This is totally awesome slide over with close
                                  button!
                                </Slideover.Description>
                              </Slideover.Panel>
                            </Slideover>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setButtonSlideoverPreview(true);
                    }}
                  >
                    نمایش اسلاید بیرونی
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Slideover
                  staticBackdrop
                  open={buttonSlideoverPreview}
                  onClose={() => {
                    setButtonSlideoverPreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <a
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setButtonSlideoverPreview(false);
                      }}
                      className="absolute top-0 start-0 right-auto mt-4 -ms-12"
                      href="#"
                    >
                      <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                    </a>
                    <Slideover.Title className="p-5">
                      <h2 className="me-auto text-base font-medium">
                        پنجره کشویی با دکمه بستن
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description>
                      این یک پنجره کشویی فوق العاده با دکمه بستن است!
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        کامپوننت "پنجره کشویی با دکمه بستن" تعامل کاربر را با ارائه روشی واضح و شهودی برای بستن پنجره کشویی بهبود می بخشد. این مورد به ویژه برای سناریوهایی مفید است که کاربران ممکن است بخواهند بدون اینکه از صفحه فعلی خارج شوند، گفتگو را به سرعت خروج یا به حداقل برسانند.
                        user interaction by offering a clear and intuitive
                        method for closing the slide-over. It's particularly
                        useful for scenarios where users may want to quickly
                        exit or minimize the dialog without navigating away from
                        the current page.
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
                        پنجره کشویی روی هم قرار گرفته
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
                        "پنجره کشویی روی هم قرار گرفته" یک ویژگی همه کاره است که
                        به شما امکان می دهد گفتگوهای کشویی لایه ای را در برنامه وب خود ایجاد کنید. این ویژگی برای سناریوهایی که نیاز به ارائه اطلاعات یا اقدامات به صورت متوالی در حالی که کاربر را متمرکز نگه می دارد، ایده آل است.
                        برنامه وب شما. این ویژگی برای سناریوهایی که نیاز به ارائه اطلاعات یا اقدامات به صورت متوالی در حالی که کاربر را متمرکز نگه می دارد، ایده آل است.
                        سناریوهایی که نیاز به ارائه اطلاعات یا
                        اقدامات به صورت متوالی در حالی که کاربر را
                        focused.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Slide Over Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setOverlappingSlideoverPreview(true);
                                }}
                              >
                                نمایش اسلاید بیرونی
                              </Button>
                            </div>
                            {/* END: Slide Over Toggle */}
                            {/* BEGIN: Slide Over Content */}
                            <Slideover
                              open={overlappingSlideoverPreview}
                              onClose={() => {
                                setOverlappingSlideoverPreview(false);
                              }}
                            >
                              <Slideover.Panel>
                                <Slideover.Title className="p-5">
                                  <h2 className="me-auto text-base font-medium">
                                    پنجره کشویی روی هم قرار گرفته
                                  </h2>
                                </Slideover.Title>
                                <Slideover.Description className="px-5 py-10">
                                  <div className="text-center">
                                    <div className="mb-5">
                                      Click button bellow to show overlapping
                                      slide روی هم!
                                    </div>
                                    {/* BEGIN: Overlapping Slide Over Toggle */}
                                    <Button
                                      as="a"
                                      href="#"
                                      variant="primary"
                                      onClick={(event: React.MouseEvent) => {
                                        event.preventDefault();
                                        setNextOverlappingSlideoverPreview(
                                          true
                                        );
                                      }}
                                    >
                                      نمایش اسلاید روی هم
                                    </Button>
                                    {/* END: Overlapping Slide Over Toggle */}
                                    {/* BEGIN: Overlapping Slide Over Content */}
                                    <Slideover
                                      open={nextOverlappingSlideoverPreview}
                                      onClose={() => {
                                        setNextOverlappingSlideoverPreview(
                                          false
                                        );
                                      }}
                                    >
                                      <Slideover.Panel>
                                        <Slideover.Title className="p-5">
                                          <h2 className="me-auto text-base font-medium">
                                            پنجره کشویی روی هم قرار گرفته
                                          </h2>
                                        </Slideover.Title>
                                        <Slideover.Description className="text-center">
                                          This is totally awesome overlapping
                                          slide روی هم!
                                        </Slideover.Description>
                                      </Slideover.Panel>
                                    </Slideover>
                                    {/* END: Overlapping Slide Over Content */}
                                  </div>
                                </Slideover.Description>
                              </Slideover.Panel>
                            </Slideover>
                            {/* END: Slide Over Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Slide Over Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setOverlappingSlideoverPreview(true);
                    }}
                  >
                    نمایش اسلاید بیرونی
                  </Button>
                </div>
                {/* END: Slide Over Toggle */}
                {/* BEGIN: Slide Over Content */}
                <Slideover
                  open={overlappingSlideoverPreview}
                  onClose={() => {
                    setOverlappingSlideoverPreview(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="me-auto text-base font-medium">
                        پنجره کشویی روی هم قرار گرفته
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description className="px-5 py-10">
                      <div className="text-center">
                        <div className="mb-5">
                          برای نمایش اسلاید روی هم بر روی دکمه زیر کلیک کنید!
                          روی هم!
                        </div>
                        {/* BEGIN: Overlapping Slide Over Toggle */}
                        <Button
                          as="a"
                          href="#"
                          variant="primary"
                          onClick={(event: React.MouseEvent) => {
                            event.preventDefault();
                            setNextOverlappingSlideoverPreview(true);
                          }}
                        >
                          نمایش اسلاید روی هم
                        </Button>
                        {/* END: Overlapping Slide Over Toggle */}
                        {/* BEGIN: Overlapping Slide Over Content */}
                        <Slideover
                          open={nextOverlappingSlideoverPreview}
                          onClose={() => {
                            setNextOverlappingSlideoverPreview(false);
                          }}
                        >
                          <Slideover.Panel>
                            <Slideover.Title className="p-5">
                              <h2 className="me-auto text-base font-medium">
                                پنجره کشویی روی هم قرار گرفته
                              </h2>
                            </Slideover.Title>
                            <Slideover.Description className="text-center">
                              این یک اسلاید روی هم فوق العاده است
                              روی هم!
                            </Slideover.Description>
                          </Slideover.Panel>
                        </Slideover>
                        {/* END: Overlapping Slide Over Content */}
                      </div>
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Slide Over Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        ویژگی "پنجره کشویی روی هم قرار گرفته" روشی کاربرپسند برای ارائه اطلاعات یا اقدامات به صورت مرحله ای ارائه می دهد و اطمینان می دهد که کاربران می توانند روی یک قطعه محتوا در یک زمان تمرکز کنند. این ابزار ارزشمندی برای ایجاد تجربیات کاربری جذاب و هدایت کاربران در گردش کارهای پیچیده است. امکانات این ویژگی را برای بهبود قابلیت استفاده و تعامل برنامه وب خود کاوش کنید.
                        روشی کاربرپسند برای ارائه اطلاعات یا اقدامات به صورت مرحله ای
                        به تدریج، اطمینان حاصل کنید که کاربران می توانند روی یک
                        قطعه محتوا در یک زمان تمرکز کنند. این ابزار ارزشمندی برای
                        ایجاد تجربیات کاربری جذاب و هدایت کاربران
                        در گردش کارهای پیچیده است. امکانات این ویژگی را برای بهبود قابلیت استفاده و تعامل برنامه وب خود کاوش کنید.
                        این ویژگی برای بهبود قابلیت استفاده و تعامل برنامه وب خود کاوش کنید.
                        و تعامل.
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
                        پنجره کشویی هدر و فوتر
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
                        کامپوننت "پنجره کشویی هدر و فوتر" ابزاری قدرتمند
                        برای ایجاد پنجره های کشویی با هدر و فوترهای سفارشی سازی شده است. این ویژگی به شما امکان می دهد محتوا را به کاربران خود ارائه دهید در حالی که یک رابط کاربری ثابت را حفظ می کنید و عملکردهای اضافی را در بخش های هدر و فوتر ارائه می دهید.
                        هدر و فوتر. این ویژگی به شما امکان می دهد تا
                        محتوا را به کاربران خود ارائه دهید در حالی که یک رابط کاربری ثابت را حفظ می کنید
                        و عملکردهای اضافی را در بخش های هدر و فوتر ارائه می دهید.
                        بخش های هدر و فوتر ارائه می دهید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Slide Over Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setHeaderFooterSlideoverPreview(true);
                                }}
                              >
                                نمایش اسلاید بیرونی
                              </Button>
                            </div>
                            {/* END: Slide Over Toggle */}
                            {/* BEGIN: Slide Over Content */}
                            <Slideover
                              staticBackdrop
                              open={headerFooterSlideoverPreview}
                              onClose={() => {
                                setHeaderFooterSlideoverPreview(false);
                              }}
                            >
                              {/* BEGIN: Slide Over Header */}
                              <Slideover.Panel>
                                <a
                                  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setHeaderFooterSlideoverPreview(false);
                                  }}
                                  className="absolute top-0 start-0 right-auto mt-4 -ms-12"
                                  href="#"
                                >
                                  <Lucide
                                    icon="X"
                                    className="w-8 h-8 text-slate-400"
                                  />
                                </a>
                                <Slideover.Title>
                                  <h2 className="me-auto text-base font-medium">
                                    پیام پخش
                                  </h2>
                                  <Button
                                    variant="outline-secondary"
                                    className="hidden sm:flex"
                                  >
                                    <Lucide
                                      icon="File"
                                      className="w-4 h-4 me-2"
                                    />{" "}
                                    دانلود اسناد
                                  </Button>
                                  <Menu className="sm:hidden">
                                    <Menu.Button
                                      as="a"
                                      className="block w-5 h-5"
                                      href="#"
                                    >
                                      <Lucide
                                        icon="MoreHorizontal"
                                        className="w-5 h-5 text-slate-500"
                                      />
                                    </Menu.Button>
                                    <Menu.Items className="w-40">
                                      <Menu.Item>
                                        <Lucide
                                          icon="File"
                                          className="w-4 h-4 me-2"
                                        />
                                        دانلود اسناد
                                      </Menu.Item>
                                    </Menu.Items>
                                  </Menu>
                                </Slideover.Title>
                                {/* END: Slide Over Header */}
                                {/* BEGIN: Slide Over Body */}
                                <Slideover.Description>
                                  <div>
                                    <FormLabel htmlFor="modal-form-1">
                                      From
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-1"
                                      type="text"
                                      placeholder="example@gmail.com"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <FormLabel htmlFor="modal-form-2">
                                      To
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-2"
                                      type="text"
                                      placeholder="example@gmail.com"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <FormLabel htmlFor="modal-form-3">
                                      Subject
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-3"
                                      type="text"
                                      placeholder="Important Meeting"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <FormLabel htmlFor="modal-form-4">
                                      کلمات را دارد
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-4"
                                      type="text"
                                      placeholder="Job, Work, مستندات"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <FormLabel htmlFor="modal-form-5">
                                      ندارد
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-5"
                                      type="text"
                                      placeholder="Job, Work, مستندات"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <FormLabel htmlFor="modal-form-6">
                                      Size
                                    </FormLabel>
                                    <FormSelect id="modal-form-6">
                                      <option>10</option>
                                      <option>25</option>
                                      <option>35</option>
                                      <option>50</option>
                                    </FormSelect>
                                  </div>
                                </Slideover.Description>
                                {/* END: Slide Over Body */}
                                {/* BEGIN: Slide Over Footer */}
                                <Slideover.Footer>
                                  <Button
                                    variant="outline-secondary"
                                    type="button"
                                    onClick={() => {
                                      setHeaderFooterSlideoverPreview(false);
                                    }}
                                    className="w-20 me-1"
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    variant="primary"
                                    type="button"
                                    className="w-20"
                                  >
                                    Send
                                  </Button>
                                </Slideover.Footer>
                              </Slideover.Panel>
                              {/* END: Slide Over Footer */}
                            </Slideover>
                            {/* END: Slide Over Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Slide Over Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setHeaderFooterSlideoverPreview(true);
                    }}
                  >
                    نمایش اسلاید بیرونی
                  </Button>
                </div>
                {/* END: Slide Over Toggle */}
                {/* BEGIN: Slide Over Content */}
                <Slideover
                  staticBackdrop
                  open={headerFooterSlideoverPreview}
                  onClose={() => {
                    setHeaderFooterSlideoverPreview(false);
                  }}
                >
                  {/* BEGIN: Slide Over Header */}
                  <Slideover.Panel>
                    <a
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setHeaderFooterSlideoverPreview(false);
                      }}
                      className="absolute top-0 start-0 right-auto mt-4 -ms-12"
                      href="#"
                    >
                      <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                    </a>
                    <Slideover.Title>
                      <h2 className="me-auto text-base font-medium">
                        پیام پخش
                      </h2>
                      <Button
                        variant="outline-secondary"
                        className="hidden sm:flex"
                      >
                        <Lucide icon="File" className="w-4 h-4 me-2" />{" "}
                        دانلود اسناد
                      </Button>
                      <Menu className="sm:hidden">
                        <Menu.Button
                          as="a"
                          className="block w-5 h-5"
                          href="#"
                        >
                          <Lucide
                            icon="MoreHorizontal"
                            className="w-5 h-5 text-slate-500"
                          />
                        </Menu.Button>
                        <Menu.Items className="w-40">
                          <Menu.Item>
                            <Lucide icon="File" className="w-4 h-4 me-2" />
                            دانلود اسناد
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </Slideover.Title>
                    {/* END: Slide Over Header */}
                    {/* BEGIN: Slide Over Body */}
                    <Slideover.Description>
                      <div>
                        <FormLabel
                          htmlFor="modal-form-1"
                        >
                          From
                        </FormLabel>
                        <FormInput
                          id="modal-form-1"
                          type="text"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div className="mt-3">
                        <FormLabel
                          htmlFor="modal-form-2"
                        >
                          To
                        </FormLabel>
                        <FormInput
                          id="modal-form-2"
                          type="text"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div className="mt-3">
                        <FormLabel
                          htmlFor="modal-form-3"
                        >
                          Subject
                        </FormLabel>
                        <FormInput
                          id="modal-form-3"
                          type="text"
                          placeholder="Important Meeting"
                        />
                      </div>
                      <div className="mt-3">
                        <FormLabel
                          htmlFor="modal-form-4"
                        >
                          کلمات را دارد
                        </FormLabel>
                        <FormInput
                          id="modal-form-4"
                          type="text"
                          placeholder="Job, Work, مستندات"
                        />
                      </div>
                      <div className="mt-3">
                        <FormLabel
                          htmlFor="modal-form-5"
                        >
                          ندارد
                        </FormLabel>
                        <FormInput
                          id="modal-form-5"
                          type="text"
                          placeholder="Job, Work, مستندات"
                        />
                      </div>
                      <div className="mt-3">
                        <FormLabel
                          htmlFor="modal-form-6"
                        >
                          Size
                        </FormLabel>
                        <FormSelect
                          id="modal-form-6"
                        >
                          <option>10</option>
                          <option>25</option>
                          <option>35</option>
                          <option>50</option>
                        </FormSelect>
                      </div>
                    </Slideover.Description>
                    {/* END: Slide Over Body */}
                    {/* BEGIN: Slide Over Footer */}
                    <Slideover.Footer>
                      <Button
                        variant="outline-secondary"
                        type="button"
                        onClick={() => {
                          setHeaderFooterSlideoverPreview(false);
                        }}
                        className="w-20 me-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        type="button"
                        className="w-20"
                      >
                        Send
                      </Button>
                    </Slideover.Footer>
                  </Slideover.Panel>
                  {/* END: Slide Over Footer */}
                </Slideover>
                {/* END: Slide Over Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        کامپوننت "پنجره کشویی هدر و فوتر" شما را قادر می سازد
                        گفتگوهای کشویی پویا ایجاد کنید که هم آموزنده و هم تعاملی باشند. شما به راحتی می توانید بخش های هدر و فوتر را برای مطابقت با نیازهای برنامه خود تنظیم کنید و آن را به راه حلی همه کاره برای طیف وسیعی از موارد استفاده تبدیل کنید. تجربه کاربری خود را با ارائه محتوا با وضوح و ارائه اقدامات شهودی به کاربران از طریق این ویژگی ارتقا دهید.
                        آموزنده و تعاملی باشند. شما به راحتی می توانید
                        بخش های هدر و فوتر را برای مطابقت با نیازهای برنامه خود تنظیم کنید
                        با توجه به نیازها، این یک راه حل چند منظوره برای یک دسته گسترده از موارد است.
                        موارد استفاده. تجربه کاربری خود را با ارائه محتوا با وضوح بهبود دهید
                         و ارائه عملکردهای مفهومی به کاربران از طریق این ویژگی را بهبود بخشید.
                        عملیات از طریق این ویژگی را انجام دهید.
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
                        نمایش/پنهان کردن اسلاید از طریق برنامه نویسی
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
                        ویژگی "نمایش/پنهان کردن اسلاید از طریق برنامه نویسی" به شما امکان کنترل را از طریق کد می دهد.
                        این قابلیت را به شما می دهد که قابلیت کنترل ارتباط از طریق کد را داشته باشید.
                        قابلیت نمایش اسلاید-اور دیالوگ از طریق کد خود را فراهم می کند.
                        این قابلیت به شما اجازه می دهد تا باز شدن
                        بستن، یا تغییر وضعیت اسلاید اور را به صورت برنامه نویسی انجام دهید.
                        تجربه کاربری پیوسته و تعاملی فراهم می کند.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Show Slide Over Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                id="programmatically-show-slideover"
                                href="#"
                                variant="primary"
                                className="mb-2 me-1"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setProgrammaticallySlideover(true);
                                }}
                              >
                                نمایش اسلاید بیرونی
                              </Button>
                            </div>
                            {/* END: Show Slide Over Toggle */}
                            {/* BEGIN: Slide Over Content */}
                            <Slideover
                              open={programmaticallySlideover}
                              onClose={() => {
                                setProgrammaticallySlideover(false);
                              }}
                            >
                              <Slideover.Panel>
                                <Slideover.Title className="p-5">
                                  <h2 className="me-auto text-base font-medium">
                                    نمایش/پنهان کردن اسلاید از طریق برنامه نویسی
                                  </h2>
                                </Slideover.Title>
                                <Slideover.Description className="p-10 text-center">
                                  {/* BEGIN: Hide Slide Over Toggle */}
                                  <Button
                                    as="a"
                                    id="programmatically-hide-slideover"
                                    href="#"
                                    variant="primary"
                                    className="me-1"
                                    onClick={(event: React.MouseEvent) => {
                                      event.preventDefault();
                                      setProgrammaticallySlideover(false);
                                    }}
                                  >
                                    پنهان کردن اسلاید اور
                                  </Button>
                                  {/* END: Hide Slide Over Toggle */}
                                  {/* BEGIN: Toggle Slide Over Toggle */}
                                  <Button
                                    as="a"
                                    id="programmatically-toggle-slideover"
                                    href="#"
                                    variant="primary"
                                    className="mt-2 me-1 sm:mt-0"
                                    onClick={(event: React.MouseEvent) => {
                                      event.preventDefault();
                                      setProgrammaticallySlideover(
                                        !programmaticallySlideover
                                      );
                                    }}
                                  >
                                    تغییر وضعیت اسلاید اور
                                  </Button>
                                  {/* END: Toggle Slide Over Toggle */}
                                </Slideover.Description>
                              </Slideover.Panel>
                            </Slideover>
                            {/* END: Slide Over Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Show Slide Over Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    id="programmatically-show-slideover"
                    href="#"
                    variant="primary"
                    className="mb-2 me-1"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setProgrammaticallySlideover(true);
                    }}
                  >
                    نمایش اسلاید بیرونی
                  </Button>
                </div>
                {/* END: Show Slide Over Toggle */}
                {/* BEGIN: Slide Over Content */}
                <Slideover
                  open={programmaticallySlideover}
                  onClose={() => {
                    setProgrammaticallySlideover(false);
                  }}
                >
                  <Slideover.Panel>
                    <Slideover.Title className="p-5">
                      <h2 className="me-auto text-base font-medium">
                        نمایش/پنهان کردن اسلاید از طریق برنامه نویسی
                      </h2>
                    </Slideover.Title>
                    <Slideover.Description className="p-10 text-center">
                      {/* BEGIN: Hide Slide Over Toggle */}
                      <Button
                        as="a"
                        id="programmatically-hide-slideover"
                        href="#"
                        variant="primary"
                        className="me-1"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setProgrammaticallySlideover(false);
                        }}
                      >
                        پنهان کردن اسلاید اور
                      </Button>
                      {/* END: Hide Slide Over Toggle */}
                      {/* BEGIN: Toggle Slide Over Toggle */}
                      <Button
                        as="a"
                        id="programmatically-toggle-slideover"
                        href="#"
                        variant="primary"
                        className="mt-2 me-1 sm:mt-0"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setProgrammaticallySlideover(
                            !programmaticallySlideover
                          );
                        }}
                      >
                        تغییر وضعیت اسلاید اور
                      </Button>
                      {/* END: Toggle Slide Over Toggle */}
                    </Slideover.Description>
                  </Slideover.Panel>
                </Slideover>
                {/* END: Slide Over Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        ویژگی "نمایش/پنهان کردن اسلاید از طریق برنامه نویسی"
                        این ویژگی کنترل شما را بر روی اسلاید اور
                        را ارتقاء می دهد، آن را به یک عنصر پویا و واکنش پذیر در
                        رابط کاربری خود تبدیل می کند. با استفاده از این
                        روش های برنامه نویسی، شما می توانید تجربه های کاربری جذابی را ایجاد کنید و
                        پنهان کردن اسلاید اور را به دلخواه خود تنظیم کنید تا
                        به نیازهای برنامه خود بپردازید. آیا این برای نمایش اطلاعات اضافی
                        ، ذخیره ورودی کاربر یا ارائه
                        تعاملات مبتنی بر متن، این ویژگی به شما قدرت می دهد که
                        کنترل کاملی بر دیالوگ های اسلاید اور خود را داشته باشید.
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
                    <div className="-mt-px">Slideover</div>
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
                            نوع عنصر HTML برای استفاده از Slideover (پیش‌فرض "div").
                            (پیش‌فرض "div").
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`open`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            نشان می‌دهد که Slideover باز یا بسته است (پیش‌فرض نادرست است).
                            (پیش‌فرض نادرست است).
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onClose`</Table.Td>
                          <Table.Td>`function`</Table.Td>
                          <Table.Td>
                            یک تابعی که باید فراخوانی شود زمانی که Slideover بسته شود.
                            closed.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`staticBackdrop`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            اگر درست باشد، زمینه Slideover ثابت می‌ماند زمانی که
                            Slideover بسته است (پیش‌فرض نادرست است).
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`size`</Table.Td>
                          <Table.Td>`Size`</Table.Td>
                          <Table.Td>
                            اندازه Slideover که می‌تواند "sm،" "md،" "lg،" یا "xl" باشد (پیش‌فرض "md").
                            (پیش‌فرض "md").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Slideover.Panel</div>
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
                            نوع عنصر HTML برای استفاده از Slideover (پیش‌فرض "div").
                            پنل (پیش‌فرض "div").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Slideover.Title</div>
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
                            نوع عنصر HTML برای استفاده از Slideover (پیش‌فرض "div").
                            عنوان (پیش‌فرض "div").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Slideover.Description</div>
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
                            نوع عنصر HTML برای استفاده از Slideover (پیش‌فرض "div").
                            توضیحات (پیش‌فرض "div").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Slideover.Footer</div>
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
                            نوع عنصر HTML برای استفاده از Slideover (پیش‌فرض "div").
                            پاورقی (پیش‌فرض "div").
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
                    لغوی تهی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                     اندازه پنجره کشویی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    پنجره کشویی با دکمه بستن
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    پنجره کشویی روی هم قرار گرفته
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    پنجره کشویی هدر و فوتر
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نمایش/پنهان کردن اسلاید از طریق برنامه نویسی
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
