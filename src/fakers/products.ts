import _ from "lodash";
import dayjs from "dayjs";
import categories, { type Category } from "./categories";
import users, { type User } from "./users";

export interface Product {
  images: Array<{
    path: string;
    uploadDate: string;
  }>;
  name: string;
  price: number;
  isActive: boolean;
  stock: number;
  category: Category;
  buyers: Array<User>;
  slug: string;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/products/*.{jpg,jpeg,png,svg}", { eager: true });

const filteredImages = Object.keys(imageAssets).filter(
  (file) => file.search("400x400") !== -1
);

const fakers = {
  fakeProducts() {
    const products: Array<Product> = [
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "هدفون‌های بی‌سیم با قابلیت لغو نویز",
        price: 149.99,
        isActive: true,
        stock: 50,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "wireless-noise-cancelling-headphones",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "پایه شارژر گوشی هوشمند",
        price: 19.99,
        isActive: false,
        stock: 25,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "smartphone-charging-dock",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "تلویزیون هوشمند 4K Ultra HD",
        price: 599.99,
        isActive: true,
        stock: 75,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "ultra-hd-4k-smart-tv",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "دوربین حرفه‌ای دیجیتال",
        price: 799.99,
        isActive: true,
        stock: 60,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "professional-dslr-camera",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "ماوس بازی بی‌سیم",
        price: 49.99,
        isActive: false,
        stock: 10,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "wireless-gaming-mouse",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "لپ‌تاپ با عملکرد بالا",
        price: 1099.99,
        isActive: true,
        stock: 30,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "high-performance-laptop",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "بلندگوی بلوتوث با تقویت بیس",
        price: 79.99,
        isActive: true,
        stock: 40,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "bluetooth-speaker-with-bass-boost",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "هدفون بی‌سیم با میکروفون",
        price: 79.99,
        isActive: false,
        stock: 20,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "wireless-earbuds-with-mic",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "قوری قهوه‌ساز 8 فنجانی",
        price: 39.99,
        isActive: true,
        stock: 55,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "8-cup-coffee-maker",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "دوربین امنیتی هوشمند خانه",
        price: 129.99,
        isActive: true,
        stock: 15,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "smart-home-security-camera",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "هدفون‌های بی‌سیم با قابلیت لغو نویز",
        price: 149.99,
        isActive: true,
        stock: 50,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "wireless-noise-cancelling-headphones",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "پایه شارژر گوشی هوشمند",
        price: 19.99,
        isActive: false,
        stock: 25,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "smartphone-charging-dock",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "تلویزیون هوشمند 4K Ultra HD",
        price: 599.99,
        isActive: true,
        stock: 75,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "ultra-hd-4k-smart-tv",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "دوربین حرفه‌ای دیجیتال",
        price: 799.99,
        isActive: true,
        stock: 60,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "professional-dslr-camera",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "ماوس بازی بی‌سیم",
        price: 49.99,
        isActive: false,
        stock: 10,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "wireless-gaming-mouse",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "لپ‌تاپ با عملکرد بالا",
        price: 1099.99,
        isActive: true,
        stock: 30,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "high-performance-laptop",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "بلندگوی بلوتوث با تقویت بیس",
        price: 79.99,
        isActive: true,
        stock: 40,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "bluetooth-speaker-with-bass-boost",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "هدفون بی‌سیم با میکروفون",
        price: 79.99,
        isActive: false,
        stock: 20,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "wireless-earbuds-with-mic",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "قوری قهوه‌ساز 8 فنجانی",
        price: 39.99,
        isActive: true,
        stock: 55,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "8-cup-coffee-maker",
      },
      {
        images: [
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
          {
            path: imageAssets[
              filteredImages[_.random(0, filteredImages.length - 1)]
            ].default,
            uploadDate: dayjs
              .unix(_.random(1586584776897, 1672333200000) / 1000)
              .format("DD MMMM YYYY"),
          },
        ],
        name: "دوربین امنیتی هوشمند خانه",
        price: 129.99,
        isActive: true,
        stock: 15,
        category: categories.fakeCategories()[0],
        buyers: users.fakeUsers(),
        slug: "smart-home-security-camera",
      },
      // Add more products here
    ];

    return _.shuffle(products);
  },
};

export default fakers;
