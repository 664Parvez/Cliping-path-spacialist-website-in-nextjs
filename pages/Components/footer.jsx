import Image from "next/legacy/image"
import Link from "next/link"
import FooterCss from "../../styles/footer.module.css"

let date = new Date()
let year = date.getFullYear()


const Footer = () => {


    const css = {width: "100%", height: "auto" }


    return (
        <>

            <div className={FooterCss.footer_top_section}>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer_top_content content_line_phone" id={FooterCss.content_line_one}>
                            <div className={FooterCss.icon}>
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className={FooterCss.text_section}>
                                <p className="mb-0 text-white">Give Us A Call</p>
                                <h5 className="text-white"><b>+(62) 800-567-8990</b></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer_top_content content_line_phone" id={FooterCss.content_line_two}>
                            <div className={FooterCss.icon}>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className={FooterCss.text_section}>
                                <p className="mb-0 text-white">Send Us A Message</p>
                                <h5 className="text-white"><b>support@domain.com</b></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer_top_content content_line_phone" id={FooterCss.content_line_three}>
                            <div className={FooterCss.icon}>
                                <i className="fa-sharp fa-solid fa-location-dot"></i>
                            </div>
                            <div className={FooterCss.text_section}>
                                <p className="mb-0 text-white">Official Location</p>
                                <h5 className="text-white"><b>Teuku Umar ST. 1919</b></h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer_top_content content_line_phone" id={FooterCss.content_line_four}>
                            <div className={FooterCss.icon}>
                                <i className="fa-solid fa-clock"></i>
                            </div>
                            <div className={FooterCss.text_section}>
                                <p className="mb-0 text-white">Opening Hours</p>
                                <h5 className="text-white"><b>09:00 AM - 18:00 PM</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id={FooterCss.first_footer} className="text-center">

                <div className={FooterCss.footer_logo}>
                    <Image width="200" height="60" layout="intrinsic" style={css} src="/img/logo.png" alt="" />
                </div>

                <div className={FooterCss.services}>
                    <ul>
                        <li><Link href="/background-removal-service">Background Removal Service</Link></li>
                        <li><Link href="/clipping-path-service">Clipping Path Services</Link></li>
                        <li><Link href="/ghost-mannequine-service">Ghost Mannequin Services</Link></li>
                        <li><Link href="/image-masking-service">Image Masking Service</Link></li>
                        <li><Link href="/photo-retuching-service">Photo Retouching Services</Link></li>
                        <li><Link href="/shadow-service">Image Shadow Making Service</Link></li>
                        <li><Link href="/color-change-service">Color Change Service</Link></li>
                        <li><Link href="/multi-clipping-path-service">Multi-Clipping Path Service</Link></li>
                        <li><Link href="/vector-conversion-service">Vector Conversion Service</Link></li>
                    </ul>
                </div>

                <div className={FooterCss.pages}>
                    <ul>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>

                <hr />

                <div className="row">
                    <div className="col-lg-8">
                        <div className={FooterCss.policy_menu}>
                            <ul>
                                <li><Link href="">Privacy Policy</Link></li>
                                <li><Link href="">Refund Policy</Link></li>
                                <li><Link href="">Terms & Conditions</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                                <li><Link href="/help">Help</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={FooterCss.social_media}>
                            <ul>
                                <li><Link href=""><i className="fa-brands fa-facebook"></i></Link></li>
                                <li><Link href=""><i className="fa-brands fa-linkedin"></i></Link></li>
                                <li><Link href=""><i className="fa-brands fa-square-twitter"></i></Link></li>
                                <li><Link href=""><i className="fa-brands fa-square-behance"></i></Link></li>
                                <li><Link href=""><i className="fa-brands fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <hr />

            <div id={FooterCss.second_footer} className="text-center">
                    
                <p>&copy; {year} Picture Clipping Path. All Rights Reserved. | Design & Development By:- <Link href="">Parvez Rabbi</Link></p>
                    
                <div className={FooterCss.payment_method}>
                    <ul>
                        <li><Link href=""><i className="fa-brands fa-cc-mastercard"></i></Link></li>
                        <li><Link href=""><i className="fa-brands fa-cc-paypal"></i></Link></li>
                        <li><Link href=""><i className="fa-brands fa-cc-visa"></i></Link></li>
                        <li><Link href=""><i className="fa-brands fa-amazon-pay"></i></Link></li>
                        <li><Link href=""><i className="fa-brands fa-stripe"></i></Link></li>
                    </ul>
                </div>
               
            </div>


        </>
    )
}

export default Footer