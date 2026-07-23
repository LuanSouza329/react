import { socials } from "@/data/socialLinks";

export default function HeroSocials() {
    return (
        <div className="flex gap-4">
            {socials.map((social) => {
                const Icon = social.icon;

                return (
                    <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                    >
                        <Icon size={24} />
                    </a>
                );
            })}
        </div>
    );
}