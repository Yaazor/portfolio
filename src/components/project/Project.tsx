import type { ReactNode } from "react"
import { TypographyH2 } from "../ui/Typography"
import { Badge } from "../ui/badge"
import { Image } from "lucide-react"
import ProjectDescription from "./ProjectDescription"

/**
 * Propriétés du component project.
 */
export interface ProjectProps {
    /**
     * Path de l'image
     */
    image: ImageMetadata,
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
    description: string[],
}

export default function(props: ProjectProps) {

    const techDisplays: ReactNode[] = []
    const descriptionLines: ReactNode[] = []

    props.technologies.forEach(tech => {
        techDisplays.push(
            <Badge>
                {tech}
            </Badge>
        )
    })

    props.description.forEach(line => {
        descriptionLines.push(
            <ProjectDescription>
                {line}
            </ProjectDescription>
        )
    })


    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-between gap-6 bg-neutral-100 p-5 rounded-2xl shadow-sm shadow-primary">
                <div>
                    <TypographyH2>
                        {props.title}
                    </TypographyH2>
                    <div className="flex gap-2 pb-7">
                        {techDisplays}
                    </div>
                    <div>
                        {descriptionLines}
                    </div>
                </div>
                <img className="md:max-w-[35%] max-h-full rounded-lg" src={props.image.src} alt=""/>
            </div>
        </div>
    )
}