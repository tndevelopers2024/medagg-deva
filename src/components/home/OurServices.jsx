import '../../assets/css/home/OurServices.css';


const OurServices = () => {
    return(
        <div>
            <section className="services-section">
    <div className="services-header">
      <h2>Our <b className="highlight">Services</b></h2>
      <p>Care that’s safer, smarter, and surgery-free.</p>
    </div>

    <div className="services-cards">
     
      <div className="service-card">
        <div className="service-icon">
          <img src={'/image/Oc1.png'} alt="Surgical Icon"/>
        </div>
        <h3>SURGICAL</h3>
        <p>We Connect you with top hospitals and expert doctors for exceptional care.</p>
      </div>

     
      <div className="service-card">
        <div className="service-icon">
          <img src={'/image/Oc2.png'} alt="Non-Surgical Icon"/>
        </div>
        <h3>NON - SURGICAL</h3>
        <p>Medagg’s Care Custodians offer expert guidance on alternative treatments to surgery.</p>
      </div>

   
      <div className="service-card">
        <div className="service-icon">
          <img src={'/image/Oc3.png'} alt="Second Opinion Icon"/>
        </div>
        <h3>SECOND OPINION</h3>
        <p>Get expert second opinions from top doctors for the best care decisions.</p>
      </div>
    </div>
  </section>
        </div>
    );
}
export default OurServices;