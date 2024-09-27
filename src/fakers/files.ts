import _ from "lodash";

export interface File {
  fileName: string;
  size: string;
  type:
    | "MP4"
    | "Empty Folder"
    | "Folder"
    | "Image"
    | "TXT"
    | "PPT"
    | "PDF"
    | "XLSX"
    | "ZIP"
    | "MP3"
    | "DOCX";
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/products/*.{jpg,jpeg,png,svg}", { eager: true });

const filteredImages = Object.keys(imageAssets).filter(
  (file) => file.search("100x100") !== -1
);

const fakers = {
  fakeFiles() {
    const files: Array<File> = [
      {
        fileName: "Annual-Report-2023.pdf",
        size: "2.5 مگابایت",
        type: "PDF",
      },
      {
        fileName: "دوتا ۲",
        type: "Folder",
        size: "112 گیگابایت",
      },
      {
        fileName: "Financial-Statements.xlsx",
        size: "1.8 مگابایت",
        type: "XLSX",
      },
      {
        fileName: "لاراول 10",
        type: "Empty Folder",
        size: "120 مگابایت",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "750 کیلوبایت",
        type: "Image",
      },
      {
        fileName: "Sales-Presentation.pptx",
        size: "3.2 مگابایت",
        type: "PPT",
      },
      {
        fileName: "Meeting-Minutes.txt",
        size: "320 کیلوبایت",
        type: "TXT",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "150 کیلوبایت",
        type: "Image",
      },
      {
        fileName: "Product_Demo.mp4",
        size: "15.4 مگابایت",
        type: "MP4",
      },
      { fileName: "مخزن", type: "Folder", size: "20 کیلوبایت" },
      {
        fileName: "Project-Documents.zip",
        size: "6.7 مگابایت",
        type: "ZIP",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "30 کیلوبایت",
        type: "Image",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "550 کیلوبایت",
        type: "Image",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "150 کیلوبایت",
        type: "Image",
      },
      {
        fileName: "Background-Music.mp3",
        size: "5.2 مگابایت",
        type: "MP3",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "1.1 مگابایت",
        type: "Image",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "20 کیلوبایت",
        type: "Image",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "50 کیلوبایت",
        type: "Image",
      },
      {
        fileName: "Marketing-Plan.docx",
        size: "1.9 مگابایت",
        type: "DOCX",
      },
      {
        fileName: "مستندات",
        type: "Empty Folder",
        size: "4 مگابایت",
      },
    ];

    return _.shuffle(files);
  },
};

export default fakers;
