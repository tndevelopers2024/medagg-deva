import '../../assets/css/home/AppBooking.css';
import AppBook from '../../assets/image/AppBook.png';

    const AppBooking = () => {
        return(
            <div>
                <section className="appointment-section">
  <div className="appointment-container">
    <div className="appointment-left">
      <p className="subtitle">Are you looking to get a Consultation for your healthcare needs?</p>
      <h1 className="main-heading">Book Your Appointment with <br/>Experts Near You</h1>
      <form className="appointment-form">
        <input type="tel" placeholder="Enter Your Phone Number" required />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
    <div className="appointment-right">
      <img src={AppBook} alt="Doctor with patient" />
    </div>
  </div>
</section>
            </div>
        );
    }
    export default AppBooking;