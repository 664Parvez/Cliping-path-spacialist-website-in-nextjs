import ServiceCss from '../../styles/service.module.css'

const offer_Form = ({data}) => {

    return (
        <>
            <div id={ServiceCss.form_of_upload}>

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
                                        <div className="col-lg-6 mt-4">
                                            <label htmlFor="">Phone Number</label>
                                            <input type="tel" className='form-control form-control-lg' placeholder='Phone Number' />
                                        </div>
                                        <div className="col-lg-6 mt-4">
                                            <label htmlFor="">Website</label>
                                            <input type="email" className='form-control form-control-lg' placeholder='Website Link' />
                                        </div>
                                        <div className="col-lg-6 mt-4">
                                            <label htmlFor="">Your Budget</label>
                                            <input type="number" className='form-control form-control-lg' placeholder='$ 0.00' />
                                        </div>
                                        <div className="col-lg-6 mt-4">
                                            <label htmlFor="">Country</label>
                                            <input type="text" className='form-control form-control-lg' placeholder='Enter Your Country' />
                                        </div>
                                    </div>
                                    

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
        </>
    )
}


export default offer_Form