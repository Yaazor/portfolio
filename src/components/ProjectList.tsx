import type PortfolioProject from "@/types/PortfolioProject";
import type { ReactNode } from "react";
import Project, { type ProjectProps } from "./project/Project";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface ProjectListProps {
    projects: ProjectProps[],
    isCarousel: boolean
} 

export default function(props: ProjectListProps) {
    const projectsList: ReactNode[] = []

    props.projects.forEach((project, index) => {
        const projectNode = (
            <Project key={index} technologies={project.technologies}
                title={project.title}
                image={project.image}
                description={project.description}
                href={project.href}
                >
            </Project>
        )

        if(props.isCarousel) {
            projectsList.push(
                <CarouselItem className="md:basis-1/2">
                    {projectNode}
                </CarouselItem>
            )
        }else{
            projectsList.push(projectNode)
        }
    
    })

    if(props.isCarousel) {
        return (
            <Carousel className="relative">
                <CarouselContent>
                    {projectsList}
                </CarouselContent>
                <CarouselPrevious/>
                <div className="absolute top-1/2 right-2">
                    <CarouselNext className="absolute right-0"/>    
                </div> 
            </Carousel>
        )
    }

    return (
        <div className="flex flex-col gap-12">
            {projectsList}
        </div>
    )
}