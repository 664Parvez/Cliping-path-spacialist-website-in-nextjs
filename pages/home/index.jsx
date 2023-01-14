import react, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

import Container from "../Components/container"
import HomeCss from '../../styles/Home.module.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Footer from "../Components/footer";


const Index = () => {

    const [ ourWork, setOurWork ] = useState([])
    const [ ourPartner, setOurPartner ] = useState([])


    useEffect(() => {

        axios.get('http://localhost:3000/api/home/home-work')
        .then((work) => {
            setOurWork(work.data)
        })

        axios.get("http://localhost:3000/api/home/our-partner")
        .then((partner) => {
            setOurPartner(partner.data)
        })
        
    }, [])

    return (
        <>
            <Container>
                <div className='row d-flex align-items-center' id={HomeCss.homePage}>
                    <div className='col-lg-7'>
                        <h1 id={HomeCss.head}>Wake up to perfectly edited product photos</h1>
                        <h4>Make Your Photo Post Production Flawless and Boost Your Business Effortlessly</h4>
                        <h5 className="my-4">16 Years of Experience | Discount on Bulk Volume</h5>
                        <p className="mb-5">From a simple white background to the most complex clipping paths. Get pixel perfect image editing services, whenever you need them.</p>

                        <button className="btn btn-lg">Get Started <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="col-lg-5">
                        <img src="/img/home-first-sec.png" alt="" />
                    </div>
                </div>


                <div id={HomeCss.our_feature_section}>
                    <div id={HomeCss.feature_content}>
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-4">
                                <h3>20,000+ Images Processed Daily</h3>
                                <p>Let us Talk</p>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className={HomeCss.feature_inner_div}>
                                            <h3>1</h3>
                                            <h4>Best Security</h4>
                                            <p>You are quite secure here. We maintain top-class NDA.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className={HomeCss.feature_inner_div}>
                                            <h3>2</h3>
                                            <h4>Top Quality Ensure</h4>
                                            <p>We ensure your quality by passing 3 steps QC Process.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className={HomeCss.feature_inner_div}>
                                            <h3>3</h3>
                                            <h4>Turnaround Time</h4>
                                            <p>Our express turnaround time is 6 to 12 hours everyday.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row d-flex align-items-center" id={HomeCss.secondSection}>
                    <div className="col-lg-5">
                        <img src="/img/home-second-sec.png" alt="" />
                    </div>
                    <div className="col-lg-7">
                        <h3>We’re your virtual photo editing and design studio</h3>
                        <p className={HomeCss.secondBoldText}><b>Image editing services for ecommerce businesses and pros, from product photographers to Amazon sellers to global brands.</b></p>
                        <p className="mb-5">Because a quick product shoot can easily turn into a week or more of editing and formatting your images. Let us look after the edits, so you can get back to the work that needs you.</p>
                        <h4>Starting at $25 per image</h4>
                    </div>
                </div>


                <div id={HomeCss.color_section}>
                        <div class="row">
                            <div id={HomeCss.padding_less} class="col-lg-4">
                                <div id={HomeCss.color_div} class="text-center color_1">
                                    <div class="color_heading">
                                        <h3 class="pb-5">Clipping Path</h3>
                                    </div>
                                    <div class="color_img">
                                        <img src="/img/red-shoe.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id={HomeCss.padding_less} class="col-lg-4">
                                <div id={HomeCss.color_2} class="text-center">
                                    <div class="color_heading">
                                        <h3 class="pb-5">Background Removal</h3>
                                    </div>
                                    <div class="color_img">
                                        <img src="/img/cap.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id={HomeCss.padding_less} class="col-lg-4">
                                <div id={HomeCss.color_3} class="text-center">
                                    <div class="color_heading">
                                        <h3 class="pb-5">Image Masking</h3>
                                    </div>
                                    <div class="color_img">
                                        <img src="/img/camera.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id={HomeCss.padding_less} class="col-lg-4">
                                <div id={HomeCss.color_4} class="text-center">
                                    <div class="color_heading">
                                        <h3 class="pb-5">Photo Retouching</h3>
                                    </div>
                                    <div class="color_img">
                                        <img src="/img/pod.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id={HomeCss.padding_less} class="col-lg-4">
                                <div id={HomeCss.color_5} class="text-center">
                                    <div class="color_heading">
                                        <h3 class="pb-5">Shadow</h3>
                                    </div>
                                    <div class="color_img">
                                        <img src="/img/chair.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id={HomeCss.padding_less} class="col-lg-4">
                                <div id={HomeCss.color_6} class="text-center">
                                    <div class="color_heading">
                                        <h3 class="pb-5">Vector Conversion</h3>
                                    </div>
                                    <div class="color_img">
                                        <img src="/img/graph.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id={HomeCss.padding_less} class="col-lg-4">
                                <div id={HomeCss.color_7} class="text-center">
                                    <div class="color_heading">
                                        <h3 class="pb-5">Multi-Clipping Path</h3>
                                    </div>
                                    <div class="color_img">
                                        <img src="./img/bicycle.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id={HomeCss.padding_less} class="col-lg-4">
                                <div id={HomeCss.color_8} class="text-center">
                                    <div class="color_heading">
                                        <h3 class="pb-5">Ghost Mannequine</h3>
                                    </div>
                                    <div class="color_img">
                                        <img src="/img/yellow-shirt.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id={HomeCss.padding_less} class="col-lg-4">
                                <div id={HomeCss.color_9} class="text-center">
                                    <div class="color_heading">
                                        <h3 class="pb-5">Color Change</h3>
                                    </div>
                                    <div class="color_img">
                                        <img src="/img/socks.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>


                <div id={HomeCss.our_work_section}>
                    <h3 className="mb-5">Here are some of our before-after work samples</h3>

                    <div className="row justify-content-center">

                        {
                          ourWork.map((items) => {
                            return (
                                <>
                                    <div className="col-lg-3">
                                        <div id={HomeCss.allWorks}>
                                            <ReactCompareSlider 
                                                itemOne={<ReactCompareSliderImage className={HomeCss.imageOne} src={items.imageOne} srcSet={items.imageOne} alt="Image one" />}
                                                itemTwo={<ReactCompareSliderImage className={HomeCss.imageTwo} src={items.imageTwo} srcSet={items.imageTwo} alt="Image two" />}
                                            />
                                        </div>
                                            <h4 className="text-center">{items.name}</h4>
                                    </div>
                                </>
                            )
                          })
                        }
                    </div>
                </div>


                <div id={HomeCss.road_map}>
                    <div className="row">
                        <div className="col-lg-5">
                            <h3>Clipping Path Graphics – Roadmap</h3>
                            <p>Transparency and clarity are the most valued factors in any service. This is why we share our project plan with our clients after we develop a tailored plan catered to their needs. But the strategy that we follow is quite simple but elegant!</p>
                        </div>
                        <div className="col-lg-7">
                            <div className={HomeCss.roadmap_div}>
                                <div className="row">
                                    <div className="col-3">

                                    </div>
                                    <div className="col-9">
                                        <h4>File Collection</h4>
                                        <p>At first, we collect the raw photos from our clients. You can send your images through FTP, WeTransfer, Google Drive, Dropbox, or other file-sharing platforms. If you send images through WhatsApp or such platforms, your photos will lose quality upon sending, and we will not receive the original pictures. Hence, you have to send us the images through file-sharing platforms only.</p>
                                    </div>

                                    <div className="col-3">

                                    </div>
                                    <div className="col-9">
                                        <h4>Designer Den</h4>
                                        <p>After receiving the pictures from you, we forward them to our designers with your notes and instructions. They will do whatever it takes to make the photos how you want, and they will not stop until the project is done!</p>
                                    </div>

                                    <div className="col-3">

                                    </div>
                                    <div className="col-9">
                                        <h4>Quality Check</h4>
                                        <p>After the designers finish editing the photos, we perform a quality check before sending them to you. We always make sure that the results meet your requirements. Although we provide unlimited revision opportunities to our clients, very few clients have felt the need to avail that due to our quality-assured service.</p>
                                    </div>

                                    <div className="col-3">

                                    </div>
                                    <div className="col-9">
                                        <h4>Delivery</h4>
                                        <p>The photos will be delivered to you through the same file-sharing platform when we are done with quality-checking. We provide a 100% data security protocol to ensure that your photos and data are safe with us!</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id={HomeCss.how_do_we_do}>
                    <div className="row text-center">
                        <div className="col-lg-4">
                            <h4>Edited by hand</h4>
                            <p>Every edit is done by a professional retoucher, not a machine, for complete control and the cleanest edges</p>
                        </div>
                        <div className="col-lg-4">
                            <h4>Pixel perfect results</h4>
                            <p>Our designers can handle even the most complex cutouts — no straight polygonal lasso lines where they shouldn’t be</p>
                        </div>
                        <div className="col-lg-4">
                            <h4>24/7 support</h4>
                            <p>Your dedicated customer support team is ready to help, whenever you need us</p>
                        </div>
                        <div className="col-lg-4">
                            <h4>Quick turnaround</h4>
                            <p>Get your images back in as little as six hours, even if you have thousands of shots to get through</p>
                        </div>
                        <div className="col-lg-4">
                            <h4>Under budget</h4>
                            <p>Edits start at just 25¢  per image, way less than it would cost to do it in-house.</p>
                        </div>
                        <div className="col-lg-4">
                            <h4>Ecommerce optimized</h4>
                            <p>Get consistent, quality images that sell, in every format you need</p>
                        </div>
                    </div>
                </div>


                <div id={HomeCss.outsourced_img}>
                    <h3>You don’t have to do everything yourself</h3>
                    <h5>Outsourced image editing services are ideal if you are...</h5>
                    <div className="row py-5 text-center mx-lg-5">
                        <div className="col-lg-4">
                            <p>A busy professional photographer with batches of edits due from a recent product photoshoot</p>
                        </div>
                        <div className="col-lg-4">
                            <p>An ecommerce retailer who wants to use their time to move the needle instead of fiddling around in Photoshop</p>
                        </div>
                        <div className="col-lg-4">
                            <p>A freelancer or agency with tight client deadlines and tons of other deliverables to wrangle</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button className="btn btn-lg">Get Started <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <div id={HomeCss.third_section}>
                    <h3>How The CPS Works</h3>
                    <p className={HomeCss.third_section_paragraph}>When it comes to editing and photo retouching service, The CPS is a stand-alone icon that has been dominating the marketplace and boosting its clients’ business for years. CPS, unlike anything, focuses on quality to create a long-lasting impression.</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row mt-4">
                                <div className="col-6">
                                    <ul>
                                        <li>
                                            <h5>1. Place Your Work Order</h5>
                                            <p>Hit the place an order button &  share your images.</p>
                                        </li>
                                        <li>
                                            <h5>3. Files on Working Queue</h5>
                                            <p>After getting confirmation, we are ready to processing your images.</p>
                                        </li>
                                        <li>
                                            <h5>5. Make Payment</h5>
                                            <p>Make your client happy  & you can pay us through PayPal, Master Card and Visa.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>
                                            <h5>2. Quick Response</h5>
                                            <p>You will get response from us within 10 Minutes.</p>
                                        </li>
                                        <li>
                                            <h5>4. Download Completed Images</h5>
                                            <p>Having the images been processed, download your images.</p>
                                        </li>
                                        <li>
                                            <h5>6. Get It Done</h5>
                                            <p>We make sure that you are one step ahead in this competitive market.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>


                <div id={HomeCss.pricing_section}>
                    <h3>Pricing of our Services</h3>
                    <p className="mb-5">CPH Graphics Media always provide good quality full service but we always try to charge as minimum as possible</p>

                    <div className="row text-center">
                        <div className="col-lg-4">
                            <h4>Clipping Path</h4>
                            <p>Start at <span>$ 0.56 USD /</span>image</p>

                            <div className={HomeCss.offer}>
                                <h5>Discount Facility</h5>
                                <p>Up to 30% On Bulk Order</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h4>Ghost Mannequin</h4>
                            <p>Start at <span>$ 0.49 USD /</span>image</p>

                            <div className={HomeCss.offer}>
                                <h5>Payment Facility</h5>
                                <p>Project - Weekly - Monthly</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h4>Photoshop Retouching</h4>
                            <p>Start at <span>$ 0.67 USD /</span>image</p>

                            <div className={HomeCss.offer}>
                                <h5>Combo Package Offer</h5>
                                <p>Silver - Gold - Patinum</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div id={HomeCss.customer_review}>
                    <h3>What Our Clients Have to Say About Us</h3>
                    <div className="row">
                        <div className="col-lg-4">
                            <div id={HomeCss.review_box}>
                                <h4>I found the ideal Retreat</h4>
                                <p>CPG is an excellent photo editing company for the prompt delivery! I have been taking their service for a long time, and they have never given any chance to complain.</p>
                                <h4>Erik Schwan</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div id={HomeCss.review_box}>
                                <h4>Amazing Platform</h4>
                                <p>For my e-commerce site, Clipping Path Graphics is always the go-to image editing company for me. They make my photos better, and they always deliver on time.</p>
                                <h4>Summer C. Crawford</h4>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div id={HomeCss.review_box}>
                                <h4>As an older customer</h4>
                                <p>I needed to add product shadow and reflection on my photos for an Amazon affiliate site. As I did not have much budget for this, I was a bit skeptical. But, clipping path graphics provided me the best deals I with high-quality service.</p>
                                <h4>Wayne G. Stewart</h4>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div id={HomeCss.finaly_section}>
                    <div className="row">
                        <div className="col-lg-7">
                            <h3 className="mb-4">Finally</h3>
                            <p className="mb-5">When it comes to art, people rely on artists more than on automated tools. Professional photo editing is nothing less than a digital art, and our designers are the artists. From just fixing the color contrast to ghost mannequin,we can do everything for you in an affordable price, with love!</p>
                            
                            <Link href="" className="btn btn-lg" id={HomeCss.get_start_btn}>Get Started</Link>
                            <Link href="" className="btn btn-lg" id={HomeCss.get_quote_btn}>Get a Quote</Link>
                        </div>
                        <div className="col-lg-5"></div>
                    </div>
                </div>


                <div id={HomeCss.blog_section}>
                    <h2>Our Blog</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card" id={HomeCss.blogCard}>
                                <img src="" alt="" />
                                <div className="card-body">
                                    <h3>How to lighten shadows in Photoshop: 3 Easy Methods!</h3>
                                    <p>Surprisingly, How to lighten shadows in Photoshop is the most . . .</p>
                                    <Link href="">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" id={HomeCss.blogCard}>
                                <img src="" alt="" />
                                <div className="card-body">
                                    <h3>Remove Object From Photo App: 5 Best Free Object Removal Apps.</h3>
                                    <p>Taking pictures is simple, but doing it correctly and at . . .</p>
                                    <Link href="">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" id={HomeCss.blogCard}>
                                <img src="" alt="" />
                                <div className="card-body">
                                    <h3>How to Swap Faces Technique in Photoshop (Quick and Easy Step)?</h3>
                                    <p>If you are waiting to learn how to swap faces . . .</p>
                                    <Link href="">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div id={HomeCss.our_pertner}>
                    <h3>Our Partner</h3>
                    <div className="row text-center">
                        {
                            ourPartner.map((data) => {
                                return(
                                    <>
                                        <div className="col-lg-2">
                                            <img src={data.img} alt="" />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>


                <div id={HomeCss.get_in_touch}>
                    <h3>Get in Touch</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Clipping Path Graphics is one of the trusted Clipping Path Service Provider in 2022. We have the experience of working in this field. Almost 5 years and working with hundred clients from all over the world.</p>

                            <h4>Call us</h4>
                            <p><i className="fa-solid fa-phone"></i> +1 (304) 574-8370</p>

                            <h4>Email</h4>
                            <p className="mb-0"> <i className="fa-solid fa-envelope"></i> info@clippingpathgraphics.com</p>
                            <p><i className="fa-solid fa-envelope"></i> clippingpathgraphics@gmail.com</p>

                            <h4>Visit Us</h4>
                            <p className="mb-0"><i className="fa-solid fa-house"></i> US Office: 10126 ADOBE DRIVE Houston TX 77095</p>
                            <p><i className="fa-solid fa-house"></i> BD Office: Bicon more collage road, Rangpur</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <input type="text" className="form-control form-control-lg" placeholder="Name" />
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <input type="email" className="form-control form-control-lg" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <input type="text" className="form-control form-control-lg" placeholder="Subject" />
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <textarea name="" id="" cols="30" rows="6" className="form-control form-control-lg" placeholder="Message"></textarea>
                                    </div>

                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-lg">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </Container>
            
            <Footer />

        </>
    )
}

export default Index
