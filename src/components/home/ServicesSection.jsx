import React from 'react'
import '../../assets/css/home/ServicesSection.css'; //
import img1 from '../../assets/image/img1.png';
import img2 from '../../assets/image/img2.png';
import img3 from '../../assets/image/img3.png';
import img4 from '../../assets/image/img4.png';
import img5 from '../../assets/image/img5.png';
import img6 from '../../assets/image/img6.png';
import img7 from '../../assets/image/img7.png';
import img8 from '../../assets/image/img8.png';

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
          <img src={img1} alt="Knee"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Prostate Artery Embolization</h3>
        <p>Minimally invasive relief for varicocele without surgery.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={img2} alt="Prostate"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Fallopian Tube Recanalization</h3>
        <p>Non-surgical treatment to unblock fallopian tubes.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={img3} alt="Fallopian"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Varicocele Embolization</h3>
        <p>Minimally invasive relief for varicocele without surgery.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={img4} alt="Varicocele"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Thyroid Nodule Ablation</h3>
        <p>Minimally invasive treatment for thyroid nodules.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={img5} alt="Thyroid"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Uterine Fibroid Embolization</h3>
        <p>A non-surgical procedure to shrink fibroids and relieve symptoms.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={img6}alt="Fibroid"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Varicose Veins</h3>
        <p>Non-surgical treatment for varicose veins.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={img7}alt="Veins"/>
        </div>
      </div>

      <div className="treatment-card">
        <h3>Transcatheter Aortic Valve Replacement</h3>
        <p>Non-surgical aortic valve replacement for better heart function.</p>
        <div className="card-footer">
          <button className="arrow-btn">→</button>
          <img src={img8} alt="Valve"/>
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