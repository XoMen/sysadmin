import _ from "lodash";
import { icons } from "@/components/Base/Lucide";

export interface Category {
  name: string;
  icon: keyof typeof icons;
  tags: string[];
  slug: string;
  isActive: boolean;
}

const fakers = {
  fakeCategories() {
    const categories: Array<Category> = [
      {
        name: "الکترونیک",
        icon: "Laptop",
        tags: ["Gadgets", "Tech", "Electrical"],
        slug: "electronics",
        isActive: true,
      },
      {
        name: "لباس‌ها",
        icon: "Shirt",
        tags: ["Apparel", "Fashion", "Style"],
        slug: "clothing",
        isActive: true,
      },
      {
        name: "خانه و باغ",
        icon: "DoorOpen",
        tags: ["Decor", "مبلمان", "Outdoor"],
        slug: "home-and-garden",
        isActive: false,
      },
      {
        name: "کتاب‌ها",
        icon: "Book",
        tags: ["Reading", "Literature", "Knowledge"],
        slug: "books",
        isActive: true,
      },
      {
        name: "ورزش و فضای باز",
        icon: "Trophy",
        tags: ["Fitness", "Recreation", "Nature"],
        slug: "sports-and-outdoors",
        isActive: true,
      },
      {
        name: "اسباب بازی‌ها و بازی‌ها",
        icon: "Gamepad2",
        tags: ["Play", "Entertainment", "Fun"],
        slug: "toys-and-games",
        isActive: true,
      },
      {
        name: "زیبایی و مراقبت شخصی",
        icon: "VenetianMask",
        tags: ["Beauty", "Personal Hygiene", "Self-care"],
        slug: "beauty-and-personal-care",
        isActive: true,
      },
      {
        name: "مبلمان",
        icon: "Armchair",
        tags: ["Home Decor", "Interior", "Comfort"],
        slug: "furniture",
        isActive: true,
      },
      {
        name: "جواهرات",
        icon: "Gem",
        tags: ["Accessories", "Ornaments", "Luxury"],
        slug: "jewelry",
        isActive: true,
      },
      {
        name: "غذا و خواربار",
        icon: "Cookie",
        tags: ["Food", "Groceries", "Consumables"],
        slug: "food-and-grocery",
        isActive: true,
      },
    ];
    return _.shuffle(categories);
  },
};

export default fakers;
