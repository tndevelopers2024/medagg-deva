import '../../assets/css/home/PatientSay.css';
import Perimg1 from '../../assets/image/Perimg1.png';
import Perimg2 from '../../assets/image/Perimg2.png';
import Perimg3 from '../../assets/image/Perimg3.png';
import Perimg4 from '../../assets/image/Perimg4.png';

const PatientSay = () => {
    return(
        <div>
             <section className="testimonials-section">
    <div className="testimonials-content">
      <h2>What Our Patients <b>Says</b></h2>
      <p className="subtitle">Real stories from real patients — see how Medagg’s care made a real difference.</p>

      <div className="testimonial-grid">
   
        <div className="testimonial-card">
          <p className="quote">“Real professionals in offering advice about specialised doctors and hospitals. Appreciate their commitment to follow up even after advice.”</p>
          <div className="patient-info">
            <img src={Perimg1} alt="Priya"/>
            <div>
              <h4>Priya Ramasamy</h4>
              <span>Salem</span>
            </div>
          </div>
        </div>

     
        <div className="testimonial-card">
          <p className="quote">“Real professionals in offering advice about specialised doctors and hospitals. Appreciate their commitment to follow up even after advice.”</p>
          <div className="patient-info">
            <img src={Perimg2} alt="Kalim"/>
            <div>
              <h4>Kalim Ahmed</h4>
              <span>Chennai</span>
            </div>
          </div>
        </div>


        <div className="testimonial-card">
          <p className="quote">“Real professionals in offering advice about specialised doctors and hospitals. Appreciate their commitment to follow up even after advice.”</p>
          <div className="patient-info">
            <img src={Perimg3} alt="Sri Ram"/>
            <div>
              <h4>Sri Ram</h4>
              <span>Thanjavur</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="quote">“Real professionals in offering advice about specialised doctors and hospitals. Appreciate their commitment to follow up even after advice.”</p>
          <div className="patient-info">
            <img src={Perimg4} alt="Ramasamy"/>
            <div>
              <h4>Ramasamy</h4>
              <span>Chennai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    );
}
export default PatientSay;
