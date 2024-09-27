import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import ReportBarChart3 from "@/components/ReportBarChart3";
import ReportBarChart4 from "@/components/ReportBarChart4";
import { FormSelect, FormInput } from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12 2xl:col-span-3">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-12 lg:col-span-4 2xl:col-span-12">
            <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
              <div className="text-base font-medium group-[.mode--light]:text-white">
                موجودی فعلی
              </div>
            </div>
            <div className="p-5 mt-3.5 box box--stacked">
              <Menu className="absolute top-0 end-0 mt-5 me-5">
                <Menu.Button className="w-5 h-5 text-slate-500">
                  <Lucide
                    icon="MoreVertical"
                    className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                  />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="Copy" className="w-4 h-4 me-2" /> کپی لینک
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Trash" className="w-4 h-4 me-2" />
                    حذف
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                <Lucide icon="Box" className="w-6 h-6 text-info fill-info/10" />
              </div>
              <div className="mt-8 mb-6 lg:mt-16 lg:mb-7 2xl:mt-7 2xl:mb-5">
                <div className="text-base text-slate-500">در دسترس</div>
                <div className="flex items-center mt-1 text-2xl font-medium">
                  <span className="text-[1.3rem]">$</span>
                  <span className="ml-px me-1.5">435,220,00</span>
                  <span className="text-base mt-0.5">دلار آمریکا</span>
                </div>
              </div>
              <a className="flex items-center font-medium text-primary" href="">
                تنظیم انتقال خودکار
                <Lucide icon="MoveRight" className="w-4 h-4 ms-1.5" />
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-12">
            <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
              <div className="text-base font-medium lg:group-[.mode--light]:text-white 2xl:group-[.mode--light]:text-current">
                پول وارد شده
              </div>
            </div>
            <div className="p-5 mt-3.5 box box--stacked">
              <Menu className="absolute top-0 end-0 mt-5 me-5">
                <Menu.Button className="w-5 h-5 text-slate-500">
                  <Lucide
                    icon="MoreVertical"
                    className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                  />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="Copy" className="w-4 h-4 me-2" /> کپی لینک
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Trash" className="w-4 h-4 me-2" />
                    حذف
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <div className="pb-5 mb-5 border-b border-dashed border-slate-300/70">
                <div className="text-base text-slate-500">مجموع دریافتی</div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-xl font-medium">
                    <span className="mr-px">$</span>2,176,221
                    <span className="ms-1.5 text-sm">دلار آمریکا</span>
                  </div>
                </div>
              </div>
              <ReportBarChart3 className="relative z-10 -ms-1" height={80} />
              <a
                className="flex items-center mt-6 font-medium text-primary"
                href=""
              >
                درخواست پول
                <Lucide icon="MoveRight" className="w-4 h-4 ms-1.5" />
              </a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-12">
            <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
              <div className="text-base font-medium lg:group-[.mode--light]:text-white 2xl:group-[.mode--light]:text-current">
                پول خارج شده
              </div>
            </div>
            <div className="p-5 mt-3.5 box box--stacked">
              <Menu className="absolute top-0 end-0 mt-5 me-5">
                <Menu.Button className="w-5 h-5 text-slate-500">
                  <Lucide
                    icon="MoreVertical"
                    className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                  />
                </Menu.Button>
                <Menu.Items className="w-40">
                  <Menu.Item>
                    <Lucide icon="Copy" className="w-4 h-4 me-2" /> کپی لینک
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Trash" className="w-4 h-4 me-2" />
                    حذف
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <div className="pb-5 mb-5 border-b border-dashed border-slate-300/70">
                <div className="text-base text-slate-500">
                  مجموع ارسال شده یا هزینه شده
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center text-xl font-medium">
                    <span className="mr-px">$</span>4,176,132
                    <span className="ms-1.5 text-sm">دلار آمریکا</span>
                  </div>
                </div>
              </div>
              <ReportBarChart4 className="relative z-10 -ms-1" height={80} />
              <a
                className="flex items-center mt-6 font-medium text-primary"
                href=""
              >
                ارسال پول
                <Lucide icon="MoveRight" className="w-4 h-4 ms-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 2xl:col-span-9 gap-y-10">
        <div>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium 2xl:group-[.mode--light]:text-white">
              لینک‌های سریع
            </div>
          </div>
          <div className="mt-3.5 box box--stacked">
            <div className="grid grid-cols-2 px-5 py-10 border-b sm:grid-cols-3 md:grid-cols-5 gap-y-5 lg:grid-cols-7">
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                  <Lucide
                    icon="CreditCard"
                    className="w-6 h-6 text-primary fill-primary/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">ابزارهای تجاری</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                  <Lucide
                    icon="WalletCards"
                    className="w-6 h-6 text-info fill-info/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">صورتحساب</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                  <Lucide
                    icon="Airplay"
                    className="w-6 h-6 text-info fill-info/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">درخواست پول</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-success/10 bg-success/10">
                  <Lucide
                    icon="Banknote"
                    className="w-6 h-6 text-success fill-success/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">ارسال پول</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-pending/10 bg-pending/10">
                  <Lucide
                    icon="Users"
                    className="w-6 h-6 text-pending fill-pending/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">اشتراک گذاری پروفایل</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                  <Lucide
                    icon="ShoppingBag"
                    className="w-6 h-6 text-primary fill-primary/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">پرداخت</div>
              </a>
              <a href="" className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 border rounded-full border-warning/10 bg-warning/10">
                  <Lucide
                    icon="CircleDollarSign"
                    className="w-6 h-6 text-warning fill-warning/10"
                  />
                </div>
                <div className="mt-3 text-slate-500">پذیرش پرداخت‌ها</div>
              </a>
            </div>
            <div className="flex flex-col items-center gap-5 px-6 pt-5 pb-6 rounded-b-lg md:flex-row bg-slate-50">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-info/10 bg-info/10">
                <Lucide icon="Box" className="w-6 h-6 text-info fill-info/10" />
              </div>
              <div className="text-center md:text-start">
                <div className="mt-1 text-lg font-medium">صورتحساب</div>
                <div className="mt-1 leading-relaxed text-slate-600">
                  در چند دقیقه یک فاکتور یا تخمین ارسال کنید. مشتریان می‌توانند با
                  کارت‌ها یا تیلوایس پرداخت کنند.
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 sm:w-auto sm:flex-row md:ms-auto">
                <Button as="a" rounded className="w-full sm:w-36" href="">
                  الان نه
                </Button>
                <Button
                  as="a"
                  variant="outline-primary"
                  rounded
                  className="w-full sm:w-36 border-primary/50"
                  href=""
                >
                  بیشتر بدانید
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
          <div className="flex flex-col gap-y-10">
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">ارسال پرداخت‌ها</div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <FormInput
                  type="text"
                  placeholder="Add an email or name"
                  className="py-3"
                />
                <Button
                  variant="outline-primary"
                  rounded
                  className="px-10 mt-6 border-primary/50"
                >
                  بعدی
                </Button>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">درخواست پول</div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <div className="flex">
                  <div className="flex items-center text-2xl">
                    <span className="me-1.5 -mt-1 text-base font-medium">
                      $
                    </span>{" "}
                    <span
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      className="outline-none"
                    >
                      0,00
                    </span>{" "}
                    <div className="relative flex items-center ms-2 text-primary">
                      <FormSelect className="p-0 pe-4 text-sm border-0 shadow-none bg-none focus:ring-0">
                        <option value="دلار آمریکا">دلار آمریکا</option>
                        <option value="دلار استرالیا">دلار استرالیا</option>
                        <option value="رئال برزیل">رئال برزیل</option>
                        <option value="دلار کانادا">دلار کانادا</option>
                        <option value="فرانک سوییس">فرانک سوییس</option>
                        <option value="کرونای جمهوری چک">کرونای جمهوری چک</option>
                        <option value="کرون دانمارک">کرون دانمارک</option>
                        <option value="یورو">یورو</option>
                        <option value="پوند استرلینگ">پوند استرلینگ</option>
                        <option value="دلار هنگ‌کنگ">دلار هنگ‌کنگ</option>
                        <option value="فورینت مجارستان">فورینت مجارستان</option>
                        <option value="شقل اسرائیل">شقل اسرائیل</option>
                        <option value="ین ژاپن">ین ژاپن</option>
                        <option value="پزو مکزیک">پزو مکزیک</option>
                        <option value="کرون نروژ">کرون نروژ</option>
                        <option value="دلار زلاند نو">دلار زلاند نو</option>
                        <option value="پزو فیلیپین">پزو فیلیپین</option>
                        <option value="زواتی لهستان">زواتی لهستان</option>
                        <option value="روبل روسیه">روبل روسیه</option>
                        <option value="کرون سوئد">کرون سوئد</option>
                        <option value="دلار سنگاپور">دلار سنگاپور</option>
                        <option value="بات تایلند">بات تایلند</option>
                        <option value="دلار جدید تایوان">دلار جدید تایوان</option>
                      </FormSelect>
                      <Lucide
                        icon="ChevronDown"
                        className="absolute end-0 my-auto inset-y-0 stroke-[1.3] w-4 h-4 ms-1"
                      />
                    </div>
                  </div>
                </div>
                <FormInput
                  type="text"
                  placeholder="Add an email or name"
                  className="py-3 mt-5"
                />
                <Button
                  variant="outline-primary"
                  rounded
                  className="px-10 mt-6 border-primary/50"
                >
                  بعدی
                </Button>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">صدور بازپرداخت</div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 start-0 w-6 h-6 my-auto ms-3 text-slate-400"
                  />
                  <FormInput
                    type="text"
                    placeholder="Transaction id, invoice id or email"
                    className="py-3 ps-11"
                  />
                </div>
                <div className="mt-3 text-slate-500">
                  هر پرداختی که قابل بازپرداخت است و با هیچ یک از بازهای باز نیست را پیدا کنید
                  موارد. مقدار بازپرداخت را وارد کنید و ارسال کنید.
                </div>
                <div className="mt-5 text-slate-500">
                  <a href="" className="font-medium text-primary">
                    بیشتر بدانید
                  </a>{" "}
                  درباره بازپرداخت
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">
                  ایجاد یک اشتراک
                </div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <FormInput
                  type="text"
                  placeholder="Enter product name"
                  className="py-3"
                />
                <FormInput
                  type="text"
                  placeholder="Enter plan name"
                  className="py-3 mt-3"
                />
                <div className="flex gap-3 mt-3">
                  <FormSelect className="py-3">
                    <option value="دلار آمریکا">دلار آمریکا</option>
                    <option value="دلار استرالیا">دلار استرالیا</option>
                    <option value="رئال برزیل">رئال برزیل</option>
                    <option value="دلار کانادا">دلار کانادا</option>
                    <option value="فرانک سوییس">فرانک سوییس</option>
                    <option value="کرونای جمهوری چک">کرونای جمهوری چک</option>
                    <option value="کرون دانمارک">کرون دانمارک</option>
                    <option value="یورو">یورو</option>
                    <option value="پوند استرلینگ">پوند استرلینگ</option>
                    <option value="دلار هنگ‌کنگ">دلار هنگ‌کنگ</option>
                    <option value="فورینت مجارستان">فورینت مجارستان</option>
                    <option value="شقل اسرائیل">شقل اسرائیل</option>
                    <option value="ین ژاپن">ین ژاپن</option>
                    <option value="پزو مکزیک">پزو مکزیک</option>
                    <option value="کرون نروژ">کرون نروژ</option>
                    <option value="دلار زلاند نو">دلار زلاند نو</option>
                    <option value="پزو فیلیپین">پزو فیلیپین</option>
                    <option value="زواتی لهستان">زواتی لهستان</option>
                    <option value="روبل روسیه">روبل روسیه</option>
                    <option value="کرون سوئد">کرون سوئد</option>
                    <option value="دلار سنگاپور">دلار سنگاپور</option>
                    <option value="بات تایلند">بات تایلند</option>
                    <option value="دلار جدید تایوان">دلار جدید تایوان</option>
                  </FormSelect>
                  <FormInput type="text" placeholder="0,00" className="py-3" />
                  <FormSelect className="py-3">
                    <option value="monthly">ماهانه</option>
                    <option value="yearly">سالیانه</option>
                    <option value="weekly">Weekly</option>
                    <option value="daily">روزانه</option>
                  </FormSelect>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button
                    rounded
                    variant="primary"
                    className="px-7 border-primary/50"
                  >
                    اکنون ایجاد کنید
                  </Button>
                  <Button
                    rounded
                    variant="outline-primary"
                    className="px-7 border-primary/50"
                  >
                    گزینه‌های بیشتر
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
                <div className="text-base font-medium">ایجاد یک فاکتور</div>
              </div>
              <div className="p-5 mt-3.5 box box--stacked">
                <FormInput
                  type="text"
                  placeholder="Customers email's"
                  className="py-3"
                />
                <FormInput
                  type="text"
                  placeholder="Item name"
                  className="py-3 mt-3"
                />
                <div className="flex gap-3 mt-3">
                  <FormInput
                    type="text"
                    placeholder="Item amount"
                    className="py-3"
                  />
                  <FormSelect className="py-3">
                    <option value="دلار آمریکا">دلار آمریکا</option>
                    <option value="دلار استرالیا">دلار استرالیا</option>
                    <option value="رئال برزیل">رئال برزیل</option>
                    <option value="دلار کانادا">دلار کانادا</option>
                    <option value="فرانک سوییس">فرانک سوییس</option>
                    <option value="کرونای جمهوری چک">کرونای جمهوری چک</option>
                    <option value="کرون دانمارک">کرون دانمارک</option>
                    <option value="یورو">یورو</option>
                    <option value="پوند استرلینگ">پوند استرلینگ</option>
                    <option value="دلار هنگ‌کنگ">دلار هنگ‌کنگ</option>
                    <option value="فورینت مجارستان">فورینت مجارستان</option>
                    <option value="شقل اسرائیل">شقل اسرائیل</option>
                    <option value="ین ژاپن">ین ژاپن</option>
                    <option value="پزو مکزیک">پزو مکزیک</option>
                    <option value="کرون نروژ">کرون نروژ</option>
                    <option value="دلار زلاند نو">دلار زلاند نو</option>
                    <option value="پزو فیلیپین">پزو فیلیپین</option>
                    <option value="زواتی لهستان">زواتی لهستان</option>
                    <option value="روبل روسیه">روبل روسیه</option>
                    <option value="کرون سوئد">کرون سوئد</option>
                    <option value="دلار سنگاپور">دلار سنگاپور</option>
                    <option value="بات تایلند">بات تایلند</option>
                    <option value="دلار جدید تایوان">دلار جدید تایوان</option>
                  </FormSelect>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button
                    rounded
                    variant="primary"
                    className="px-7 border-primary/50"
                  >
                    Send
                  </Button>
                  <Button
                    as="a"
                    rounded
                    className="px-0 ms-2.5 border-transparent shadow-none text-primary"
                    href=""
                  >
                    اضافه کردن جزئیات بیشتر
                  </Button>
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
