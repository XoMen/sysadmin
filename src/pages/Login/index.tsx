import { FormCheck, FormInput, FormLabel } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import Alert from "@/components/Base/Alert";
import Lucide from "@/components/Base/Lucide";
import clsx from "clsx";
import _ from "lodash";
import ThemeSwitcher from "@/components/ThemeSwitcher";

function Main() {
  return (
    <>
      <div className="container grid lg:h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] py-10 px-5 sm:py-14 sm:px-10 md:px-36 lg:py-0 lg:ps-14 lg:pe-12 xl:px-24">
        <div
          className={clsx([
            "relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pe-10 lg:col-span-5 xl:pe-24 2xl:col-span-4 lg:p-0",
            "before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5",
          ])}
        >
          <div className="relative z-10 flex flex-col justify-center w-full h-full py-2 lg:py-32">
            <div className="rounded-[0.8rem] w-[55px] h-[55px] border border-primary/30 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[50px] rounded-[0.6rem] h-[50px] bg-gradient-to-b from-theme-1/90 to-theme-2/90 bg-white">
                <div className="w-[26px] h-[26px] relative -rotate-45 [&_div]:bg-white">
                  <div className="absolute w-[20%] start-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                  <div className="absolute w-[20%] inset-0 m-auto h-[120%] rounded-full"></div>
                  <div className="absolute w-[20%] end-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-2xl font-medium">ورود</div>
              <div className="mt-2.5 text-slate-600">
                حساب کاربری ندارید؟{" "}
                <a className="font-medium text-primary" href="">
                  ثبت نام
                </a>
              </div>
              <Alert
                variant="outline-primary"
                className="flex items-center px-4 py-3 my-7 bg-primary/5 border-primary/20 rounded-[0.6rem] leading-[1.7]"
              >
                {({ dismiss }) => (
                  <>
                    <div className="">
                      <Lucide
                        icon="Lightbulb"
                        className="stroke-[0.8] w-7 h-7 me-2 fill-primary/10"
                      />
                    </div>
                    <div className="ms-1 me-8">
                      Welcome to <span className="font-medium">تیلوایس</span>{" "}
                      نمونه! به سادگی کلیک کنید{" "}
                      <span className="font-medium">ورود</span> to explore
                      و به مستندات ما دسترسی پیدا کنید.
                    </div>
                    <Alert.DismissButton
                      type="button"
                      className="btn-close text-primary"
                      onClick={dismiss}
                      aria-label="Close"
                    >
                      <Lucide icon="X" className="w-5 h-5" />
                    </Alert.DismissButton>
                  </>
                )}
              </Alert>
              <div className="mt-6">
                <FormLabel>ایمیل*</FormLabel>
                <FormInput
                  type="text"
                  className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                  placeholder={users.fakeUsers()[0].email}
                />
                <FormLabel className="mt-4">گذرواژه*</FormLabel>
                <FormInput
                  type="password"
                  className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                  placeholder="************"
                />
                <div className="flex mt-4 text-xs text-slate-500 sm:text-sm">
                  <div className="flex items-center me-auto">
                    <FormCheck.Input
                      id="remember-me"
                      type="checkbox"
                      className="me-2.5 border"
                    />
                    <label
                      className="cursor-pointer select-none"
                      htmlFor="remember-me"
                    >
                      مرا به خاطر بسپار
                    </label>
                  </div>
                  <a href="">گذرواژه خود را فراموش کرده‌اید؟</a>
                </div>
                <div className="mt-5 text-center xl:mt-8 xl:text-start">
                  <Button
                    variant="primary"
                    rounded
                    className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:me-3"
                  >
                    ورود
                  </Button>
                  <Button
                    variant="outline-secondary"
                    rounded
                    className="bg-white/70 w-full py-3.5 mt-3"
                  >
                    ثبت نام
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed container grid w-screen inset-0 h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] ps-14 pe-12 xl:px-24">
        <div
          className={clsx([
            "relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 z-20",
            "after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:end-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0] rtl:rounded-[1.2rem_0_0_1.2rem/1.7rem_0_0_1.7rem]",
            "before:content-[''] before:hidden before:lg:block before:absolute before:end-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-me-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0] rtl:rounded-[1.2rem_0_0_1.2rem/1.7rem_0_0_1.7rem]",
          ])}
        ></div>
        <div
          className={clsx([
            "h-full col-span-7 2xl:col-span-8 lg:relative",
            "before:content-[''] before:absolute before:lg:-ms-10 before:start-0 before:inset-y-0 before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:w-screen before:lg:w-[800%]",
            "after:content-[''] after:absolute after:inset-y-0 after:start-0 after:w-screen after:lg:w-[800%] after:bg-texture-white after:bg-fixed after:bg-center after:lg:bg-[25rem_-25rem] after:bg-no-repeat",
          ])}
        >
          <div className="sticky top-0 z-10 flex-col justify-center hidden h-screen ms-16 lg:flex xl:ms-28 2xl:ms-36">
            <div className="leading-[1.4] text-[2.6rem] xl:text-5xl font-medium xl:leading-[1.2] text-white">
              برتری را در توسعه داشبورد انتخاب کنید <br /> در توسعه داشبورد
            </div>
            <div className="mt-5 text-base leading-relaxed xl:text-lg text-white/70">
              پتانسیل تیلوایس را باز کنید، جایی که توسعه‌دهندگان
              داشبوردهای دقیقاً ساختار یافته و دیداری با
              ماژول‌های پر ویژگی. امروز به ما بپیوندید تا آینده
              توسعه برنامه‌تان را شکل دهید.
            </div>
            <div className="flex flex-col gap-3 mt-10 xl:items-center xl:flex-row">
              <div className="flex items-center">
                <div className="w-9 h-9 2xl:w-11 2xl:h-11 image-fit zoom-in">
                  <Tippy
                    as="img"
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    className="rounded-full border-[3px] border-white/50"
                    src={users.fakeUsers()[0].photo}
                    content={users.fakeUsers()[0].name}
                  />
                </div>
                <div className="-ms-3 w-9 h-9 2xl:w-11 2xl:h-11 image-fit zoom-in">
                  <Tippy
                    as="img"
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    className="rounded-full border-[3px] border-white/50"
                    src={users.fakeUsers()[0].photo}
                    content={users.fakeUsers()[0].name}
                  />
                </div>
                <div className="-ms-3 w-9 h-9 2xl:w-11 2xl:h-11 image-fit zoom-in">
                  <Tippy
                    as="img"
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    className="rounded-full border-[3px] border-white/50"
                    src={users.fakeUsers()[0].photo}
                    content={users.fakeUsers()[0].name}
                  />
                </div>
                <div className="-ms-3 w-9 h-9 2xl:w-11 2xl:h-11 image-fit zoom-in">
                  <Tippy
                    as="img"
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    className="rounded-full border-[3px] border-white/50"
                    src={users.fakeUsers()[0].photo}
                    content={users.fakeUsers()[0].name}
                  />
                </div>
              </div>
              <div className="text-base xl:ms-2 2xl:ms-3 text-white/70">
                بیش از 7k+ قدرتمند و در حال رشد! سفر شما از اینجا آغاز می‌شود.
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeSwitcher />
    </>
  );
}

export default Main;
