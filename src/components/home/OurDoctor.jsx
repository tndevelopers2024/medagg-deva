import '../../assets/css/home/OurDoctor.css';
import Doimg1 from '../../assets/image/Doimg1.png';
import Doimg2 from '../../assets/image/Doimg2.png';
import Doimg3 from '../../assets/image/Doimg3.png';
import Doimg4 from '../../assets/image/Doimg4.png';


const OurDoctor = () => {
    return (
        <section className="doctors-section">
            <div className="container">
                <h2 className="doch2">
                    Our <b className="highlight">Doctors</b>
                </h2>
                <p className="description">
                    Our expert doctors provide personalized, non-surgical care with a patient-first approach,
                    guiding you to safe and effective treatments.
                </p>

                <div className="search-box">
                    <input type="text" placeholder="Type a Name" />
                    <select>
                        <option>Select Location</option>
                    </select>
                    <input type="text" placeholder="Type symptoms" />
                    <button className="search-btn">→ Search</button>
                </div>

                <div className="quick-search">
                    <span>Quick Search:</span>
                    <button>Knee Pain</button>
                    <button>Breast Nodule</button>
                    <button>Thyroid</button>
                    <button>Prostate</button>
                </div>

                <div className="doctors-grid">
                    {[
                        {
                            name: "Dr. Sankesh Mehta",
                            details: "MBBS., MD., FENVIR",
                            specialty: "Interventional Radiologist",
                            img: Doimg1,                      },
                        {
                            name: "Dr. S Kiran Kumar",
                            details: "MBBS., DNB (RD), FVIR, EBIR",
                            specialty: "Interventional Radiologist",
                            img: Doimg2
                        },
                        {
                            name: "Dr. Arul Arokia Sensan Babu",
                            details: "MBBS., MD., FENVIR",
                            specialty: "Interventional Radiologist",
                            img: Doimg3
                        },
                        {
                            name: "Dr. Periyakaruppan",
                            details: "MBBS., MD., FENVIR",
                            specialty: "Interventional Radiologist",
                            img: Doimg4
                        },
                    ].map((doctor, index) => (
                        <div key={index} className="doctor-card">
                            <img src={doctor.img} alt="Doctor" />
                            <button className="appointment-btn">→ Book Appointment</button>
                            <h3>{doctor.name}</h3>
                            <p>
                                {doctor.details}
                                <br />
                                <span>{doctor.specialty}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurDoctor;
