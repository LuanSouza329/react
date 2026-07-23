import Button from "../../ui/Button";
import Container from "@/components/ui/Container";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

type HeroProps = {
    name: string,
    role: string
}

export default function Hero({ name, role }: HeroProps) {
    return (
        <section
            className="
            min-h-screen
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-12
            px-6
        ">

            <Container>
                <p className="
                    text-lg
                    text-gray-500
                ">
                    Olá, eu sou
                </p>

                <h1 className="
                    mt-2
                    text-5xl
                    md:text-6xl
                    font-bold
                ">
                    {name}
                </h1>

                <h2 className="
                    mt-4
                    text-2xl
                    font-semibold
                    text-blue-600
                ">
                    {role}
                </h2>

                <p className="
                    mt-6
                    max-w-lg
                    text-gray-600
                    leading-8
                ">
                    Transformando dados em informações para apoiar decisões.

                    <HeroContent />
                </p>

                <div className="
                    mt-8
                    flex
                    gap-4
                ">
                    <Button variant="secondary">
                        Botão
                    </Button>

                    <Button>
                        Botão
                    </Button>

                </div>

            </Container>

            <div>
                <HeroImage />
            </div>

        </section>
    );
}