import { useState } from 'react';
import Image from "@material-tailwind/react/Image";
import Button from "@material-tailwind/react/Button";

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
                    <h1>About</h1>
                    <p>lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip</p>
                </div>
                <div className="flex justify-items-center items-center">
                    <div className="grid grid-rows-3 grid-flow-col gap-4">
                        <div className="row-span-2 col-span-2">
                            {console.log(imageState)}
                            {imageState === true ? (
                                <Image
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                                    rounded={false}
                                    raised={false}
                                    alt="Image"
                                />
                            ):(
                                <Image
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                                    rounded={false}
                                    raised={false}
                                    alt="Image"
                                />
                            )}
                        </div>
                        <div className="flex justify-items-center items-center">
                            <Button
                                color="indigo"
                                buttonType="outline"
                                size="regular"
                                rounded={false}
                                block={false}
                                iconOnly={false}
                                ripple="dark"
                                onClick = {changeHandle}
                            >
                                Button
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};
export default About;