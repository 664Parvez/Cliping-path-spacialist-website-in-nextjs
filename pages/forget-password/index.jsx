import Container from "../Components/container"
import ForgetCss from "../../styles/forget-password.module.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

import Navbar from "../Components/Navbar"
import Footer from "../Components/footer"

const forgetPassword = () => {
    return (
        <>
            <Head>   
                <title>Forget Password</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <Container>
                <div id={ForgetCss.login_logo} className="text-center">
                    <img src="/img/logo.png" alt="" />
                </div>

                <div id={ForgetCss.login_form}>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <div id={ForgetCss.full_form}>
                                    
                                    <label htmlFor="email" className="mt-4">Email*</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />

                                    <button type="submit" className="btn" id={ForgetCss.signup_btn}>Get New Password</button>

                                    <div className="text-center mt-4">
                                        <Link href="/login">Back to Login</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </form>
                </div>
            </Container>

            <Footer />
        </>
    )
}

export default forgetPassword