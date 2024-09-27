import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import { useState } from "react";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { ClassicEditor } from "@/components/Base/Ckeditor";
import { FormSwitch } from "@/components/Base/Form";

function Main() {
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            ویرایشگر Wysiwyg
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            قدرت مؤلفه ویرایشگر WYSIWYG ما را برای ایجاد
            و محتوای تعاملی در برنامه‌های وب خود کشف کنید.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">CKEditor</div>
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
                        مؤلفه "ویرایشگر متن Wysiwyg CKEditor" یک متن غنی
                        برای برنامه وب شما ارائه می‌دهد که به کاربران اجازه می‌دهد تا
                        محتوا را به راحتی ایجاد و ویرایش کنند. این
                        بخش نشان می‌دهد که چگونه CKEditor را به
                        برنامه خود یکپارچه کنید و برای ویرایش متن استفاده کنید.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <ClassicEditor
                              value={editorData}
                              onChange={setEditorData}
                            />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <ClassicEditor
                value={editorData}
                onChange={setEditorData}
              />
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مؤلفه "ویرایشگر متن Wysiwyg CKEditor" وب شما را بهبود می‌بخشد
                        با ارائه یک ویرایشگر متن قدرتمند و کاربرپسند
                        متن غنی. کاربران می‌توانند ایجاد، فرمت‌بندی و ویرایش کنند
                        محتوا را به صورت بی‌درز و به سرعت. ظاهر CKEditor را سفارشی کنید
                        و رفتار آن را برای تأمین نیازهای برنامه‌تان تنظیم کنید و
                        محتوای ویرایش شده را به عنوان مورد نیاز بازیابی کنید. با CKEditor،
                        می‌توانید کاربران را برای ایجاد و مدیریت متن غنی قدرت بخشید
                        بدون دغدغه.
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
                    <div className="-mt-px">ClassicEditor</div>
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
                            نوع المان HTML برای رندر کردن. به طور پیش فرض
                            "div".
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`disabled`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            نشان می‌دهد که آیا ویرایشگر باید غیرفعال شود یا نه.
                            پیش‌فرض غلط است.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`config`</Table.Td>
                          <Table.Td>`{}`</Table.Td>
                          <Table.Td>
                            Configuration options for the CKEditor.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`value`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>The content of the CKEditor.</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onChange`</Table.Td>
                          <Table.Td>`(value: string) =&gt; void`</Table.Td>
                          <Table.Td>
                            تابع بازخوانی برای رسیدگی به تغییرات در ویرایشگر
                            content.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onFocus`</Table.Td>
                          <Table.Td>`(value: string) =&gt; void`</Table.Td>
                          <Table.Td>
                            تابع بازخوانی برای رسیدگی به تمرکز ویرایشگر
                            event.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onBlur`</Table.Td>
                          <Table.Td>`(value: string) =&gt; void`</Table.Td>
                          <Table.Td>
                            تابع بازخوانی برای رسیدگی به تاریکی ویرایشگر
                            event.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onReady`</Table.Td>
                          <Table.Td>`(value: string) =&gt; void`</Table.Td>
                          <Table.Td>
                            تابع بازخوانی که هنگامی که CKEditor
                            آماده است فراخوانی می‌شود.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: CkeditorElement) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            یک تابع که یک ارجاع به CKEditor را دریافت می‌کند
                            element.
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
                    CKEditor
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
