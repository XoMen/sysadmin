import Lucide from "@/components/Base/Lucide";
import TomSelect from "@/components/Base/TomSelect";
import { ClassicEditor } from "@/components/Base/Ckeditor";
import {
  FormLabel,
  FormCheck,
  FormInput,
  FormInline,
  FormSelect,
  FormSwitch,
  InputGroup,
  FormHelp,
} from "@/components/Base/Form";
import Alert from "@/components/Base/Alert";
import Tippy from "@/components/Base/Tippy";
import products from "@/fakers/products";
import categories from "@/fakers/categories";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [subcategory, setSubcategory] = useState(["0"]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            افزودن محصول
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] me-2"
                  />{" "}
                  اطلاعات محصول
                </div>
                <div className="mt-5">
                  <Alert
                    variant="outline-warning"
                    className="flex items-center px-4 mb-2 bg-warning/5 border-warning/30"
                  >
                    {({ dismiss }) => (
                      <>
                        <div>
                          <Lucide
                            icon="Lightbulb"
                            className="stroke-[1.3] w-4 h-4 me-3 2xl:me-2"
                          />
                        </div>
                        <div className="me-5 leading-relaxed">
                          از فروش محصولات قلباز / نقض حقوق مالکیت فکری اجتناب کنید،
                          حقوق مالکیت فکری، تا محصولات شما
                          حذف نشوند.
                          <a
                            href=""
                            className="ms-1 font-medium underline decoration-dotted decoration-warning/50 underline-offset-[3px]"
                          >
                            بیشتر بدانید
                          </a>
                          <Alert.DismissButton
                            type="button"
                            className="inset-y-0 btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </div>
                      </>
                    )}
                  </Alert>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">نام محصول</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          نام یکتای محصول خود را وارد کنید. آن را
                          توصیفی کنید و برای مشتریان به یادآوری آسان باشد.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="Product name" />
                      <FormHelp>حداکثر تعداد کاراکتر 0/70</FormHelp>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">دسته</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          دسته‌ی اصلی را که بهترین نمایانگر محصول شماست انتخاب کنید. این به مشتریان کمک می‌کند که محصول شما را
                          به‌طور آسان‌تر پیدا کنند.
                          بسادگی.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSelect id="category">
                        {categories.fakeCategories().map((faker, fakerKey) => (
                          <option key={fakerKey} value={fakerKey}>
                            {faker.name}
                          </option>
                        ))}
                      </FormSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">زیردسته</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          زیردسته‌ای را که به نزدیکی
                          متناسب با محصول شماست انتخاب کنید. این اطلاعات جزئی‌تری را
                          درباره مورد شما فراهم می‌کند.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <TomSelect
                        value={subcategory}
                        onChange={(e) => {
                          setSubcategory(e.target.value);
                        }}
                        options={{
                          placeholder: "Etalase",
                        }}
                        className="w-full"
                        multiple
                      >
                        {categories.fakeCategories().map((faker, fakerKey) => (
                          <option key={fakerKey} value={fakerKey}>
                            {faker.name}
                          </option>
                        ))}
                      </TomSelect>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/80 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] me-2"
                  />{" "}
                  بارگذاری محصول
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">تصاویر محصول</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          تصاویر با کیفیت بالا می‌توانند به شدت تأثیرگذار باشند
                          بر جذابیت محصول شما. تصاویر واضح و روشنی بارگذاری کنید که
                          محصول شما را از زوایا و دیدگاه‌های مختلف نشان دهند.
                          پرسپکتیو.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="border border-dashed rounded-md border-slate-300/80">
                        <div className="grid grid-cols-9 gap-5 px-5 pt-5 sm:grid-cols-10">
                          {_.take(products.fakeProducts(), 5).map(
                            (faker, fakerKey) => (
                              <div
                                key={fakerKey}
                                className="relative h-24 col-span-3 cursor-pointer md:col-span-2 image-fit zoom-in"
                              >
                                <img
                                  className="rounded-lg"
                                  alt="تیل وایز - قالب داشبورد مدیریتی"
                                  src={faker.images[0].path}
                                />
                                <Tippy
                                  content="Delete this image?"
                                  className="absolute top-0 end-0 w-5 h-5 -mt-2 -me-2 bg-white rounded-full"
                                >
                                  <div className="flex items-center justify-center w-full h-full text-white border rounded-full bg-danger/80 border-danger/50">
                                    <Lucide
                                      icon="X"
                                      className="w-4 h-4 stroke-[1.3]"
                                    />
                                  </div>
                                </Tippy>
                              </div>
                            )
                          )}
                        </div>
                        <div className="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer">
                          <Lucide icon="Image" className="w-4 h-4 me-2" />
                          <span className="me-1 text-primary">
                            بارگذاری یک فایل
                          </span>{" "}
                          یا کشیدن و رها کردن
                          <FormInput
                            id="horizontal-form-1"
                            type="file"
                            className="absolute top-0 start-0 w-full h-full opacity-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] me-2"
                  />{" "}
                  جزئیات محصول
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">شرایط</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          شرایط محصول خود را به دقت انتخاب کنید تا
                          انتظارات واضحی را برای خریداران تعیین کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col sm:flex-row">
                        <FormCheck className="me-4">
                          <FormCheck.Input
                            id="condition-new"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-chris-evans"
                          />
                          <FormCheck.Label htmlFor="condition-new">
                            New
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 me-4 sm:mt-0">
                          <FormCheck.Input
                            id="condition-second"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson"
                          />
                          <FormCheck.Label htmlFor="condition-second">
                            ثانیه
                          </FormCheck.Label>
                        </FormCheck>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">توضیحات محصول</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          یک توضیح جامع ایجاد کنید که ویژگی‌های یکتای، مزایا و مشخصات
                          محصول شما را برجسته کند.
                          product.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <ClassicEditor
                        value={editorData}
                        onChange={setEditorData}
                      />
                      <FormHelp className="text-end">
                        حداکثر تعداد کاراکتر 0/2000
                      </FormHelp>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">ویدئو محصول</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          یک ویدئویی که محصول شما در حالت عملی را نشان می‌دهد اضافه کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <Button
                        variant="outline-primary"
                        className="w-40 border-primary/50"
                      >
                        <Lucide
                          icon="Camera"
                          className="stroke-[1.3] w-4 h-4 me-2"
                        />{" "}
                        آدرس ویدئو را وارد کنید
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] me-2"
                  />{" "}
                  جزئیات محصول
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">نسخه محصول</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          نام کامل و قانونی خود را به همان شکلی که در
                          شناسنامه رسمی شما ظاهر می‌شود وارد کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <Button
                        variant="outline-primary"
                        className="w-40 border-primary/50"
                      >
                        <Lucide
                          icon="KanbanSquare"
                          className="stroke-[1.3] w-4 h-4 me-2 -ms-0.5"
                        />{" "}
                        افزودن نسخه
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] me-2"
                  />{" "}
                  نسخه محصول (جزئیات)
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">نسخه 1</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          وارد کردن تغییرات مختلف محصول شما، مانند
                          اندازه، رنگ یا سبک.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="relative py-10 ps-5 pe-5 border rounded-md xl:pe-10 bg-slate-50/80 border-slate-200/80 dark:bg-transparent dark:border">
                        <a
                          href=""
                          className="absolute top-0 end-0 mt-4 me-4 text-slate-500"
                        >
                          <Lucide icon="X" className="w-5 h-5" />
                        </a>
                        <div>
                          <FormInline className="mt-5 first:mt-0">
                            <FormLabel className="sm:w-20">نام</FormLabel>
                            <div className="flex items-center flex-1 xl:pe-20">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="Size" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                            </div>
                          </FormInline>
                          <FormInline className="items-start mt-5 first:mt-0">
                            <FormLabel className="mt-2 sm:w-20">
                              گزینه‌ها
                            </FormLabel>
                            <div className="flex-1">
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="کوچک" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ms-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ms-3 xl:ms-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="متوسط" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ms-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ms-3 xl:ms-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="بزرگ" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ms-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ms-3 xl:ms-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </FormInline>
                          <div className="mt-5 xl:ms-20 xl:ps-5 xl:pe-20 first:mt-0">
                            <Button
                              variant="outline-primary"
                              className="w-full border-dashed"
                            >
                              <Lucide
                                icon="Plus"
                                className="w-4 h-4 me-2 stroke-[1.3]"
                              />{" "}
                              افزودن گزینه
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-2 mt-2 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">نوع ۲</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          وارد کردن تغییرات مختلف محصول شما، مانند
                          اندازه، رنگ یا سبک.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="relative py-10 ps-5 pe-5 border rounded-md xl:pe-10 bg-slate-50/80 border-slate-200/80 dark:bg-transparent dark:border">
                        <a
                          href=""
                          className="absolute top-0 end-0 mt-4 me-4 text-slate-500"
                        >
                          <Lucide icon="X" className="w-5 h-5" />
                        </a>
                        <div>
                          <FormInline className="mt-5 first:mt-0">
                            <FormLabel className="sm:w-20">نام</FormLabel>
                            <div className="flex items-center flex-1 xl:pe-20">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="Size" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                            </div>
                          </FormInline>
                          <FormInline className="items-start mt-5 first:mt-0">
                            <FormLabel className="mt-2 sm:w-20">
                              گزینه‌ها
                            </FormLabel>
                            <div className="flex-1">
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="کوچک" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ms-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ms-3 xl:ms-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="متوسط" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ms-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ms-3 xl:ms-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="بزرگ" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ms-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ms-3 xl:ms-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </FormInline>
                          <div className="mt-5 xl:ms-20 xl:ps-5 xl:pe-20 first:mt-0">
                            <Button
                              variant="outline-primary"
                              className="w-full border-dashed"
                            >
                              <Lucide
                                icon="Plus"
                                className="w-4 h-4 me-2 stroke-[1.3]"
                              />{" "}
                              افزودن گزینه
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 mt-2 xl:ms-60 xl:ps-14 first:mt-0 first:pt-0">
                    <Button
                      variant="outline-secondary"
                      className="w-full py-3 bg-slate-50/80 border-slate-200/80"
                    >
                      <Lucide
                        icon="Plus"
                        className="w-4 h-4 me-2 stroke-[1.3]"
                      />{" "}
                      افزودن نوع جدید
                    </Button>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">اطلاعات نوع</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          از این بخش برای مشخص کردن گزینه‌ها،
                          پیکربندی‌ها، یا انواع موجود برای
                          product.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="grid-cols-4 gap-2 sm:grid">
                        <InputGroup>
                          <InputGroup.Text>$</InputGroup.Text>
                          <FormInput type="text" placeholder="قیمت" />
                        </InputGroup>
                        <FormInput
                          type="text"
                          className="mt-2 sm:mt-0"
                          placeholder="موجودی"
                        />
                        <FormInput
                          type="text"
                          className="mt-2 sm:mt-0"
                          placeholder="کد نوع"
                        />
                        <Button
                          variant="outline-primary"
                          className="mt-2 border-primary/50 bg-primary/5 sm:mt-0"
                        >
                          اعمال برای همه
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">لیست انواع</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          از این بخش برای نمایش انواع محصولات مختلف، گزینه‌ها، یا پیکربندی‌های موجود به
                          مشتریان استفاده کنید.
                          customers.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="overflow-x-auto">
                        <Table className="border">
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                Size
                              </Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                <div className="flex items-center">
                                  رنگ{" "}
                                  <Lucide
                                    icon="HelpCircle"
                                    className="w-4 h-4 ms-2"
                                  />
                                </div>
                              </Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">
                                قیمت
                              </Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">
                                <div className="flex items-center">
                                  <div className="relative w-4 h-4 me-2 -mt-0.5 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-primary/20 before:rounded-full lg:before:animate-ping after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:border-4 after:border-white/60 after:dark:border-darkmode-300"></div>
                                  موجودی{" "}
                                  <Lucide
                                    icon="HelpCircle"
                                    className="w-4 h-4 ms-2"
                                  />
                                </div>
                              </Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !ps-2">
                                کد نوع
                              </Table.Th>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>
                            <Table.Tr>
                              <Table.Td rowSpan={3} className="border-r">
                                کوچک
                              </Table.Td>
                              <Table.Td>سیاه</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="موجودی"
                                />
                              </Table.Td>
                              <Table.Td className="!ps-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="کد نوع"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>سفید</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="موجودی"
                                />
                              </Table.Td>
                              <Table.Td className="!ps-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="کد نوع"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>خاکستری</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="موجودی"
                                />
                              </Table.Td>
                              <Table.Td className="!ps-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="کد نوع"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td rowSpan={3} className="border-r">
                                متوسط
                              </Table.Td>
                              <Table.Td>سیاه</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="موجودی"
                                />
                              </Table.Td>
                              <Table.Td className="!ps-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="کد نوع"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>سفید</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="موجودی"
                                />
                              </Table.Td>
                              <Table.Td className="!ps-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="کد نوع"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>خاکستری</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="موجودی"
                                />
                              </Table.Td>
                              <Table.Td className="!ps-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="کد نوع"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td rowSpan={3} className="border-r">
                                بزرگ
                              </Table.Td>
                              <Table.Td>سیاه</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="موجودی"
                                />
                              </Table.Td>
                              <Table.Td className="!ps-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="کد نوع"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>سفید</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="موجودی"
                                />
                              </Table.Td>
                              <Table.Td className="!ps-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="کد نوع"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>خاکستری</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="موجودی"
                                />
                              </Table.Td>
                              <Table.Td className="!ps-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="کد نوع"
                                />
                              </Table.Td>
                            </Table.Tr>
                          </Table.Tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">قیمت عمده فروشی</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          قیمت تخفیف داده شده برای خرید محصولات به تعداد
                          بیشتر تنظیم کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="overflow-x-auto">
                        <Table className="border">
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Th className="!pe-2 bg-slate-50 dark:bg-darkmode-800"></Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800"></Table.Th>
                              <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                حداقل
                              </Table.Th>
                              <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                حداکثر
                              </Table.Th>
                              <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                قیمت واحد
                              </Table.Th>
                              <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800"></Table.Th>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>
                            <Table.Tr>
                              <Table.Td className="!pe-2">1.</Table.Td>
                              <Table.Td className="whitespace-nowrap">
                                قیمت عمده فروشی ۱
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Min Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Max Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!ps-4 text-slate-500">
                                <a href="">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td className="!pe-2">2.</Table.Td>
                              <Table.Td className="whitespace-nowrap">
                                قیمت عمده فروشی ۲
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Min Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Max Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!ps-4 text-slate-500">
                                <a href="">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td className="!pe-2">3.</Table.Td>
                              <Table.Td className="whitespace-nowrap">
                                قیمت عمده فروشی ۳
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Min Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Max Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="قیمت"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!ps-4 text-slate-500">
                                <a href="">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </Table.Td>
                            </Table.Tr>
                          </Table.Tbody>
                        </Table>
                      </div>
                      <Button
                        variant="outline-primary"
                        className="w-full mt-4 border-dashed"
                      >
                        <Lucide
                          icon="Plus"
                          className="w-4 h-4 me-2 stroke-[1.3]"
                        />{" "}
                        افزودن قیمت عمده فروشی جدید
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] me-2"
                  />{" "}
                  مدیریت محصول
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">وضعیت محصول</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          وضعیتی را که بهترین بازتاب موجودی
                          این محصول برای مشتریان را نشان می‌دهد انتخاب کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSwitch>
                        <FormSwitch.Input
                          id="product-status-active"
                          type="checkbox"
                        />
                        <FormSwitch.Label htmlFor="product-status-active">
                          فعال
                        </FormSwitch.Label>
                      </FormSwitch>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">موجودی محصول</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          مقدار کل این محصول که در حال حاضر موجود است را وارد کنید.
                          stock.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        id="product-stock"
                        type="text"
                        placeholder="Input موجودی محصول"
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">واحد نگهداری موجودی</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          یک شناسه ممیز برای این محصول در
                          انبار خود وارد کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput id="sku" type="text" placeholder="Input SKU" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] me-2"
                  />{" "}
                  حمل و نقل
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">وزن محصول</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          وزن محصول را در واحد اندازه‌گیری ترجیحی
                          (مثلاً پوند، کیلوگرم، اونس) وارد کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="grid-cols-4 gap-2 sm:grid">
                        <FormSelect>
                          <option value="گرم (گرم)">گرم (گرم)</option>
                          <option value="کیلوگرم (کیلوگرم)">کیلوگرم (کیلوگرم)</option>
                        </FormSelect>
                        <FormInput
                          type="text"
                          id="product-weight"
                          className="mt-2 sm:mt-0"
                          placeholder="موجودی"
                        />
                      </div>
                      <Alert
                        variant="outline-primary"
                        className="flex items-center px-4 mt-5 mb-2 bg-primary/5 border-primary/20"
                      >
                        {({ dismiss }) => (
                          <>
                            <Lucide
                              icon="AlertTriangle"
                              className="w-[1.15rem] h-[1.15rem] me-3"
                            />{" "}
                            <div className="me-5 leading-relaxed">
                              به وزن محصول به دقت توجه کنید تا تفاوتی در داده‌ها با
                              پیک پستی وجود نداشته باشد.
                              پیک حمل و نقل{" "}
                              <a
                                className="ms-1 font-medium underline decoration-dotted decoration-primary/50 underline-offset-[3px]"
                                href=""
                              >
                                بیشتر بدانید
                              </a>
                            </div>
                            <Alert.DismissButton
                              type="button"
                              className="btn-close"
                              onClick={dismiss}
                              aria-label="Close"
                            >
                              <Lucide icon="X" className="w-4 h-4" />
                            </Alert.DismissButton>
                          </>
                        )}
                      </Alert>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">اندازه محصول</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          ابعاد یا اندازه محصول را شامل
                          طول، عرض و ارتفاع، در واحد ترجیحی
                          (مثلاً اینچ، سانتیمتر) وارد کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="grid-cols-3 gap-2 sm:grid">
                        <InputGroup>
                          <FormInput type="text" placeholder="Width" />
                          <InputGroup.Text>cm</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mt-2 sm:mt-0">
                          <FormInput type="text" placeholder="Height" />
                          <InputGroup.Text>cm</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mt-2 sm:mt-0">
                          <FormInput type="text" placeholder="Length" />
                          <InputGroup.Text>cm</InputGroup.Text>
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">بیمه حمل و نقل</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          نشان دهید که آیا بیمه حمل و نقل برای
                          این محصول ارائه می‌شود تا در مقابل از دست رفتن یا آسیب
                          در طول انتقال محافظت شود.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col gap-y-2 sm:flex-row">
                        <FormCheck className="me-4">
                          <FormCheck.Input
                            id="shipping-insurance-required"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-chris-evans"
                          />
                          <FormCheck.Label>
                            <div className="font-medium">ضروری</div>
                            <div className="w-56 mt-1 text-xs leading-relaxed text-slate-500">
                              You{" "}
                              <span className="font-medium text-slate-600 dark:text-slate-300">
                                require
                              </span>{" "}
                              خریدار را فعال سازی بیمه حمل و نقل
                            </div>
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 me-4 sm:mt-0">
                          <FormCheck.Input
                            id="shipping-insurance-optional"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson"
                          />
                          <FormCheck.Label>
                            <div className="font-medium">اختیاری</div>
                            <div className="w-56 mt-1 text-xs leading-relaxed text-slate-500">
                              You{" "}
                              <span className="font-medium text-slate-600 dark:text-slate-300">
                                به خریدار گزینه‌ی
                              </span>{" "}
                              فعال کردن بیمه حمل و نقل را بدهید.
                            </div>
                          </FormCheck.Label>
                        </FormCheck>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">خدمات حمل و نقل</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          خدمات حمل و نقل یا روش ترجیحی برای
                          تحویل این محصول به مشتریان را وارد کنید.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col sm:flex-row">
                        <FormCheck className="me-4">
                          <FormCheck.Input
                            id="shipping-service-standard"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-chris-evans"
                          />
                          <FormCheck.Label htmlFor="shipping-service-standard">
                            Standard
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 me-4 sm:mt-0">
                          <FormCheck.Input
                            id="shipping-service-custom"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson"
                          />
                          <FormCheck.Label htmlFor="shipping-service-custom">
                            Custom
                          </FormCheck.Label>
                        </FormCheck>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        خدمات تحویل برای این محصول مانند
                        تنظیمات حمل و نقل
                        <a className="ms-1 font-medium text-primary" href="">
                          خواهد بود.
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:me-5 sm:text-end xl:w-60 xl:me-14">
                      <div className="text-start">
                        <div className="flex items-center">
                          <div className="font-medium">سفارش پیش‌فروش</div>
                          <div className="ms-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            ضروری
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                          اگر این محصول هنوز در دسترس نیست، سفارش پیش‌فروش را فعال کنید تا به مشتریان اجازه دهید آن را
                          قبل از زمان موجودی رزرو کنند.
                          قبل از زمان.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSwitch>
                        <FormSwitch.Input
                          id="preorder-active"
                          type="checkbox"
                        />
                        <FormSwitch.Label
                          className="text-xs leading-relaxed text-slate-500"
                          htmlFor="preorder-active"
                        >
                          اگر نیاز به یک فرآیند حمل و نقل بلندتر دارید، سفارش پیش‌فروش را فعال کنید.
                          process.
                          <a className="ms-1 font-medium text-primary" href="">
                            بیشتر بدانید.
                          </a>
                        </FormSwitch.Label>
                      </FormSwitch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-3 mt-1 md:flex-row">
              <Button
                variant="outline-secondary"
                className="w-full border-slate-300/80 bg-white/80 md:w-56 py-2.5 rounded-[0.5rem]"
              >
                <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 me-2" />
                Cancel
              </Button>
              <Button
                variant="outline-secondary"
                className="w-full border-slate-300/80 bg-white/80 md:w-56 py-2.5 rounded-[0.5rem]"
              >
                <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 me-2" />
                ذخیره و افزودن جدید
              </Button>
              <Button
                variant="primary"
                className="w-full md:w-56 py-2.5 rounded-[0.5rem]"
              >
                <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 me-2" />
                Save
              </Button>
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
                    بارگذاری محصول
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    اطلاعات محصول
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    جزئیات محصول
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نسخه محصول
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نسخه محصول (جزئیات)
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    مدیریت محصول
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    وزن و حمل و نقل
                  </a>
                </li>
              </ul>
              <div className="relative p-5 mt-7 border rounded-[0.6rem] bg-warning/[0.07] dark:bg-darkmode-600 border-warning/[0.15] dark:border-0">
                <Lucide
                  icon="Lightbulb"
                  className="absolute top-0 end-0 w-12 h-12 mt-5 me-3 text-warning/80"
                />
                <h2 className="text-lg font-medium">Tips</h2>
                <div className="mt-4 font-medium">قیمت</div>
                <div className="mt-2 text-xs leading-relaxed text-slate-600/90 dark:text-slate-500">
                  <div>
                    فرمت تصویر .jpg .jpeg .png و حداقل اندازه
                    300 x 300 پیکسل (برای تصاویر بهینه حداقل اندازه
                    700 x 700 پیکسل است).
                  </div>
                  <div className="mt-2">
                    تصاویر محصول را انتخاب یا تا 5 تصویر را در یک بار اینجا رها کنید. حداقل 3 تصویر جذاب را در نظر بگیرید تا محصول را برای خریداران جذاب‌تر کنید.
                    یک بار اینجا. حداقل ۳ تصویر جذاب را اضافه کنید تا
                    محصول را برای خریداران جذاب‌تر کنید.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
