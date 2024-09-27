import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import { Disclosure } from "@/components/Base/Headless";
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
            آکاردئون
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            مؤلفه آکاردئون ما را کاوش کنید، سازماندهی محتوای بی‌دردسر و
            ارائه!
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
                        آکاردئون پایه
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
                        مؤلفه آکاردئون پایه یک روش قدرتمند و انعطاف‌پذیر
                        برای سازماندهی و ارائه اطلاعات در وب‌سایت شما است
                        یا برنامه. این به شما امکان می‌دهد که بخش‌های قابل جمع‌شدنی ایجاد کنید
                        از محتوا، که برای کاربران دسترسی آسان به اطلاعات را فراهم می‌کند
                        بدون آن‌که با متن بیش از حدی آن‌ها را متاثر کند.
                        یا جزئیات به طور همزمان.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Disclosure.Group>
                              <Disclosure>
                                <Disclosure.Button>
                                  OpenSSL Essentials: Working with SSL
                                  Certificates, کلیدهای خصوصی
                                </Disclosure.Button>
                                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  unchanged.
                                </Disclosure.Panel>
                              </Disclosure>
                              <Disclosure>
                                <Disclosure.Button>
                                  Understanding IP Addresses, Subnets, and CIDR
                                  Notation
                                </Disclosure.Button>
                                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  unchanged.
                                </Disclosure.Panel>
                              </Disclosure>
                              <Disclosure>
                                <Disclosure.Button>
                                  رفع مشکل کدهای خطای معمول HTTP
                                </Disclosure.Button>
                                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  unchanged.
                                </Disclosure.Panel>
                              </Disclosure>
                              <Disclosure>
                                <Disclosure.Button>
                                  معرفی امنیت وی‌پی‌اس لینوکس شما
                                </Disclosure.Button>
                                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  unchanged.
                                </Disclosure.Panel>
                              </Disclosure>
                            </Disclosure.Group>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <Disclosure.Group>
              <Disclosure>
                <Disclosure.Button>
                  اساسات OpenSSL: کار با گواهی‌نامه‌های SSL،
                  کلیدهای خصوصی
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  لورم ایپسوم به طور ساده متن مجازی چاپ و and
                  صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                  متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                  زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                  آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                  نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                  به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                  unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  درک آدرس‌های IP، زیرشبکه‌ها و نمادهای CIDR
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  لورم ایپسوم به طور ساده متن مجازی چاپ و and
                  صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                  متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                  زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                  آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                  نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                  به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                  unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  رفع مشکل کدهای خطای معمول HTTP
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  لورم ایپسوم به طور ساده متن مجازی چاپ و and
                  صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                  متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                  زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                  آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                  نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                  به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                  unchanged.
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  معرفی امنیت وی‌پی‌اس لینوکس شما
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  لورم ایپسوم به طور ساده متن مجازی چاپ و and
                  صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                  متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                  زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                  آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                  نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                  به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                  unchanged.
                </Disclosure.Panel>
              </Disclosure>
            </Disclosure.Group>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        ظاهر بخش‌های آکاردئون خود را سفارشی‌سازی کنید و
                        تا به سبک و طراحی برندتان بخورد.
                        ترجیحات. با انواع مختلف محتوا و
                        طرح‌ها برای ایجاد تجربه‌های جذاب و کاربرپسند
                        experiences.
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
                        آکاردئون با قالب
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
                        مؤلفه "آکاردئون با قالب" روشی شیک و
                        منظم برای ایجاد بخش‌های محتوای جمع‌شونده
                        با ظاهری با قالب است. این نوعی از آکاردئون
                        بسیار مناسب برای ارائه اطلاعات به صورت ساختارمند
                        و جذاب است.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Disclosure.Group variant="boxed">
                              <Disclosure>
                                <Disclosure.Button>
                                  OpenSSL Essentials: Working with SSL
                                  Certificates, کلیدهای خصوصی
                                </Disclosure.Button>
                                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  unchanged.
                                </Disclosure.Panel>
                              </Disclosure>
                              <Disclosure>
                                <Disclosure.Button>
                                  Understanding IP Addresses, Subnets, and CIDR
                                  Notation
                                </Disclosure.Button>
                                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  unchanged.
                                </Disclosure.Panel>
                              </Disclosure>
                              <Disclosure>
                                <Disclosure.Button>
                                  رفع مشکل کدهای خطای معمول HTTP
                                </Disclosure.Button>
                                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  unchanged.
                                </Disclosure.Panel>
                              </Disclosure>
                              <Disclosure>
                                <Disclosure.Button>
                                  معرفی امنیت وی‌پی‌اس لینوکس شما
                                </Disclosure.Button>
                                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                                  متن آزمایشی است
                                  صنعت چاپ و تنظیم‌مجدد متن است.
                                  این متن از سال‌های 1500 میلادی استاندارد صنعتی برای
                                  از زمان 1500 میلادی، زمانی که یک چاپگر ناشناخته
                                  یک گالری از نوع و آن را مخلوط کرد تا
                                  یک کتاب نمونه نوع بسازد. این کتاب نه تنها زنده ماند
                                  پنج قرن، بلکه به افزایش
                                  چاپ الکترونیکی نوع، اساسا باقی مانده است
                                  unchanged.
                                </Disclosure.Panel>
                              </Disclosure>
                            </Disclosure.Group>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <Disclosure.Group variant="boxed">
                <Disclosure>
                  <Disclosure.Button>
                    اساسات OpenSSL: کار با گواهی‌نامه‌های SSL،
                    کلیدهای خصوصی
                  </Disclosure.Button>
                  <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                    لورم ایپسوم به طور ساده متن مجازی چاپ و and
                    صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                    متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                    زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                    آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                    نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                    به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                    unchanged.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    درک آدرس‌های IP، زیرشبکه‌ها و نمادهای CIDR
                  </Disclosure.Button>
                  <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                    لورم ایپسوم به طور ساده متن مجازی چاپ و and
                    صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                    متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                    زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                    آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                    نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                    به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                    unchanged.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    رفع مشکل کدهای خطای معمول HTTP
                  </Disclosure.Button>
                  <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                    لورم ایپسوم به طور ساده متن مجازی چاپ و and
                    صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                    متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                    زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                    آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                    نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                    به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                    unchanged.
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button>
                    معرفی امنیت وی‌پی‌اس لینوکس شما
                  </Disclosure.Button>
                  <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                    لورم ایپسوم به طور ساده متن مجازی چاپ و and
                    صنعت زیبا‌نویسی بوده است. Lorem Ipsum از آن زمان
                    متن بی‌هویه استاندارد این صنعت بوده است، از سال 1500 میلادی،
                    زمانی که یک چاپگر ناشناخته یک گالری از نوع گرفت و
                    آن را برای ساختن یک کتاب نمونه نوع مخلوط کرد. این
                    نه تنها پنج قرن زنده مانده است، بلکه همچنین پرش
                    به زیبا‌نویسی الکترونیک، اساساً باقی مانده است،
                    unchanged.
                  </Disclosure.Panel>
                </Disclosure>
              </Disclosure.Group>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مؤلفه آکاردئون با قالب یک راه زیبا و
                        ترتیب و ارائه محتوا را که کاربران می‌توانند
                        آن را گسترش و جمع کنند. آن را برای وفق به نیازهای پروژه‌تان
                        سفارشی‌سازی کنید و تجربه کاربری را بر روی وب‌سایت یا
                        برنامه‌تان بهبود بخشید. لذت ببرید از استفاده از آکاردئون با قالب!
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
                    <div className="-mt-px">Disclosure</div>
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
                    <div className="-mt-px">Disclosure.Group</div>
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
                            نوع عنصر HTML یا کامپوننت React.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`selectedIndex`</Table.Td>
                          <Table.Td>`number`</Table.Td>
                          <Table.Td>
                            فهرستی که در آن فعال است.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`variant`</Table.Td>
                          <Table.Td>Variant ('default' or 'boxed')</Table.Td>
                          <Table.Td>Disclosure group style variant.</Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">Disclosure.Button</div>
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
                    <div className="-mt-px">Disclosure.Panel</div>
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
                    آکاردئون پایه
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    آکاردئون با قالب
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
