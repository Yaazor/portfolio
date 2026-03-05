import React from "react";
import { TypographyH2 } from "./ui/Typography";

export default function Navigation({children}) {

    return (
        <header className="bg-menu py-4 shadow-md">
            <nav className="page-wrap text-indigo-100 flex gap-6">
                {children}
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
        <a href={props.path.toString()} className="text-xl hover:underline hover:text-white duration-200">
            {props.name}
        </a>
    )
}
