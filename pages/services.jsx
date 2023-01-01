import React, {useState, useEffect} from 'react';
import axios from "axios"

import Container from './Components/container'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Services = () => {

    const [ allImage, setAllImage ] = useState([])
    const [ firstImage, setFirstImage ] = useState()
    const [ secondImage, setSecondImage ] = useState()

    useEffect( () => {
        axios.get('http://localhost:3000/api/servicesimage')
        .then((data) => {
            setAllImage(data.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    

    // console.log(allImage);

    

    // setFirstImage(data.data.imageOne)
    //         setSecondImage(data.data.imageTwo)

    return(
        <>
            <Container>

                <h2 className='text-center'>Our Service</h2>

                <div className="row">

                    {
                        allImage.map((items) => {
                            console.log(items);
                            return (
                                <>
                            
                                    <div className="col-lg-3" key={items.key}>
                                        <ReactCompareSlider 
                                        itemOne={<ReactCompareSliderImage src={items.imageOne} srcSet={items.imageOne} alt="Image one" />}
                                        itemTwo={<ReactCompareSliderImage src={items.imageTwo} srcSet={items.imageTwo} alt="Image two" />}
                                        />
                                    </div>
                                </>
                            )
                            
                        })
                    }

                    
                </div>

            </Container>
        </>
    )
}

export default Services