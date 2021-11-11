function ContactUs() {
    return (
        <>
            <div className="contact-us">
                <div className="contact-us-img"></div>

                <div className="contact-flex">
                    <div className="contact-card">
                        <div className="title">
                            <i class="fas fa-truck-moving"></i>
                            <h1>Contact Us</h1>
                            <h3>Send us a message and we will reply shortly.</h3>
                        </div>
                        <form action="">
                            <div class="form-items">
                                <div className="name-input">
                                    <input className="input-box" type="text" name="name" id="name" placeholder="Name"></input>
                                </div>
                                <div className="surname-input">
                                    <input className="input-box" type="text" name="surname" id="surname" placeholder="Surname"></input>
                                </div>
                                <div className="email-input">
                                    <input className="input-box" type="email" name="email" id="email" placeholder="Email"></input>
                                </div>
                            </div>
                            <div>
                                <textarea name="message" id="message" cols="50" rows="5" placeholder="Message"></textarea>
                                
                            </div>
                            <button type="submit" class="btn">SUBMIT</button>
                        </form>
                    </div>
                </div>


            </div>
        </>
    );
 }

 export default ContactUs;