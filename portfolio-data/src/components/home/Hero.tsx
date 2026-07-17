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
            justify-center
            items-center
        ">
            <h1
                className="
                    text-5xl
                    font-bold
                ">
                {name}
            </h1>

            <p className="
                mt-4
                text-xl
                text-gray-600
            ">
                {role}
            </p>

        </section>
    );
}