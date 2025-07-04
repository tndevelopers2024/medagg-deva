import '../../assets/css/home/WhyMedagg.css';
import  Wimg1 from '../../assets/image/Wimg1.png';
import  Wimg2 from '../../assets/image/Wimg2.png';
import  Wimg3 from '../../assets/image/Wimg3.png';
import  Wimg4 from '../../assets/image/Wimg4.png';
import  Wimg5 from '../../assets/image/Wimg5.png';
import  Wimg6 from '../../assets/image/Wimg6.png';


const WhyMedagg = () => {
    return(
        <div>
            <section className="why-medagg">
  <div className="container">
    <h2 className="section-title"><b>Why</b> Medagg</h2>
    <p className="section-subtitle">
      Medagg offers expert, non-surgical treatments with personalized care. <br/>
      We guide you with precision, compassion, and trusted medical expertise.
    </p>

    <div className="features-grid">
      <div className="feature-card">
        <img src={Wimg1} alt="Surgeries" />
        <h3>SURGERIES SIMPLIFIED</h3>
        <p>
          Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries
        </p>
      </div>
      <div className="feature-card ">
        <img src={Wimg2}  alt="Care Custodian" />
        <h3>CARE CUSTODIAN</h3>
        <p>
          Medagg Healthcare’s Care Custodian will be your one point contact, who will guide and help you choose the right treatment, with the right hospital!
        </p>
      </div>

      <div className="feature-card">
        <img src={Wimg3}  alt="Insurance" />
        <h3>ALL INSURANCE ACCEPTED</h3>
        <p>
          Medagg healthcare helps you in getting the right hospital for your insurance policy. All insurances are accepted
        </p>
      </div>

      <div className="feature-card">
        <img src={Wimg4} alt="Second Opinion" />
        <h3>SECOND OPINION</h3>
        <p>
          Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries
        </p>
      </div>
      <div className="feature-card">
        <img src={Wimg5}  alt="Post Care" />
        <h3>POST SURGERY CARE</h3>
        <p>
          Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries
        </p>
      </div>
      <div className="feature-card">
        <img src={Wimg6}  alt="No-cost EMI" />
        <h3>NO-COST EMI</h3>
        <p>
          Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries
        </p>
      </div>
    </div>
      <section className="isvir-section">
    <div className="isvir-container">
      <div className="isvir-logo">
        <img src="/logo/Logo.png" alt="ISVIR Logo" />
        <div className="logo-text1">
              <h2 className="ilogo"><span>ISVIR </span>Indian Society of Vascular and<br />Interventional Radiology</h2>
            </div>
      </div>
      <div className="isvir-text">
        <h4><span>Corporate Member of ISVIR</span></h4>
        <p>Medagg healthcare is the official corporate member ISVIR.</p>
      </div>
    </div>
  </section>
  </div>
</section>

        </div>
    );
}
export default WhyMedagg;