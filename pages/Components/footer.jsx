import Link from "next/link"
import FooterCss from "../../styles/footer.module.css"

let date = new Date()
let year = date.getFullYear()

const Footer = () => {
    return (
        <>
            <div id={FooterCss.first_footer} className="text-center">

                <div className={FooterCss.footer_logo}>
                    <img src="/img/logo.png" alt="" />
                </div>

                <div className={FooterCss.services}>
                    <ul>
                        <li><Link href="">Background Removal Service</Link></li>
                        <li><Link href="">Clipping Path Services</Link></li>
                        <li><Link href="">Ecommerce Product Photo Editing</Link></li>
                        <li><Link href="">Ghost Mannequin Services</Link></li>
                        <li><Link href="">Image Masking Service</Link></li>
                        <li><Link href="">Photo Retouching Services</Link></li>
                        <li><Link href="">Image Shadow Making Service</Link></li>
                        <li><Link href="">Color Change Service</Link></li>
                        <li><Link href="">Multi-Clipping Service</Link></li>
                        <li><Link href="">Vector Service</Link></li>
                    </ul>
                </div>

                <div className={FooterCss.pages}>
                    <ul>
                        <li><Link href="">About Us</Link></li>
                        <li><Link href="">Blog</Link></li>
                        <li><Link href="">Pricing</Link></li>
                        <li><Link href="">Portfolio</Link></li>
                        <li><Link href="">Contact Us</Link></li>
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
                                <li><Link href="">FAQ</Link></li>
                                <li><Link href="">Help</Link></li>
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