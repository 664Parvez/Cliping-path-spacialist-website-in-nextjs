import ServiceCss from '../../styles/service.module.css'
import Image from "next/legacy/image"

const Form = ({data}) => {

    const css = {width: "100%", height: "auto" }

    return (
        <>
            <div id={ServiceCss.form_of_upload}>
                <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <Image width="130" height="150" layout="responsive" style={css} src="/img/Get-started-with-free-trial.jpg" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <h2>Get Started With the FREE TRIAL</h2>
                                <p>Complete the form, upload your images, and get your free trial project done in 1 hour.</p>

                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6 mt-4">
                                            <label htmlFor="">Name</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='Enter Your Name' />
                                        </div>
                                        <div className="col-lg-6 mt-4">
                                            <label htmlFor="">Email</label>
                                            <input type="email" className='form-control form-control-lg' placeholder='Enter Your Email' />
                                        </div>
                                    </div>
                                    
                                    <label htmlFor="" className='mt-4'>Selece Services</label>
                                    <select aria-label="Default select example" name="service_item" required="required" className="form-select form-control-lg">
                                        <option selected="selected" disabled="disabled">Please select service</option>
                                        <option value="Clipping Path">Clipping Path</option>
                                        <option value="Clipping Path">Ecommerce Photo Editing</option>
                                        <option value="Clipping Path">Photo-Retouching</option>
                                        <option value="Clipping Path">Image Masking</option>
                                        <option value="Clipping Path">Vector Conversion</option>
                                        <option value="Clipping Path">Shadow Creation</option>
                                        <option value="Clipping Path">Photo Halalization</option>
                                        <option value="Clipping Path">Real Estate Image Editing</option>
                                        <option value="Clipping Path">Color Correction</option>
                                        <option value="Clipping Path">Ghost Mannequin</option>
                                    </select>

                                    <label htmlFor="" className='mt-4'>Your Message</label>
                                    <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='Your Message'></textarea>

                                    <div id={ServiceCss.upload_section} className="text-center mt-4" data-name="trial-files">
                                        <h3>Drag & Drop Files Here</h3>
                                        <p>or</p>
                                        <label for="file_upload">Upload Your File</label>
                                        <input type="file" id="file_upload" multiple="multiple" data-name="trial-files" data-type="jpg|png|jpeg|svg" data-limit="5242880" data-max="5" data-id="1288" accept=".jpg, .png, .jpeg, .svg" />
                                    </div>

                                    <p id={ServiceCss.size_message} className="text-center mt-4">If the size of your Images is more than 25mb then share your images link here from your cloud like Google Drive, Dropbox, OneDrive or Wetransfer.</p>

                                    <input type="text" className='form-control form-control-lg' placeholder='Insert Your Link' />
                                    
                                    <div className="agree_terms mt-4">
                                        <input type="checkbox" /> I have read and agree to the Terms & Conditions
                                    </div>

                                    <button className='btn btn-lg' id={ServiceCss.form_btn}>Submit</button>

                                </form>

                            </div>
                </div>
            </div>
        </>
    )
}


export default Form