import { Button } from "./ui/button";

export default function Navigation({children}: any) {

    return (
        <header className="bg-card-foreground py-4 shadow-sm shadow-black">
            <nav className="page-wrap w-full flex justify-between">
                <div className="flex justify-between gap-7">
                    {children}
                </div>
                <Button asChild={true} size={"lg"}>
                    <a href="/contact">
                        Contact
                    </a>
                </Button>
            </nav>
        </header>
    )
}

interface NavigationLinkProps {
    path: URL,
    name: string
}

export function NavigationLink(props: NavigationLinkProps) {

    return (
        <a href={props.path.toString()} className="text-xl text-card hover:underline hover:text-white duration-200">
            {props.name}
        </a>
    )
}
