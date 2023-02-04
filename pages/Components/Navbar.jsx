import Image from "next/legacy/image"

import React, {useState} from "react"
import NavbarCss from "../../styles/navbar.module.css";
import Link from "next/link"

const Navbar = () => {

    const [show, setShow] = useState(false)
    const [ serviceShow, setServiceShow ] = useState(false)

    const showNavbar = () => {
        setShow(!show)
    }

    const service_show = () => {
        setServiceShow(!serviceShow)
    }

    const css = {width: "100%", height: "auto" }

    return (
        <>
            <div id={NavbarCss.navbar}>
                <div className="d-flex align-items-center">
                        <Link href='/'>
                            <Image width="180" height="50" layout="intrinsic" style={css} id={NavbarCss.logo} src="/img/logo.png" alt="" />
                        </Link>

                        <ul id={NavbarCss.navItems} className='m-auto'>
                            <li><Link href="/">Home</Link></li>
                            <li id={NavbarCss.service}><Link href="#">Services <i className="fa-solid fa-caret-down"></i></Link>
                                <div id={NavbarCss.serviceItems}>
                                    <ul>
                                        <li><Link href="/clipping-path-service">Clipping Path Service</Link></li>
                                        <li><Link href="/background-removal-service">Background Removal Service</Link></li>
                                        <li><Link href="/image-masking-service">Image Masking Service</Link></li>
                                        <li><Link href="/photo-retuching-service">Photo Retouching Service</Link></li>
                                        <li><Link href="/shadow-service">Shadow Service</Link></li>
                                        <li><Link href="/vector-conversion-service">Vector Conversion Service</Link></li>
                                        <li><Link href="/multi-clipping-path-service">Multi-Clipping Path Service</Link></li>
                                        <li><Link href="/ghost-mannequine-service">Ghost Mannequine Service</Link></li>
                                        <li><Link href="/color-change-service">Color Change Service</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/how-it-work">How It Work</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                            <li><Link href="/our-offer" className="btn" id={NavbarCss.offer_btn}>Our Offer</Link></li>
                        </ul>
                        
                        <div id={NavbarCss.two_btn}>
                            <Link href="/free-trial" className="btn" id={NavbarCss.trial_btn}>Free Trial</Link>
                            <Link href="/login" className="btn" id={NavbarCss.account_btn}>My Account</Link>
                        </div>
                        
                        <div id={NavbarCss.hambar}>
                            <Image width="50" height="50" layout="intrinsic" style={css} src="/img/hambar.png" onClick={showNavbar} alt="" />
                        </div>
                    
                </div>

                <div className={show ? "responsive_navbar_show" : "responsive_navbar"}>
                    <ul id="responsiveNavItems" className='m-auto'>
                        <li><Link href="/">Home</Link></li>
                        <li onClick={service_show}><Link href="#">Services <i class="fa-solid fa-caret-down"></i></Link>
                            <div id={serviceShow ? "responsive_serviceItems_show" : "responsive_serviceItems"}>
                                    <ul>
                                        <li><Link href="/clipping-path-service">Clipping Path Service</Link></li>
                                        <li><Link href="/background-removal-service">Background Removal Service</Link></li>
                                        <li><Link href="/image-masking-service">Image Masking Service</Link></li>
                                        <li><Link href="/photo-retuching-service">Photo Retouching Service</Link></li>
                                        <li><Link href="/shadow-service">Shadow Service</Link></li>
                                        <li><Link href="/vector-conversion-service">Vector Conversion Service</Link></li>
                                        <li><Link href="/multi-clipping-path-service">Multi-Clipping Path Service</Link></li>
                                        <li><Link href="/ghost-mannequine-service">Ghost Mannequine Service</Link></li>
                                        <li><Link href="/color-change-service">Color Change Service</Link></li>
                                    </ul>
                            </div>
                        </li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/how-it-work">How It Work</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                        <Link href="/our-offer" className="btn btn-lg" id="response_offer_btn">Our Offer</Link>
                        <div className="text-center mt-4">
                            <Link href="/free-trial" className="btn" id={NavbarCss.response_trial_btn}>Free Trial</Link>
                            <Link href="/login" className="btn" id={NavbarCss.response_account_btn}>My Account</Link>
                        </div>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Navbar