import '../../assets/css/home/ConsultExpo.css';
import Conimg1 from '../../assets/image/Conimg1.png';
import Conimg2 from '../../assets/image/Conimg2.png';
import Conimg3 from '../../assets/image/Conimg3.png';
import Conimg4 from '../../assets/image/Conimg4.png';


const ConsultExpo = () => {
    return(
        <div>
              <section className="consult-section">
    <div className="consult-container">
      <div className="left-panel">
        <h2>Consult With Our <br /> <b>Experts</b></h2>
        <p className="subtext">Get Expert Guidance And Clarity On The Best Non-Surgical Treatments Tailored To You.</p>

        <div className="step">
          <div className="icon"><img src={Conimg1} alt="" /></div>
          <p>Our Care Custodian Will Call You Once You Share Your Details</p>
        </div>

        <div className="step">
          <div className="icon"><img src={Conimg2} alt="" /></div>
          <p>The Care Custodian Will Understand Your Problem In Detail</p>
        </div>

        <div className="step">
          <div className="icon"><img src={Conimg3} alt="" /></div>
          <p>The Right Solution To Your Query Will Be Addressed With Suitable Options</p>
        </div>

        <div className="step">
          <div className="icon"><img src={Conimg4} alt="" /></div>
          <p>Consultation Will Be Fixed On Your Behalf</p>
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