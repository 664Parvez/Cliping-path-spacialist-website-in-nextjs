import Container from '../Components/container'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


export async function getServerSideProps () {

    const res = await fetch("http://localhost:3000/api/servicesimage")
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}


const Services = ({ data }) => {

    return(
        <>
            <Container>

                <h2 className='text-center'>Our Service</h2>

                <div className="row">

                    {
                        data.map((items) => {
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