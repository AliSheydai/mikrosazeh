export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export const products: Product[] = [
    {
        id: "p1",
        name: "چراغ مطالعه مدرن",
        description:
            "یک چراغ مطالعه ظریف و مینیمال با قابلیت تنظیم میزان روشنایی و دمای رنگ نور.",
        price: 890000,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "روشنایی",
    },
    {
        id: "p2",
        name: "ست قهوه‌خوری سرامیکی",
        description:
            "ست دست‌ساز شامل ۴ عدد فنجان و یک دریپر ست شده برای دم‌کردن قهوه.",
        price: 650000,
        image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "آشپزخانه",
    },
    {
        id: "p3",
        name: "کوسن کتان طرح‌دار",
        description: "کوسن نرم از جنس کتان با طراحی مینیمال و بافت بسیار باکیفیت.",
        price: 450000,
        image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "دکوراسیون",
    },
    {
        id: "p4",
        name: "ساعت دیواری چوبی",
        description: "ساعت دیواری مدرن ساخته شده از چوب طبیعی با موتور بی‌صدا (آرام‌گرد).",
        price: 790000,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "دکوراسیون",
    },
    {
        id: "p5",
        name: "گلدان بتنی مینیمال",
        description: "گلدان بتنی خاص، ایده‌آل برای گیاهان آپارتمانی و ساکولنت‌ها.",
        price: 340000,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "گیاهان",
    },
    {
        id: "p6",
        name: "ست گلدان شیشه‌ای",
        description: "مجموعه ۳ عددی گلدان شیشه‌ای در سایزهای مختلف برای دکور میز.",
        price: 550000,
        image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "دکوراسیون",
    },
    {
        id: "p7",
        name: "نظم‌دهنده بامبو",
        description: "نظم‌دهنده میز کار ساخته شده از چوب بامبو پایدار و مقاوم.",
        price: 420000,
        image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "اداری",
    },
    {
        id: "p9",
        name: "زیرلیوانی مرمر",
        description: "ست ۴ عددی زیرلیوانی سنگ مرمر با لایه محافظ پشتی برای جلوگیری از خط و خش.",
        price: 380000,
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "آشپزخانه",
    },
    {
        id: "p10",
        name: "نگهدارنده کتاب برنجی",
        description: "نگهدارنده کتاب با طراحی هندسی مدرن از جنس برنج خالص.",
        price: 680000,
        image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "اداری",
    },
    {
        id: "p11",
        name: "گلدان سرامیکی دست‌ساز",
        description: "گلدان سرامیکی لعاب‌دار دارای سوراخ تخلیه آب برای سلامت ریشه گیاه.",
        price: 480000,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "گیاهان",
    },
    {
        id: "p12",
        name: "آینه دیواری گرد",
        description: "آینه دیواری دکوراتیو با قاب فلزی بسیار ظریف و مینیمال.",
        price: 1200000,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "دکوراسیون",
    },
];