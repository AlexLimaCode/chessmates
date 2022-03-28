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
//         <div className="container mx-auto px-6 pt-6 pb-6">
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:grid-cols-2">
//                 <div>
//                     <h1 className="text-white text-6xl mb-4">ChessMates</h1>
//                     <p className="text-white text-justify">CheeseMates is a delightful ChessMade art with an initial drop of 2000 unique NFTs (King & Queen) based on Ethereum Network.
// The Project believes in the fusion of 2 amazing communities(NFT & Chess) and spread knowledge, love and positivity between them and the whole world.
// Combining the physical and digital worlds in a way the Brand connect people from all around the globe and create strong friendships.</p>
//                 </div>
//                 <div className="flex justify-items-center items-center">
//                     <img src={Rey1} className="max-w-full rounded-lg lg:h-80"/>
//                 </div>
//             </div>
//         </div>
<section class="bg-black">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br/> awesome Components</h1>
                
                <div class="mt-2">
                    <span class="inline-block w-40 h-1 rounded-full bg-black"></span>
                    <span class="inline-block w-3 h-1 ml-1 rounded-full bg-black"></span>
                    <span class="inline-block w-1 h-1 ml-1 rounded-full bg-black"></span>
                </div>
                
                <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                    <div class="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
                        <div class="space-y-3">
                            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-black">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </span>

                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Ethereum Network</h1>

                            <p class="text-gray-500 dark:text-gray-300">
                            CheeseMates is a delightful ChessMade art with an initial drop of 2000 unique NFTs (King & Queen) based on Ethereum Network.
                            </p>
                        </div>

                        <div class="space-y-3">
                            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-black">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">NFTs & Chess</h1>

                            <p class="text-gray-500 dark:text-gray-300">
                            The Project believes in the fusion of 2 amazing communities(NFT & Chess) and spread knowledge, love and positivity between them and the whole world.
                            </p>
                        </div>

                        <div class="space-y-3">
                            <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-black">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </span>

                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Relationships</h1>

                            <p class="text-gray-500 dark:text-gray-300">
                            Combining the physical and digital worlds in a way the Brand connect people from all around the globe and create strong friendships.
                            </p>
                        </div>
                    </div>
                    <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                        <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={Rey1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );


};
export default About;