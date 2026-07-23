type ContainerProps =
    React.ComponentProps<"div"> & {
        children: React.ReactNode;
};

function cn(...classes: Array<string | undefined>) {
    return classes.filter(Boolean).join(" ");
}


export default function Container({
    children,
    className,
    ...props
}: ContainerProps) {
    return (
        <div
            {...props}
            className={cn(
                "max-w-7x1 max-auto px-4",
                className
            )}
        >
            {children}
        </div>
    );
}