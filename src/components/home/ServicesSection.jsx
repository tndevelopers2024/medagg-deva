import React from 'react'
import '../../assets/css/home/ServicesSection.css'; //


const ServicesSection = () => {
  return (
    <div>
      <section className="treatment-section">
    <h1>
      Say Goodbye to <b className="highlight">Surgery</b>
    </h1>
    <p className="subtitle">Explore Safer, Scar-Free Treatments</p>

    <div className="treatment-grid">
      
      <div className="treatment-card active">
        <h3>Geniculate Artery Embolization</h3>
        <p>A non-surgical solution to relieve chronic knee pain safely.</p>
        <div className="card-footer">
          <button className="arrow-btn active">→</button>
          <img src={'/image/img1.png'} alt="Knee"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Prostate Artery Embolization</h3>
        <p>Minimally invasive relief for varicocele without surgery.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={'/image/img2.png'} alt="Prostate"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Fallopian Tube Recanalization</h3>
        <p>Non-surgical treatment to unblock fallopian tubes.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={'/image/img3.png'} alt="Fallopian"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Varicocele Embolization</h3>
        <p>Minimally invasive relief for varicocele without surgery.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={'/image/img4.png'} alt="Varicocele"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Thyroid Nodule Ablation</h3>
        <p>Minimally invasive treatment for thyroid nodules.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={'/image/img5.png'} alt="Thyroid"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Uterine Fibroid Embolization</h3>
        <p>A non-surgical procedure to shrink fibroids and relieve symptoms.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={'/image/img6.png'}alt="Fibroid"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Varicose Veins</h3>
        <p>Non-surgical treatment for varicose veins.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={'/image/img7.png'}alt="Veins"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Transcatheter Aortic Valve Replacement</h3>
        <p>Non-surgical aortic valve replacement for better heart function.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={'/image/img8.png'} alt="Valve"/>
        </div>
      </div>
    </div>

   
    <div className="pagination">
      <span className="dot active"></span>
      <span className="dot"></span>
    </div>
  </section>
      
    </div>
  )
}

export default ServicesSection