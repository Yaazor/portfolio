import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Achievement, { AchievementIcon, AchievementTitle } from "./achievement/achievement";
import { ChartNoAxesColumnIncreasingIcon, GitGraphIcon, HeartIcon, Loader, TrophyIcon, UserIcon } from "lucide-react";

export default function() {

    return (
        <Carousel>
            <CarouselContent>
                <Achievement>
                    <AchievementIcon>
                        <ChartNoAxesColumnIncreasingIcon/>
                    </AchievementIcon>
                    <AchievementTitle>
                        +200% joueurs
                    </AchievementTitle>
                </Achievement>

                <Achievement>
                    <AchievementIcon>
                        <Loader/>
                    </AchievementIcon>
                    <AchievementTitle>
                        - 100 ms par page
                    </AchievementTitle>
                </Achievement>

                <Achievement>
                    <AchievementIcon>
                        <HeartIcon/>
                    </AchievementIcon>
                    <AchievementTitle>
                        Projet bénévole
                    </AchievementTitle>
                </Achievement>
            </CarouselContent>
            <CarouselPrevious/>
                <div className="absolute top-1/2 right-2">
                    <CarouselNext className="absolute right-0"/>    
                </div> 
        </Carousel>
    )
}