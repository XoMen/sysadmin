import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import {
  FormSelect,
  FormInput,
  FormLabel,
  FormHelp,
  FormCheck,
  FormSwitch,
  FormInline,
  InputGroup,
} from "@/components/Base/Form";
import Button from "@/components/Base/Button";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            فرم معمولی
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            پتانسیل مؤلفه فرم ما را برای ایجاد
            فرم‌های وب کاربرپسند و تعاملی به راحتی را معرفی کنید.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">Input</div>
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
                        فیلدهای ورودی بخش اساسی یک فرم وب هستند و
                        به کاربران اجازه می‌دهند تا اطلاعاتی را فراهم کنند یا با برنامه شما تعامل داشته باشند.
                        این بخش به نحوه استفاده از اجزاء ورودی در برنامه وب شما می‌پردازد و نمونه‌هایی از انواع استایل‌های ورودی را ارائه می‌دهد.
                        اجزا در برنامه وب شما را فراهم می‌کند و نمونه‌هایی ارائه می‌دهد
                        از انواع مختلف سبک‌های ورودی را ارائه می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <FormLabel htmlFor="regular-form-1">
                                متن ورودی
                              </FormLabel>
                              <FormInput
                                id="regular-form-1"
                                type="text"
                                placeholder="Input text"
                              />
                            </div>
                            <div className="mt-3">
                              <FormLabel htmlFor="regular-form-2">
                                گرد
                              </FormLabel>
                              <FormInput
                                id="regular-form-2"
                                type="text"
                                rounded
                                placeholder="گرد"
                              />
                            </div>
                            <div className="mt-3">
                              <FormLabel htmlFor="regular-form-3">
                                با راهنما
                              </FormLabel>
                              <FormInput
                                id="regular-form-3"
                                type="text"
                                placeholder="With help"
                              />
                              <FormHelp>
                                لورم ایپسوم به طور ساده متن مجازی چاپ و
                                صنعت آماده‌سازی می‌باشد.
                              </FormHelp>
                            </div>
                            <div className="mt-3">
                              <FormLabel htmlFor="regular-form-4">
                                رمز عبور
                              </FormLabel>
                              <FormInput
                                id="regular-form-4"
                                type="password"
                                placeholder="رمز عبور"
                              />
                            </div>
                            <div className="mt-3">
                              <FormLabel htmlFor="regular-form-5">
                                غیرفعال
                              </FormLabel>
                              <FormInput
                                id="regular-form-5"
                                type="text"
                                placeholder="غیرفعال"
                                disabled
                              />
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div>
                  <FormLabel htmlFor="regular-form-1">متن ورودی</FormLabel>
                  <FormInput
                    id="regular-form-1"
                    type="text"
                    placeholder="Input text"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="regular-form-2">گرد</FormLabel>
                  <FormInput
                    id="regular-form-2"
                    type="text"
                    rounded
                    placeholder="گرد"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="regular-form-3">با راهنما</FormLabel>
                  <FormInput
                    id="regular-form-3"
                    type="text"
                    placeholder="With help"
                  />
                  <FormHelp>
                    لورم ایپسوم به طور ساده متن مجازی چاپ و and
                    typesetting صنعت.
                  </FormHelp>
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="regular-form-4">رمز عبور</FormLabel>
                  <FormInput
                    id="regular-form-4"
                    type="password"
                    placeholder="رمز عبور"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="regular-form-5">غیرفعال</FormLabel>
                  <FormInput
                    id="regular-form-5"
                    type="text"
                    placeholder="غیرفعال"
                    disabled
                  />
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        با استفاده از اجزای `ورودی` و سفارشی‌سازی ویژگی‌های آن، می‌توانید فیلدهای ورودی چند منظوره‌ای ایجاد کنید که
                        نیازهای برنامه شما را برآورده کنند و تجربه کاربری سریع و بی‌دردسری ارائه دهند. حتماً نوع ورودی مناسب و قوانین اعتبارسنجی را براساس
                        مورد استفاده خاص خود انتخاب کنید.
                        تجربه کاربری یکپارچه را فراهم کنید. مطمئن شوید که
                        نوع ورودی مناسب و قوانین اعتبارسنجی را بر اساس
                        مورد استفاده خاص خود انتخاب کنید.
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
                        اندازه‌گیری ورودی
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
                        اندازه‌گیری ورودی یک جنبه مهم از طراحی رابط کاربری است. این به شما امکان می‌دهد که ابعاد فیلدهای ورودی را کنترل کنید تا مطمئن شوید که به خوبی در چیدمان برنامه شما جا می‌شوند.
                        طراحی. این به شما امکان می‌دهد تا ابعاد فیلدهای ورودی را کنترل کنید
                        تا اطمینان حاصل شود که به خوبی در چیدمان برنامه شما جا می‌شوند
                        این بخش به نحوه تنظیم اندازه
                        اجزای ورودی را پوشش می‌دهد و نمونه‌هایی از انواع مختلف
                        این بخش به نحوه تنظیم اندازه اجزای ورودی می‌پردازد و نمونه‌هایی از گزینه‌های مختلف اندازه‌گیری را ارائه می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <FormInput
                              type="text"
                              formInputSize="lg"
                              placeholder=".form-control-lg"
                              aria-label=".form-control-lg example"
                            />
                            <FormInput
                              type="text"
                              className="mt-2"
                              placeholder="پیش‌فرض input"
                              aria-label="default input example"
                            />
                            <FormInput
                              type="text"
                              formInputSize="sm"
                              className="mt-2"
                              placeholder=".form-control-sm"
                              aria-label=".form-control-sm example"
                            />
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <FormInput
                  type="text"
                  formInputSize="lg"
                  placeholder=".form-control-lg"
                  aria-label=".form-control-lg example"
                />
                <FormInput
                  type="text"
                  className="mt-2"
                  placeholder="پیش‌فرض input"
                  aria-label="default input example"
                />
                <FormInput
                  type="text"
                  formInputSize="sm"
                  className="mt-2"
                  placeholder=".form-control-sm"
                  aria-label=".form-control-sm example"
                />
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        کنترل اندازه اجزای ورودی برای دستیابی به یک طراحی دیداری جذاب و کاربرپسند ضروری است. با استفاده از اجزای `ورودی` و مشخص کردن اندازه مورد نظر، می‌توانید مطمئن شوید که فیلدهای ورودی با نیازهای چیدمان و استایل برنامه شما هماهنگی داشته باشند.
                        برای دستیابی به یک طراحی جذاب و کاربرپسند
                        طراحی. با استفاده از اجزاء `ورودی` و مشخص کردن
                        اندازه مورد نظر، می‌توانید مطمئن شوید که فیلدهای ورودی با
                        نیازهای چیدمان و استایل برنامه شما هماهنگی داشته باشند.
                        با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که
                        بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
                        با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
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
                        گروه‌های ورودی
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
                        گروه‌های ورودی عنصر رابط کاربری مفیدی برای ترکیب ورودی‌های فرم هستند
                        ورودی‌ها با متن یا آیکون‌های اضافی استفاده می‌شوند. آن‌ها اغلب
                        برای ایجاد فیلدهای ورودی با تطابق بصری و متناسب با
                        از آن‌ها استفاده می‌شود. این بخش به نحوه ایجاد
                        گروه‌های ورودی با استفاده از اجزاء `InputGroup` و
                        نمونه‌های مختلف پیکربندی گروه‌های ورودی را ارائه می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <InputGroup>
                              <InputGroup.Text id="input-group-email">
                                @
                              </InputGroup.Text>
                              <FormInput
                                type="text"
                                placeholder="ایمیل"
                                aria-label="ایمیل"
                                aria-describedby="input-group-email"
                              />
                            </InputGroup>
                            <InputGroup className="mt-2">
                              <FormInput
                                type="text"
                                placeholder="قیمت"
                                aria-label="قیمت"
                                aria-describedby="input-group-price"
                              />
                              <InputGroup.Text id="input-group-price">
                                .00
                              </InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mt-2">
                              <InputGroup.Text>@</InputGroup.Text>
                              <FormInput
                                type="text"
                                placeholder="قیمت"
                                aria-label="مقدار (to the nearest dollar)"
                              />
                              <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <InputGroup>
                  <InputGroup.Text id="input-group-email">
                    @
                  </InputGroup.Text>
                  <FormInput
                    type="text"
                    placeholder="ایمیل"
                    aria-label="ایمیل"
                    aria-describedby="input-group-email"
                  />
                </InputGroup>
                <InputGroup className="mt-2">
                  <FormInput
                    type="text"
                    placeholder="قیمت"
                    aria-label="قیمت"
                    aria-describedby="input-group-price"
                  />
                  <InputGroup.Text id="input-group-price">
                    .00
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mt-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <FormInput
                    type="text"
                    placeholder="قیمت"
                    aria-label="مقدار (to the nearest dollar)"
                  />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        گروه‌های ورودی ابزار چند منظوره‌ای برای افزایش
                        کارایی و جذابیت بصری فرم‌های شما هستند. آیا شما
                        نیاز به اضافه کردن آیکون‌ها، برچسب‌ها یا متن‌های اضافی به
                        فیلدهای ورودی دارید، اجزاء `InputGroup` به شما امکان می‌دهد تا
                        گروه‌های ورودی متمایز و اطلاعاتی ایجاد کنید. با آزمایش
                        پیکربندی‌های مختلف، بهترین روش برای
                        ارائه عناصر فرم و بهبود
                        با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد.
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
                        وضعیت ورودی
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
                        وضعیت یا اعتبار ورودی‌های فرم به کاربران بازخورد بصری می‌دهند. این بخش به نحوه اعمال وضعیت‌های مختلف به ورودی‌های فرم با استفاده از کلاس‌های CSS می‌پردازد و نمونه‌هایی از وضعیت‌های مختلف ورودی را ارائه می‌دهد.
                        وضعیت یا اعتبار ورودی‌های فرم را پوشش می‌دهد. این بخش
                        نحوه اعمال وضعیت‌های مختلف به ورودی‌های فرم با استفاده از کلاس‌های CSS را مشخص می‌کند و
                        نمونه‌هایی از وضعیت‌های مختلف ورودی را ارائه می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <FormLabel htmlFor="input-state-1">
                                موفقیت ورودی
                              </FormLabel>
                              <FormInput
                                id="input-state-1"
                                type="text"
                                className="border-success"
                                placeholder="Input text"
                              />
                              <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
                                <div className="h-full col-span-3 rounded bg-success"></div>
                                <div className="h-full col-span-3 rounded bg-success"></div>
                                <div className="h-full col-span-3 rounded bg-success"></div>
                                <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                              </div>
                              <div className="mt-2 text-success">
                                رمز عبور قوی
                              </div>
                            </div>
                            <div className="mt-3">
                              <FormLabel htmlFor="input-state-2">
                                اخطار ورودی
                              </FormLabel>
                              <FormInput
                                id="input-state-2"
                                type="text"
                                className="border-warning"
                                placeholder="Input text"
                              />
                              <div className="mt-2 text-warning">
                                تلاش برای اتصال مجدد به سرور...
                              </div>
                            </div>
                            <div className="mt-3">
                              <FormLabel htmlFor="input-state-3">
                                خطا ورودی
                              </FormLabel>
                              <FormInput
                                id="input-state-3"
                                type="text"
                                className="border-danger"
                                placeholder="Input text"
                              />
                              <div className="mt-2 text-danger">
                                این فیلد اجباری است
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div>
                  <FormLabel htmlFor="input-state-1">
                    موفقیت ورودی
                  </FormLabel>
                  <FormInput
                    id="input-state-1"
                    type="text"
                    className="border-success"
                    placeholder="Input text"
                  />
                  <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
                    <div className="h-full col-span-3 rounded bg-success"></div>
                    <div className="h-full col-span-3 rounded bg-success"></div>
                    <div className="h-full col-span-3 rounded bg-success"></div>
                    <div className="h-full col-span-3 rounded bg-slate-100 dark:bg-darkmode-800"></div>
                  </div>
                  <div className="mt-2 text-success">رمز عبور قوی</div>
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="input-state-2">
                    اخطار ورودی
                  </FormLabel>
                  <FormInput
                    id="input-state-2"
                    type="text"
                    className="border-warning"
                    placeholder="Input text"
                  />
                  <div className="mt-2 text-warning">
                    تلاش برای اتصال مجدد به سرور...
                  </div>
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="input-state-3">خطا ورودی</FormLabel>
                  <FormInput
                    id="input-state-3"
                    type="text"
                    className="border-danger"
                    placeholder="Input text"
                  />
                  <div className="mt-2 text-danger">
                    این فیلد اجباری است
                  </div>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        وضعیت‌های ورودی برای ارائه بازخورد به کاربران و افزایش تجربه کاربری در فرم‌های شما بسیار حیاتی هستند. با استفاده از کلاس‌های وضعیت مناسب، می‌توانید وضعیت هر فیلد ورودی را به صورت بصری ارتباط برقرار کنید و این امر باعث می‌شود که کاربران بهتر بتوانند با فرم‌های شما تعامل کنند و آن‌ها را درک کنند. با آزمایش انواع استایل‌ها و وضعیت‌ها، طراحی و عملکرد برنامه وب خود را بهتر به هم پیوندید.
                        و بهبود تجربه کاربری در فرم‌های شما. با
                        اعمال کلاس‌های مناسب وضعیت، می‌توانید به صورت بصری
                        وضعیت هر فیلد ورودی را ارتباط برقرار کنید و آن را
                        برای کاربران آسان‌تر کنید تا با فرم‌های شما درک و تعامل کنند. با
                        آزمایش استایل‌ها و وضعیت‌های مختلف برای
                        تطبیق طراحی و عملکرد برنامه وب شما.
                        اپلیکیشن
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
                        انتخاب گزینه‌ها
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
                        اجازه می‌دهد تا اجزاء "انتخاب گزینه‌ها" را بسازید
                        عناصر انتخاب کشویی با گزینه‌های مختلف است. این
                        بخش به نحوه استفاده از اجزاء و نمونه‌های
                        گزینه‌های مختلف را پوشش می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-col items-center sm:flex-row">
                              <FormSelect
                                formSelectSize="lg"
                                className="sm:mt-2 sm:me-2"
                                aria-label=".form-select-lg example"
                              >
                                <option>کریس ایوانز</option>
                                <option>لیام نیسون</option>
                                <option>دنیل کریگ</option>
                              </FormSelect>
                              <FormSelect
                                className="mt-2 sm:me-2"
                                aria-label="پیش‌فرض select example"
                              >
                                <option>کریس ایوانز</option>
                                <option>لیام نیسون</option>
                                <option>دنیل کریگ</option>
                              </FormSelect>
                              <FormSelect
                                formSelectSize="sm"
                                className="mt-2"
                                aria-label=".form-select-sm example"
                              >
                                <option>کریس ایوانز</option>
                                <option>لیام نیسون</option>
                                <option>دنیل کریگ</option>
                              </FormSelect>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-col items-center sm:flex-row">
                  <FormSelect
                    formSelectSize="lg"
                    className="sm:mt-2 sm:me-2"
                    aria-label=".form-select-lg example"
                  >
                    <option>کریس ایوانز</option>
                    <option>لیام نیسون</option>
                    <option>دنیل کریگ</option>
                  </FormSelect>
                  <FormSelect
                    className="mt-2 sm:me-2"
                    aria-label="پیش‌فرض select example"
                  >
                    <option>کریس ایوانز</option>
                    <option>لیام نیسون</option>
                    <option>دنیل کریگ</option>
                  </FormSelect>
                  <FormSelect
                    formSelectSize="sm"
                    className="mt-2"
                    aria-label=".form-select-sm example"
                  >
                    <option>کریس ایوانز</option>
                    <option>لیام نیسون</option>
                    <option>دنیل کریگ</option>
                  </FormSelect>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزاء "انتخاب گزینه‌ها" ابزار چند منظوره‌ای برای
                        ایجاد عناصر انتخاب کشویی با طیف گسترده‌ای از
                        گزینه‌ها هستند. شما می‌توانید از آن برای ساخت انواع فرم‌ها و رابط‌های کاربری استفاده کنید که نیازمند انتخاب کاربر از
                        گزینه‌های تعریف شده‌اند. گزینه‌ها و استایل‌ها را بر اساس نیازهای پروژه‌تان سفارشی کنید و تجربه کاربری را
                        هموار و کارآمد کنید.
                        فرم‌ها را ساده می‌کند، باعث می‌شود به راحتی اطلاعات کاربر را به صورت ساختارمند جمع‌آوری کنید.
                        به طور صاف و کارآمد.
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
                        فرم عمودی
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
                        اجزاء "فرم عمودی" به شما امکان می‌دهد تا فرم‌هایی را ایجاد کنید
                        با یک چیدمان عمودی، جایی که فیلدها و برچسب‌های فرم
                        روی یکدیگر قرار می‌گیرند. این بخش به نحوه
                        استفاده از اجزاء و نمونه‌های فرم‌های عمودی را پوشش می‌دهد.
                        forms.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <FormLabel htmlFor="vertical-form-1">
                                ایمیل
                              </FormLabel>
                              <FormInput
                                id="vertical-form-1"
                                type="text"
                                placeholder="example@gmail.com"
                              />
                            </div>
                            <div className="mt-3">
                              <FormLabel htmlFor="vertical-form-2">
                                رمز عبور
                              </FormLabel>
                              <FormInput
                                id="vertical-form-2"
                                type="text"
                                placeholder="secret"
                              />
                            </div>
                            <FormCheck className="mt-5">
                              <FormCheck.Input
                                id="vertical-form-3"
                                type="checkbox"
                                value=""
                              />
                              <FormCheck.Label htmlFor="vertical-form-3">
                                مرا به خاطر بسپار
                              </FormCheck.Label>
                            </FormCheck>
                            <Button variant="primary" className="mt-5">
                              ورود
                            </Button>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div>
                  <FormLabel htmlFor="vertical-form-1">ایمیل</FormLabel>
                  <FormInput
                    id="vertical-form-1"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="mt-3">
                  <FormLabel htmlFor="vertical-form-2">رمز عبور</FormLabel>
                  <FormInput
                    id="vertical-form-2"
                    type="text"
                    placeholder="secret"
                  />
                </div>
                <FormCheck className="mt-5">
                  <FormCheck.Input
                    id="vertical-form-3"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="vertical-form-3">
                    مرا به خاطر بسپار
                  </FormCheck.Label>
                </FormCheck>
                <Button variant="primary" className="mt-5">
                  ورود
                </Button>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزاء "فرم عمودی" برای ایجاد
                        فرم‌هایی با چیدمانی ساده و روشن، ایده‌آل هستند و
                        یک تجربه کاربری بی‌درز را تضمین می‌کنند. آن را بر اساس
                        نیازهای پروژه‌تان سفارشی کنید، مانند اضافه کردن اعتبارسنجی، مدیریت خطا و
                        استایل کردن. این اجزاء فرایند ایجاد فرم‌ها را ساده‌تر
                        می‌کند و امکان جمع‌آوری اطلاعات کاربر را به راحتی در یک
                        ساختار فراهم می‌کند.
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
                        فرم افقی
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
                        اجزاء "فرم افقی" به شما امکان می‌دهد تا فرم‌هایی را ایجاد کنید
                        با یک چیدمان افقی، جایی که برچسب‌های فرم
                        به سمت چپ فیلدهای فرم متمایز می‌شوند. این بخش
                        نحوه استفاده از اجزاء و نمونه‌های
                        فرم‌های افقی را پوشش می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <FormInline>
                              <FormLabel
                                htmlFor="horizontal-form-1"
                                className="sm:w-20"
                              >
                                ایمیل
                              </FormLabel>
                              <FormInput
                                id="horizontal-form-1"
                                type="text"
                                placeholder="example@gmail.com"
                              />
                            </FormInline>
                            <FormInline className="mt-5">
                              <FormLabel
                                htmlFor="horizontal-form-2"
                                className="sm:w-20"
                              >
                                رمز عبور
                              </FormLabel>
                              <FormInput
                                id="horizontal-form-2"
                                type="password"
                                placeholder="secret"
                              />
                            </FormInline>
                            <FormCheck className="mt-5 sm:ms-20 sm:ps-5">
                              <FormCheck.Input
                                id="horizontal-form-3"
                                type="checkbox"
                                value=""
                              />
                              <FormCheck.Label htmlFor="horizontal-form-3">
                                مرا به خاطر بسپار
                              </FormCheck.Label>
                            </FormCheck>
                            <div className="mt-5 sm:ms-20 sm:ps-5">
                              <Button variant="primary">ورود</Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <FormInline>
                  <FormLabel
                    htmlFor="horizontal-form-1"
                    className="sm:w-20"
                  >
                    ایمیل
                  </FormLabel>
                  <FormInput
                    id="horizontal-form-1"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </FormInline>
                <FormInline className="mt-5">
                  <FormLabel
                    htmlFor="horizontal-form-2"
                    className="sm:w-20"
                  >
                    رمز عبور
                  </FormLabel>
                  <FormInput
                    id="horizontal-form-2"
                    type="password"
                    placeholder="secret"
                  />
                </FormInline>
                <FormCheck className="mt-5 sm:ms-20 sm:ps-5">
                  <FormCheck.Input
                    id="horizontal-form-3"
                    type="checkbox"
                    value=""
                  />
                  <FormCheck.Label htmlFor="horizontal-form-3">
                    مرا به خاطر بسپار
                  </FormCheck.Label>
                </FormCheck>
                <div className="mt-5 sm:ms-20 sm:ps-5">
                  <Button variant="primary">ورود</Button>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزاء "فرم افقی" برای ایجاد
                        فرم‌هایی با چیدمان افقی سنتی مفید هستند، جایی که برچسب‌ها
                        به سمت چپ فیلدهای ورودی متمایز می‌شوند. آن را سفارشی کنید
                        بر اساس نیازهای پروژه‌تان، مانند اضافه کردن
                        اعتبارسنجی، مدیریت خطا و
                        استایل. این اجزاء راهی روشن و منظم برای جمع‌آوری ورودی کاربر ارائه می‌دهد
                        به صورت ساختارمند در حالی که یک چیدمان فرم آشنا را حفظ می‌کند.
                        layout.
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
                        فرم درون‌خطی
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
                        اجزاء "فرم درون‌خطی" به شما امکان می‌دهد تا فرم‌هایی را ایجاد کنید
                        با عناصر درون‌خطی، جایی که فیلدها و برچسب‌های فرم
                        به صورت افقی در یک خط ظاهر می‌شوند. این بخش
                        نحوه استفاده از اجزاء و نمونه‌های
                        فرم‌های درون‌خطی را پوشش می‌دهد.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="grid grid-cols-12 gap-2">
                              <FormInput
                                type="text"
                                className="col-span-4"
                                placeholder="Input inline 1"
                                aria-label="default input inline 1"
                              />
                              <FormInput
                                type="text"
                                className="col-span-4"
                                placeholder="Input inline 2"
                                aria-label="default input inline 2"
                              />
                              <FormInput
                                type="text"
                                className="col-span-4"
                                placeholder="Input inline 3"
                                aria-label="default input inline 3"
                              />
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="grid grid-cols-12 gap-2">
                  <FormInput
                    type="text"
                    className="col-span-4"
                    placeholder="Input inline 1"
                    aria-label="default input inline 1"
                  />
                  <FormInput
                    type="text"
                    className="col-span-4"
                    placeholder="Input inline 2"
                    aria-label="default input inline 2"
                  />
                  <FormInput
                    type="text"
                    className="col-span-4"
                    placeholder="Input inline 3"
                    aria-label="default input inline 3"
                  />
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزاء "فرم درون‌خطی" برای ایجاد
                        فرم‌های فشرده و کارآمد از نظر فضایی کاربردی هستند جایی که فیلدها و
                        برچسب‌ها در یک خط ظاهر می‌شوند. آن را سفارشی کنید
                        بر اساس نیازهای پروژه‌تان، مانند اضافه کردن
                        مدیریت خطا و استایل. این اجزاء یک راه ساده و مختصر برای جمع‌آوری ورودی کاربر به صورت درون‌خطی فراهم می‌کنند، که برای نوارهای جستجو، فیلترها و سایر اجزاء فشرده فرم مناسب است.
                        روش تمیز و مختصری برای جمع‌آوری ورودی کاربر به صورت درون‌خطی فراهم می‌کند،
                        ایده‌آل برای نوارهای جستجو، فیلترها و سایر
                        اجزاء فشرده فرم.
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
                        چک باکس و سوییچ
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
                        اجزاء "چک باکس و سوییچ" یک راه برای
                        ایجاد چک باکس‌ها و سوییچ‌های تعاملی که کاربران می‌توانند روشن و خاموش کنند فراهم می‌کنند. این بخش
                        نحوه استفاده از این اجزاء را پوشش می‌دهد و نمونه‌های چک باکس و سوییچ‌ها را ارائه می‌دهد.
                        این اجزاء را ارائه می‌دهد و نمونه‌های چک باکس و
                        switches.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <label>چک باکس عمودی</label>
                              <FormCheck className="mt-2">
                                <FormCheck.Input
                                  id="checkbox-switch-1"
                                  type="checkbox"
                                  value=""
                                />
                                <FormCheck.Label htmlFor="checkbox-switch-1">
                                  کریس ایوانز
                                </FormCheck.Label>
                              </FormCheck>
                              <FormCheck className="mt-2">
                                <FormCheck.Input
                                  id="checkbox-switch-2"
                                  type="checkbox"
                                  value=""
                                />
                                <FormCheck.Label htmlFor="checkbox-switch-2">
                                  لیام نیسون
                                </FormCheck.Label>
                              </FormCheck>
                              <FormCheck className="mt-2">
                                <FormCheck.Input
                                  id="checkbox-switch-3"
                                  type="checkbox"
                                  value=""
                                />
                                <FormCheck.Label htmlFor="checkbox-switch-3">
                                  دنیل کریگ
                                </FormCheck.Label>
                              </FormCheck>
                            </div>
                            <div className="mt-3">
                              <label>چک باکس افقی</label>
                              <div className="flex flex-col mt-2 sm:flex-row">
                                <FormCheck className="me-2">
                                  <FormCheck.Input
                                    id="checkbox-switch-4"
                                    type="checkbox"
                                    value=""
                                  />
                                  <FormCheck.Label htmlFor="checkbox-switch-4">
                                    کریس ایوانز
                                  </FormCheck.Label>
                                </FormCheck>
                                <FormCheck className="mt-2 me-2 sm:mt-0">
                                  <FormCheck.Input
                                    id="checkbox-switch-5"
                                    type="checkbox"
                                    value=""
                                  />
                                  <FormCheck.Label htmlFor="checkbox-switch-5">
                                    لیام نیسون
                                  </FormCheck.Label>
                                </FormCheck>
                                <FormCheck className="mt-2 me-2 sm:mt-0">
                                  <FormCheck.Input
                                    id="checkbox-switch-6"
                                    type="checkbox"
                                    value=""
                                  />
                                  <FormCheck.Label htmlFor="checkbox-switch-6">
                                    دنیل کریگ
                                  </FormCheck.Label>
                                </FormCheck>
                              </div>
                            </div>
                            <div className="mt-3">
                              <label>سوییچ</label>
                              <div className="mt-2">
                                <FormSwitch>
                                  <FormSwitch.Input
                                    id="checkbox-switch-7"
                                    type="checkbox"
                                  />
                                  <FormSwitch.Label htmlFor="checkbox-switch-7">
                                    ورودی پیش‌فرض چک باکس سوییچ
                                  </FormSwitch.Label>
                                </FormSwitch>
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div>
                  <label>چک باکس عمودی</label>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="checkbox-switch-1"
                      type="checkbox"
                      value=""
                    />
                    <FormCheck.Label htmlFor="checkbox-switch-1">
                      کریس ایوانز
                    </FormCheck.Label>
                  </FormCheck>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="checkbox-switch-2"
                      type="checkbox"
                      value=""
                    />
                    <FormCheck.Label htmlFor="checkbox-switch-2">
                      لیام نیسون
                    </FormCheck.Label>
                  </FormCheck>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="checkbox-switch-3"
                      type="checkbox"
                      value=""
                    />
                    <FormCheck.Label htmlFor="checkbox-switch-3">
                      دنیل کریگ
                    </FormCheck.Label>
                  </FormCheck>
                </div>
                <div className="mt-3">
                  <label>چک باکس افقی</label>
                  <div className="flex flex-col mt-2 sm:flex-row">
                    <FormCheck className="me-2">
                      <FormCheck.Input
                        id="checkbox-switch-4"
                        type="checkbox"
                        value=""
                      />
                      <FormCheck.Label htmlFor="checkbox-switch-4">
                        کریس ایوانز
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 me-2 sm:mt-0">
                      <FormCheck.Input
                        id="checkbox-switch-5"
                        type="checkbox"
                        value=""
                      />
                      <FormCheck.Label htmlFor="checkbox-switch-5">
                        لیام نیسون
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 me-2 sm:mt-0">
                      <FormCheck.Input
                        id="checkbox-switch-6"
                        type="checkbox"
                        value=""
                      />
                      <FormCheck.Label htmlFor="checkbox-switch-6">
                        دنیل کریگ
                      </FormCheck.Label>
                    </FormCheck>
                  </div>
                </div>
                <div className="mt-3">
                  <label>سوییچ</label>
                  <div className="mt-2">
                    <FormSwitch>
                      <FormSwitch.Input
                        id="checkbox-switch-7"
                        type="checkbox"
                      />
                      <FormSwitch.Label htmlFor="checkbox-switch-7">
                        ورودی پیش‌فرض چک باکس سوییچ
                      </FormSwitch.Label>
                    </FormSwitch>
                  </div>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزاء "چک باکس و سوییچ" یک راه آسان برای
                        ایجاد عناصر تعاملی برای ورودی کاربر فراهم می‌کنند. آن‌ها را سفارشی کنید
                        بر اساس نیازهای پروژه‌تان، و از رویدادها برای پاسخ به تعاملات کاربر استفاده کنید.
                        این اجزاء معمولاً برای تنظیمات، ترجیحات و فرم‌هایی که کاربران نیاز به انجام انتخاب‌های دودویی دارند، استفاده می‌شوند.
                        اجزاء معمولاً برای تنظیمات و ترجیحات استفاده می‌شوند.
                        و فرم‌هایی که کاربران باید انتخاب دودویی انجام دهند.
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
                      <div className="text-[0.94rem] font-medium">رادیو</div>
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
                        اجزاء "رادیو" یک عنصر ورودی اساسی است که به کاربران امکان انتخاب یک گزینه از فهرست گزینه‌ها را می‌دهد.
                        که برای انتخاب یک گزینه از بین چند گزینه مورد استفاده قرار می‌گیرد.
                        این مورد عموماً در فرم‌ها و
                        پرسشنامه‌ها استفاده می‌شود که کاربران باید یک گزینه را انتخاب کنند
                        از بین چند گزینه.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <label>دکمه رادیویی عمودی</label>
                              <FormCheck className="mt-2">
                                <FormCheck.Input
                                  id="radio-switch-1"
                                  type="radio"
                                  name="vertical_radio_button"
                                  value="vertical-radio-chris-evans"
                                />
                                <FormCheck.Label htmlFor="radio-switch-1">
                                  کریس ایوانز
                                </FormCheck.Label>
                              </FormCheck>
                              <FormCheck className="mt-2">
                                <FormCheck.Input
                                  id="radio-switch-2"
                                  type="radio"
                                  name="vertical_radio_button"
                                  value="vertical-radio-liam-neeson"
                                />
                                <FormCheck.Label htmlFor="radio-switch-2">
                                  لیام نیسون
                                </FormCheck.Label>
                              </FormCheck>
                              <FormCheck className="mt-2">
                                <FormCheck.Input
                                  id="radio-switch-3"
                                  type="radio"
                                  name="vertical_radio_button"
                                  value="vertical-radio-daniel-craig"
                                />
                                <FormCheck.Label htmlFor="radio-switch-3">
                                  دنیل کریگ
                                </FormCheck.Label>
                              </FormCheck>
                            </div>
                            <div className="mt-3">
                              <label>دکمه رادیویی افقی</label>
                              <div className="flex flex-col mt-2 sm:flex-row">
                                <FormCheck className="me-2">
                                  <FormCheck.Input
                                    id="radio-switch-4"
                                    type="radio"
                                    name="horizontal_radio_button"
                                    value="horizontal-radio-chris-evans"
                                  />
                                  <FormCheck.Label htmlFor="radio-switch-4">
                                    کریس ایوانز
                                  </FormCheck.Label>
                                </FormCheck>
                                <FormCheck className="mt-2 me-2 sm:mt-0">
                                  <FormCheck.Input
                                    id="radio-switch-5"
                                    type="radio"
                                    name="horizontal_radio_button"
                                    value="horizontal-radio-liam-neeson"
                                  />
                                  <FormCheck.Label htmlFor="radio-switch-5">
                                    لیام نیسون
                                  </FormCheck.Label>
                                </FormCheck>
                                <FormCheck className="mt-2 me-2 sm:mt-0">
                                  <FormCheck.Input
                                    id="radio-switch-6"
                                    type="radio"
                                    name="horizontal_radio_button"
                                    value="horizontal-radio-daniel-craig"
                                  />
                                  <FormCheck.Label htmlFor="radio-switch-6">
                                    دنیل کریگ
                                  </FormCheck.Label>
                                </FormCheck>
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div>
                  <label>دکمه رادیویی عمودی</label>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="radio-switch-1"
                      type="radio"
                      name="vertical_radio_button"
                      value="vertical-radio-chris-evans"
                    />
                    <FormCheck.Label htmlFor="radio-switch-1">
                      کریس ایوانز
                    </FormCheck.Label>
                  </FormCheck>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="radio-switch-2"
                      type="radio"
                      name="vertical_radio_button"
                      value="vertical-radio-liam-neeson"
                    />
                    <FormCheck.Label htmlFor="radio-switch-2">
                      لیام نیسون
                    </FormCheck.Label>
                  </FormCheck>
                  <FormCheck className="mt-2">
                    <FormCheck.Input
                      id="radio-switch-3"
                      type="radio"
                      name="vertical_radio_button"
                      value="vertical-radio-daniel-craig"
                    />
                    <FormCheck.Label htmlFor="radio-switch-3">
                      دنیل کریگ
                    </FormCheck.Label>
                  </FormCheck>
                </div>
                <div className="mt-3">
                  <label>دکمه رادیویی افقی</label>
                  <div className="flex flex-col mt-2 sm:flex-row">
                    <FormCheck className="me-2">
                      <FormCheck.Input
                        id="radio-switch-4"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-radio-chris-evans"
                      />
                      <FormCheck.Label htmlFor="radio-switch-4">
                        کریس ایوانز
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 me-2 sm:mt-0">
                      <FormCheck.Input
                        id="radio-switch-5"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-radio-liam-neeson"
                      />
                      <FormCheck.Label htmlFor="radio-switch-5">
                        لیام نیسون
                      </FormCheck.Label>
                    </FormCheck>
                    <FormCheck className="mt-2 me-2 sm:mt-0">
                      <FormCheck.Input
                        id="radio-switch-6"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-radio-daniel-craig"
                      />
                      <FormCheck.Label htmlFor="radio-switch-6">
                        دنیل کریگ
                      </FormCheck.Label>
                    </FormCheck>
                  </div>
                </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        اجزاء "رادیو" چندمنظوره است و می‌تواند برای ایجاد گروه‌های دکمه‌های رادیویی عمودی و افقی استفاده شود.
                        این دکمه‌های رادیویی معمولاً در فرم‌ها، نظرسنجی‌ها و هر سناریو که نیاز به انتخاب‌های انحصاری دارد، استفاده می‌شوند.
                        این دکمه‌های رادیویی معمولاً در فرم‌ها، نظرسنجی‌ها،
                        و هر سناریویی که نیاز به انتخاب‌های انحصاری دارد، استفاده می‌شوند.
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
                    <div className="-mt-px">FormCheck</div>
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
                    <div className="-mt-px">FormCheck.Label</div>
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
                    <div className="-mt-px">FormCheck.Input</div>
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
                    <div className="-mt-px">FormInput</div>
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
                          <Table.Td>`formInputSize`</Table.Td>
                          <Table.Td>`sm`, `lg`</Table.Td>
                          <Table.Td>
                            اندازه یا ابعاد میدان ورودی را مشخص می‌کند
                            در یک فرم. از این ویژگی برای کنترل ظاهری استفاده کنید
                            ظاهر میدان ورودی، با گزینه‌هایی مانند
                            'کوچک'، 'متوسط' یا 'بزرگ' برای تطابق با طراحی شما و نیازهای طرح
                            و طرح."
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`rounded`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            آیا گوشه‌های گرد به عنصر متن‌گذاری اعمال شود
                            element
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">FormTextarea</div>
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
                          <Table.Td>`formTextareaSize`</Table.Td>
                          <Table.Td>`sm`, `lg`</Table.Td>
                          <Table.Td>
                            اندازه یا ابعاد میدان ورودی را مشخص می‌کند
                            در یک فرم. از این ویژگی برای کنترل ظاهری استفاده کنید
                            ظاهر میدان ورودی، با گزینه‌هایی مانند
                            'کوچک'، 'متوسط' یا 'بزرگ' برای تطابق با طراحی شما و نیازهای طرح
                            و نیازهای طرح
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`rounded`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            آیا گوشه‌های گرد به عنصر متن‌گذاری اعمال شود
                            element
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">FormHelp</div>
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
                    <div className="-mt-px">FormInline</div>
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
                    <div className="-mt-px">FormLabel</div>
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
                    <div className="-mt-px">FormSelect</div>
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
                          <Table.Td>`formSelectSize`</Table.Td>
                          <Table.Td>`sm`, `lg`</Table.Td>
                          <Table.Td>
                            اندازه یا ابعاد عنصر انتخاب را مشخص می‌کند
                            در یک فرم. از این ویژگی برای استفاده سفارشی از نمایش بصری عنصر انتخابی استفاده کنید
                            ، گزینه‌هایی مانند
                            'کوچک'، 'متوسط' یا 'بزرگ' برای هماهنگی با طراحی و نیازهای طراحی شما
                            پیشنهاد می‌کند.
                            preferences
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute start-0 px-3 ms-4 -mt-2.5 font-medium bg-white text-slate-500">
                    <div className="-mt-px">FormSwitch</div>
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
                    <div className="-mt-px">FormSwitch.Label</div>
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
                    <div className="-mt-px">FormSwitch.Input</div>
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
                    <div className="-mt-px">InputGroup</div>
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
                    <div className="-mt-px">InputGroup.Text</div>
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
                    Input
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    اندازه‌گیری ورودی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    گروه‌های ورودی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    وضعیت ورودی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    انتخاب گزینه‌ها
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    فرم عمودی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    فرم افقی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    فرم درون‌خطی
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    چک باکس و سوییچ
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:start-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    رادیو
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70",
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
