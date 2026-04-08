import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Achievement, { AchievementIcon, AchievementTitle } from "./achievement/Achievement";
import { ChartNoAxesColumnIncreasingIcon, GitGraphIcon, Loader, TrophyIcon, UserIcon } from "lucide-react";


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
                        <UserIcon/>
                    </AchievementIcon>
                    <AchievementTitle>
                        x4 inscriptions annuelles
                    </AchievementTitle>
                </Achievement>
            </CarouselContent>
        </Carousel>
    )
}