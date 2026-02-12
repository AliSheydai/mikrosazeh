import { Button } from "@/components/ui/button";
import { Mail, Link as LinkIcon, MapPin, ExternalLink, User } from "lucide-react";

interface Profile02Props {
    name?: string;
    role?: string;
    location?: string;
    email?: string;
    website?: string;
    bio?: string;
}

const defaultProfile = {
    name: "الهام میریان",
    role: "طراح محصول",
    location: "تهران، شهید محلاتی",
    email: "hello@mikrosizeh.com",
    website: "ui.mikrosizeh.dev",
    bio: "طراحی رابط‌های کاربری که شکاف بین پیچیدگی و سادگی را از بین می‌برند.",
} satisfies Required<Profile02Props>;

export default function Profile02({
    name = defaultProfile.name,
    role = defaultProfile.role,
    location = defaultProfile.location,
    email = defaultProfile.email,
    website = defaultProfile.website,
    bio = defaultProfile.bio,
}: Partial<Profile02Props> = defaultProfile) {
    return (
        <div className="w-full max-w-md mx-auto" dir="rtl">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xs">
                <div className="flex items-start gap-5">
                    <div className="w-20 h-20 shrink-0 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center ring-1 ring-zinc-200 dark:ring-zinc-800">
                        <User className="w-10 h-10 text-zinc-400" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                                    {name}
                                </h2>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {role}
                                </p>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <a href={`mailto:${email}`}>
                                    <Mail className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>

                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <MapPin className="w-4 h-4" />
                                <span>{location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <Mail className="w-4 h-4" />
                                <a
                                    href={`mailto:${email}`}
                                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                >
                                    {email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <LinkIcon className="w-4 h-4" />
                                <a
                                    href={`https://${website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
                                >
                                    <span dir="ltr">{website}</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {bio}
                    </p>
                </div>
            </div>
        </div>
    );
}