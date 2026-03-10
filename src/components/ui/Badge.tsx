import * as React from "react"
import { cn } from "../../utils/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-[var(--gold)] text-[var(--bg-primary)] hover:bg-[var(--gold-bright)]": variant === "default",
          "border-transparent bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:bg-[var(--border)]": variant === "secondary",
          "border-transparent bg-[var(--rose)] text-white hover:bg-[var(--rose)]/80": variant === "destructive",
          "text-[var(--text-primary)] border-[var(--border)]": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
