import "@/assets/css/pages/landing-page.css";
import Lucide, { icons } from "@/components/Base/Lucide";
import { Menu } from "@/components/Base/Headless";
import { FormInput, FormTextarea } from "@/components/Base/Form";
import {
  setColorScheme,
  colorSchemes,
  ColorSchemes,
} from "@/stores/colorSchemeSlice";
import { setPageLoader } from "@/stores/pageLoaderSlice";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import ReportDonutChart7 from "@/components/ReportDonutChart7";
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import messages from "@/fakers/messages";
import activities from "@/fakers/activities";
import Button from "@/components/Base/Button";
import { themes, Themes } from "@/stores/themeSlice";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [topBarActive, setTopBarActive] = useState(false);
  const [showcaseActive, setShowcaseActive] = useState(true);
  const activeColorScheme = useAppSelector(selectColorScheme);
  const [tempActiveColorScheme, setTempActiveColorScheme] =
    useState(activeColorScheme);

  const setColorSchemeClass = () => {
    const el = document.querySelectorAll("html")[0];
    el.setAttribute("class", activeColorScheme);
  };

  const switchColor = (colorScheme: ColorSchemes) => {
    setTempActiveColorScheme(colorScheme);

    setTimeout(() => {
      dispatch(setColorScheme(colorScheme));
    }, 500);
    localStorage.setItem("colorScheme", colorScheme);
    setColorSchemeClass();
  };

  const scrollTo = (e: React.MouseEvent) => {
    e.preventDefault();

    const targetId = (e.target as HTMLElement).getAttribute("data-link");
    const el = document.getElementById(
      targetId !== null ? targetId.slice(1) : ""
    );

    if (el !== null) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: el.offsetTop - 140,
      });
    }
  };

  const previewTheme = (theme: Themes) => {
    dispatch(setPageLoader(true));
    navigate(`/?theme=${theme.name}`);
  };

  setColorSchemeClass();

  const themesImageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/themes/*.{jpg,jpeg,png,svg}", { eager: true });

  const frameworkImageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/frameworks/*.{jpg,jpeg,png,svg}", { eager: true });

  const pageImageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/pages/*.{jpg,jpeg,png,svg}", { eager: true });

  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setTopBarActive(true);
    } else {
      setTopBarActive(false);
    }

    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setShowcaseActive(false);
    } else {
      setShowcaseActive(true);
    }
  };

  const [groups, setGroups] = useState<
    Array<{
      group: string;
      icon: keyof typeof icons;
      active: boolean;
      pages: Array<{
        name: string;
        pathname: string;
        image: string;
      }>;
    }>
  >([
    {
      group: "Dashboards",
      icon: "GaugeCircle",
      active: true,
      pages: [
        {
          name: "تجارت الکترونیک",
          pathname: "/",
          image: "dashboard-overview-1",
        },
        {
          name: "مدیریت ارتباط با مشتریان",
          pathname: "/dashboard-overview-2",
          image: "dashboard-overview-2",
        },
        {
          name: "بیمارستان",
          pathname: "/dashboard-overview-3",
          image: "dashboard-overview-3",
        },
        {
          name: "کارخانه",
          pathname: "/dashboard-overview-4",
          image: "dashboard-overview-4",
        },
        {
          name: "بانکداری",
          pathname: "/dashboard-overview-5",
          image: "dashboard-overview-5",
        },
        {
          name: "کافه",
          pathname: "/dashboard-overview-6",
          image: "dashboard-overview-6",
        },
        {
          name: "رمزارز",
          pathname: "/dashboard-overview-7",
          image: "dashboard-overview-7",
        },
        {
          name: "هتل",
          pathname: "/dashboard-overview-8",
          image: "dashboard-overview-8",
        },
      ],
    },
    {
      group: "برنامه‌ها",
      icon: "ActivitySquare",
      active: false,
      pages: [
        {
          name: "صندوق دریافت",
          pathname: "/inbox",
          image: "inbox",
        },
        {
          name: "مدیریت فایل - لیست",
          pathname: "/file-manager-list",
          image: "file-manager-list",
        },
        {
          name: "مدیریت فایل - شبکه",
          pathname: "/file-manager-grid",
          image: "file-manager-grid",
        },
      ],
    },
    {
      group: "ابزارهای رابط کاربری",
      icon: "Album",
      active: false,
      pages: [
        {
          name: "خلاقانه",
          pathname: "/creative",
          image: "creative",
        },
        {
          name: "پویا",
          pathname: "/dynamic",
          image: "dynamic",
        },
        {
          name: "تعاملی",
          pathname: "/interactive",
          image: "interactive",
        },
      ],
    },
    {
      group: "مدیریت کاربر",
      icon: "BookMarked",
      active: false,
      pages: [
        {
          name: "کاربران",
          pathname: "/users",
          image: "users",
        },
        {
          name: "بخش‌ها",
          pathname: "/departments",
          image: "departments",
        },
        {
          name: "افزودن کاربر",
          pathname: "/add-user",
          image: "add-user",
        },
      ],
    },
    {
      group: "داشبورد شخصی",
      icon: "HardDrive",
      active: false,
      pages: [
        {
          name: "مرور پروفایل",
          pathname: "/profile-overview",
          image: "profile-overview",
        },
        {
          name: "رویدادها",
          pathname: "/profile-overview?page=events",
          image: "profile-overview-events",
        },
        {
          name: "دستاوردها",
          pathname: "/profile-overview?page=achievements",
          image: "profile-overview-achievements",
        },
        {
          name: "مخاطبین",
          pathname: "/profile-overview?page=contacts",
          image: "profile-overview-contacts",
        },
        {
          name: "پیش‌فرض",
          pathname: "/profile-overview?page=default",
          image: "profile-overview-default",
        },
      ],
    },
    {
      group: "تنظیمات عمومی",
      icon: "MousePointerSquare",
      active: false,
      pages: [
        {
          name: "اطلاعات پروفایل",
          pathname: "/settings",
          image: "settings",
        },
        {
          name: "تنظیمات ایمیل",
          pathname: "/settings?page=email-settings",
          image: "settings-email-settings",
        },
        {
          name: "امنیت",
          pathname: "/settings?page=security",
          image: "settings-security",
        },
        {
          name: "ترجیحات",
          pathname: "/settings?page=preferences",
          image: "settings-preferences",
        },
        {
          name: "احراز هویت دو عاملی",
          pathname: "/settings?page=two-factor-authentication",
          image: "settings-two-factor-authentication",
        },
        {
          name: "تاریخچه دستگاه",
          pathname: "/settings?page=device-history",
          image: "settings-device-history",
        },
        {
          name: "تنظیمات اعلان",
          pathname: "/settings?page=notification-settings",
          image: "settings-notification-settings",
        },
        {
          name: "خدمات متصل",
          pathname: "/settings?page=connected-services",
          image: "settings-connected-services",
        },
        {
          name: "پیوندهای رسانه‌های اجتماعی",
          pathname: "/settings?page=social-media-links",
          image: "settings-social-media-links",
        },
        {
          name: "غیرفعال‌سازی حساب کاربری",
          pathname: "/settings?page=account-deactivation",
          image: "settings-account-deactivation",
        },
      ],
    },
    {
      group: "حساب کاربری",
      icon: "ShieldHalf",
      active: false,
      pages: [
        {
          name: "صورتحساب",
          pathname: "/billing",
          image: "billing",
        },
        {
          name: "فاکتور",
          pathname: "/invoice",
          image: "invoice",
        },
      ],
    },
    {
      group: "تجارت الکترونیک",
      icon: "Building",
      active: false,
      pages: [
        {
          name: "دسته‌بندی‌ها",
          pathname: "/categories",
          image: "categories",
        },
        {
          name: "افزودن محصول",
          pathname: "/add-product",
          image: "add-product",
        },
        {
          name: "لیست محصول",
          pathname: "/product-list",
          image: "product-list",
        },
        {
          name: "شبکه محصول",
          pathname: "/product-grid",
          image: "product-grid",
        },
        {
          name: "لیست تراکنش",
          pathname: "/transaction-list",
          image: "transaction-list",
        },
        {
          name: "جزئیات تراکنش",
          pathname: "/transaction-detail",
          image: "transaction-detail",
        },
        {
          name: "لیست فروشندگان",
          pathname: "/seller-list",
          image: "seller-list",
        },
        {
          name: "جزئیات فروشنده",
          pathname: "/seller-detail",
          image: "seller-detail",
        },
        {
          name: "نقد و بررسی",
          pathname: "/reviews",
          image: "reviews",
        },
        {
          name: "نقطه فروش",
          pathname: "/point-of-sale",
          image: "point-of-sale",
        },
      ],
    },
    {
      group: "احراز هویت‌ها",
      icon: "PanelRightClose",
      active: false,
      pages: [
        {
          name: "ورود",
          pathname: "/login",
          image: "login",
        },
        {
          name: "ثبت نام",
          pathname: "/register",
          image: "register",
        },
      ],
    },
  ]);

  const setActiveGroup = (e: React.MouseEvent, key: number) => {
    e.preventDefault();

    const computedGroups = groups.map((group, groupKey) => {
      return {
        ...group,
        active: groupKey === key,
      };
    });

    setGroups(computedGroups);
  };

  return (
    <div
      className={clsx([
        "landing-page relative",
        "before:content-[''] before:w-screen before:h-screen before:fixed before:bg-slate-100 before:z-[-1]",
        !showcaseActive && "landing-page--scrolled",
      ])}
    >
      <div
        className={clsx([
          "relative group background overflow-x-hidden scroll-smooth",
          "before:content-[''] before:w-screen before:h-screen before:rounded-[0_0_50%] [&.background--hidden]:before:from-slate-100 [&.background--hidden]:before:to-transparent before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:absolute before:z-[-1] before:transition-colors before:ease-in-out before:duration-300",
          "after:content-[''] after:z-[-1] after:h-screen after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-25rem] after:bg-no-repeat",
          topBarActive && "background--hidden",
        ])}
      >
        <div className="container fixed inset-x-0 z-50 mx-auto">
          <div
            className={clsx([
              "relative flex items-center h-16 w-full mt-5 px-5",
              "before:content-[''] before:inset-0 before:box before:absolute before:opacity-0 before:border-0 before:bg-gradient-to-r before:from-theme-1 before:to-theme-2 before:rounded-xl",
              "group-[.background--hidden]:before:opacity-100",
              "after:content-[''] after:z-[-1] after:inset-x-4 after:shadow-sm after:opacity-0 after:h-full after:bg-primary/5 after:border after:border-primary/10 after:absolute after:rounded-lg after:mx-auto after:top-0 after:mt-3 after:dark:bg-darkmode-600/70 after:dark:border-darkmode-500/60",
              "group-[.background--hidden]:after:opacity-100",
            ])}
          >
            <a className="relative flex items-center me-14" href="">
              <div className="flex items-center justify-center w-[34px] rounded-lg h-[34px] bg-white/10 border-white/10 border transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                <div className="w-[16px] h-[16px] relative -rotate-45 [&_div]:bg-white">
                  <div className="absolute w-[21%] start-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                  <div className="absolute w-[21%] inset-0 m-auto h-[120%] rounded-full"></div>
                  <div className="absolute w-[21%] end-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                </div>
              </div>
              <div className="font-medium text-white ms-3.5 text-lg">
                تیلوایس
              </div>
            </a>
            <div className="relative flex items-center gap-10 mx-auto text-white">
              <a
                onClick={(e) => scrollTo(e)}
                data-link="#themes-variants"
                className="cursor-pointer"
              >
                تم‌ها و نوع‌ها
              </a>
              <a
                onClick={(e) => scrollTo(e)}
                data-link="#pages-layouts"
                className="cursor-pointer"
              >
                صفحات و طرح‌ها
              </a>
              <a
                onClick={(e) => scrollTo(e)}
                data-link="#frameworks"
                className="cursor-pointer"
              >
                چارچوب‌ها
              </a>
              <a
                onClick={(e) => scrollTo(e)}
                data-link="#pricing"
                className="cursor-pointer"
              >
                قیمت‌گذاری
              </a>
            </div>
            <div className="flex gap-2.5 relative">
              <Button
                as="a"
                data-link="#colors"
                rounded
                onClick={(e: React.MouseEvent) => scrollTo(e)}
                className="relative text-white bg-white/10 border-white/10 px-2.5"
              >
                <Lucide icon="Palette" className="w-4 h-4" />
                <div className="absolute inset-0" data-link="#colors"></div>
              </Button>
              <Button
                as="a"
                href="https://themeforest.net/item/tailwise-intuitive-tailwind-dashboard-kit/48659596"
                target="_blank"
                rounded
                className="px-5 text-white bg-white/10 border-white/10"
              >
                دانلود اکنون
              </Button>
            </div>
          </div>
        </div>
        <div className="container relative z-10 pt-40">
          <div className="flex flex-col items-center gap-56 mb-40">
            <div className="flex flex-col items-center">
              <div className="text-5xl leading-[1.2] text-center text-white group-[.background--hidden]:text-slate-600 font-medium">
                قدرت‌های شگفت‌انگیز داشبورد خود را آزاد کنید. <br />
                قدرت‌های فوق‌العاده.
              </div>
              <div className="mt-4 text-lg leading-[1.75] text-center text-white/70 group-[.background--hidden]:text-slate-600/70">
                تیلوایس روش ساخت داشبورد‌های مدیریتی را برای توسعه‌دهندگان بازتعریف می‌کند و با ادغام Headless UI و Tailwind CSS، امکانات بی‌پایانی را فراهم می‌کند.
                <br />
                unlocking endless possibilities with the fusion of Headless UI
                and Tailwind CSS، آزاد می‌کند.
              </div>
              <Link to="/">
                <Button
                  rounded
                  className="px-7 py-3 mt-8 text-white bg-white/10 border-white/10 group-[.background--hidden]:bg-primary group-[.background--hidden]:border-primary text-[0.94rem]"
                >
                  مشاهده دمو
                </Button>
              </Link>
              <div className="grid w-full grid-cols-3 gap-5 px-20 landing-page__showcase">
                <div className="flex flex-col gap-7">
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
                      <div className="text-slate-500 mt-0.5">
                        عشق شیمیایی من
                      </div>
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
                              <Lucide icon="Copy" className="w-4 h-4 me-2" />{" "}
                              کپی لینک
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
                    <div className="relative">
                      <FormInput
                        type="text"
                        className="pe-11"
                        rounded
                        placeholder="Search members..."
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center justify-center w-11">
                        <Lucide
                          icon="Search"
                          className="stroke-[1.3] w-4 h-4 text-slate-400"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mt-3.5 gap-2">
                      {_.take(users.fakeUsers(), 4).map((faker, fakerKey) => (
                        <div
                          className="hover:bg-slate-50 transition-all rounded-lg cursor-pointer px-2 -mx-2 py-1.5 flex items-center gap-3.5"
                          key={fakerKey}
                        >
                          <div>
                            <div className="w-10 h-10 overflow-hidden border-2 rounded-full image-fit border-slate-200/70">
                              <img
                                alt="تیل وایز - قالب داشبورد مدیریتی"
                                src={faker.photo}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-medium">{faker.name}</div>
                            <div className="mt-1 text-xs text-slate-500">
                              {faker.position}
                            </div>
                          </div>
                          <div className="flex gap-2.5 ms-auto">
                            <Tippy
                              as="a"
                              className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
                              content="Call"
                            >
                              <Lucide
                                icon="Phone"
                                className="w-3 h-3 text-primary fill-primary/10"
                              />
                            </Tippy>
                            <Tippy
                              as="a"
                              className="flex items-center justify-center border rounded-full w-7 h-7 border-primary/40 bg-primary/5"
                              content="Send a message"
                            >
                              <Lucide
                                icon="Mail"
                                className="w-3 h-3 text-primary fill-primary/10"
                              />
                            </Tippy>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col -mt-10 gap-7">
                  <div className="p-5 box box--stacked">
                    <div className="flex flex-col items-center my-1">
                      <div
                        className={clsx([
                          "relative flex items-end rounded-full w-48 h-48 bg-gradient-to-r from-slate-100 via-theme-1 to-theme-2",
                          "before:content-[''] before:w-1.5 before:h-2 before:absolute before:bg-white before:inset-y-0 before:my-auto before:end-0",
                          "after:content-[''] after:w-2 after:h-1.5 after:absolute after:bg-white after:inset-x-0 after:mx-auto after:top-0",
                        ])}
                      >
                        <div className="bg-white rounded-full w-[97%] h-[97%] ms-0.5 mb-0.5 flex items-center justify-center">
                          <div>
                            <div className="w-32 h-32 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70 -mt-1 -me-1">
                              <img
                                alt="تیل وایز - قالب داشبورد مدیریتی"
                                src={users.fakeUsers()[0].photo}
                              />
                            </div>
                          </div>
                          <div className="absolute start-0 w-6 h-6 overflow-hidden border rounded-full image-fit border-slate-200/70 -ms-2.5">
                            <img
                              alt="تیل وایز - قالب داشبورد مدیریتی"
                              src={users.fakeUsers()[0].photo}
                            />
                          </div>
                          <div className="absolute bottom-0 start-0 w-8 h-8 mb-2.5 ms-2.5 overflow-hidden border rounded-full image-fit border-slate-200/70">
                            <img
                              alt="تیل وایز - قالب داشبورد مدیریتی"
                              src={users.fakeUsers()[0].photo}
                            />
                          </div>
                          <Tippy
                            as="a"
                            className="absolute bottom-0 flex items-center justify-center w-12 h-12 -mb-5 border border-transparent rounded-full box bg-gradient-to-b from-theme-1/90 to-theme-2/90"
                            content="Play"
                          >
                            <Lucide
                              icon="Play"
                              className="w-5 h-5 stroke-[0.9] text-white fill-white/5 -me-1"
                            />
                          </Tippy>
                        </div>
                      </div>
                      <div className="mt-10 text-base font-medium">
                        جعبه اشتراک
                      </div>
                      <div className="text-slate-500 mt-1.5 text-center mx-5">
                        هدیه‌ای که ادامه دارد. برای مشترک شدن در جعبه موسیقی
                        برای جایگزینی موسیقی منتخب.
                      </div>
                      <Button
                        type="button"
                        variant="primary"
                        rounded
                        className="w-full mt-5"
                      >
                        <Lucide
                          icon="Send"
                          className="w-4 h-4 stroke-[1.3] me-2"
                        />
                        اکنون مشترک شوید
                      </Button>
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
                    <div className="flex flex-col items-center pb-8 mb-5 border-b border-dashed">
                      <div className="max-w-[17rem] text-base font-medium truncate">
                        Hi, {users.fakeUsers()[0].name}
                      </div>
                      <div className="text-slate-500 mt-0.5">
                        غذای شما در حال آماده شدن در
                      </div>
                      <div className="flex items-center gap-4 mt-8">
                        <div className="w-10">
                          <ReportDonutChart7
                            className="relative z-10"
                            height={35}
                          />
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
                      <div className="flex items-center gap-3.5 relative z-10">
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
                      <div className="flex items-center gap-3.5 relative z-10">
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
                          <div className="mt-1 text-xs text-slate-500">
                            راننده
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
                      <div className="flex items-center gap-3.5 relative z-10">
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
                </div>
                <div className="flex flex-col gap-7">
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
                              <Lucide icon="Copy" className="w-4 h-4 me-2" />{" "}
                              کپی لینک
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
                          <span className="-mt-px">
                            {_.random(10, 20)} تکمیل شده
                          </span>
                        </div>
                      </div>
                      <Button
                        type="button"
                        rounded
                        variant="primary"
                        className="w-full mt-10"
                      >
                        <Lucide
                          icon="Send"
                          className="w-4 h-4 stroke-[1.3] me-2"
                        />
                        تخصیص به وظیفه
                      </Button>
                    </div>
                  </div>
                  <div className="p-1 box box--stacked">
                    <div className="flex items-center gap-3.5 bg-gradient-to-r from-theme-2/[0.85] to-theme-1/[0.85] p-4 rounded-lg">
                      <div>
                        <div className="w-14 h-14 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                          <img
                            alt="تیل وایز - قالب داشبورد مدیریتی"
                            src={users.fakeUsers()[0].photo}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="text-base font-medium text-white">
                          {users.fakeUsers()[0].name}
                        </div>
                        <div className="text-slate-500 mt-0.5 text-white/80">
                          {activities.fakeActivities()[0].activity}
                        </div>
                        <div className="mt-1 text-white/80">
                          {activities.fakeActivities()[0].date}
                        </div>
                      </div>
                      <div className="flex gap-2 ms-auto">
                        <Tippy
                          as="a"
                          className="flex items-center justify-center border rounded-full w-9 h-9 border-white/40 bg-white/5"
                          content="Send a message"
                        >
                          <Lucide
                            icon="ChevronRight"
                            className="w-4 h-4 text-white fill-white/10"
                          />
                        </Tippy>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 box box--stacked">
                    <div className="flex flex-col items-center my-1">
                      <div>
                        <div className="w-28 h-28 overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                          <img
                            alt="تیل وایز - قالب داشبورد مدیریتی"
                            src={users.fakeUsers()[0].photo}
                          />
                        </div>
                      </div>
                      <div className="mt-3.5 text-base font-medium">سرطان</div>
                      <div className="text-slate-500 mt-0.5">
                        عشق شیمیایی من
                      </div>
                      <div className="flex items-center justify-center h-10 gap-1 mt-4">
                        <div className="w-0.5 h-[15%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[25%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[35%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[45%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[30%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[20%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[25%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[35%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[45%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[30%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[50%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[70%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70 active"></div>
                        <div className="w-0.5 h-[100%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[90%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[70%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[50%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[30%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[45%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[35%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[25%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[15%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[15%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[25%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[35%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[45%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[40%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[30%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                        <div className="w-0.5 h-[20%] rounded-full bg-slate-300/80 [&.active]:bg-gradient-to-b [&.active]:from-theme-1/70 [&.active]:to-theme-2/70"></div>
                      </div>
                      <div className="flex items-center gap-3.5 mt-5">
                        <Tippy
                          as="a"
                          className="flex items-center justify-center border rounded-full w-9 h-9 border-primary/[0.15] box bg-primary/5"
                          content="Skip Back"
                        >
                          <Lucide
                            icon="SkipBack"
                            className="w-4 h-4 stroke-[1.3] text-primary fill-primary/5"
                          />
                        </Tippy>
                        <Tippy
                          as="a"
                          className="flex items-center justify-center w-12 h-12 border border-transparent rounded-full box bg-gradient-to-b from-theme-1/90 to-theme-2/90"
                          content="Play"
                        >
                          <Lucide
                            icon="Play"
                            className="w-5 h-5 stroke-[0.9] text-white fill-white/5 -me-1"
                          />
                        </Tippy>
                        <Tippy
                          as="a"
                          className="flex items-center justify-center border rounded-full w-9 h-9 border-primary/[0.15] box bg-primary/5"
                          content="Skip Forward"
                        >
                          <Lucide
                            icon="SkipForward"
                            className="w-4 h-4 stroke-[1.3] text-primary fill-primary/5"
                          />
                        </Tippy>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center w-full"
              id="themes-variants"
            >
              <div
                className={clsx([
                  "text-3xl font-medium relative",
                  "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ms-[25%]",
                ])}
              >
                <div className="absolute inset-x-0 w-36 h-36 mx-auto -mt-[5.5rem] border rounded-full border-theme-1/[0.13] z-[-1] flex items-center justify-center">
                  <div className="w-16 h-16 border rounded-full border-theme-1/20"></div>
                  <div className="absolute w-10 h-10 -mt-10 border rounded-full -ms-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 -ms-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 border rounded-full -mt-[13rem] bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 -me-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 -mt-10 border rounded-full -me-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                </div>
                <div className="relative text-center z-5 text-theme-1">
                  تم‌ها و نوع‌ها
                </div>
              </div>
              <div className="relative mt-4 text-base text-center text-slate-500/80 z-5">
                طیفی از استایل‌ها را کشف کنید، 11 نوع تم جذاب در دسترس!
                در دسترس انگشتان شما!
              </div>
              <div className="-mx-2.5 mt-10 px-20">
                <div className="flex flex-wrap justify-center w-full gap-y-9">
                  {themes.map((theme, themeKey) => (
                    <div className="w-1/3 px-2.5" key={themeKey}>
                      <div className="box box--stacked [&_img]:hover:w-[150%] [&_img]:hover:h-[150%]">
                        <a
                          onClick={() => previewTheme(theme)}
                          className="p-2.5 cursor-pointer block"
                        >
                          <div className="h-56 overflow-hidden rounded-lg box cursor-zoom-in">
                            <img
                              className="w-full h-full transition-all duration-300 ease-in-out max-w-none"
                              src={
                                themesImageAssets[
                                  `/src/assets/images/themes/${theme.name}.png`
                                ].default
                              }
                            />
                          </div>
                          <div className="flex items-center px-3 py-3 mt-2 font-medium capitalize transition-all duration-300 ease-in-out text-primary">
                            <div className="flex items-center">
                              Theme {themeKey + 1}{" "}
                              <div className="w-1 h-1 mx-2 rounded-full bg-primary/40"></div>{" "}
                              {theme.name}
                            </div>
                            <Lucide
                              icon="ArrowRight"
                              className="w-5 h-5 stroke-[1] ms-auto"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full" id="colors">
              <div
                className={clsx([
                  "text-3xl font-medium relative",
                  "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ms-[25%]",
                ])}
              >
                <div className="absolute inset-x-0 w-48 h-48 mx-auto rounded-full -mt-36 z-[-1]">
                  <div className="absolute inset-y-0 w-1/2 my-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute bottom-0 start-0 w-1/2 rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute inset-x-0 bottom-0 w-1/2 mx-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute bottom-0 end-0 w-1/2 rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute inset-y-0 end-0 w-1/2 my-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute inset-x-0 top-0 w-1/2 mx-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                </div>
                <div className="relative text-center z-5 text-theme-1">
                  طرح‌های رنگی
                </div>
              </div>
              <div className="relative mt-4 text-base text-center text-slate-500/80 z-5">
                جادوی دوتایی، طراحی خود را با دو رنگ درخشان بهبود بخشیده
                طرح‌ها!
              </div>
              <div className="grid w-full grid-cols-3 gap-5 px-20 mt-10">
                <div className="mt-2">
                  <div className="p-1 box box--stacked border-theme-1/50">
                    <div className="p-4 rounded-lg bg-gradient-to-b from-theme-1/90 to-theme-2/90">
                      <div className="flex items-center gap-3.5">
                        <div>
                          <div className="overflow-hidden border-2 rounded-full border-white/20 w-14 h-14 image-fit">
                            <img
                              alt="تیل وایز - قالب داشبورد مدیریتی"
                              src={users.fakeUsers()[0].photo}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-base font-medium truncate max-w-[8rem] md:max-w-none text-white">
                            {users.fakeUsers()[0].name}
                          </div>
                          <div className="text-white/80 mt-0.5">در دسترس</div>
                        </div>
                        <div className="flex items-center ms-auto gap-2.5">
                          <Tippy
                            as="a"
                            className="flex items-center justify-center border rounded-full w-9 h-9 bg-white/5 border-white/[0.13] ms-auto"
                            content="Make a phone call"
                          >
                            <Lucide
                              icon="Phone"
                              className="w-4 h-4 text-white fill-white/5"
                            />
                          </Tippy>
                          <Tippy
                            as="a"
                            className="flex items-center justify-center border rounded-full w-9 h-9 bg-white/5 border-white/[0.13] ms-auto"
                            content="Make a phone call"
                          >
                            <Lucide
                              icon="Settings"
                              className="w-4 h-4 text-white fill-white/5"
                            />
                          </Tippy>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5 border-y border-dashed border-white/20 py-5 my-5">
                        {_.take(messages.fakeMessages(), 2).map(
                          (faker, fakerKey) => (
                            <div
                              key={fakerKey}
                              className={clsx([
                                "me-auto border px-4 py-3 rounded-e-xl rounded-es-xl bg-white/5 border-white/[0.13] text-white [&.right]:text-end [&.right]:me-0 [&.right]:ms-auto [&.right]:rounded-s-xl [&.right]:rounded-se-none",
                                { 'inset-inline-end': [0, 0, 1, 1, 1][_.random(0, 5)] },
                              ])}
                            >
                              <div>{faker.content}</div>
                              <div className="mt-1 text-xs text-white/60">
                                {faker.time}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="relative">
                        <FormTextarea
                          className="-mb-1.5 pe-16 rounded-xl resize-none bg-white/5 border-white/[0.13] text-white placeholder:text-white/50"
                          placeholder="Type a message..."
                        />
                        <div className="absolute inset-y-0 end-0 flex items-center justify-center w-[3.8rem]">
                          <a
                            href=""
                            className="flex items-center justify-center rounded-full cursor-pointer bg-white/5 border-white/[0.13] w-9 h-9 box"
                          >
                            <Lucide
                              icon="Send"
                              className="stroke-[1.3] w-4 h-4 -ms-0.5 text-white/70"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-5 py-6 box box--stacked border-theme-1/60 bg-gradient-to-b from-slate-50 to-transparent">
                    <div className="grid grid-cols-3 gap-x-2 gap-y-2.5">
                      {colorSchemes.map((colorScheme, colorKey) => (
                        <Tippy
                          className={clsx([
                            "p-1 rounded-full box border-2 cursor-pointer",
                            tempActiveColorScheme == colorScheme &&
                              "border-theme-1/60",
                          ])}
                          key={colorKey}
                          onClick={() => switchColor(colorScheme)}
                          content={`Color Scheme ${colorKey + 1}`}
                        >
                          <div className="h-8 overflow-hidden rounded-full">
                            <div className="flex items-center h-full gap-1 -mx-2">
                              <div
                                className={clsx([
                                  "w-1/2 h-[140%] bg-theme-1 rotate-12",
                                  colorScheme,
                                ])}
                              ></div>
                              <div
                                className={clsx([
                                  "w-1/2 h-[140%] bg-theme-2 rotate-12",
                                  colorScheme,
                                ])}
                              ></div>
                            </div>
                          </div>
                        </Tippy>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="p-1 box box--stacked border-theme-1/50">
                    <div className="p-4 rounded-lg bg-gradient-to-b from-theme-1/90 to-theme-2/90">
                      <div className="flex flex-col items-center">
                        <div className="relative w-40 h-40 mt-1.5">
                          <div className="w-40 h-40 overflow-hidden rounded-full image-fit border-[3px] border-white/20">
                            <img
                              alt="تیل وایز - قالب داشبورد مدیریتی"
                              src={users.fakeUsers()[0].photo}
                            />
                          </div>
                          <Lucide
                            icon="CheckCheck"
                            className="w-9 h-9 stroke-[1.3] absolute text-white fill-white/10 rounded-full box p-2 top-0 start-0 mt-7 -ms-2.5 bg-theme-1/70 border-2 border-white/20"
                          />
                          <Lucide
                            icon="Zap"
                            className="w-9 h-9 stroke-[1.3] absolute text-white fill-white/10 rounded-full box p-2 bottom-0 end-0 mb-7 -me-2.5 bg-theme-1/70 border-2 border-white/20"
                          />
                        </div>
                        <div className="mt-4 text-white/80">خوش آمدید دوباره</div>
                        <div className="text-base text-white font-medium mt-0.5">
                          {users.fakeUsers()[0].name}
                        </div>
                        <Button
                          type="button"
                          rounded
                          variant="primary"
                          className="w-full mt-5 bg-white/5 border-white/[0.15]"
                        >
                          <Lucide
                            icon="Send"
                            className="w-4 h-4 stroke-[1.3] me-2"
                          />
                          ادامه
                        </Button>
                        <Button
                          rounded
                          type="button"
                          variant="outline-primary"
                          className="w-full mt-2 border-white/[0.15] text-white"
                        >
                          رد کردن
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center w-full"
              id="pages-layouts"
            >
              <div
                className={clsx([
                  "text-3xl font-medium relative",
                  "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ms-[25%]",
                ])}
              >
                <div className="absolute inset-x-0 w-36 h-36 mx-auto -mt-[5.5rem] border rounded-full border-theme-1/[0.13] z-[-1] flex items-center justify-center">
                  <div className="w-16 h-16 border rounded-full border-theme-1/20"></div>
                  <div className="absolute w-10 h-10 -mt-10 border rounded-full -ms-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 -ms-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 border rounded-full -mt-[13rem] bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 -me-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 -mt-10 border rounded-full -me-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                </div>
                <div className="relative text-center z-5 text-theme-1">
                  صفحات و طرح‌ها
                </div>
              </div>
              <div className="relative mt-4 text-base text-center text-slate-500/80 z-5">
                طیفی از استایل‌ها را کشف کنید، 11 نوع تم جذاب در دسترس!
                در دسترس انگشتان شما!
              </div>
              <div className="flex w-full px-20 mt-10 gap-7">
                <div className="flex-none w-[19rem]">
                  <div className="flex flex-col gap-5 px-5 py-6 box box--stacked">
                    {groups.map((group, groupKey) => (
                      <a
                        href=""
                        onClick={(e) => setActiveGroup(e, groupKey)}
                        key={groupKey}
                        className={clsx([
                          "flex items-center [&.active]:text-primary [&.active]:font-medium",
                          { active: group.active },
                        ])}
                      >
                        <Lucide
                          icon={group.icon}
                          className="stroke-[1.3] w-4 h-4 me-3"
                        />{" "}
                        {group.group}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <div className="grid w-full grid-cols-2 gap-x-5 gap-y-8">
                    {groups
                      .find((group) => group.active)
                      ?.pages.map((page, pageKey) => (
                        <div
                          className="box box--stacked [&_img]:hover:w-[150%] [&_img]:hover:h-[150%]"
                          key={pageKey}
                        >
                          <Link
                            to={page.pathname}
                            target="_blank"
                            className="p-2.5 cursor-pointer block"
                          >
                            <div className="h-56 overflow-hidden rounded-lg box cursor-zoom-in">
                              <img
                                className="w-full h-full transition-all duration-300 ease-in-out max-w-none"
                                src={
                                  pageImageAssets[
                                    `/src/assets/images/pages/${page.image}.jpg`
                                  ].default
                                }
                              />
                            </div>
                            <div className="flex items-center px-3 py-3 mt-2 font-medium capitalize transition-all duration-300 ease-in-out text-primary">
                              <div className="flex items-center">
                                {page.name}
                              </div>
                              <Lucide
                                icon="ArrowRight"
                                className="w-5 h-5 stroke-[1] ms-auto"
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full" id="frameworks">
              <div
                className={clsx([
                  "text-3xl font-medium relative",
                  "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ms-[25%]",
                ])}
              >
                <div className="absolute inset-x-0 w-48 h-48 mx-auto rounded-full -mt-36 z-[-1]">
                  <div className="absolute inset-y-0 w-1/2 my-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute bottom-0 start-0 w-1/2 rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute inset-x-0 bottom-0 w-1/2 mx-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute bottom-0 end-0 w-1/2 rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute inset-y-0 end-0 w-1/2 my-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                  <div className="absolute inset-x-0 top-0 w-1/2 mx-auto rounded-full bg-gradient-to-b from-transparent to-theme-1/[0.05] border-theme-1/[0.13] border h-1/2"></div>
                </div>
                <div className="relative text-center z-5 text-theme-1">
                  ابزارها و چارچوب‌ها
                </div>
              </div>
              <div className="relative mt-4 text-base text-center text-slate-500/80 z-5">
                جادوی دوتایی، طراحی خود را با دو رنگ درخشان بهبود بخشیده
                طرح‌ها!
              </div>
              <div className="-mx-2.5 mt-10 px-20">
                <div className="flex flex-wrap justify-center w-full gap-y-8">
                  <div className="w-1/3 px-2.5">
                    <div className="flex flex-col items-center p-5 box box--stacked">
                      <div className="w-12 h-12">
                        <img
                          src={
                            frameworkImageAssets[
                              `/src/assets/images/frameworks/react.png`
                            ].default
                          }
                        />
                      </div>
                      <div className="mt-4 text-base font-medium">
                        React 18+
                      </div>
                      <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
                        React 18+ brings the latest advancements to the React
                        library, offering improved features and optimizations to
                        empower your development projects.
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2.5">
                    <div className="flex flex-col items-center p-5 box box--stacked">
                      <div className="w-12 h-12">
                        <img
                          src={
                            frameworkImageAssets[
                              `/src/assets/images/frameworks/tailwindcss.png`
                            ].default
                          }
                        />
                      </div>
                      <div className="mt-4 text-base font-medium">
                        تیلویند سی‌اس‌اس ۳
                      </div>
                      <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
                        تیلویند سی‌اس‌اس ۳ introduces the newest features and
                        enhancements, further expanding the capabilities of the
                        popular چارچوب سی‌اس‌اس اولویت‌بندی‌شده برای کاربردی.
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2.5">
                    <div className="flex flex-col items-center p-5 box box--stacked">
                      <div className="w-12 h-12">
                        <img
                          src={
                            frameworkImageAssets[
                              `/src/assets/images/frameworks/vite.png`
                            ].default
                          }
                        />
                      </div>
                      <div className="mt-4 text-base font-medium">ویت ۳</div>
                      <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
                        ویت ۳ is the latest iteration of the Vite JavaScript
                        build tool, bringing a range of performance improvements
                        and new ویژگی‌ها برای شتاب‌بخشی فرآیند توسعه شما.
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2.5">
                    <div className="flex flex-col items-center p-5 box box--stacked">
                      <div className="w-12 h-12">
                        <img
                          src={
                            frameworkImageAssets[
                              `/src/assets/images/frameworks/headlessui.png`
                            ].default
                          }
                        />
                      </div>
                      <div className="mt-4 text-base font-medium">
                        Headless UI
                      </div>
                      <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
                        Headless UI is a set of completely unstyled, fully
                        accessible UI components, designed to integrate
                        seamlessly with your design system or style. It allows
                        you to build fully customized UI.
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2.5">
                    <div className="flex flex-col items-center p-5 box box--stacked">
                      <div className="w-12 h-12">
                        <img
                          src={
                            frameworkImageAssets[
                              `/src/assets/images/frameworks/reduxtoolkit.png`
                            ].default
                          }
                        />
                      </div>
                      <div className="mt-4 text-base font-medium">
                        Redux Toolkit
                      </div>
                      <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
                        Redux Toolkit is the official, opinionated,
                        batteries-included toolset for efficient Redux
                        development. It simplifies the Redux workflow for
                        managing your application's state.
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2.5">
                    <div className="flex flex-col items-center p-5 box box--stacked">
                      <div className="w-12 h-12">
                        <img
                          src={
                            frameworkImageAssets[
                              `/src/assets/images/frameworks/typescript.png`
                            ].default
                          }
                        />
                      </div>
                      <div className="mt-4 text-base font-medium">
                        Typescript
                      </div>
                      <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
                        TypeScript is a superset of JavaScript that provides
                        static typing, enabling developers to catch errors and
                        bugs in their code early in the development process.
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2.5">
                    <div className="flex flex-col items-center p-5 box box--stacked">
                      <div className="w-12 h-12">
                        <img
                          src={
                            frameworkImageAssets[
                              `/src/assets/images/frameworks/postcss.png`
                            ].default
                          }
                        />
                      </div>
                      <div className="mt-4 text-base font-medium">PostCSS</div>
                      <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
                        پست‌سی‌اس‌اس ابزاری برای تبدیل سی‌اس‌اس با جاوااسکریپت است.
                        plugins. These plugins can lint your CSS, support
                        variables and mixins, transpile future CSS syntax,
                        inline images, and more.
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2.5">
                    <div className="flex flex-col items-center p-5 box box--stacked">
                      <div className="w-12 h-12">
                        <img
                          src={
                            frameworkImageAssets[
                              `/src/assets/images/frameworks/chartjs.png`
                            ].default
                          }
                        />
                      </div>
                      <div className="mt-4 text-base font-medium">ChartJs</div>
                      <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
                        نمودار.js is a JavaScript library that allows you to
                        create various types of charts and graphs on web pages.
                        It is an easy-to-use and flexible library that supports
                        different chart types.
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2.5">
                    <div className="flex flex-col items-center p-5 box box--stacked">
                      <div className="w-12 h-12">
                        <img
                          src={
                            frameworkImageAssets[
                              `/src/assets/images/frameworks/ckeditor.png`
                            ].default
                          }
                        />
                      </div>
                      <div className="mt-4 text-base font-medium">CKEditor</div>
                      <div className="pb-2 mt-2 leading-relaxed text-center text-slate-500">
                        CKEditor is a popular rich text editor for the web,
                        known for its flexibility and feature-rich capabilities.
                        It allows users to create and edit content with a wide
                        range of formatting options.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-20 -mt-24">
              <div className="p-1 box box--stacked">
                <div
                  className={clsx([
                    "relative px-20 py-20 overflow-hidden bg-gradient-to-b from-theme-1 to-theme-2 rounded-[0.6rem]",
                    "after:content-[''] after:h-full after:w-full after:ease-in-out after:duration-300 after:top-0 after:absolute after:start-0 after:bg-texture-white after:bg-contain after:bg-[center_-5rem] after:bg-no-repeat",
                  ])}
                >
                  <div className="relative z-10 w-96">
                    <div className="text-xl font-medium text-white">
                      چرا تیلوایس را انتخاب کنیم
                    </div>
                    <div className="mt-4 text-base leading-relaxed text-white/70">
                      قدرت تیلوایس، قالب مدیریتی کارآمد و
                      قالب مدیریتی کاربرپسند که پروژه شما را به ارتفاعات جدیدی می‌رساند.
                      ارتفاعات جدید. با ترکیب کاملی از نوآوری و
                      وظیفه، تیلوایس بهترین راه حل را برای
                      تجربه توسعه بی‌درز و دلپذیر ارائه می‌دهد.
                    </div>
                    <Link to="/">
                      <Button
                        variant="primary"
                        rounded
                        className="px-8 py-2.5 mt-7 bg-white/5 border-white/[0.15]"
                      >
                        مشاهده دمو
                      </Button>
                    </Link>
                  </div>
                  <div className="absolute top-0 end-0 w-3/4 h-[120%] -rotate-[9deg] -mt-10 rounded-[0.6rem] overflow-hidden box p-1 -me-[23%]">
                    <img
                      className="w-full h-full rounded-[0.6rem]"
                      src={
                        themesImageAssets[
                          `/src/assets/images/themes/${
                            themes[_.random(0, themes.length - 1)].name
                          }.png`
                        ].default
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full" id="pricing">
              <div
                className={clsx([
                  "text-3xl font-medium relative",
                  "before:content-[''] before:bg-gradient-to-b before:from-transparent before:via-slate-100/80 before:to-slate-100 before:inset-0 before:absolute before:h-[360%] before:w-[150%] before:-mt-[4.5rem] before:-ms-[25%]",
                ])}
              >
                <div className="absolute inset-x-0 w-36 h-36 mx-auto -mt-[5.5rem] border rounded-full border-theme-1/[0.13] z-[-1] flex items-center justify-center">
                  <div className="w-16 h-16 border rounded-full border-theme-1/20"></div>
                  <div className="absolute w-10 h-10 -mt-10 border rounded-full -ms-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 -ms-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 border rounded-full -mt-[13rem] bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 -me-36 border rounded-full -mt-40 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                  <div className="absolute w-10 h-10 -mt-10 border rounded-full -me-52 bg-gradient-to-b from-transparent to-theme-1/[0.03] border-theme-1/[0.13]"></div>
                </div>
                <div className="relative text-center z-5 text-theme-1">
                  طرح‌های قیمت‌گذاری
                </div>
              </div>
              <div className="relative mt-4 text-base text-center text-slate-500/80 z-5">
                طیفی از استایل‌ها را کشف کنید، 11 نوع تم جذاب در دسترس!
                در دسترس انگشتان شما!
              </div>
              <div className="flex w-full px-24 mt-10 gap-7">
                <div className="flex w-full box box--stacked">
                  <div className="w-full pt-[137px]">
                    <div className="px-5 py-5">
                      <div className="flex items-center px-5 py-4 font-medium rounded-md bg-slate-100/60">
                        تعداد محصولات نهایی
                      </div>
                      <div className="px-5 py-4 font-medium rounded-md">
                        استفاده در یک محصول نهایی
                      </div>
                      <div className="flex items-center px-5 py-4 font-medium rounded-md bg-slate-100/60">
                        استفاده در یک محصول نهایی رایگان
                        <Tippy as="a" content="بیشتر than one end user allowed">
                          <Lucide
                            className="w-4 h-4 ms-2 stroke-[1.3] text-slate-500"
                            icon="Info"
                          />
                        </Tippy>
                      </div>
                      <div className="px-5 py-4 font-medium rounded-md">
                        استفاده در یک محصول نهایی که به فروش می‌رسد
                      </div>
                      <div className="flex items-center px-5 py-4 font-medium rounded-md bg-slate-100/60">
                        محصولات/خدمات درخواستی
                        <Tippy
                          as="a"
                          content="E.g. 'made to order' or 'create your own' apps and sites"
                        >
                          <Lucide
                            className="w-4 h-4 ms-2 stroke-[1.3] text-slate-500"
                            icon="Info"
                          />
                        </Tippy>
                      </div>
                      <div className="px-5 py-4 font-medium rounded-md">
                        استفاده در آیتم‌ها/قالب‌های موجود
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-none p-5 border-l border-dashed w-72">
                    <div className="flex flex-col items-center gap-4 pt-3 pb-6 border-b border-dashed">
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="Zap"
                          className="w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                      <div className="text-base font-medium">
                        مجوز معمولی
                      </div>
                    </div>
                    <div className="flex flex-col items-center py-5 mb-5 border-b border-dashed">
                      <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
                        <div className="flex items-center justify-center h-6 px-10 text-xs font-medium text-center">
                          <div className="-mt-0.5">1</div>
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md">
                        <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
                          <Lucide
                            icon="Check"
                            className="stroke-[2] text-white w-3.5 h-3.5"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
                        <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
                          <Lucide
                            icon="Check"
                            className="stroke-[2] text-white w-3.5 h-3.5"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md">
                        <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-danger/80 border-danger">
                          <Lucide
                            icon="X"
                            className="stroke-[2] text-white w-3.5 h-3.5"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
                        <div className="flex items-center justify-center h-6 px-10 text-xs font-medium text-center">
                          <div className="-mt-0.5">
                            یک مجوز برای هر محصول نهایی سفارشی
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md">
                        <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-danger/80 border-danger">
                          <Lucide
                            icon="X"
                            className="stroke-[2] text-white w-3.5 h-3.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-medium text-center">$25</div>
                    <Button
                      as="a"
                      target="_blank"
                      href="https://themeforest.net/item/tailwise-intuitive-tailwind-dashboard-kit/48659596"
                      rounded
                      variant="primary"
                      className="mt-5"
                    >
                      انتخاب کنید
                    </Button>
                  </div>
                  <div className="flex flex-col flex-none p-5 border-l border-dashed w-72">
                    <div className="flex flex-col items-center gap-4 pt-3 pb-6 border-b border-dashed">
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full border-primary/10 bg-primary/10">
                        <Lucide
                          icon="ShieldCheck"
                          className="w-4 h-4 text-primary fill-primary/10"
                        />
                      </div>
                      <div className="text-base font-medium">
                        مجوز گسترده
                      </div>
                    </div>
                    <div className="flex flex-col items-center py-5 mb-5 border-b border-dashed">
                      <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
                        <div className="flex items-center justify-center h-6 px-10 text-xs font-medium text-center">
                          <div className="-mt-0.5">1</div>
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md">
                        <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
                          <Lucide
                            icon="Check"
                            className="stroke-[2] text-white w-3.5 h-3.5"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
                        <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
                          <Lucide
                            icon="Check"
                            className="stroke-[2] text-white w-3.5 h-3.5"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md">
                        <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-primary/80 border-primary">
                          <Lucide
                            icon="Check"
                            className="stroke-[2] text-white w-3.5 h-3.5"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md bg-slate-100/60">
                        <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-danger/80 border-danger">
                          <Lucide
                            icon="X"
                            className="stroke-[2] text-white w-3.5 h-3.5"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-3.5 rounded-md">
                        <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-danger/80 border-danger">
                          <Lucide
                            icon="X"
                            className="stroke-[2] text-white w-3.5 h-3.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-medium text-center">$799</div>
                    <Button
                      as="a"
                      target="_blank"
                      href="https://themeforest.net/item/tailwise-intuitive-tailwind-dashboard-kit/48659596"
                      rounded
                      variant="primary"
                      className="mt-5"
                    >
                      انتخاب کنید
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
