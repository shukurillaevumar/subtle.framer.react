import Footer from "./footer";

const hireMe = () => {
  return (
    <div className="hireMe">
      <div className="hireMe-div">
        <div className="hireMe-head">
          <p>
            <div className="grey-dot"></div>Hire Me
          </p>
          <div className="available-box">
            <div className="green-dot"></div> AVAILABLE FOR WORK
          </div>
        </div>

        <div className="hireMe-body">
          <div>
            <p className="hireMe-p-big">Design Inquiry</p>
            <p className="hireMe-p-small">
              Got an idea and need design help? Reach out now
            </p>
          </div>
          <form>
            <div className="input-group">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email Address" />
            </div>
            <textarea name="message" placeholder="Message" />
            <button type="submit" className="sub-btn">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default hireMe;
