import Head from "next/head"
import Link from "next/link"
import Image from "next/legacy/image"

import Container from "../Components/container"
import BlogCss from '../../styles/blog.module.css'

import Navbar from "../Components/Navbar"
import Footer from "../Components/footer"


export async function getServerSideProps () {

    const res = await fetch ("http://localhost:3000/api/blog")
    const data = await res.json()

    return {
        props : {
            data
        }
    }
}


const blog = ({data}) => {

    const css = {width: "100%", height: "auto" }

    return (
        <>

            <Head>
                <title>Blog</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <Container>
                <div id={BlogCss.blog_post_page}>
                    <h1 className="text-center">The CPS Blog</h1>
                    <p className="text-center mb-4">Resources, advise and inspiration for creators</p>
                    <div className="row">

                        {
                          data.allBlog.map((items) => {
                            return (
                                <>
                                    {
                                        items.no % 2 === 1 ? 
                                        <div className="col-lg-7 mt-4">
                                            <Image width="200" height="100" layout="responsive" style={css} src={items.blogImg} alt="" />
                                            <p><span>Jan 23, 23</span> | <span>Author : Parvez</span> | <span>Category : {items.blogCategory}</span></p>
                                            <h3>{items.blogTitle}</h3>
                                            <h5>{items.blogSubTitle}</h5>
                                            <p>{ items.blogPara.slice(0, 100) } . . . .</p>
                
                                            <Link href={`/blog/${items.blogSlug}`}>Read More</Link>
                                        </div> 
                                        
                                        : 
                                        
                                        <div className="col-lg-5 mt-4">
                                            <Image width="200" height="100" layout="responsive" style={css} src={items.blogImg} alt="" />
                                            <p><span>Jan 23, 23</span> | <span>Author : Parvez</span> | <span>Category : {items.blogCategory}</span></p>
                                            <h3>{items.blogTitle}</h3>
                                            <h5>{items.blogSubTitle}</h5>
                                            <p>{ items.blogPara.slice(0, 100) } . . . .</p>
            
                                            <Link href={`/blog/${items.blogSlug}`}>Read More</Link>
                                        </div>
                                    }
                                </>
                            )
                          })  
                        }

                    </div>
                </div>
            </Container>

            <Footer />
        </>
    )
}

export default blog