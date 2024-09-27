import _ from "lodash";
import dayjs from "dayjs";
import categories, { type Category } from "./categories";
import users, { type User } from "./users";

export interface Post {
  title: string;
  content: string;
  date: string;
  tags: string[];
  image: string;
  category: Category;
  author: User;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/products/*.{jpg,jpeg,png,svg}", { eager: true });

const filteredImages = Object.keys(imageAssets).filter(
  (file) => file.search("400x400") !== -1
);

const fakers = {
  fakePosts() {
    const posts: Array<Post> = [
      {
        title: "آغاز کار با TypeScript",
        content:
          "TypeScript یک زیرمجموعه از JavaScript است که به JavaScript ساده ترجمه می شود. این امکان را فراهم می کند که نوع‌های استاتیک اختیاری، کلاس‌ها و رابط‌ها را استفاده کنید. یکی از مزایای کلیدی استفاده از TypeScript کد آن است navigation and refactoring capabilities. By adding type annotations, you can catch errors and bugs during the development phase, making it a powerful tool for building scalable and robust برنامه‌ها.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["TypeScript", "JavaScript", "Programming"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      {
        title: "Introduction to Artificial Intelligence",
        content:
          "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction. AI is being used in various fields, including healthcare, finance, and automotive. It enables machines to perform tasks that typically require human intelligence. Some of the popular applications of AI include natural language processing, speech recognition, and computer vision.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["AI", "Machine Learning", "Technology"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      {
        title: "قدرت چارچوب ری‌اکت",
        content:
          "ری‌اکت یک کتابخانه‌ی جاوااسکریپت برای ساخت رابط‌های کاربری است. این به توسعه‌دهندگان اجازه می‌دهد تا برنامه‌های وب بزرگی را بدون نیاز به بارگذاری مجدد صفحه، ایجاد کنند. ری‌اکت می‌تواند برای create single-page applications and mobile برنامه‌ها. It is efficient and flexible, making it one of the most popular choices for front-end development. React's component-based architecture enables building reusable UI components, resulting in faster development and easier maintenance.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["React", "JavaScript", "Front-end Development"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      {
        title: "تحلیل عمیق در اکوسیستم نود.جی‌اس",
        content:
          "نود.جی‌اس یک محیط اجرای جاوااسکریپت منبع باز، چند‌پلتفرمی است که به توسعه‌دهندگان امکان می‌دهد برنامه‌های سمت سرور و شبکه‌سازی را بسازند. این از یک مدل ورودی/خروجی غیر مسدود و رویداد-محور استفاده می‌کند که آن را سبک و کارآمد برای real-time برنامه‌ها. Node.js has a vast ecosystem of libraries and frameworks that enable developers to create scalable and high-performance برنامه‌ها. Some of the popular frameworks include Express.js, Nest.js, and Koa.js.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["Node.js", "JavaScript", "Backend Development"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      {
        title: "فهم زبان برنامه‌نویسی پایتون",
        content:
          "پایتون یک زبان برنامه‌نویسی سطح بالا است که برای سادگی و خوانایی آن شناخته می‌شود. این زبان پشتیبانی از چندین الگوی برنامه‌نویسی را از جمله رویه‌ای، شیءگرا و تابعی دارد. پایتون به طور گسترده در حوزه‌های مختلف استفاده می‌شود. such as web development, data science, machine learning, and automation. Its extensive standard library and community support make it an ideal choice for beginners and experienced developers alike.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["Python", "Programming", "Scripting"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      {
        title: "Exploring the World of Cybersecurity",
        content:
          "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It includes a range of security measures to safeguard information and prevent unauthorized access. Cybersecurity professionals use various techniques such as encryption, penetration testing, and firewalls to ensure the security of data and systems. With the increasing frequency and sophistication of cyber threats, the demand for cybersecurity experts has grown significantly in recent years.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["Cybersecurity", "اطلاعاتrmation امنیت", "Technology"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      {
        title: "تسلط بر ساختارها و الگوریتم‌های داده",
        content:
          "ساختارها و الگوریتم‌های داده مفاهیم اساسی در علوم کامپیوتر هستند که امکان سازماندهی و دستکاری داده‌ها را به صورت کارآمد فراهم می‌کنند. آن‌ها اساس حل مسائل محاسباتی پیچیده و بهینه‌سازی عملکرد را تشکیل می‌دهند of software برنامه‌ها. Understanding data structures such as arrays, linked lists, and trees, along with algorithms like sorting and searching, is crucial for building robust and scalable software systems.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["Data Structures", "Algorithms", "Computer Science"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      {
        title: "The Art of کاربر Experience Design",
        content:
          "کاربر Experience (UX) design focuses on creating meaningful and relevant experiences for users. It involves understanding user behaviors, needs, and motivations to design intuitive and user-friendly products. UX designers use various techniques such as wireframing, prototyping, and user testing to ensure that the final product meets user expectations and delivers a seamless با اندازه‌های مختلف آزمایش کنید تا اندازه‌ای را پیدا کنید که بهترین تطابق با اهداف طراحی شما را داشته باشد و تجربه کاربری بهینه را ارائه دهد. Good UX design can lead to increased customer satisfaction and loyalty.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["UX Design", "کاربر Experience", "Design"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      {
        title: "کاوش در دنیای محاسبات ابری",
        content:
          "محاسبات ابری به ارائه خدمات محاسباتی اشاره دارد، از جمله سرورها، ذخیره‌سازی، پایگاه‌های داده، شبکه‌ها، نرم‌افزارها، تجزیه و تحلیل و هوش، از طریق اینترنت. این امکان را برای نوآوری سریع‌تر، منابع انعطاف‌پذیر و اقتصادی ارائه می‌دهد scale. Cloud computing providers such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) offer a wide range of services that enable businesses to scale and grow without the need for large upfront investments in infrastructure.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["Cloud Computing", "Technology", "Infrastructure"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      {
        title: "The Evolution of Machine Learning",
        content:
          "Machine Learning (ML) is a subset of artificial intelligence that focuses on enabling systems to learn and improve from experience without being explicitly programmed. It uses algorithms and statistical models to perform tasks without relying on explicit instructions. Machine learning is used in various applications such as data analysis, pattern recognition, and predictive modeling. With advancements in technology and the availability of large datasets, machine learning has become increasingly popular in recent years.",
        author: users.fakeUsers()[0],
        date: dayjs
          .unix(_.random(1586584776897, 1672333200000) / 1000)
          .format("DD MMMM YYYY"),
        tags: ["Machine Learning", "AI", "Data Science"],
        category: categories.fakeCategories()[0],
        image:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
      },
      // Add more posts here
    ];
    return _.shuffle(posts);
  },
};

export default fakers;
