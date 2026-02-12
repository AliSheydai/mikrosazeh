export interface NavItem {
    id: string | number;
    title: string;
    href: string;
    description?: string;
    count?: number | string;
    isComingSoon?: boolean;
    isNew?: boolean;
    isLab?: boolean;
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

export const navigationSections: NavSection[] = [
    {
        title: "شروع به کار",
        items: [
            {
                id: "intro",
                title: "نصب و راه‌اندازی",
                href: "/docs",
                description: "راهنمای معرفی و نحوه استفاده",
            },
        ],
    },
    {
        title: "کامپوننت‌ها",
        items: [
            {
                id: 1,
                title: "ورودی‌های هوش‌مصنوعی",
                href: "/docs/components/ai-input",
                description: "کامپوننت‌های مدرن رابط چت مبتنی بر هوش مصنوعی",
                count: 16,
            },
            {
                id: 2,
                title: "هشدارها",
                href: "/docs/components/alert",
                description: "کامپوننت‌ها و طرح‌بندی‌های هشدار",
                count: 7,
            },
            {
                id: 3,
                title: "دکمه",
                href: "/docs/components/button",
                description: "کامپوننت‌های دکمه تعاملی همراه با انیمیشن",
                count: 10,
            },
            {
                id: 4,
                title: "کارت",
                href: "/docs/components/card",
                description: "کارت‌های چندمنظوره و الگوهای آنها",
                count: 7,
            },
            {
                id: 5,
                title: "پرسش‌های متداول",
                href: "/docs/components/faq",
                description: "پرسش‌های متداول",
                count: 4,
            },
            {
                id: 6,
                title: "ورودی‌ها",
                href: "/docs/components/input",
                description: "کامپوننت‌های بیشتر به‌زودی",
                count: 10,
            },
            {
                id: 7,
                title: "فهرست",
                href: "/docs/components/list",
                description: "کامپوننت‌ها و الگوهای فهرست",
                count: 6,
            },
            {
                id: 8,
                title: "قیمت‌گذاری",
                href: "/docs/components/pricing",
                description: "الگوها و کامپوننت‌های قیمت‌گذاری",
                count: 4,
                isNew: true,
            },
            {
                id: 9,
                title: "نمایه",
                href: "/docs/components/profile",
                description: "کامپوننت‌ها و الگوهای نمایه",
                count: 5,
                isNew: true,
            },
            {
                id: 10,
                title: "متن",
                href: "/docs/components/text",
                description: "تایپوگرافی و کامپوننت‌های انیمیشنی متن",
                count: 6,
                isNew: true,
            },
        ],
    },
    {
        title: "هوک‌ها",
        items: [
            {
                id: 1,
                title: "useAutoResizeTextarea",
                href: "/docs/hooks/useAutoResizeTextarea",
            },
        ],
    },
    {
        title: "بلوک‌ها",
        items: [
            {
                id: 1,
                title: "بلوک - ۰۱",
                href: "/docs/components/block",
                isLab: true,
            },
        ],
    },
];
