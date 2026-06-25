import clsx from "clsx";

const Button = ({
    children,
    variant = "primary",
    className = "",
    href,
    ...props
}) => {
    const classes = clsx(
        `
    inline-flex
    items-center
    justify-center
    px-8
    py-4
    text-sm
    uppercase
    tracking-[0.15em]
    transition-all
    duration-300
    cursor-pointer
    `,

        variant === "primary" &&
        "bg-[#1a1a18] text-white hover:opacity-90",

        variant === "outline" &&
        "border border-[#e8e4dc] text-[#1a1a18] hover:bg-white",

        variant === "light" &&
        "bg-white text-[#1a1a18] hover:bg-[#c8a97a]",

        variant === "outline-light" &&
        "border border-white/20 text-white hover:bg-white hover:text-[#1a1a18]",

        className
    );

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;