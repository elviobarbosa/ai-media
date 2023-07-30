"use client";
import { Menu, Sheet, Sidebar } from "lucide-react";
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar;