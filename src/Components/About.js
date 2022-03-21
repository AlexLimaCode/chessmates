import { useState } from 'react';
import Carousel from './Carousel';

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
                    <p className="text-white text-justify">lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip</p>
                </div>
                <div className="flex justify-items-center items-center">
                    <Carousel 
                        content = {[
                            {
                                id: "about",
                                image: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
                                alt: "Wild Landscape",
                                arrows: false,
                            },
                            {
                                id: "about",
                                image: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
                                alt: "Camera",
                            },
                            {
                                id: "about",
                                image: "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
                                alt: "Exotic Fruits",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );


};
export default About;