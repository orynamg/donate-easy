

const Popup = props => {
    return (
        <>
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                    <>
                        <h1>Choose Your Delivery</h1>
                        <div className="pop-up-flexbox">
                            <div className="map">j
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d549.9391838715991!2d-0.1427103197845651!3d51.59160978052196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a2cdc783c1f%3A0xa9f04899bde378bc!2sOxfam%20Bookshop!5e0!3m2!1sen!2suk!4v1645720207236!5m2!1sen!2suk" height="200" width="300" tstyle="border:0;" loading="lazy" allowfullscreen=""></iframe>
                            </div>
                            <div className="delivery-options">
                                <form action="">
                                    <label for="start">Start date:</label>
                                    <input type="date" id="date-of-delivery" name="date-of-delivery"
            
                                        min="2022-01-01" max="2023-12-31">
                                    </input>

                                </form>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    );

}

export default Popup;