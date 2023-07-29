import { Button } from "@/components/ui/ui/button";
import Link from "@/node_modules/next/link";

const LandingPage = () => {
    return (
        <div>
        Lading Page
            <div>
                <Link href="/sign-in">
                    <Button>Entrar</Button>
                </Link>
            </div>

            <div>
                <Link href="/sign-up">
                    <Button>Cadastrar</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;