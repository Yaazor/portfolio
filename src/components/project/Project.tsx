import type { ReactNode } from "react"
import { TypographyH2 } from "../ui/Typography"
import { Badge } from "../ui/badge"

/**
 * Propriétés du component project.
 */
export interface ProjectProps {
    /**
     * Path de l'image
     */
    image?: string,
    /**
     * Path vers le projet
     */
    path?: string,
    /**
     * Titre du projet
     */
    title: string,
    /**
     * Liste des technologies utilisées
     */
    technologies: string[],
    children?: ReactNode,
}

export default function(props: ProjectProps) {

    const techDisplays: Array<ReactNode> = []

    props.technologies.forEach(tech => {
        techDisplays.push(
            <Badge>
                {tech}
            </Badge>
        )
    })


    return (
        <div>
            <div className="bg-neutral-100 p-5 rounded-2xl shadow-sm shadow-primary">
                <TypographyH2>
                    {props.title}
                </TypographyH2>
                <div className="flex gap-2 pb-7">
                    {techDisplays}
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}