type ButtonProps = {
    children: React.ReactNode
}

export default function Button ({children}: ButtonProps){
    return (
        <button className="
            rounded-lg
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition-colors
            hover:bg-blue-700
        ">
            {children}
        </button>
    )
}