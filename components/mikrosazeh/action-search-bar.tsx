"use client"

import type React from "react"
import { useState, useEffect, useRef, type KeyboardEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Search,
  Send,
  BarChart2,
  Video,
  PlaneTakeoff,
  AudioLines,
  LayoutGrid,
  Command,
  Settings,
  FileText,
  Calendar,
  Mail,
  MessageSquare,
  Globe,
  Zap,
  Sparkles,
  Palette,
  Bookmark,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Action {
  id: string
  label: string
  icon: React.ReactNode
  description?: string
  shortcut?: string
  category?: string
  tags?: string[]
  color?: string
  isNew?: boolean
  isPinned?: boolean
  execute?: () => void
}

interface ActionCategory {
  name: string
  actions: Action[]
}

interface SearchResult {
  categories: ActionCategory[]
  recentActions: Action[]
  suggestedActions: Action[]
}

// داده‌های نمونه فارسی شده
const allActions: Action[] = [
  {
    id: "1",
    label: "رزرو بلیط",
    icon: <PlaneTakeoff className="h-4 w-4" style={{ color: "#3b82f6" }} />,
    description: "جستجو و رزرو بلیط‌های مسافرتی",
    shortcut: "⌘B",
    category: "سفر",
    tags: ["رزرو", "سفر", "بلیط"],
    color: "#3b82f6",
  },
  {
    id: "2",
    label: "خلاصه‌سازی سند",
    icon: <BarChart2 className="h-4 w-4" style={{ color: "#f97316" }} />,
    description: "خلاصه‌سازی متن با هوش مصنوعی",
    shortcut: "⌘S",
    category: "ابزارهای هوش مصنوعی",
    tags: ["هوش مصنوعی", "خلاصه", "سند"],
    color: "#f97316",
    isNew: true,
  },
  {
    id: "3",
    label: "استودیو ضبط صفحه",
    icon: <Video className="h-4 w-4" style={{ color: "#8b5cf6" }} />,
    description: "ضبط و ویرایش ویدیوهای صفحه نمایش",
    shortcut: "⌘R",
    category: "رسانه",
    tags: ["ویدیو", "ضبط", "اسکرین"],
    color: "#8b5cf6",
  },
  {
    id: "4",
    label: "گفتگو با دستیار",
    icon: <AudioLines className="h-4 w-4" style={{ color: "#10b981" }} />,
    description: "دستیار صوتی هوشمند",
    shortcut: "⌘T",
    category: "ابزارهای هوش مصنوعی",
    tags: ["صدا", "هوش مصنوعی", "دستیار"],
    color: "#10b981",
    isPinned: true,
  },
  {
    id: "5",
    label: "کتابخانه کامپوننت",
    icon: <LayoutGrid className="h-4 w-4" style={{ color: "#0ea5e9" }} />,
    description: "مشاهده مجموعه رابط کاربری",
    shortcut: "⌘L",
    category: "طراحی",
    tags: ["ui", "اجزا", "طراحی"],
    color: "#0ea5e9",
  },
  {
    id: "6",
    label: "تنظیمات سیستم",
    icon: <Settings className="h-4 w-4" style={{ color: "#6b7280" }} />,
    description: "پیکربندی ترجیحات سیستم",
    shortcut: "⌘,",
    category: "سیستم",
    tags: ["تنظیمات", "کانفیگ"],
    color: "#6b7280",
  },
  {
    id: "7",
    label: "ایجاد سند جدید",
    icon: <FileText className="h-4 w-4" style={{ color: "#ec4899" }} />,
    description: "ساخت یک فایل متنی جدید",
    shortcut: "⌘N",
    category: "بهره‌وری",
    tags: ["سند", "ایجاد", "جدید"],
    color: "#ec4899",
  },
  {
    id: "8",
    label: "برنامه‌ریزی جلسه",
    icon: <Calendar className="h-4 w-4" style={{ color: "#14b8a6" }} />,
    description: "افزودن رویداد به تقویم",
    shortcut: "⌘M",
    category: "بهره‌وری",
    tags: ["تقویم", "جلسه", "زمان‌بندی"],
    color: "#14b8a6",
    isNew: true,
  },
  {
    id: "9",
    label: "نوشتن ایمیل",
    icon: <Mail className="h-4 w-4" style={{ color: "#6366f1" }} />,
    description: "ارسال ایمیل جدید",
    shortcut: "⌘E",
    category: "ارتباطات",
    tags: ["ایمیل", "نامه"],
    color: "#6366f1",
  },
  {
    id: "10",
    label: "شروع چت",
    icon: <MessageSquare className="h-4 w-4" style={{ color: "#f43f5e" }} />,
    description: "آغاز یک گفتگوی جدید",
    shortcut: "⌘C",
    category: "ارتباطات",
    tags: ["چت", "پیام", "گفتگو"],
    color: "#f43f5e",
  },
  {
    id: "11",
    label: "مرور اینترنت",
    icon: <Globe className="h-4 w-4" style={{ color: "#0284c7" }} />,
    description: "باز کردن مرورگر وب",
    shortcut: "⌘I",
    category: "وب",
    tags: ["مرورگر", "اینترنت", "وب"],
    color: "#0284c7",
  },
  {
    id: "12",
    label: "دسترسی سریع",
    icon: <Zap className="h-4 w-4" style={{ color: "#eab308" }} />,
    description: "ابزارهای پرکاربرد",
    shortcut: "⌘Q",
    category: "سیستم",
    tags: ["سریع", "ابزار"],
    color: "#eab308",
    isPinned: true,
  },
  {
    id: "13",
    label: "تولید تصویر",
    icon: <Sparkles className="h-4 w-4" style={{ color: "#a855f7" }} />,
    description: "ساخت تصویر با هوش مصنوعی",
    shortcut: "⌘G",
    category: "ابزارهای هوش مصنوعی",
    tags: ["هوش مصنوعی", "تصویر", "تولید"],
    color: "#a855f7",
    isNew: true,
  },
  {
    id: "14",
    label: "تنظیمات ظاهر",
    icon: <Palette className="h-4 w-4" style={{ color: "#f59e0b" }} />,
    description: "شخصی‌سازی تم و رنگ‌ها",
    shortcut: "⌘P",
    category: "طراحی",
    tags: ["تم", "ظاهر", "رنگ"],
    color: "#f59e0b",
  },
  {
    id: "15",
    label: "موارد ذخیره شده",
    icon: <Bookmark className="h-4 w-4" style={{ color: "#0d9488" }} />,
    description: "مشاهده نشان‌شده‌ها",
    shortcut: "⌘D",
    category: "بهره‌وری",
    tags: ["ذخیره", "نشان", "علاقه‌مندی"],
    color: "#0d9488",
  },
]

const groupActionsByCategory = (actions: Action[]): ActionCategory[] => {
  const categories: Record<string, Action[]> = {}
  actions.forEach((action) => {
    const category = action.category || "دسته‌بندی نشده"
    if (!categories[category]) categories[category] = []
    categories[category].push(action)
  })
  return Object.entries(categories).map(([name, actions]) => ({ name, actions }))
}

export default function ActionSearchBar({
  defaultOpen = false,
  className,
}: {
  defaultOpen?: boolean
  className?: string
}) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(defaultOpen)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [recentActions] = useState<Action[]>(allActions.filter((a) => a.isPinned).slice(0, 3))
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const getSearchResults = (): SearchResult => {
    if (!query.trim()) {
      return {
        categories: groupActionsByCategory(allActions),
        recentActions: recentActions,
        suggestedActions: allActions.filter((a) => a.isNew).slice(0, 3),
      }
    }

    const normalizedQuery = query.toLowerCase().trim()
    const filteredActions = allActions.filter((action) => {
      const searchableText = [
        action.label.toLowerCase(),
        action.description?.toLowerCase() || "",
        ...(action.tags || []).map((tag) => tag.toLowerCase()),
      ].join(" ")
      return searchableText.includes(normalizedQuery)
    })

    if (activeCategory) {
      const categoryActions = filteredActions.filter((a) => a.category === activeCategory)
      return {
        categories: [{ name: activeCategory, actions: categoryActions }],
        recentActions: [],
        suggestedActions: [],
      }
    }

    return {
      categories: groupActionsByCategory(filteredActions),
      recentActions: [],
      suggestedActions: [],
    }
  }

  const searchResults = getSearchResults()

  const getAllVisibleActions = (): Action[] => {
    const allVisible: Action[] = []
    if (searchResults.recentActions.length > 0) allVisible.push(...searchResults.recentActions)
    if (searchResults.suggestedActions.length > 0) allVisible.push(...searchResults.suggestedActions)
    searchResults.categories.forEach((category) => allVisible.push(...category.actions))
    return allVisible
  }

  const visibleActions = getAllVisibleActions()

  useEffect(() => {
    setSelectedIndex(0)
  }, [query, activeCategory])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % visibleActions.length)
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + visibleActions.length) % visibleActions.length)
        break
      case "Enter":
        e.preventDefault()
        if (visibleActions[selectedIndex]) executeAction(visibleActions[selectedIndex])
        break
      case "Escape":
        e.preventDefault()
        setIsFocused(false)
        inputRef.current?.blur()
        break
    }
  }

  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.querySelector(`[data-index="${selectedIndex}"]`)
      if (selectedElement) selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
  }, [selectedIndex])

  useEffect(() => {
    const handleGlobalKeyDown = (e: any) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
        setIsFocused(true)
      }
    }
    window.addEventListener("keydown", handleGlobalKeyDown)
    return () => window.removeEventListener("keydown", handleGlobalKeyDown)
  }, [])

  const executeAction = (action: Action) => {
    console.log(`اجرای دستور: ${action.label}`)
    if (action.execute) action.execute()
    setIsFocused(false)
    setQuery("")
    inputRef.current?.blur()
  }

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category))
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1, y: 0, height: "auto",
      transition: { duration: 0.2, staggerChildren: 0.03 },
    },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -5, transition: { duration: 0.1 } },
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto font-sans", className)} dir="rtl">
      <div className="relative flex flex-col justify-start items-center">
        <div className="w-full sticky top-0 bg-background z-10 pt-4 pb-1">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-muted-foreground" htmlFor="action-search">
              جستجوی دستورات
            </label>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border tracking-widest">
                ⌘K
              </kbd>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Command className="h-4 w-4" />
            </div>

            <Input
              ref={inputRef}
              id="action-search"
              type="text"
              placeholder="یک دستور را تایپ کنید یا جستجو کنید..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              onKeyDown={handleKeyDown}
              className="pr-9 pl-9 py-2 h-10 text-sm rounded-lg focus-visible:ring-offset-0 bg-background border-border text-right"
            />

            <div className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4">
              <AnimatePresence mode="wait">
                {query.length > 0 ? (
                  <motion.div
                    key="send"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Send className="w-4 h-4 text-muted-foreground rotate-180" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="search"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Search className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="w-full" ref={resultsRef}>
          <AnimatePresence>
            {isFocused && (
              <motion.div
                className="w-full border rounded-lg shadow-lg overflow-hidden bg-popover mt-1 max-h-[70vh] overflow-y-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* فیلترهای دسته‌بندی */}
                {searchResults.categories.length > 1 && (
                  <motion.div className="p-2 border-b flex gap-1 flex-wrap" variants={itemVariants}>
                    {searchResults.categories.map((category) => (
                      <Badge
                        key={category.name}
                        variant={activeCategory === category.name ? "default" : "outline"}
                        className="cursor-pointer hover:bg-accent transition-colors py-1 px-3"
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </motion.div>
                )}

                {/* دستورات اخیر */}
                {searchResults.recentActions.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <div className="px-3 pt-2 pb-1 text-right">
                      <h3 className="text-xs font-medium text-muted-foreground">اخیر</h3>
                    </div>
                    <ul>
                      {searchResults.recentActions.map((action, idx) => (
                        <motion.li
                          key={action.id}
                          data-index={idx}
                          className={cn(
                            "px-3 py-2 mx-1 my-0.5 flex items-center justify-between hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-md transition-colors text-right",
                            selectedIndex === idx ? "bg-accent text-accent-foreground" : "",
                          )}
                          variants={itemVariants}
                          onClick={() => executeAction(action)}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="flex items-center justify-center w-8 h-8 rounded-md"
                              style={{ backgroundColor: `${action.color}20` }}
                            >
                              {action.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium">{action.label}</div>
                              <div className="text-xs text-muted-foreground">{action.description}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {action.shortcut && (
                              <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                                {action.shortcut}
                              </kbd>
                            )}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* دستورات پیشنهادی */}
                {searchResults.suggestedActions.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <div className="px-3 pt-2 pb-1 text-right">
                      <h3 className="text-xs font-medium text-muted-foreground">پیشنهادی</h3>
                    </div>
                    <ul>
                      {searchResults.suggestedActions.map((action, idx) => {
                        const actionIndex = searchResults.recentActions.length + idx
                        return (
                          <motion.li
                            key={action.id}
                            data-index={actionIndex}
                            className={cn(
                              "px-3 py-2 mx-1 my-0.5 flex items-center justify-between hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-md transition-colors text-right",
                              selectedIndex === actionIndex ? "bg-accent text-accent-foreground" : "",
                            )}
                            variants={itemVariants}
                            onClick={() => executeAction(action)}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="flex items-center justify-center w-8 h-8 rounded-md"
                                style={{ backgroundColor: `${action.color}20` }}
                              >
                                {action.icon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium">{action.label}</span>
                                  {action.isNew && (
                                    <Badge
                                      variant="default"
                                      className="text-[10px] px-1 py-0 h-4 bg-emerald-500 hover:bg-emerald-500"
                                    >
                                      جدید
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-xs text-muted-foreground">{action.description}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {action.shortcut && (
                                <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                                  {action.shortcut}
                                </kbd>
                              )}
                            </div>
                          </motion.li>
                        )
                      })}
                    </ul>
                  </motion.div>
                )}

                {/* لیست کامل دستورات به تفکیک دسته */}
                {searchResults.categories.map((category, categoryIndex) => {
                  const startingIndex = searchResults.recentActions.length + searchResults.suggestedActions.length
                  return (
                    <motion.div key={category.name} variants={itemVariants}>
                      <div className="px-3 pt-2 pb-1 text-right">
                        <h3 className="text-xs font-medium text-muted-foreground">{category.name}</h3>
                      </div>
                      <ul>
                        {category.actions.map((action, idx) => {
                          let actionIndex = startingIndex
                          for (let i = 0; i < categoryIndex; i++) {
                            actionIndex += searchResults.categories[i].actions.length
                          }
                          actionIndex += idx
                          return (
                            <motion.li
                              key={action.id}
                              data-index={actionIndex}
                              className={cn(
                                "px-3 py-2 mx-1 my-0.5 flex items-center justify-between hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-md transition-colors text-right",
                                selectedIndex === actionIndex ? "bg-accent text-accent-foreground" : "",
                              )}
                              variants={itemVariants}
                              onClick={() => executeAction(action)}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="flex items-center justify-center w-8 h-8 rounded-md"
                                  style={{ backgroundColor: `${action.color}20` }}
                                >
                                  {action.icon}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">{action.label}</span>
                                    {action.isNew && (
                                      <Badge
                                        variant="default"
                                        className="text-[10px] px-1 py-0 h-4 bg-emerald-500 hover:bg-emerald-500"
                                      >
                                        جدید
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{action.description}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {action.shortcut && (
                                  <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                                    {action.shortcut}
                                  </kbd>
                                )}
                              </div>
                            </motion.li>
                          )
                        })}
                      </ul>
                    </motion.div>
                  )
                })}

                {/* فوتر با کلیدهای میانبر */}
                <motion.div
                  className="mt-1 px-3 py-2 border-t flex items-center justify-between text-xs text-muted-foreground"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <kbd className="px-1 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                        ↑
                      </kbd>
                      <kbd className="px-1 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                        ↓
                      </kbd>
                      <span>برای جابجایی</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <kbd className="px-1 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                        enter
                      </kbd>
                      <span>برای انتخاب</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-muted rounded border border-border">
                      esc
                    </kbd>
                    <span>برای بستن</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}