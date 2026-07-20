type ButtonProps = React.ComponentProps<"button"> & { //Passa todas as funções nativas do HTML
  variant?: "primary" | "secondary"
};

function cn(...classes: Array<string | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props }: ButtonProps) {//Props agrupa dentro de um objeto

  return (
    <button
      {...props} //espalha em um obj em propriedades
      className={cn(
        `
        rounded-lg
        px-6
        py-3
      `,
        variants[variant],
        className
      )}>
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