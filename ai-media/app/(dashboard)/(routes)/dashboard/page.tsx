"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ConfigEnum } from "@/shared/models/config";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: 'Chat',
        icon: MessageSquare,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
        href: ConfigEnum.CHAT
    },
    {
        label: 'Gerar Música',
        icon: Music,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
        href: ConfigEnum.GERAR_MUSICA
    },
    {
        label: 'Gerar Imagem',
        icon: ImageIcon,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
        href: ConfigEnum.GERAR_IMAGEM
    },
    {
        label: 'Gerar Vídeo',
        icon: VideoIcon,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
        href: ConfigEnum.GERAR_VIDEO
    },
    {
        label: 'Código',
        icon: Code,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
        href: ConfigEnum.CODIGO
    }
]

export default function DashboardPage() {
    const router = useRouter();
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore o poder da I.A.
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat com Inteligência Artificial
                </p>
            </div>

            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {
                    tools.map((tool) => (
                        <Card
                            key={tool.href}
                            onClick={ () => router.push(tool.href) }
                            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                                <div className="flex items-center">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-8 h-8", tool.color )} />
                                    </div>
                                    <div className="font-semibold ml-5">{tool.label}</div>
                                </div>
                                <ArrowRight className="w-5 h-5" />
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}