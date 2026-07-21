import Link from "next/link";
import { navigation } from "@/data/navigation";
import { link } from "fs";
export default function Navigation() {
    return (
        <nav 
            className="
                flex
                gap-6
            "
        >
            {
                navigation.map((item)=> (
                    <Link
                        key={item.href}
                        href={item.href}
                    >
                        {item.label}
                    </Link>
                ))
            };
        </nav>
    );
}