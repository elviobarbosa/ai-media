import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <div>
            <h2>Dashboard</h2>
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}