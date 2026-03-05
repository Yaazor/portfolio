import { cn } from "@/lib/utils";
import { clsx } from "clsx";

export function TypographyH1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
      {...props}
    />
  )
}

export function TypographyH2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props}/>
  )
}


export function TypographyP({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  )
}

export function TypographyLead({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    />
  )
}