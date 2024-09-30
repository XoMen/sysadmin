import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "@/components/Base/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "داشبوردها",
    {
      icon: "GaugeCircle",
      pathname: "/",
      title: "تجارت الکترونیک",
    },
    {
      icon: "Settings",
      pathname: "/settings-panel",
      title: "تنظیمات پنل",
    },
    // {
    //   icon: "ActivitySquare",
    //   pathname: "/dashboard-overview-2",
    //   title: "مدیریت ارتباط با مشتریان",
    // },
    // {
    //   icon: "Album",
    //   pathname: "/dashboard-overview-3",
    //   title: "بیمارستان",
    // },
    // {
    //   icon: "BookMarked",
    //   pathname: "/dashboard-overview-4",
    //   title: "کارخانه",
    // },
    // {
    //   icon: "HardDrive",
    //   pathname: "/dashboard-overview-5",
    //   title: "بانکداری",
    // },
    // {
    //   icon: "MousePointerSquare",
    //   pathname: "/dashboard-overview-6",
    //   title: "کافه",
    // },
    // {
    //   icon: "ShieldHalf",
    //   pathname: "/dashboard-overview-7",
    //   title: "رمزارز",
    // },
    // {
    //   icon: "Building",
    //   pathname: "/dashboard-overview-8",
    //   title: "هتل",
    // },
    // "برنامه‌ها",
    // {
    //   icon: "GanttChartSquare",
    //   pathname: "/inbox",
    //   title: "صندوق دریافت",
    //   badge: 4,
    // },
    // {
    //   icon: "PanelRightClose",
    //   pathname: "/file-manager-list",
    //   title: "مدیریت فایل - لیست",
    // },
    // {
    //   icon: "PanelTopClose",
    //   pathname: "/file-manager-grid",
    //   title: "مدیریت فایل - شبکه",
    // },
    // {
    //   icon: "PanelTopClose",
    //   pathname: "/point-of-sale",
    //   title: "نقطه فروش",
    // },
    // {
    //   icon: "MailOpen",
    //   pathname: "/chat",
    //   title: "چت",
    // },
    // {
    //   icon: "CalendarRange",
    //   pathname: "/calendar",
    //   title: "تقویم",
    // },
    // "ابزارک‌های کاربری",
    // {
    //   icon: "Album",
    //   pathname: "/creative",
    //   title: "خلاقانه",
    // },
    // {
    //   icon: "ActivitySquare",
    //   pathname: "/dynamic",
    //   title: "پویا",
    // },
    // {
    //   icon: "Keyboard",
    //   pathname: "/interactive",
    //   title: "تعاملی",
    // },
    // "مدیریت کاربر",
    // {
    //   icon: "SquareUser",
    //   pathname: "/users",
    //   title: "کاربران",
    // },
    // {
    //   icon: "CakeSlice",
    //   pathname: "/departments",
    //   title: "بخش‌ها",
    // },
    // {
    //   icon: "PackagePlus",
    //   pathname: "/add-user",
    //   title: "افزودن کاربر",
    // },
    // "داشبورد شخصی",
    // {
    //   icon: "Presentation",
    //   pathname: "/profile-overview",
    //   title: "مرور پروفایل",
    // },
    // {
    //   icon: "CalendarRange",
    //   pathname: "/profile-overview?page=events",
    //   title: "رویدادها",
    // },
    // {
    //   icon: "Medal",
    //   pathname: "/profile-overview?page=achievements",
    //   title: "دستاوردها",
    // },
    // {
    //   icon: "TabletSmartphone",
    //   pathname: "/profile-overview?page=contacts",
    //   title: "مخاطبین",
    // },
    // {
    //   icon: "Snail",
    //   pathname: "/profile-overview?page=default",
    //   title: "پیش‌فرض",
    // },
    // "تنظیمات عمومی",
    // {
    //   icon: "Briefcase",
    //   pathname: "/settings",
    //   title: "اطلاعات پروفایل",
    // },
    // {
    //   icon: "MailCheck",
    //   pathname: "/settings?page=email-settings",
    //   title: "تنظیمات ایمیل",
    // },
    // {
    //   icon: "Fingerprint",
    //   pathname: "/settings?page=security",
    //   title: "امنیت",
    // },
    // {
    //   icon: "Radar",
    //   pathname: "/settings?page=preferences",
    //   title: "ترجیحات",
    // },
    // {
    //   icon: "DoorOpen",
    //   pathname: "/settings?page=two-factor-authentication",
    //   title: "احراز هویت دو عاملی",
    // },
    // {
    //   icon: "Keyboard",
    //   pathname: "/settings?page=device-history",
    //   title: "تاریخچه دستگاه",
    // },
    // {
    //   icon: "Ticket",
    //   pathname: "/settings?page=notification-settings",
    //   title: "تنظیمات اعلان",
    // },
    // {
    //   icon: "BusFront",
    //   pathname: "/settings?page=connected-services",
    //   title: "خدمات متصل",
    // },
    // {
    //   icon: "Podcast",
    //   pathname: "/settings?page=social-media-links",
    //   title: "پیوندهای رسانه‌های اجتماعی",
    // },
    // {
    //   icon: "PackageX",
    //   pathname: "/settings?page=account-deactivation",
    //   title: "غیرفعال‌سازی حساب کاربری",
    // },
    // "حساب کاربری",
    // {
    //   icon: "PercentSquare",
    //   pathname: "/billing",
    //   title: "صورتحساب",
    // },
    // {
    //   icon: "DatabaseZap",
    //   pathname: "/invoice",
    //   title: "فاکتور",
    // },
    // "تجارت الکترونیک",
    // {
    //   icon: "BookMarked",
    //   pathname: "/categories",
    //   title: "دسته‌بندی‌ها",
    // },
    // {
    //   icon: "Compass",
    //   pathname: "/add-product",
    //   title: "افزودن محصول",
    // },
    // {
    //   icon: "Table2",
    //   pathname: "/products",
    //   title: "محصولات",
    //   subMenu: [
    //     {
    //       icon: "LayoutPanelTop",
    //       pathname: "/product-list",
    //       title: "لیست محصول",
    //     },
    //     {
    //       icon: "LayoutPanelLeft",
    //       pathname: "/product-grid",
    //       title: "شبکه محصول",
    //     },
    //   ],
    // },
    // {
    //   icon: "SigmaSquare",
    //   pathname: "/transactions",
    //   title: "تراکنش‌ها",
    //   subMenu: [
    //     {
    //       icon: "DivideSquare",
    //       pathname: "/transaction-list",
    //       title: "لیست تراکنش",
    //     },
    //     {
    //       icon: "PlusSquare",
    //       pathname: "/transaction-detail",
    //       title: "جزئیات تراکنش",
    //     },
    //   ],
    // },
    // {
    //   icon: "FileArchive",
    //   pathname: "/sellers",
    //   title: "فروشندگان",
    //   subMenu: [
    //     {
    //       icon: "FileImage",
    //       pathname: "/seller-list",
    //       title: "لیست فروشندگان",
    //     },
    //     {
    //       icon: "FileBox",
    //       pathname: "/seller-detail",
    //       title: "جزئیات فروشنده",
    //     },
    //   ],
    // },
    // {
    //   icon: "Goal",
    //   pathname: "/reviews",
    //   title: "نقد و بررسی",
    // },
    // "احراز هویت",
    // {
    //   icon: "BookKey",
    //   pathname: "login",
    //   title: "ورود",
    // },
    // {
    //   icon: "BookLock",
    //   pathname: "register",
    //   title: "ثبت نام",
    // },
    // "اجزاء",
    // {
    //   icon: "LayoutPanelLeft",
    //   title: "Table",
    //   subMenu: [
    //     {
    //       icon: "FlipVertical",
    //       pathname: "/regular-table",
    //       title: "جدول معمولی",
    //     },
    //     {
    //       icon: "FlipHorizontal",
    //       pathname: "/tabulator",
    //       title: "Tabulator",
    //     },
    //   ],
    // },
    // {
    //   icon: "MemoryStick",
    //   title: "پوشش",
    //   subMenu: [
    //     {
    //       icon: "MenuSquare",
    //       pathname: "/modal",
    //       title: "مودال",
    //     },
    //     {
    //       icon: "Newspaper",
    //       pathname: "/slideover",
    //       title: "سرریز",
    //     },
    //     {
    //       icon: "PanelBottom",
    //       pathname: "/notification",
    //       title: "اطلاعیه",
    //     },
    //   ],
    // },
    // {
    //   icon: "Package2",
    //   pathname: "/tab",
    //   title: "تب",
    // },
    // {
    //   icon: "Pocket",
    //   pathname: "/accordion",
    //   title: "آکاردئون",
    // },
    // {
    //   icon: "PlusSquare",
    //   pathname: "/button",
    //   title: "دکمه",
    // },
    // {
    //   icon: "Presentation",
    //   pathname: "/alert",
    //   title: "هشدار",
    // },
    // {
    //   icon: "ShieldEllipsis",
    //   pathname: "/progress-bar",
    //   title: "نوار پیشرفت",
    // },
    // {
    //   icon: "Clapperboard",
    //   pathname: "/tooltip",
    //   title: "راهنمای ابزار",
    // },
    // {
    //   icon: "FlipVertical",
    //   pathname: "/dropdown",
    //   title: "کشویی",
    // },
    // {
    //   icon: "FileType2",
    //   pathname: "/typography",
    //   title: "تایپوگرافی",
    // },
    // {
    //   icon: "Aperture",
    //   pathname: "/icon",
    //   title: "آیکون",
    // },
    // {
    //   icon: "Droplets",
    //   pathname: "/loading-icon",
    //   title: "آیکون بارگذاری",
    // },
    // {
    //   icon: "GalleryHorizontalEnd",
    //   pathname: "/regular-form",
    //   title: "فرم معمولی",
    // },
    // {
    //   icon: "Microwave",
    //   pathname: "/datepicker",
    //   title: "انتخاب تاریخ",
    // },
    // {
    //   icon: "Disc3",
    //   pathname: "/tom-select",
    //   title: "انتخاب تام",
    // },
    // {
    //   icon: "Sandwich",
    //   pathname: "/file-upload",
    //   title: "بارگذاری فایل",
    // },
    // {
    //   icon: "HopOff",
    //   pathname: "/wysiwyg-editor",
    //   title: "ویرایشگر Wysiwyg",
    // },
    // {
    //   icon: "ClipboardType",
    //   pathname: "/validation",
    //   title: "اعتبارسنجی",
    // },
    // {
    //   icon: "PieChart",
    //   pathname: "/chart",
    //   title: "نمودار",
    // },
    // {
    //   icon: "KanbanSquare",
    //   pathname: "/slider",
    //   title: "اسلایدر",
    // },
    // {
    //   icon: "Image",
    //   pathname: "/image-zoom",
    //   title: "بزرگنمایی تصویر",
    // },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
