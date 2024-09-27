import Lucide from "@/components/Base/Lucide";
import { Menu, Popover } from "@/components/Base/Headless";
import { FormCheck, FormInput, FormSelect } from "@/components/Base/Form";
import FileIcon from "@/components/Base/FileIcon";
import TomSelect from "@/components/Base/TomSelect";
import Tippy from "@/components/Base/Tippy";
import files from "@/fakers/files";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import { useState } from "react";
import _ from "lodash";

function Main() {
  const [selectedUser, setSelectedUser] = useState("1");

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            مدیریت فایل
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ms-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide icon="MailPlus" className="stroke-[1.3] w-4 h-4 me-2" />{" "}
              بارگذاری فایل‌های جدید
            </Button>
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide icon="Cog" className="stroke-[1.3] w-4 h-4 me-2" /> File
              تنظیمات مدیر
            </Button>
          </div>
        </div>
        <div className="gap-5 flex flex-col sm:flex-row mt-3.5">
          <div className="relative">
            <div className="sticky top-[104px]">
              <div className="box sm:w-[102px] grid grid-cols-3 sm:grid-cols-1 px-3.5 py-4 gap-3.5 before:content-[''] before:z-[-1] box--stacked">
                <Tippy
                  as="a"
                  href=""
                  content="صندوق دریافت"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 active place-content-center"
                >
                  <Lucide
                    icon="AppWindow"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                  <div className="min-w-[1.15rem] h-[1.2rem] rounded-full bg-white flex items-center justify-center text-xs font-medium absolute end-0 top-0 -mt-1.5 -me-1.5">
                    <div className="w-full h-full px-2 border rounded-full bg-pending/10 border-pending/20 text-pending">
                      12+
                    </div>
                  </div>
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Starred"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="MailCheck"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Snoozed"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="KeyRound"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                  <div className="min-w-[1.15rem] h-[1.2rem] rounded-full bg-white flex items-center justify-center text-xs font-medium absolute end-0 top-0 -mt-1.5 -me-1.5">
                    <div className="w-full h-full px-2 border rounded-full bg-pending/10 border-pending/20 text-pending">
                      3
                    </div>
                  </div>
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Important"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="PackageCheck"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Sent"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="ShieldCheck"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                  <div className="min-w-[1.15rem] h-[1.2rem] rounded-full bg-white flex items-center justify-center text-xs font-medium absolute end-0 top-0 -mt-1.5 -me-1.5">
                    <div className="w-full h-full px-2 border rounded-full bg-pending/10 border-pending/20 text-pending">
                      41
                    </div>
                  </div>
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Drafts"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="Smartphone"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="دسته‌بندی‌ها"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="BellDot"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                  <div className="min-w-[1.15rem] h-[1.2rem] rounded-full bg-white flex items-center justify-center text-xs font-medium absolute end-0 top-0 -mt-1.5 -me-1.5">
                    <div className="w-full h-full px-2 border rounded-full bg-pending/10 border-pending/20 text-pending">
                      21
                    </div>
                  </div>
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="گفتگوها"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="Workflow"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="Scheduled"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="Podcast"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
                <Tippy
                  as="a"
                  href=""
                  content="All Mail"
                  options={{
                    placement: "right",
                  }}
                  className="relative h-14 rounded-lg flex items-center py-3 [&.active]:text-primary [&.active]:font-medium [&.active]:shadow-sm hover:text-primary border border-slate-200/80 [&.active]:bg-primary/[0.04] [&.active]:border-primary/10 place-content-center"
                >
                  <Lucide
                    icon="Trash2"
                    className="stroke-[0.8] w-5 h-5 fill-theme-1/10"
                  />
                </Tippy>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full box box--stacked">
            <div className="flex flex-col p-5 mb-1 sm:items-center sm:flex-row gap-y-2">
              <div>
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 start-0 z-10 w-4 h-4 my-auto ms-3 stroke-[1.3] text-slate-500"
                  />
                  <FormInput
                    type="text"
                    placeholder="Search mails..."
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
                            <div className="text-start text-slate-500">
                              آپلودر
                            </div>
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
                              نوع فایل
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              <option value="سند">سند</option>
                              <option value="موسیقی">موسیقی</option>
                              <option value="ویدئو">ویدئو</option>
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
            <div className="flex flex-col gap-6 px-5">
              <div>
                <div className="h-4 mt-1 mb-5 text-xs uppercase text-slate-500/60 relative before:content-[''] before:h-px before:bg-slate-200/70 before:w-full before:absolute before:inset-y-0 before:my-auto">
                  <span className="flex items-center absolute px-2.5 ms-4 bg-white">
                    <Lucide
                      icon="Clock"
                      className="w-[15px] h-[15px] stroke-[1.7] stroke-slate-400/70 me-1.5"
                    />
                    فایل‌های به‌روز شده اخیر
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-4">
                  {_.take(files.fakeFiles(), 3).map((faker, fakerKey) => (
                    <div key={fakerKey}>
                      <div className="flex items-center relative px-3 py-2.5 rounded-[0.6rem] border border-slate-200/80 hover:bg-slate-50 cursor-pointer transition sm:px-5 shadow-sm">
                        <div className="">
                          <FormCheck.Input
                            className="-mt-1 border"
                            type="checkbox"
                            checked={_.random(0, 1) ? true : false}
                            onChange={() => {}}
                          />
                        </div>
                        <div className="ms-5">
                          {(() => {
                            if (faker.type == "Empty Folder")
                              return (
                                <FileIcon
                                  className="w-11 h-11"
                                  variant="empty-directory"
                                />
                              );
                            else if (faker.type == "Folder")
                              return (
                                <FileIcon
                                  className="w-11 h-11"
                                  variant="directory"
                                />
                              );
                            else if (faker.type == "Image")
                              return (
                                <FileIcon
                                  className="w-11 h-11"
                                  variant="image"
                                  src={_.toLower(faker["fileName"])}
                                />
                              );
                            else
                              return (
                                <FileIcon
                                  className="w-11 h-11 text-[0.6rem]"
                                  variant="file"
                                  type={faker.type}
                                />
                              );
                          })()}
                        </div>
                        <div className="flex flex-col w-full ms-3 lg:items-center lg:flex-row gap-y-1">
                          <a
                            href=""
                            className="block font-medium capitalize truncate lg:text-center"
                          >
                            {
                              faker.fileName.split("/")[
                                faker.fileName.split("/").length - 1
                              ]
                            }
                          </a>
                          <div className="me-4 text-xs lg:text-center lg:ms-auto text-slate-500/80">
                            File size: {faker.size}
                          </div>
                        </div>
                        <Menu>
                          <Menu.Button
                            as="a"
                            className="block w-5 h-5"
                            href="#"
                          >
                            <Lucide
                              icon="MoreVertical"
                              className="w-5 h-5 stroke-[1] stroke-slate-400/70 fill-slate-400/70"
                            />
                          </Menu.Button>
                          <Menu.Items className="w-40">
                            <Menu.Item>
                              <Lucide icon="Users" className="w-4 h-4 me-2" />{" "}
                              اشتراک‌گذاری فایل
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="Trash" className="w-4 h-4 me-2" />{" "}
                              حذف
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-4 mt-1 mb-5 text-xs uppercase text-slate-500/60 relative before:content-[''] before:h-px before:bg-slate-200/70 before:w-full before:absolute before:inset-y-0 before:my-auto">
                  <span className="flex items-center absolute px-2.5 ms-4 bg-white">
                    <Lucide
                      icon="Pin"
                      className="w-[15px] h-[15px] stroke-[1.7] stroke-slate-400/70 me-1.5"
                    />
                    فایل‌های سنجاق شده
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-4">
                  {_.take(files.fakeFiles(), 10).map((faker, fakerKey) => (
                    <div key={fakerKey}>
                      <div className="flex items-center relative px-3 py-2.5 rounded-[0.6rem] border border-slate-200/80 hover:bg-slate-50 cursor-pointer transition sm:px-5 shadow-sm">
                        <div className="">
                          <FormCheck.Input
                            className="-mt-1 border"
                            type="checkbox"
                            checked={_.random(0, 1) ? true : false}
                            onChange={() => {}}
                          />
                        </div>
                        <div className="ms-5">
                          {(() => {
                            if (faker.type == "Empty Folder")
                              return (
                                <FileIcon
                                  className="w-11 h-11"
                                  variant="empty-directory"
                                />
                              );
                            else if (faker.type == "Folder")
                              return (
                                <FileIcon
                                  className="w-11 h-11"
                                  variant="directory"
                                />
                              );
                            else if (faker.type == "Image")
                              return (
                                <FileIcon
                                  className="w-11 h-11"
                                  variant="image"
                                  src={_.toLower(faker["fileName"])}
                                />
                              );
                            else
                              return (
                                <FileIcon
                                  className="w-11 h-11 text-[0.6rem]"
                                  variant="file"
                                  type={faker.type}
                                />
                              );
                          })()}
                        </div>
                        <div className="flex flex-col w-full ms-3 lg:items-center lg:flex-row gap-y-1">
                          <a
                            href=""
                            className="block font-medium capitalize truncate lg:text-center"
                          >
                            {
                              faker.fileName.split("/")[
                                faker.fileName.split("/").length - 1
                              ]
                            }
                          </a>
                          <div className="me-4 text-xs lg:text-center lg:ms-auto text-slate-500/80">
                            File size: {faker.size}
                          </div>
                        </div>
                        <Menu>
                          <Menu.Button
                            as="a"
                            className="block w-5 h-5"
                            href="#"
                          >
                            <Lucide
                              icon="MoreVertical"
                              className="w-5 h-5 stroke-[1] stroke-slate-400/70 fill-slate-400/70"
                            />
                          </Menu.Button>
                          <Menu.Items className="w-40">
                            <Menu.Item>
                              <Lucide icon="Users" className="w-4 h-4 me-2" />{" "}
                              اشتراک‌گذاری فایل
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="Trash" className="w-4 h-4 me-2" />{" "}
                              حذف
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-4 mt-1 mb-5 text-xs uppercase text-slate-500/60 relative before:content-[''] before:h-px before:bg-slate-200/70 before:w-full before:absolute before:inset-y-0 before:my-auto">
                  <span className="flex items-center absolute px-2.5 ms-4 bg-white">
                    <Lucide
                      icon="Trash2"
                      className="w-[15px] h-[15px] stroke-[1.7] stroke-slate-400/70 me-1.5"
                    />
                    فایل‌های حذف شده
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-4">
                  {_.take(files.fakeFiles(), 5).map((faker, fakerKey) => (
                    <div key={fakerKey}>
                      <div className="flex items-center relative px-3 py-2.5 rounded-[0.6rem] border border-slate-200/80 hover:bg-slate-50 cursor-pointer transition sm:px-5 shadow-sm">
                        <div className="">
                          <FormCheck.Input
                            className="-mt-1 border"
                            type="checkbox"
                            checked={_.random(0, 1) ? true : false}
                            onChange={() => {}}
                          />
                        </div>
                        <div className="ms-5">
                          {(() => {
                            if (faker.type == "Empty Folder")
                              return (
                                <FileIcon
                                  className="w-11 h-11"
                                  variant="empty-directory"
                                />
                              );
                            else if (faker.type == "Folder")
                              return (
                                <FileIcon
                                  className="w-11 h-11"
                                  variant="directory"
                                />
                              );
                            else if (faker.type == "Image")
                              return (
                                <FileIcon
                                  className="w-11 h-11"
                                  variant="image"
                                  src={_.toLower(faker["fileName"])}
                                />
                              );
                            else
                              return (
                                <FileIcon
                                  className="w-11 h-11 text-[0.6rem]"
                                  variant="file"
                                  type={faker.type}
                                />
                              );
                          })()}
                        </div>
                        <div className="flex flex-col w-full ms-3 lg:items-center lg:flex-row gap-y-1">
                          <a
                            href=""
                            className="block font-medium capitalize truncate lg:text-center"
                          >
                            {
                              faker.fileName.split("/")[
                                faker.fileName.split("/").length - 1
                              ]
                            }
                          </a>
                          <div className="me-4 text-xs lg:text-center lg:ms-auto text-slate-500/80">
                            File size: {faker.size}
                          </div>
                        </div>
                        <Menu>
                          <Menu.Button
                            as="a"
                            className="block w-5 h-5"
                            href="#"
                          >
                            <Lucide
                              icon="MoreVertical"
                              className="w-5 h-5 stroke-[1] stroke-slate-400/70 fill-slate-400/70"
                            />
                          </Menu.Button>
                          <Menu.Items className="w-40">
                            <Menu.Item>
                              <Lucide icon="Users" className="w-4 h-4 me-2" />{" "}
                              اشتراک‌گذاری فایل
                            </Menu.Item>
                            <Menu.Item>
                              <Lucide icon="Trash" className="w-4 h-4 me-2" />{" "}
                              حذف
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center p-5 my-1 text-center sm:flex-row sm:text-start text-slate-500/80">
              <div>4.41 گیگابایت (25%) از 17 گیگابایت استفاده شده</div>
              <div className="mt-2 sm:ms-auto sm:mt-0">
                آخرین فعالیت حساب: 36 دقیقه پیش
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
