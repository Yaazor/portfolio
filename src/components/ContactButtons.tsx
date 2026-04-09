import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function() {
    return (
       <div className="text-2xl gap-5 flex flex-col bold">
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faDiscord} className="size-14 rounded-full bg-secondary p-3 text-secondary-foreground" />
                <strong>yazor</strong>
            </div>
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="size-14 rounded-full bg-secondary p-3 text-secondary-foreground" />
                <a className="underline" href="mailto:yazor@herobrine.fr">
                    <strong>yazor@herobrine.fr</strong>
                </a>
            </div>
       </div>
    )
}