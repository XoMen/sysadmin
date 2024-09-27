import _ from "lodash";
import products, { type Product } from "./products";
import users, { type User } from "./users";
import dayjs from "dayjs";

export interface Review {
  id: number;
  product: Product;
  user: User;
  rating: number;
  comment: string;
  date: string;
}

const fakers = {
  fakeReviews() {
    const reviews: Array<Review> = [
      {
        id: 1,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 4.5,
        comment: "محصول عالی، کیفیت ساخت بسیار خوبی دارد.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 2,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 3.2,
        comment: "عملکرد متوسط، می‌توانست بهتر باشد.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 3,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 5.0,
        comment: "کاملاً عاشقش هستم! بهترین خرید تا به حال.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 4,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 2.8,
        comment: "ارزش خرید ندارد، ناامید کننده است.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 5,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 4.0,
        comment: "ارزش خوبی برای پول دارد، به عنوان انتظار عمل می‌کند.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 6,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 4.7,
        comment: "محصول متعجب‌کننده، بسیار پیشنهاد می‌شود.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 7,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 3.5,
        comment: "محصول مناسبی است، اما برخی ایرادات دارد.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 8,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 4.2,
        comment: "از خرید راضی هستم، کیفیت خوبی دارد.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 9,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 3.0,
        comment: "آنچه من انتظار داشتم نیست، نیاز به بهبود دارد.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
      {
        id: 10,
        product: products.fakeProducts()[0],
        user: users.fakeUsers()[0],
        rating: 4.8,
        comment: "محصول برجسته، انتظاراتم را برآورده کرد.",
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
      },
    ];

    return _.shuffle(reviews);
  },
};

export default fakers;
