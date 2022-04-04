import React from "react";
import ProgressBar from '../progressbar/progressbar.component';
import './socialmedia-card.styles.scss';

const SocialMediaCard = ({ socialmedia }) => {
    const { icon, Likes, percentage, target, duration } = socialmedia;
    return (
        <div className="socialmediacard">

            <div className="s-header">

                <img src={`${icon}`} alt="icon" />

                <div className="p-l">
                    <span className="percentage">{percentage}</span>
                    <div className="s-h-data">
                        <span className="likes">{Likes}</span>
                        <span className="totallikes">TotalLikes</span>
                    </div>
                </div>
            </div>

            <div className="s-footer">

            <div>
                <span className="target">{target}</span>
                <ProgressBar background='linear-gradient(to right, #7fd0eb 0%, #16d09e 100%)' completed={50} margin={4} />
            </div>

            <div> 
                <span className="duration">{duration}</span>
                <ProgressBar background='linear-gradient(to right, #7fd0eb 0%, #16d09e 100%)' completed={70} margin={4} />
            </div>  

            </div>

        </div>
    )
};

export default SocialMediaCard;