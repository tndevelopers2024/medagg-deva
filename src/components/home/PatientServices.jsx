import '../../assets/css/home/PatientServices.css'
import Pimg1 from '../../assets/image/Pimg1.png';
import Pimg2 from '../../assets/image/Pimg2.png';
import Pimg3 from '../../assets/image/Pimg3.png';
import Pimg4 from '../../assets/image/Pimg4.png';
import Ellipse1 from '../../assets/image/Ellipse1.png';
import Ellipse2 from '../../assets/image/Ellipse2.png';


const PatientServices = () => {
    return(
        <div>
            <section className="journey-section">
  <div className="journey-header">
    <h2><b>Patient</b> Journey</h2>
    <p>
      Every patient’s journey is unique — and so is our care. From the first consultation to recovery,<br></br>
      we guide you with compassion, clarity, and expert support at every step.
    </p>
  </div>

  <div className="journey-steps">
    <div className="journey-step">
      <div className="label dark">Consultation & Planning</div>
      <div className="circle dark">
        <img src={Pimg1} alt="Consultation"/>
      </div>
      <img className='Ellipse1' src={Ellipse2} alt="Consultation"/>
    </div>
    <div style={{justifyItems:"left"}} className="journey-step">
       <img className='Ellipse2' src={Ellipse1} alt="Consultation"/>
      <div style={{ marginLeft:82}} className="circle pink">
        <img src={Pimg2} alt="Booking"/>
      </div>
      <div style={{ marginLeft:58}} className="label pink">Booking & Coverage</div>
    </div>

    <div style={{justifyItems:"left"}} className="journey-step">
      <div  className="label dark">Treatment & Care</div>
      <div style={{ marginLeft:46}} className="circle dark">
        <img src={Pimg3} alt="Care"/>
      </div>
       <img className='Ellipse3' src={Ellipse2} alt="Consultation"/>
    </div>
    <div style={{justifyItems:"left"}} className="journey-step">
       <img className='Ellipse4' src={Ellipse1} alt="Consultation"/>
      <div style={{ marginLeft:16}} className="circle pink">
        <img src={Pimg4} alt="Recovery"/>
      </div>
      <div className="label pink">Recovery & Results</div>
    </div>
  </div>
</section>
        </div>
    );
}
export default PatientServices;