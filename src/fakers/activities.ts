import _ from "lodash";
import dayjs from "dayjs";

type UploadedFile = {
  filename: string;
  size: string;
  fileType: string;
};

export interface Activity {
  date: string;
  activity: string;
  activityDetails?: string;
  uploadedFiles?: UploadedFile[];
  statusBadge: string;
  images?: string[];
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/projects/*.{jpg,jpeg,png,svg}", { eager: true });

const filteredImages = Object.keys(imageAssets).filter(
  (file) => file.search("400x400") !== -1
);

const fakers = {
  fakeActivities() {
    const activities: Activity[] = [
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "اسناد بارگذاری شدند",
        activityDetails: "اسناد مهم پروژه بارگذاری شدند",
        uploadedFiles: [
          {
            filename: "document1.pdf",
            size: "2.5MB",
            fileType: "PDF",
          },
          {
            filename: "document2.docx",
            size: "1.8MB",
            fileType: "DOCX",
          },
        ],
        statusBadge: "تکمیل شده",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "با موفقیت وارد شد",
        activityDetails: "داشبورد دسترسی داده شد",
        statusBadge: "موفقیت",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "یک صفحه‌کار بارگذاری شد",
        activityDetails: "داده‌های مالی برای فصل سوم اضافه شد",
        uploadedFiles: [
          {
            filename: "spreadsheet.xlsx",
            size: "3.4MB",
            fileType: "XLSX",
          },
        ],
        statusBadge: "تکمیل شده",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "تصویر پروفایل به‌روزرسانی شد",
        activityDetails: "تصویر پروفایل تغییر کرد",
        statusBadge: "موفقیت",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "فایل‌های کد بارگذاری شدند",
        activityDetails: "ماژول‌های کد جدید اضافه شدند",
        uploadedFiles: [
          {
            filename: "code1.js",
            size: "۳۰۰ کیلوبایت",
            fileType: "JavaScript",
          },
          {
            filename: "code2.py",
            size: "۴۵۰ کیلوبایت",
            fileType: "Python",
          },
        ],
        statusBadge: "تکمیل شده",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "5 ایمیل جدید دریافت شده است",
        activityDetails: "به‌روزرسانی‌های صندوق دریافت",
        uploadedFiles: [
          {
            filename: "presentation1.pptx",
            size: "5.2MB",
            fileType: "PPTX",
          },
          {
            filename: "presentation2.ppt",
            size: "4.5MB",
            fileType: "PPT",
          },
        ],
        statusBadge: "اطلاعات",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "فایل‌های ویدئویی بارگذاری شده",
        activityDetails: "آموزش‌های ویدئویی به اشتراک گذارده شده",
        uploadedFiles: [
          {
            filename: "ویدیو۱.mp4",
            size: "۱۵ مگابایت",
            fileType: "MP4",
          },
          {
            filename: "ویدیو۲.mov",
            size: "12.5MB",
            fileType: "MOV",
          },
        ],
        statusBadge: "تکمیل شده",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "وظیفه تکمیل شد: مرور پیشنهاد پروژه",
        activityDetails: "بررسی شد و بازخورد داده شد",
        statusBadge: "تکمیل شده",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "تصاویر بارگذاری شدند",
        activityDetails: "عکس‌های نمایه پروژه اضافه شدند",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
        statusBadge: "تکمیل شده",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "وضعیت به‌روزرسانی شد",
        activityDetails: "افکار در مورد پروژه به اشتراک گذاشته شد",
        statusBadge: "موفقیت",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "ارائه‌ها بارگذاری شدند",
        activityDetails: "اسلایدهای جلسه تیم اضافه شدند",
        uploadedFiles: [
          {
            filename: "presentation1.pptx",
            size: "5.2MB",
            fileType: "PPTX",
          },
          {
            filename: "presentation2.ppt",
            size: "4.5MB",
            fileType: "PPT",
          },
        ],
        statusBadge: "تکمیل شده",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "خروج از حساب",
        activityDetails: "از داشبورد خارج شد",
        statusBadge: "اطلاعات",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "یک درخواست دوستی دریافت شد",
        activityDetails: "درخواست دوستی از جان دریافت شد",
        images: [
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        ],
        statusBadge: "New",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "تماس جدید اضافه شد",
        activityDetails: "تماس جدید، سارا، اضافه شد",
        uploadedFiles: [
          {
            filename: "spreadsheet.xlsx",
            size: "3.4MB",
            fileType: "XLSX",
          },
        ],
        statusBadge: "موفقیت",
      },
      {
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        activity: "ضبط‌های صوتی بارگذاری شده",
        activityDetails: "قسمت‌های پادکست ضبط شده",
        uploadedFiles: [
          {
            filename: "audio1.mp3",
            size: "4.8MB",
            fileType: "MP3",
          },
          {
            filename: "audio2.wav",
            size: "6.2MB",
            fileType: "WAV",
          },
        ],
        statusBadge: "تکمیل شده",
      },
    ];

    return _.shuffle(activities);
  },
};

export default fakers;
