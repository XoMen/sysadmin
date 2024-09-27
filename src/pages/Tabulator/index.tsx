import "@/assets/css/vendors/tabulator.css";
import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import Button from "@/components/Base/Button";
import products from "@/fakers/products";
import {
  FormInline,
  FormInput,
  FormLabel,
  FormSelect,
} from "@/components/Base/Form";
import * as xlsx from "xlsx";
import { useEffect, useRef, createRef, useState } from "react";
import { createIcons, icons } from "lucide";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import { stringToHTML } from "@/utils/helper";

interface Response {
  name?: string;
  category?: string;
  images?: string[];
  status?: string;
}

function Main() {
  const tableRef = createRef<HTMLDivElement>();
  const tabulator = useRef<Tabulator>();
  const [filter, setFilter] = useState({
    field: "name",
    type: "like",
    value: "",
  });

  const initTabulator = () => {
    if (tableRef.current) {
      tabulator.current = new Tabulator(tableRef.current, {
        ajaxURL: "https://dummy-data.left4code.com",
        paginationMode: "remote",
        filterMode: "remote",
        sortMode: "remote",
        printAsHtml: true,
        printStyled: true,
        pagination: true,
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 30, 40],
        layout: "fitColumns",
        responsiveLayout: "collapse",
        placeholder: "No matching records found",
        columns: [
          {
            title: "",
            formatter: "responsiveCollapse",
            width: 40,
            minWidth: 30,
            hozAlign: "center",
            resizable: false,
            headerSort: false,
          },

          // For HTML table
          {
            title: "نام محصول",
            minWidth: 200,
            responsive: 0,
            field: "name",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div>
                <div class="font-medium whitespace-nowrap">${response.name}</div>
                <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">${response.category}</div>
              </div>`;
            },
          },
          {
            title: "تصاویر",
            minWidth: 200,
            field: "images",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return response.images
                ? `<div class="flex lg:justify-center">
                    <div class="w-9 h-9 image-fit">
                      <img alt="تیل وایز - قالب داشبورد مدیریتی" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="${
                        products.fakeProducts()[0].images[0].path
                      }">
                    </div>
                    <div class="w-9 h-9 -ms-4 image-fit">
                      <img alt="تیل وایز - قالب داشبورد مدیریتی" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="${
                        products.fakeProducts()[0].images[1].path
                      }">
                    </div>
                    <div class="w-9 h-9 -ms-4 image-fit">
                      <img alt="تیل وایز - قالب داشبورد مدیریتی" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="${
                        products.fakeProducts()[0].images[2].path
                      }">
                    </div>
                </div>`
                : "";
            },
          },
          {
            title: "موجودی باقی‌مانده",
            minWidth: 200,
            field: "remaining_stock",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "وضعیت",
            minWidth: 200,
            field: "status",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center lg:justify-center ${
                response.status ? "text-success" : "text-danger"
              }">
                <i data-lucide="check-square" class="w-3.5 h-3.5 stroke-[1.7]"></i>
                  <div class="ms-1.5 whitespace-nowrap">${
                    response.status ? "فعال" : "غیرفعال"
                  }</div>
              </div>`;
            },
          },
          {
            title: "Actions",
            minWidth: 200,
            field: "actions",
            responsive: 1,
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            headerSort: false,
            formatter() {
              const a =
                stringToHTML(`<div class="flex items-center lg:justify-center">
                  <a class="flex items-center me-3" href="javascript:;">
                    <i data-lucide="check-square" class="w-3.5 h-3.5 stroke-[1.7] me-1.5"></i> ویرایش
                  </a>
                  <a class="flex items-center text-danger" href="javascript:;">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5 stroke-[1.7] me-1.5"></i> حذف
                  </a>
                </div>`);
              a.addEventListener("click", function () {
                // On click actions
              });
              return a;
            },
          },

          // For print format
          {
            title: "PRODUCT NAME",
            field: "name",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "CATEGORY",
            field: "category",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "REMAINING STOCK",
            field: "remaining_stock",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "STATUS",
            field: "status",
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue() ? "فعال" : "غیرفعال";
            },
          },
          {
            title: "IMAGE 1",
            field: "images",
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue()[0];
            },
          },
          {
            title: "IMAGE 2",
            field: "images",
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue()[1];
            },
          },
          {
            title: "IMAGE 3",
            field: "images",
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue()[2];
            },
          },
        ],
      });
    }

    tabulator.current?.on("renderComplete", () => {
      createIcons({
        icons,
        attrs: {
          "stroke-width": 1.5,
        },
        nameAttr: "data-lucide",
      });
    });
  };

  // Redraw table onresize
  const reInitOnResizeWindow = () => {
    window.addEventListener("resize", () => {
      if (tabulator.current) {
        tabulator.current.redraw();
        createIcons({
          icons,
          attrs: {
            "stroke-width": 1.5,
          },
          nameAttr: "data-lucide",
        });
      }
    });
  };

  // Filter function
  const onFilter = () => {
    if (tabulator.current) {
      tabulator.current.setFilter(filter.field, filter.type, filter.value);
    }
  };

  // On reset filter
  const onResetFilter = () => {
    setFilter({
      ...filter,
      field: "name",
      type: "like",
      value: "",
    });
    onFilter();
  };

  // Export
  const onExportCsv = () => {
    if (tabulator.current) {
      tabulator.current.download("csv", "data.csv");
    }
  };

  const onExportJson = () => {
    if (tabulator.current) {
      tabulator.current.download("json", "data.json");
    }
  };

  const onExportXlsx = () => {
    if (tabulator.current) {
      (window as any).XLSX = xlsx;
      tabulator.current.download("xlsx", "data.xlsx", {
        sheetName: "محصولات",
      });
    }
  };

  const onExportHtml = () => {
    if (tabulator.current) {
      tabulator.current.download("html", "data.html", {
        style: true,
      });
    }
  };

  // Print
  const onPrint = () => {
    if (tabulator.current) {
      tabulator.current.print();
    }
  };

  useEffect(() => {
    initTabulator();
    reInitOnResizeWindow();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Tabulator
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ms-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 me-2" />{" "}
              افزودن کاربر جدید
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-3.5">
          <div className="flex flex-col box box--stacked">
            <div className="flex flex-col p-5 xl:items-center xl:flex-row gap-y-2">
              <form
                id="tabulator-html-filter-form"
                className="flex xl:flex-row flex-col border-dashed gap-x-5 gap-y-2 border border-slate-300/80 xl:border-0 rounded-[0.6rem] p-4 sm:p-5 xl:p-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  onFilter();
                }}
              >
                <FormInline className="flex-col items-start xl:flex-row xl:items-center gap-y-2">
                  <FormLabel className="me-3 whitespace-nowrap">
                    جستجو بر اساس
                  </FormLabel>
                  <FormSelect
                    id="tabulator-html-filter-field"
                    value={filter.field}
                    onChange={(e) => {
                      setFilter({
                        ...filter,
                        field: e.target.value,
                      });
                    }}
                    className=""
                  >
                    <option value="name">نام</option>
                    <option value="category">دسته</option>
                    <option value="remaining_stock">موجودی باقی‌مانده</option>
                  </FormSelect>
                </FormInline>
                <FormInline className="flex-col items-start xl:flex-row xl:items-center gap-y-2">
                  <FormLabel className="me-3 whitespace-nowrap">Type</FormLabel>
                  <FormSelect
                    id="tabulator-html-filter-type"
                    value={filter.type}
                    onChange={(e) => {
                      setFilter({
                        ...filter,
                        type: e.target.value,
                      });
                    }}
                    className=""
                  >
                    <option value="like">like</option>
                    <option value="=">=</option>
                    <option value="<">&lt;</option>
                    <option value="<=">&lt;=</option>
                    <option value=">">&gt;</option>
                    <option value=">=">&gt;=</option>
                    <option value="!=">!=</option>
                  </FormSelect>
                </FormInline>
                <FormInline className="flex-col items-start xl:flex-row xl:items-center gap-y-2">
                  <FormLabel className="me-3 whitespace-nowrap">
                    کلمات کلیدی
                  </FormLabel>
                  <FormInput
                    id="tabulator-html-filter-value"
                    value={filter.value}
                    onChange={(e) => {
                      setFilter({
                        ...filter,
                        value: e.target.value,
                      });
                    }}
                    type="text"
                    className=""
                    placeholder="Search..."
                  />
                </FormInline>
                <div className="flex flex-col gap-2 mt-2 sm:flex-row xl:mt-0">
                  <Button
                    id="tabulator-html-filter-go"
                    variant="outline-primary"
                    type="button"
                    className="w-full sm:w-auto bg-primary/5 border-primary/20"
                    onClick={onFilter}
                  >
                    Search
                  </Button>
                  <Button
                    id="tabulator-html-filter-reset"
                    variant="outline-secondary"
                    type="button"
                    className="w-full sm:w-auto bg-slate-50/50"
                    onClick={onResetFilter}
                  >
                    تنظیم مجدد
                  </Button>
                </div>
              </form>
              <div className="flex flex-col mt-3 sm:flex-row gap-x-3 gap-y-2 xl:ms-auto xl:mt-0">
                <Button variant="outline-secondary" onClick={onPrint}>
                  <Lucide
                    icon="Printer"
                    className="stroke-[1.3] w-4 h-4 me-2"
                  />
                  چاپ
                </Button>
                <Menu className="sm:ms-auto xl:ms-0">
                  <Menu.Button
                    as={Button}
                    variant="outline-secondary"
                    className="w-full sm:w-auto"
                  >
                    <Lucide
                      icon="FileCheck2"
                      className="stroke-[1.3] w-4 h-4 me-2"
                    />
                    صادر کردن
                    <Lucide
                      icon="ChevronDown"
                      className="stroke-[1.3] w-4 h-4 ms-2"
                    />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item onClick={onExportCsv}>
                      <Lucide icon="FileCheck2" className="w-4 h-4 me-2" />{" "}
                      خروجی CSV
                    </Menu.Item>
                    <Menu.Item onClick={onExportJson}>
                      <Lucide icon="FileCheck2" className="w-4 h-4 me-2" />
                      خروجی JSON
                    </Menu.Item>
                    <Menu.Item onClick={onExportXlsx}>
                      <Lucide icon="FileCheck2" className="w-4 h-4 me-2" />
                      خروجی XLSX
                    </Menu.Item>
                    <Menu.Item onClick={onExportHtml}>
                      <Lucide icon="FileCheck2" className="w-4 h-4 me-2" />
                      خروجی HTML
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
            <div className="pb-5">
              <div className="overflow-x-auto scrollbar-hidden">
                <div id="tabulator" ref={tableRef}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
