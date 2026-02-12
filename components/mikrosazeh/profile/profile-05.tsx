import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Users,
    Mail,
    Plus,
    Settings2,
    Shield,
    Github,
    Linkedin,
    MapPin,
    User,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    location: string;
    email: string;
    availability: "available" | "busy" | "offline";
    skills: string[];
    social: {
        github?: string;
        linkedin?: string;
    };
}

interface Profile05Props {
    teamName?: string;
    description?: string;
    members?: TeamMember[];
}

const defaultProfile = {
    teamName: "طراحی محصول",
    description:
        "تیم اصلی طراحی محصول، مسئول تجربه کاربری و طراحی رابط کاربری",
    members: [
        {
            id: "1",
            name: "سارا چمنی",
            role: "طراح ارشد",
            location: "تهران، ایران",
            email: "sarah@example.ir",
            availability: "available",
            skills: ["UI Design", "Design Systems", "User Research"],
            social: {
                github: "sarahchen",
                linkedin: "sarahchen",
            },
        },
        {
            id: "2",
            name: "محمد علوی",
            role: "طراح محصول",
            location: "شیراز، ایران",
            email: "mohammad@example.ir",
            availability: "busy",
            skills: ["Product Design", "Prototyping", "Animation"],
            social: {
                github: "m-alavi",
                linkedin: "m-alavi",
            },
        },
    ],
} satisfies Required<Profile05Props>;

export default function Profile05({
    teamName = defaultProfile.teamName,
    description = defaultProfile.description,
    members = defaultProfile.members,
}: Profile05Props = defaultProfile) {
    return (
        <div className="w-full max-w-3xl mx-auto" dir="rtl">
            <div
                className={cn(
                    "overflow-hidden",
                    "bg-white dark:bg-zinc-900",
                    "rounded-2xl",
                    "border border-zinc-200 dark:border-zinc-800",
                    "transition-all duration-200"
                )}
            >
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                            <div className={cn("p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800")}>
                                <Users className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                    {teamName}
                                </h2>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-2"
                            >
                                <Settings2 className="w-4 h-4" />
                                تنظیمات
                            </Button>
                            <Button size="sm" className="gap-2">
                                <Plus className="w-4 h-4" />
                                افزودن عضو
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {members.map((member) => (
                        <div
                            key={member.id}
                            className={cn(
                                "p-6 transition-colors duration-200",
                                "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                            )}
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                                        <User className="w-7 h-7 text-zinc-400" />
                                    </div>
                                    <div
                                        className={cn(
                                            "absolute -bottom-1 -right-1",
                                            "w-3.5 h-3.5 rounded-full ring-2 ring-white dark:ring-zinc-900",
                                            member.availability === "available" && "bg-emerald-500",
                                            member.availability === "busy" && "bg-amber-500",
                                            member.availability === "offline" && "bg-zinc-300 dark:bg-zinc-600"
                                        )}
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                                            {member.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            {member.social.github && (
                                                <a href="#" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                            {member.social.linkedin && (
                                                <a href="#" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                                                    <Linkedin className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mb-3 text-sm text-zinc-500 dark:text-zinc-400">
                                        <div className="flex items-center gap-1.5">
                                            <Shield className="w-4 h-4" />
                                            {member.role}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4" />
                                            {member.location}
                                        </div>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100"
                                            dir="ltr"
                                        >
                                            <Mail className="w-4 h-4" />
                                            {member.email}
                                        </a>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {member.skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}