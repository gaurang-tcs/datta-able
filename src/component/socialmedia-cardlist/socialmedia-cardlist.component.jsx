import React ,{ useState }from "react";
import SOCIAL_MEDIA from "../../data/socialmedia.data";
import SocialMediaCard from "../socialmedia-card/socialmedia-card.component";

import './socialmedia-cardlist.styles.scss';

const SocialMediaCardList = () => {
    const [socialmedia] = useState(SOCIAL_MEDIA);
    return (
        <div className="socialmedia-cardlist">
        { 
         socialmedia.map((socialmedia) => (<SocialMediaCard key={socialmedia.id} socialmedia={socialmedia} />))    
        }
     </div>
    )
};

export default SocialMediaCardList;