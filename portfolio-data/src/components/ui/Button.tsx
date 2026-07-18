type ButtonProps = {
    children: React.ReactNode
    variant?: "primary" | "secondary"
};

export default function Button ({children, variant}: ButtonProps){
    return (
        <button className={`
         rounded-lg
         px-6
         py-3
         font-semibold
         transition-colors

         ${variants[variant ?? "primary"]}
        `}>
            {children}
        </button>
    )
}

const variants = {
  primary: `
    bg-blue-600
    text-white
    hover:bg-blue-700
  `,

  secondary: `
    bg-white
    text-slate-900
    border
    border-slate-300
    hover:bg-slate-100
  `,
};