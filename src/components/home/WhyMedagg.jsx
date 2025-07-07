import '../..//assets/css/home/WhyMedagg.css';



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
         <div className="doted-border"><img src={'/image/Wimg1.png'} alt="Surgeries" /></div>
        
        <h3>SURGERIES SIMPLIFIED</h3>
        <p>
          Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries
        </p>
      </div>
      <div className="feature-card ">
        <div className="doted-border"><img src={'/image/Wimg2.png'}  alt="Care Custodian" /></div>
        <h3>CARE CUSTODIAN</h3>
        <p>
          Medagg Healthcare’s Care Custodian will be your one point contact, who will guide and help you choose the right treatment, with the right hospital!
        </p>
      </div>

      <div className="feature-card">
         <div className="doted-border"><img src={'/image/Wimg3.png'}  alt="Insurance" /></div>
        
        <h3>ALL INSURANCE ACCEPTED</h3>
        <p>
          Medagg healthcare helps you in getting the right hospital for your insurance policy. All insurances are accepted
        </p>
      </div>

      <div className="feature-card">
         <div className="doted-border"> <img src={'/image/Wimg4.png'} alt="Second Opinion" /></div>
       
        <h3>SECOND OPINION</h3>
        <p>
          Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries
        </p>
      </div>
      <div className="feature-card">
         <div className="doted-border"><img src={'/image/Wimg5.png'}  alt="Post Care" /></div>
        
        <h3>POST SURGERY CARE</h3>
        <p>
          Medagg healthcare helps you choose different options for surgery. We help you choose the best hospital. We also provide alternative treatment for surgeries
        </p>
      </div>
      <div className="feature-card">
         <div className="doted-border"><img src={'/image/Wimg6.png'}  alt="No-cost EMI" /></div>
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