import image from "../images/photo.avif";
import morva from "../images/morva.svg";
import simply from "../images/simply.svg";
import fakturInvoice from "../images/faktur invoice.svg";
import rectangle from "../images/rectangle.svg";
import portafo from "../images/portafo.avif";
import subtleFolio from "../images/subtle folio.avif";
import Footer from "./footer";
import { Link } from "react-router-dom";

const BodyPartHome = () => {
  return (
    <div className="body-part-home">
      <div className="body-box">
        <p>
          <div className="grey-dot"></div>Product Designer
        </p>
        <div className="green-dot-hidden"></div>
        <div className="available-box">
          <div className="green-dot"></div> AVAILABLE FOR WORK
        </div>
      </div>

      <div className="intro-box">
        <div className="left">
          <p className="intro-p-big">I’m Brian Do</p>
          <p className="intro-p-small">
            Product designer from Jakarta, ID. <br />
            Currently designing at Rectangle.
          </p>
          <div>
            <Link to="hireMe">
              <button className="menu-btn">
                <span>+</span> Hire Me
              </button>
            </Link>

            <button className="menu-btn">
              <i className="fi fi-rr-copy" /> Copy Email
            </button>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="photo" />
        </div>
      </div>

      <div className="projects">
        <div className="projects-head">
          <p>
            <div className="grey-dot"></div>Product Designer
          </p>
          <Link to="./projects">
            <button className="view-btn">
              View All <i className="fi fi-rr-arrow-small-right"></i>
            </button>
          </Link>
        </div>
        <div className="projects-body">
          <div className="projects-box">
            <div className="projects-box-child">
              <div className="img-box">
                <img src={morva} alt="icons" />
              </div>

              <div className="projects-box-info">
                <p className="projects-box-info-p-big">Morva Labs</p>
                <p className="projects-box-info-p-small">
                  Visual Design, Branding
                </p>
              </div>
            </div>
            <i className="fi fi-rr-angle-small-right"></i>
          </div>

          <div className="projects-box">
            <div className="projects-box-child">
              <div className="img-box">
                <img src={rectangle} alt="icons" />
              </div>

              <div className="projects-box-info">
                <p className="projects-box-info-p-big">Rectangle</p>
                <p className="projects-box-info-p-small">
                  Product Design, Icon design
                </p>
              </div>
            </div>
            <i className="fi fi-rr-angle-small-right"></i>
          </div>

          <div className="projects-box">
            <div className="projects-box-child">
              <div className="img-box">
                <img src={simply} alt="icons" />
              </div>

              <div className="projects-box-info">
                <p className="projects-box-info-p-big">Simply</p>
                <p className="projects-box-info-p-small">
                  Landing Page, Illiustration design
                </p>
              </div>
            </div>
            <i className="fi fi-rr-angle-small-right"></i>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="projects-head">
          <p>
            <div className="grey-dot"></div>Products
          </p>
        </div>

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

          <div className="products-box">
            <div className="child-prod-box">
              <img src={subtleFolio} className="pr-imgs" alt="img" />
              <p className="products-box-p-big">Subtle Folio</p>
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

export default BodyPartHome;
