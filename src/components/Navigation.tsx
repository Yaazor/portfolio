
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function Navigation({children}: any) {

    return (
        <header className="py-4 bg-neutral-200 shadow-sm shadow-accent">
            <nav className="page-wrap w-full flex justify-between">
                <div className="w-7xl mx-auto flex justify-between">
                    <div className="flex justify-between gap-7">
                        {children}
                    </div>
                    <div>
                        <Button asChild={true} size={"lg"}>
                            <a href="/contact">
                                Contact
                            </a>
                        </Button>
                    </div>
                </div>
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
        <a href={props.path.toString()} className="text-xl hover:underline duration-200">
            {props.name}
        </a>
    )
}
