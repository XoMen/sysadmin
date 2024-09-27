import Lucide from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import { FormInput } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import ReportDonutChart7 from "@/components/ReportDonutChart7";
import users from "@/fakers/users";
import events from "@/fakers/events";
import projects from "@/fakers/projects";
import projectDetails from "@/fakers/project-details";
import categories from "@/fakers/categories";
import Button from "@/components/Base/Button";
import robotImage from "@/assets/images/miscellaneous/robot.jpg";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            تعاملی
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 mt-3.5">
          <div className="flex flex-col col-span-12 gap-x-6 gap-y-10 md:col-span-6 xl:col-span-4">
            <div className="p-5 box box--stacked">
              <div className="flex flex-col items-center">
                <div className="flex items-center w-full px-1">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-success">
                    <Lucide
                      icon="Check"
                      className="stroke-[1.3] text-white w-4 h-4"
                    />
                  </div>
                  <Menu className="ms-auto me-1">
                    <Menu.Button className="w-5 h-5 text-slate-500">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="Copy" className="w-4 h-4 me-2" /> کپی
                        پیوند
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash" className="w-4 h-4 me-2" />
                        حذف
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
                <div className="mt-5">
                  <div className="w-28 h-28 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                </div>
                <div className="mt-3.5 text-base font-medium">
                  {users.fakeUsers()[0].name}
                </div>
                <div className="text-slate-500 mt-0.5">
                  {users.fakeUsers()[0].department}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="flex items-center text-xs font-medium rounded-md text-primary bg-primary/10 border border-primary/10 px-2 py-0.5">
                    <span className="-mt-px">
                      {_.random(10, 120)} فعال Tasks
                    </span>
                  </div>
                  <div className="ms-auto flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-2 py-0.5">
                    <span className="-mt-px">{_.random(10, 20)} تکمیل شده</span>
                  </div>
                </div>
                <Button
                  type="button"
                  rounded
                  variant="primary"
                  className="w-full mt-10"
                >
                  <Lucide icon="Send" className="w-4 h-4 stroke-[1.3] me-2" />
                  تخصیص به وظیفه
                </Button>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="relative">
                <div className="max-w-[16rem] md:max-w-[17rem] text-base font-medium truncate">
                  {projects.fakeProjects()[0].projectName}
                </div>
                <div className="text-slate-500 mt-0.5">
                  By {projects.fakeProjects()[0].creativeDirector.name}
                </div>
                <Menu className="absolute top-0 end-0 me-1">
                  <Menu.Button className="w-5 h-5 text-slate-500">
                    <Lucide
                      icon="MoreHorizontal"
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
              </div>
              <div className="flex items-center mt-8">
                <div className="flex items-center w-full">
                  <div className="w-11 h-11 -ms-3.5 first:ms-0 image-fit zoom-in">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      className="border-[3px] border-slate-50 rounded-full cursor-pointer"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <div className="w-11 h-11 -ms-3.5 first:ms-0 image-fit zoom-in">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      className="border-[3px] border-slate-50 rounded-full cursor-pointer"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <div className="w-11 h-11 -ms-3.5 first:ms-0 image-fit zoom-in">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      className="border-[3px] border-slate-50 rounded-full cursor-pointer"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <div className="w-11 h-11 -ms-3.5 first:ms-0 image-fit zoom-in">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      className="border-[3px] border-slate-50 rounded-full cursor-pointer"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <div className="inset-y-0 z-10 font-medium flex items-center h-[22px] px-2.5 my-auto -ms-3 text-xs bg-white border border-slate-200/80 rounded-full shadow text-primary">
                    {_.random(10, 50)}+
                  </div>
                  <div className="ms-auto">
                    <Button
                      type="button"
                      variant="primary"
                      rounded
                      className="w-[40px] h-[40px] p-0"
                    >
                      <Lucide icon="Plus" className="w-5 h-5 stroke-[1.3]" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="relative">
                <div className="flex flex-col items-center pb-5 pt-7">
                  <div className="text-[2.1rem] font-medium text-primary/90">
                    09:20
                  </div>
                  <div className="mt-5 text-lg font-medium">یکشنبه</div>
                  <div className="mt-1 text-slate-500">۲ ژوئن ۲۰۲۴</div>
                  <div className="flex gap-3 mt-9">
                    <Tippy
                      as="a"
                      className="flex relative items-center justify-center border rounded-full w-11 h-11 border-primary/[0.25] bg-primary/[0.03]"
                      content={users.fakeUsers()[0].email}
                    >
                      <Lucide
                        icon="Mail"
                        className="w-4 h-4 text-primary fill-primary/5"
                      />
                    </Tippy>
                    <Tippy
                      as="a"
                      className="flex relative items-center justify-center border rounded-full w-11 h-11 border-primary/[0.25] bg-primary/[0.03]"
                      content={users.fakeUsers()[0].name}
                    >
                      <Lucide
                        icon="MessageSquare"
                        className="w-4 h-4 text-primary fill-primary/5"
                      />
                    </Tippy>
                    <Tippy
                      as="a"
                      className="flex relative items-center justify-center border rounded-full w-11 h-11 border-primary/[0.25] bg-primary/[0.03]"
                      content={users.fakeUsers()[0].phone}
                    >
                      <Lucide
                        icon="Bell"
                        className="w-4 h-4 text-primary fill-primary/5"
                      />
                      <div className="bg-success px-2 py-0.5 rounded-full text-white absolute top-0 end-0 text-xs font-medium -mt-2 -me-2">
                        5
                      </div>
                    </Tippy>
                  </div>
                </div>
                <Menu className="absolute top-0 end-0 me-1">
                  <Menu.Button className="w-5 h-5 text-slate-500">
                    <Lucide
                      icon="MoreHorizontal"
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
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="relative">
                <FormInput
                  type="text"
                  className="py-3 pe-11"
                  rounded
                  placeholder="Search members..."
                />
                <div className="absolute inset-y-0 end-0 flex items-center justify-center w-10 my-1 me-1 rounded-full bg-primary">
                  <Lucide
                    icon="Search"
                    className="stroke-[1.3] w-4 h-4 text-white"
                  />
                </div>
              </div>
            </div>
            <div className="p-1 box box--stacked">
              <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-r from-theme-2/[0.85] to-theme-1/[0.85]">
                <div className="flex w-full">
                  <div className="me-auto text-white">Day</div>
                  <Menu className="me-1">
                    <Menu.Button className="w-5 h-5 text-slate-500">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-6 h-6 stroke-white/70 fill-white/70"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="Copy" className="w-4 h-4 me-2" /> کپی
                        پیوند
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Trash" className="w-4 h-4 me-2" />
                        حذف
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                </div>
                <div className="flex items-center mt-10 mb-11">
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center">
                      <div className="text-[2.1rem] font-medium text-white/90">
                        17°C
                      </div>
                      <div className="mt-3.5 text-base text-white/80">
                        ابری
                      </div>
                    </div>
                    <div
                      className={clsx([
                        "opacity-[0.95] relative bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full w-8 h-8 -mt-6 ms-10 me-2",
                        "before:content-[''] before:w-14 before:h-14 before:bg-white before:rounded-full before:absolute before:top-0 before:end-0 before:me-4 before:-mt-1",
                        "after:content-[''] after:w-8 after:h-8 after:bg-white after:rounded-full after:absolute after:top-0 after:end-0 after:mt-5 after:-me-2",
                      ])}
                    >
                      <div className="absolute bottom-0 end-0 w-10 h-5 me-1.5 -mb-5 bg-white"></div>
                    </div>
                  </div>
                </div>
                <Button
                  className="px-10 mb-5 bg-white/20 border-white/50"
                  rounded
                >
                  <Lucide
                    icon="ChevronDown"
                    className="stroke-[1.3] text-white w-5 h-5"
                  />
                </Button>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex flex-col items-center my-3">
                <div>
                  <div className="flex items-center justify-center p-1.5 rounded-full bg-gradient-to-b from-theme-1/20 to-theme-2/20">
                    <div className="flex items-center justify-center p-1.5 rounded-full bg-gradient-to-b from-theme-1/40 to-theme-2/40">
                      <div className="flex items-center justify-center p-1.5 rounded-full bg-gradient-to-b from-theme-1/60 to-theme-2/60">
                        <div className="w-24 h-24 overflow-hidden rounded-full image-fit">
                          <img
                            alt="تیل وایز - قالب داشبورد مدیریتی"
                            src={users.fakeUsers()[0].photo}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3.5 text-base font-medium">
                  {users.fakeUsers()[0].name}
                </div>
                <div className="text-slate-500 mt-0.5">تماس ورودی</div>
                <div className="flex gap-5 mt-6">
                  <Tippy
                    as="a"
                    className="flex items-center justify-center border rounded-full w-11 h-11 border-danger/40 bg-danger/[0.15]"
                    content="Hang Up"
                  >
                    <Lucide
                      icon="Phone"
                      className="w-4 h-4 rotate-[135deg] text-danger fill-danger/10"
                    />
                  </Tippy>
                  <Tippy
                    as="a"
                    className="flex items-center justify-center border rounded-full w-11 h-11 border-primary/40 bg-primary/[0.15]"
                    content="Answer"
                  >
                    <Lucide
                      icon="Phone"
                      className="w-4 h-4 text-primary fill-primary/10"
                    />
                  </Tippy>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 gap-x-6 gap-y-10 md:col-span-6 xl:col-span-4">
            <div className="p-1 box box--stacked">
              <div
                className={clsx([
                  "py-6 rounded-lg px-7 bg-gradient-to-r from-theme-2/[0.85] to-theme-1/[0.85] relative overflow-hidden",
                  "before:content-[''] before:w-64 before:h-64 before:border before:border-dashed before:rounded-full before:absolute before:border-white/[0.15] before:end-0 before:top-0 before:-mt-5 before:-me-28",
                  "after:content-[''] after:w-80 after:h-80 after:border after:border-dashed after:rounded-full after:absolute after:border-white/[0.15] after:end-0 after:top-0 after:mt-20 after:-me-20",
                ])}
              >
                <Lucide
                  icon="Award"
                  className="stroke-[0.8] w-10 h-10 text-white/10 absolute end-0 top-0 mt-24 me-14 rotate-12"
                />
                <Lucide
                  icon="Album"
                  className="stroke-[0.7] w-10 h-10 text-white/10 absolute start-0 top-0 mt-80 ms-10 -rotate-12"
                />
                <Menu className="absolute top-0 end-0 mt-5 me-9">
                  <Menu.Button className="w-5 h-5 text-white/60">
                    <Lucide
                      icon="MoreHorizontal"
                      className="w-6 h-6 stroke-white/60 fill-white/60"
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
                <Lucide
                  icon="Goal"
                  className="stroke-[0.5] w-16 h-16 text-white/50 fill-white/5"
                />
                <div className="text-2xl font-medium text-white mt-7">
                  عضویت ویژه
                </div>
                <div className="mt-2 leading-relaxed text-white/80">
                  امروز به عضویت ویژه ارتقا دهید! دسترسی به امکانات اختصاصی
                  ، دسترسی نامحدود به محتوای ویژه و اولویت در
                  پشتیبانی مشتریان. هم‌اکنون بپیوندید برای پیشنهاد محدود مدت!
                </div>
                <Button
                  type="button"
                  rounded
                  className="w-full mb-3 text-white mt-11 bg-white/20 border-white/50"
                >
                  اشتراک
                </Button>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-8">
                  <Tippy
                    as="a"
                    className="flex relative items-center justify-center border rounded-full w-11 h-11 border-primary/[0.25] bg-primary/[0.03]"
                    content={users.fakeUsers()[0].email}
                  >
                    <Lucide
                      icon="SkipBack"
                      className="w-4 h-4 text-primary fill-primary/5"
                    />
                  </Tippy>
                  <div className="w-28 h-28 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <Tippy
                    as="a"
                    className="flex relative items-center justify-center border rounded-full w-11 h-11 border-primary/[0.25] bg-primary/[0.03]"
                    content={users.fakeUsers()[0].name}
                  >
                    <Lucide
                      icon="SkipForward"
                      className="w-4 h-4 text-primary fill-primary/5"
                    />
                  </Tippy>
                </div>
                <div className="mt-4 text-base font-medium">سرطان</div>
                <div className="text-slate-500 mt-0.5">عشق شیمیایی من</div>
                <div className="flex items-center w-full gap-3 mt-5">
                  <div className="text-xs text-slate-500">0:00</div>
                  <div className="flex w-full h-2 border rounded bg-slate-100">
                    <Tippy
                      as="div"
                      content="بیماری قلبی"
                      className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[35%]"
                    ></Tippy>
                  </div>
                  <div className="text-xs text-slate-500">2:42</div>
                </div>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="relative">
                <div className="max-w-[16rem] md:max-w-[17rem] text-base font-medium truncate">
                  پژواکهای ابدیت
                </div>
                <div className="text-slate-500 mt-0.5">
                  سفر در زمان و فضا
                </div>
                <div className="flex items-center mt-7">
                  <div className="flex items-center gap-2">
                    <div className="text-xl font-medium text-primary">32.5</div>
                    <div className="text-slate-500">دلار آمریکا</div>
                  </div>
                  <div className="ms-auto">
                    <Button
                      type="button"
                      variant="primary"
                      rounded
                      className="w-[40px] h-[40px] p-0"
                    >
                      <Lucide
                        icon="ShoppingCart"
                        className="w-5 h-5 stroke-[1.3]"
                      />
                    </Button>
                  </div>
                </div>
                <Menu className="absolute top-0 end-0 me-1">
                  <Menu.Button className="w-5 h-5 text-slate-500">
                    <Lucide
                      icon="MoreHorizontal"
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
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex items-center gap-3.5">
                <div>
                  <div className="w-14 h-14 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-base font-medium truncate max-w-[9rem] md:max-w-none">
                    {users.fakeUsers()[0].name}
                  </div>
                  <div className="text-slate-500 mt-0.5">
                    {users.fakeUsers()[0].position}
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full gap-3 mt-5">
                <div className="flex w-full h-2 border rounded bg-slate-100">
                  <Tippy
                    as="div"
                    content="بیماری قلبی"
                    className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[35%]"
                  ></Tippy>
                </div>
                <div className="text-xs text-slate-500">45%</div>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="relative">
                <Button
                  type="button"
                  className="absolute top-0 end-0 p-0 border-0 shadow-none text-slate-500"
                >
                  <Lucide
                    icon="MoreHorizontal"
                    className="w-6 h-6 stroke-slate-400/70 fill-slate-400/70"
                  />
                </Button>
                <div className="max-w-[16rem] md:max-w-[17rem] text-base font-medium truncate">
                  پژواکهای ابدیت
                </div>
                <div className="text-slate-500 mt-0.5 max-w-[16rem] md:max-w-[17rem] truncate">
                  سفر در زمان و فضا
                </div>
                <div className="grid grid-cols-4 gap-2.5 mt-5">
                  <div className="overflow-hidden rounded-md h-28 image-fit">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={projectDetails.fakeProjectDetails()[0].image}
                    />
                  </div>
                  <div className="overflow-hidden rounded-md h-28 image-fit">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={projectDetails.fakeProjectDetails()[0].image}
                    />
                  </div>
                  <div className="overflow-hidden rounded-md h-28 image-fit">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={projectDetails.fakeProjectDetails()[0].image}
                    />
                  </div>
                  <div className="overflow-hidden rounded-md h-28 image-fit">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={projectDetails.fakeProjectDetails()[0].image}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-7">
                  <Button
                    rounded
                    type="button"
                    variant="outline-primary"
                    className="w-full"
                  >
                    <Lucide icon="Eye" className="w-4 h-4 stroke-[1.3] me-2" />
                    مشاهده جزئیات
                  </Button>
                  <Button
                    rounded
                    type="button"
                    variant="primary"
                    className="w-full"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 stroke-[1.3] me-2" />
                    افزودن کتاب
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex flex-wrap gap-2.5">
                {categories.fakeCategories().map((faker, fakerKey) => (
                  <a
                    href=""
                    key={fakerKey}
                    className={clsx([
                      "flex gap-2.5 items-center px-3.5 py-1.5 border rounded-lg border-slate-300 bg-slate-50/70 [&.active]:bg-primary/5 [&.active]:border-primary/50 [&.active]:text-primary [&:not(.active)_a]:hidden",
                      { active: !_.random(0, 1) },
                    ])}
                  >
                    {faker.name}{" "}
                    <Lucide icon="X" className="w-3.5 h-3.5 -me-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-12 gap-x-6 gap-y-10 md:col-span-6 xl:col-span-4">
            <div className="p-5 box box--stacked">
              <div className="flex flex-col items-center pb-8 mb-5 border-b border-dashed">
                <div className="max-w-[17rem] text-base font-medium truncate">
                  Hi, {users.fakeUsers()[0].name}
                </div>
                <div className="text-slate-500 mt-0.5">
                  غذای شما در حال آماده شدن در
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-10">
                    <ReportDonutChart7 className="relative z-10" height={35} />
                  </div>
                  <div className="text-[2.1rem] font-medium opacity-90">
                    00:32
                  </div>
                </div>
              </div>
              <div
                className={clsx([
                  "flex flex-col gap-5 relative",
                  "before:content-[''] before:w-px before:h-full before:absolute before:bg-slate-200 before:ms-5",
                ])}
              >
                <div className="flex items-center gap-3.5 relative z-5">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full bg-primary/90 border-slate-200/70">
                      <Lucide
                        icon="Cookie"
                        className="w-4 h-4 text-white fill-white/10"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium truncate max-w-[15rem]">
                      آشپزخانه در حال پخت
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      رستوران سنتی
                    </div>
                  </div>
                  <Tippy
                    as="a"
                    className="ms-auto flex relative items-center justify-center border rounded-full w-9 h-9 border-primary/[0.25] bg-primary/[0.03]"
                    content="ارسال پیام"
                  >
                    <Lucide
                      icon="MessagesSquare"
                      className="w-3.5 h-3.5 text-primary fill-primary/5"
                    />
                  </Tippy>
                </div>
                <div className="flex items-center gap-3.5 relative z-5">
                  <div>
                    <div className="w-10 h-10 overflow-hidden border-2 rounded-full image-fit border-slate-200/70">
                      <img
                        alt="تیل وایز - قالب داشبورد مدیریتی"
                        src={users.fakeUsers()[0].photo}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium truncate max-w-[15rem]">
                      {users.fakeUsers()[0].name}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">راننده</div>
                  </div>
                  <Tippy
                    as="a"
                    className="ms-auto flex relative items-center justify-center border rounded-full w-9 h-9 border-primary/[0.25] bg-primary/[0.03]"
                    content="ارسال پیام"
                  >
                    <Lucide
                      icon="MessagesSquare"
                      className="w-3.5 h-3.5 text-primary fill-primary/5"
                    />
                  </Tippy>
                </div>
                <div className="flex items-center gap-3.5 relative z-5">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full bg-slate-100 border-slate-200/70">
                      <Lucide
                        icon="MapPin"
                        className="w-4 h-4 text-primary fill-primary/10"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium truncate max-w-[15rem]">
                      تحویل
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      راننده به محل شما بروید
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-7">
                <Button
                  rounded
                  type="button"
                  variant="outline-primary"
                  className="w-full"
                >
                  لغو سفارش
                </Button>
                <Button
                  rounded
                  type="button"
                  variant="primary"
                  className="w-full"
                >
                  مشاهده جزئیات
                </Button>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex items-center">
                <div className="font-medium flex items-center py-1.5 px-3.5 border rounded-full border-primary bg-primary text-white">
                  <Lucide icon="Clock" className="w-4 h-4 stroke-[1.5] me-2" />{" "}
                  ۱ روز باقی مانده
                </div>
                <Button
                  type="button"
                  variant="outline-secondary"
                  rounded
                  className="w-[40px] h-[40px] p-0 ms-auto"
                >
                  <Lucide icon="Maximize2" className="w-4 h-4 stroke-[1.3]" />
                </Button>
              </div>
              <div className="pt-4 mt-5 border-t border-dashed">
                <div className="text-slate-500">فروش بهاری</div>
                <div className="mt-1.5 text-base font-medium truncate">
                  ۲۵ درصد تخفیف برای هر محصول!
                </div>
                <div className="w-full h-48 mt-4 overflow-hidden rounded-lg image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:start-0 before:z-10 before:bg-gradient-to-t before:from-theme-1/60 before:to-theme-2/5">
                  <img
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    className="rounded-md saturate-150"
                    src={robotImage}
                  />
                </div>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex items-center">
                <div className="w-11 h-11 -ms-3.5 first:ms-0 image-fit zoom-in">
                  <img
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    className="border-[3px] border-slate-50 rounded-full cursor-pointer"
                    src={users.fakeUsers()[0].photo}
                  />
                </div>
                <div className="w-11 h-11 -ms-3.5 first:ms-0 image-fit zoom-in">
                  <img
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    className="border-[3px] border-slate-50 rounded-full cursor-pointer"
                    src={users.fakeUsers()[0].photo}
                  />
                </div>
                <div className="w-11 h-11 -ms-3.5 first:ms-0 image-fit zoom-in">
                  <img
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    className="border-[3px] border-slate-50 rounded-full cursor-pointer"
                    src={users.fakeUsers()[0].photo}
                  />
                </div>
                <div className="w-11 h-11 -ms-3.5 first:ms-0 image-fit zoom-in">
                  <img
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    className="border-[3px] border-slate-50 rounded-full cursor-pointer"
                    src={users.fakeUsers()[0].photo}
                  />
                </div>
                <div className="inset-y-0 z-10 font-medium flex items-center h-[22px] px-2.5 my-auto -ms-3 text-xs bg-white border border-slate-200/80 rounded-full shadow text-primary">
                  {_.random(10, 50)}+
                </div>
                <Button
                  type="button"
                  variant="outline-secondary"
                  rounded
                  className="w-[40px] h-[40px] p-0 ms-auto"
                >
                  <Lucide icon="Heart" className="w-4 h-4 stroke-[1.3]" />
                </Button>
              </div>
              <div className="pt-4 mt-5 border-t border-dashed">
                <div className="max-w-[17rem] text-base font-medium truncate">
                  {events.fakeEvents()[0].title}
                </div>
                <div className="text-slate-500 mt-0.5">
                  {events.fakeEvents()[0].description}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-7">
                <Button
                  rounded
                  type="button"
                  variant="outline-primary"
                  className="w-full"
                >
                  <Lucide icon="Eye" className="w-4 h-4 stroke-[1.3] me-2" />
                  مشاهده
                </Button>
                <Button
                  rounded
                  type="button"
                  variant="primary"
                  className="w-full"
                >
                  <Lucide icon="Users" className="w-4 h-4 stroke-[1.3] me-2" />
                  پیوستن
                </Button>
              </div>
            </div>
            <div className="p-5 box box--stacked">
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28">
                  <div className="w-28 h-28 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                    <img
                      alt="تیل وایز - قالب داشبورد مدیریتی"
                      src={users.fakeUsers()[0].photo}
                    />
                  </div>
                  <Lucide
                    icon="CheckCheck"
                    className="w-6 h-6 stroke-[1.3] absolute bg-success/[0.95] text-white fill-white/10 rounded-full box p-1 bottom-0 end-0 mb-6 -me-1"
                  />
                </div>
                <div className="mt-3.5 text-base font-medium">
                  {users.fakeUsers()[0].name}
                </div>
                <div className="text-slate-500 mt-0.5">
                  {users.fakeUsers()[0].department}
                </div>
                <div className="flex items-center px-2 mt-6">
                  <div className="w-full text-center">
                    <div className="font-medium">15</div>
                    <div className="mt-0.5 text-slate-500">پروژه‌ها</div>
                  </div>
                  <div className="w-px mx-5 border-l border-dashed sm:mx-7 border-slate-300/70 h-7"></div>
                  <div className="w-full text-center">
                    <div className="font-medium">تمام وقت</div>
                    <div className="mt-0.5 text-slate-500">استخدام</div>
                  </div>
                  <div className="w-px mx-5 border-l border-dashed sm:mx-7 border-slate-300/70 h-7"></div>
                  <div className="w-full text-center">
                    <div className="font-medium">4.5/5</div>
                    <div className="mt-0.5 text-slate-500">امتیاز</div>
                  </div>
                </div>
                <Button
                  type="button"
                  rounded
                  variant="primary"
                  className="w-full mt-8"
                >
                  <Lucide icon="Send" className="w-4 h-4 stroke-[1.3] me-2" />
                  مشاهده جزئیات
                </Button>
                <Button
                  rounded
                  type="button"
                  variant="outline-primary"
                  className="w-full mt-2"
                >
                  <Lucide icon="Mail" className="w-4 h-4 stroke-[1.3] me-2" />
                  ارسال پیام
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
