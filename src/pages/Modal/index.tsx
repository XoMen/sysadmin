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
import { Menu, Dialog } from "@/components/Base/Headless";
import TinySlider from "@/components/Base/TinySlider";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import products from "@/fakers/products";
import React, { useState, useRef } from "react";

function Main() {
  const [basicModalPreview, setBasicModalPreview] = useState(false);
  const [smallModalSizePreview, setSmallModalSizePreview] = useState(false);
  const [mediumModalSizePreview, setMediumModalSizePreview] = useState(false);
  const [largeModalSizePreview, setLargeModalSizePreview] = useState(false);
  const [superlargeModalSizePreview, setSuperlargeModalSizePreview] =
    useState(false);
  const [programmaticallyModal, setProgrammaticallyModal] = useState(false);
  const [warningModalPreview, setWarningModalPreview] = useState(false);
  const [buttonModalPreview, setButtonModalPreview] = useState(false);
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false);
  const [overlappingModalPreview, setOverlappingModalPreview] = useState(false);
  const [nextOverlappingModalPreview, setNextOverlappingModalPreview] =
    useState(false);
  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
    useState(false);
  const [deleteModalPreview, setDeleteModalPreview] = useState(false);
  const [successModalPreview, setSuccessModalPreview] = useState(false);
  const [tinySliderModalPreview, setTinySliderModalPreview] = useState(false);
  const sendButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            مودال
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            چندگانگی مولفه ماژولار ما را برای باکس‌های نور،
            اعلان‌های کاربر و ... کشف کنید!
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
                        ماژول خالی
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
                        مولفه «ماژول خالی» به شما امکان می‌دهد تا ماژول‌های ساده
                        و سفارشی‌شده‌ای را ایجاد کنید که می‌تواند برای
                        نمایش انواع مختلف محتوا یا پیام‌ها به
                        کاربران شما است. این نوع ماژول به عنوان پایه برای
                        ایجاد تجربیات ماژول سفارشی کاربرد دارد.
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
                                variant="primary"
                                onClick={() => {
                                  setBasicModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={basicModalPreview}
                              onClose={() => {
                                setBasicModalPreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                این ماژول خالی کاملاً شگفت‌انگیز است!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    variant="primary"
                    onClick={() => {
                      setBasicModalPreview(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={basicModalPreview}
                  onClose={() => {
                    setBasicModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="p-10 text-center">
                    این ماژول خالی کاملاً شگفت‌انگیز است!
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مولفه «ماژول خالی» به شما یک نقطه شروع می‌دهد
                        برای ایجاد ماژول‌ها با محتوای خود و
                        طراحی می‌دهد که ابزار چندکاره‌ای برای بهبود تجربه کاربر است.
                        تعاملات درون برنامه وب خود را بهبود بخشید
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
                        اندازه ماژول
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
                        مولفه «اندازه ماژول» به شما امکان می‌دهد تا ماژول‌هایی را ایجاد کنید
                        که انواع مختلفی از محتوا را جای دهد
                        یا الزامات طراحی خاص. می‌توانید از
                        چهار اندازه ماژول مختلف: کوچک، متوسط، بزرگ و
                        خیلی بزرگ، اطمینان از انعطاف‌پذیری در نمایش شما
                        content.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Small Modal Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setSmallModalSizePreview(true);
                                }}
                                className="mb-2 me-1"
                              >
                                نمایش ماژول کوچک
                              </Button>
                              {/* END: Small Modal Toggle */}
                              {/* BEGIN: Medium Modal Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setMediumModalSizePreview(true);
                                }}
                                className="mb-2 me-1"
                              >
                                نمایش ماژول متوسط
                              </Button>
                              {/* END: Medium Modal Toggle */}
                              {/* BEGIN: Large Modal Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setLargeModalSizePreview(true);
                                }}
                                className="mb-2 me-1"
                              >
                                نمایش ماژول بزرگ
                              </Button>
                              {/* END: Large Modal Toggle */}
                              {/* BEGIN: Super Large Modal Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setSuperlargeModalSizePreview(true);
                                }}
                                className="mb-2 me-1"
                              >
                                نمایش ماژول خیلی بزرگ
                              </Button>
                              {/* END: Super Large Modal Toggle */}
                            </div>
                            {/* BEGIN: Small Modal Content */}
                            <Dialog
                              size="sm"
                              open={smallModalSizePreview}
                              onClose={() => {
                                setSmallModalSizePreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                این ماژول کوچک کاملاً شگفت‌انگیز است!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Small Modal Content */}
                            {/* BEGIN: Medium Modal Content */}
                            <Dialog
                              open={mediumModalSizePreview}
                              onClose={() => {
                                setMediumModalSizePreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                این ماژول متوسط کاملاً شگفت‌انگیز است!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Medium Modal Content */}
                            {/* BEGIN: Large Modal Content */}
                            <Dialog
                              size="lg"
                              open={largeModalSizePreview}
                              onClose={() => {
                                setLargeModalSizePreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                این ماژول بزرگ کاملاً شگفت‌انگیز است!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Large Modal Content */}
                            {/* BEGIN: Super Large Modal Content */}
                            <Dialog
                              size="xl"
                              open={superlargeModalSizePreview}
                              onClose={() => {
                                setSuperlargeModalSizePreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                این کاملاً مدال فوق العاده بزرگ است!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Super Large Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="text-center">
                {/* BEGIN: Small Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setSmallModalSizePreview(true);
                  }}
                  className="mb-2 me-1"
                >
                  نمایش ماژول کوچک
                </Button>
                {/* END: Small Modal Toggle */}
                {/* BEGIN: Medium Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setMediumModalSizePreview(true);
                  }}
                  className="mb-2 me-1"
                >
                  نمایش ماژول متوسط
                </Button>
                {/* END: Medium Modal Toggle */}
                {/* BEGIN: Large Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setLargeModalSizePreview(true);
                  }}
                  className="mb-2 me-1"
                >
                  نمایش ماژول بزرگ
                </Button>
                {/* END: Large Modal Toggle */}
                {/* BEGIN: Super Large Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setSuperlargeModalSizePreview(true);
                  }}
                  className="mb-2 me-1"
                >
                  نمایش ماژول خیلی بزرگ
                </Button>
                {/* END: Super Large Modal Toggle */}
              </div>
              {/* BEGIN: Small Modal Content */}
              <Dialog
                size="sm"
                open={smallModalSizePreview}
                onClose={() => {
                  setSmallModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  این ماژول کوچک کاملاً شگفت‌انگیز است!
                </Dialog.Panel>
              </Dialog>
              {/* END: Small Modal Content */}
              {/* BEGIN: Medium Modal Content */}
              <Dialog
                open={mediumModalSizePreview}
                onClose={() => {
                  setMediumModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  این ماژول متوسط کاملاً شگفت‌انگیز است!
                </Dialog.Panel>
              </Dialog>
              {/* END: Medium Modal Content */}
              {/* BEGIN: Large Modal Content */}
              <Dialog
                size="lg"
                open={largeModalSizePreview}
                onClose={() => {
                  setLargeModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  این ماژول بزرگ کاملاً شگفت‌انگیز است!
                </Dialog.Panel>
              </Dialog>
              {/* END: Large Modal Content */}
              {/* BEGIN: Super Large Modal Content */}
              <Dialog
                size="xl"
                open={superlargeModalSizePreview}
                onClose={() => {
                  setSuperlargeModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  این کاملاً مدال فوق العاده بزرگ است!
                </Dialog.Panel>
              </Dialog>
              {/* END: Super Large Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای "اندازه مدال" قادر می‌سازد تا یک
                        طراحی سازگار و جذاب از نظر بصری را حفظ کنید در حالی که
                        انواع مختلف محتوا را می‌پذیرد و اطمینان می‌یابد که یک
                        تجربه کاربری بی‌درز باشد.
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
                        مدال هشدار
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
                        اجزای "مدال هشدار" یک راه کار کاربرپسند برای نمایش هشدارها، خطاها یا پیام‌های مهم به کاربران شما فراهم می‌کند.
                        روش نمایش هشدارها، خطاها یا پیام‌های مهم
                        روشی برای نمایش هشدارها، خطاها یا پیام‌های مهم به کاربران شما فراهم می‌کند. این ویژگی‌ها
                        طراحی جذاب به نظر می‌رسد و اطمینان می‌یابد که
                        اطلاعات بطور موثر ارتباط برقرار شود.
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
                                  setWarningModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={warningModalPreview}
                              onClose={() => {
                                setWarningModalPreview(false);
                              }}
                            >
                              <Dialog.Panel>
                                <div className="p-5 text-center">
                                  <Lucide
                                    icon="XCircle"
                                    className="w-16 h-16 mx-auto mt-3 text-warning"
                                  />
                                  <div className="mt-5 text-3xl">اوه...</div>
                                  <div className="mt-2 text-slate-500">
                                    مشکلی پیش آمد!
                                  </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                  <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => {
                                      setWarningModalPreview(false);
                                    }}
                                    className="w-24"
                                  >
                                    Ok
                                  </Button>
                                </div>
                                <div className="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
                                  <a href="" className="text-primary">
                                    چرا این مشکل را دارم؟
                                  </a>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
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
                      setWarningModalPreview(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={warningModalPreview}
                  onClose={() => {
                    setWarningModalPreview(false);
                  }}
                >
                  <Dialog.Panel>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="XCircle"
                        className="w-16 h-16 mx-auto mt-3 text-warning"
                      />
                      <div className="mt-5 text-3xl">اوه...</div>
                      <div className="mt-2 text-slate-500">
                        مشکلی پیش آمد!
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setWarningModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                    <div className="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
                      <a href="" className="text-primary">
                        چرا این مشکل را دارم؟
                      </a>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای "مدال هشدار" اطمینان حاصل می‌کند که پیام‌های مهم
                        بطور روشن و جذاب ارائه شوند و کمک می‌کند
                        کاربران به سرعت طبیعت هشدار را متوجه شوند و اقدامات مناسب را انجام دهند. آن را به منظور تطبیق با نیازهای خاص و ظاهر طراحی برنامه خود سفارشی سازی کنید.
                        اقدامات مناسب را انجام دهید. آن را برای سازگاری با
                        نیازها و ظاهر طراحی برنامه خود سفارشی کنید.
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
                        مدال با دکمه بستن
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
                        اجزای "مدال با دکمه بستن" یک راه کار شیوه‌مند و کاربرپسند برای نمایش محتوا در یک دیالوگ مدال را فراهم می‌کند در حالی که به کاربران امکان بستن آسان مدال را می‌دهد.
                        روشی ساده و کاربرپسند برای نمایش محتوا
                        در یک دیالوگ مدال نمایش دهد در حالی که به کاربران امکان بستن آسان مدال را می‌دهد.
                        بستن آسان مدال را می‌دهد. این نوع مدال
                        برای نمایش پیام‌ها، هشدارها یا اطلاعات اضافی مفید است بدون نیاز به تعاملات پیچیده.
                        اطلاعات بدون نیاز به تعاملات پیچیده.
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
                                  setButtonModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={buttonModalPreview}
                              onClose={() => {
                                setButtonModalPreview(false);
                              }}
                            >
                              <Dialog.Panel>
                                <a
                                  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setButtonModalPreview(false);
                                  }}
                                  className="absolute top-0 end-0 mt-3 me-3"
                                  href="#"
                                >
                                  <Lucide
                                    icon="X"
                                    className="w-8 h-8 text-slate-400"
                                  />
                                </a>
                                <div className="p-5 text-center">
                                  <Lucide
                                    icon="CheckCircle"
                                    className="w-16 h-16 mx-auto mt-3 text-success"
                                  />
                                  <div className="mt-5 text-3xl">
                                    مثال مدال
                                  </div>
                                  <div className="mt-2 text-slate-500">
                                    مدال با دکمه بستن
                                  </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                  <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => {
                                      setButtonModalPreview(false);
                                    }}
                                    className="w-24"
                                  >
                                    Ok
                                  </Button>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
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
                      setButtonModalPreview(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={buttonModalPreview}
                  onClose={() => {
                    setButtonModalPreview(false);
                  }}
                >
                  <Dialog.Panel>
                    <a
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setButtonModalPreview(false);
                      }}
                      className="absolute top-0 end-0 mt-3 me-3"
                      href="#"
                    >
                      <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                    </a>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="CheckCircle"
                        className="w-16 h-16 mx-auto mt-3 text-success"
                      />
                      <div className="mt-5 text-3xl">مثال مدال</div>
                      <div className="mt-2 text-slate-500">
                        مدال با دکمه بستن
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setButtonModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای "مدال با دکمه بستن" فرآیند نمایش اطلاعات را در یک دیالوگ مدال ساده‌تر می‌کند
                        در حالی که اطمینان می‌یابد که کاربران می‌توانند به راحتی آن را بسته کنند وقتی که
                        ضروری است. آن را به منظور تطبیق با سبک و نیازهای محتوای برنامه خود سفارشی کنید.
                        ضروری است. آن را برای تطبیق با
                        سبک و نیازهای محتوای برنامه خود سفارشی کنید.
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
                        مدال زمینه استاتیک
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
                        مدال زمینه استاتیک راه کار کاربرپسندی برای
                        اطمینان از اینکه پیام‌های مهم شما متوجه شوند. برخلاف
                        پنجره‌های منبع باز منظم، این یک ویژگی‌های
                        اضافه نخواهد شد هنگامی که برون از آن کلیک کنید یا کلید فرار را فشار دهید. برای
                        موقعیت‌هایی که می‌خواهید کاربران خود را کاملاً
                        توجه دهند، مانند به اشتراک گذاری به‌روزرسانی‌های مهم یا راهنمایی
                        آن‌ها از طریق مراحل. با "مدال زمینه استاتیک"،
                        پیام شما تا زمانی که
                        acknowledged.
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
                                variant="primary"
                                onClick={() => {
                                  setStaticBackdropModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              staticBackdrop
                              open={staticBackdropModalPreview}
                              onClose={() => {
                                setStaticBackdropModalPreview(false);
                              }}
                            >
                              <Dialog.Panel className="px-5 py-10">
                                <div className="text-center">
                                  <div className="mb-5">
                                    I will not close if you click outside me.
                                    Don't even کلید فرار را فشار دهید.
                                  </div>
                                  <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => {
                                      setStaticBackdropModalPreview(false);
                                    }}
                                    className="w-24"
                                  >
                                    Ok
                                  </Button>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStaticBackdropModalPreview(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  staticBackdrop
                  open={staticBackdropModalPreview}
                  onClose={() => {
                    setStaticBackdropModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="px-5 py-10">
                    <div className="text-center">
                      <div className="mb-5">
                        اگر برون از من کلیک کنید، من بسته نخواهم شد. حتی امتحان نکنید
                        کلید فرار را فشار دهید.
                      </div>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setStaticBackdropModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اکنون، شما همه چیز را برای استفاده از
                        مدال زمینه استاتیک را دارید و اطمینان حاصل کنید که پیام‌های شما دیده و تایید شده‌اند
                        به راحتی.
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
                        مدال همپوشانی
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
                        مدال همپوشانی یک ویژگی فوق‌العاده است که امکان
                        نمایش مدال‌های چندگانه بر روی یکدیگر را فراهم می‌کند.
                        این روش عالی برای ارائه اطلاعات به تدریج
                        بدون بارگذاری کاربران خود با محتوای زیاد در یک بار
                        این ویژگی به شما امکان می‌دهد که تجارب هدایت شده
                        یا فرآیندهای مرحله به مرحله را به صورت یکپارچه ایجاد کنید.
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
                                  setOverlappingModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={overlappingModalPreview}
                              onClose={() => {
                                setOverlappingModalPreview(false);
                              }}
                            >
                              <Dialog.Panel className="px-5 py-10">
                                <div className="text-center">
                                  <div className="mb-5">
                                    Click button bellow to show overlapping
                                    modal!
                                  </div>
                                  {/* BEGIN: Overlapping Modal Toggle */}
                                  <Button
                                    as="a"
                                    href="#"
                                    variant="primary"
                                    onClick={(event: React.MouseEvent) => {
                                      event.preventDefault();
                                      setNextOverlappingModalPreview(true);
                                    }}
                                  >
                                    نمایش مدال همپوشانی
                                  </Button>
                                  {/* END: Overlapping Modal Toggle */}
                                </div>
                                {/* BEGIN: Overlapping Modal Content */}
                                <Dialog
                                  open={nextOverlappingModalPreview}
                                  onClose={() => {
                                    setNextOverlappingModalPreview(false);
                                  }}
                                >
                                  <Dialog.Panel className="p-5 text-center">
                                    این مدال همپوشانی کاملاً شگفت‌انگیز است!
                                  </Dialog.Panel>
                                </Dialog>
                                {/* END: Overlapping Modal Content */}
                              </Dialog.Panel>
                            </Dialog>
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
                      setOverlappingModalPreview(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={overlappingModalPreview}
                  onClose={() => {
                    setOverlappingModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="px-5 py-10">
                    <div className="text-center">
                      <div className="mb-5">
                        برای نمایش مدال همپوشانی دکمه زیر را کلیک کنید!
                      </div>
                      {/* BEGIN: Overlapping Modal Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setNextOverlappingModalPreview(true);
                        }}
                      >
                        نمایش مدال همپوشانی
                      </Button>
                      {/* END: Overlapping Modal Toggle */}
                    </div>
                    {/* BEGIN: Overlapping Modal Content */}
                    <Dialog
                      open={nextOverlappingModalPreview}
                      onClose={() => {
                        setNextOverlappingModalPreview(false);
                      }}
                    >
                      <Dialog.Panel className="p-5 text-center">
                        این مدال همپوشانی کاملاً شگفت‌انگیز است!
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Overlapping Modal Content */}
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اکنون شما قدرت مدال همپوشانی را در
                        نوک انگشتان خود دارید. از آن برای ایجاد تجارب کاربری محبوب و
                        تجارب اطلاعاتی استفاده کنید که کاربران خود را از طریق
                        برنامه خود به سرعت هدایت می‌کند. این ویژگی اطمینان می‌دهد که
                        محتوای شما سازمان‌دهی و قابل دسترسی باقی می‌ماند، که این امر
                        آسان‌تر برای کاربران است تا اطلاعات را در
                        pace.
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
                        مدال هدر و فوتر
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
                        اجزای "مدال هدر و فوتر" یک راه کار انعطاف‌پذیر برای ایجاد مدال‌ها با هدرها و
                        فوترهای متمایز ارائه می‌دهد. این بخش‌ها برای اضافه کردن عناوین،
                        اقدامات و اطلاعات اضافی به دیالوگ‌های مدال شما مناسب هستند.
                        مدال‌های خود را با اضافه کردن عناوین، اقدامات و
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
                                  setHeaderFooterModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={headerFooterModalPreview}
                              onClose={() => {
                                setHeaderFooterModalPreview(false);
                              }}
                              initialFocus={sendButtonRef}
                            >
                              <Dialog.Panel>
                                <Dialog.Title>
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
                                </Dialog.Title>
                                <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-1">
                                      From
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-1"
                                      type="text"
                                      placeholder="example@gmail.com"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-2">
                                      To
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-2"
                                      type="text"
                                      placeholder="example@gmail.com"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-3">
                                      Subject
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-3"
                                      type="text"
                                      placeholder="Important Meeting"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-4">
                                      کلمات را دارد
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-4"
                                      type="text"
                                      placeholder="Job, Work, مستندات"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-5">
                                      ندارد
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-5"
                                      type="text"
                                      placeholder="Job, Work, مستندات"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
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
                                </Dialog.Description>
                                <Dialog.Footer>
                                  <Button
                                    type="button"
                                    variant="outline-secondary"
                                    onClick={() => {
                                      setHeaderFooterModalPreview(false);
                                    }}
                                    className="w-20 me-1"
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    variant="primary"
                                    type="button"
                                    className="w-20"
                                    ref={sendButtonRef}
                                  >
                                    Send
                                  </Button>
                                </Dialog.Footer>
                              </Dialog.Panel>
                            </Dialog>
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
                      setHeaderFooterModalPreview(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={headerFooterModalPreview}
                  onClose={() => {
                    setHeaderFooterModalPreview(false);
                  }}
                  initialFocus={sendButtonRef}
                >
                  <Dialog.Panel>
                    <Dialog.Title>
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
                        <Menu.Button className="block w-5 h-5" href="#">
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
                    </Dialog.Title>
                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                      <div className="col-span-12 sm:col-span-6">
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
                      <div className="col-span-12 sm:col-span-6">
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
                      <div className="col-span-12 sm:col-span-6">
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
                      <div className="col-span-12 sm:col-span-6">
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
                      <div className="col-span-12 sm:col-span-6">
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
                      <div className="col-span-12 sm:col-span-6">
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
                    </Dialog.Description>
                    <Dialog.Footer>
                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() => {
                          setHeaderFooterModalPreview(false);
                        }}
                        className="w-20 me-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        type="button"
                        className="w-20"
                        ref={sendButtonRef}
                      >
                        Send
                      </Button>
                    </Dialog.Footer>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اطلاعات اضافی به دیالوگ‌های مدال خود بهبود بخشید.
                        فیلدهای فرم مربوط را برای جلب توجه کاربران خود به طور موثر اضافه کنید.
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
                        مدال حذف
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
                        اجزای "مدال حذف" یک ابزار ارزشمند برای تأیید عملیات حیاتی است که ممکن است
                        پیامدهای غیرقابل برگشتی داشته باشد، مانند حذف
                        سوابق یا داده‌ها. این
                        مدال کاربران را به اتخاذ تصمیم متأنی قبل از
                        ادامه عملیات تشویق می‌کند.
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
                                  setDeleteModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={deleteModalPreview}
                              onClose={() => {
                                setDeleteModalPreview(false);
                              }}
                              initialFocus={deleteButtonRef}
                            >
                              <Dialog.Panel>
                                <div className="p-5 text-center">
                                  <Lucide
                                    icon="XCircle"
                                    className="w-16 h-16 mx-auto mt-3 text-danger"
                                  />
                                  <div className="mt-5 text-3xl">
                                    آیا مطمئن هستید؟
                                  </div>
                                  <div className="mt-2 text-slate-500">
                                    آیا واقعاً می‌خواهید این سوابق را حذف کنید؟{" "}
                                    <br />
                                    این فرآیند قابل بازگشت نیست.
                                  </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                  <Button
                                    type="button"
                                    variant="outline-secondary"
                                    onClick={() => {
                                      setDeleteModalPreview(false);
                                    }}
                                    className="w-24 me-1"
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="danger"
                                    className="w-24"
                                    ref={deleteButtonRef}
                                  >
                                    حذف
                                  </Button>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
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
                      setDeleteModalPreview(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={deleteModalPreview}
                  onClose={() => {
                    setDeleteModalPreview(false);
                  }}
                  initialFocus={deleteButtonRef}
                >
                  <Dialog.Panel>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="XCircle"
                        className="w-16 h-16 mx-auto mt-3 text-danger"
                      />
                      <div className="mt-5 text-3xl">آیا مطمئن هستید؟</div>
                      <div className="mt-2 text-slate-500">
                        آیا واقعاً می‌خواهید این سوابق را حذف کنید؟ <br />
                        این فرآیند قابل بازگشت نیست.
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() => {
                          setDeleteModalPreview(false);
                        }}
                        className="w-24 me-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        variant="danger"
                        className="w-24"
                        ref={deleteButtonRef}
                      >
                        حذف
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مدال حذف به عنوان یک حاجز محافظتی عمل می‌کند
                        در برابر حذف‌های تصادفی و
                        فرصتی برای تأیید اندیشه‌های خود قبل از
                        ادامه دادن. این کمک به جلوگیری از از دست دادن داده و ارائه آرامش
                        ذهن هنگام برخورد با اقدامات حساس می‌کند.
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
                        مدال موفقیت
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
                        اجزای "مدال موفقیت" راه کاری ساده و مؤثر برای
                        ارائه بازخورد مثبت به کاربران و
                        تأیید اقدامات موفق داخل برنامه شما است.
                        این مدال احساس موفقیت را منتقل می‌کند و ارائه می‌دهد
                        کاربران را تأیید می‌کند که یک کار یا
                        action.
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
                                  setSuccessModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={successModalPreview}
                              onClose={() => {
                                setSuccessModalPreview(false);
                              }}
                            >
                              <Dialog.Panel>
                                <div className="p-5 text-center">
                                  <Lucide
                                    icon="CheckCircle"
                                    className="w-16 h-16 mx-auto mt-3 text-success"
                                  />
                                  <div className="mt-5 text-3xl">کار خوبی انجام دادید!</div>
                                  <div className="mt-2 text-slate-500">
                                    شما دکمه را کلیک کردید!
                                  </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                  <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => {
                                      setSuccessModalPreview(false);
                                    }}
                                    className="w-24"
                                  >
                                    Ok
                                  </Button>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
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
                      setSuccessModalPreview(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={successModalPreview}
                  onClose={() => {
                    setSuccessModalPreview(false);
                  }}
                >
                  <Dialog.Panel>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="CheckCircle"
                        className="w-16 h-16 mx-auto mt-3 text-success"
                      />
                      <div className="mt-5 text-3xl">کار خوبی انجام دادید!</div>
                      <div className="mt-2 text-slate-500">
                        شما دکمه را کلیک کردید!
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setSuccessModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای "مدال موفقیت" تجربه کاربر را بهبود می‌بخشد با
                        ارائه بازخورد روشن و انگیزشی. این به کاربران کمک می‌کند
                        که احساس موفقیت و اعتماد به نفس در اقدامات خود داشته باشند،
                        بهبود تجربه کاربر به طور کلی.
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
                        مدال اسلایدر کوچک
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
                        اجزای "مدال اسلایدر کوچک" زیبایی را با
                        دیالوگ‌های مدال به همراه عملکرد پویای یک
                        اسلایدر کوچک ترکیب می‌کند. این به شما اجازه می‌دهد که تصاویر یا محتوا را
                        به یک روش جذاب و تعاملی در یک
                        modal.
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
                                  setTinySliderModalPreview(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={tinySliderModalPreview}
                              onClose={() => {
                                setTinySliderModalPreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-5">
                                <div className="mx-6">
                                  <TinySlider
                                    options={{
                                      mouseDrag: true,
                                      autoplay: false,
                                      controls: true,
                                      center: true,
                                      items: 1,
                                      nav: false,
                                      speed: 500,
                                      responsive: {
                                        600: {
                                          items: 2,
                                        },
                                      },
                                    }}
                                  >
                                    <div className="h-56 px-2">
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
                                    <div className="h-56 px-2">
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
                                    <div className="h-56 px-2">
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
                                    <div className="h-56 px-2">
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
                                  </TinySlider>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
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
                      setTinySliderModalPreview(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={tinySliderModalPreview}
                  onClose={() => {
                    setTinySliderModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="p-5">
                    <div className="mx-6">
                      <TinySlider
                        options={{
                          mouseDrag: true,
                          autoplay: false,
                          controls: true,
                          center: true,
                          items: 1,
                          nav: false,
                          speed: 500,
                          responsive: {
                            600: {
                              items: 2,
                            },
                          },
                        }}
                      >
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="تیل وایز - قالب داشبورد مدیریتی"
                              src={products.fakeProducts()[0].images[0].path}
                            />
                          </div>
                        </div>
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="تیل وایز - قالب داشبورد مدیریتی"
                              src={products.fakeProducts()[0].images[0].path}
                            />
                          </div>
                        </div>
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="تیل وایز - قالب داشبورد مدیریتی"
                              src={products.fakeProducts()[0].images[0].path}
                            />
                          </div>
                        </div>
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="تیل وایز - قالب داشبورد مدیریتی"
                              src={products.fakeProducts()[0].images[0].path}
                            />
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزای "مدال اسلایدر کوچک" انتخاب عالی برای
                        نمایش تصاویر یا محتوا در یک
                        روش فشرده و تعاملی است. این ترکیب راحتی مدال‌ها
                        با عملکرد جذاب اسلایدر را فراهم می‌کند و از آنجا
                        که مناسب برای ارائه گالری محصولات، تصاویر است
                        یا هر محتوایی که از یک
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
                        نمایش/مخفی کردن مدال به صورت برنامه‌نویسی
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
                        ویژگی "نمایش/مخفی کردن مدال به صورت برنامه‌نویسی" برای
                        شما قدرت کنترل دیدن مدال از طریق کد را فراهم می‌کند و این امکان را فراهم می‌کند
                        برای تعاملات پویا در برنامه وب شما فراهم می‌کند.
                        این بخش توضیح می‌دهد که چگونه به صورت برنامه‌نویسی مدیریت کنید
                        نمایش مدال‌ها.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Show Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                className="mb-2 me-1"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setProgrammaticallyModal(true);
                                }}
                              >
                                نمایش مودال
                              </Button>
                            </div>
                            {/* END: Show Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={programmaticallyModal}
                              onClose={() => {
                                setProgrammaticallyModal(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                {/* BEGIN: Hide Modal Toggle */}
                                <Button
                                  as="a"
                                  href="#"
                                  variant="primary"
                                  className="me-1"
                                  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setProgrammaticallyModal(false);
                                  }}
                                >
                                  پنهان کردن مدال
                                </Button>
                                {/* END: Hide Modal Toggle */}
                                {/* BEGIN: Toggle Modal Toggle */}
                                <Button
                                  as="a"
                                  href="#"
                                  variant="primary"
                                  className="me-1"
                                  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setProgrammaticallyModal(
                                      !programmaticallyModal
                                    );
                                  }}
                                >
                                  تغییر وضعیت مدال
                                </Button>
                                {/* END: Toggle Modal Toggle */}
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Show Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    className="mb-2 me-1"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setProgrammaticallyModal(true);
                    }}
                  >
                    نمایش مودال
                  </Button>
                </div>
                {/* END: Show Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={programmaticallyModal}
                  onClose={() => {
                    setProgrammaticallyModal(false);
                  }}
                >
                  <Dialog.Panel className="p-10 text-center">
                    {/* BEGIN: Hide Modal Toggle */}
                    <Button
                      as="a"
                      href="#"
                      variant="primary"
                      className="me-1"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setProgrammaticallyModal(false);
                      }}
                    >
                      پنهان کردن مدال
                    </Button>
                    {/* END: Hide Modal Toggle */}
                    {/* BEGIN: Toggle Modal Toggle */}
                    <Button
                      as="a"
                      href="#"
                      variant="primary"
                      className="me-1"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setProgrammaticallyModal(!programmaticallyModal);
                      }}
                    >
                      تغییر وضعیت مدال
                    </Button>
                    {/* END: Toggle Modal Toggle */}
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        ویژگی "نمایش/مخفی کردن مدال به صورت برنامه‌نویسی" قابلیت‌های
                        تعاملی برنامه وب شما را با
                        ارائه کنترل دقیق بر دیدن مدال به شما کمک می‌کند. آیا نیاز دارید
                        به فعال شدن مدال‌ها بر اساس اعمال کاربر، پاسخ‌های از
                        تماس‌های API یا هر رویداد پویا، این قابلیت اجازه می‌دهد
                        تا تجربیات کاربر جذابی را که به شما متناسب است
                        ایجاد کنید.
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
                    <div className="-mt-px">Dialog</div>
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
                            نوع عنصر HTML برای مدال (پیش‌فرض "div" است).
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`open`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            آیا مدال باز است یا بسته است.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onClose`</Table.Td>
                          <Table.Td>`function`</Table.Td>
                          <Table.Td>
                            تابع فراخوانی شود هنگامی که مدال است
                            closed.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`staticBackdrop`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            آیا مدال دارای پس‌زمینه استاتیک است (کلیک کردن برون)
                            از آن بسته نخواهد کرد).
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`size`</Table.Td>
                          <Table.Td>`Size`</Table.Td>
                          <Table.Td>
                            اندازه مدال، یکی از "sm"، "md"، "lg" یا "xl"
                            (پیش‌فرض "md" است).
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Dialog.Panel</div>
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
                            نوع عنصر HTML برای پنل دیالوگ (پیش‌فرض
                            "div").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Dialog.Title</div>
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
                            نوع عنصر HTML برای عنوان دیالوگ (پیش‌فرض
                            "div").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Dialog.Description</div>
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
                            نوع عنصر HTML برای توضیحات دیالوگ (پیش‌فرض
                            به "div" است).
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Dialog.Footer</div>
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
                            نوع عنصر HTML برای پاورقی دیالوگ (پیش‌فرض
                            "div").
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
                    ماژول خالی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    اندازه ماژول
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مدال هشدار
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مدال با دکمه بستن
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مدال زمینه استاتیک
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مدال همپوشانی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مدال هدر و فوتر
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مدال حذف
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مدال موفقیت
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مدال اسلایدر کوچک
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نمایش/مخفی کردن مدال به صورت برنامه‌نویسی
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
