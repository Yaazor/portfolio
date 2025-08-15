export enum SocialNetwork {
    GITHUB,
    LINKEDIN,
    DISCORD
}

export function getLink(network: SocialNetwork): String {
    switch(network) {
        case SocialNetwork.GITHUB:
            return "https://github.com/Yaazor";
        case SocialNetwork.LINKEDIN:
            return "https://www.linkedin.com/in/bruno-plante-godin-44339519a/";
        default:
            return "";
    }
}