import Button from "../ui/Button";

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

            <div>
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
                </p>

                <div className="
                    mt-8
                    flex
                    gap-4
                ">
                    <Button>
                        Botão
                    </Button>
                    
                    <Button>
                        Botão
                    </Button>

                </div>

            </div>

            <div>
                FOTO
            </div>

        </section>
    );
}