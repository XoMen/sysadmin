import clsx from "clsx";
import _ from "lodash";
import { useEffect, useRef } from "react";
import Table from "@/components/Base/Table";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";
import Dropzone, { DropzoneElement } from "@/components/Base/Dropzone";

function Main() {
  const dropzoneSingleRef = useRef<DropzoneElement>();
  const dropzoneMultipleRef = useRef<DropzoneElement>();
  const dropzoneValidationRef = useRef<DropzoneElement>();

  useEffect(() => {
    const elDropzoneSingleRef = dropzoneSingleRef.current;
    if (elDropzoneSingleRef) {
      elDropzoneSingleRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneSingleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }

    const elDropzoneMultipleRef = dropzoneMultipleRef.current;
    if (elDropzoneMultipleRef) {
      elDropzoneMultipleRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneMultipleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }

    const elDropzoneValidationRef = dropzoneValidationRef.current;
    if (elDropzoneValidationRef) {
      elDropzoneValidationRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneValidationRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    }
  }, []);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            Dropzone
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            قدرت مؤثر ماژول Dropzone ما را برای آپلود آسان و انعطاف‌پذیر
            فایل در برنامه‌های وبی خود کشف کنید.
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
                        آپلود تک فایل
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
                        مؤلفه "Dropzone" راه آسانی را برای
                        پیاده‌سازی قابلیت آپلود فایل در وب
                        برنامه‌ی خود فراهم می‌کند. این مثال نشان می‌دهد چگونه یک
                        "Dropzone" برای آپلود تک فایل، با گزینه‌هایی برای
                        تنظیم محدودیت‌های آپلود فایل و سربرگ‌های اضافی.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Dropzone
                              getRef={(el) => {
                                dropzoneSingleRef.current = el;
                              }}
                              options={{
                                url: "https://httpbin.org/post",
                                thumbnailWidth: 150,
                                maxFilesize: 0.5,
                                maxFiles: 1,
                                headers: {
                                  "My-Awesome-Header": "header value",
                                },
                              }}
                              className="dropzone"
                            >
                              <div className="text-lg font-medium">
                                Drop files here or click to upload.
                              </div>
                              <div className="text-gray-600">
                                این فقط یک Dropzone نمونه است. فایل‌های انتخاب شده
                                <span className="font-medium">not</span>{" "}
                                actually uploaded.
                              </div>
                            </Dropzone>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
            <Dropzone
              getRef={(el) => {
                dropzoneSingleRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                maxFiles: 1,
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                این فقط یک Dropzone نمونه است. فایل‌های انتخاب شده
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مؤلفه "Dropzone" پیاده‌سازی آپلود تک فایل را در برنامه‌های وب شما ساده‌تر می‌کند. شما می‌توانید گزینه‌های مختلفی مانند آدرس URL آپلود،
                        حداکثر اندازه فایل و سربرگ‌ها را پیکربندی کنید تا نیازهای خاص خود را برآورده کنید. در این مثال، یک "Dropzone" برای آپلود تک فایل ایجاد شده است، با رابط کاربری اطلاعاتی.
                        با این حال، مهم است به یاد داشته باشید که فایل‌های انتخاب شده در این نمونه واقعی آپلود نمی‌شوند.
                        مؤلفه "Dropzone" را برای فعال کردن آپلود فایل واقعی و بهبود قابلیت‌های پردازش فایل برنامه‌ی وب خود سفارشی کنید.
                        آپلود تک فایل
                        ایجاد شده است، با یک رابط کاربری اطلاعاتی.
                        اما، مهم است به یاد داشته باشید که فایل‌های انتخاب شده
                        در واقع در این نمونه به سرور آپلود نمی‌شوند.
                        مؤلفه "Dropzone" را به عنوان نیاز برای فعال کردن
                        آپلود فایل واقعی و بهبود پردازش فایل
                        قابلیت‌های برنامه‌ی وب خود سفارشی کنید.
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
                        Multiple بارگذاری فایل
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
                        مؤلفه "Dropzone" راه آسانی را برای
                        پیاده‌سازی قابلیت آپلود فایل در وب
                        برنامه‌ی خود فراهم می‌کند. این مثال نشان می‌دهد چگونه یک
                        "Dropzone" برای آپلود چند فایل، با گزینه‌هایی برای
                        تنظیم محدودیت‌های آپلود فایل و سربرگ‌های اضافی.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Dropzone
                              getRef={(el) => {
                                dropzoneMultipleRef.current = el;
                              }}
                              options={{
                                url: "https://httpbin.org/post",
                                thumbnailWidth: 150,
                                maxFilesize: 0.5,
                                headers: {
                                  "My-Awesome-Header": "header value",
                                },
                              }}
                              className="dropzone"
                            >
                              <div className="text-lg font-medium">
                                Drop files here or click to upload.
                              </div>
                              <div className="text-gray-600">
                                این فقط یک Dropzone نمونه است. فایل‌های انتخاب شده
                                <span className="font-medium">not</span>{" "}
                                actually uploaded.
                              </div>
                            </Dropzone>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
            <Dropzone
              getRef={(el) => {
                dropzoneMultipleRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                این فقط یک Dropzone نمونه است. فایل‌های انتخاب شده
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مؤلفه "Dropzone" پیاده‌سازی آپلود تک فایل را در برنامه‌های وب شما ساده‌تر می‌کند. شما می‌توانید گزینه‌های مختلفی مانند آدرس URL آپلود،
                        آپلود چند فایل در برنامه‌های وب شما. شما می‌توانید گزینه‌های مختلفی مانند آدرس URL آپلود،
                        حداکثر اندازه فایل و سربرگ‌ها را پیکربندی کنید تا نیازهای خاص خود را برآورده کنید. در این مثال، یک "Dropzone" برای آپلود چند فایل
                        مؤلفه "Dropzone" را برای فعال کردن آپلود فایل واقعی و بهبود قابلیت‌های پردازش فایل برنامه‌ی وب خود سفارشی کنید.
                        ایجاد شده است.
                        ایجاد شده است، با یک رابط کاربری اطلاعاتی.
                        اما، مهم است به یاد داشته باشید که فایل‌های انتخاب شده
                        در واقع در این نمونه به سرور آپلود نمی‌شوند.
                        مؤلفه "Dropzone" را به عنوان نیاز برای فعال کردن
                        آپلود فایل واقعی و بهبود پردازش فایل
                        قابلیت‌های برنامه‌ی وب خود سفارشی کنید.
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
                        نوع فایل اعتبارسنجی
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
                        مؤلفه "Dropzone" به شما امکان پیاده‌سازی عملکرد آپلود فایل را در برنامه‌ی وب خود با امکان
                        اعتبارسنجی نوع فایل قبل از آپلود فایل می‌دهد. این مثال نشان می‌دهد که چگونه یک "Dropzone" با
                        اعتبارسنجی نوع فایل با استفاده از فرمت‌های فایل پذیرفته شده ایجاد شود.
                        مؤلفه "Dropzone" با اعتبارسنجی نوع فایل
                        قابلیت‌های آپلود فایل برنامه‌ی وب شما را با امکان
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <Dropzone
                              getRef={(el) => {
                                dropzoneValidationRef.current = el;
                              }}
                              options={{
                                url: "https://httpbin.org/post",
                                thumbnailWidth: 150,
                                maxFilesize: 0.5,
                                acceptedFiles: "image/jpeg|image/png|image/jpg",
                                headers: {
                                  "My-Awesome-Header": "header value",
                                },
                              }}
                              className="dropzone"
                            >
                              <div className="text-lg font-medium">
                                Drop files here or click to upload.
                              </div>
                              <div className="text-gray-600">
                                این فقط یک Dropzone نمونه است. فایل‌های انتخاب شده
                                <span className="font-medium">not</span>{" "}
                                actually uploaded.
                              </div>
                            </Dropzone>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
            <Dropzone
              getRef={(el) => {
                dropzoneValidationRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                acceptedFiles: "image/jpeg|image/png|image/jpg",
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                این فقط یک Dropzone نمونه است. فایل‌های انتخاب شده
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        مشخص کردن فرمت‌های فایل پذیرفته شده بهبود می‌بخشد. در این مثال، یک "Dropzone" با
                        قواعد اعتبارسنجی برای فرمت‌های فایل تصویر (JPEG، PNG، و JPG) ایجاد شده است.
                        کاربران فقط محدود به آپلود فقط فرمت‌های فایل مشخص شده هستند. مؤلفه "Dropzone" را و اعتبارسنجی فرمت فایل به عنوان نیازها برای اطمینان از
                        آپلود امن و کنترل‌شده فایل در برنامه‌ی خود سفارشی کنید.
                        قوانین اعتبارسنجی برای فرمت‌های فایل تصویر (JPEG، PNG و
                        JPG). کاربران محدود به آپلود فقط انواع فایل مشخص شده خواهند بود.
                        اجزای مؤلفه "Dropzone" را و اعتبارسنجی فرمت فایل را به عنوان نیازها برای اطمینان از آپلود فایل امن و کنترل‌شده در برنامه‌ی شما سفارشی کنید.


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
                    <div className="-mt-px">Dropzone</div>
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
                          <Table.Td>`options`</Table.Td>
                          <Table.Td>`DropzoneOptions`</Table.Td>
                          <Table.Td>گزینه‌های پیکربندی "Dropzone".</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`getRef`</Table.Td>
                          <Table.Td>
                            `(el: DropzoneElement) =&gt; void`
                          </Table.Td>
                          <Table.Td>
                            تابعی که مرجعی به عنصر "Dropzone" را دریافت می‌کند.
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
                    آپلود تک فایل
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    آپلود چند فایل
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    نوع فایل اعتبارسنجی
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
