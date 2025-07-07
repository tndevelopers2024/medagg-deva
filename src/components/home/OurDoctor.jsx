import '../../assets/css/home/OurDoctor.css';

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
                <div className='input-border'>
                     <div className="search-box">
                        {/* <label htmlFor="">Name</label> */}
                    <input type="text" placeholder="Type a Name" />
                    {/* <label htmlFor="">Locations</label> */}
                    <select>
                        
                        <option>Select Location</option>
                    </select>
                    {/* <label htmlFor="">Symptoms</label> */}
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
                </div>


                <div className="doctors-grid">
                    {[
                        {
                            name: "Dr. Sankesh Mehta",
                            details: "MBBS., MD., FENVIR",
                            specialty: "(Interventional Radiologist)",
                            img: '/image/Doimg1.png',                      },
                        {
                            name: "Dr. S Kiran Kumar",
                            details: "MBBS., DNB (RD), FVIR, EBIR",
                            specialty: "(Interventional Radiologist)",
                            img: '/image/Doimg2.png'
                        },
                        {
                            name: "Dr. Arul Arokia Sensan Babu",
                            details: "MBBS., MD., FENVIR",
                            specialty: "(Interventional Radiologist)",
                            img: '/image/Doimg3.png'
                        },
                        {
                            name: "Dr. Periyakaruppan",
                            details: "MBBS., MD., FENVIR",
                            specialty: "(Interventional Radiologist)",
                            img: '/image/Doimg4.png'
                        },
                    ].map((doctor, index) => (
                        <div key={index} className="doctor-card">
                            <img src={doctor.img} alt="Doctor" className={index === 2 ? "large-image" :"Doctorimg3"} />
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
