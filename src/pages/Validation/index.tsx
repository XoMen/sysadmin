import clsx from "clsx";
import _ from "lodash";
import {
  FormSwitch,
  FormLabel,
  FormInput,
  FormTextarea,
} from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import Notification from "@/components/Base/Notification";
import Lucide from "@/components/Base/Lucide";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { useForm } from "react-hook-form";
import Toastify from "toastify-js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";

function Main() {
  const schema = yup
    .object({
      name: yup.string().required().min(2),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      age: yup
        .number()
        .required()
        .test("len", "age must be less than or equal to 3", (val) =>
          val && val.toString().length <= 3 ? true : false
        ),
      url: yup.string().url(),
      comment: yup.string().required().min(10),
    })
    .required();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await trigger();
    if (!result) {
      const failedEl = document
        .querySelectorAll("#failed-notification-content")[0]
        .cloneNode(true) as HTMLElement;
      failedEl.classList.remove("hidden");
      Toastify({
        node: failedEl,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    } else {
      const successEl = document
        .querySelectorAll("#success-notification-content")[0]
        .cloneNode(true) as HTMLElement;
      successEl.classList.remove("hidden");
      Toastify({
        node: successEl,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    }
  };

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            اعتبارسنجی
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            از سادگی و قدرت مؤلفه اعتبارسنجی ما برای
            ایجاد فرم‌های بدون خطا و کاربرپسند در وب‌سایت شما.
            برنامه‌ها.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        پیاده‌سازی
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
                        قابلیت "اعتبارسنجی" به شما امکان تعریف و
                        اجرای قوانین اعتبارسنجی داده در فرم‌های وب شما را می‌دهد. با
                        راه‌اندازی اعتبارسنجی، می‌توانید اطمینان حاصل کنید که
                        داده‌های ارسالی توسط کاربر مطابق با معیارهای خاصی است و
                        بدون خطا است.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Validation Form */}
                            <form className="validate-form" onSubmit={onSubmit}>
                              <div className="input-form">
                                <FormLabel
                                  htmlFor="validation-form-1"
                                  className="flex flex-col w-full sm:flex-row"
                                >
                                  نام
                                  <span className="mt-1 text-xs sm:ms-auto sm:mt-0 text-slate-500">
                                    ضروری، حداقل ۲ کاراکتر
                                  </span>
                                </FormLabel>
                                <FormInput
                                  {...register("name")}
                                  id="validation-form-1"
                                  type="text"
                                  name="name"
                                  className={clsx({
                                    "border-danger": errors.name,
                                  })}
                                  placeholder="John Legend"
                                />
                                {errors.name && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.name.message === "string" &&
                                      errors.name.message}
                                  </div>
                                )}
                              </div>
                              <div className="mt-3 input-form">
                                <FormLabel
                                  htmlFor="validation-form-2"
                                  className="flex flex-col w-full sm:flex-row"
                                >
                                  ایمیل
                                  <span className="mt-1 text-xs sm:ms-auto sm:mt-0 text-slate-500">
                                    ضروری، فرمت آدرس ایمیل
                                  </span>
                                </FormLabel>
                                <FormInput
                                  {...register("email")}
                                  id="validation-form-2"
                                  type="email"
                                  name="email"
                                  className={clsx({
                                    "border-danger": errors.email,
                                  })}
                                  placeholder="example@gmail.com"
                                />
                                {errors.email && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.email.message === "string" &&
                                      errors.email.message}
                                  </div>
                                )}
                              </div>
                              <div className="mt-3 input-form">
                                <FormLabel
                                  htmlFor="validation-form-3"
                                  className="flex flex-col w-full sm:flex-row"
                                >
                                  رمز عبور
                                  <span className="mt-1 text-xs sm:ms-auto sm:mt-0 text-slate-500">
                                    ضروری، حداقل ۶ کاراکتر
                                  </span>
                                </FormLabel>
                                <FormInput
                                  {...register("password")}
                                  id="validation-form-3"
                                  type="password"
                                  name="password"
                                  className={clsx({
                                    "border-danger": errors.password,
                                  })}
                                  placeholder="secret"
                                />
                                {errors.password && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.password.message ===
                                      "string" && errors.password.message}
                                  </div>
                                )}
                              </div>
                              <div className="mt-3 input-form">
                                <FormLabel
                                  htmlFor="validation-form-4"
                                  className="flex flex-col w-full sm:flex-row"
                                >
                                  سن
                                  <span className="mt-1 text-xs sm:ms-auto sm:mt-0 text-slate-500">
                                    ضروری, integer only & maximum 3
                                    characters
                                  </span>
                                </FormLabel>
                                <FormInput
                                  {...register("age")}
                                  id="validation-form-4"
                                  type="number"
                                  name="age"
                                  className={clsx({
                                    "border-danger": errors.age,
                                  })}
                                  placeholder="21"
                                />
                                {errors.age && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.age.message === "string" &&
                                      errors.age.message}
                                  </div>
                                )}
                              </div>
                              <div className="mt-3 input-form">
                                <FormLabel
                                  htmlFor="validation-form-5"
                                  className="flex flex-col w-full sm:flex-row"
                                >
                                  آدرس پروفایل
                                  <span className="mt-1 text-xs sm:ms-auto sm:mt-0 text-slate-500">
                                    اختیاری، فرمت آدرس
                                  </span>
                                </FormLabel>
                                <FormInput
                                  {...register("url")}
                                  id="validation-form-5"
                                  type="text"
                                  name="url"
                                  className={clsx({
                                    "border-danger": errors.url,
                                  })}
                                  placeholder="https://google.com"
                                />
                                {errors.url && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.url.message === "string" &&
                                      errors.url.message}
                                  </div>
                                )}
                              </div>
                              <div className="mt-3 input-form">
                                <FormLabel
                                  htmlFor="validation-form-6"
                                  className="flex flex-col w-full sm:flex-row"
                                >
                                  نظر
                                  <span className="mt-1 text-xs sm:ms-auto sm:mt-0 text-slate-500">
                                    ضروری، حداقل ۱۰ کاراکتر
                                  </span>
                                </FormLabel>
                                <FormTextarea
                                  {...register("comment")}
                                  id="validation-form-6"
                                  name="comment"
                                  className={clsx({
                                    "border-danger": errors.comment,
                                  })}
                                  placeholder="Type your comments"
                                ></FormTextarea>
                                {errors.comment && (
                                  <div className="mt-2 text-danger">
                                    {typeof errors.comment.message ===
                                      "string" && errors.comment.message}
                                  </div>
                                )}
                              </div>
                              <Button
                                variant="primary"
                                type="submit"
                                className="mt-5"
                              >
                                ثبت نام
                              </Button>
                            </form>
                            {/* END: Validation Form */}
                          </Preview>
                          <Source>
                            <Highlight type="javascript">
                              {`
                      const schema = yup
                      .object({
                        name: yup.string().required().min(2),
                        email: yup.string().required().email(),
                        password: yup.string().required().min(6),
                        age: yup
                          .number()
                          .required()
                          .test(
                            "len",
                            "age must be less than or equal to 3",
                            (val) => val.toString().length <= 3
                          ),
                        url: yup.string().url(),
                        comment: yup.string().required().min(10),
                      })
                      .required();
                  
                    const {
                      register,
                      trigger,
                      formState: { errors },
                    } = useForm({
                      mode: "onChange",
                      resolver: yupResolver(schema),
                    });
                    const onSubmit = async (event) => {
                      event.preventDefault();
                      const result = await trigger();
                      if (!result) {
                        Toastify({
                          node: dom("#failed-notification-content")
                            .clone()
                            .removeClass("hidden")[0],
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: "top",
                          position: "right",
                          stopOnFocus: true,
                        }).showToast();
                      } else {
                        Toastify({
                          node: dom("#success-notification-content")
                            .clone()
                            .removeClass("hidden")[0],
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: "top",
                          position: "right",
                          stopOnFocus: true,
                        }).showToast();
                      }
                    };
                      `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </PreviewComponent>
              {/* BEGIN: Success Notification Content */}
              <Notification
                id="success-notification-content"
                className="flex hidden"
              >
                <Lucide icon="CheckCircle" className="text-success" />
                <div className="ms-4 me-4">
                  <div className="font-medium">ثبت‌نام با موفقیت انجام شد!</div>
                  <div className="mt-1 text-slate-500">
                    لطفاً ایمیل خود را برای اطلاعات بیشتر بررسی کنید!
                  </div>
                </div>
              </Notification>
              {/* END: Success Notification Content */}
              {/* BEGIN: Failed Notification Content */}
              <Notification
                id="failed-notification-content"
                className="flex hidden"
              >
                <Lucide icon="XCircle" className="text-danger" />
                <div className="ms-4 me-4">
                  <div className="font-medium">ثبت‌نام ناموفق بود!</div>
                  <div className="mt-1 text-slate-500">
                    لطفاً فرم را بررسی کنید.
                  </div>
                </div>
              </Notification>
              {/* END: Failed Notification Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
