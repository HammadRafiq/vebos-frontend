import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: " bg-primary text-f16 hover:bg-success/90 rounded-[12px]",
        destructive:
          "bg-destructive text-f16 px-10 py-4 bg-[#FF4434] rounded-xl text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary text-primary rounded-[12px] hover:border-success/90 hover:text-success/90",
        secondary: "bg-white text-f16 px-10 py-4 rounded-xl text-[#FF4434] ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-[50px] w-[170px]",
        xs: "h-[24px] w-fit px-2 rounded-[4px] text-primary text-[12px]",
        sm: "h-9 px-3 rounded-[10px] text-[14px]",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
