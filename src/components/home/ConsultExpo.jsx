import '../../assets/css/home/ConsultExpo.css';

const ConsultExpo = () => {
    return(
        <div>
              <section className="consult-section">
    <div className="consult-container">
      <div className="left-panel">
        <h2>Consult With Our  <b>Experts</b></h2>
        <div className="border-right">
        <p className="subtext">Get Expert Guidance And Clarity On The Best Non-Surgical Treatments Tailored To You.</p>

        <div className="step">
          <div className="icon"><img src={'/image/Conimg1.png'} alt="" /></div>
          <p>Our Care Custodian Will Call You Once You Share Your Details</p>
        </div>
        <div className="arrowimg"><img className='arrow' src={'/image/ArrowConExpo.png'} alt="" /></div>
        <div className="step">
          <div className="icon"><img src={'/image/Conimg2.png'} alt="" /></div>
          <p>The Care Custodian Will Understand Your Problem In Detail</p>
        </div>
        <div className="arrowimg"><img className='arrow' src={'/image/ArrowConExpo.png'} alt="" /></div>

        <div className="step">
          <div className="icon"><img src={'/image/Conimg3.png'} alt="" /></div>
          <p>The Right Solution To Your Query Will Be Addressed With Suitable Options</p>
        </div>
        <div className="arrowimg"><img className='arrow' src={'/image/ArrowConExpo.png'} alt="" /></div>

        <div className="step">
          <div className="icon"><img src={'/image/Conimg4.png'} alt="" /></div>
          <p>Consultation Will Be Fixed On Your Behalf</p>
        </div>
        
       </div> 
      </div>

      <div className="divider"></div>

      <div className="right-panel">
        <form className="consult-form">
          <label>Name</label>
          <input type="text" placeholder="Your name" />

          <label>Phone Number</label>
          <input type="text" placeholder="Your phone number" />

          <label>Locations</label>
          <input type="text" placeholder="Enter Locations" />

          <label>Message</label>
          <textarea placeholder="Your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
        </div>
    );
}
export default ConsultExpo;