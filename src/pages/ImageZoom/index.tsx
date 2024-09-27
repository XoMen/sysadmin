import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";
import ImageZoom from "@/components/Base/ImageZoom";
import products from "@/fakers/products";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            بزرگنمایی تصویر
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            تجربه کاربر را با اجازه به افزایش بزرگنمایی و کاوش ارتقا دهید
            جزئیات را به آسانی
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
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
                        قابلیت بزرگنمایی تصویر به کاربران امکان تعاملی
                        بزرگنمایی و بازرسی تصاویر با بزرگنمایی و حرکت دوربین
                        این ویژگی به خصوص برای
                        نمایش تصاویر با رزولوشن بالا، محصولات یا جزئیات
                        محتوای بصری. این بخش نشان می دهد چگونه
                        بزرگنمایی تصویر را در برنامه وب خود پیاده سازی کنید
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute start-0 px-3 ms-4 -mt-2 text-xs uppercase bg-white text-slate-500">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="leading-relaxed">
                              <p className="mb-5">
                                صندوق اعتماد چیای سیتان، گرگ لومو لترپرس
                                بوشویک قبل از آنکه خالی شوند. کارلس کوگی
                                فیکسی، خرطوم مرطوب تویی تونکس خودکار تایپی
                                سنتر لوکاوور چیپس کل کل کله‌ای گیاهی ارگانیک.
                                مگینگ پاگ گرگ شوردیچ خودکار تایپی
                                اسکیت‌برد. آیفون مک‌سوینی چیلویو، غذا
                                کامیون مستقیم معامله مخل خمیری آهنی مخلوط
                                کازبی سویتر قهوه سرخ کافی کاهویی. ارگانیک
                                حقوق دوچرخه را مخل، کیف پیامبر مومیایی‌شده
                                بیتر مد را با مومیایی شیک نان آهنی.
                                بیرون از صنعتی را کرافت بیرون از صنعتی، کینوا
                                قصابی پایدار مارفا پارک صدا تری
                                فلنل معتبر گلوتن رایگان بازگشتی ریچاردسون میلکشیک
                                بانجو. سالویا ۹۰ کنسرت هنری بلو باتل، پی‌بی‌آر و بی
                                کاردیگان ۸ بیت.
                              </p>
                              <p className="mb-5">
                                احمقانه مد خنجر، آرایشگاه مستقیم
                                پاک کردن بلو باتل اثباتی بیتر واقعی
                                فلنل بیتر آزادین رژیم غذایی پالئو لترپرس آه چوپ
                                گرگ هنری پی بی آر و بی جشن هنری زیبایی مه عادت
                                باز پیش از اینکه خالی شوند عمیق زیبا
                                پی بی آر و بی کرافت بیرون از صنعتی پس از آهنی سینت
                                اسکیت بورد معده ریختن بر روی. مداد تونکس کوکی پاگ
                                گاستروپاب آرامش گرگ قومی آینده عجیب و غریب ویروسی
                                پاک کردن اصلی اسکیت بورد بانجو. چوب فرنگی
                                سنتر کورن هول، هر چیزی سختی از قبیل قومی
                                بانجو + ۱ گاستروپاب لباس وینیل آمریکایی
                                اسکیت بورد شوردیچ سیتان. بلو باتل
                                استایل آرت پارتی کفیاه آستین هلویتیا
                                قومی فیکسی، ریشه کلاسیک معامله مستقیم آه
                                سنتر تامبل آماده اصیل طرح شطرنجی
                                تخمیرشده هشتگ بیودیزل.
                              </p>
                              <div className="w-full h-64 my-5 image-fit">
                                <ImageZoom
                                  alt="تیل وایز - قالب داشبورد مدیریتی"
                                  src={
                                    products.fakeProducts()[0].images[0].path
                                  }
                                  className="w-full rounded-md"
                                />
                              </div>
                              <p className="mb-5">
                                گربه های طوفانی آزادین تروفو، چهار لوکو تویی
                                آستین سنتر لوفای سطح پایین سیتان زندگی با دنیای داون
                                کینوا مداد. قصاب اخلاقی تامبلر،
                                پاپ آپ دی وای آیفون اقوامی پی‌بی‌آر آنارشا
                                معامله مستقیم تونکس حقوق دوچرخه گلوتن رایگان
                                فلکسیتاری یکطرفه. هر چیزی که می‌نوشد
                                سرکه پی بی آر و بی بوشویک جنتریفای کلیشه
                                بانجو ارتقا سپیسیانه اسکوید وس آندرسون.
                                به‌نظر می‌رسد که کرکس مد لباس شما را برنده کرده است
                                از حقوق دوچرخه آنها نشنیده‌اید. کیف ارگانیک
                                عکس‌های اخلاقی از خود گاستروپاب، پی بی آر
                                حقوق دوچرخه‌ای با دستمال انگشت آغشته شده.
                              </p>
                              <p className="mb-5">
                                آه پورتلند آستین، دستگاهی که چاپ کرده
                                ماشین‌نویسی که عکس‌های چاپ کرده بر روی پارچه‌های متناسب
                                ولف آلبوم موزیک شوردیچ، کیف دستی
                                پروژه ویژه عکس آینده عجیب و غریب،
                                عکس‌های خود را که عکس‌های ۹۰ است، تمیز کرده‌اید
                                عمیق ترین سطح تخمیرشده، اصیل اتسی
                                شوردیچ واقعی لوازم زینتی عکاسی تلفن همراه
                                بانجو ارتقا حقوق دوچرخه قصاب آبی
                                بطری، در واقع سمیوتیک‌های سرخورده بنکسی
                                میکس‌تیپ آستین، شکم چرخ‌پیچ‌دار ایستای پس از آهنگ‌سازی. آمریکایی
                                لباس‌های موسسه گاستروپاب هشتگ، مدیریت مک‌اسوئینی
                                تمیز کردن اشغال زندگی بالا تلخ عابرین بعدی
                                سطح حقوق دوچرخه. گرگ چیا تری
                                ریچاردسون، پاپ‌آپ چاپ پارچه‌ای کیتچ افسرده. قصاب +1
                                کارل، سلفی‌های استایل بلو بطری معتاد کننده
                              </p>
                              <p className="mb-5">
                                کفیه کامیون غذا لگنگ چاپی ارگانیک
                                آیفون چهار لوکو به آسانی تصاحب شد، وس
                                آندرسون خمیری پس از آهنگ‌سازی. نوترا رترو فیکسی
                                گاستروپاب +1، سمیوتیک‌های زندگی بالا. وینیل
                                کارخانه اتسی آزادانه فلکسیتارین جینی کلیشه
                                شلیتز عابرین پرتابل اسکیت‌بورد غیرمرتب
                                ایرانی محلی XOXO ایرانی. وس اندرسون
                                کیف پیام‌رسانی مک‌اسوئینی، میکس‌تیپ XOXO
                                کرب اتومبیل کورن‌هول استتیک مارفا بنجو
                                تاندرکت‌های تلخ. بنجو دنیم خام ماشین تحریر
                                تامبل خمیری، قهوه‌ای منحصر به فرد از زندگی بالا
                                ایمان تامبل ۹۰، ریچاردسون را تصاحب کرد
                                دنیمی توفو، چوب مد، فتوبوته بانمی
                                صندوق اعتماد محلی هلوتیکا، چاقوی مد
                                سلواژ اصیل شوردیچ سلفی‌های استایل
                                استامتاون +1
                              </p>
                              <div className="float-start w-3/5 h-64 me-6 image-fit">
                                <ImageZoom
                                  alt="تیل وایز - قالب داشبورد مدیریتی"
                                  src={
                                    products.fakeProducts()[0].images[0].path
                                  }
                                  className="w-full rounded-md"
                                />
                              </div>
                              <p className="mb-5">
                                سنستر کتانی کرب اتومبیل کورن‌هول کنید، صندوق اعتماد
                                بیودیزل افسانه‌ای حقوق دوچرخه کورن‌هول. شهرکسازی
                                کیف پیام‌رسانی تروفو توزیل شده مهمانی روی بام گوشت خوک
                                پاها لگنگ‌ها، پارچه‌های جینی کوتاه عکاسی. آستین
                                PBR پارچه‌ای کرب اتومبیلی آماده. موزاک اکو پارک
                                ریختن، عابرین برای ارزیابی کننده محلی هر چیزی
                                دستیار دستگاه تحریر ویژه چهار لوکو. محلی
                                تصاحب نوترا پیچ‌فورک مک‌اسوئینی، عابرین
                                سبک انگشت. در واقع نوشیدنی نامتقارن
                                سرکه ناهار بیودیزل. قبل از اینکه فروش می‌شدند
                                کارخانه‌ای که مستقل آماده بودند بیرون از پورتلند
                                گاستروپاب ماهی‌کش آستین، مهمانی روی بام تاندرکت‌ها
                                کتانی بزغاله بوشویک
                              </p>
                              <p className="mb-5">
                                حرفه‌ای دستگاه تحریر، حقوق دوچرخه
                                کارل عابرین پارچه‌ای. بیودیزل
                                واقعاً از مزرعه به میز، محلی کفیه خیلی
                                پوشش چین‌زنانه غلط‌باز وسیله روی بوشویک
                                سری‌راچا لباس آمریکایی بروکلین، کره مصنوعی
                                وب‌لاگ استامتاون بوشویک +1 هشتگ ویژه. گرگ
                                عمامی کارل مارفا، کامیون غذای ۹۰ مربوط به کاسبی
                                پلنگی. کیف کمری تلاش برای بالا آمدن گیتار پاپ
                                آماده، تمیز کردن مهارت‌های چهار لوکو
                                پلاروید سالویا. عکاسی عکاسی موزاک
                                کتانی، کارل سنستر، کرب اتومبیل کنید
                                کاردیگان تله‌گرا. سبک نامتقارن
                                لگنگ‌ها، بیودیزل تونکس، شیک بدنسازی قبیله‌ای
                                تمیز کردن مهارت‌های غذایی رایگان
                              </p>
                              <p>
                                دنیم خام بنکسی شیبی شیک، سالویا ۸ بیت
                                ناروال مد چاقو. ویلیامزبورگ اخلاقی چهار
                                لوکو، چیا چیپس کله لی کارخانه‌ای شوردیچ
                                کیف پیام‌رسانی، اس وگ آیفون پیچ‌فورک. ویروسی پی‌بی‌آر و بی
                                قهوه منشأ تکیه کینوا آماده، اخلاقی
                                چیلویو نوشیدنی سرکه‌خوری بدون گلوتن وس
                                اندرسون کیچ تامبل سینت واقعاً تلخ
                                قصاب مک‌اسوئینی برای جستجو کردن کوگی
                                ابروی انگشتی. خود انتخابی قصاب
                                شوردیچ، کارل ریش پارچه‌ای متخلخل دست خودتان. سگ بزغاله
                                آماده خودتان پارچه‌ای، رترو، سالویا وینیل آستین
                                تمیز کردن مهارت‌های عمیق دوچرخه حقوق برگزیده
                                پارچه‌ای تری ریچاردسون از روی mlkshk. اعتماد
                                سعی برای جمع‌آوری صندوق بان‌می بروکلین، ۹۰، کوگی اتسی
                                سالویا YOLO
                              </p>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="leading-relaxed">
                <p className="mb-5">
                  صندوق اعتماد سیتان چیا، گرگ لومو، تحریر بوشویک قبل از
                  آن‌ها خارج شده‌اند. کارل کوگی فیکسی، کیک ماهی ارمغانی تانکس آماده
                  تایپ‌ر اعتباری سنستر محلی کینوا چیپس گیاه‌خوار ارگانیک
                  مگینگ‌های سگ بزغاله شوردیچ تایپ‌ر اسکیت‌بورد
                  McSweeney\'s iPhone chillwave, food truck direct trade disrupt
                  پارچه ابری تلخی، کاردیگان کوزبی یک زمینه قهوه
                  تخریب حقوق دوچرخه ارگانیک، کیف پیام‌رسانی خالص پارچه‌ای
                  بیر مد میانبر بی‌سیم تلخ. آماده‌بازی کارگری آماده
                  بیر، کینوا، قابلیت پذیری قصاب مارفا اکو پارک تری
                  ریچاردسون پارچه‌ای خالص گلوتن، رترو اعتباری mlkshk بنجو. سالویا
                  90\'s art party Blue Bottle, PBR&B کاردیگان ۸ بیت.
                </p>
                <p className="mb-5">
                  استایل طنز مگینگ‌ها، چاقوی مد، تمیز کردن مهارت‌های آبی
                  بطری استامتاون تلخی طبیعی پارچه‌ای خالص آزادانه پالئو
                  تحریر آخرین سراچا. گرگ PBR&B زیبایی مهمانی هنری ملال‌آور
                  تکراری. پیش از آن‌که بیشتر بفروشند v عمیق، زیبایی PBR&B
                  بیر معمولی موجود بعد از آهنگ‌سازی سینت، گوشت خوک اسکیت‌بورد
                  ریختن، تونکس موشکی، سگ بزغاله اتسی، گاستروپاب انوی، گرگ قبیله‌ای عجیب
                  آینده ویروسی تمیز کردن مهارت‌های اسکیت‌بورد بنجو. پیچ‌فورک
                  سنستر کورن‌هول، هر چیزی که تلاش کند، بانجو قومی +۱
                  گاستروپاب، پوشاک آمریکایی وینیل اسکیت‌بورد شوردیچ سیتان
                  بطری آب آبی کفیه آستین هلوتیکا مهمانی هنری. پورتلند
                  قومی، فیکسی، ریشه بازگشتی، معامله مستقیم، افسوس‌آور، سنستر تامبل
                  آماده اصیل پارچه‌ای شوربا هشتگ بیودیزل
                </p>
                <div className="w-full h-64 my-5 image-fit">
                  <img
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    src={products.fakeProducts()[0].images[0].path}
                    className="w-full rounded-md"
                  />
                </div>
                <p className="mb-5">
                  تاندرکت‌ها فری‌گان تروفو، چهار لوکو انوی آستین سنستر
                  سایه سیتان زندگی بالا پالئو کینوا ماهی‌گیری. گاستروپاب
                  اخلاقی تامبل، طراحی شده توسط خودتان، کیتار قبیله‌ای آیفون پی‌بی‌آر سریچا
                  تانکس معامله مستقیم حقوق دوچرخه بدون گلوتن، انعطاف‌پذیر
                  نامتقارن. هر چیزی که سرکه بنوشد بی‌پی‌آر XOXO بوشویک
                  ژنتریفیکه شد. سمیوتیک‌های کلیشه‌ای بانجو بازگشتی ماهی‌گیری اندرسون وس وس
                  Fashion axe dreamcatcher you probably haven\'t heard of them
                  حقوق دوچرخه. کیف توت آلی چهار لوکو اخلاقی سلفی
                  گاستروپاب، پی‌بی‌آر انگشتی تاتو حقوق دوچرخه
                </p>
                <p className="mb-5">
                  اوف، پورتلند آستین، کارخانه تاتو تایپ‌ر پلاروید
                  پاگ بانکسی نوترا کفیه. شوردیچ میکس‌تیپ گرگ
                  کیف توت، دست‌ساز بدون واسطه عکس‌های خودتان
                  90\'s master cleanse vegan. Flannel tofu deep v next level
                  شور، اصیل اتسی شوردیچ بدون واسطه عکس‌های خودتان
                  آیفون پاگ سمیوتیک بنجو. حقوق دوچرخه قصاب آبی
                  بطری، در واقع سمیوتیک‌های خودتان بانکسی
                  شکم چرخ‌پیچ‌دار پس از آهنگ‌سازی. لباس‌های آمریکایی گاستروپاب هشتگ
                  McSweeney\'s master cleanse occupy بالا Life bitters wayfarers
                  حقوق دوچرخه سطح بعدی. گرگ چیا تری ریچاردسون، پاپ‌آپ
                  پارچه‌ای خرمایی افسوس‌آور. قصاب +۱ کارل، سلفی‌های خودتان بطری آبی
                  ویروسی.
                </p>
                <p className="mb-5">
                  کامیون غذایی کفیه لباس های آلی نسخه چاپی مچ دستی چهار
                  لوکو هلا دم کرده فراگرفته، Wes Anderson قلم مو post-ironic.
                  نوترا رترو فیکسی گاستروپاب +1، زندگی بالا سمیوتیک. وینیل
                  دیستیلری Etsy flexitarian freegan cliche شلوار جین کوتاه،
                  اسکیت‌بورد Schlitz wayfarers تفنگ انتقادی locavore XOXO meh.
                  Ethnic Wes Anderson McSweeney\'s messenger bag, mixtape XOXO
                  آستیک کرن‌هول زیبایی مارفا بانجو Thundercats بیتر.
                  دنیم خام بانجو تایپ‌رایتر cray تامبلر، زندگی بالا
                  single-origin coffee. 90\'s Tumblr cred, Terry Richardson
                  اشغال دنیم خام توفو تراشه مد عکاسی گروه عکس بانه می. اعتماد
                  صندوق locavore هلوتیکا، مدیون تراشه مد اصیل
                  عکس‌های خودشیفته شوردیچ استامتاون +1
                </p>
                <div className="float-start w-3/5 h-64 me-6 image-fit">
                  <img
                    alt="تیل وایز - قالب داشبورد مدیریتی"
                    src={products.fakeProducts()[0].images[0].path}
                    className="w-full rounded-md"
                  />
                </div>
                <p className="mb-5">
                  بیشعور, سنگین, زنده باش, پول جذب, نفرت نهایی
                  حقوق مردم را آب می کند. گنتریفای پیام را بسته باز کنید. سقف تراشیده ترافو
                  مهمانی سینه گوساله گرسنه، پیراهن پارچه ای عکاسی، شلوار جین. آستین
                  پیش ساخته پی بی آر پارچه ای پلیید. مکان های پیش بینی شده پارک اکو. ریختن بر روی
                  جاده ساحلی برای کاوش هر چیزی، محلی سازنده مسافران، نوع نوشتاری عمیق
                  four loko. Locavore occupy Neutra Pitchfork McSweeney\'s,
                  جاده ساحلی ستاره انگشتی. در واقع نامتقارن نوشیدن انگور
                  سالانه صبحانه بیودیزل. قبل از اینکه به اتمام برسند، پایدار
                  پیش ساخته مشروبات دست ساز پورتلند، مراسم میهمانی ای استن، سقف
                  مهمانی Thundercats پارچه ای گوناگون Bushwick سگ زبان کوتوله
                </p>
                <p className="mb-5">
                  کلاسیک تایپ‌رایتری، امتیازات دوچرخه سواری کارلس پلنوار
                  جاده ساحلی. در واقع بیوتاکسیل از مزرعه به میز، محلی سازنده کفیه
                  شیک پیراهن روسری پاره پاره، تلاش سخت بوشویک. سریراچا
                  لباس‌های آمریکایی بروکلین، بلاگ جوانه زنی از جنگل‌های سوخته بوشویک
                  +1 VHS hashtag. Wolf umami Carles Marfa, 90\'s food truck
                  پلنگ کوزبی. کوله پشتی کوچک، سخت کوش. پاپ آپ پیش ساخته
                  پاکسازی اصلی چهار لوکو صندوق اعتماد، سلولی. عکس
                  غرفه کیتش برای کاوش پارچه چمبری، کارلز سنسستر کربوهیدراتی کند، گوشت مرغ
                  کاردیگان دامن خواب. لباس‌های ورزشی نامتقارن، بیودیزل
                  تونکس پارچه ای گوناگون پاکسازی اصلی، آزاد
                </p>
                <p>
                  دنیم خام بانکسی شیک پارچه ای، نرمال 8 بیت ناروال مد
                  تبر. اخلاقی ویلیامزبرگ چهار لوکو، نانه کلم
                  کارخانه شوردیچ کیف پیام‌رسانی، مهارت iPhone
                  قهوه اصلی تک‌نشانی PBR&B، کینوا پیش ساخته، اخلاقی
                  با شور می خوردن، انگور ترش بدون گلوتن وس آندرسون چیش
                  Tumblr synth actually bitters. Butcher McSweeney\'s forage
                  mlkshk kogi انگشت گوشت. کارگردان کشتی گردان
                  شوردیچ، کارلز دق. پسر سگ پارچه ای را مختل کنید
                  رترو خود بری، سلویا وینیل آستین پاکسازی اصلی کمکی
                  حقوق عمیق دوچرخه سواری پلنوار پلید تری ریچاردسون mlkshk. بیش از حد
                  Trust fund try-hard banh mi Brooklyn, 90\'s Etsy kogi YOLO
                  سالویا.
                </p>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
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
                    <div className="-mt-px">ImageZoom</div>
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
                    پیاده‌سازی
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
