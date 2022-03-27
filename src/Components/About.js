import { useState } from 'react';
import Carousel from './Carousel';
import Rey1 from '../images/Rey1.jpeg';
import Queen1 from '../images/Queen1.jpeg';
import QueenKing from '../images/QueenKing.jpeg';

const About = () => {

    const [imageState, setImageState] = useState(true);
    function changeHandle(){
        if (imageState) {
            setImageState(false);
        }else{
            setImageState(true);
        }
    }
    return (
        <div className="container mx-auto px-6 pt-6 pb-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:grid-cols-2">
                <div>
                    <h1 className="text-white text-6xl mb-4">ChessMates</h1>
                    <p className="text-white text-justify">CheeseMates is a delightful ChessMade art with an initial drop of 2000 unique NFTs (King & Queen) based on Ethereum Network.
The Project believes in the fusion of 2 amazing communities(NFT & Chess) and spread knowledge, love and positivity between them and the whole world.
Combining the physical and digital worlds in a way the Brand connect people from all around the globe and create strong friendships.</p>
                </div>
                <div className="flex justify-items-center items-center">
                    <img src={Rey1} className="max-w-full rounded-lg lg:h-80"/>
                </div>
            </div>
        </div>
    );


};
export default About;