import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaChessPawn, FaChessKnight, FaChessQueen, FaChessRook, FaChessKing, FaChessBoard, FaChessBishop, FaChess} from 'react-icons/fa';

const RoadMap = () => {
    return(
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'black', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date="April 2022"
                iconStyle={{ background: 'black', color: '#fff' }}
                icon = {<FaChessBoard/>}
            >
                <h1 className="vertical-timeline-element-title">Governance</h1>
                <p>
                All holders will have rights to participate in the crucial decisions of the collection, votation will take place on the oficial discord server. Community must be listended!
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon = {<FaChessPawn/>}
            >
                <h3 className="vertical-timeline-element-title">CMerch</h3>
                <p>
                High quality clothing line created by our designers. Holders will be rewarded with chronological points for discounts of Merch.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'black', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'black', color: '#fff' }}
                icon = {<FaChessKnight/>}
            >
                <h3 className="vertical-timeline-element-title">Bridge between digital and physical objects</h3>
                <p>
                Signed and framed prints of your CheeseMates NFT. Tangible objects ítems as merch, frames or wherever you want to print your NFT.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon = {<FaChessBishop/>}
            >
                <h3 className="vertical-timeline-element-title">Support and charity to Young Chess players</h3>
                <p>
                The team after 3rd phase, will donate ETH to Young chessplayers with the goal of helping athletes in progression. All the journey will be documented and poste don social media.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'black', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'black', color: '#fff' }}
                icon = {<FaChessRook/>}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon = {<FaChessQueen/>}
            >
                <h3 className="vertical-timeline-element-title">Weekly activities with incredible prizes</h3>
                <p>
                Online and face to face tournaments, raffles, giveaways and more with ETH as prize, making a real impact in holders.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'black', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'black', color: '#fff' }}
                icon = {<FaChessKing/>}
            >
                <h3 className="vertical-timeline-element-title">Feel the power of Web 3.0</h3>
                <p>
                Something really big is cooking in the Metaverse, CheeseMates will punch hard for sure…</p>
                <p>NFT clothing and Wear to earn Merch is one of our favorite goals. </p>
                <p>
                    But that's not all, a Chess p2e game platform with historical chess players as backup will position the Brand as wherever you people want to.
                    There are already millions of people playing online chess for free.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                iconStyle={{ background: 'white', color: 'black' }}
                icon = {<FaChess/>}
            >
                <h3 className="vertical-timeline-element-title">Love and friendship</h3>
                <p>
                Our beggining and end goal, is to create a strong and durable community.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default RoadMap;
