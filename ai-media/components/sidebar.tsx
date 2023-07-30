"use client";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../lib/utils/fontawesome';
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'
import { ConfigEnum } from "@/shared/models/config";

const poppins = Poppins({
    weight: '600',
    subsets: ['latin']
});

const routes = [
    {
        label: 'Dashboard',
        href: ConfigEnum.DASHBOARD,
        color: 'text-sky-500',
        icon: LayoutDashboard
    },
    {
        label: 'Chat',
        href: ConfigEnum.CHAT,
        color: 'text-sky-500',
        icon: MessageSquare
    },
    {
        label: 'Gerar Imagem',
        href: ConfigEnum.GERAR_IMAGEM,
        color: 'text-sky-500',
        icon: ImageIcon
    },
    {
        label: 'Gerar Vídeo',
        href: ConfigEnum.GERAR_VIDEO,
        color: 'text-sky-500',
        icon: VideoIcon
    },
    {
        label: 'Gerar Música',
        href: ConfigEnum.GERAR_MUSICA,
        color: 'text-sky-500',
        icon: Music
    },
    {
        label: 'Código',
        href: ConfigEnum.CODIGO,
        color: 'text-sky-500',
        icon: Code
    },
    {
        label: 'Configurações',
        href: ConfigEnum.CONFIGURACOES,
        color: 'text-sky-500',
        icon: Settings
    },

]

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link 
                    href="/dashboard"
                    className="flex items-center pl-3 mb-14">
                        <div className="relative w-8 h-8 mr-4 ">
                            <FontAwesomeIcon 
                                icon={faPhotoFilm}/>    
                        </div>
                        <h1 className={cn("text-2xl font-bold", poppins.className)}>IA Media</h1>
                </Link>

                <div className="space-y-1">
                {routes.map((route) => (
                    <Link 
                        href={route.href} 
                        key={route.href}
                        className={cn ("tex-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", 
                        pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                        )}>
                            <div className="flex items-center">
                                <div className="relative w-4 h-4 mr-4 ">
                                    <route.icon className={cn ("h-4", route.color)}
                                    />
                                </div>
                                <div>{route.label}</div>
                            </div>
                    </Link>
                ))}
                </div>

            </div>

        </div>
    )
}

export default Sidebar;