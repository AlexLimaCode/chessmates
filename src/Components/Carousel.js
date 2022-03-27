import React, {useState} from 'react'

const Carousel = (props) => {
    const content = props.content;
  return (
    <div>
        <div
            id={content[0].id}
            className="carousel slide carousel-fade relative"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                {content.map((e, index) =>{
                    return(
                        index === 0 ? (
                            <button
                            type="button"
                            data-bs-target={"#"+e.id}
                            data-bs-slide-to={index}
                            class="active"
                            aria-current="true"
                            aria-label={"Slide "+ (index+1)} 
                            ></button>
                        ):(
                            <button
                            type="button"
                            data-bs-target={"#"+e.id}
                            data-bs-slide-to={index}
                            aria-label={"Slide "+ (index+1)}
                            ></button>
                        )
                    );
                })}
            </div>
            <div class="carousel-inner relative w-full overflow-hidden" style={{ alignItems: "center"}}>
                {content.map((e, index) =>{
                    return (
                        index === 0 ? (
                            <div className="carousel-item active float-left w-full">
                                <img
                                    src={e.image}
                                    class="block w-full"
                                    alt={e.alt}
                                    style = {{ height: "300px", width: "300px"}}
                                />
                            </div>
                        ):(
                            <div className="carousel-item float-left w-full">
                                <img
                                    src={e.image}
                                    class="block w-full"
                                    alt={e.alt}
                                    style = {{ height: "300px", width: "100%"}}
                                />
                            </div>
                        )
                    );
                })}
            </div>        
            {content[0].arrows === true && (
                <div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target={"#"+content[0].id}
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target={"#"+content[0].id}
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};

export default Carousel;