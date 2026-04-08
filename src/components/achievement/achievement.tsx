import { Card, CardHeader, CardTitle } from "../ui/card";
import { CarouselItem } from "../ui/carousel";
import { TypographyH2 } from "../ui/Typography";


export default function(props: React.PropsWithChildren) {
    return (
        <CarouselItem className="md:basis-1/3 items-stretch">
            <Card>
                <CardHeader className="flex flex-2 text-center flex-col">
                    {props.children}
                </CardHeader>
            </Card>
        </CarouselItem>
    )
}

export function AchievementIcon(props: React.PropsWithChildren) {
    return (
        <div className="text-primary shadow-md mx-auto bg-neutral-100 rounded-xl [&>svg]:size-24">
            {props.children}
        </div>
    )
}

export function AchievementTitle(props: React.PropsWithChildren) {
    return (
        <TypographyH2 className="mx-auto">
            {props.children}
        </TypographyH2>
    )
}