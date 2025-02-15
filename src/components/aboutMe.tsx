import authPhoto from "../images/authPhoto.jpg";
import fakturInvoice from "../images/faktur invoice.svg";
import portafo from "../images/portafo.avif";
import Footer from "./footer";

const aboutMe = () => {
  return (
    <div className="aboutMe-container">
      <p className="sectionTitle">
        <div className="grey-dot"></div>About
      </p>
      <p className="aboutMe-title">It's Me Brian</p>
      <p className="aboutMe-subtitle">
        I'm Brian Do, a product designer with over 5 years of <br /> experience,
        currently residing in Jakarta, Indonesia. I have <br /> a deep passion
        for crafting purposeful interfaces and products. <br /> My main goal is
        to bridge the divide between people and <br /> technology, transforming
        intricate challenges into meaningful <br /> and seamless experiences.
      </p>

      <img className="authPhoto" src={authPhoto} alt="image" />

      <p className="aboutMe-title">More About Me</p>
      <p className="aboutMe-subtitle">
        Brian Do holds a bachelor's degree in Graphic Design from a prestigious
        university in the United States and has a relentless drive for staying
        up-to-date with the latest technologies and design trends. Actively
        involved in the design community, Brian regularly participates in
        diverse design conferences and meetups.
      </p>

      <p className="aboutMe-subtitle">
        When he's not immersed in design work, he finds solace in playing the
        guitar and exploring new coffee shops in his local area. Brian firmly
        believes in maintaining a healthy work-life balance, making sure to take
        breaks and reenergize his creativity. In his spare time, he also
        volunteers at a local animal shelter on weekends.
      </p>
      <p className="aboutMe-title">My Side Projects</p>
      <p className="aboutMe-subtitle">
        I did passion side projects in the weekend, please take a look you will
        love it (i hope).
      </p>

      <div className="products">
        <div className="producst-container">
          <div className="products-box">
            <div className="child-prod-box">
              <img src={portafo} className="pr-imgs" alt="img" />
              <p className="products-box-p-big">Portafo</p>
            </div>

            <div className="bot-child-prod-box">
              <div className="products-box-p-small">FRAMER TEMPLATE</div>
              <i className="fi fi-rr-link-alt"></i>
            </div>
          </div>

          <div className="products-box">
            <div className="child-prod-box">
              <img src={fakturInvoice} className="pr-imgs" alt="img" />
              <p className="products-box-p-big">Faktur Invoice</p>
            </div>

            <div className="bot-child-prod-box">
              <div className="products-box-p-small">FRAMER TEMPLATE</div>
              <i className="fi fi-rr-link-alt"></i>
            </div>
          </div>

          <div className="products-box">
            <div className="child-prod-box">
              <img src={portafo} className="pr-imgs" alt="img" />
              <p className="products-box-p-big">Goven</p>
            </div>

            <div className="bot-child-prod-box">
              <div className="products-box-p-small">FRAMER TEMPLATE</div>
              <i className="fi fi-rr-link-alt"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutMe;
