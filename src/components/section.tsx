import { cn } from "@/lib/utils";


export default function({className, ...props}: React.PropsWithChildren<HTMLElement>) {
    return (
        <section className={cn("py-8 page-wrap", className)}>
            <div className="max-w-7xl mx-auto">
                {props.children}
            </div>
        </section>
    )
}