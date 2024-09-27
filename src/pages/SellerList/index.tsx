import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import Pagination from "@/components/Base/Pagination";
import TomSelect from "@/components/Base/TomSelect";
import { FormCheck, FormInput, FormSelect } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [selectedUser, setSelectedUser] = useState("1");

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            فروشندگان
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ms-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 me-2" />{" "}
              افزودن فروشنده جدید
            </Button>
          </div>
        </div>
        <div className="mt-3.5">
          <div className="flex flex-col box box--stacked">
            <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
              <div>
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3] text-slate-500"
                  />
                  <FormInput
                    type="text"
                    placeholder="Search reviews..."
                    className="ps-9 sm:w-64 rounded-[0.5rem]"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ms-auto">
                <Menu>
                  <Menu.Button
                    as={Button}
                    variant="outline-secondary"
                    className="w-full sm:w-auto"
                  >
                    <Lucide
                      icon="Download"
                      className="stroke-[1.3] w-4 h-4 me-2"
                    />
                    صادر کردن
                    <Lucide
                      icon="ChevronDown"
                      className="stroke-[1.3] w-4 h-4 ms-2"
                    />
                  </Menu.Button>
                  <Menu.Items className="w-40">
                    <Menu.Item>
                      <Lucide icon="FileBarChart" className="w-4 h-4 me-2" />{" "}
                      PDF
                    </Menu.Item>
                    <Menu.Item>
                      <Lucide icon="FileBarChart" className="w-4 h-4 me-2" />
                      CSV
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                <Popover className="inline-block">
                  {({ close }) => (
                    <>
                      <Popover.Button
                        as={Button}
                        variant="outline-secondary"
                        className="w-full sm:w-auto"
                      >
                        <Lucide
                          icon="ArrowDownWideNarrow"
                          className="stroke-[1.3] w-4 h-4 me-2"
                        />
                        فیلتر
                        <div className="flex items-center justify-center h-5 px-1.5 ms-2 text-xs font-medium border rounded-full bg-slate-100">
                          3
                        </div>
                      </Popover.Button>
                      <Popover.Panel placement="bottom-end">
                        <div className="p-2">
                          <div>
                            <div className="text-start text-slate-500">کاربر</div>
                            <TomSelect
                              className="flex-1 mt-2"
                              value={selectedUser}
                              onChange={(e) => {
                                setSelectedUser(e.target.value);
                              }}
                              options={{
                                placeholder: "Search user",
                              }}
                            >
                              {users.fakeUsers().map((faker, fakerKey) => (
                                <option key={fakerKey} value={fakerKey}>
                                  {faker.name}
                                </option>
                              ))}
                            </TomSelect>
                          </div>
                          <div className="mt-3">
                            <div className="text-start text-slate-500">
                              نرخ بررسی
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              <option value="3+">3+</option>
                              <option value="4+">4+</option>
                              <option value="5">5</option>
                            </FormSelect>
                          </div>
                          <div className="flex items-center mt-4">
                            <Button
                              variant="secondary"
                              onClick={() => {
                                close();
                              }}
                              className="w-32 ms-auto"
                            >
                              Close
                            </Button>
                            <Button variant="primary" className="w-32 ms-2">
                              اعمال
                            </Button>
                          </div>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </div>
            </div>
            <div className="overflow-auto xl:overflow-visible">
              <Table className="border-b border-slate-200/60">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                      <FormCheck.Input type="checkbox" />
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                      فروشنده
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                      فروشگاه
                    </Table.Td>
                    <Table.Td className="py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500">
                      نرخ بررسی
                    </Table.Td>
                    <Table.Td className="py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500">
                      وضعیت
                    </Table.Td>
                    <Table.Td className="py-4 font-medium text-center border-t whitespace-nowrap bg-slate-50 border-slate-200/60 text-slate-500">
                      مجموع محصولات
                    </Table.Td>
                    <Table.Td className="py-4 font-medium text-center border-t w-36 bg-slate-50 border-slate-200/60 text-slate-500">
                      عملیات
                    </Table.Td>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {_.take(users.fakeUsers(), 10).map((faker, fakerKey) => (
                    <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <FormCheck.Input type="checkbox" />
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <div className="flex items-center">
                          <div className="w-9 h-9 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="تیل وایز - قالب داشبورد مدیریتی"
                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                              src={faker.photo}
                              content={faker.name}
                            />
                          </div>
                          <div className="ms-3.5">
                            <a
                              href=""
                              className="font-medium whitespace-nowrap"
                            >
                              {faker.name}
                            </a>
                            <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                              {faker.email}
                            </div>
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a href="" className="flex items-center text-primary">
                          <Lucide
                            icon="ExternalLink"
                            className="w-3.5 h-3.5 stroke-[1.7]"
                          />
                          <div className="ms-1.5 whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]">
                            {
                              ["Themeforest", "Codecanyon", "Graphicriver"][
                                _.random(0, 2)
                              ]
                            }
                          </div>
                        </a>
                      </Table.Td>
                      <Table.Td className="py-4 text-center border-dashed dark:bg-darkmode-600">
                        <div className="flex items-center justify-center px-5">
                          <div className="flex items-center">
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-pending fill-pending/30"
                            />
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-pending fill-pending/30"
                            />
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-pending fill-pending/30"
                            />
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-pending fill-pending/30"
                            />
                            <Lucide
                              icon="Star"
                              className="w-3.5 h-3.5 me-1 text-slate-400 fill-slate/30"
                            />
                          </div>
                          <div className="ms-1 text-xs text-slate-500">
                            ({_.random(3, 4)}.{_.random(1, 5)}+)
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <div
                          className={clsx([
                            "flex items-center justify-center",
                            { "text-success": faker.isActive },
                            { "text-danger": !faker.isActive },
                          ])}
                        >
                          <Lucide
                            icon="Database"
                            className="w-3.5 h-3.5 stroke-[1.7]"
                          />
                          <div className="ms-1.5 whitespace-nowrap">
                            {faker.isActive ? "فعال" : "غیرفعال"}
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 text-center border-dashed dark:bg-darkmode-600">
                        {_.random(100, 500)} Items
                      </Table.Td>
                      <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                        <div className="flex items-center justify-center">
                          <Menu className="h-5">
                            <Menu.Button className="w-5 h-5 text-slate-500">
                              <Lucide
                                icon="MoreVertical"
                                className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                              />
                            </Menu.Button>
                            <Menu.Items className="w-40">
                              <Menu.Item>
                                <Lucide
                                  icon="CheckSquare"
                                  className="w-4 h-4 me-2"
                                />{" "}
                                ویرایش
                              </Menu.Item>
                              <Menu.Item className="text-danger">
                                <Lucide
                                  icon="Trash2"
                                  className="w-4 h-4 me-2"
                                />
                                حذف
                              </Menu.Item>
                            </Menu.Items>
                          </Menu>
                        </div>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </div>
            <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
              <Pagination className="flex-1 w-full me-auto sm:w-auto">
                <Pagination.Link>
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>1</Pagination.Link>
                <Pagination.Link active>2</Pagination.Link>
                <Pagination.Link>3</Pagination.Link>
                <Pagination.Link>...</Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </Pagination.Link>
                <Pagination.Link>
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </Pagination.Link>
              </Pagination>
              <FormSelect className="sm:w-20 rounded-[0.5rem]">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </FormSelect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
