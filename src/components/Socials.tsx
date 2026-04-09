import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "./ui/button-group";

export default function() {
    return (
        <div class="flex gap-3 flex-wrap">
            <SocialsIcon href="https://github.com/Yaazor">
                <Github color="white"/>
            </SocialsIcon>
            <SocialsIcon href="https://www.linkedin.com/in/bruno-plante-godin-44339519a">
                <Linkedin color="white"/>
            </SocialsIcon>
        </div>
    )
}

export function SocialsIcon({className, href, ...props}: React.PropsWithChildren<HTMLAnchorElement>) {

    return (
        <Button variant="link" className="hover:opacity-60 bg-neutral-700 [>svg]:size-16 p-3 rounded-2xl duration-700" asChild size="icon">
            <a href={href} target="_blank">
                {props.children}
            </a>
        </Button>
    )
}