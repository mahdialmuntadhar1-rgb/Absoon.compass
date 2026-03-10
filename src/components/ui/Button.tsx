import * as React from "react"
import { cn } from "../../utils/cn"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--gold)] text-[var(--bg-primary)] hover:bg-[var(--gold-bright)] shadow-sm": variant === "default",
            "border border-[var(--border)] bg-transparent hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]": variant === "outline",
            "hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]": variant === "ghost",
            "bg-[var(--rose)] text-white hover:bg-[var(--rose)]/90": variant === "destructive",
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-10 rounded-md px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
