import React from 'react'

const Team = () => {
  return (
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-10">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
                {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Algun texto chingon de chessmates...</p> */}
            </div>
            <div class="flex flex-wrap -m-2">
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Rodkinin</h2>
                            <p class="text-gray-500">Founder/Visionary and Public Relations</p>
                            <p className="text-white font-light text-xs">Passionate in Cryptospace, business direction and team leadership, sometimes Chess player</p>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Dianj</h2>
                            <p class="text-gray-500">Advisor</p>
                            <p className="text-white font-light text-xs">Master in businesses, years of experience in cryptospace, International Master in Chess.</p>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Chakin</h2>
                            <p class="text-gray-500">Community Manager</p>
                            <p className="text-white font-light text-xs">Master in businesses, years of experience in cryptospace, International Master in Chess.</p>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Liban</h2>
                            <p class="text-gray-500">Head Moderator</p>
                            <p className="text-white font-light text-xs">Looking to build a strong and healthy community/ brand. Experience as salesman.</p>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Alejandro Lima</h2>
                            <p class="text-gray-500">Web & Blockchain Developer</p>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Oscar Robles</h2>
                            <p class="text-gray-500">Web & Blockchain Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team