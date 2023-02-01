import Head from "next/head"
import Link from "next/link"

import Container from "../Components/container"
import HowitCss from '../../styles/how_it_work.module.css'

import Navbar from "../Components/Navbar"
import Footer from "../Components/footer"


export async function getServerSideProps () {

    const res = await fetch("http://localhost:3000/api/how-it-work")
    const data = await res.json()

    return{
        props : {
            data
        }
    }
}


const how_it = ({data}) => {
    return (
        <>

        <Head>   
            <title>How It Work</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />   
        </Head>

        <Navbar />

        <Container>

            <div id={HowitCss.how_it_heading}>
                <div className="row">
                    <div className="col-lg-7">
                        <h1>{data.headTitle}</h1>
                        <p>{data.headPara}</p>
                    </div>
                    <div className="col-lg-5">
                        <img src={data.headImg} alt="" />
                    </div>
                </div>
            </div>

            <div id={HowitCss.how_it_first}>
                <div className="row d-flex align-items-center">

                    {
                        data.steps.map((items) => {
                            return(
                                <>
                                    <div className="col-lg-5">
                                        <img src={items.firstImg} alt="" />
                                    </div>
                                    <div className="col-lg-7">
                                        <h2>{items.firstStep}</h2>
                                        <h4>{items.firstTitle}</h4>
                                        <p>{items.firstPara}</p>

                                        {
                                            items.firstNumber === 2 ? <div className="row" id={HowitCss.formats}>
                                                {
                                                    items.firstTwoFormat.map((items) => {
                                                        return(
                                                            <>
                                                                <div className="col-3" key="">
                                                                    <div className={HowitCss.formate_div}>
                                                                        <p className="mb-0">{items.format}</p>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )
                                                                  
                                                    })
                                                }
                                            </div> : ""
                                        }

                                        {
                                            items.firstNumber === 1 ? <Link href='/get-a-quote' className="btn btn-lg mb-4" id={HowitCss.how_it_first_btn}>Get a Quote <i className="fa-solid fa-arrow-right"></i></Link> : ""
                                        }
                                        
                                    </div>

                                    <hr />
                                </>
                            )
                        })
                    }


                </div>
            </div>


            <div id={HowitCss.pixel_perfect_section}>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-3 text-center">
                        <img src={data.secondImg} alt="" />
                    </div>
                    <div className="col-lg-9">
                        <h3>{data.secondTitle}</h3>
                        <p>{data.secondPara}</p>
                        <Link href="/login" className="btn btn-lg" id={HowitCss.how_get_start_btn}>Get Started <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

        </Container>

        <Footer />
        </>
    )
}

export default how_it