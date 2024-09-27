import users from "@/fakers/users";
import departments from "@/fakers/departments";
import products from "@/fakers/products";
import { Menu } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import { FormInput } from "@/components/Base/Form";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import _ from "lodash";

interface MainProps {
  quickSearch: boolean;
  setQuickSearch: (val: boolean) => void;
}

function Main(props: MainProps) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.onkeydown = function (evt) {
      if (evt.key === "Escape" || evt.key === "Esc") {
        props.setQuickSearch(false);
      } else if ((evt.ctrlKey || evt.metaKey) && evt.key === "k") {
        props.setQuickSearch(true);
      }
    };
  }, []);

  return (
    <>
      <Transition appear show={props.quickSearch} as={Fragment}>
        <HeadlessDialog
          as="div"
          className="relative z-[60]"
          onClose={props.setQuickSearch}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-50"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex justify-center my-2 sm:mt-40">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-50"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in-out duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <HeadlessDialog.Panel className="sm:w-[600px] lg:w-[700px] w-[95%] relative mx-auto transition-transform">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center justify-center w-12">
                      <Lucide
                        icon="Search"
                        className="w-5 h-5 -me-1.5 text-slate-500 stroke-[1]"
                      />
                    </div>
                    <FormInput
                      className="ps-12 pe-14 py-3.5 text-base rounded-lg focus:ring-0 border-0 shadow-lg"
                      type="text"
                      placeholder="جستجوی سریع..."
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    <div className="absolute inset-y-0 end-0 flex items-center w-14">
                      <div className="px-2 py-1 me-auto text-xs border rounded-[0.4rem] bg-slate-100 text-slate-500/80">
                        ESC
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 pb-1 mt-1 bg-white rounded-lg shadow-lg max-h-[468px] sm:max-h-[615px] overflow-y-auto">
                    {search.length > 3 ? (
                      <div className="flex flex-col items-center justify-center pt-20 pb-28">
                        <Lucide
                          icon="SearchX"
                          className="w-20 h-20 text-theme-1/20 fill-theme-1/5 stroke-[0.5]"
                        />
                        <div className="mt-5 text-xl font-medium">
                          هیچ نتیجه‌ای یافت نشد
                        </div>
                        <div className="w-2/3 mt-3 leading-relaxed text-center text-slate-500">
                          نتیجه‌ای برای یافت نشد{" "}
                          <span className="italic font-medium">"{search}</span>
                          "لطفاً یک عبارت جستجو متفاوت را امتحان کنید یا
                          املایی خود را بررسی کنید.
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="px-5 py-4">
                          <div className="flex items-center">
                            <div className="text-xs uppercase text-slate-500">
                              جستجوی خود را از اینجا شروع کنید...
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3.5">
                            <a
                              href=""
                              className="flex items-center gap-x-1.5 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50"
                            >
                              <Lucide
                                icon="UsersRound"
                                className="w-4 h-4 stroke-[1.3]"
                              />
                              کاربران
                            </a>
                            <a
                              href=""
                              className="flex items-center gap-x-1.5 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50"
                            >
                              <Lucide
                                icon="Building2"
                                className="w-4 h-4 stroke-[1.3]"
                              />
                              بخش‌ها
                            </a>
                            <a
                              href=""
                              className="flex items-center gap-x-1.5 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50"
                            >
                              <Lucide
                                icon="KanbanSquare"
                                className="w-4 h-4 stroke-[1.3]"
                              />
                              محصولات
                            </a>
                            <a
                              href=""
                              className="flex items-center gap-x-1.5 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50"
                            >
                              <Lucide
                                icon="MailCheck"
                                className="w-4 h-4 stroke-[1.3]"
                              />
                              ایمیل‌ها
                            </a>
                            <Menu>
                              <Menu.Button
                                as="a"
                                className="flex items-center gap-x-1.5 border rounded-full px-3 py-0.5 border-slate-300/70 hover:bg-slate-50"
                              >
                                بیشتر
                                <Lucide
                                  icon="ChevronDown"
                                  className="w-4 h-4 stroke-[1.3] -ms-0.5"
                                />
                              </Menu.Button>
                              <Menu.Items className="w-40">
                                <Menu.Item>
                                  <Lucide icon="Map" className="w-4 h-4 me-2" />{" "}
                                  موقعیت‌ها
                                </Menu.Item>
                                <Menu.Item>
                                  <Lucide
                                    icon="FileCheck"
                                    className="w-4 h-4 me-2"
                                  />
                                  پروژه‌ها
                                </Menu.Item>
                                <Menu.Item>
                                  <Lucide
                                    icon="Printer"
                                    className="w-4 h-4 me-2"
                                  />
                                  دستگاه‌ها
                                </Menu.Item>
                              </Menu.Items>
                            </Menu>
                          </div>
                        </div>
                        <div className="px-5 py-4 border-t border-dashed">
                          <div className="flex items-center">
                            <div className="text-xs uppercase text-slate-500">
                              کاربران
                            </div>
                            <a
                              className="ms-auto text-xs text-slate-500"
                              href=""
                            >
                              مشاهده همه
                            </a>
                          </div>
                          <div className="flex flex-col gap-1 mt-3.5">
                            {_.take(users.fakeUsers(), 3).map(
                              (faker, fakerKey) => (
                                <a
                                  href=""
                                  key={fakerKey}
                                  className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md"
                                >
                                  <div className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                                    <img
                                      alt="تیل وایز - قالب داشبورد مدیریتی"
                                      src={faker.photo}
                                    />
                                  </div>
                                  <div className="font-medium truncate">
                                    {faker.name}
                                  </div>
                                  <div className="hidden text-slate-500 sm:block">
                                    {faker.location}
                                  </div>
                                </a>
                              )
                            )}
                          </div>
                        </div>
                        <div className="px-5 py-4 border-t border-dashed">
                          <div className="flex items-center">
                            <div className="text-xs uppercase text-slate-500">
                              بخش‌ها
                            </div>
                            <a
                              className="ms-auto text-xs text-slate-500"
                              href=""
                            >
                              مشاهده همه
                            </a>
                          </div>
                          <div className="flex flex-col gap-1 mt-3.5">
                            {_.take(departments.fakeDepartments(), 3).map(
                              (faker, fakerKey) => (
                                <a
                                  href=""
                                  key={fakerKey}
                                  className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md"
                                >
                                  <div className="flex items-center justify-center w-6 h-6 overflow-hidden border rounded-md zoom-in border-theme-1/10 box bg-theme-1/10">
                                    {_.random(0, 1) ? (
                                      <Lucide
                                        icon="Store"
                                        className="w-3.5 h-3.5 stroke-[1.3] text-theme-1"
                                      />
                                    ) : (
                                      <Lucide
                                        icon="Hotel"
                                        className="w-3.5 h-3.5 stroke-[1.3] text-theme-1"
                                      />
                                    )}
                                  </div>
                                  <div className="font-medium truncate">
                                    {faker.name}
                                  </div>
                                  <div className="hidden text-slate-500 sm:block">
                                    {faker.location.name}
                                  </div>
                                </a>
                              )
                            )}
                          </div>
                        </div>
                        <div className="px-5 py-4 border-t border-dashed">
                          <div className="flex items-center">
                            <div className="text-xs uppercase text-slate-500">
                              محصولات
                            </div>
                            <a
                              className="ms-auto text-xs text-slate-500"
                              href=""
                            >
                              مشاهده همه
                            </a>
                          </div>
                          <div className="flex flex-col gap-1 mt-3.5">
                            {_.take(products.fakeProducts(), 3).map(
                              (faker, fakerKey) => (
                                <a
                                  href=""
                                  key={fakerKey}
                                  className="flex items-center gap-2.5 hover:bg-slate-50/80 border border-transparent hover:border-slate-100 p-1 rounded-md"
                                >
                                  <div className="w-6 h-6 overflow-hidden border-2 rounded-full image-fit zoom-in border-slate-200/70 box">
                                    <img
                                      alt="تیل وایز - قالب داشبورد مدیریتی"
                                      src={faker.images[0].path}
                                    />
                                  </div>
                                  <div className="font-medium truncate">
                                    {faker.name}
                                  </div>
                                  <div className="hidden text-slate-500 sm:block">
                                    {faker.category.name}
                                  </div>
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </HeadlessDialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </HeadlessDialog>
      </Transition>
    </>
  );
}

export default Main;
