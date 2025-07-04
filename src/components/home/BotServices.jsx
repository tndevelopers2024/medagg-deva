import '../../assets/css/home/BotServices.css';
import Bot from '../../assets/image/Bot.png'; 

const BotServices = () => {
    return(
        <div>
        <section className="assistant-section">
  <div className="assistant-container">
    <div className="assistant-image">
      <img src={Bot} alt="Health Assistant Robot"/>
    </div>

    <div className="assistant-content">
      <h2><span className="highlight">Dr. Medagg :</span> Talk to Our <br/> <strong>Health Assistant</strong></h2>
      <p>Get Instant Answers, Book Appointments, Or Find The Right Treatment — All In One Place.</p>

      <div className="assistant-search">
        <input type="text" placeholder="Ask Your Concern here."/>
        <button className="search-btn">→</button>
      </div>

      <div className="assistant-buttons">
        <button className="outlined-btn">→ Book Appointment</button>
        <button className="outlined-btn">→ Find Specialist</button>
        <button className="outlined-btn">→ Emergency</button>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}
export default BotServices;