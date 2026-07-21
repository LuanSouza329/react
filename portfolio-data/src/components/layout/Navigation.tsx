import Link from "next/link";
export default function Navigation() {
    return (
        <nav>
            <Link href="/home">
                Home
            </Link>

            <Link href="/projetos">
                Projetos
            </Link>

            <Link href="/sobre">
                Sobre
            </Link>

            <Link href="/contato">
                Contato
            </Link>
        </nav>
    );
}